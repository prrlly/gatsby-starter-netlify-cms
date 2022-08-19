import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./all.sass";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`https://principle.ventures/img/apple-touch-icon.png?v=3`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`https://principle.ventures/img/favicon-32x32.png?v=3`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`https://principle.ventures/img/favicon-16x16.png?v=3`}
          sizes="16x16"
        />

        <meta name="theme-color" content="#fff" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:url" content="https://principle.ventures/" />
        <meta name="twitter:image" content={`https://principle.ventures/img/og-image.png?t=1`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="https://principle.ventures/" />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content={`https://principle.ventures/img/og-image.png?t=1`}
        />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
