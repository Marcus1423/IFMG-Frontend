import Card from './Card'
import imagem from '../img/LenovoIdeaPad.png'

function Card3() {
  return (
    <>
      <h1>Atividade 3: Resposividade com Tailwind</h1>
      <div className='flex flex-col justify-center items-center sm:flex-row sm:flex-wrap lg:flex-nowrap gap-5 lg:justify-around'>
      <Card imagem={imagem}
              titulo="Card Reutilizável"
              descricao="Este card usa CSS Modules e hover suave com variáveis CSS."
            />
      <Card imagem={imagem}
              titulo="Card Reutilizável"
              descricao="Este card usa CSS Modules e hover suave com variáveis CSS."
            />
      <Card imagem={imagem}
              titulo="Card Reutilizável"
              descricao="Este card usa CSS Modules e hover suave com variáveis CSS."
            />
    </div>
    </>
    
  );
}

export default Card3;