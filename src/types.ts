export interface FilmeObject {
    id: number
    ano: string
    descricao : string | null
    duracao: string
    grupo: string
    imagem : string
    nome: string
    status: 'visto' | 'não visto'
}

export interface CategoriaObject {
    id: number
    nome: string
    imagem: string
}
export interface SubCategoriaObject{
    id: number,
    nome: string,
    imagem: string,
    categoria_url: string
}