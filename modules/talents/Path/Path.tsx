import styles from "./Path.module.scss"
import { useState } from "react"
import { PathT, CLICK } from "../types"
import TalentButton from "../TalentButton/TalentButton"

type PathPropsT = {
  path: PathT
  pointsRemaining: number
  onTalentAddition: (id: number) => void
  onTalentSubtraction: (id: number) => void
  className?: string
}

const Path = ({
  path,
  pointsRemaining,
  onTalentAddition,
  onTalentSubtraction,
  className,
}: PathPropsT) => {
  const [currentStep, setCurrentStep] = useState(0)

  const handleTalentClick = (step: number, button: number, id: number) => {
    // Click Left
    if (button === CLICK.LEFT) {
      if (currentStep === step) return

      // No points left - notify user
      if (pointsRemaining === 0) {
        alert("All points have been spent")
        return
      }

      setCurrentStep(step)
      onTalentAddition(id)
    }

    // Click Right
    if (button === CLICK.RIGHT) {
      // Clicking same button(step) - remove point
      if (currentStep !== step) return

      setCurrentStep(step - 1)
      onTalentSubtraction(id)
    }
  }

  return (
    <section className={`${styles.wrapper} ${className}`}>
      <div className={styles.container}>
        <h3>{path.title}</h3>
        <div className={styles.steps_container}>
          {path.talents.map((talent, i) => (
            <div className={styles.step_container}>
              {i !== 0 && (
                <div
                  className={`${styles.track} ${
                    currentStep > i && styles.track_active
                  }`}
                ></div>
              )}

              <TalentButton
                isActive={currentStep > i}
                isDisabled={i + 1 < currentStep || i > currentStep}
                onClick={(button: number) => {
                  handleTalentClick(i + 1, button, talent.id)
                }}
                talent={talent}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Path
