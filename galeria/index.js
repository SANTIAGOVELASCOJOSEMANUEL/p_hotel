const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

// Find all elements with class "image-container"
const imageContainers = document.querySelectorAll(".image-container");

let currentImageIndex = 0;

imageContainers.forEach((container, index) => {
    container.addEventListener("click", () => {
        openModal();
        currentImageIndex = index;
        displayImage(currentImageIndex);
    });
});

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

modal.addEventListener("click", () => {
    closeModal();
});

modalImage.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent modal from closing when clicking the image.
});

prevButton.addEventListener("click", () => {
    navigateImages(-1);
});

nextButton.addEventListener("click", () => {
    navigateImages(1);
});

// Allow keyboard navigation (left and right arrow keys)
document.addEventListener("keydown", (e) => {
    if (modal.style.display === "block") {
        if (e.key === "ArrowLeft") {
            navigateImages(-1);
        } else if (e.key === "ArrowRight") {
            navigateImages(1);
        }
    }
});

function navigateImages(direction) {
    currentImageIndex = (currentImageIndex + direction + imageContainers.length) % imageContainers.length;
    displayImage(currentImageIndex);
}

function displayImage(index) {
    modalImage.src = imageContainers[index].querySelector("img").src;
    captionText.innerHTML = imageContainers[index].querySelector("a").getAttribute("data-title");
}

function plusSlides(n) {
    currentImageIndex = (currentImageIndex + n + imageContainers.length) % imageContainers.length;
    displayImage(currentImageIndex);
}

displayImage(currentImageIndex);
