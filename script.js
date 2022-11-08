function openPage(pageName, element, color) {
    // Hide all elements with class="tabcontent" by default
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    const tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    element.style.backgroundColor = color;
  }
  
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


// links in the contents list
const contentsOne = document.getElementById("contentsone");
const contentsTwo = document.getElementById("contentstwo");
const contentsThree = document.getElementById("contentsthree");
const contentsFour = document.getElementById("contentsfour");

// the headings to scroll to
const headingOne = document.getElementById("one");
const headingTwo = document.getElementById("two");
const headingThree = document.getElementById("three");
const headingFour = document.getElementById("four");

contentsOne.addEventListener("click", (e) => {
    headingOne.scrollIntoView();
});

contentsTwo.addEventListener("click", (e) => {
    headingTwo.scrollIntoView();
});

contentsThree.addEventListener("click", (e) => {
    headingThree.scrollIntoView();
});

contentsFour.addEventListener("click", (e) => {
    headingFour.scrollIntoView();
});

let topButton = document.getElementById("topbutton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
topButton.addEventListener('click', () => {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0;
})