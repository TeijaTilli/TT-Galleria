console.log("toimii");

function myFunction() {
  var x = document.getElementById("lueLisää");
  var buttontext = document.getElementById("button1");
  if (x.style.display === "none") {
    x.style.display = "block";
    buttontext.innerHTML = "Lue vähemmän";
  } else {
    x.style.display = "none";
    buttontext.innerHTML = "Lue enemmän";
  }
}


/* avataan blogi divien tekstit */
function tekstiAuki() {
  var x = document.getElementById("lueblogia1");
  var buttontext = document.getElementById("blogibutton1");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
    buttontext.innerHTML = "Lue vähemmän";
  } else {
    x.style.display = "none";
    buttontext.innerHTML = "Lue enemmän";
  }
}

function tekstiAuki2() {
  var x = document.getElementById("lueblogia2");
  var buttontext = document.getElementById("blogibutton2");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
    buttontext.innerHTML = "Lue vähemmän";
  } else {
    x.style.display = "none";
    buttontext.innerHTML = "Lue enemmän";
  }
}

function tekstiAuki3() {
  var x = document.getElementById("lueblogia3");
  var buttontext = document.getElementById("blogibutton3");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
    buttontext.innerHTML = "Lue vähemmän";
  } else {
    x.style.display = "none";
    buttontext.innerHTML = "Lue enemmän";
  }
}

function tekstiAuki4() {
  var x = document.getElementById("lueblogia4");
  var buttontext = document.getElementById("blogibutton4");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
    buttontext.innerHTML = "Lue vähemmän";
  } else {
    x.style.display = "none";
    buttontext.innerHTML = "Lue enemmän";
  }
}

function tekstiAuki5() {
  var x = document.getElementById("lueblogia5");
  var buttontext = document.getElementById("blogibutton5");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
    buttontext.innerHTML = "Lue vähemmän";
  } else {
    x.style.display = "none";
    buttontext.innerHTML = "Lue enemmän";
  }
}


/* Gallerian kuvien suurentaminen ja pienentäminen  */
function normalizeImg() {
  document.querySelectorAll(".part2gallery img").forEach(function (o) {
    o.style.transform = "scale(1)";

  });
}

document.querySelectorAll(".part2gallery img").forEach(function (o) {
  o.addEventListener("click", function () { enlargeImg(o) });
});


// Function to increase image size 
function enlargeImg(img) {

  document.querySelectorAll(".part2gallery img").forEach(function (o) {
    if (o != img) {
      o.style.transform = "scale(1)";
      //o.style.display= "none";
    }
  });

  if (img.style.transform === "" || img.style.transform == "scale(1)") {

    img.style.transform = "scale(1.5)"; // Set image size to 1.5 times original 
    // Animation effect  
    img.style.transition = "transform 0.25s ease";
  }
  else {
    img.style.transform = "scale(1)";
    img.style.transition = "transform 0.25s ease";
  }
}

// Function to reset image size 
function resetImg() {
  // Set image size to original 
  img.style.transform = "scale(1)";
  img.style.transition = "transform 0.25s ease";
}

/* Ota yhteyttä, sähköpostin lähetys:  */

function sendEmail() { 
  document.getElementById("koko").value = "";
  document.getElementById("tekniikka").value = "";
  document.getElementById("muuta").value = "";
  document.getElementById("yhteystiedot").value = "";
  alert("Kiitos tilauksesta! Tämä ei oikeasti toimi, kun ei ole palvelinta pystyssä formin vastaanottamista varten.");
}