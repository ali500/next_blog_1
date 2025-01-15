import { getDictionary } from './dictionaries'

export async function generateStaticParams() {
  return [{ lang: 'end' }, { lang: 'fa' }]
}

interface HomeType {
  params: Promise<{ lang: 'en' | 'fa' }>
}

export default async function Home({ params }: Readonly<HomeType>) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <div>
      <main className="container mx-auto">
        <p>صفحه اصلی</p>
        <div>{lang}</div>
        <div>{dict.products.cart}</div>
      </main>
    </div>
  )
}
