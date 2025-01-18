import styles from './style.module.css'
import { HeroSectionType } from '@/app/_types'

export default function HeroSection({ dict }: Readonly<HeroSectionType>) {
  return (
    <div className={styles.hero_section}>
      <div className={styles.hero_card}>
        <div className={styles.hero_card__tag}>{dict.hero_card.tag}</div>
        <p className={styles.hero_card__title}>{dict.hero_card.title}</p>
        <div className={styles.hero_card__bottom}>
          <div className={styles.hero_card__bottom__author_image}></div>
          <div className={styles.hero_card__bottom__author_name}>
            {dict.hero_card.author_name}
          </div>
          <div className={styles.hero_card__bottom__date}>
            {dict.hero_card.date}
          </div>
        </div>
      </div>
    </div>
  )
}
