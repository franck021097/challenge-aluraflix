const CampoTexto = ({validoInvalido, placeholder, nameProp, id, value, manejarCambio}) =>{
    return <input 
    required 
    className="campos" 
    type="text" 
    placeholder={placeholder} 
    name={nameProp} 
    id={id} 
    onChange={(e) => { 
        manejarCambio(e.target.value)
        validoInvalido(() => {const valor = e.target.checkValidity() ? "valido" : "invalido" 
                            return valor})
    }}  
    
    onBlur={(e) => { 
        validoInvalido(() => {
            const valor = e.target.checkValidity() ? "valido" : "invalido"
            return valor})
    }} 
    value={value}
    />
}


export default CampoTexto