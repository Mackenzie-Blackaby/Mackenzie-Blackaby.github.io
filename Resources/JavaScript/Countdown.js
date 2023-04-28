var targetDate = new Date("April 28, 2024 00:00:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var difference = targetDate - now;
  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    days +
    " Days, " +
    hours +
    " Hours, " +
    minutes +
    " Minutes and " +
    seconds +
    " Seconds! ";

  if (difference < 0) {
    window.location.href = "Pages/AnniversaryYear2.html";
  }
});
