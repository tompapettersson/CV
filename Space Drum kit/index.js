


    document.querySelector(".w").style.backgroundImage="url('images/crash.png')";
    document.querySelector(".a").style.backgroundImage="url('images/kick.png')";
    document.querySelector(".s").style.backgroundImage="url('images/snare.png')";
    document.querySelector(".d").style.backgroundImage="url('images/tom1.png')";
    document.querySelector(".j").style.backgroundImage="url('images/tom2.png')";
    document.querySelector(".k").style.backgroundImage="url('images/tom3.png')";
    document.querySelector(".l").style.backgroundImage="url('images/tom4.png')";
//

var numberOfDrumButtons = document.querySelectorAll(".drum").length;
// Loppar igenom alla knappar för att använda eventlistener på alla kanappar. 
for(var i = 0; i < numberOfDrumButtons; i++){
// Använder Click event för att aktivera funktionen nedan. 
document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);



}

function handleClick (){

var buttonInnerHTML = this.innerHTML;
makeSound(buttonInnerHTML);

    
    }

// lägger en addEventListener till tangentbordet.     
document.addEventListener("keypress", function(event){

makeSound(event.key);

});
    

function makeSound(key) {



    switch (key) {
        case "w":
        var audio = new Audio ("sounds/crash.mp3");
         audio.play();
            
            break;
    case "a":
    var audio = new Audio ("sounds/kick-bass.mp3");
         audio.play();
            
            break;
    
            case "s":
    var audio = new Audio ("sounds/snare.mp3");
         audio.play();
            
            break;
            case "d":
    var audio = new Audio ("sounds/tom-1.mp3");
         audio.play();
            
            break;
            case "j":
    var audio = new Audio ("sounds/tom-2.mp3");
         audio.play();
            
            break;
    
            case "k":
            var audio = new Audio ("sounds/tom-3.mp3");
                 audio.play();
                    
                    break;
    
            case "l":
            var audio = new Audio ("sounds/tom-4.mp3");
             audio.play();
                            
                    break;        
        default: 
    
        console.log("Something went wrong");
            break;
    }
}
