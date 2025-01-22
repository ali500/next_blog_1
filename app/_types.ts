export interface HeaderSectionType {
  dict: {
    header: {
      home: string
      blog: string
      single_post: string
      pages: string
      contact: string
      search: string
    }
  }
}

export interface HeroSectionType {
  dict: {
    hero_card: {
      id: number
      tag: string
      title: string
      author_name: string
      date: string
    }
  }
}

export interface AdvertisementSectionType {
  dict: {
    advertisement: string
  }
}

export interface FooterSectionType {
  dict: {
    footer: {
      about_section: {
        about: string
        text: string
        email: string
        email_address: string
        phone: string
        phone_number: string
      }
      quick_link_section: {
        quick_link: string
        home: string
        about: string
        blog: string
        archived: string
        author: string
        contact: string
      }
      category_section: {
        category: string
        lifestyle: string
        technology: string
        travel: string
        business: string
        economy: string
        sports: string
      }
      weekly_newsletter_section: WeeklyNewsletterType
      terms_of_use: string
      privacy_policy: string
      cookie_policy: string
      copywrite_text: string
    }
  }
}

export interface WeeklyNewsletterType {
  title: string
  description: string
  email_placeholder: string
  button_label: string
}

export interface CardListType {
  id: number
  tag: string
  title: string
  author_name: string
  date: string
}

export interface SectionContainerType {
  hasTitle: boolean
  dict: {
    title_of_card_list_container: string
    card_list: CardListType[]
    view_all_post: string
  }
}
