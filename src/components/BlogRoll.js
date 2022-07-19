import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import right from "../img/social/right-arrow.png";
import ItemImg from "../img/social/item-img.jpeg";

class BlogRollTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    console.log(posts)
    return (
      <section className="section writing">
        <div className="container">
          <div className="header">
            <div className="header-left">
              <div className="header-left-title">Writing</div>
              <div className="header-left-line"></div>
              {
                posts.map((item)=>{
                  const frontmatter = item.node.frontmatter
                  return (
                    
                      <div className="header-left-item" style={{ display: frontmatter.isShow ? "block" :"none" }}> 
                        <Link target='_blank' to={frontmatter.external || item.node.fields.slug}>
                          <div className="header-left-item-title"> 
                            {frontmatter.title}
                          </div>
                        </Link>
                        <div className="header-left-item-content">
                          <div>
                            <div>{frontmatter.author}</div>
                            <div>{frontmatter.date}</div>
                          </div>
                          <div>
                          <Link target='_blank' to={frontmatter.external || item.node.fields.slug}>
                            <img
                              src={right}
                              alt="right"
                            />
                          </Link>
                          </div>
                        </div>
                      </div>
                  )
                })
              }
              {/* <div className="header-left-more">Read more..</div> */}
            </div>
            <a class="twitter-timeline"
              href="https://twitter.com/PrincipleVC"
              data-width="40%"
              data-height="40%"
              data-tweet-limit="5"
            >
            Tweets by @PrincipleVC
            </a>
          </div>
        </div>
      </section>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function BlogRoll() {
  return (
    <StaticQuery
      query={graphql`
        query BlogRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  author
                  templateKey
                  external
                  date(formatString: "MMMM DD, YYYY")
                  isShow
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <BlogRollTemplate data={data} count={count} />}
    />
  );
}
