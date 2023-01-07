var count = 0;
function countVisitors() {
 count++;
 document.getElementById("visitor-count").innerHTML =
  "Total visitors: " + count;
}
