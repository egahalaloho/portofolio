const myProject = document.querySelectorAll(".myproject");
myProject.forEach((project, i) => {
  project.dataset.aos = "flip-down";
  if (i !== 0) {
    project.dataset.aosDelay = i * 100;
  }
});
