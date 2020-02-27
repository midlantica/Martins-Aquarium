const Fish = fish => {
  return `
    <div class="panel">
      <image class="fishImg" src="${fish.imagePath}" alt="${fish.name}">
      <div class="fishPoppy">
        <div class="nameDetailsDiv">
          <h4>${fish.name}</h4>
          <button id="${fish.nameCss}">Details</button>
        </div>
        
        <dialog class="dialog--fish" id="details--${fish.name}">
          <div class="fishPoppy">
            <div class="fishInnards">
              <p><i>Species:</i> ${fish.species}</p>
              <p><i>Location:</i> ${fish.location}</p>
              <p><i>Length:</i> ${fish.length}"</p>
              <p><i>Food:</i> ${fish.food.join(",")}</p>
            </div>
          </div>
          <div class="button--close" id="close-bart">🅧</div>
        </dialog>

      </div>
    </div>
  `
}

export default Fish
