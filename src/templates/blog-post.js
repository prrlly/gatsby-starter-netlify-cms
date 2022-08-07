import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import right from "../img/social/right-arrow.png";
import { Router, Location, navigate} from "@reach/router"
// eslint-disable-next-line
export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
  date,
  author
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content" style={{ paddingTop: "120px" }}>
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div onClick={() => navigate(-1)} style={{ paddingTop: "6px", fontSize: "20px", display: "flex", alignItems: "center", color: "#78599E", cursor: "pointer" }}><img style={{ transform: "rotate(180deg)", marginRight: "8px" }} src={right} /></div>
            <h1 className="font-roboto title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <div style={{ marginBottom: "18px", color: "#78599E" }}>
              <div>{date}</div>
              <div>{author}</div>
            </div>
            <p>{description}</p>
            <PostContent content={content} />
          </div>
        </div>
      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        author={post.frontmatter.author}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        author
      }
    }
  }
`;
