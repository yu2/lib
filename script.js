
function handleFiles() {
    const content = document.querySelector("#p1");
    const [file] = document.querySelector("#input").files;          
    
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        document.getElementById("p1").innerText = reader.result;

    }, false)

    if (file) {
        reader.readAsText(file);
    }
    
}