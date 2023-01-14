import './css/styles.css';
import TravelerRepository from './TraverlerRepository';
import Traveler from './Traveler';
import Trip from './Trip';
import returnDataPromises from './apiCalls';
import Destination from './Destinations';


// Query Selectors
const travelerContainer = document.querySelector('.traveler-container');
// const tripContainer = document.querySelector('.trips-container');
// const destinationContainer = document.querySelector('.destinations-container');
const loginPage = document.querySelector(".login-page");
const form = document.querySelector(".form");
const loginFormBtn = document.querySelector(".form-btn");
const userNameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const formErrorMessage = document.querySelector(".form-error-message");

// Global Variables
let travelerData;
let tripData;
let destinationData;
let travelerRepository;
let currentTraveler;
let currentTrip;
let currentDestination;


// Functions
function fetchApiCalls() {
  returnDataPromises().then((data) => {
    // travelerData gets all travelers
    travelerData = (data[0].travelers.map((traveler) => new Traveler(traveler)))

    // tripData fetches all trips     
    tripData = data[1]

    // destinationData fetches all destination data
    destinationData = data[2].destinations.map((destination) => new Destination(destination))

    // holds all Traveler Objects
    travelerRepository = new TravelerRepository(travelerData)
    console.log(travelerRepository)
    
    randomizeCurrentTraveler()
    loadHandler()
  })
}

function loadHandler() {
  // displayCurrentTravelerInfo();
  getCurrentTrip()
  // displayCurrentTripsInfo()
  getCurrentDestination()
  // displayCurrentDestinationInfo()
}

function getCurrentTrip() {
  return currentTrip = tripData.trips.filter(trip => trip.userID === currentTraveler.id
  )
}

function getCurrentDestination() {
  return currentDestination = destinationData.filter(location => location.id === currentTraveler.id)
}

function randomIndex() {
  return Math.floor(Math.random() * travelerData.length)
}

function randomizeCurrentTraveler() {
  return currentTraveler = travelerRepository.travelers[randomIndex()]
}

// Event Listeners
window.addEventListener("load", () => {
  fetchApiCalls();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (userNameInput.value === "traveler1" && passwordInput.value === 'travel') {
    loginPage.classList.add("hidden")
  } else {
    formErrorMessage.classList.remove("hidden")
  }
});


// function displayCurrentTravelerInfo() {
//   travelerContainer.innerHTML = `
//     <p>Traveler ID: <span>${currentTraveler.id}</span></p>
//     <p>Traveler Name: <span>${currentTraveler.name}</span></p>
//     <p>Traveler Type: <span>${currentTraveler.travelerType}</span></p>
// `
// }

// function displayCurrentTripsInfo() {
//   tripContainer.innerHTML = `
//     <p>Trip ID: <span>${allTripIDs}<span></p>
//     <p>Traveler ID: <span>${currentTrip[0].userID}<span></p>
//     <p>Destination ID: <span>${allDestinationIDs}</span></p>
//     <p>Travelers: <span>${allTripTravelers}</span></p>
//     <p>Date: <span>${allTripDates}</span></p>
//     <p>Duration: <span>${allTripDuration}</span></p>
//     <p>Status: <span>${allTripStatus}</span></p>
//     <p>Suggested Activities: <span>"None At The Moment"</span></p>
//   `
// }

// function displayCurrentDestinationInfo() {
//   let allDestinationIDs2 = currentTrip.map(current => current.destinationID)
//   let allDestinationData = currentDestination.map(current => current)
//   destinationContainer.innerHTML = `
//   <p>Destination ID: <span>${allDestinationIDs2}<span></p>
//     <p>Destination: <span>${allDestinationData[0].destination}<span></p>
//     <p>Estimated Lodging Cost Per Day: <span>${allDestinationData[0].estimatedLodgingCostPerDay}</span></p>
//     <p>Estimated Flight Cost Per Person: <span>${allDestinationData[0].estimatedFlightCostPerPerson}</span></p>
//     <p>Image: <span>${allDestinationData[0].image}</span></p>
//     <p>Alt: <span>${allDestinationData[0].alt}</span></p>
//   `
// }