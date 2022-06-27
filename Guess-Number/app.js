let inputNumber = document.getElementById("inputNumber");
let button = document.getElementById("button");
let guesscounter = document.getElementById("tahminsayisi");
let result = document.getElementById("sonuc");
let computerNumber = Math.floor(Math.random()*100)

console.log(computerNumber)

button.addEventListener("click", function(){
    for(i=0; i<10; i++){
        if(inputNumber.value == computerNumber){
            guesscounter.innerHTML = ""
            result.innerHTML = "Congrats, You Won The Prize!!!"
            break;
        }
        else if(Number(guesscounter.innerHTML) == 10){
            guesscounter.innerHTML = ""
            result.innerHTML = "Your guess rights over :("
            window.location.reload()
            break;
        }
        else if(inputNumber.value < computerNumber){
            guesscounter.innerHTML = (Number(guesscounter.innerHTML) + Number("1"))
            result.innerHTML = "Guess Up"
            inputNumber.value = ""
            break;
        }
        else if(inputNumber.value > computerNumber ){
            guesscounter.innerHTML = (Number(guesscounter.innerHTML) + Number("1"))
            result.innerHTML = "Guess Down"
            inputNumber.value = ""
            break;
        }
    }
})