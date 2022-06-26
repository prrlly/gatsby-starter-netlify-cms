import React,  { useState }  from "react";
import PropTypes from "prop-types";

import Layout from "../components/Layout";


const IndexPage = ({ data }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const subscribe = () => {
    console.log(value)
  };
  return (
    <Layout>
      <section className="section section--gradient about">
      <div className="container">
        <div className="header">
          <div className="header-left">
            <h2 className="title">PRINCIPLE <span className="title-right">VENTURES</span></h2>
            <div className="desc">EXPLORING PHRONESIS IN <span className="desc-right">DIGITAL INNOVATION</span></div>
          </div>
          <form className="form" action="https://icloud.us8.list-manage.com/subscribe/post?u=66b5df89b3c7f3d1fbe73f555&amp;id=23b4ecb68f" >
            <div className="font">
              <div className="formTitle">Subscribe to our publications</div>
              <input
                type="email"
                name="EMAIL"
                className="aboutInput"
                id="mce-EMAIL"
              />
              <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="aboutButton" ></input>
            </div>
            <div className="absolute"></div>
          </form>
        </div>
        <div className="description">Principle Ventures is a native Web3 firm based on data-driven research and BUILD-focused practice, mainly active in crypto innovation investment and digital assets management. We co-build the digital future together with the brightest minds in the industry, support mission-driven builders for excellent engineering and networking, and assist teams strategically in whole growth for a long-term success. We partner with teams to explore possibilities in the full Web3 stack powered by crypto technologies. </div>
         
      </div>
    </section>
    </Layout>
  );
};

export default IndexPage;
