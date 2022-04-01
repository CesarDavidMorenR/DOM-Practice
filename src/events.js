// Solo con onclick

const btnonclick = document.querySelector('#btnonclick');
btnonclick.onclick = () => alert('BTN ON CLICK and apart js document');

// Maintaining separtion of concerns and allowing muliple event listeners

const btndos = document.querySelector('#btndos');
btndos.addEventListener('click', () => alert('Event listener'));


function alertFunction() {
    alert("YAY! YOU DID IT with alert function");
  }


  // estos dos con btn declarado en variable en el documento js
  const btnalert = document.querySelector('#btnalert');
  // btnalert.onclick = alertFunction;
  //btnalert.addEventListener('click', alertFunction);
/* btnalert.addEventListener('click', function (e) {
      console.log(e)}); */
/* btnalert.addEventListener('click', function (e) {
        console.log(e.target)}); */

  btnalert.addEventListener('click', function (e) {
      e.target.style.backgroundColor = 'blue'});

   /*    *Note that function (e) is a callback from addEventListener. The e in that function is an object that references the event itself. Within that object you have access to many useful properties and functions such as which mouse button or key was pressed, or information about the event’s target - the DOM node that was clicked.*/