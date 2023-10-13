import { StaticImageData } from "next/image"

export type TalentT = {
  id: number
  label: string
  image: StaticImageData
  activeImage: StaticImageData
}

export type PathT = {
  title: string
  talents: TalentT[]
}

export enum CLICK {
  "LEFT" = 0,
  "RIGHT" = 1,
}
