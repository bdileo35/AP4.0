/*procedimiento para gestionar el form

//1 indicar los elementos con id y/o clases, según corresponda
//2 capturar los elementos.
//3 escuchar los elementos claves (botones) y lanzar una función -> esta función va a escuchar el click y también averiguará en qué botón se produjo el evento.

scenarios:
form1-> 
1) btn-siguiente: ocultar form1 y mostrar form2

form2 ->
1) btn-previo: ocultar form2 mostrar form1
2) btn-siguiente: ocultar form2 mostrar form3

form3 ->
1) btn-previo: ocultar form3 mostrar form2
2) btn-enviar: lanzar función de procesamiento del form (form*3)


función de proceso del formulario (formularios, ya sé)
capturamos los elementos del formulario (inputs, textarea) y accedemos a sus valores, para almacenarlos en variables... por ej

const email = document.getElementById("email").value
console.log(email) -> marcelobettini@bla.com


..por último, escondemos el form3 y volvemos a mostrar el form1 (previamente reseteado)
podríamos dar un feedback "su mensaje fue enviado y lo leerá el primo de Magoya"
*/

