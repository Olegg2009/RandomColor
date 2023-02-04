let red = Math.floor(Math.random() * (255 - 1) + 1);
let green = Math.floor(Math.random() * (255 - 1) + 1);
let blue = Math.floor(Math.random() * (255 - 1) + 1);
let color = `rgb(${red}, ${green}, ${blue})`;
    
function white(){
    document.getElementById("button").style.color = "rgb(0, 0, 0)"   
    document.getElementById("black").style.color = "rgb(0, 0, 0)"
    document.getElementById("white").style.color = "rgb(0, 0, 0)"
    document.getElementById("button").style.backgroundColor = "rgb(240, 240, 240)"
    document.getElementById("black").style.backgroundColor = "rgb(240, 240, 240)"
    document.getElementById("white").style.backgroundColor = "rgb(240, 240, 240)"
    document.getElementById("rgb").style.color = "rgb(0, 0, 0)"
    document.getElementById("codes").style.color = "rgb(0, 0, 0)"
    color = "rgb(255, 255, 255)"
    document.getElementById("body").style.backgroundColor = color;
}
function black(){
    document.getElementById("button").style.color = "rgb(0, 0, 0)"
    document.getElementById("rgb").style.color = "rgb(255, 255, 255)"
    document.getElementById("codes").style.color = "rgb(255, 255, 255)"
    document.getElementById("button").style.backgroundColor = "rgb(240, 240, 240)"
    document.getElementById("black").style.backgroundColor = "rgb(240, 240, 240)"
    document.getElementById("white").style.backgroundColor = "rgb(240, 240, 240)"
    document.getElementById("black").style.color = "rgb(0, 0, 0)"
    document.getElementById("white").style.color = "rgb(0, 0, 0)"
    color = "rgb(0, 0, 0)"
    document.getElementById("body").style.backgroundColor = color;
}
function randomColor(){
    document.getElementById("codes").innerHTML += `<p style="color: rgb(${red}, ${green}, ${blue}"> ${red}, ${green}, ${blue}</p>`

    red = Math.floor(Math.random() * (255 - 1) + 1);
    green = Math.floor(Math.random() * (255 - 1) + 1);
    blue = Math.floor(Math.random() * (255 - 1) + 1);

    color = `rgb(${red}, ${green}, ${blue})`;

    document.getElementById("body").style.backgroundColor = color;
    document.getElementById("rgb").innerText = `RGB code: ${red}, ${green}, ${blue}`;
    document.getElementById("button").style.backgroundColor = `rgb(${red + 10}, ${green + 10}, ${blue + 10})`
    document.getElementById("white").style.backgroundColor = `rgb(${red + 10}, ${green + 10}, ${blue + 10})`
    document.getElementById("black").style.backgroundColor = `rgb(${red + 10}, ${green + 10}, ${blue + 10})`
    
    if((red > 128 && green > 128) || (red > 128 && blue > 128) || (green > 128 && blue > 128)){

        document.getElementById("button").style.color = "rgb(0, 0, 0)"
        document.getElementById("rgb").style.color = "rgb(0, 0, 0)"
        document.getElementById("codes").style.color = "rgb(0, 0, 0)"
        document.getElementById("black").style.color = "rgb(0, 0, 0)"
        document.getElementById("white").style.color = "rgb(0, 0, 0)"
    } 
    else{
        document.getElementById("button").style.color = "rgb(255, 255, 255)"
        document.getElementById("rgb").style.color = "rgb(255, 255, 255)"
        document.getElementById("codes").style.color = "rgb(255, 255, 255)"
        document.getElementById("black").style.color = "rgb(255, 255, 255)"
        document.getElementById("white").style.color = "rgb(255, 255, 255)"
    }
}   