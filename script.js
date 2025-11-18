window.onload = () => {
    document.querySelectorAll(".bar span").forEach((bar) => {
        bar.style.width = bar.getAttribute("data-width");
    });
};
