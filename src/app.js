require('dotenv').config();
const { start } = require('./api/server');

require('./repository');

start().then(() => {
	console.log(`Server running on port ${process.env.PORT}...`);
});
