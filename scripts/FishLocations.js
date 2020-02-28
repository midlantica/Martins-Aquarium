import { useFish } from "./FishDataProvider.js"
import Fish from "./FishLocs.js"

const FishLocations = () => {
  // Get a reference to the `<article class="content">` element
  const contentElement = document.querySelector(".fishLocations")
  const fishObjectArray = useFish()
  let fishHTMLRepresentations = "" 

  for (const fishObject of fishObjectArray) {
      contentElement.innerHTML += Fish(fishObject)
  }

  // Add to the existing HTML in the content element
  contentElement.innerHTML += `
    ${fishHTMLRepresentations}
  `
}

export default FishLocations
