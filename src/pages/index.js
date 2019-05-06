import React from 'react';
import ReactGA from 'react-ga';
import { first } from 'underscore';

import config from '../config/index';
import Seo from '../components/Seo';
import HomeBanner from '../components/HomeBanner';
import ProductsList from '../components/ProductsList';
import HomeAbout from '../components/HomeAbout';
import ScrollButton from '../components/ScrollButton';

export default class IndexPage extends React.Component {
  componentDidMount() {
    ReactGA.pageview('/');
  }

  render() {
    const {
      data: { allContentfulProduct: products, contentfulHome: home },
    } = this.props;
    // TODO: put currencies back in
    // const currencies = first(currency.edges).node;
    // console.log('currencies', currencies);

    return (
      <React.Fragment>
        <Seo
          title="Every Day Organic"
          description="Owner sourced organic food at great prices"
          url={config.siteUrl}
        />
        <HomeBanner data={home} />
        <ProductsList products={products.edges} />
        <HomeAbout data={home} />
      </React.Fragment>
    );
  }
}

export const indexQuery = graphql`
  query Products {
    allContentfulProduct(
      filter: { status: { eq: "active" } }
      sort: { fields: [listingOrder], order: ASC }
    ) {
      edges {
        node {
          id
          title
          slug
          color
          originalPrice
          discountPrice
          featuredImage {
            title
            sizes(maxWidth: 550) {
              ...GatsbyContentfulSizes
            }
          }
        }
      }
    }
    contentfulHome {
      homeSliderTitle
      homeSliderSubTitle
      homeSliderImage {
        title
        sizes(maxWidth: 550) {
          ...GatsbyContentfulSizes
        }
      }
      homeIntro {
        childMarkdownRemark {
          html
        }
      }
    }
    allDataJson {
      edges {
        node {
          GBP_CAD {
            val
          }
          GBP_INR {
            val
          }
        }
      }
    }
  }
`;
