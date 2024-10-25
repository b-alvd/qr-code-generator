const container = document.querySelector(".container");
const qrInput = container.querySelector(".container .form input");
const generateBtn = container.querySelector(".container .form button");
const qrImage = container.querySelector(".container .qr-code img");
let preValue;

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if(!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    generateBtn.innerText = "Generating QR-Code...";
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImage.addEventListener("load", () => {
        container.classList.add("active");
        generateBtn.innerText = "Generate QR-Code";
    })
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value.trim()) {
        container.classList.remove("active");
        preValue = "";
    }
});
