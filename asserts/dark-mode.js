document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.createElement("button");
    toggleButton.id = "dark-mode-toggle";
    toggleButton.textContent = "🌙 Toggle Dark Mode";
    document.body.appendChild(toggleButton);
  
    toggleButton.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
      localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
    });
  
    if (localStorage.getItem("dark-mode") === "true") {
      document.body.classList.add("dark-mode");
    }
  });