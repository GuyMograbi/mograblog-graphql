const logging = require('loglevel');
logger = logging.getLogger('server');
logger.setLevel(logging.levels.INFO)
const express = require('express');
const { graphql, buildSchema } = require('graphql');

const app = express();


process.on('uncaughtException', (e) => {
    console.error(`uncaught exception occurred`, e);
});

process.on('unhandledRejection', (e) => {
    console.error(`unhandled rejection occurred`, e);
});

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
    hello: () => {
        return 'Hello world!';
    },
};

// Run the GraphQL query '{ hello }' and print out the response
graphql(schema, '{ hello }', root).then((response) => {
    console.log(response);
});


logger.info('starting server');

const port = 3360;
const server = app.listen(port, () => {
    console.log(server.address().port);
    logger.info('listening');
});
