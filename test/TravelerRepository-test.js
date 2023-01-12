import { expect } from "chai"
import TravelerRepository from "../src/TraverlerRepository"
import Traveler from "../src/Traveler"
import { allTravelerInfo } from "./testData"

describe("Traveler Repository", () => {
  let travelers;
  let travelerRepo;

  beforeEach(() => {
    travelers = allTravelerInfo.map((item) => new Traveler(item));
    travelerRepo = new TravelerRepository(travelers);
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
});



