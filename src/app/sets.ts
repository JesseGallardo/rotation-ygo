export interface Set {
  id: number
  name: string
  releaseDate: string
  cubeLink: string
  photoLink: string
  inRotation: string
}

// This const contains the list of all the sets
export const SET_LIST = [
  {
    id: 1,
    name: "Core Set",
    releaseDate: "06/13/2023",
    cubeLink: "https://ygoprodeck.com/cube/view-cube/4117",
    photoLink: "/assets/sets/core-set.png",
    inRotation: "Yes"
  }
]
