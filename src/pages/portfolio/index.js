import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { Link } from 'gatsby'
// eslint-disable-next-line
export const ProductPageTemplate = ({list}) => {
  console.log("list", list)
  const CryptoMasterFund = list.filter(item => item.node.frontmatter.type === "Crypto Master Fund")
  const NonFungibleCollective = list.filter(item => item.node.frontmatter.type === "Non-Fungible Collective")

  return (
    <div className="content portfolio">
      <section className="container ">
        <div className="portfolio-title">
          <div className="portfolio-titleText">Crypto Master Fund</div>
          <div className="portfolio-line"></div>
        </div>
        <div className="portfolio-list">
          {
            CryptoMasterFund.map(item=>{
              const { frontmatter } = item.node
              return (
                <Link target='_blank' to={frontmatter.Link}>
                  <div className="portfolio-item">
                    <div className="portfolio-item-top">
                      <img src={frontmatter.image.publicURL} />
                    </div>
                    <div>{frontmatter.name}</div>
                  </div>
                </Link>
              )
            })
          }
        </div>
        <div className="portfolio-title">
          <div className="portfolio-titleText">Non-Fungible Collective</div>
          <div className="portfolio-line"></div>
        </div>
        <div className="portfolio-list">
          {
            NonFungibleCollective.map(item=>{
              const { frontmatter } = item.node
              return (
                <Link target='_blank' to={frontmatter.Link}>
                  <div className="portfolio-item">
                    <div className="portfolio-item-top">
                    <img src={frontmatter.image.publicURL} />
                    {/* <GatsbyImage
                        className="portfolio-item-img"
                        image={frontmatter.image.childImageSharp.gatsbyImageData}
                        alt="img"
                      /> */}
                    </div>
                    <div>{frontmatter.name}</div>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </section>
    </div>
  );
};

ProductPageTemplate.propTypes = {

};

const ProductPage = ({ data }) => {
  const list = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <ProductPageTemplate list={list} />
    </Layout>
  );
};

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ProductPage;

export const portfolioPageQuery = graphql`
  query PortfolioPage {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "portfolio-page"}}}) {
      edges {
        node {
          id
          frontmatter {
            name
            type
            Link
            image {
              childImageSharp {
                gatsbyImageData(
                  height: 120
                  quality: 100
                  layout: CONSTRAINED
                )
              }
              publicURL
            }
          }
        }
      }
    }
  }
`;
