# rabbitmq-nodejs

A sample of how to use rabbitmq in nodejs as a communication mechanism for apps conversation like microservices.

RabbitMQ use MAQP protocols that support many languages and frameworks.
Nodejs is one the client can connect to MAQP!

#### Instruction

1. Run this following command:
   `docker run --name rabbitmq -p 5672:5672 rabbitmq`
   NOTE: 5672 is `RabbitMQ` port
2. Install dependecies
   `npm i`
3. Run Publisher to create a random object with two properties:
   `npm run publish`
4. Run Consumer that recieve object from queue and dequeue the object:
   `npm run consume`

#### Publisher

1. use MAQP Protocol
   `const amqp = require('amqplib')`
2. create a connection (this is a async func)
   `const connection = amqp.connect("amqp://localhost");`
3. build a channel
   `const channel = await connection.createChannel()`
4. Check the queue existence, otherwise, create it!
   `channel.assertQueue(QUEUES.JOBS);`
5. finally you can send the message to queue
   `channel.sendToQueue(QUEUES.JOBS, dataMessage)`

#### COnsumer

1. use MAQP Protocol
   `const amqp = require('amqplib')`
2. create a connection (this is a async func)
   `const connection = amqp.connect("amqp://localhost");`
3. build a channel
   `const channel = await connection.createChannel()`
4. Check the queue existence, otherwise, create it!
   `channel.assertQueue(QUEUES.JOBS);`
5. listen the queue and get message whenever it queued
   `channel.consume(QUEUES.JOBS, job => {...})`
6. dequeue the message by `ack` function
   `channel.ack(job);`
