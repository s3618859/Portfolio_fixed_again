//Arm rotation
var button = document.getElementById('button');

function rotation (){
    const rotatingE = document.getElementById('upperRotate');

    // Event Listener
    document.addEventListener('mousemove', e => {
      // Callback function
      const mX = (e.clientX / window.innerWidth * 360)/2

      rotatingE.style.transform = 'rotate('+ mX +'deg)'
    })
}


/////////////////////////////////////Modals//////////

//////////Modal1//////////

// Get the modal
var modal = document.getElementById("modalOne");

// Get the button that opens the modal
var btn1 = document.getElementById("button1");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn1.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Get the modal
var modal2 = document.getElementById("modalTwo");

// Get the button that opens the modal
var btn2 = document.getElementById("button2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("lmao")[0];

// When the user clicks on the button, open the modal 
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}



// Get the modal
var modal3 = document.getElementById("modalThree");

// Get the button that opens the modal
var btn3 = document.getElementById("button3");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("omg")[0];

// When the user clicks on the button, open the modal 
btn3.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
  modal3.style.display = "none";
}
