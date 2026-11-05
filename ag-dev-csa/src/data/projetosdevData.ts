import type { projeto } from '../types/agencia'

export const projetos: projeto[] = [
    {
        id: 1, 
        nome: 'Portal de Estágios IFRN', 
        descricao: 'Sistema Web para gestão de vagas e acompanhamento de alunos estagiários', 
        status: 'Em andamento'
    },
    {
        id: 2, 
        nome: 'App de pesquisa de opinião', 
        descricao: 'Plataforma mobile/web para coleta de dados em projetos de extensão', 
        status: 'Em andamento'
    },
    {
        id: 3, 
        nome: 'Sistema de Agendamento de Salas', 
        descricao: 'Gestão de horários e reservas para os laboratórios do campus', 
        status: 'Concluído'
    }
]