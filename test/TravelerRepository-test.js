import { expect } from "chai"
import TravelerRepository from "../src/TraverlerRepository"
import Traveler from "../src/Traveler"
import { allTravelerInfo } from "./testData"
import destinations from "./destination-test-data"

describe("Traveler Repository", () => {
  let travelers;
  let travelerRepo;
  let testDestinations;


  beforeEach(() => {
    travelers = allTravelerInfo.map((item) => new Traveler(item));
    travelerRepo = new TravelerRepository(travelers);
    testDestinations = destinations;
  });

  it("should be a function", function () {
    expect(TravelerRepository).to.be.a("function");
  });

  it("should be a TravelerRepository Class", function () {
    expect(travelerRepo).to.be.an.instanceOf(TravelerRepository);
  });

  it("should store travelers in an array as a property", function () {
    expect(travelerRepo.travelers).to.deep.equal(travelers);
  });

  it("the stored users in the property array should be instances of the Traveler class", function () {
    expect(travelerRepo.travelers[0]).to.be.an.instanceOf(Traveler);
  });

  it.skip("should have a method that returns a travelers data when given their traveler ID", function () {
    expect(travelerRepo.returnUserData(3)).to.deep.equal({
      id: 3,
      name: "Sibby Dawidowitsch",
      travelerType: "shopper"
    });
  });
});

