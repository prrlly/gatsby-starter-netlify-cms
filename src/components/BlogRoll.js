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
    const list = [
      {
        title: 'Principle’s first article, Principle’s first article,',
        team: 'Principle Team',
        data: 'May 29'
      },
      {
        title: 'Principle’s first article, Principle’s first article,',
        team: 'Principle Team',
        data: 'May 29'
      },
      {
        title: 'Principle’s first article, Principle’s first article,',
        team: 'Principle Team',
        data: 'May 29'
      },
      {
        title: 'Principle’s first article, Principle’s first article,',
        team: 'Principle Team',
        data: 'May 29'
      },
    ]
    const rightList = [
      {
        'img': ItemImg,
        'name':'Savage Dogs',
        'time':'1 hour ago',
        'altName':'@asdddjhhasd',  
        'desc':'Big news. Stop running #StepN shoes! Better use this method, it will count your steps, while you will be sitting at home. Check out the video✅',  
      },
      {
        'img': ItemImg,
        'name':'Savage Dogs',
        'time':'1 hour ago',
        'altName':'@asdddjhhasd',  
        'desc':'Big news. Stop running #StepN shoes! Better use this method, it will count your steps, while you will be sitting at home. Check out the video✅',  
      },
      {
        'img': ItemImg,
        'name':'Savage Dogs',
        'time':'1 hour ago',
        'altName':'@asdddjhhasd',  
        'desc':'Big news. Stop running #StepN shoes! Better use this method, it will count your steps, while you will be sitting at home. Check out the video✅',  
        'bigImg': ItemImg
      },

    ]
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
                    <Link to={item.node.fields.slug}>
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
            <div className="form">
              {
                rightList.map((item)=>{
                  return (
                    <div className="form-item">
                      <div className="form-item-left">
                        <img
                          src={item.img}
                          alt="left"
                        />
                      </div>
                      <div className="form-item-right">
                        <div className="form-item-right-header">
                          <div className="form-item-name">{item.name}</div>
                          <div className="form-item-time">{item.time}</div>
                        </div>
                        <div className="form-item-altName">{item.altName}</div>
                        <div className="form-item-desc">
                            {item.desc}
                        </div>
                        {
                          item.bigImg?
                          <div className="form-item-bigImg">
                              <img
                              src={item.bigImg}
                              alt="bigImg"
                            />
                          </div>
                          :null
                        }
                      </div>
                    </div>
                  )
                })
              }
              <div className="form-button">Read 212 replies</div>
            </div>
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
