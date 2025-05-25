import styled from "styled-components"

const RodapeEstilo = styled.footer`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    background-color: #04244F;
    color: #fff;
    img{
        height: 35px;
    }
   

`

const RedesSociais = styled.div `
    display: flex;
    gap: 50px;
`

const Rodape = () => {
    return (
        <RodapeEstilo>
            <RedesSociais>
                <a href="#"><img src="./icones/facebook.png" alt="Facebook"/></a>
                <a href="#"><img src="./icones/twitter.png" alt="twitter"/></a>
                <a href="#"><img src="./icones/instagram.png" alt="instagram"/></a>
            </RedesSociais>
            <h4> Desenvolvido por Filipe Guimarães</h4>
        </RodapeEstilo>
    )
}

export default Rodape

