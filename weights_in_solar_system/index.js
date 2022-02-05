const img = document.querySelector("#planet")
const select = document.querySelector("select")
const resultDiv = document.querySelector("#result")
const button = document.querySelector("button")
const input = document.querySelector("#weight")

select.selectedIndex = 2
const gravityAcc = {
    "mercury" : 3.7,
    "venus" : 8.87,
    "earth" : 9.80,
    "moon" : 1.62,
    "mars" : 3.72,
    "jupiter" : 24.79,
    "saturn" : 10.44,
    "uranus" : 8.87,
    "neptune" : 11.15
}
       
function capitalize (str) {
    str = str.charAt(0).toUpperCase() + str.slice(1)
    return str
}

let calcWeight = (planet) => {
    let weight = document.getElementById('weight').value
    return (weight * gravityAcc[planet]).toFixed(2)
}

let write = (planet, div) => {
    if (calcWeight(planet) != 0)
        div.innerHTML = "The weight of the object on " 
        +  capitalize(planet) + "<br><br>"
        + calcWeight(planet) + " N";
    else
        div.textContent = "Mass is required"
}

function showImageAndResult() {
    planet = select.options[select.selectedIndex].value
    let fileDir = "images/" + planet + ".png"
    img.setAttribute("src", fileDir)
    console.log(fileDir)
    console.log(img)
    console.log("sdad: " + select.options[select.selectedIndex].value)
    
    write(planet, resultDiv)
}

select.addEventListener("change", showImageAndResult)

// button.addEventListener("click", () => {
//     write(select.options[select.selectedIndex].value, resultDiv)
// })

input.addEventListener("input", () => {
    write(select.options[select.selectedIndex].value, resultDiv)
})

// to show the image when entered the website (no event triggered)
showImageAndResult() 