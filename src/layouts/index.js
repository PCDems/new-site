import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar";
import "./all.sass";

const TemplateWrapper = ({ children, location }) => (
  <div>
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <Navbar path={location.pathname} />
    <div>{children()}</div>
    {location.pathname != "/join" && (
      <div>
        <div />
      </div>
    )}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export const pageQuery = graphql`
  query TemplateQuery {
    allMarkdownRemark(
      filter: { frontmatter: { uniq: { eq: "footer-index" } } }
    ) {
      edges {
        node {
          frontmatter {
            paidForMessage
          }
        }
      }
    }
  }
`;

export default TemplateWrapper;
