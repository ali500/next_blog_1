import Link from 'next/link'
import styles from './style.module.css'
import WeeklyNewsletter from '@/app/_components/WeeklyNewsletter/WeeklyNewsletter'
import { FooterSectionType } from '@/app/_types'

export default function FooterSection({ dict }: Readonly<FooterSectionType>) {
  return (
    <footer className={styles.footer}>
      <div className="site-container">
        <div className={styles.footer__top}>
          <div className={styles.footer__top__column_1}>
            <h4 className={styles.footer__top__column_title}>About</h4>
            <p className={styles.footer__top__column_about_text}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
              quasi asperiores eius vitae ratione facilis dolorum ab nemo
              consequatur. Accusantium facere eius eum nam officia? Sint,
              voluptatem veritatis. Illo, minus.
            </p>
            <div className={styles.footer__top__email_and_phone_text}>
              <span className={styles.footer__top__email_and_phone}>
                Email:
              </span>{' '}
              test@test.com
            </div>
            <div className={styles.footer__top__email_and_phone_text}>
              <span className={styles.footer__top__email_and_phone}>
                Phone:
              </span>{' '}
              09xxxxxxxxx
            </div>
          </div>
          <div className={styles.footer__top__column_2}>
            <h4 className={styles.footer__top__column_title}>Quick Link</h4>
            <ul className={styles.footer__ul}>
              <li>
                <Link href="#" className={styles.footer_link}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.footer_link}>
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.footer_link}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.footer_link}>
                  Archived
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.footer_link}>
                  Author
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.footer_link}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer__top__column_3}>
            <h4 className={styles.footer__top__column_title}>Category</h4>
            <ul className={styles.footer__ul}>
              <li>
                <Link href="#" className={styles.footer_link}>
                  Lifestyle
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.footer_link}>
                  Technology
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.footer_link}>
                  Travel
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.footer_link}>
                  Business
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.footer_link}>
                  Economy
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.footer_link}>
                  Sports
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer__top__column_4}>
            <WeeklyNewsletter dict={dict} />
          </div>
        </div>
        <div className={styles.footer__bottom}>
          <div className={styles.footer__bottom__column_1}>
            <div>Logo</div>
            <div className='space-y-1'>
              <div>MetaBlog</div>
              <div>© All Right Reserved.</div>
            </div>
          </div>
          <div className={styles.footer__bottom__column_2}>
            <ul className={styles.footer_bottom_link}>
              <li>
                <Link href='#'>Terms of Use</Link>
              </li>
              <li>
                <Link href='#'>Privacy Policy</Link>
              </li>
              <li>
                <Link href='#'>Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
