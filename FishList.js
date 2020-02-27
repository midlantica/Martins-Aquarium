import { useFish } from "./FishDataProvider.js"
import Fish from "./Fish.js"
// useFish()
// Fish()

const FishList = () => {
  // Get a reference to the `<article class="content">` element
  const contentElement = document.querySelector(".fishListing")
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

export default FishList
