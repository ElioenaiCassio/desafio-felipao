let nomeHeroi = "O Herdeiro";
let experienciaHeroi = "6500";
let classeHeroi = "";

if (experienciaHeroi <= 1000) {
    classeHeroi = "Ferro";
}else if (experienciaHeroi >= 1001 || experienciaHeroi <= 2000){
    classeHeroi = "Bronze";
}else if (experienciaHeroi >= 2001 || experienciaHeroi <= 5000){
    classeHeroi = "Prata";
}else if (experienciaHeroi >= 5001 || experienciaHeroi <= 7000){
    classeHeroi = "Ouro";
}else if (experienciaHeroi >= 7001 || experienciaHeroi <= 8000){
    classeHeroi = "Platina";
}else if (experienciaHeroi >= 8001 || experienciaHeroi <= 9000){
    classeHeroi = "Ascendente";
}else if (experienciaHeroi >= 9001 || experienciaHeroi <= 10000){
    classeHeroi = "Imortal";
}else if (experienciaHeroi >= 10001){
    classeHeroi = "Radiante";
}else {
    console.log("Nível de experiência inválido!");
}

console.log(`O Herói de nome ${nomeHeroi} está no nível de ${classeHeroi}`)
