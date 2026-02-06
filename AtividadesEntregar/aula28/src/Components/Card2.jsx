import { styled } from "styled-components";

const DivCard = styled.div`
  background-color: ${({ theme }) => theme.background};
  border-radius: 12px;
  padding: 16px;
  width: 280px;

  display: flex;
  flex-direction: column;
  gap: 12px;

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
  background-color: ${({ theme }) => theme.hover};
  transform: translateY(-4px);
}
`
const Imagem = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;

`
const ExternalText = styled.h1`
  color: ${({ theme }) => theme.text};
`

const Title = styled.h2`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
`
const Description = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.textSecondary};
`
export default function Card2({ imagem, titulo, descricao }) {

  return (
    <>
      <div>
        <ExternalText>Atividade 2: Card com Styled Components</ExternalText>
        <DivCard>
        <Imagem
          src={imagem}
          alt={titulo}
        />
        <Title>{titulo}</Title>
        <Description>{descricao}</Description>
      </DivCard>
      </div>
    </>
      
    
  );
}