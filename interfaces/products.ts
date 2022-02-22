export interface Sizes {
    label: string,
    values: string[]
}

export interface Product {
    id: string,
    image: string,
    name: string,
    price: number,
    options: Sizes[]
}