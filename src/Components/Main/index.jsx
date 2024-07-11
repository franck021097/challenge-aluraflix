import styled from "styled-components"
import ItemInfo from "./ItemInfo"

const SectionInfo = styled.section`
    background: url("img/fondo-info.png");
    height: 832px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

const SectionCategories = styled.section`
    background: #262626;
`


const Main = ()=>{
    return <>
        <SectionInfo>
            <ItemInfo/>
        </SectionInfo>
        <SectionCategories>
            Area categorias
        </SectionCategories>
    </>
}

export default Main