import { useEffect, useState } from "react"
import styled from "styled-components"
import TituloCategoria from "../TituloCategoria"

const ContainerCategoria = styled.section`
    margin: 0px 50px 0px 50px;
    padding: 50px 0;
    
    .container-card{
        display: flex;
        gap: 30px;
        overflow: auto;
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



const Categoria = () => {

    const [categorias, setCategorias] = useState([])

    useEffect( ()=>{
        const getCategorias= async () =>{
            const respuesta = await fetch("http://localhost:3000/categorias")
            const data = await respuesta.json()
            setCategorias([...data])
        }

        getCategorias()
    },[])


    return <>
    {
        categorias.map( (categoria) => <ContainerCategoria>
            <TituloCategoria categoria={categoria} className={categoria}/>
            <div className="container-card">
                <Card>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <img src="img/test.png" alt="" />   
                    </a>
                    <div className="container-buttons">
                        <button>
                            <img src="img/trash.svg" alt="icono boton borrar" />
                            Borrar
                        </button>
                        <button>
                            <img src="img/edit.svg" alt="icono boton editar" />
                            Editar
                        </button>
                    </div>
                </Card>
                <Card>
                    <img src="img/test.png" alt="" />
                    <div className="container-buttons">
                        <button>
                            <img src="img/trash.svg" alt="icono boton borrar" />
                            Borrar
                        </button>
                        <button>
                            <img src="img/edit.svg" alt="icono boton editar" />
                            Editar
                        </button>
                    </div>
                </Card>
                <Card>
                    <img src="img/test.png" alt="" />
                    <div className="container-buttons">
                        <button>
                            <img src="img/trash.svg" alt="icono boton borrar" />
                            Borrar
                        </button>
                        <button>
                            <img src="img/edit.svg" alt="icono boton editar" />
                            Editar
                        </button>
                    </div>
                </Card>
            </div>
            </ContainerCategoria>)    
    }
    </>
}

export default Categoria