import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";
import { PageTemplate } from "../../templates/PageTemplate";
import { HTMLContent } from "../../components/Content";

const EmbededAirtable = () => (
  <iframe
    className="airtable-embed airtable-dynamic-height"
    src="https://airtable.com/embed/shr5nBY7UkLhrqj4R?backgroundColor=yellow"
    width="100%"
    height="1867"
    className="request-supplies__StyledFrame-ybe9hf-0 diKYNp"
  ></iframe>
);

const RequestSupplies = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <PageTemplate
        // contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        EmbededAirtable={EmbededAirtable}
      />
    </Layout>
  );
};

RequestSupplies.propTypes = {
  data: PropTypes.object.isRequired,
  EmbedComponent: PropTypes.node
};

export default RequestSupplies;

export const RequestSuppliesQuery = graphql`
  query RequestSupplies($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;