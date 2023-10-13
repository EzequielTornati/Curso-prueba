const imagenes = document.querySelectorAll(".img-galeria") /* estoy creando constantes, esta es para seleccionar todas las imagenes que esten dentro de IMG galeria */
 const imagenesLight = document.querySelector (".agregar-imagen")  /* es para tomar a la imagen que vamos a agregar en el Light box */ 
const contenedorLight = document.querySelector (".imagen-light")
/* Las constantes son para seleccionar elementos de HTML y ponerles un nombre para JS. Estoy diciendo por ejemplo que "agregar-imagen" la voy a llamar "imagenesLight" */ 

imagenes.forEach(imagen =>{

imagen.addEventListener("click", () =>{  /* una vez hagas el click, quiero que se ejecute una funcion, que lo voy a poner mas abajo */
aparecerImagen(imagen.getAttribute(" src "))
    })
})

const aparecerImagen = (imagne)=>{

imagenesLight.src = imagen; 
}