import { expect } from "chai";
import Traveler from "../src/Traveler";

describe("Traveler", () => {
  let traveler1;
  let traveler2;

  beforeEach(() => {
    let currentTraveler1 = {
      id: 1,
      name: "Ham Leadbeater",
      travelerType: "relaxer"
    };
    let currentTraveler2 = {
      id: 2,
      name: "Rachael Vaughten",
      travelerType: "thrill-seeker"
    }

    traveler1 = new Traveler(currentTraveler1);
    traveler2 = new Traveler(currentTraveler2);
  });

  it("should be a function", function () {
    expect(Traveler).to.be.a("function");
  });

  it("should be an instance of Traveler", function () {
    expect(traveler1).to.be.an.instanceOf(Traveler);
    expect(traveler2).to.be.an.instanceOf(Traveler);
  });

  it("should have an idea for each travelers", function () {
    expect(traveler1.id).to.equal(1);
    expect(traveler2.id).to.equal(2);
  });

  it("should have a name", function () {
    expect(traveler1.name).to.equal("Ham Leadbeater");
    expect(traveler2.name).to.equal("Rachael Vaughten");
  });

  it("should include what type of traveler they are", function () {
    expect(traveler1.travelerType).to.equal("relaxer");
    expect(traveler2.travelerType).to.equal("thrill-seeker");
  });
});