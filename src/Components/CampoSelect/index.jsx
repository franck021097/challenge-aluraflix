const CampoSelect = ({validoInvalido, value, nameProp, id, manejarCambio}) => {

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
        <option value="1">uno</option>
        <option value="2">dos</option>
        <option value="3">tres</option>
    </select>
}

export default CampoSelect