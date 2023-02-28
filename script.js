const uploadBtn = document.getElementById('upload-btn');
const fileInput = document.getElementById('file-input');

uploadBtn.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', () => {
    // Handle file input change event
});