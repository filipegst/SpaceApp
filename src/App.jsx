import styled from "styled-components";
import EstilosGlobais from "./componentes/EstilosGlobais";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";
import Banner from "./componentes/Banner";
import Galeria from "./componentes/Galeria";
import fotos from "./fotos.json";
import { useEffect, useState } from "react";
import ModalZoom from "./componentes/ModalZoom";
import Rodape from "./componentes/Rodape";

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  max-width: 100%;
  width: 1540px;
  margin: 0 auto;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 32px;
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
  const [FotoSelecionada, setFotoSelecionada] = useState(null);
  const [filtro, setFiltro] =useState('')
  const [tag, setTag] = useState(0)



  useEffect(()=>{
    const fotosFiltradas = fotos.filter(foto => {
      const filtroPorTag = !tag || foto.tagId === tag;
      const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase())
      return filtroPorTag && filtroPorTitulo
    })
      setFotosDaGaleria(fotosFiltradas)
  },[filtro, tag])

  const aoTrocarFavorito = (foto) => {

    if (foto.id === FotoSelecionada?.id){
      setFotoSelecionada({
        ...FotoSelecionada,
        favorita: !FotoSelecionada.favorita
      })
    }


    setFotosDaGaleria(
      fotosDaGaleria.map((fotosDaGaleria) => {
        return {
          ...fotosDaGaleria,
          favorita:
            fotosDaGaleria.id === foto.id ? !foto.favorita : fotosDaGaleria.favorita,
        };
      })
    );
  };

  return (
    <FundoGradiente>
      <EstilosGlobais />

      <AppContainer>
        <Cabecalho 
          filtro = {filtro}
          setFiltro= {setFiltro}
        />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner />
            <Galeria
              aoFotoSelecionada={(foto) => setFotoSelecionada(foto)}
              fotos={fotosDaGaleria}
              aoTrocarFavorito={aoTrocarFavorito}
              setTag = {setTag}
            />
          </ConteudoGaleria>
        </MainContainer>
        <ModalZoom
          foto={FotoSelecionada}
          aoFechar={() => setFotoSelecionada(null)}
          aoTrocarFavorito={aoTrocarFavorito}
        />
      </AppContainer>
      <Rodape/>
    </FundoGradiente>
  );
};

export default App;
