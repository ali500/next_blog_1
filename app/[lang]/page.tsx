import HeroSection from '@/app/_components/HeroSection/HeroSection'
import AdvertisementSection from '@/app/_components/AdvertisementSection/AdvertisementSection'
import SectionContainer from '@/app/_components/SectionContainer/SectionContainer'
import { getDictionary } from './dictionaries'

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fa' }]
}

interface HomeType {
  params: Promise<{ lang: 'en' | 'fa' }>
}

export default async function Home({ params }: Readonly<HomeType>) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <div>
      <HeroSection dict={dict} />
      <AdvertisementSection dict={dict} />
      <SectionContainer dict={dict} hasTitle={true} />
      <AdvertisementSection dict={dict} />
    </div>
  )
}
