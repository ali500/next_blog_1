import Image from 'next/image'
import styles from './style.module.css'
import { WeeklyNewsletterType } from '@/app/_types'

export default function WeeklyNewsletter({
  title,
  description,
  email_placeholder,
  button_label,
}: Readonly<WeeklyNewsletterType>) {
  return (
    <div className={styles.weekly_news_letter_card}>
      <div className={styles.weekly_news_top}>
        <h4 className={styles.weekly_news_letter_title}>{title}</h4>
        <p className={styles.weekly_news_letter_description}>{description}</p>
      </div>
      <div className={styles.weekly_news_bottom}>
        <div className={styles.email_input}>
          <input type="text" placeholder={email_placeholder} />
          <div>
            <Image width={28} height={28} src="/svg/envelope.svg" alt="test" />
          </div>
        </div>
        <button type="button" className={styles.subscribe_button}>
          {button_label}
        </button>
      </div>
    </div>
  )
}
