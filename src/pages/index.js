import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const IndexPage = ({ data }) => {
  const { siteMetadata } = data.site;
  const { links } = siteMetadata;

  return (
    <div style={{ marginTop: '100px' }}>
      <h1>{siteMetadata.title}</h1>
      <p>
        Web Developer specialising in Front-End Development & JavaScript
        Full-Stack.
      </p>
      <p>
        Find me on <OutboundLink href={links.twitter}>Twitter</OutboundLink>,{' '}
        <OutboundLink href={links.github}>GitHub</OutboundLink> or{' '}
        <OutboundLink href={links.linkedin}>LinkedIn</OutboundLink>
      </p>
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        links {
          twitter
          github
          linkedin
        }
      }
    }
  }
`;
