// grabbing all DOM elements for future use
const btn1 = document.getElementById('bio1')
const btn2 = document.getElementById('bio2')
const btn3 = document.getElementById('bio3')
const btn4 = document.getElementById('bio4')
const btn5 = document.getElementById('bio5')
const btn6 = document.getElementById('bio6')
const characterBio1 = document.getElementById('bioInfo1')
const characterBio2 = document.getElementById('bioInfo2')
const characterBio3 = document.getElementById('bioInfo3')
const characterBio4 = document.getElementById('bioInfo4')
const characterBio5 = document.getElementById('bioInfo5')
const characterBio6 = document.getElementById('bioInfo6')
const status1 = document.getElementById('status1')
const status2 = document.getElementById('status2')
const status3 = document.getElementById('status3')
const status4 = document.getElementById('status4')
const status5 = document.getElementById('status5')
const status6 = document.getElementById('status6')

// btn click setting
let btn1Clicked = false
let btn2Clicked = false
let btn3Clicked = false
let btn4Clicked = false
let btn5Clicked = false
let btn6Clicked = false

// status click setting
let status1Clicked = false
let status2Clicked = false
let status3Clicked = false
let status4Clicked = false
let status5Clicked = false
let status6Clicked = false

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed')
})

btn1.addEventListener('click', (event) => {
    if (btn1Clicked === false) {
        characterBio1.style.display = 'flex'
        characterBio1.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Adipiscing elit duis tristique sollicitudin nibh sit.'
        btn1Clicked = true
    } else if (btn1Clicked === true) {
        characterBio1.style.display = 'none'
        characterBio1.innerText = ''
        btn1Clicked = false
    }
})

btn2.addEventListener('click', (event) => {
    if (btn2Clicked === false) {
        characterBio2.style.display = 'flex'
        characterBio2.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Adipiscing elit duis tristique sollicitudin nibh sit.'
        btn2Clicked = true
    } else if (btn2Clicked === true) {
        characterBio2.style.display = 'none'
        btn2Clicked = false
    }
})

btn3.addEventListener('click', (event) => {
    if (btn3Clicked === false) {
        characterBio3.style.display = 'flex'
        characterBio3.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Adipiscing elit duis tristique sollicitudin nibh sit.'
        btn3Clicked = true
    } else if (btn3Clicked === true) {
        characterBio3.style.display = 'none'
        btn3Clicked = false
    }
})

btn4.addEventListener('click', (event) => {
    if (btn4Clicked === false) {
        characterBio4.style.display = 'flex'
        characterBio4.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Adipiscing elit duis tristique sollicitudin nibh sit.'
        btn4Clicked = true
    } else if (btn4Clicked === true) {
        characterBio4.style.display = 'none'
        btn4Clicked = false
    }
})

btn5.addEventListener('click', (event) => {
    if (btn5Clicked === false) {
        characterBio5.style.display = 'flex'
        characterBio5.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Adipiscing elit duis tristique sollicitudin nibh sit.'
        btn5Clicked = true
    } else if (btn5Clicked === true) {
        characterBio5.style.display = 'none'
        btn5Clicked = false
    }
})

btn6.addEventListener('click', (event) => {
    if (btn6Clicked === false) {
        characterBio6.style.display = 'flex'
        characterBio6.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Adipiscing elit duis tristique sollicitudin nibh sit.'
        btn6Clicked = true
    } else if (btn6Clicked === true) {
        characterBio6.style.display = 'none'
        btn6Clicked = false
    }
})

status1.addEventListener('click', (event) => {
    if (status1Clicked === false) {
        characterBio1.style.display = 'flex'
        characterBio1.innerText = 'Alive'
        status1Clicked = true
    } else if (status1Clicked === true) {
        characterBio1.style.display = 'none'
        characterBio1.innerText = ''
        status1Clicked = false
    }
})

status2.addEventListener('click', (event) => {
    if (status2Clicked === false) {
        characterBio2.style.display = 'flex'
        characterBio2.innerText = 'Alive'
        status2Clicked = true
    } else if (status2Clicked === true) {
        characterBio2.style.display = 'none'
        characterBio2.innerText = ''
        status2Clicked = false
    }
})

status3.addEventListener('click', (event) => {
    if (status3Clicked === false) {
        characterBio3.style.display = 'flex'
        characterBio3.innerText = 'Alive'
        status3Clicked = true
    } else if (status3Clicked === true) {
        characterBio3.style.display = 'none'
        characterBio3.innerText = ''
        status3Clicked = false
    }
})

status4.addEventListener('click', (event) => {
    if (status4Clicked === false) {
        characterBio4.style.display = 'flex'
        characterBio4.innerText = 'Alive'
        status4Clicked = true
    } else if (status4Clicked === true) {
        characterBio4.style.display = 'none'
        characterBio4.innerText = ''
        status4Clicked = false
    }
})

status5.addEventListener('click', (event) => {
    if (status5Clicked === false) {
        characterBio5.style.display = 'flex'
        characterBio5.innerText = 'Alive'
        status5Clicked = true
    } else if (status5Clicked === true) {
        characterBio5.style.display = 'none'
        characterBio5.innerText = ''
        status5Clicked = false
    }
})

status6.addEventListener('click', (event) => {
    if (status6Clicked === false) {
        characterBio6.style.display = 'flex'
        characterBio6.innerText = 'Alive'
        status6Clicked = true
    } else if (status6Clicked === true) {
        characterBio6.style.display = 'none'
        characterBio6.innerText = ''
        status6Clicked = false
    }
})