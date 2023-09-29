document.addEventListener("scroll", () => {
  console.log(window.scrollY);
  const headerChange = document.getElementById("first-header");
  const btnHeader = document.getElementById("first-btn");
  if (window.scrollY > 400) {
    headerChange.classList.add("newColor");
    btnHeader.classList.add("newColorBtn");
  } else if (window.scrollY < 400) {
    headerChange.classList.remove("newColor");
    btnHeader.classList.remove("newColorBtn");
  }
});

document.addEventListener("scroll", () => {
  const sticky = document.getElementById("sticky-r");
  if (window.scrollY > 800) {
    sticky.classList.add("sticky");
  }
});
document.addEventListener("click", (e) => {
  console.log(e);
});
