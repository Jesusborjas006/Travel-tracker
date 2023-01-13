import { expect } from "chai";
import Destination from "../src/Destinations";

describe("Destination", () => {
  let travelerDestination;

  beforeEach(() => {
    let currentDestination = 
    {
      id: 28,
      destination: "San Juan, Puerto Rico",
      estimatedLodgingCostPerDay: 70,
      estimatedFlightCostPerPerson: 900,
      image: "https://images.unsplash.com/photo-1580237541049-2d715a09486e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80",
      alt: "white and brown concrete buildings near sea under white clouds during daytime"
    }

    travelerDestination = new Destination(currentDestination);
  })

  it("should be a function", function() {
    expect(Destination).to.be.a("function");
  });

  it("should be Destination class", function() {
    expect(travelerDestination).to.be.an.instanceOf(Destination);
  });

  it("should have an id", function() {
    expect(travelerDestination.id).to.equal(28);
  });

  it("should have a destination (name of location)", function() {
    expect(travelerDestination.destination).to.equal("San Juan, Puerto Rico");
  });

  it("should have an estimated cost per day for the duration of the trip (lodging)", function() {
    expect(travelerDestination.estimatedLodgingCostPerDay).to.equal(70);
  });

  it("should have an estimated fligth cost per person", function() {
    expect(travelerDestination.estimatedFlightCostPerPerson).to.equal(900)
  })


})