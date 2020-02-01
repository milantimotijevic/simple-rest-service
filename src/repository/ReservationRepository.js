const reservations = [];

const getOneReservation = function(id) {
	return reservations.find(reservation => reservation.id === id);
};

const getAllReservations = function() {
	return reservations;
};

module.exports = {
	getOneReservation,
	getAllReservations,
};
