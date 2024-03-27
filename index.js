const skillstab = document.getElementById("skillstab");
const educationtab = document.getElementById("educationtab");

const skillscontent = document.getElementById("skillscontent");
const educationcontent = document.getElementById("educationcontent");

const skillscontentvisibility = document.getElementById("skillscontent").style.display;
const educationcontentvisibility = document.getElementById("educationcontent").style.display;

const tabcontents = document.getElementsByClassName("tabcontents");

function skillsTabFunction(){
    if(skillscontent.style.display == "flex"){
    }
    else{
        skillscontent.style.display = "flex"
        educationcontent.style.display = "none"
        skillstab.classList.add("active")
        educationtab.classList.remove("active")

    }
}
function educationTabFunction(){
    if(educationcontent.style.display == "flex"){
    }
    else{
        educationcontent.style.display = "flex"
        skillscontent.style.display = "none"
        skillstab.classList.remove("active")
        educationtab.classList.add("active")

    }
}

const frontimg = document.getElementById("frontimg");

document.addEventListener('scroll', function() {
    let value = window.scrollY;
    if(value > 2000){

    }
    else{
        frontimg.style.top = value * 1.1 + "px"
    }
})

const sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0px"
}
function exitmenu(){
    sidemenu.style.right = "-200px"

}