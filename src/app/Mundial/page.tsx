import Card from "@/components/card";
import CardReverse from "@/components/cardReverse";


export default function Page() {
   
    return (
      <div className="relative z-0 bg-corinthians min-h-screen">
      <div className="absolute inset-0 bg-black/80 z-0"></div>
        <div className="relative z-10 ">
        <div className="text-white text-5xl font-bold text-center p-20 relative corinthians-logo">
          <div className="absolute inset-0 bg-black/60 z-0"></div>
          <h1 className="relative z-10">A Conquista Histórica do Corinthians no Mundial de Clubes de 2012</h1>
          </div>


        <div className="mundial-bg p-80 bg-contain relative">
          <div className="absolute inset-0 bg-black/60 z-0"></div>
          <h1 className="text-white mx-10 text-3xl relative z-10"> A inesquecível campanha do Sport Club Corinthians Paulista no Mundial de Clubes da FIFA de 2012, culminando na vitória sobre o Chelsea, oferece uma vasta gama de tópicos para serem explorados e relembrados pelos torcedores e entusiastas do futebol.</h1>
        </div>
           <div className="card-bg p-100 mb-40 bg-contain relative">
          <div className="absolute inset-0 bg-black/60 z-0"></div>
          <h1 className="text-white mx-10 text-3xl relative z-10"> Para a Fiel torcida, o ano de 2012 é mágico, um ponto de virada na história do clube. A conquista invicta da Copa Libertadores da América não começou nas noites de mata-mata no Pacaembu, mas sim em uma campanha de fase de grupos que serviu como o laboratório perfeito para forjar a mentalidade de um time que se recusava a perder. Aqueles seis jogos iniciais foram o prenúncio da solidez, resiliência e eficiência que marcariam a trajetória do time comandado por Tite.</h1>
        </div>

        <h1 className="relative z-10 text-4xl font-bold text-white text-center mt-20 mb-20"> A Trajetória Rumo ao Topo:</h1>

        <Card
        titulo="Rumo ao Bi Mundial:"
        subtitulo="Corinthians 1 x 0 Al Ahly"
        texto="A estreia no Japão e a vitória suada por 1 a 0 sobre a equipe egípcia, com gol de Paolo Guerrero, em um jogo que testou a paciência e a organização tática do time."
        imagemUrl="https://cdn.meutimao.com.br/_upload/galeria/228_no_momento_do_gol_guerrero_cabeceia_a_bola.jpg"
        />
        
        <CardReverse
        titulo="A Grande Final contra o Gigante Europeu:"
        subtitulo="O Duelo Tático de Tite contra Rafa Benítez "
        texto="Uma análise aprofundada das estratégias adotadas pelos dois treinadores na grande final. A disciplina tática corintiana contra o poderio ofensivo do Chelsea." 
        imagemUrl="https://editorial.uefa.com/resources/0204-0e9e124519ee-38be0325969a-1000/format/wide1/a_dejected_chelsea_after_the_1-0_defeat_to_corinthians.jpeg?imwidth=2048"
        />

        <Card
        titulo="O Gol que Valeu o Mundo:."
        subtitulo="Corinthians 1 x 0 Chelsea"
        texto="O momento icônico do gol de Paolo Guerrero, o 'Predestinado'. Detalhes da jogada, a participação de Danilo e a explosão de alegria da Fiel Torcida."
        imagemUrl="https://imgsapp.mg.superesportes.com.br/app/noticia_126420360808/2012/12/16/237289/20121216093102607065i.jpg"
        />

        <CardReverse
        titulo="Is da América do Sulisputado no Brasil"
        subtitulo="A 'Invasão' da Fiel Torcida ao Japão"
        texto="A mobilização impressionante da torcida corintiana, que transformou Yokohama em um verdadeiro 'mar de gente' e empurrou o time durante toda a competição." 
        imagemUrl="https://pbs.twimg.com/media/F9fOuUnXkAAPksX.jpg"
        />


          </div>

          <div className="time-mundial mt-50 bg-cover p-30 inset-0 relative z-10 flex flex-col justify-end h-[1000px]">
            <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
        <div className="relative z-20 w-full flex flex-col justify-end">
          <div className=" text-center text-white text-3xl mx-40 font-sans">
            <p className="relative z-20">A taça erguida em 2012 representa muito mais do que um título. Ela é um símbolo de resistência e a memória viva da última vez que um time de fora da Europa conquistou o mundo. Num futebol onde o poderio financeiro dita as regras, a façanha do Corinthians em Yokohama se torna um testamento eterno de que, com estratégia, alma e o apoio de uma nação, o impossível pode, sim, se tornar realidade.</p>
          </div>
        </div>
      </div>
           <footer className="bg-black text-white text-center p-20">
        <p>&copy; 2025 Corinthians. Todos os direitos reservados.</p>
      </footer>

      </div>

        
    ); 
}