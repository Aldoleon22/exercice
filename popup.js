
console.log("as")

function afficherPopup() {
    let popupBackground = document.querySelector(".popupBackground")
  
    popupBackground.classList.add("active") 
  
}


function cacherPopup() {
    let popupBackground = document.querySelector(".popupBackground")
    
    popupBackground.classList.remove("active")
}



 

   
    btnPartage = document.querySelector(".zonePartage")
    let popupBackground = document.querySelector(".popupBackground")
    btnPartage.addEventListener("click", () => {
           
  console.log("as")

        afficherPopup()
    })

    popupBackground.addEventListener("click", (event) => {
        
        if (event.target === popupBackground) {
           
            cacherPopup()
        }
    })
