const fastifyPlugin = require("fastify-plugin");

module.exports =  fastifyPlugin((fastify, options, next) => {
  //console.log(fastify);
  fastify.get("/", (req, reply) => {
    return reply.sendFile("index.html");
  });

  fastify.route({
    method: 'GET',
    url: "/create-account",
    handler: function(req, reply) {
      reply.sendFile("html/createAccount.html");
    }
  })

  next();
});