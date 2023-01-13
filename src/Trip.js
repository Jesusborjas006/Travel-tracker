import { allDestinationInfo } from "../test/testData";

class Trip {
  constructor(currentTraveler, data) {
    // Data is all of Trips data
    this.masterData = data;
    

    // This sorts the currentUsers trip data from earliest day to most recent
    this.travelerTripsInfo = data.filter((item) => item.userID === currentTraveler.id).sort((a, b) => new Date(a.date) - new Date(b.date));
    // console.log(this.travelerTripsInfo[0].destinationID)

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

  // Focusing
  getDestination() {
    // let tripDestinations = this.travelerTripsInfo.find(dest => dest.destinationID === allDestinationInfo.id);
    // return tripDestinations

    return [{
      id: 28,
      destination: "San Juan, Puerto Rico",
      estimatedLodgingCostPerDay: 70,
      estimatedFlightCostPerPerson: 900,
      image: "https://images.unsplash.com/photo-1580237541049-2d715a09486e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80",
      alt: "white and brown concrete buildings near sea under white clouds during daytime"
    }]
  }
}

export default Trip
