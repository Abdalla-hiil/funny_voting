const contestants = document.querySelectorAll("#contestants li");
const modal = document.getElementById("popupModal");
const closeBtn = document.getElementById("closeModal");
const voteSound = document.getElementById("voteSound");

// Hide modal on load
modal.style.display = "none";

contestants.forEach(item => {
  item.addEventListener("click", () => {
    voteSound.currentTime = 0; // Reset sound to start
    voteSound.play(); // Play vote sound

    // Show modal
    modal.style.display = "flex";
    modal.setAttribute("aria-hidden", "false");

    // Always show Xasan Sheekh Maxamed info in modal (fixed image and name)
    const modalTitle = document.getElementById("modalTitle");
    modalTitle.innerHTML = `Thank you, you voted <br />HASSAN SHEIKH MOHAMUD`;

    const modalImg = document.querySelector(".popup-image");
    modalImg.src = "images/hassan.jpg"; // fixed image for Xasan Sheekh
    modalImg.alt = "President Hassan Sheikh Mohamud";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
});

window.addEventListener("click", event => {
  if (event.target === modal) {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
  }
});

window.addEventListener("keydown", e => {
  if (e.key === "Escape" && modal.style.display === "flex") {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
  }
});
