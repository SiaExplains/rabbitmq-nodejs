const amqp = require('amqplib');
const { QUEUES } = require('./queues');

async function connect() {
    const connection = await amqp.connect('amqp://localhost:5672');
    const channel = await connection.createChannel();
    const queue = channel.assertQueue(QUEUES.JOBS);

    channel.consume(QUEUES.JOBS, (job) => {
        let data = JSON.parse(job.content);
        console.log(data);
        channel.ack(job);
    });

    console.log('Waiting for the message!');
}

connect();
