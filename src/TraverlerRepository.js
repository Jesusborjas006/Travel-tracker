// This class holds all traveler objects
class TravelerRepository {
  constructor(travelers) {
    this.travelers = travelers;
  }

  returnUserData(travelerID) {
    return this.travelers.find((item) => item.id === travelerID);
  }
}

export default TravelerRepository;