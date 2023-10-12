import styles from "./Path.module.scss"
import { useState } from "react"
import { PathT, CLICK } from "../types"
import TalentButton from "../TalentButton/TalentButton"

type PathPropsT = {
  path: PathT
  pointsRemaining: number
  onTalentAddition: Function
  onTalentSubtraction: Function
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

  const handleStepClick = (step: number, button: number) => {
    // Click Left
    if (button === CLICK.LEFT) {
      if (currentStep === step) return

      // No points left - notify user
      if (pointsRemaining === 0) {
        alert("All points have been spent")
        return
      }

      setCurrentStep(step)
      onTalentAddition()
    }

    // Click Right
    if (button === CLICK.RIGHT) {
      // Clicking same button(step) - remove point
      if (currentStep !== step) return

      setCurrentStep(step - 1)
      onTalentSubtraction()
    }
  }

  const Track = ({ i }: { i: number }) => (
    <div
      className={`${styles.track} ${currentStep > i && styles.track_active}`}
    ></div>
  )

  return (
    <section className={`${styles.wrapper} ${className}`}>
      <div className={styles.container}>
        <div>{path.title}</div>
        <div className={styles.steps_container}>
          {path.steps.map((step, i) => (
            <div className={styles.step_container}>
              {i !== 0 && <Track i={i} />}

              <TalentButton
                isActive={currentStep > i}
                isDisabled={i + 1 < currentStep || i > currentStep}
                onClick={(button: number) => {
                  handleStepClick(i + 1, button)
                }}
                step={step}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Path
