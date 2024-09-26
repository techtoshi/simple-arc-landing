export type TokenInfo = {
  tokenName: string
  header: { logoImg: string }
  hero: HeroType
  features: FeatureType[]
  atomicals: { testimonials: TestimonialType[] }
  ecosystem: { supports: SupportType[] }
  faqs: FAQ[]
  footer: { contacts: { telegram: string, twitter: string } }
}

export type HeroType = {
  slogan: string,
  briefIntro: string
  heroImg: string
  infos: { title: string, data: string }[]
}

export type FeatureType = {
  title: string,
  text: string
}

export type TestimonialType = {
  img: string,
  name: string,
  account: string,
  link: string,
  text: string
}

export type SupportType = {
  title: string,
  subtitle: string,
  items: SupportItemType[]
}

export type SupportItemType = {
  logo: string,
  name: string,
  link: string
}

export type FAQ = {
  question: string,
  answer: string
}

