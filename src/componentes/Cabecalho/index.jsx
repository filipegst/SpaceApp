import styled from "styled-components"
import CampoTexto from "../CampoTexto"

const HeaderEstilizado = styled.header`
    display: flex;
    padding: 60px;
    justify-content: space-between;
    img{
        max-width: 212px;
    }
`

const Cabecalho = ({setFiltro}) =>{
    return(
        <HeaderEstilizado>
            <img src="/imagens/logo.png" alt="" />
            <CampoTexto setFiltro={setFiltro}/>
        </HeaderEstilizado>
    )
}

export default Cabecalho