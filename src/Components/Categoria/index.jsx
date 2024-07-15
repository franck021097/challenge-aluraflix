import styled from "styled-components"
import TituloCategoria from "../TituloCategoria"
import { BorrarCard } from "../../api/api"

const ContainerCategoria = styled.section`
    margin: 0px 50px 0px 50px;
    padding: 50px 0;
    
    .container-card{
        display: flex;
        gap: 30px;
        overflow: auto;
        flex-direction: row;
        padding: 15px;
    }
`
const Card = styled.div`
    background: #fff;
    width: 429.19px;
    height: 320px;
    border: 5px solid #6BD1FF;
    box-shadow: 0px 0px 17px 8px #6BD1FF inset;
    border-radius: 15px;
    
    img{
        width: 429.19px;
        height: 260px;

    }

    .container-buttons{
        position: relative;
        top: -5px;
        background-color: #000;
        height: calc(100% - 260px);
        display: flex;
        border-radius: 0 0 15px 15px;
        justify-content: center;
        gap: 70px;
        align-items: center;
        align-self: center;
    }

    button{
        display: flex;
        align-items: center;
        gap: 5px;
        background: transparent;
        color: #fff;
        border-radius: 15px;
        border: 3px solid transparent;
        cursor: pointer;
        box-sizing: border-box;
        
    }

    button:hover{
        border: 3px solid #2271D1;
        color:#2271D1;
    }

    button img{
        width: 25px;
        height: 28px;
    }
`



const Categoria = ({categoria, cards, editar, irAEditar, valoresEditar, cardAVer}) => {



    return <>
    {
        cards.length > 0 && <>
        <ContainerCategoria cards={cards}>
            <TituloCategoria categoria={categoria} className={categoria}/>
            <div className="container-card">
            {
                cards.map( card => {
                    return <Card key={card.id}>
                        <img src={card.imagen} alt="imagen de referencia" onClick={() => cardAVer(card)} />
                        <div className="container-buttons">
                            <button onClick={()=>BorrarCard(card.id)}> <img src="img/trash.svg" alt="boton eliminar" />Eliminar</button>
                            <button onClick={() => { irAEditar(!editar); valoresEditar(card) }}><img src="img/edit.svg" alt="boton editar" />Editar</button>
                        </div>
                        </Card>
                })
            }
            </div>
        </ContainerCategoria>
        </>
    }
    </>
}

export default Categoria