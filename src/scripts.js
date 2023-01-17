import './css/styles.css';
import TravelerRepository from './TraverlerRepository';
import Traveler from './Traveler';
import Trip from './Trip';
import returnDataPromises from './apiCalls';
import Destination from './Destinations';


// Query Selectors
const homePage = document.querySelector(".home-page");
const loginPage = document.querySelector(".login-page");
const form = document.querySelector(".form");
const userNameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const formErrorMessage = document.querySelector(".form-error-message");

// Book Trip Inputs
const destinationFormInput = document.querySelector("#destinationInput");
const checkInDate = document.querySelector('.check-in-date');
const durationFormInput = document.querySelector("#durationInput");
const travelerFormInput = document.querySelector("#travelerInput")

// Displaying Traveler Data Query Selectors
const travelerID = document.querySelector(".user-number");
const userName = document.querySelector(".user-name");
const travelerType = document.querySelector(".traveler-type");

// Displaying Traveler Trip Card Data Query Selectors
// const tripCard = document.querySelector(".card");
// const statusCard = document.querySelector(".status");
// const cardDate = document.querySelector(".card-date");
// const cardDuration = document.querySelector(".card-duration");
// const cardCostPerPerson = document.querySelector(".card-cost-person");
// const cardLodgingPerDay = document.querySelector(".card-lodge-day");
// const cardTravelers = document.querySelector(".card-travelers");
const activityContainer = document.querySelector(".activity-container")


// Global Variables
let travelerData;
let tripData;
let destinationData;
let travelerRepository;
let currentTraveler;
let currentUserTrips;
let currentUserDestinations;
let currentUserTripCost;

// Functions
function fetchApiCalls() {
  returnDataPromises().then((data) => {
    travelerData = (data[0].travelers.map((traveler) => new Traveler(traveler)))  
    tripData = data[1]
    destinationData = data[2]
    travelerRepository = new TravelerRepository(travelerData)
    randomizeCurrentTraveler()
    loadHandler()
  })
}

function postGetRequest() {
  returnDataPromises().then((data) => {
    tripData = data[1];
    destinationData = data[2]
    loadHandler();
  })
}

// Book Trip Input Form
function bookTripData() {
  return {
    userID: currentTraveler.id,
    destinationID: destinationFormInput.value,
    date: checkInDate.value.replaceAll("-", "/"),
    duration: Number(durationFormInput.value),
    travelers: Number(travelerFormInput.value),
  }
}

// Post Trip Input values 
function tripPost() {
  const tripData = bookTripData();
  fetch("http://localhost:3001/api/v1/trips", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Something went wrong with the server!')
      }
    })
    .then(postGetRequest())
    .catch(error => {
      console.error(error.message)
    })
}

function loadHandler() {
  displayCurrentTravelerInfo();
  getCurrentTravelersTrips()
  getCurrentTravelersDestinations()
  renderTripCards()
  getTotalForTrip()
}

// Gets all trips (past, upcoming and pending)
function getCurrentTravelersTrips() {
  let currentTravelerID = currentTraveler.id;
  let travelersTripDetails = tripData.trips.filter(id => id.userID === currentTravelerID)
  currentUserTrips = travelersTripDetails
  console.log(currentUserTrips)
  return travelersTripDetails
}

function getCurrentTravelersDestinations() {
  let allDestinations = destinationData
  let currentTravelerTrips = currentUserTrips
  let travelerDestinationData = allDestinations.destinations.filter(data => {
    return data.id === currentTravelerTrips[0].destinationID
  })

  // Gets only the first users destination
  currentUserDestinations = travelerDestinationData
  console.log(travelerDestinationData);
  return travelerDestinationData
}

function getTotalForTrip() {
  let travelersCost = currentUserDestinations[0].estimatedFlightCostPerPerson * currentUserTrips[0].travelers;
  let stayCost = currentUserDestinations[0].estimatedLodgingCostPerDay * currentUserTrips[0].duration;
  let totalCost = Math.round((travelersCost + stayCost) * 1.1)
  currentUserTripCost = totalCost
  return totalCost
}

function randomIndex() {
  return Math.floor(Math.random() * travelerData.length)
}

function randomizeCurrentTraveler() {
  return currentTraveler = travelerRepository.travelers[randomIndex()]
}

// Check In Date
let date = new Date();
let tDate1 = date.getDate();
let month1 = date.getMonth() + 1;
let year1 = date.getFullYear();

if (tDate1 < 10) {
  tDate1 = '0' + tDate1
}

if (month1 < 10) {
  month1 = '0' + month1;
}

let minDate = year1 + "-" + month1 + "-" + tDate1
checkInDate.min = minDate

// Event Listeners
window.addEventListener("load", () => {
  fetchApiCalls();
});

// Form Validation (Username & Password)
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (userNameInput.value === "traveler1" && passwordInput.value === 'travel') {
    loginPage.classList.add("hidden")
    homePage.classList.remove("hidden")
  } else {
    formErrorMessage.classList.remove("hidden")
  }
});

// Display Content Functions
function displayCurrentTravelerInfo() {
  travelerID.innerText = `#${currentTraveler.id}`;
  userName.innerText = currentTraveler.name;
  travelerType.innerHTML = `Traveler Type: <span>${currentTraveler.travelerType}</span>`;
}

function renderTripCards() {
  activityContainer.innerHTML += `
  <div class="card">
          <img src="${currentUserDestinations[0].image}" alt="${currentUserDestinations[0].alt}">
          <div class="card-container">
            <h4>${currentUserDestinations[0].destination}</h4>
            <p class="status-2">${currentUserTrips[0].status}</p>
            <p>Date: <span>${currentUserTrips[0].date}</span></p>
            <p>Duration: <span>${currentUserTrips[0].duration} Days</span></p>
            <p>Flight Cost Per Person: <span>$${currentUserDestinations[0].estimatedFlightCostPerPerson}</span></p>
            <p>Lodging Cost Per Day: <span>$${currentUserDestinations[0].estimatedLodgingCostPerDay}</span></p>
            <p>Travelers: <span>${currentUserTrips[0].travelers}</span></p>
            </ul>
            <p class="card-total">Total: $${getTotalForTrip()}</p>
          </div> 
        </div>
  `
}
