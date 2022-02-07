const fastify = require("fastify")({logger: true});
const fastifyStatic = require("fastify-static");
const path = require('path');
const router = require("./routes");

console.log([__dirname.split("/server")].join("").slice(0, -1));

fastify.register(fastifyStatic, {
  root: path.join(__dirname.slice(0, -7), 'client'),
  prefix: '/'
});
fastify.register(router);


const start = async () => {
  try {
    await fastify.listen(4444);
    //await fastify.log.info(`Server running on port: ${fastify.server.address().port }`)
  } catch(error){
    await fastify.log.error(error);
    process.exit(1);
  }
}

start();