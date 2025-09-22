import Card from "@/components/card";
import CardReverse from "@/components/cardReverse";

export default function Home() {
  return (
    <main>
     <div className="relative z-0 libertadores-bg min-h-screen">
      <div className="absolute inset-0 bg-black/80 z-0"></div>
      <div className="relative z-10 ">
        <div className="text-white text-5xl font-bold text-center mb-40 p-20 relative corinthians-logo">
          <div className="absolute inset-0 bg-black/60 z-0"></div>
          <h1 className="relative z-10"> A Libertadores do Povo: O Épico que Mudou a História</h1>
          </div>
          <div className="libertadores p-30 mb-20"></div>
          <div className="text-white text-center mt-20 mb-50 ">
            <h1 className="text text-5xl mt-80 mb-20">
              A Jornada Histórica:
            </h1>
            <div>

            </div>
            <div className="relative corinthians-top z-0 p-30 mt-10">
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <p className="relative z-20 text-3xl mt-5 p-20 text-white mx-20 text-left"> 
              A final da Libertadores de 2012 não foi apenas uma conquista, foi a realização de um sonho de décadas para a Fiel. O título encerrou a ansiedade e cimentou o Corinthians na história do futebol sul-americano.

            </p>
            </div>
          </div>
        </div>
        <Card
        titulo="O Início da Jornada"
        subtitulo="Corinthians 1 x 1 Boca Juniors"
        texto="A final da Copa Libertadores de 2012 foi um marco histórico para o Corinthians. No jogo de ida, realizado na Argentina, o Timão enfrentou o Boca Juniors, um dos clubes mais tradicionais da América do Sul. O jogo terminou empatado em 1 a 1, com gols de Romarinho para o Corinthians e Santiago Silva para o Boca Juniors. Esse resultado deixou a decisão para o jogo de volta, que seria disputado no Brasil."
        imagemUrl="https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2019%2F0627%2Fr562777_1296x729_16%2D9.jpg"
        />

        <CardReverse
        titulo="A Conquista Inesquecível"
        subtitulo="Corinthians 2 x 0 Boca Juniors"
        texto="Na noite de 4 de julho de 2012, no Estádio do Pacaembu, o Corinthians enfrentou o poderoso Boca Juniors na final da Copa Libertadores. Com gols de Emerson Sheik e Paolo Guerrero, o Timão venceu por 2 a 0, garantindo seu primeiro título na competição. A vitória foi celebrada por milhões de torcedores que acompanharam o jogo com paixão e emoção." 
        imagemUrl="https://s2.glbimg.com/QXlyzaFWQbUdmf1Hl3-Qlj2mqD9tz4yrp9in9R5SkSQVr1WAow_0CbQ0Mgfd0bmz/s.glbimg.com/es/ge/f/original/2012/07/04/emerson3_corinthians_final_reu1024.jpg"
        />

        <Card
        titulo="A campanha invicta"
        subtitulo="Corinthians: O Time que Não Perdeu"
        texto="A campanha do Corinthians na Copa Libertadores de 2012 foi simplesmente espetacular. O time não perdeu nenhum jogo durante toda a competição, mostrando uma defesa sólida e um ataque eficiente. Com 12 vitórias e 6 empates em 18 jogos, o Corinthians se tornou o primeiro clube brasileiro a conquistar a Libertadores de forma invicta, um feito que ficará para sempre na história do futebol."
        imagemUrl="https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/07/corinthians-libertadores-2012-e1720108028700.jpg"
        />

        <CardReverse
        titulo="O Legado da Libertadores"
        subtitulo="Corinthians: Um Título para a Eternidade"
        texto="A conquista da Copa Libertadores de 2012 não foi apenas um título, foi um marco na história do Corinthians. Esse título trouxe reconhecimento internacional ao clube e consolidou sua posição como uma das maiores forças do futebol sul-americano. Além disso, a vitória na Libertadores abriu as portas para o Mundial de Clubes da FIFA, onde o Corinthians continuou a brilhar ao vencer o Chelsea e se tornar campeão mundial."
        imagemUrl="https://static.corinthians.com.br/uploads/1589573740fc1f073fe91403f00d2219185fdea79b.jpg"
        />
      </div>

      <div className="time mt-50 bg-cover inset-0 relative z-10 flex flex-col justify-end h-[600px]">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
        <div className="relative z-20 w-full flex flex-col justify-end">
          <div className="pb-10 text-center text-white text-3xl mx-40 font-sans">
            <p className="relative z-20">A vitória de 2012 não foi apenas sobre um troféu, foi sobre a paixão e a crença de milhões de torcedores que esperaram por esse momento por gerações. É a "Libertadores do Povo", um título que pertence à Fiel.</p>
          </div>
        </div>
      </div>

      <footer className="bg-black text-white text-center p-20">
        <p>&copy; 2025 Corinthians. Todos os direitos reservados.</p>
      </footer>

    </main>
  )
}