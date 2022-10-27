// ***** ADDING THE DATA SUBMITTED FROM THE INPUT FIELD TO FIRE BASE *****
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGXuFss0Ync3kBIFKxhBDs5JUkcujG1zA",
  authDomain: "sh0pify.firebaseapp.com",
  databaseURL: "https://sh0pify-default-rtdb.firebaseio.com/",
  projectId: "sh0pify",
  storageBucket: "sh0pify.appspot.com",
  messagingSenderId: "929194582551",
  appId: "1:929194582551:web:50416adae5d569a297f252",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference your database
var shopifyDB = firebase.database().ref("Shopify");

document.getElementById("emailForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = getElementVal("email");
  saveMsg(email);
  // Reset the form
  document.getElementById("emailForm").reset();
});
const getElementVal = (id) => {
  return document.getElementById(id).value;
};
// To Save the data to the new Reference.
const saveMsg = (email) => {
  var newShopifyDB = shopifyDB.push();
  newShopifyDB.set({
    email: email,
  });
};
// The first Nav exiting

// Getting icon of exit
const exit = document.querySelector("i");
// Getting The first Nav
const firstNav = document.querySelector(".firstnav");
//  On Clicking the exit icon
exit.addEventListener("click", (e) => {
  // Show or Hide the first nav
  firstNav.classList.toggle("active");
});

// });
const items = document.querySelectorAll(".toDown");
// const removeDrops = document.querySelectorAll(".dropdown");
items.forEach((item) => {
  // On clicking the toDown button
  item.addEventListener("click", () => {
    // Getting all the dropdowns
    const dropdowns = item.querySelectorAll(".dropdown");
    dropdowns.forEach((dropdown) => {
      //  Adding the class active to the selected dropdown.
      dropdown.classList.add("active");
    });
  });
});

// SlideShow Displaying
//  initializing the counter
let counter = 1;
// Set interval function to make The Slide Show Auto Played
setInterval(() => {
  document.querySelector(`.box.active`).classList.remove("active");
  const mainSlider = document.querySelector(".main-slider");
  // Removing all the backgrounds under the first background
  mainSlider.classList.remove(`bgcolor-5`);
  mainSlider.classList.remove(`bgcolor-4`);
  mainSlider.classList.remove(`bgcolor-3`);
  mainSlider.classList.remove(`bgcolor-2`);
// Getting the img Boxes
  const img = document.querySelector(`.img-box-${counter}`);
  img.classList.add("active");
  mainSlider.classList.add(`bgcolor-${counter}`);

  counter++;

  if (counter > 5) {
    counter = 1;
  }
  // The duration of the Changing
}, 1500);


// The progress bar
let barCounter = 1;
setInterval(() => {
  // Remove all active Classes of the bars.
  document.querySelector(".bar.active").classList.remove("active");
  const bar = document.querySelector(`.bar-${barCounter}`);
  // Adding the active class to the quiued bar.
  bar.classList.add("active");
  barCounter++;
  if (barCounter > 3) {
    barCounter = 1;
  }
}, 2300);

// Meet Slider activation
// Slilde Counter
let slideCounter = 1;

//  Getting The previous slide
const prev = document.querySelector(".prev");

//  Getting The next slide

const next = document.querySelector(".next");
// On clicking the next slide it will show the next slide
next.addEventListener("click", (e) => {
  // To Remove all active classes
  document.querySelector(".item.active").classList.remove("active");
  const slider = document.querySelector(`.item-${slideCounter}`);
  slider.classList.add("active");
  slideCounter++;
  if (slideCounter > 3) {
    slideCounter = 1;
  }
});
// On clicking the next slide it will show the next slide

prev.addEventListener("click", (e) => {
  // To Remove all active classes
  document.querySelector(".item.active").classList.remove("active");
  const slider = document.querySelector(`.item-${slideCounter}`);
  slider.classList.add("active");
  // Go to The previous slide
  slideCounter--;
  if (slideCounter < 1) {
    slideCounter = 3;
  }
});
