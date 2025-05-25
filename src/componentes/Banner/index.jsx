import styled from "styled-components";

const TituloEstilizado = styled.h1`
font-weight: 400;
font-size: 40px;
line-height: 48px;
color: #FFFFFF;  
max-width: 300px;
padding: 0 64px;

`

const BannerEstilizado = styled.div`
    background-image: url('/imagens/banner.png');
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 328px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    flex-grow: 1;

`

const Banner =() =>{
    return (
        <BannerEstilizado>
            <TituloEstilizado>A galeria mais completa de fotos do espaço!</TituloEstilizado>
        </BannerEstilizado> 
    )
}

export default Banner