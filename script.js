document.addEventListener("DOMContentLoaded", () => {
    const heading = document.getElementById("main-heading");
    const description = document.getElementById("description");
    const changeTextBtn = document.getElementById("changeTextBtn");
    const addElementBtn = document.getElementById("addElementBtn");
    const removeElementBtn = document.getElementById("removeElementBtn");
    const dynamicContent = document.getElementById("dynamic-content");

    // Change text and styles dynamically
    changeTextBtn.addEventListener("click", () => {
        description.textContent = "The text has been updated!";
        description.style.color = "blue";
        description.style.fontSize = "18px";
        heading.style.backgroundColor = "lightgray";
        heading.style.padding = "10px";
    });

    // Add a new element dynamically
    addElementBtn.addEventListener("click", () => {
        const newParagraph = document.createElement("p");
        newParagraph.textContent = "This is a new dynamically added paragraph.";
        newParagraph.style.color = "green";
        newParagraph.classList.add("dynamic-paragraph");
        dynamicContent.appendChild(newParagraph);
    });

    // Remove the last added element
    removeElementBtn.addEventListener("click", () => {
        const lastElement = dynamicContent.lastElementChild;
        if (lastElement) {
            dynamicContent.removeChild(lastElement);
        }
    });
});
