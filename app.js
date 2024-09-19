window.addEventListener("scroll", function () {
    const scrollHeader = document.getElementById("scroll-header");
  
    if (window.scrollY > 20) {
      scrollHeader.classList.add("scroll");
    } else {
      scrollHeader.classList.remove("scroll");
    }
  });