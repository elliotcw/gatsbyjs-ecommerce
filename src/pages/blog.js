import React from 'react';
import graphql from 'graphql';
import ReactGA from 'react-ga';

import config from '../config';
import Heading from '../components/Heading';
import BlogItem from '../components/BlogItem';
import Seo from '../components/Seo';

export default class Blog extends React.Component {
  componentDidMount() {
    ReactGA.pageview('/blog');
  }

  render() {
    const { data } = this.props;
    // TODO: add in blog posts
    const posts = []; // data.allMediumPost.edges;

    return (
      <div className="section">
        <Seo
          title="Blog"
          description="Read our latest news"
          url={`${config.siteUrl}/blog`}
        />
        <Heading>Our Blog</Heading>
        <div className="columns is-multiline is-gapless">
          <div className="column is-half">
            {posts.map(({ node }) => (
              <BlogItem data={node} key={node.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

// export const blogQuery = graphql`
//   query Blogs {
//     allMediumPost(sort: { fields: [createdAt], order: DESC }) {
//       edges {
//         node {
//           id
//           title
//           uniqueSlug
//           virtuals {
//             subtitle
//             totalClapCount
//             previewImage {
//               imageId
//             }
//           }
//           author {
//             name
//           }
//           createdAt
//           updatedAt
//         }
//       }
//     }
//   }
// `;
