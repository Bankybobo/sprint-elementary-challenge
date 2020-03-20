function el (elementID) {
    return document.getElementById(elementID)
}

var ass1 = el("ass1")
var ass2 = el("ass2")
var ass3 = el("ass3")
var ass4 = el("ass4")
var ass5 = el("ass5")
var ass6 = el("ass6")
var ass7 = el("ass7")
var ass8 = el("ass8")
var displayRight = el("displayRight")

const ourbtns = document.querySelectorAll('button')
for (let i = 0; i < ourbtns.length; i++){
    ourbtns[i].addEventListener('click', showQuestion)
}

function showQuestion (e) {
    if (e.target.id === "ass1"){
        displayRight.innerHTML = '<h3>Write a program that asks the user for their name and greets them with their name.</h3> <br> <a href="1.html" ><button style="background-color: "red";">Click here for Assignment One</button></a>'
    }

    if (e.target.id === "ass2"){
        displayRight.innerHTML = '<h3>Modify the previous program such that only the users Alice and Bob are greeted with their names.</h3> <br> <a href="2.html" ><button style="background-color: "red";">Click here for Assignment Two</button></a>'
    }

    if (e.target.id === "ass3"){
        displayRight.innerHTML = '<h3>Write a program that asks the user for an arbitrary number N and prints the sum of the numbers 1 to N</h3> <br> <a href="3.html" ><button style="background-color: "red";">Click here for Assignment Three</button></a>'
    }

    if (e.target.id === "ass4"){
        displayRight.innerHTML = '<h3>Modify the previous program such that only multiples of three or five are considered in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for N = 17</h3> <br> <a href="4.html" ><button style="background-color: "red";">Click here for Assignment Four</button></a>'
    }

    if (e.target.id === "ass5"){
        displayRight.innerHTML = '<h3>Write a program that asks the user for an arbitrary number N and gives them the possibility to choose between computing the sum and computing the product of 1…, N.</h3> <br> <a href="5.html" ><button style="background-color: "red";">Click here for Assignment Five</button></a>'
    }

    if (e.target.id === "ass6"){
        displayRight.innerHTML = '<h3>Write a program that prints a multiplication table for numbers up to 12.</h3> <br> <a href="6.html" ><button class="redBTN">Click here for Assignment Six</button></a>'
    }

    if (e.target.id === "ass7"){
        displayRight.innerHTML = '<h3>Write a program that prints all prime numbers from 20….. N.</h3> <br> <a href="7.html" ><button style="background-color: "red";">Click here for Assignment Seven</button></a>'
    }

    if (e.target.id === "ass8"){
        displayRight.innerHTML = '<h3>Write a program that prints the next 20 leap years.</h3> <br> <a href="8.html" ><button style="background-color: "red";">Click here for Assignment Eight</button></a>'
    }

}

