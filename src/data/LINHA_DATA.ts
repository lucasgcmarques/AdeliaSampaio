import { gallery2017 } from '../utils/linha/gallery2017'
import { gallery2018 } from '../utils/linha/gallery2018'
import { gallery2019 } from '../utils/linha/gallery2019'

export const LINHA_DATA = [
  {
    ano: '2021',
    color: 'green',
    title: 'V MOSTRA COMPETITIVA DE CINEMA NEGRO ADÉLIA SAMPAIO',
  },
  {
    ano: '2020',
    color: 'orange',
    title: 'IV MOSTRA COMPETITIVA DE CINEMA NEGRO ADÉLIA SAMPAIO',
    description:
      'Devido aos impedimentos causados pela pandemia da Covid-19, a 4ª edição da Mostra, que desde a sua formação teve ponto de encontro a UnB, precisou se adaptar ao formato online, para tanto, foi preciso garantir aos filmes selecionados segurança sobre direitos autorais, mantendo a qualidade do evento e participação do público. Por isso, houve o adiamento da data para o ano subsequente ',
  },
  {
    ano: '2019',
    color: 'red',
    title: 'III MOSTRA COMPETITIVA DE CINEMA NEGRO ADÉLIA SAMPAIO',
    info: {
      filmesInscritos: 89,
      categorias: 9,
      selecionados: 21,
      premiados: 9,
      abertura: {
        filme: 'Rafiki',
        autor: 'Wanuri Kahiu',
      },
    },
    description: '',
    galllery: gallery2019,
    premios: [
      {
        categoria: 'Melhor Atriz',
        filme: 'Mãe Não Chora',
        vencedor: 'Vaneza Oliveira',
      },
      {
        categoria: 'Melhor Roteiro',
        filme: 'Sem Asas',
        vencedor: 'Renata Martins',
      },
      {
        categoria: 'Melhor Montagem',
        filme: 'Aurora',
        vencedor: 'Everlane Moraes',
      },
      {
        categoria: 'Melhor Direção',
        filme: 'Corações Encouraçados',
        vencedor: ['Jamile Coelho', 'Cintia Maria'],
      },
      {
        categoria: 'Incentivo ao Audiovisual',
        filme: 'A Sússia',
        vencedor: 'Lucrécia Dias',
      },
      {
        categoria: 'Melhor Filme Curta-metragem',
        filme: 'Mãe Não Chora',
        vencedor: ['Carol Rodrigues', 'Vaneza Oliveira'],
      },
      {
        categoria: 'Melhor Longa-Metragem',
        filme: 'A Rainha Nzinga Chegou',
        vencedor: ['Isabel Casimira', 'Junia Torres'],
      },
      {
        categoria: 'Menção Honrosa',
        filme: 'Minha História é Outra',
        vencedor: 'Mariana Campos',
      },
    ],
  },
  {
    ano: '2018',
    color: 'yellow',
    title: 'II MOSTRA COMPETITIVA DE CINEMA NEGRO ADÉLIA SAMPAIO',
    info: {
      filmesInscritos: 83,
      categorias: 9,
      selecionados: 21,
      premiados: 9,
      abertura: {
        filme: 'Rafiki',
        autor: 'Wanuri Kahiu',
      },
    },
    description: '',
    galllery: gallery2018,
    premios: [
      {
        categoria: 'Melhor Atriz',
        filme: 'Maria',
        vencedor: 'Maria Morais',
      },
      {
        categoria: 'Melhor Roteiro',
        filme: 'Maestria na Favela',
        vencedor: 'Falani África',
      },
      {
        categoria: 'Melhor Montagem',
        filme: 'Entremarés',
        vencedor: 'Caio Sales',
      },
      {
        categoria: 'Melhor Direção',
        filme: 'Merê com direção',
        vencedor: 'Urânia Munzanzu',
      },
      {
        categoria: 'Melhor Filme Curta-metragem Documentário',
        filme: 'Tia Ciata',
        diretores: ['Mariana C.', 'Raquel Beatriz'],
      },
      {
        categoria: 'Melhor Longa-Metragem Ficção',
        filme: 'Desaparecidos',
        diretor: 'DANDDARA',
      },
      {
        categoria: 'Melhor Filme Média Metragem',
        filme: 'Rainha',
        diretor: 'Sabrina Fidalgo',
      },
      {
        categoria: 'Melhor Filme Longa Metragem',
        filme: 'O Caso do Homem Errado',
        diretor: 'Kamila Moraes',
      },
    ],
  },
  {
    ano: '2017',
    color: 'black',
    title: 'I MOSTRA COMPETITIVA DE CINEMA NEGRO ADÉLIA SAMPAIO',
    info: {
      filmesInscritos: 91,
      categorias: 11,
      selecionados: 19,
      premiados: 8,
      abertura: {
        filme: 'Amor maldito',
        autor: 'Adelia Sampaio',
      },
    },
    description: '',
    galllery: gallery2017,
    premios: [
      {
        categoria: 'Melhor Roteiro',
        filme: 'Um filme de dança',
        vencedor: 'Carmem Luz',
      },
      {
        categoria: 'Melhor Longa Metragem',
        filme: 'Um filme de dança',
        vencedor: 'Carmem Luz',
      },
      {
        categoria: 'Melhor Direção',
        filme: 'Um dia de Jerusa',
        vencedor: 'Viviane Ferreira',
      },
      {
        categoria: 'Melhor Fotografia',
        filme: 'Um dia de Jerusa',
        vencedor: 'Viviane Ferreira',
      },
      {
        categoria: 'Melhor Documentário',
        filme: 'Das raízes às pontas',
        vencedor: 'Flora Egécia',
      },
      {
        categoria: 'Melhor Ficção',
        filme: 'Aquém das Nuvens',
        vencedor: 'Renata Martins',
      },
      {
        categoria: 'Melhor Trilha Sonora',
        filme: 'Òrun Àiyé: a criação do mundo',
        vencedores: ['Jamile Coelho', 'Cíntia Maria'],
      },
      {
        categoria: 'Melhor Animação',
        filme: 'Òrun Àiyé: a criação do mundo',
        vencedores: ['Jamile Coelho', 'Cíntia Maria'],
      },
      {
        categoria: 'Melhor Montagem',
        filme: 'Oji-Today',
        vencedor: 'Artemisia Ferreira',
      },
      {
        categoria: 'Melhor Produção',
        filme: 'Black Out',
        vencedor: 'Jocilene Valdecir',
      },
      {
        categoria: 'Júri Popular',
        filme: 'A última chance',
        vencedor: 'Izabel Neiva',
      },
    ],
  },
]
