const getAllReservations = require('../../../domain/use_cases/queries/getAllReservations');
const getOneReservation = require('../../../domain/use_cases/queries/getOneReservation');


const getAllReservationsHandler = async function getAllReservationsHandler() {
	return getAllReservations();
};

const getOneReservationHandler = async function getOneReservationHandler(request) {
	const { id } = request.params;
	return getOneReservation(id);
};

module.exports = {
	getAllReservationsHandler,
	getOneReservationHandler,
};
