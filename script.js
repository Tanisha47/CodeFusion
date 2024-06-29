let output = document.querySelector("iframe");
let allInput = document.querySelectorAll(".left-part textarea");
let htmlCode = '', cssCode = '', jsCode = '';

allInput.forEach((el, index) => {
    el.addEventListener("keyup", () => {
        if (index == 0) {
            htmlCode = el.value;
        }
        if (index == 1) {
            cssCode = el.value;
        }
        if (index == 2) {
            jsCode = el.value;
        }
        updateOutput();
    });
});

function updateOutput() {
    let outputDoc = output.contentDocument;
    outputDoc.open();
    outputDoc.write(`${htmlCode}<style>${cssCode}</style><script>${jsCode}</script>`);
    outputDoc.close();
}

function copyCode(id) {
    let textarea = document.getElementById(id);
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");
    alert(`${id} copied to clipboard`);
}
