const fishCollection = [
  {
    name: "Bart",
    species: "Betta Fish",
    location: "Panama",
    length: 2.5,
    food: ["algae", "Sea grass"]
  },
  {
    name: "Rover",
    species: "Nano Fish",
    location: "Indonesia",
    length: 3,
    food: ["algae", "Spirulina"]
  },
  {
    name: "Arabella",
    species: "Swordtail",
    location: "Caribbean",
    length: 3.5,
    food: ["Sea weed"]
  },
  {
    name: "Jemma",
    species: "Angelfish",
    location: "Hawaii",
    length: 2,
    food: ["Spirulina", "krill"]
  },
  {
    name: "Blue",
    species: "Clownfish",
    location: "Greece",
    length: 3,
    food: ["krill"]
  }
]

export const useFish = () => {
  return fishCollection
}
