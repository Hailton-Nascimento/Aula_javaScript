/* var nome =  "Hailton Nascimento";
var idade = 38;
var idade2 =  10;
alert("nome: "+nome+ "tem "+idade+"anos!");
console.log(nome);
console.log(idade+idade2);

var frase ="Japão e o melhor time do mundo!"


console.log(frase);

console.log(frase.replace("Japão","Brasil"));
/* 
var lista=["maça","pera","Laranja"];
console.log(lista);


lista.pop();

lista.push("uva");
console.log(lista);

console.log(lista.toString());
console.log(lista.join());

var fruta = {nome:"maça",cor:"Vermelha"};
console.log(fruta);
alert(fruta.cor);

var frutas = [{nome:"maça",cor:"Vermelha"},{nome:"uva",cor:"roxa"}];
console.log(frutas);
alert(frutas[1].cor); */

/* var idade = prompt("Qual sua idade?");
 if(idade>=18){
    alert("Você é maior de idade!");
}else{
    alert("Você é menor de idade!");
} */
 
/* var count = 0;
while(count<5){
    console.log(count);
    alert(count);
    count++;

}



for(var count =0; count<=5;count++){
    console.log(count);
    alert(count);
    
    
}


var d=new Date();

console.log(d+"%%%%%%");
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getFullYear()); */ 

/* function soma(n1,n2){
    return (n1+n2);
}

console.log(soma(2,8)); 

 function checarIdade(){
    var idade= prompt("Informe sua idade:");
    if(idade>=18){
        return "Você é maior de idade!"
    }else{
               return "Você não tem idade para navegar neste site."
    }

}  
 alert(checarIdade()); */

 function clicar(){

    document.getElementById("agradescimento").innerHTML="<b>Obrigado por Clicar!<b>";
     //alert("Obrigado por clicar");
     
} 

function redirecionar(){
         window.location.href = "https://www.google.com.br/?gws_rd=ssl";

} 
function trocar(elemento){
    elemento.innerHTML="Obrigado por passar o mause!";
        
    
}
function voltar(elemento){
    elemento.innerHTML="Passe o mause aqui!";
        
  
}

function load(){
    console.log("Pagina carregada!")
}

function funcaoChange(elemento){
    console.log(elemento.value);
}