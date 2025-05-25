import styled from "styled-components"

const ItemListaEstilizado = styled.li `
    display: flex;
    align-items: center;
    gap: 22px;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${props => props.$ativo ? '#7b78e5' : '#d9d9d9'};
    font-family:${props => props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular'} ;

`

const ItemNavegacao = ({IconeAtivo, IconeInativo, ativo = false, children}) => {
    return<ItemListaEstilizado $ativo={ativo}>
                <img src={ativo ? IconeAtivo : IconeInativo } alt="Icone de navegação"/>
                {children}
        </ItemListaEstilizado>
    

}

export default ItemNavegacao