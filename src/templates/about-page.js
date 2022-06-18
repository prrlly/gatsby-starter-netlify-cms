import React,  { useState } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const AboutPageTemplate = () => {
  // const PageContent = contentComponent || Content;
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const subscribe = () => {
    console.log(value)
  };
  
  return (
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
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
