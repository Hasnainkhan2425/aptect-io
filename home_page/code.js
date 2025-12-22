function openPreview(title, image, article) {

    document.getElementById("previewTitle").textContent = title;
    document.getElementById("previewImage").src = image;
    document.getElementById("previewArticle").textContent = article;

    document.getElementById("previewPage").classList.add("active");

    // Disable background scroll
    document.body.style.overflow = "hidden";
}

function closePreview() {
    document.getElementById("previewPage").classList.remove("active");

    // Restore background scroll
    document.body.style.overflow = "auto";
}
