import styles from "./TalentButton.module.scss"
import Image from "next/image"
import { StepT, CLICK } from "../types"
import { MouseEventHandler } from "react"

type TalentButtonPropsT = {
  isActive: boolean
  isDisabled: boolean
  onClick: (button: number) => void
  step: StepT
}

const TalentButton = ({
  isActive,
  isDisabled,
  onClick,
  step,
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
        aria-label={step.label}
      >
        <Image
          src={isActive ? step.activeImage : step.image}
          alt={step.label}
        />
      </button>
    </div>
  )
}

export default TalentButton
