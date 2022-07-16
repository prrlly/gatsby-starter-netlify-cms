import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

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
                <div className="portfolio-item">
                  <div className="portfolio-item-top">
                    {frontmatter.image.childImageSharp ? (
                      <GatsbyImage
                        className="portfolio-item-img"
                        image={frontmatter.image.childImageSharp.gatsbyImageData}
                        alt="img"
                      />
                    ) : <img src={frontmatter.image.publicURL} />}
                  </div>
                  <div>{frontmatter.name}</div>
                </div>
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
                <div className="portfolio-item">
                  <div className="portfolio-item-top">  
                  <GatsbyImage
                      className="portfolio-item-img"
                      image={frontmatter.image.childImageSharp.gatsbyImageData}
                      alt="img"
                    />
                  </div>
                  <div>{frontmatter.name}</div>
                </div>
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
            image {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: FULL_WIDTH)
              }
              publicURL
            }
          }
        }
      }
    }
  }
`;
