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
    fetch(`/.netlify/functions/subscribe?email=${value}`)
      .then(response => response.json())
      .then((res) => {
        if (res.status === "OK") {
          alert("subscribe success")
        }
      })
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
    </Layout>
  );
};

export default IndexPage;
