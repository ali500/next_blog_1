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

export interface CardListType {
  id: number
  tag: string
  title: string
  author_name: string
  date: string
}

export interface SectionContainerType {
  dict: {
    card_list: CardListType[]
  }
}
