const container = document.querySelector("#container")

function callBoard(size=16, color = false, opacity = false) {
    let trans = 1
    let cell = `${(900/size)}px`
    for (let i = 1; i <= size; i++) {
        const row = document.createElement("div"); // Creates a new row
        row.classList.add(`row-${i}`) // Add a class element to the row
        row.style.cssText = "display: flex;"
        for (let j = 1; j <= size; j++) {
            const column = document.createElement("div") // Each row will contain 16 columns 
            column.setAttribute("id", `column-${j}`) // Each column contains a unique class
            column.classList.add("cell")
            column.style.cssText = `display: flex; width: ${cell}; height: ${cell};`
            column.addEventListener("mouseover",() => {
                color ? column.style.background = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})` 
                : column.style.background = "black"
                if (opacity) {
                    column.style.opacity = trans
                    trans -= .1
                    console.log(trans)
                    if (trans < 0.1) {
                        trans = 1
                    }
                }
            });
            row.appendChild(column) // Appends each column to that row
        };
        container.appendChild(row) // Appends that row to the container div
    };
}

function clearBoard() {
    while (container.firstChild) {
        container.firstChild.remove()
    }
}

callBoard()


const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.id === "1") {
            let size = parseInt(prompt("What size do you want the grid to be? "))
            if (size > 100 || size <= 0) {
                size = 100
            }
            clearBoard()
            callBoard(size)
        }
        else if (button.id === "2") {
            let size = parseInt(prompt("What size do you want the grid to be? "))
            if (size > 100 || size <= 0) {
                size = 100
            }
            clearBoard()
            callBoard(size, true, false)
        }
        else if (button.id === "3") {
            let size = parseInt(prompt("What size do you want the grid to be? "))
            if (size > 100 || size <= 0) {
                size = 100
            }
            clearBoard()
            callBoard(size, false, true)
        }
    });
});
