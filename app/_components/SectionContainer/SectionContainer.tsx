import Image from 'next/image'
import styles from './style.module.css'
import { SectionContainerType } from '@/app/_types'

export default function SectionContainer({
  dict, hasTitle
}: Readonly<SectionContainerType>) {
  const cardList = dict.card_list.map((card) => (
    <div key={card.id} className={styles.card}>
      <div>
        <Image
          width={0}
          height={0}
          src="/images/white-sport-sedan-with-colorful-tuning-road.jpg"
          alt="card-image"
          sizes="100vw"
          className={styles.card__image}
        />
      </div>
      <div className={styles.card__tag}>{card.tag}</div>
      <p className={styles.card__title}>{card.title}</p>
      <div className={styles.card__bottom}>
        <div className={styles.card__bottom__author_image}></div>
        <div className={styles.card__bottom__author_name}>
          {card.author_name}
        </div>
        <div className={styles.card__bottom__date}>{card.date}</div>
      </div>
    </div>
  ))

  let containerTitle = null
  if (hasTitle == true)
    containerTitle = <div className={styles.title_of_card_list_container}>{dict.title_of_card_list_container}</div>

  return (
    <>
      {containerTitle}
      <div className={styles.card_container}>{cardList}</div>
      <button className={styles.view_all_button} type="button">View All Post</button>
    </>
  )
}
