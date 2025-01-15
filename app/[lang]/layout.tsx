import type { Metadata } from 'next'
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
  let dir: string = 'rtl'

  if (lang == 'en') {
    dir = 'ltr'
  }

  return (
    <html dir={dir} lang={lang}>
      <body>{children}</body>
    </html>
  )
}
