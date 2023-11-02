const dino = document.getElementById("dino")
const cactus = document.getElementById("cactus")


let jumps = 0


document.addEventListener("keydown", (e)=> {
    jump()
})


function jump (){
    
    if(dino.classList !="jump"){
        dino.classList.add("jump")
        ++jumps
    setTimeout(()=>{
        
        dino.classList.remove("jump") 
    },350)
    }
   
}

let isAlive = setInterval(()=> {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

    if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140){
        cactus.classList.remove("animaCactus") 
        alert(`game over!  jumps ${jumps} !`)
        cactus.classList.add("animaCactus") 
        jumps = 0
    }
},10)