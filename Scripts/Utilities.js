//carousel funtionality
function navbarFunction(){
    let x = document.getElementById("myLinks");
    if(x.style.display === "block"){
        x.style.display = "none";
    }
    else{
        x.style.display = "block";
    }
}

//accordian funtionalilty
const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}