if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prode');
} else {
    module.exports = require('./dev');
}