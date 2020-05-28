const amqp = require('amqplib');
const QUEUES = {
    JOBS: 'JOBS',
};

const message = { name: 'siavash', age: 32 };

async function connect() {
    try {
        // this is a tcp connection
        const connection = await amqp.connect('amqp://localhost:5672');
        const channel = await connection.createChannel();
        // is queue exist, otherwise create it!
        const dataMessage = Buffer.from(JSON.stringify(message));
        const queue = await channel.assertQueue(QUEUES.JOBS);
        channel.sendToQueue(QUEUES.JOBS, dataMessage);
        console.log('Object has benn sent.');
        connection.close();
    } catch (error) {
        console.log(error);
    }
}

connect();
