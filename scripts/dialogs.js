import { useFish } from "./FishDataProvider.js"
// const fishObjectArray = useFish()

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
  
  // Get a reference to all buttons that start with "button--"
  const allDetailButtons = document.querySelectorAll("button[id^='button--']")

  const allLocationButtons = document.querySelectorAll("[class^='location']")

  // Add an event listener to each one
  for (const btn of allDetailButtons) {
      btn.addEventListener(
          "click",
          theEvent => {
              const dialogSiblingSelector = `#${theEvent.target.id}+dialog`
              const theDialog = document.querySelector(dialogSiblingSelector)
              theDialog.showModal()
          }
      )
  }

  // Add an event listener to each one
  for (const btn of allLocationButtons) {
      btn.addEventListener(
          "click",
          theEvent => {
              const dialogSiblingSelector = `#${theEvent.target.class}`
              const theDialog = document.querySelector(dialogSiblingSelector)
              theDialog.showModal()
          }
      )
  }

}

export default initializeDetailButtonEvents;