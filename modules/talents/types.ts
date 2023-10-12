import { StaticImageData } from "next/image"

export type StepT = {
  label: string
  image: StaticImageData
  activeImage: StaticImageData
}

export type PathT = {
  title: string
  steps: StepT[]
}

export enum CLICK {
  "LEFT" = 0,
  "RIGHT" = 1,
}
