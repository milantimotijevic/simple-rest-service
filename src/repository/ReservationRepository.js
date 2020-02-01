const reservations = [];

const getOneReservation = function(id) {
	return reservations.find(reservation => reservation.id === id);
};

const getAllReservations = function() {
	return reservations;
};

const createReservation = function(reservationParam) {
	const reservation = {
		id: 'todo',
		...reservationParam,
	};

	reservations.push(reservation);
	return reservation;
};

const updateReservation = function() {

};

const deleteReservation = function() {

};

module.exports = {
	getOneReservation,
	getAllReservations,
	createReservation,
	updateReservation,
	deleteReservation,
};
