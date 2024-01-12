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