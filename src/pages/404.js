import * as React from "react";
import { Link } from 'gatsby'
import Layout from "../components/Layout";

const NotFoundPage = () => (
  <Layout>
    <div className="content back container">
      <h1>NOT FOUND</h1>
      <Link to='/'>
        <p className="backButton">Back</p>
      </Link>
    </div>
  </Layout>
);

export default NotFoundPage;
