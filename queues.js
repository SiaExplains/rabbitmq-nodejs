// in a real-world example we should consider this file as a external js-library that let either consumer and publisher to use it

const QUEUES = {
    JOBS: 'JOBS',
};

const message = { name: 'siavash', age: 32 };

module.exports = {
    message: message,
    QUEUES: QUEUES,
};
