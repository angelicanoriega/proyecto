
var name = prompt("HOLA ¿Cual es tu nombre?");
console.log(name);    ///para que se imprima en la consola///
var nameHtml=document.getElementById("nameHtml");
      nameHtml.innerHTML = name;
 var game = prompt("¿Quieres jugar \n 1.SI  \n 2. NO");

switch(game) {
  case "2": 
    var sorry = "NO TE PREOCUPES, JUGAREMOS EN OTRA OPORTUNIDAD C: ";
    var sorryHtml=document.getElementById("sorryHtml");
    sorryHtml.innerHTML = sorry;
  break; 
  case "1": 
    var Incorrectanswers =(0);
    var CorrectAnswers =(0) ;
  
    var start = alert("Dale ACEPTAR para empezar a jugar");
    //pregunta 1//
    var QuestionOne = prompt("¿Cuál es la capital de Peru?").toLowerCase();

    if(QuestionOne === "lima"){CorrectAnswers++} 
    else {Incorrectanswers++;
      alert("ERROR :C parece que no eres lo suficientemente peruano. Intenta la siguiente.")
    }
//pregunta 2//
    var QuestionTwo = prompt("¿En qué mes fue la independencia del Perú?").toLowerCase();

    if(QuestionTwo === "julio"){CorrectAnswers++}
    else{Incorrectanswers++;
    alert("ERROR :C EN LA SIGUIENTE SERÁ MEJOR")
    }
//pregunta 3//
    var QuestionThree = prompt("¿Los colores de la bandera peruana son rojo y ______ ?").toLowerCase();
    if(QuestionThree === "blanco"){CorrectAnswers++}
    else{Incorrectanswers++;
    alert("ERROR :C INTENTA NUEVAMENTE.")
    } 
// respuestas correctas el incorrectas en texto//    
function myFunction() {  
    document.getElementById("respuesta").innerHTML = "Tus respuestas correctas son "+ CorrectAnswers +" y "+"Tus respuestas incorrectas son "+ Incorrectanswers ;
}

}

