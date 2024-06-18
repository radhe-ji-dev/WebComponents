document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".hide").forEach((hideButton) => {
    hideButton.addEventListener("click", (event) => {
      const photo = event.target.closest(".photo");
      const img = photo.querySelector("img");
      const showButton = photo.querySelector(".show");
      if (img) {
        img.style.display = "none";
        hideButton.style.display = "none";
        showButton.style.display = "block";
      }
    });
  });

  document.querySelectorAll(".show").forEach((showButton) => {
    showButton.addEventListener("click", (event) => {
      const photo = event.target.closest(".photo");
      const img = photo.querySelector("img");
      const hideButton = photo.querySelector(".hide");
      if (img) {
        img.style.display = "block";
        showButton.style.display = "none";
        hideButton.style.display = "block";
      }
    });
  });
});
