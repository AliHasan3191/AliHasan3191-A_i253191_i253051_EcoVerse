
let score = 2;

function minus() {
    if (score > 0) {
        score = score - 1;
        document.getElementById("change").innerText = score;
    }
}

function plus() {
    score = score + 1;
    document.getElementById("change").innerText = score;
}


function changebox() {
    const box = document.getElementById("box2");

    if (box.style.display === "none") {
        box.style.display = "absolute";  
    } else {
        box.style.display = "none";    
    }
}



function changebox() {
    document.getElementById("box2").style.display = "block";
    document.getElementById("for-opacity").classList.add("op");
}

function closeBulk() {
    document.getElementById("box2").style.display = "none";
    document.getElementById("for-opacity").classList.remove("op");
}


