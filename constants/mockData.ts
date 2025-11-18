import { Course, Reward, ForumTopic, Mission, Certificate } from '../types';

export const mockCourses: Course[] = [
  // Fix: Added 'category' property to each course object.
  { id: 1, title: 'Introdução ao React com TypeScript', creator: 'Ana Silva', thumbnail: 'https://picsum.photos/seed/react/400/225', progress: 75, category: 'Desenvolvimento' },
  { id: 2, title: 'Design de UI/UX para Iniciantes', creator: 'Carlos Pereira', thumbnail: 'https://picsum.photos/seed/uiux/400/225', progress: 40, category: 'Design' },
  { id: 3, title: 'Fundamentos de Marketing Digital', creator: 'Beatriz Costa', thumbnail: 'https://picsum.photos/seed/marketing/400/225', progress: 100, category: 'Marketing' },
  { id: 4, title: 'Gestão de Projetos Ágeis com Scrum', creator: 'Daniel Martins', thumbnail: 'https://picsum.photos/seed/scrum/400/225', progress: 15, category: 'Negócios' },
  { id: 5, title: 'Inteligência Artificial na Prática', creator: 'Sofia Ferreira', thumbnail: 'https://picsum.photos/seed/ai/400/225', progress: 0, category: 'Tecnologia' },
  { id: 6, title: 'Inglês para Negócios', creator: 'Robert Johnson', thumbnail: 'https://picsum.photos/seed/english/400/225', progress: 90, category: 'Idiomas' },
];

export const mockRewards: Reward[] = [
  { id: 1, title: 'Ingresso de Cinema', description: 'Válido para qualquer filme em cartaz', cost: 1500, image: 'https://picsum.photos/seed/cinema/300/200' },
  { id: 2, title: 'Voucher iFood R$20', description: 'Desconto em seu próximo pedido', cost: 2000, image: 'https://picsum.photos/seed/ifood/300/200' },
  { id: 3, title: 'Curso Extra: Fotografia Básica', description: 'Acesso a um curso exclusivo', cost: 5000, image: 'https://picsum.photos/seed/photo/300/200' },
  { id: 4, title: 'Assinatura Spotify 1 Mês', description: 'Música sem limites e sem anúncios', cost: 2500, image: 'https://picsum.photos/seed/spotify/300/200' },
  { id: 5, title: 'Desconto 30% na Graduação Parceira', description: 'Invista no seu futuro acadêmico', cost: 10000, image: 'https://picsum.photos/seed/grad/300/200' },
  { id: 6, title: 'Vale-Compras Livraria Cultura', description: 'R$50 para gastar em livros', cost: 4500, image: 'https://picsum.photos/seed/books/300/200' },
];

export const mockForumTopics: ForumTopic[] = [
  { id: 1, title: 'Dúvida sobre Hooks no React', category: 'Tira-dúvidas', author: 'Enzo Gael', replies: 5, lastPost: '2h atrás' },
  { id: 2, title: 'Busco parceiros para projeto de app social', category: 'Networking', author: 'Maria Clara', replies: 12, lastPost: '5h atrás' },
  { id: 3, title: '[PROJETO] Criando um clone do Twitter com Node.js', category: 'Projetos compartilhados', author: 'João Miguel', replies: 34, lastPost: '1 dia atrás' },
  { id: 4, title: 'Melhores práticas para portfólio de UI/UX', category: 'Tira-dúvidas', author: 'Laura Sofia', replies: 8, lastPost: '2 dias atrás' },
];

export const mockMissions: Mission[] = [
    {id: 1, title: 'Maratonista de Fim de Semana', description: 'Complete 3 horas de estudo em um fim de semana.', xp: 150, completed: true},
    {id: 2, title: 'Primeiro Certificado', description: 'Conclua seu primeiro curso e emita o certificado.', xp: 300, completed: false},
    {id: 3, title: 'Colaborador Ativo', description: 'Faça 5 posts úteis no fórum.', xp: 200, completed: false},
    {id: 4, title: 'Explorador de Conhecimento', description: 'Inicie 3 cursos de áreas diferentes.', xp: 100, completed: true},
];

export const mockCertificates: Certificate[] = [
    {id: 1, courseTitle: 'Fundamentos de Marketing Digital', dateIssued: '2023-10-15'},
    {id: 2, courseTitle: 'Design Thinking para Inovação', dateIssued: '2023-08-22'},
];

export const professionsChartData = [
  { name: 'Eng. de IA', 'Em Alta': 4000, 'Em Declínio': 200 },
  { name: 'Analista de Dados', 'Em Alta': 3500, 'Em Declínio': 300 },
  { name: 'Esp. em Cibersegurança', 'Em Alta': 3200, 'Em Declínio': 150 },
  { name: 'Dev Full Stack', 'Em Alta': 2800, 'Em Declínio': 500 },
  { name: 'Operador de Telemarketing', 'Em Alta': 1000, 'Em Declínio': 2400 },
  { name: 'Caixa de Banco', 'Em Alta': 500, 'Em Declínio': 3000 },
  { name: 'Digitador', 'Em Alta': 200, 'Em Declínio': 2800 },
];

export const techTrendsChartData = [
  { year: '2022', 'IA Generativa': 2.4, 'Computação Quântica': 1.1, 'Web3': 1.8 },
  { year: '2023', 'IA Generativa': 4.5, 'Computação Quântica': 1.5, 'Web3': 2.2 },
  { year: '2024', 'IA Generativa': 7.8, 'Computação Quântica': 2.3, 'Web3': 2.5 },
  { year: '2025 (previsão)', 'IA Generativa': 11.2, 'Computação Quântica': 3.5, 'Web3': 3.1 },
  { year: '2026 (previsão)', 'IA Generativa': 15.1, 'Computação Quântica': 5.0, 'Web3': 3.8 },
];