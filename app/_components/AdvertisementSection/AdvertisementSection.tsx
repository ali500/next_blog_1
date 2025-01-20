import styles from './style.module.css'
import { AdvertisementSectionType } from '@/app/_types'

export default function AdvertisementSection({
  dict,
}: Readonly<AdvertisementSectionType>) {
  return <div className={styles.advertisement_section}>{dict.advertisement}</div>
}
