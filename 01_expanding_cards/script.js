const panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
    panel.addEventListener("click", (e) => {
        document.querySelector(".active").classList.remove("active");
        panel.classList.add("active");
    });
});