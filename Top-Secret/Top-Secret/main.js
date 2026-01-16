const buttons = document.querySelectorAll(".tab-btn");
const sections = document.querySelectorAll(".tab-content");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const target = button.dataset.tab;

    sections.forEach(section => {
      section.style.display = "none";
    });

    document.getElementById(target).style.display = "block";
  });
});