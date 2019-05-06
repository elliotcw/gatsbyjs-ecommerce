# Every Day Organic

Required API for mutations can be found in [API branch](https://github.com/perminder-klair/gatsbyjs-ecommerce/tree/api)

More info about this written here for better understanding [Creating Static E-commerce site with GatsbyJs](https://medium.com/@pinku1/creating-static-e-commerce-site-with-gatsbyjs-a349d7e022a)

## Stack

- [GatsbyJs](https://www.gatsbyjs.org/)
- [React.js](https://reactjs.org/)
- [Apollo GraphQL](https://www.apollographql.com/)

## To use

- Fork or download this repository
- Ready!

To change site config `./src/config/index.js`

also add `.env` file in the root, with content for example:

```
CONTENTFUL_SPACE_ID=YOUR_KEY_HERE
CONTENTFUL_DELIVERY_API_TOKEN=YOUR_KEY_HERE
STRIPE_PUBLISHABLE_KEY=YOUR_KEY_HERE
```

## Setup

Run:

```
npm install
```

## Development

To start development server

```
npm start
```

## Deployment

```
npm run build
npm serve
```
