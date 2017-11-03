            // jQuery
$(document).ready(function(){ 
   $('#alternar-respuesta-ej1').on('click',function(){
      $('#respuesta-ej1').toggle('slow');
   });
});
// jQuery
$(document).ready(function(){ 
 
    $('#alternar-panel-oculto').toggle( 
 
        /* 
            Primer click.
            Función que descubre un panel oculto
            y cambia el texto del botón.
        */
        function(e){ 
            $('#panel-oculto').slideDown();
            $(this).text('Cerrar introducción');
            e.preventDefault();
        }, // Separamos las dos funciones con una coma
     
        /* 
            Segundo click.
            Función que oculta el panel
            y vuelve a cambiar el texto del botón.
        */
        function(e){ 
            $('#panel-oculto').slideUp();
            $(this).text('Mostrar introducción');
            e.preventDefault();
        }
 
    );
 
});

            // jQuery
$(document).ready(function(){ 
   $('#alternar-respuesta-ej2').on('click',function(){
      $('#respuesta-ej2').toggle('slow');
   });
});
$(document).ready(function(){ 
   $('#alternar-respuesta-ej3').on('click',function(){
      $('#respuesta-ej3').toggle('slow');
   });
});
$(document).ready(function(){ 
   $('#alternar-respuesta-ej4').on('click',function(){
      $('#respuesta-ej4').toggle('slow');
   });
});