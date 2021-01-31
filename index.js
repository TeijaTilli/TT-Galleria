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

function normalizeImg(){
  document.querySelectorAll(".part2gallery img").forEach(function(o) {
    o.style.transform = "scale(1)";
  });
}

document.querySelectorAll(".part2gallery img").forEach(function(o) {
  o.addEventListener("click", function() { enlargeImg(o) });
});

// for(var i = 0; i < document.querySelectorAll(".part2gallery img").length; i++){

//   document.querySelectorAll(".part2gallery img")[i].addEventListener("click", function(){

//    var img = document.querySelectorAll(".part2gallery img")[i];
//     enlargeImg(img);

//   });
// }


// Function to increase image size 
function enlargeImg(img) {

  document.querySelectorAll(".part2gallery img").forEach(function(o) {
    if(o != img){
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