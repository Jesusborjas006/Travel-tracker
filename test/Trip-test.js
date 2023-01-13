import { expect } from "chai";
import Trip from "../src/Trip";
import allTripInfo from "./testData"

describe("Trip", () => {
  // Shows the trip class data
  let travelerTrip;

  beforeEach(() => {
    let currentTraveler = {
      id: 1,
      name: "Ham Leadbeater",
      travelerType: "relaxer"
    };
    
    let allTripInfo = [
      {
        id: 117,
        userID: 1,
        destinationID: 28,
        travelers: 3,
        date: "2021/01/09",
        duration: 15,
        status: "approved",
        suggestedActivities: [ ]
      },
      {
        id: 89,
        userID: 2,
        destinationID: 10,
        travelers: 5,
        date: "2019/09/27",
        duration: 13,
        status: "approved",
        suggestedActivities: [ ]
      },
      {
        id: 100,
        userID: 2,
        destinationID: 6,
        travelers: 6,
        date: "2020/3/28",
        duration: 10,
        status: "approved",
        suggestedActivities: [ ]
      },
      {
        id: 116,
        userID: 2,
        destinationID: 7,
        travelers: 3,
        date: "2020/04/03",
        duration: 8,
        status: "approved",
        suggestedActivities: [ ]
      },
      {
        id: 166,
        userID: 2,
        destinationID: 7,
        travelers: 2,
        date: "2020/03/05",
        duration: 6,
        status: "approved",
        suggestedActivities: [ ]
      },
      {
        id: 171,
        userID: 2,
        destinationID: 43,
        travelers: 1,
        date: "2020/12/27",
        duration: 18,
        status: "pending",
        suggestedActivities: [ ]
      },
      {
        id: 177,
        userID: 2,
        destinationID: 20,
        travelers: 6,
        date: "2020/01/29",
        duration: 8,
        status: "approved",
        suggestedActivities: [ ]
      },
      {
        id: 3,
        userID: 3,
        destinationID: 22,
        travelers: 4,
        date: "2022/05/22",
        duration: 17,
        status: "approved",
        suggestedActivities: [ ]
      },
      {
        id: 41,
        userID: 3,
        destinationID: 25,
        travelers: 3,
        date: "2020/08/30",
        duration: 11,
        status: "approved",
        suggestedActivities: [ ]
      },
      {
        id: 50,
        userID: 3,
        destinationID: 16,
        travelers: 5,
        date: "2020/07/02",
        duration: 17,
        status: "approved",
        suggestedActivities: [ ]
      },
      {
        id: 65,
        userID: 3,
        destinationID: 35,
        travelers: 4,
        date: "2020/03/21",
        duration: 18,
        status: "approved",
        suggestedActivities: [ ]
      },
      {
        id: 102,
        userID: 3,
        destinationID: 3,
        travelers: 3,
        date: "2020/09/26",
        duration: 8,
        status: "approved",
        suggestedActivities: [ ]
      },
      {
        id: 121,
        userID: 3,
        destinationID: 44,
        travelers: 2,
        date: "2020/03/11",
        duration: 13,
        status: "approved",
        suggestedActivities: [ ]
      },
      {
        id: 173,
        userID: 3,
        destinationID: 9,
        travelers: 6,
        date: "2020/04/21",
        duration: 18,
        status: "approved",
        suggestedActivities: [ ]
      },    
    ]

    travelerTrip = new Trip(currentTraveler, allTripInfo);
    // console.log(travelerTrip)
    
  });

  it("should be a function", function() {
    expect(Trip).to.be.a("function");
  });

  it("should be a Trip Class", function() {
    expect(travelerTrip).to.be.an.instanceOf(Trip);
  });

  it("should store all of travelers trips in a single array property", function() {
    expect(travelerTrip.masterData[0]).to.deep.equal(
      {
        id: 117,
        userID: 1,
        destinationID: 28,
        travelers: 3,
        date: '2021/01/09',
        duration: 15,
        status: 'approved',
        suggestedActivities: []
      }
    );
  });

  it("should have a method that gets current traveler past trips", function() {
    expect(travelerTrip.getPastTrips()).to.deep.equal([
      {
        id: 117,
        userID: 1,
        destinationID: 28,
        travelers: 3,
        date: '2021/01/09',
        duration: 15,
        status: 'approved',
        suggestedActivities: []
      }
    ]);
  });

  it.skip("should have a method that gets the current traveler's destination", function () {
    console.log(travelerTrip.getDestination())
    expect(travelerTrip).to.deep.equal(true)
    //   {
    //     id: 28,
    //     destination: "San Juan, Puerto Rico",
    //     estimatedLodgingCostPerDay: 70,
    //     estimatedFlightCostPerPerson: 900,
    //     image: "https://images.unsplash.com/photo-1580237541049-2d715a09486e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80",
    //     alt: "white and brown concrete buildings near sea under white clouds during daytime"
    //   }
    
  })

  it("should have a method that gets current traveler's pending trips", function () {
    expect(travelerTrip.getPendingTrips()).to.deep.equal([]);
  });

  it("should have a method that gets current traveler's pending trips", function() {
    expect(travelerTrip.getUpComingTrips()).to.deep.equal([]);
  });

  it.skip("should have a method for getting the cost of the trip", function() {
    expect(travelerTrip.calculateCost()).to.equal(4125)
  })
});