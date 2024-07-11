import styled from "styled-components"

const ContainerInfo = styled.div`
    background: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    .imagen-item{
        border-radius: 20px;
    }
    
`
const CardInfo = styled.div`
    
    font-family: "Roboto", sans-serif;
    width: 450px;
    color: #fff;



    .titulo-descripcion{
        font-size: 46px;
        font-weight: 400;
        line-height: 53.91px;
        text-align: left;
    }


    .descripcion-item{
        font-size: 18px;
        font-weight: 300;
        line-height: 21.09px;
        text-align: left;
    }

`

const TemaItem = styled.div`
    display: flex;
    font-size: 48px;
    font-weight: 800;
    line-height: 56.25px;
    align-items: center;
    justify-content: center;
    width: 296.82px;
    height: 92px;
    border-radius: 15px;
    background: #6BD1FF;
    user-select: none;
`


const ItemInfo = () => {
    return <>
        <ContainerInfo>
            <CardInfo >
                <TemaItem>
                    <span>FRONT END</span>
                </TemaItem>

                <p className="titulo-descripcion">Challenge React</p>

                <p className="descripcion-item">Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
            </CardInfo>

                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img src="img/player.png" alt="imagen item" className="imagen-item"/>
                </a>
        </ContainerInfo>
    </>
}


export default ItemInfo