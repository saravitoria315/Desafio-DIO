let nome = "Lukitós"
let nivel = ""
let XP = 1
if ( XP<= 1000) {
    nivel="Ferro"
    console.log(" O Herói é de Nivel Ferro ");
}
else if (XP >=1001 && XP <= 2000){
    nivel="Bronze"
    console.log(" O Herói é de Nivel Bronze");
}
else if (XP >=2001 && XP<= 5000){
    nivel="Prata"
    console.log(" O Herói é de Nivel Prata");
}
else if (XP >=5001 && XP<=7000){
    nivel="Ouro"
    console.log(" O Herói é de Nivel Ouro ");
}
else if (XP >=7001 && XP<=800){
    nivel="Platina"
    console.log(" O Herói é de Nivel Platina");
}
else if (XP >=8001 && XP <=9000){
    nivel="Ascendente"
    console.log(" O Herói é de Nivel Ascendente");
}
else if (XP >= 9001 && XP<= 10000){
    nivel="Imortal"
    console.log(" O Herói é de Nivel Imortal");
}
else if (XP > 10001 ){
     nivel="Radiante"
    console.log(" O Herói é de Nivel Radiantes");
}
console.log (" O Herói " + nome + " está no Nivel " + nivel );