import React,  { useState }  from "react";
import PropTypes from "prop-types";

import Layout from "../components/Layout";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
          toast.success("Success! ")
        }
      })
      .catch(() => {
        toast.error("Please try again")
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
        <div className="description"><b>Principle Ventures</b> is a native Web3 firm based on research-driven practice for innovation fabric building, more active in crypto innovation investment and digital assets management. We co-build the digital future together with the brightest minds in the industry, support mission-driven founders working on outstanding engineering and constructive networking,  assist teams strategically in whole growth for a long-term success. We partner with teams as a tech outpost to explore possibilities in the full Web3 stack powered by crypto technologies.</div>
         
      </div>
    </section>
    <ToastContainer />
    </Layout>
  );
};

export default IndexPage;
