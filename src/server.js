// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true,
});
const path = require('path');

// Regsiter 'fastify-static' plugin
fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/public/', // optional: default '/'
});

fastify.get('/', (request, reply) => {
  return reply.sendFile('index.html');
});

// Declare a route
// eslint-disable-next-line no-unused-vars
fastify.get('/about', async (request, reply) => {
  return { about: 'Somnath Pathak' };
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
