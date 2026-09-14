// Changing the gallery images
function changeImage(thumbnail) {
    let mainImg = document.getElementById("mainImg");
    let thumbnails = document.querySelectorAll(".gallery-container .thumbnail");

    // Update main image source
    mainImg.src = thumbnail.src;

    // Remove active class from all thumbnails
    thumbnails.forEach(img => img.classList.remove("active"));

    // Add active class to clicked thumbnail
    thumbnail.classList.add("active");

    // Trigger image reflow for smooth transition
    mainImg.onload = function() {
        mainImg.style.transition = 'width 0.3s ease-in-out, height 0.3s ease-in-out';
    };
}

