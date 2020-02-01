const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('../../../package');

const swaggerPlugin = [
	{
		plugin: Inert,
	},
	{
		plugin: Vision,
	},
	{
		plugin: HapiSwagger,
		options: {
			info: {
				title: `${Pack.name} API Docs`,
				version: Pack.version,
				description: Pack.description,
			},
			documentationPath: '/',
		},
	},
];

module.exports = swaggerPlugin;
