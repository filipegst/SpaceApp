import styled from "styled-components";
import Titulo from "../../Titulo";
import fotos from "./fotos-populares.json"



const ColunaFotos = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const Imagem = styled.img`
    width: 260px;
    border-radius: 20px;

`

const Botao = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid #c98cf1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
    &:hover{
        transition: 0.3s ease;
        box-shadow: 0px 0px 11px #c98cf14b;
    }

`

const Populares = () =>{
    return (
        <>

        <section>
            <Titulo alinhamento = 'center'> Populares</Titulo>
            <ColunaFotos>
                {fotos.map (fotos => <Imagem  src={fotos.path} alt={fotos.alt}
                 key={fotos.id}/>)}
            </ColunaFotos>
            <Botao>Ver Mais</Botao>
        </section>
        </>
    )
}

export default Populares;