import { useState } from "react"
import { useEffect } from "react"


const CampoSelect = ({validoInvalido, value, nameProp, id, manejarCambio}) => {
    
    const [categorias, setCategorias] = useState([])

    useEffect( ()=>{
        const getCategorias= async () =>{
            const respuesta = await fetch("http://localhost:3000/categorias")
            const data = await respuesta.json()
            setCategorias([...data])
        }

        getCategorias()
    },[])

    return <select 
            className="campos" 
            value={value} 
            required 
            onChange={(e) => { 
                manejarCambio(e.target.value)
                validoInvalido(() => {
                    const valor = e.target.checkValidity() ? "valido" : "invalido"
                    return valor})
            }}
            name={nameProp} 
            id={id}

            onBlur={(e) => { 
                validoInvalido(() => {
                    const valor = e.target.checkValidity() ? "valido" : "invalido"
                    return valor})
            }} 
            >
        <option value="" disabled defaultValue="" hidden>Selecciona una categoria</option>
        {
            categorias.map( (categoria, index) =><option value={categoria} key={index} >{categoria}</option>)
        }
        
    </select>
}

export default CampoSelect