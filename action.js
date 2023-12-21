window.onload = (event) => {
    const x = document.querySelector(".card");
  
    for (let i = 0; i < x.length; i++) {
      x[i].addEventListener("click", function () {
        if (x[i].className == "card") {
          x[i].classList.add("clicked");
        } else {
          x[i].classList.remove("clicked");
        }
      });
    }
  };
  
  function reset() {
    const x = document.querySelector(".card");
  
    for (let i = 0; i < x.length; i++) {
      if (x[i].className == "card clicked") {
        x[i].classList.remove("clicked");
      }
    }
  }