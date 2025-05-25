import styled from "styled-components";
import Imagem from "../Galeria/Imagem";
import BotaoIcone from "../Galeria/BotaoIcone";


const Overlay = styled.div`
  background-color: rgba(0,0,0,0.7);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`


const DialogEstilizado = styled.dialog`
  position: absolute;
  top: 294px;
  background: transparent;
  padding: 0;
  border:none;
  width: 1156px;
  display: flex;
  justify-content: center;
  form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
      }
`



const ModalZoom = ({foto, aoFechar, aoTrocarFavorito}) => {
  return (
    <>
     {foto  &&  <> 
        <Overlay/>
        <DialogEstilizado open ={!!foto} onClose={aoFechar}>
            <Imagem foto={foto} expandida={true} aoTrocarFavorito={aoTrocarFavorito}></Imagem>
            <form method="dialog">
                <BotaoIcone formMethod="dialog">
                  <img src="/icones/fechar.png" alt="Fechar" />
                </BotaoIcone>
            </form>
      </DialogEstilizado>
      </>
    }
    </>
  );
};

export default ModalZoom;