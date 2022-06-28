import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import ItemImg from "../img/social/item-img.jpeg";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

// eslint-disable-next-line
export const ProductPageTemplate = ({frontmatter}) => {
  const list = [
    {
      image: ItemImg,
      text: 'Alchemix'
    },
    {
      image: ItemImg,
      text: 'Alchemix'
    },    
    {
      image: ItemImg,
      text: 'Alchemix'
    },    
    {
      image: ItemImg,
      text: 'Alchemix'
    },    
    {
      image: ItemImg,
      text: 'Alchemix'
    },    
    {
      image: ItemImg,
      text: 'Alchemix'
    },    
    {
      image: ItemImg,
      text: 'Alchemix'
    },
  ]

  const list1 = [
    {
      image: ItemImg,
      text: 'Alchemix'
    },
    {
      image: ItemImg,
      text: 'Alchemix'
    },    
    {
      image: ItemImg,
      text: 'Alchemix'
    },    
    {
      image: ItemImg,
      text: 'Alchemix'
    },    
    {
      image: ItemImg,
      text: 'Alchemix'
    },    
    {
      image: ItemImg,
      text: 'Alchemix'
    },    
    {
      image: ItemImg,
      text: 'Alchemix'
    },
  ]
  return (
    <div className="content portfolio">
      <section className="container ">
        <div className="portfolio-title">
          <div className="portfolio-titleText">Crypto Master Fund</div>
          <div className="portfolio-line"></div>
        </div>
        <div className="portfolio-list">
          {/* {
            frontmatter.CryptoMasterFund.list.map(item=>{
            // list.map(item=>{
              return (
                <div className="portfolio-item">
                  <div className="portfolio-item-top">  
                    <GatsbyImage
                      className="portfolio-item-img"
                      image={item.image.childImageSharp.gatsbyImageData}
                      alt="img"
                    />
                  </div>
                  <div>{item.text}</div>
                </div>
              )
            })
          } */}
        </div>
        <div className="portfolio-title">
          <div className="portfolio-titleText">Non-Fungible Collective</div>
          <div className="portfolio-line"></div>
        </div>
        <div className="portfolio-list">
          {/* {
            frontmatter.NonFungibleCollective.list.map(item=>{
            // list1.map(item=>{
              return (
                <div className="portfolio-item">
                  <div className="portfolio-item-top">  
                  <GatsbyImage
                      className="portfolio-item-img"
                      image={item.image.childImageSharp.gatsbyImageData}
                      alt="img"
                    />
                  </div>
                  <div>{item.text}</div>
                </div>
              )
            })
          } */}
        </div>
      </section>
    </div>
  );
};

ProductPageTemplate.propTypes = {

};

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <ProductPageTemplate frontmatter={frontmatter}/>
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

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        description
      }
    }
  }
`;
