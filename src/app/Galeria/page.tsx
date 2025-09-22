import Carrosel from "@/components/carrosel";

export default function Galeria() {
    return (
        <div className="relative z-0 bg-galeria min-h-screen">
      <div className="absolute inset-0 bg-black/80 z-0"></div>
      <div className="relative z-10 ">
        <div className="text-white text-5xl font-bold text-center mb-40 p-20 relative corinthians-logo">
          <div className="absolute inset-0 bg-black/60 z-0"></div>
          <h1 className="relative z-10"> Galeria da Fiel</h1>
          </div>

          <h2 className="text-white text-3xl font-bold text-center mb-10 p-4 relative z-10">Confira os melhores momentos da nossa trajetória até o topo.</h2>

          <Carrosel />
          </div>

          <footer className="bg-black text-white text-center p-20 mt-30">
        <p>&copy; 2025 Corinthians. Todos os direitos reservados.</p>
      </footer>

          </div>
    )
}