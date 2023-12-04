function toggleContent() {
    var additionalContent = document.getElementById("additionalContent");

    if (additionalContent.style.display === "none") {
        additionalContent.style.display = "block";
    } else {
        additionalContent.style.display = "none";
    }
}
function scrollToForm() {
    var formSection = document.querySelector('.program-description');
    formSection.scrollIntoView({ behavior: 'smooth' });
}
