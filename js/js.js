<!-- Creamos 2 variables  -->
var nnoticias=1;
var maxnoticias=2;

<!-- Hacemoos la funcion del boton -->

$(function() {
		$("button").click(function() {
			if (nnoticias <= maxnoticias){
				$.getJSON("https://rawgit.com/jordanfast/TrabajoFinal/master/data/data"+nnoticias+".json", function( nombres ) {
					nnoticias++;
					mostrarNombres( nombres );
				});
			}else{
			};
});

function mostrarNombres(nombres){
        $.each(nombres, function(i, nombre) {
            $("#todo").append('<div class="row"><div class="col-sm-12" id="News"><div class="noticias"><header class="titular"><h3>'+nombre.titular+'</h3></a></header><article><h4>'+nombre.cuerpoNoticia+'<h4></article><div  class="imagenNoticia"><img class="img-responsive img-thumbnail" src="img/'+nombre.imagen+'"></div><div class="fecha"><p>'+nombre.fecha+'</p></div></div></div></div>');	
        	
        });
}
});


<!-- Creamos variables -->

var contador = 1;
var temporizador = setInterval(myTimer, 1000);

<!--En esta variable estaran las imagenes -->

var c=[];
c [0]="img/publi.jpg"
c [1]="img/publigrande.jpg"
c [2]="img/publigrande2.jpg"

<!-- Creamos la funcion   -->

function myTimer() {
contador++;
$("#publicidad img").attr('src',c[contador-1]);;
if (contador==3) contador=0;
};;
 var contador2 = 1;
 var temporizador2 = setInterval(myTimer2, 2000);

<!--En esta variable estaran las imagenes -->

var b=[];
b [0]="img/publimini1.png"
b [1]="img/publimini2.png"
b [2]="img/publimini3.png"


<!-- Creamos la funcion   -->

function myTimer2() {
contador2++;
$("#publicidadMovil img").attr('src',b[contador2-1]);;
if (contador2==3) contador2=0;
}
