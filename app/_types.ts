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

export interface FooterSectionType {
  dict: object
}

export interface WeeklyNewsletterType {
  dict: object
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
  }
}
