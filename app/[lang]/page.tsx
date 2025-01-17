import HeroSection from '@/app/_components/HeroSection/HeroSection'

interface HomeType {
  params: Promise<{ lang: 'en' | 'fa' }>
}

export default async function Home({ params }: Readonly<HomeType>) {
  const { lang } = await params

  return (
    <div>
      <HeroSection />
      <div>
        <p>صفحه اصلی</p>
        <div>{lang}</div>
      </div>
    </div>
  )
}
