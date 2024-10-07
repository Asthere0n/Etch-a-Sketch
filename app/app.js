const screen = document.querySelector('.screen')

//Reseteando la pantalla
resetPixelScreen = function () {
    while (screen.firstChild) {
        screen.removeChild(screen.firstChild)
    }
}

//Creando los pixeles de nuestro Canvas
createPixelScreen = function (side) {
    resetPixelScreen()
    for (i = 0; i < side * side; i++) {
        const div = document.createElement('div')
        div.classList.add('pixel')
        screen.appendChild(div)
    }

    const screenPixels = document.querySelectorAll('.pixel')

    screenPixels.forEach((pixel) => {
        pixel.addEventListener('mouseenter', () => {
            pixel.classList.add('painted')
        })
    });
}

const pixelResolution = document.querySelector('#resolution').value

document.querySelector('#createButton').addEventListener('click', () => { createPixelScreen(pixelResolution) })



//Pintando en la pantalla

