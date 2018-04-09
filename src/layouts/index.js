import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Container from '../components/Container';
import './index.css';

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
      ]}
    />
    <Container>{children()}</Container>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;

export const query = graphql`
  query TemplateQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
