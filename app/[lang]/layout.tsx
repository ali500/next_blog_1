import type { Metadata } from 'next'
import { getDictionary } from './dictionaries'
import HeaderSection from '@/app/_components/HeaderSection/HeaderSection'
import FooterSection from '@/app/_components/FooterSection/FooterSection'
import '@/app/globals.css'

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fa' }]
}

export const metadata: Metadata = {
  title: 'یک برنامه',
  description: 'توضیحات یک برنامه',
}

interface RootLayoutType {
  children: React.ReactNode
  params: Promise<{ lang: 'en' | 'fa' }>
}

export default async function RootLayout({
  children,
  params,
}: Readonly<RootLayoutType>) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  let dir: string = 'rtl'

  if (lang == 'en') {
    dir = 'ltr'
  }

  return (
    <html dir={dir} lang={lang}>
      <body>
        <div className="site-container">
          <HeaderSection dict={dict} />
          <main>{children}</main>
        </div>
        <FooterSection dict={dict} />
      </body>
    </html>
  )
}
