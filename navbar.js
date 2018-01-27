
  function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += "responsive";
      console.log("class is navbar");
    } else {
      x.className = "navbar";
      console.log("change class to navbar");
    }
  }
