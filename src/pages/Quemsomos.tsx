import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import '../css/Quemsomos.css'

export default function Quemsomos() {
  return (
    <>  
      <Navbar/>
      <div className="quemsomos">
        <div>
          <h1 className="title">QUEM SOMOS</h1>
          <p className="justify-text">
              A Mostra Competitiva de Cinema Negro Adelia Sampaio surge a partir da disciplina “Etnologia Visual da Imagem do Negro no Cinema” (ETNOVIS) ministrada na Universidade de Brasília pela cineasta e professora Edileuza Penha de Souza. A iniciativa busca dar visibilidade e difundir a produção audiovisual de mulheres negras, fomentando o trabalho de diretoras, de produtoras, de realizadoras, de câmeras, de montadoras, de cenógrafas e de roteiristas, pertencentes a diferentes gerações e localizações do Brasil e do exterior, afim de romper com preconceitos e estereótipos; exercitando a possibilidade de novos olhares e concepções.
          </p>
          <p className="justify-text">
              Resgatar a atuação das mulheres negras em diferentes instâncias é necessário para que se possa compreender essa trajetória de luta e resistência, pautada em um contexto de sexismo e racismo, questões históricas que excluem as mulheres, principalmente as negras, da participação social, como também, das atividades cinematográficas.
          </p>
          <p className="justify-text">
              Segundo o “Boletim Raça e Gênero no cinema brasileiro”, feito pelo GEMAA (Grupo de Estudos Multidisciplinares de Ações Afirmativas) da UERJ, apenas 2% dos filmes brasileiros com público superior a 500 mil espectadores, produzidos entre 1970 e 2016, foram dirigidos por mulheres brancas; 13% dos filmes nesta categoria foram dirigidos por homens sem especificação de raça; e 85% dos filmes foram dirigidos por homens brancos. As mulheres negras são as menos representadas no cinema nacional, nos últimos 24 anos elas estiveram em apenas 4% dos elencos e não dirigiram ou roteirizam nenhum longa-metragem.
          </p>
          <p className="justify-text">
              Por isso, celebrar o pioneirismo e o talento das diretoras e produtoras negras como por exemplo a Adelia Sampaio - primeira mulher negra a dirigir um longa metragem no Brasil - significa reconhecer a importância da atuação dessas mulheres para a história do cinema. E pensando nesse acolhimento e expansão, a Mostra se tornou um espaço para conhecermos o que mulheres negras têm criado, as histórias que têm contado e como essas narrativas auxiliam a entender o lugar que ocupam hoje, que é de luta e resistência, mas também de muita produção.
          </p>
          <p className="justify-text">
              A Mostra busca agregar diversas formas de manifestações culturais, para além do cinema, as ofertas de oficinas, de espaços de formação com masterclassName, os debates, as apresentações musicais compõem as atividades do Encontro.
          </p>
        </div>
        <div>
            <h1 className="title">EQUIPE</h1>
            <div className="membro">
                <img src="../images/equipe/equipe1.png" alt="Edileuza"/>
                <div>
                    <h3>Edileuza Penha de Souza</h3>
                    <p className="justify-text">
                        Doutora em Educação pela Universidade de Brasília (UnB, 2013), mestre em Educação e Contemporaneidade pela Universidade do Estado da Bahia (UNEB, 2005), graduada em História pela Universidade Federal do Espírito Santo (UFES, 1994). Desde 2006 desenvolve pesquisas na área de cinema, com ênfase no Cinema Negro no Brasil. Trabalha com Educação atuando nos temas: Educação Escolar Quilombolas, Arte e cinema africano e diaspórico, Cinema e cineastas negras, Educação das relações étnico-raciais, formação de professores, Lei 10.639/2003.
                    </p>
                </div>
            </div>
            <div className="membro">
                <img src="../images/equipe/equipe2.png" alt="Marcus"/>
                <div>
                    <h3>Marcus Azevedo</h3>
                    <p className="justify-text">
                        Mestrando em Artes Visuais e bacharel em audiovisual, pela Universidade de Brasília – UnB. É professor da Secretaria de Educação do Distrito Federal, bem como atua em diferentes áreas da produção cinematográfica. Dentre outras realizações, foi técnico de som do documentário Lima (2015) e assistente de fotografia do curta A Hora da Morte (2015), roteirizou e dirigiu o curta-metragem Afronte (2017), premiado em diferentes festivais de cinema bem como o Coelho de Ouro de Melhor Curta-Metragem no Festival Mix de 2017; Prêmio Saruê e Melhor Montagem da Mostra Brasília no 50º Festival de Brasília do Cinema Brasileiro. Produtor da Mostra Competitiva de Cinema Negro - Adelia Sampaio e do documentário Filhas de Lavadeiras (2019). Foi um dos curadores do Festival Universitário de Brasília 2019, Co-dirigiu e roteirizou o longa-metragem Rumo (2021)

                    </p>
                </div>
            </div>
            <div className="membro">
                <img src="../images/equipe/equipe3.png" alt="Marisol"/>
                <div>
                    <h3>Marisol Kadiegi</h3>
                    <p className="justify-text">
                        Historiadora, pesquisadora, curadora e documentarista, é doutora em Educação pela Universidade de Brasília (UnB, 2013). Desde 2006 desenvolve pesquisas na área de cinema, com ênfase no Cinema Negro. Idealizadora e organizadora da Mostra Competitiva de Cinema Negro – Adelia Sampaio.
                    </p>
                </div>
            </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}