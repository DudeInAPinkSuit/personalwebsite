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

