import { allDestinationInfo } from "../test/testData";

class Trip {
  constructor(currentTraveler, data) {
    this.masterData = data;
    this.travelerTripsInfo = data.filter((item) => item.userID === currentTraveler.id).sort((a, b) => new Date(a.date) - new Date(b.date));
    this.currentTraveler = currentTraveler;
  }

  getPastTrips() {
    let approvedTrips = this.travelerTripsInfo.filter(trip => trip.status === "approved");
    return approvedTrips;
  }

  getPendingTrips() {
    let pendingTrips = this.travelerTripsInfo.filter(trip => trip.status === "pending");
    return pendingTrips;
  }

  getUpComingTrips() {
    let upcomingTrips = this.travelerTripsInfo.filter(trip => trip.status === "upcoming");
    return upcomingTrips;
  }


  //   getDestination() {

//  }
}

export default Trip
