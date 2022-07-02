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
                    <Link target='_blank' to={frontmatter.external || item.node.fields.slug}>
                    <div className="header-left-item"> 
                      <div className="header-left-item-title"> 
                        {frontmatter.title}
                      </div>
                      <div className="header-left-item-content">
                        <div>
                          <div>{frontmatter.author}</div>
                          <div>{frontmatter.date}</div>
                        </div>
                        <div>
                          <img
                            src={right}
                            alt="right"
                          />
                        </div>
                      </div>
                    </div>
                    </Link>
                  )
                })
              }
              <div className="header-left-more">Read more..</div>
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
                  featuredpost
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(
                        width: 120
                        quality: 100
                        layout: CONSTRAINED
                      )

                    }
                  }
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
