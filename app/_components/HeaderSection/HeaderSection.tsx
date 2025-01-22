import Link from 'next/link'
import styles from './style.module.css'
import { HeaderSectionType } from '@/app/_types'
import DarkModeButton from '@/app/_components/DarkModeButton/DarkModeButton'

export default async function HeaderSection({
  dict,
}: Readonly<HeaderSectionType>) {
  return (
    <header className={styles.header}>
      <div className={styles.header__start}>
        Meta<span className="font-bold">Blog</span>
      </div>
      <div className={styles.header__middle}>
        <ul>
          <li>
            <Link href="#">{dict.header.home}</Link>
          </li>
          <li>
            <Link href="#">{dict.header.blog}</Link>
          </li>
          <li>
            <Link href="#">{dict.header.single_post}</Link>
          </li>
          <li>
            <Link href="#">{dict.header.pages}</Link>
          </li>
          <li>
            <Link href="#">{dict.header.contact}</Link>
          </li>
        </ul>
      </div>
      <div className={styles.header__end}>
        <div className={styles.header__end__search}>
          <input type="text" placeholder={dict.header.search} />
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>
        <div>
          <DarkModeButton />
        </div>
      </div>
    </header>
  )
}
