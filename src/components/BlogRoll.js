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
                    <Link to={frontmatter.external || item.node.fields.slug}>
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
            <blockquote class="twitter-tweet" data-theme="light"><p lang="en" dir="ltr">To celebrate the Writing NFT launch as a paradigm shift of quantifiable writing value, we collected some of articles via NFT by some influenced builders in the industry at launch, and would like to share the list here for anyone who&#39;re also interested: <a href="https://t.co/gKqoobkjCN">https://t.co/gKqoobkjCN</a></p>&mdash; Principle Ventures (@PrincipleVC) <a href="https://twitter.com/PrincipleVC/status/1529840713730490369?ref_src=twsrc%5Etfw">May 26, 2022</a></blockquote> 
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
