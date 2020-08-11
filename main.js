//get all UI variables

//card image UI
document.getElementById('cover-option').addEventListener('change', function () {
  document.getElementById('cover-img').style.visibility = this.value;
});

//first Name UI
const input = document.getElementById('fname');
const log = document.getElementById('firstName');
input.addEventListener('change', updateValue);
//last Name UI
const input2 = document.getElementById('lname');
const log2 = document.getElementById('lastName');
input2.addEventListener('change', updateLast);

//updates first name
//target.value gets the text
function updateValue(fname) {
  log.textContent = fname.target.value;
}
//updates last name
//target.value gets the text
function updateLast(lname) {
  log2.textContent = lname.target.value;
}
