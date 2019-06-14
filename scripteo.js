	var y = 100;
	var estado = "bajando";
	i=50;
	ia=50;
function iniciar() {
	var elemento = document.getElementById("lienzo");
	lienzo = elemento.getContext("2d");
	setInterval(animacion,1)

	//dibujar una esfera o circulo
	lienzo.beginPath();
	lienzo.arc(500,300,40,0,Math.PI*2,false);
	lienzo.fill();

	//parte de la animacion
}

function animacion(){

	//estado de la pelota, hara la intencion de que este rebotando
	if(y<900 && estado=="bajando"){
		lienzo.clearRect(0,0,1200,900);
		//dibujar la esfera ya que lo borro el clearRect
		lienzo.beginPath();
		lienzo.arc(500,y,40,0,Math.PI*2,false);
		lienzo.fill();
		y = y+i;
		i=i-0.5;
		if (i<=0) {
		lienzo.clearRect(0,0,1200,900);
		//dibujar la esfera ya que lo borro el clearRect
		lienzo.beginPath();
		lienzo.arc(500,300,40,0,Math.PI*2,false);
		lienzo.fill();
		}
	}
	if(y>=900){
		estado = "subiendo";
	}
	if(y>100 && estado=="subiendo"){
		lienzo.clearRect(0,0,1200,900);
		lienzo.beginPath();
		lienzo.arc(500,y,40,0,Math.PI*2,false);
		lienzo.fill();
		y = y-ia;
		ia=ia-0.5;
		if (ia<=0) {
		lienzo.clearRect(0,0,1200,900);
		//dibujar la esfera ya que lo borro el clearRect
		lienzo.beginPath();
		lienzo.arc(500,300,40,0,Math.PI*2,false);
		lienzo.fill();
		}
	}
	if(y<=100){
		estado="bajando";
	}
}
window.addEventListener("load",iniciar,false);
