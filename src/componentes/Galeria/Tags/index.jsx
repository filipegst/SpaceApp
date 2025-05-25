import styled from 'styled-components';
import tags from './tags.json'


const TagDiv = styled.div`
    display: flex;
    gap: 16px;
    margin-top: 16px;
    align-items: center;
`

const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`


const TagEstilo = styled.button`
    box-sizing: border-box;
    background: rgba(245, 245, 245, 0.3);
    color: #ffffff;
    font-size: 24px;
    padding: 12px;
    cursor: pointer;
    border-radius: 10px;
    border: 2px solid transparent;
    transition: transform 0.4s ease, border 0.4s ease;
    &:hover {
        transform: scale(1.05);
        border-color: #C98CF1;
    }
    `



const Tags = ({setTag}) => {
    return (
        <TagDiv >
            <TagTitulo>Busque por Tags:</TagTitulo>
                            {tags.map(tag => <TagEstilo key={tag.id} onClick={() => setTag(tag.tag)}>{tag.titulo}</TagEstilo>)}
        </TagDiv>
    
    
    

    )
}

export default Tags;