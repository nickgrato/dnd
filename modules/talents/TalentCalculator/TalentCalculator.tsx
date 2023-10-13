import styles from "./TalentCalculator.module.scss"
import Path from "../Path/Path"
import PointStatus from "../PointStatus/PointStatus"
import { useState } from "react"
import { TalentPaths } from "../data"
import Image from "next/image"
import TalentBg from "public/talent_bg.png"

const TalentCalculator = () => {
  const pointBank = 6
  // State to keep track of spent points
  const [pointsSpent, setPointsSpent] = useState(0)
  // State to keep track of talent IDs
  const [userTalents, setUserTalents] = useState<Set<number>>(new Set())

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <Image
          src={TalentBg}
          alt="background image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div className={styles.contents}>
          <div className={styles.header}>
            <h1>
              TitanStar Legens - Rune Mastery Loadout Talent Calculator 9000
            </h1>
          </div>

          <div className={styles.body}>
            <section className={styles.paths}>
              {TalentPaths.map((path) => (
                <Path
                  className={styles.path}
                  path={path}
                  pointsRemaining={pointBank - pointsSpent}
                  onTalentSubtraction={(id) => {
                    setPointsSpent((state) => state - 1)
                    const set = new Set<number>(userTalents)
                    set.delete(id)
                    setUserTalents(set)
                  }}
                  onTalentAddition={(id) => {
                    setPointsSpent((state) => state + 1)
                    const set = new Set<number>(userTalents)
                    set.add(id)
                    setUserTalents(set)
                  }}
                />
              ))}
            </section>

            <PointStatus pointBank={pointBank} pointTotal={pointsSpent} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TalentCalculator
