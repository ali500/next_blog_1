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
            <h4 className={styles.footer__top__column_title}>
              {dict.footer.about_section.about}
            </h4>
            <p className={styles.footer__top__column_about_text}>
              {dict.footer.about_section.text}
            </p>
            <div className={styles.footer__top__email_and_phone_text}>
              <span className={styles.footer__top__email_and_phone}>
                {dict.footer.about_section.email}
              </span>{' '}
              {dict.footer.about_section.email_address}
            </div>
            <div className={styles.footer__top__email_and_phone_text}>
              <span className={styles.footer__top__email_and_phone}>
                {dict.footer.about_section.phone}
              </span>{' '}
              {dict.footer.about_section.phone_number}
            </div>
          </div>
          <div className={styles.footer__top__column_2}>
            <h4 className={styles.footer__top__column_title}>
              {dict.footer.quick_link_section.quick_link}
            </h4>
            <ul className={styles.footer__ul}>
              <li>
                <Link href="#" className={styles.footer_link}>
                  {dict.footer.quick_link_section.home}
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.footer_link}>
                  {dict.footer.quick_link_section.about}
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.footer_link}>
                  {dict.footer.quick_link_section.blog}
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.footer_link}>
                  {dict.footer.quick_link_section.archived}
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.footer_link}>
                  {dict.footer.quick_link_section.author}
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.footer_link}>
                  {dict.footer.quick_link_section.contact}
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer__top__column_3}>
            <h4 className={styles.footer__top__column_title}>
              {dict.footer.category_section.category}
            </h4>
            <ul className={styles.footer__ul}>
              <li>
                <Link href="#" className={styles.footer_link}>
                  {dict.footer.category_section.lifestyle}
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.footer_link}>
                  {dict.footer.category_section.technology}
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.footer_link}>
                  {dict.footer.category_section.travel}
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.footer_link}>
                  {dict.footer.category_section.business}
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.footer_link}>
                  {dict.footer.category_section.economy}
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.footer_link}>
                  {dict.footer.category_section.sports}
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer__top__column_4}>
            <WeeklyNewsletter
              title={dict.footer.weekly_newsletter_section.title}
              description={dict.footer.weekly_newsletter_section.description}
              email_placeholder={
                dict.footer.weekly_newsletter_section.email_placeholder
              }
              button_label={dict.footer.weekly_newsletter_section.button_label}
            />
          </div>
        </div>
        <div className={styles.footer__bottom}>
          <div className={styles.footer__bottom__column_1}>
            <div>Logo</div>
            <div className="space-y-1">
              <div>
                Meta<span className="font-semibold">Blog</span>
              </div>
              <div>{dict.footer.copywrite_text}</div>
            </div>
          </div>
          <div className={styles.footer__bottom__column_2}>
            <ul className={styles.footer_bottom_link}>
              <li>
                <Link href="#">{dict.footer.terms_of_use}</Link>
              </li>
              <li>
                <Link href="#">{dict.footer.privacy_policy}</Link>
              </li>
              <li>
                <Link href="#">{dict.footer.cookie_policy}</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
