import styled from "styled-components"
import search from '/imagens/search.png'

const DivCampoTextoEstilo = styled.div`
    display: flex;
    border: 2px solid #c98cf18b;
    padding: 0px 16px;
    align-items: center;
    gap: 36px;
    border-radius: 10px;
    height: 56px;
    input{
        background:transparent;
        border: none;
        width: 460px;
        outline: none;
        color: #D9D9D9;
        font-family: 'Gandhi Sans';
        font-size: 20px;
        line-height: 20px;
        
    }
    img{
        text-align: center;
          height: 38px;
    }
    `





const CampoTexto = ({setFiltro})=>{
    return(
        <DivCampoTextoEstilo>
            <input onChange={(evento) => { setFiltro(evento.target.value) }} type="text" placeholder="O que você procura?"/>
            <img src={search} alt="Lupa" />
        </DivCampoTextoEstilo>
    )
}

export default CampoTexto