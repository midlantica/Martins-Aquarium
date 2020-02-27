import { useFish } from "./FishDataProvider.js"

const fishObjectArray = useFish()
// for (const fishObject of fishObjectArray) {
//   contentElement.innerHTML += Fish(fishObject)
// }

// >>>>>>>>>>>>>>>>

const initializeDetailButtonEvents = () => {
  // CAN'T TOUCH THIS - START
  const allCloseButtons = document.querySelectorAll(".button--close")
  for (const btn of allCloseButtons) {
    btn.addEventListener(
      "click", 
      theEvent => {
        const dialogElement = theEvent.target.parentNode
        dialogElement.close()
      }
    )
  }
  
  // CAN'T TOUCH THIS - END
  // You will be writing code below this line
  for (const fishObject of fishObjectArray) {
    document.querySelector(`.${fishObject.nameCss}`).addEventListener(
      "click",
      theClickEvent => {
        const theDialog = document.querySelector(`.${fishObject.nameCss}`)
        theDialog.showModal()
      }
    )
  }

}

export default initializeDetailButtonEvents;