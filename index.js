const dropZone = document.querySelector(".drop-zone");
const fileInput = document.querySelector("#file-input");
const browsBtn = document.querySelector(".browsBtn");

dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
  if (!dropZone.classList.add("dragged")) {
    dropZone.classList.add("dragged");
  }
});

dropZone.addEventListener("dragleave", (e) => {
  dropZone.classList.remove("dragged");
});

dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  dropZone.classList.remove("dragged");
});

browsBtn.addEventListener("click", () => {

  fileInput.click();
});
