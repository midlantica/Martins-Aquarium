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
  document.querySelector("#detailsBtn1").addEventListener(
    "click",
    theClickEvent => {
      const theDialog = document.querySelector("#details--fish1")
      theDialog.showModal()
    }
  )

  document.querySelector("#detailsBtn2").addEventListener(
    "click", 
    theClickEvent => {
      const theDialog = document.querySelector("#details--fish2")
      theDialog.showModal()
    }
  )

  document.querySelector("#detailsBtn3").addEventListener(
    "click", 
    theClickEvent => {
      const theDialog = document.querySelector("#details--fish3")
      theDialog.showModal()
    }
  )

  document.querySelector("#detailsBtn4").addEventListener(
    "click", 
    theClickEvent => {
      const theDialog = document.querySelector("#details--fish4")
      theDialog.showModal()
    }
  )

  document.querySelector("#detailsBtn5").addEventListener(
    "click", 
    theClickEvent => {
      const theDialog = document.querySelector("#details--fish5")
      theDialog.showModal()
    }
  )

  document.querySelector("#detailsBtn6").addEventListener(
    "click", 
    theClickEvent => {
      const theDialog = document.querySelector("#details--fish6")
      theDialog.showModal()
    }
  )

}

export default initializeDetailButtonEvents;