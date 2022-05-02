export interface Listagem {
  title: string | null
  items: Item[]
  action: Action
}

export interface Item {
  title: string
  slug: string
  router: string | null
  underline: boolean
  tag: string | null
}

export interface Action {
  title: string | null
  router: string | null
}
