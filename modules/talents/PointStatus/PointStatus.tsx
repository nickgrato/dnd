import styles from "./PointStatus.module.scss"

type PointPropsT = {
  pointBank: number
  pointTotal: number
}

const PointStatus = ({ pointBank, pointTotal }: PointPropsT) => {
  return (
    <section className={styles.wrapper}>
      <span>
        {pointTotal} / {pointBank}
      </span>
      <span className={styles.label}>Points Spent</span>
    </section>
  )
}

export default PointStatus
