const buttons = document.querySelectorAll(".buttons .button");
const lottaryBtn = document.querySelector(".lottary");

lottaryBtn.addEventListener("click", ()=>{
    const lotterynumbers = [];
    for(let i = 1; i<=6; i++){
        let number = Math.ceil(Math.random()*48);
        if(lotterynumbers.indexOf(number) == -1){
            lotterynumbers.push(number);
        }
        else{
            i--;
        }
        }
        let i = 0;
    buttons.forEach((btn) => {
        btn.textContent = lotterynumbers[i]
        i++;
    });
})
