export interface projeto {
    id: number
    nome: String
    descricao: String
    status: 'Em andamento' | 'Concluído'
}

// para cada gerenciamento de estado, é importante fazer uma interface