function navbarFunction() {
  let navLink = document.getElementById("myLinks");
    if (navLink.style.display === "block") {
      navLink.style.display = "none";
    } 
    else {
       navLink.style.display = "block";
    }

    // if(window.innerWidth === 1280){
    //   navLink.style.display = "flex";
    //   navLink.style.flexDirection = "row";
    // }
 
}

//accordian funtionalilty
const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
