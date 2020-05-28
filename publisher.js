const amqp = require('amqplib');
const { QUEUES } = require('./queues');

async function connect() {
    try {
        // this is a tcp connection
        const connection = await amqp.connect('amqp://localhost:5672');
        const channel = await connection.createChannel();
        // is queue exist, otherwise create it!
        const queue = await channel.assertQueue(QUEUES.JOBS);

        const object = {
            id: Math.floor(Math.random() * 1000) + 1000,
            age: Math.floor(Math.random() * 100) + 1,
        };
        const dataMessage = Buffer.from(JSON.stringify(object));

        channel.sendToQueue(QUEUES.JOBS, dataMessage);

        console.log(`Object:`, object, ' has been sent.');
    } catch (error) {
        console.log(error);
    }
}

connect();
