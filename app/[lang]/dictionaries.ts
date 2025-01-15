import 'server-only'

// یک شیء که دو تابع را در خود نگه می‌دارد و با استفاده از آن‌ها اطلاعات فرهنگ‌های لغت فارسی و انگلیسی را برمی‌گرداند
const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  fa: () => import('./dictionaries/fa.json').then((module) => module.default),
}

// این تابع یک فرهنگ لغت را با استفاده از آرگومان برمی‌گرداند
export const getDictionary = async (locale: 'en' | 'fa') => {
  const dict = dictionaries[locale]
  return dict()
}
