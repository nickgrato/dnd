import styles from "./TalentCalculator.module.scss"
import Path from "../Path/Path"
import PointStatus from "../PointStatus/PointStatus"
import { useState } from "react"
import { TalentPaths } from "../data"

const TalentCalculator = () => {
  const pointBank = 6
  const [pointsSpent, setPointsSpent] = useState(0)

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>
            TitanStar Legens - Rune Mastery Loadout Talent Calculator 9000
          </h1>
        </div>

        <PointStatus pointBank={pointBank} pointTotal={pointsSpent} />

        <section>
          {TalentPaths.map((path) => (
            <Path
              className={styles.paths}
              path={path}
              pointsRemaining={pointBank - pointsSpent}
              onTalentSubtraction={() => {
                setPointsSpent((state) => state - 1)
              }}
              onTalentAddition={() => {
                setPointsSpent((state) => state + 1)
              }}
            />
          ))}
        </section>
      </div>
    </section>
  )
}

export default TalentCalculator
