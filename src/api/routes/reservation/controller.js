const getAllReservations = require('../../../domain/use_cases/queries/reservation/getAllReservations');
const getOneReservation = require('../../../domain/use_cases/queries/reservation/getOneReservation');
const createReservation = require('../../../domain/use_cases/commands/reservation/createReservation');


const getAllReservationsHandler = async function getAllReservationsHandler() {
	return getAllReservations();
};

const getOneReservationHandler = async function getOneReservationHandler(request) {
	const { id } = request.params;
	return getOneReservation(id);
};

const createReservationHandler = async function createReservationHandler(request) {
	return createReservation(request.payload);
};

const updateReservationHandler = async function updateReservationHandler(request) {
	//TODO
};

const deleteReservationHandler = async function deleteReservationHandler(request) {
	//TODO
};

module.exports = {
	getAllReservationsHandler,
	getOneReservationHandler,
	createReservationHandler,
	updateReservationHandler,
	deleteReservationHandler
};
