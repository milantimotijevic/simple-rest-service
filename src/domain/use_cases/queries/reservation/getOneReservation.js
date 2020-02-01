const { ReservationRepository } = require('../../../../repository');

module.exports = function getOneReservation(){
	return ReservationRepository.getOneReservation();
};
