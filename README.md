# rabbitmq-nodejs

A sample of how to use rabbitmq in nodejs as a communication mechanism for apps conversation like microservices.

RabbitMQ use MAQP protocols that support many languages and frameworks.
Nodejs is one the client can connect to MAQP!

Instruction:

1. Run this following command:
   `docker run --name rabbitmq -p 5672:5672 rabbitmq`

    NOTE: 5672 is `RabbitMQ` port

2. Install dependecies
   `npm i`

3. use MAQP Protocol
   `const amqp = require('amqplib')`

4. create a connection (this is a async func)
   `const connection = amqp.connect("amqp://localhost");`
