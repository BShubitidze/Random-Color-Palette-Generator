const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-btn");

const maxPalleteBoxes = 32;

const generatePalette = () => {
    container.innerHTML = ""; //clearing the container
    for (let i = 0; i < maxPalleteBoxes; i++) {

        //creating ramdom hex color
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`;

        //creating li element and inserting it to the container
        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div>
                        <span class="hex-value" style="color: ${randomHex}">${randomHex}</span>`;

        // adding click event to current li  to copy the color
        color.addEventListener("click", () => copyColor(color, randomHex));
        container.appendChild(color);
    }

}

const copyColor = (elem, hexVal) => {
    const colorElement = elem.querySelector(".hex-value");

    //coping the text value, updating the text to copied 
    //and changing text back to original  hext value after 1 sec
    navigator.clipboard.writeText(hexVal).then(() => {
        colorElement.innerText = "copied"
        setTimeout(() => colorElement.innerText = hexVal, 1000);
    }).catch(() => alert("Failed to copy try again"));
}

generatePalette();

refreshBtn.addEventListener('click', generatePalette);