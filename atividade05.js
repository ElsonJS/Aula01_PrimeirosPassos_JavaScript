<script>
    //Faça um Programa que peça um número e então mostre o antecessor e o sucessor deste.
    var n1=prompt("Digite um numero: ");
    var soma=parseInt(n1);
  
    function antecessor(soma){
        return soma - 1;
    }
  
    function sucessor(soma){
        return soma + 1;
    }
    ocument.write("<h2>Antecessor do numero: " +  antecessor(soma) + "</h2><br>" + "<h2>Sucessor do numero: "  +  sucessor(soma)+ "</h2><br>");
</script>
