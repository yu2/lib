import t from "snarkdown.modern.js";

function handleFiles() {
    const content = document.querySelector("#p1");
    const [file] = document.querySelector("#input").files;          
    
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        let parsedText = t(reader.result);
        document.getElementById("p1").innerText = parsedText;

    }, false)

    if (file) {
        reader.readAsText(file);
    }
    
}