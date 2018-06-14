import React from "react";
import PropTypes from "prop-types";
import Content, { HTMLContent } from "../components/Content";
import Candidate from "../components/Candidate";

export const CandidatePageTemplate = ({ candidates }) => {
  const candidate_rows = candidates.chunk(3);
  return (
    <div className="container">
      {candidate_rows.map(candidates => (
        <div className="row">
          {candidates.map((props, i) => (
            <div className="four columns">
              <Candidate key={i} {...props} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

CandidatePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  hed: PropTypes.string.isRequired,
  subhed: PropTypes.string.isRequired,
  bgimg: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const CandidatePage = ({ data }) => {
  const { allMarkdownRemark: { edges } } = data;
  const candidates = edges.map(edge => edge.node.frontmatter);

  return <CandidatePageTemplate candidates={candidates} />;
};

CandidatePage.propTypes = {
  data: PropTypes.object.isRequired
};

export default CandidatePage;

export const pageQuery = graphql`
  query CandidateQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "candidate-fragment" } } }
    ) {
      edges {
        node {
          frontmatter {
            firstName
            lastName
            electionType
            incumbent
            district
            state
            electionDate
            image
            website
            donationLink
            outcome
            office
          }
        }
      }
    }
  }
`;

Array.prototype.chunk = function(n) {
  if (!this.length) {
    return [];
  }
  return [this.slice(0, n)].concat(this.slice(n).chunk(n));
};
