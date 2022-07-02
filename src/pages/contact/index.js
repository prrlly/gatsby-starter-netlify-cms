import * as React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";
import email from "../../img/social/email.svg";
import xyz from "../../img/social/xyz.svg";
import twitter from "../../img/social/twitter.svg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// function encode(data) {
//   return Object.keys(data)
//     .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//     .join("&");
// }

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  submit = () => {
    console.log(this.state)
    fetch(`/.netlify/functions/contact?email=${this.state.email}&&first_name=${this.state.first_name}&&last_name=${this.state.last_name}&&message=${this.state.message}`)
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

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: encode({
  //       "form-name": form.getAttribute("name"),
  //       ...this.state,
  //     }),
  //   })
  //     .then(() => navigate(form.getAttribute("action")))
  //     .catch((error) => alert(error));
  // };

  render() {
    return (
      <Layout>
        <section className="section contact">
          <div className="container">
            <div className="header">
              <div className="header-left">
                <div className="header-left-title">Email</div>
                <div className="header-left-line"></div>
                <div className="header-left-link">
                  <img
                    src={email}
                    alt="email"
                  />
                  <div><a style={{ color: "#494949" }} href="mailto:contact@principle.ventures">contact@principle.ventures</a></div>
                </div>
                <div className="header-left-title marginTop">Social</div>
                <div className="header-left-line"></div>
                <div className="header-left-link marginBottom">
                  <img
                    src={twitter}
                    alt="twitter"
                  />
                  <div><a style={{ color: "#494949" }} href="https://twitter.com/PrincipleVC" target="_blank">https://twitter.com/PrincipleVC</a></div>
                </div>
                <div className="header-left-link">
                  <img
                    src={xyz}
                    alt="xyz"
                  />
                  <div><a style={{ color: "#494949" }} href="https://1.mirror.xyz/" target="_blank">https://1.mirror.xyz/</a></div>
                </div>
              </div>
              <div className="form">
                <div className="font">
                  <div className="formTitle">Contact</div>
                  <div className="formName">
                    <div className="firstName">
                      <div className="inputTitle">First Name</div>
                      <input
                        className="aboutInput"
                        type={"text"}
                        name={"first_name"}
                        onChange={(e)=>{this.handleChange(e)}}
                        id={"first_name"}
                      />
                    </div>
                    <div className="lastName">
                      <div className="inputTitle">Last Name</div>
                      <input
                        className="aboutInput"
                        type={"text"}
                        name={"last_name"}
                        onChange={(e)=>{this.handleChange(e)}}
                        id={"last_name"}
                      />
                    </div>
                  </div>
                  <div className="email">
                    <div className="inputTitle">Email Address</div>
                    <input
                      className="emailInput"
                      type={"text"}
                      name={"email"}
                      onChange={(e)=>{this.handleChange(e)}}
                      id={"email"}
                    />
                  </div>
                  <div className="messageName">
                    <div className="inputTitle">Message</div>
                    <textarea
                      className="messageInput"
                      name={"message"}
                      onChange={(e)=>{this.handleChange(e)}}
                      id={"message"}
                    />
                  </div>
                  <div className="contactButton" onClick={()=>{this.submit()}}>Submit</div>
                </div>
                {/* <div className="absolute"></div> */}
              </div>
            </div>
          </div>
        </section>
        <ToastContainer />
      </Layout>
    );
  }
}
