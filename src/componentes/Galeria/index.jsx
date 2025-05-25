import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const SecaoFluida = styled.section`
  flex-grow: 1;
`;

const ImagensContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`;

const Galeria = ({ fotos = [], setTag ,aoFotoSelecionada, aoTrocarFavorito }) => {
  return (
    <>
      <Tags setTag={setTag} />

      <GaleriaContainer>
        <SecaoFluida>
          <Titulo alinhamento="left"> Navegue pela galeria</Titulo>
          <ImagensContainer>
            {fotos.map((foto) => (
              <Imagem
                foto={foto}
                key={foto.id}
                aoZoom={aoFotoSelecionada}
                aoTrocarFavorito={aoTrocarFavorito}
              ></Imagem>
            ))}
          </ImagensContainer>
        </SecaoFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
