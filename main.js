const tabLinks = document.getElementsByClassName("tab-links")
const tabContents = document.getElementsByClassName("tab-contents")
function openTab(tabName){
    for(let tableLink of tabLinks) {
      tableLink.classList.remove('active-link')
    }
    for(let tableContent of tabContents) {
      tableContent.classList.remove('active-tab')
    }
    event.currentTarget.classList.add('active-link')
    document.getElementById(tabName).classList.add("active-tab")
}

/......................................./ 
let sideMenu = document.getElementById("sidemenu")
function openmenu(){
  sideMenu.style.right = "0";
}
function closemenu(){
  sideMenu.style.right = "-200px";
}
/......................................../ 
const roles = ["Data Analyst", "Data Scientist", "Business Analyst"];
let index = 0;
let charIndex = 0;
const typewriterElement = document.getElementById("typewriter");

function typeText() {
  if (charIndex < roles[index].length) {
    typewriterElement.textContent += roles[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 150);
  } else {
    setTimeout(eraseText, 1000);
  }
}

function eraseText() {
  if (charIndex > 0) {
    typewriterElement.textContent = roles[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, 100);
  } else {
    index = (index + 1) % roles.length;
    setTimeout(typeText, 500);
  }
}

// Start the typing effect
typeText();