import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import right from "../img/social/right-arrow.png";
import ReactPaginate from 'react-paginate';

const BlogRollTemplate = (props) => {
  const { data } = props
  const { edges: posts } = data.allMarkdownRemark
  console.log(posts)
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [pageNumber, setPageNumber] = useState();
  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + 5;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(posts.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(posts.length / 5));
  }, [itemOffset]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    setPageNumber(event.selected)
    const newOffset = (event.selected * 5) % posts.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <section className="section writing">
    <div className="container">
      <div className="header">
        <div className="header-left">
          <div className="header-left-title">Writing</div>
          <div className="header-left-line"></div>
          {
            currentItems && currentItems.map((item)=>{
              const frontmatter = item.node.frontmatter
              return (
                  <div
                    className="header-left-item"
                    style={{ display: frontmatter.isShow ? "block" :"none" }}
                  > 
                    <Link target='_blank' to={frontmatter.external || item.node.fields.slug}>
                      <div className="header-left-item-title font-roboto"> 
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
          {posts.length > 5 && (
            <div className='pagenation-content'>
              <span style={{cursor: "pointer" }} onClick={() => {
                setItemOffset(0)
                setPageNumber(0)
              }}>{`<<`}</span>
              <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                forcePage={pageNumber}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                className="pagenation-wraper"
                previousClassName="pagenation-previous"
                nextClassName="pagenation-next"
              />
              <span style={{cursor: "pointer" }} onClick={() => {
                const pageNumber = Math.floor(posts.length / 5)
                setItemOffset(pageNumber)
                setPageNumber(pageNumber)
              }}>{`>>`}</span>
            </div>

          )}

          {/* <div className="header-left-more">Read more..</div> */}
        </div>
        <div className='header-right'>
          <a className="twitter-timeline"
            href="https://twitter.com/PrincipleVC"
            data-width="100%"
            data-height="100%"
            data-tweet-limit="5"
          >
          Tweets by @PrincipleVC
          </a>
        </div>
      </div>
    </div>
  </section>
  )
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
