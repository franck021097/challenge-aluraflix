//conexion al db.json
export const ObtenerCategorias =  async () => {
    const respuesta = await fetch("http://localhost:3000/categorias")
    const data = await respuesta.json()
    //console.log(data);   

    if(data.length > 0)return data
}


export const CrearNuevoRegistro = async (id, nombre, imagen, video, categoria, descripcion) => {
    const conexion= await fetch("http://localhost:3000/cards",{
    method:"POST",
    headers:{
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        id: id,
        titulo: nombre, 
        categoria: categoria, 
        imagen: imagen, 
        descripcion: descripcion,
        video: video
    }),
    });

}