import { allTripInfo } from "../test/testData";
import destinations from "../test/destination-test-data";

let allTestTrips = allTripInfo

class Traveler {
  constructor(travelerData) {
    this.id = travelerData.id;
    this.name = travelerData.name;
    this.travelerType = travelerData.travelerType;
  }

  getTodaysDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); 
    let yyyy = today.getFullYear();
    today = `${yyyy}-${mm}-${dd}`;
    return today
  }
}


export default Traveler;