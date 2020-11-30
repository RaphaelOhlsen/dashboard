import HomeIcon from '@material-ui/icons/Home';
import Subscriptions from '@material-ui/icons/Subscriptions';
import Whatshot from '@material-ui/icons/Whatshot';
import VideoLibrary from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History';

const drawerItens = [
  {
    text: 'Início',
    icon: <HomeIcon />
  },
  {
    text: 'Em alta',
    icon: <Whatshot />
  },
  {
    text: 'Inscrições',
    icon: <Subscriptions />
  },
  {
    text: 'Biblioteca',
    icon: <VideoLibrary />
  },
  {
    text: 'Histórico',
    icon: <History />
  }
];

const bestContents = [
  'Música',
  'Esportes',
  'Jogos',
  'Filmes',
  'Notícias',
  'Ao vivo',
  'Destaques',
  'Videos 360',
  'Procurar mais'
]

const videos = [
  {
    id: 1,
    title:
      'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
    channel: 'Lucas Nhimi',
    views: '11 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/assets/images/avatar.jpeg',
    thumb: '/assets/images/thumb1.png',
  },
  {
    id: 2,
    title:
      'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
    channel: 'Lucas Nhimi',
    views: '957 mil visualizações',
    date: 'há 1 semana',
    avatar: '/assets/images/avatar.jpeg',
    thumb: '/assets/images/thumb2.png',
  },
  {
    id: 3,
    title:
      'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
    channel: 'Lucas Nhimi',
    views: '106 mil visualizações',
    date: 'há 1 semana',
    avatar: '/assets/images/avatar.jpeg',
    thumb: '/assets/images/thumb3.png',
  },
  {
    id: 4,
    title:
      'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
    channel: 'Lucas Nhimi',
    views: '5,6 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/assets/images/avatar.jpeg',
    thumb: '/assets/images/thumb4.png',
  },
  {
    id: 5,
    title:
      'EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26',
    channel: 'Lucas Nhimi',
    views: '2,2 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/assets/images/avatar.jpeg',
    thumb: '/assets/images/thumb5.png',
  },
  {
    id: 6,
    title: 'COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01',
    channel: 'Lucas Nhimi',
    views: '233 mil visualizações',
    date: 'há 1 semana',
    avatar: '/assets/images/avatar.jpeg',
    thumb: '/assets/images/thumb6.png',
  },
  {
    id: 7,
    title:
      'PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01',
    channel: 'Lucas Nhimi',
    views: '118 mil visualizações',
    date: 'há 1 semana',
    avatar: '/assets/images/avatar.jpeg',
    thumb: '/assets/images/thumb7.png',
  },
  {
    id: 8,
    title:
      'GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04',
    channel: 'Lucas Nhimi',
    views: '1,9 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/assets/images/avatar.jpeg',
    thumb: '/assets/images/thumb8.png',
  },
];


export {drawerItens, bestContents, videos}