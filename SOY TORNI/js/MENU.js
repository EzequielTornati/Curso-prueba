const hamburguer = document.querySelector(".hamburguer");
const menu = document.querySelector(".menu-navegacion"); /* El poner el punto antes de poner el nombre dentro del parentesis es para seleccionar a la clase. El punto referencia a la clase  */ 

/*console.log(menu)
console.log(hamburguer) /* esto es para chequear que lo que yo este cargando el la pagina este */

hamburguer.addEventListener /*esto es para agregar que paso algo, un evento. Tengo que determinar de que tipo*/ ("click",()=>{ /* El tipo es CLICK. Lo que va a pasar es que, como determine que sea en "hamburguer", cuando pase por hamburguer, voy a poder darle click y que pase algo*/
menu.classList.toggle ("spread") /* al menu quiero que selecciones las clases y que le agreges y le quites SPREAD, esto significa que cada vez que toque el menu hamburguesa voy a ponerle la case spread dependiendo de si la tiene o no (es eso de que el menu se vaya o aparezca)*/
 
})

window.addEventListener ("click", e=> {  /*como no quiero que mi logo de hamburguer aparece asi, voy a agregar WINDOW, cada vez que alguien toque la ventana, quiero que dispare otra funcion de flecha, poniendole un parametro E, lo que pasa es que si haces eso, vas a hacer que en vez de tener que hacer click en un lugar en especifico haces que se pueda dar click en cualquier lugar de la pagina */
    /* console.log(e.target) /* e.target me dice a que elemento le estoy dando click y lo quiero para saber justamente a que le estoy dando click */

    if(menu.classList.contains("spread")/* el if es una condicional. Quiero que haga algo en caso de que si menu.classlist, tiene la clase spread quiero que se ejecute x codigo */    
    && e.target != menu && /*esto son ANTS, sin esto no funciona */ e.target != hamburguer){  /* Quiero que si menu tiene la clase spread y aparte al elemento al que le estamos click (e.target) es diferente al menu, si le damos click a algo diferente al menu, tiene que ejecutarse, y ademas tiene que tener la clase spread para que pase. Y al elemento al que le damos click (e.target) es diferente a hamburger pase algo, porque si no pongo esto, cada vez que yo le de click a hamburguer, el menu se va a cerrar y no quiero esto */ /* Yo aca estoy planteando positivos y negativos, son condicionales. Estoy queriendo que cuando habra el menu, tengo que tocar unicamente en HAMBURGUER y para cerrarlo quiero tener que tocar en cualquier otra parte que no sea HAMBURGUER */
    /*DIOS MIO ME ESTA QUEDANDO UN ASCO CON LAS EXPLICACIONES */

        menu.classList.toggle("spread")
    }

       

})
