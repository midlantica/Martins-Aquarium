const fishCollection = [
  {
    name: "Bart",
    nameCss: "bettafish",
    imagePath: "/assets/images/bettafish.jpg",
    species: "Betta Fish",
    location: "Panama",
    length: 2.5,
    food: ["algae", "Sea grass"]
  },
  {
    name: "Rover",
    nameCss: "nanofish",
    imagePath: "/assets/images/nanofish.jpg",
    species: "Nano Fish",
    location: "Indonesia",
    length: 3,
    food: ["algae", "Spirulina"]
  },
  {
    name: "Arabella",
    nameCss: "swordtail",
    imagePath: "/assets/images/swordtail.jpg",
    species: "Swordtail",
    location: "Caribbean",
    length: 3.5,
    food: ["Sea weed"]
  },
  {
    name: "Jemma",
    nameCss: "angelfish",
    imagePath: "/assets/images/angelfish.jpg",
    species: "Angelfish",
    location: "Hawaii",
    length: 2,
    food: ["Spirulina", "krill"]
  },
  {
    name: "Blue",
    nameCss: "clownfish",
    imagePath: "/assets/images/clownfish.jpg",
    species: "Clownfish",
    location: "Greece",
    length: 3,
    food: ["krill"]
  }
]

export const useFish = () => {
  return fishCollection
}
