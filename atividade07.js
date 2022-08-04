<script>
    /*Faça um programa que peça o tamanho de um arquivo para download (em MB)
    e a velocidade de um link de Internet (em Mbps), calcule e informe o tempo 
    aproximado de download do arquivo usando este link (em minutos).*/
    var arquivo=prompt("Qual o tamanho do arquivo? ");
    var velocidade=prompt("Qual a velocidade do link da internet? ");
    var tempo=arquivo/velocidade;
    var minuto=60;
  
    document.write("<h2>Tempo aproximado de download: "+ tempo/minuto + "</h2>");
</script>
