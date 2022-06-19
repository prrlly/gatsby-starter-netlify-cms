import React,  { useState }  from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  const heroImage = getImage(image) || image;
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const subscribe = () => {
    console.log(value)
  };
  return (
    <div>
      <section className="section section--gradient about">
      <div className="container">
        <div className="header">
          <div className="header-left">
            <h2 className="title">PRINCIPLE <span className="title-right">VENTURES</span></h2>
            <div className="desc">EXPLORING PHRONESIS IN <span className="desc-right">DIGITAL INNOVATION</span></div>
          </div>
          <div className="form">
            <div className="font">
              <div className="formTitle">Subscribe to our publications</div>
              <input
                className="aboutInput"
                type={"text"}
                value={value}
                name={"subscribe"}
                onChange={(e)=>{handleChange(e)}}
                id={"subscribe"}
              />
              <div className="aboutButton" onClick={()=>{subscribe()}}> Subscribe</div>
            </div>
            <div className="absolute"></div>
          </div>
        </div>
        <div className="description">Principle Ventures is a native Web3 firm based on data-driven research and BUILD-focused practice, mainly active in crypto innovation investment and digital assets management. We co-build the digital future together with the brightest minds in the industry, support mission-driven builders for excellent engineering and networking, and assist teams strategically in whole growth for a long-term success. We partner with teams to explore possibilities in the full Web3 stack powered by crypto technologies. </div>
         
      </div>
    </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
