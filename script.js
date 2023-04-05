// let inp = document.getElementById("inp");
// function replacesomething () {
//    let myText = inp.value;
//    if(myText.includes("man")) {
//     inp.value = myText.replace("man" ,"woman")
//    }
// }
// let extract = "Taking text out of a string"
// console.log(extract.slice(2 ,7));
// console.log(extract.substring(2,7));
// console.log(extract.substr(2,7))

// ARRAY
// Array OF NUMBERS[1,2,3,4,5,6,7,8,9,]
// ARRAY OF STRINGS["My name","Your name","his name,"her name"]
//ARRAY OF OBJECTS
// DOM MANIPULATION(document.getElement())

document.getElementById("hide").style.display = "none"
document.getElementById('test2').style.display = "none"

function showlorem () {
    document.getElementById('hide').style.display = "block"
    document.getElementById('test1').style.display = "none"
    document.getElementById('test2').style.display = "block"
    document.getElementById('another').style.display = "none"
}
function showAnother () {
    document.getElementById('test2').style.display = "none"
    document.getElementById('hide').style.display = 'none'
    document.getElementById('test1').style.display = "block"
    document.getElementById('another').style.display = "block"
}