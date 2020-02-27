import initializeDetailButtonEvents from './dialogs.js';
import { useFish } from './FishDataProvider.js';

initializeDetailButtonEvents();
const arrayOfTheFishObjects = useFish()

console.log(`My fishies Object ${arrayOfTheFishObjects}`)

for (const currentFishObject of arrayOfTheFishObjects) {
  console.log(currentFishObject)
}