class Trip {
  constructor(currentTraveler) {
    this.id = currentTraveler.id
    this.userID = currentTraveler.userID;
    this.destinationID = currentTraveler.destinationID;
    this.travelers = currentTraveler.travelers;
    this.date = currentTraveler.date;
    this.duration = currentTraveler.duration;
    this.status = currentTraveler.status;
    this.suggestedActivities = []
  }
}

export default Trip