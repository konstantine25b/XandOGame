const x = document.querySelectorAll(".x")
const reset = document.querySelector(".reset")
const aside2P = document.querySelector(".aside2P")

let count = 0

for(let i = 0; i < 9; i++){
   
    x[i].addEventListener("click", function(){
        count++
        if(this.textContent=="o"||this.textContent=="x"){
            count--

        }
       
        
        else if(count%2==0){
            this.textContent="o"
            count = 0
            
            
            
            
            
        }
        else if(count%2==1){
            this.textContent="x"
            
            
            
        }
        
        // for(let i = 0; i<7; i+=3){
        //     if(x[i].textContent !="" && x[i].textContent==x[i+1].textContent &&x[i].textContent==x[i+2].textContent ){
        //     aside2P.textContent+=" " + x[i].textContent
        //         x[i].style.backgroundColor="green"
        //         x[i+1].style.backgroundColor="green"
        //         x[i+2].style.backgroundColor="green"
        //     stopGame()
            
        // }
        // }
        // for(let i = 0; i<3; i++){
        //     if(x[i].textContent !="" && x[i].textContent==x[i+3].textContent &&x[i].textContent==x[i+6].textContent ){
        //         aside2P.textContent+=" " + x[i].textContent
        //         x[i].style.backgroundColor="green"
        //         x[i+3].style.backgroundColor="green"
        //         x[i+6].style.backgroundColor="green"
        //         stopGame()
        //     }

        // }
        for(let i=0;i<x.length;i++){
            if(i%3==0 && x[i].textContent !="" && x[i].textContent==x[i+1].textContent &&x[i].textContent==x[i+2].textContent){
                    aside2P.textContent+=" " + x[i].textContent
                        x[i].style.backgroundColor="green"
                        x[i+1].style.backgroundColor="green"
                        x[i+2].style.backgroundColor="green"
                    stopGame()
            }
            if(i<3  && x[i].textContent !="" && x[i].textContent==x[i+3].textContent &&x[i].textContent==x[i+6].textContent ){
                        aside2P.textContent+=" " + x[i].textContent
                        x[i].style.backgroundColor="green"
                        x[i+3].style.backgroundColor="green"
                        x[i+6].style.backgroundColor="green"
                        stopGame()
            }
            
        
        
        }
        if(x[0].textContent !="" && x[0].textContent==x[4].textContent &&x[0].textContent==x[8].textContent){
            aside2P.textContent+=" " + x[i].textContent
            x[0].style.backgroundColor="green"
            x[4].style.backgroundColor="green"
            x[8].style.backgroundColor="green"
                
                stopGame()
        }
        if(x[2].textContent !="" && x[4].textContent==x[2].textContent &&x[2].textContent==x[6].textContent){
            aside2P.textContent+=" " + x[i].textContent
            x[2].style.backgroundColor="green"
            x[4].style.backgroundColor="green"
            x[6].style.backgroundColor="green"
                stopGame()
        }


        
        
        
        
    } )
   
    
   
}
function stopGame (){
    for(let i of x){
        i.style.pointerEvents = "none"
    }
}
reset.addEventListener("click", function(){
for(let i of x){
    i.style.pointerEvents = "auto"
    i.textContent=""
    i.style.backgroundColor="rgb(222, 209, 209)"
    aside2P.textContent= "Winner:"
}
})


