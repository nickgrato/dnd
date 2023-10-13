import styles from "./TalentButton.module.scss"
import Image from "next/image"
import { TalentT, CLICK } from "../types"
import { MouseEventHandler } from "react"

type TalentButtonPropsT = {
  isActive: boolean
  isDisabled: boolean
  onClick: (button: number) => void
  talent: TalentT
}

const TalentButton = ({
  isActive,
  isDisabled,
  onClick,
  talent,
}: TalentButtonPropsT) => {
  const handleContextMenu: MouseEventHandler<HTMLDivElement> = (e) => {
    // Prevent the default browser menu from appearing
    e.preventDefault()
    onClick(CLICK.RIGHT)
  }

  return (
    // special right click catcher
    <div onContextMenu={handleContextMenu}>
      <button
        className={`${isActive ? styles.active : ""} ${styles.wrapper}`}
        disabled={isDisabled}
        onClick={() => {
          onClick(CLICK.LEFT)
        }}
        aria-label={talent.label}
      >
        <Image
          src={isActive ? talent.activeImage : talent.image}
          alt={talent.label}
        />
      </button>
    </div>
  )
}

export default TalentButton
