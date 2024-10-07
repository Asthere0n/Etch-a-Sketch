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
    console.log(side*side + ' pixeles creados')

    

    //Pintando en la pantalla
    const screenPixels = document.querySelectorAll('.pixel')

    screenPixels.forEach((pixel) => {
        pixel.addEventListener('mouseenter', () => {
            pixel.classList.add('painted')
        })
    });
}


document.querySelector('#createButton').addEventListener('click', () => {
    const pixelResolution = document.querySelector('#resolution').value
    createPixelScreen(pixelResolution)
})





