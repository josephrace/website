import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Layout from '../components/Layout';

const IndexPage = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          links {
            github
            linkedin
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <div className="container" style={{ marginTop: '100px' }}>
        <h1 className="title">{siteMetadata.title}</h1>
        <h2 className="subtitle">
          Full-stack web developer with a front-end focus.
        </h2>
        <p>
          Find me on{' '}
          <OutboundLink href={siteMetadata.links.github}>GitHub</OutboundLink>{' '}
          or{' '}
          <OutboundLink href={siteMetadata.links.linkedin}>
            LinkedIn
          </OutboundLink>
        </p>
      </div>
    </Layout>
  );
};

export default IndexPage;
