import styled from "styled-components"
import LogoAluraFLix from "../Logo"
import { Link, useLocation } from "react-router-dom"
import { useState } from "react"


export const ContainerEstilizado = styled.div `
    display: flex;
    background: #090f16;
    color: #2271D1B2;
    padding: 42px 51px;
    justify-content: ${ props=> props.$tipo=="Header" ? "space-between" : "center"};
    align-items: center;

    ${props => props.$tipo == "Header" ? "border-bottom: 4px solid #2271D1;" : "border-top: 4px solid #2271D1;"}

    

    .logo-aluraflix{
        height: 40px;
    }

    .botones-header-flex{
        display: flex;
        gap: 25px;
    }


    @media (max-width: 700px) {
        ${props => props.$tipo == "Header" && "display: none;"}
    }
`

const BotonEstilizado = styled.button`
    background: #000000E5;
    color: ${props => props.$activo ? "#2271D1" : "#fff"};
    font-family: sans-serif;
    font-weight: 900;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    cursor: pointer;
    width: 180.13px;
    height: 54px;
    gap: 0px;
    border-radius: 10px;
    border: 2px solid ${ props=> props.$activo ? "#2271D1" : "#fff"};

    box-shadow: ${props=> props.$activo ? "0px 0px 12px 4px #2271D1 inset" : "none"};

    text-transform: uppercase;
`



const Header = ({ btnActivo, activo}) => {

    const location = useLocation();
    const [botonActivo, setBotonActivo] = useState([{path: "/", boton: "home", activo: false}, {path: "/NuevoVideo", boton: "Nuevo Video", activo: false}])

    let btnAct;
    
    //console.log(btnActivo);
        if(btnActivo){
            const botonActivoNuevo = botonActivo.map( (boton) => {
                if(boton.path == "/NuevoVideo" && location.pathname == "/NuevoVideo"){
                    console.log(boton.path);
                    boton.activo = true
                }else if(boton.path == "/" && location.pathname != "/NuevoVideo"){
                    boton.activo = true
                }

                return boton
            })
    
            setBotonActivo(botonActivoNuevo)
            btnAct = false
        }

    const actualizarBoton = (btn) => {
        const nuevoBtnActivo = botonActivo.map(
            btnActual => {
                if(btnActual.boton == btn) btnActual.activo = true
                else btnActual.activo = false
                    return btnActual
            }
        )

        setBotonActivo(nuevoBtnActivo)
        
    }

    return <>
    <ContainerEstilizado $tipo="Header" activo={btnAct}>
        <LogoAluraFLix/>

        <div className="botones-header-flex">
            {botonActivo.map( boton => {
                return <Link to={boton.path} key={boton.path}>
                <BotonEstilizado  $activo={boton.activo} onClick={() =>actualizarBoton(boton.boton)}>
                        {boton.boton}
                </BotonEstilizado> 
            </Link>
            })
            }
        </div>
    </ContainerEstilizado>
    </>
}

export default Header