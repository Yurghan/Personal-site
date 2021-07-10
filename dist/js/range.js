var outputVal = document.getElementById('out');
var range = document.getElementById('pages');

outputVal.innerHTML = range.value;

range.oninput = function () {
  outputVal.innerHTML = this.value;
};
