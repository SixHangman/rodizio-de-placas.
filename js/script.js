function DigitePlaca(){
    const texto = document.querySelector("h1");
    const pla = document.querySelector('#valor1').value;
    const dia = document.querySelector('#valor2').value;
    
    if(pla == 1 && pla == 2 && dia == "segunda" || dia == "Segunda"){
        texto.innerHTML = "Circulação proibida";
        texto.innerHTML+= " <p>Demais placas liberadas.</p>"
    }
     else if(pla == 1||pla == 2 && dia == "terça" || dia == "Terça" || dia == "Terça"|| dia == "terça"){
        texto.innerHTML = "Circulação Liberada";
        texto.innerHTML+= " <p>Circulação restrita das 7H ás 10H e das 17H ás 20H</p>"
    }
    else if(pla == 1||pla == 2 && dia == "quarta" || dia == "Quarta"){
        texto.innerHTML = "Circulação Liberada";
        texto.innerHTML+= " <p>Circulação restrita das 7H ás 10H e das 17H ás 20H</p>"
    }
    else if(pla == 1||pla == 2 && dia == "quinta" || dia == "Quinta"){
        texto.innerHTML = "Circulação Liberada";
        texto.innerHTML+= " <p>Circulação restrita das 7H ás 10H e das 17H ás 20H</p>"
    }
    else if(pla == 1||pla == 2 && dia == "sexta" || dia == "Sexta"){
        texto.innerHTML = "Circulação Liberada";
        texto.innerHTML+= " <p>Circulação restrita das 7H ás 10H e das 17H ás 20H</p>"
    }

    // Numeros 3 e 4 //


    else if(pla == 3||pla == 4 && dia == "segunda" || dia == "Segunda"){
        texto.innerHTML = "Circulação Liberada";
        texto.innerHTML+= " <p>Circulação restrita das 7H ás 10H e das 17H ás 20H</p>"
    }
     else if(pla == 3 ||pla == 4 && dia == "terça" || dia == "Terça" || dia == "Terça" || dia == "terça"){
        texto.innerHTML = "Circulação Proibida";
        texto.innerHTML+= " <p>Demais placas liberadas.</p>"
    }
    else if(pla == 3||pla == 4 && dia == "quarta" || dia == "Quarta"){
        texto.innerHTML = "Circulação Liberada";
        texto.innerHTML+= " <p>Circulação restrita das 7H ás 10H e das 17H ás 20H</p>"
    }
    else if(pla == 3||pla == 4 && dia == "quinta" || dia == "Quinta"){
        texto.innerHTML = "Circulação Liberada";
        texto.innerHTML+= " <p>Circulação restrita das 7H ás 10H e das 17H ás 20H</p>"
    }
    else if(pla == 3||pla == 4 && dia == "sexta" || dia == "Sexta"){
        texto.innerHTML = "Circulação Liberada";
        texto.innerHTML+= " <p>Circulação restrita das 7H ás 10H e das 17H ás 20H</p>"
    }

    // Numeros 5 e 6 //

    else if(pla == 5 ||pla == 6 && dia == "segunda" || dia == "Segunda"){
        texto.innerHTML = "Circulação Liberada";
        texto.innerHTML+= " <p>Circulação restrita das 7H ás 10H e das 17H ás 20H</p>"
    }
     else if(pla == 5 ||pla == 6 && dia == "terça" || dia == "Terça" || dia == "Terça" || dia == "terça"){
        texto.innerHTML = "Circulação Liberada";
        texto.innerHTML+= " <p>Circulação restrita das 7H ás 10H e das 17H ás 20H</p>"
    }
    else if(pla == 5||pla == 6 && dia == "quarta" || dia == "Quarta"){
        texto.innerHTML = "Circulação Proibida";
        texto.innerHTML+= " <p>Demais placas liberadas.</p>"
    }
    else if(pla == 5||pla == 6 && dia == "quinta" || dia== "Quinta"){
        texto.innerHTML = "Circulação Liberada";
        texto.innerHTML+= " <p>Circulação restrita das 7H ás 10H e das 17H ás 20H</p>"
    }
    else if(pla == 5||pla == 6 && dia == "sexta" || dia == "Sexta"){
        texto.innerHTML = "Circulação Liberada";
        texto.innerHTML+= " <p>Circulação restrita das 7H ás 10H e das 17H ás 20H</p>"
    }

    // Numeros 7 e 8 //

    else if(pla == 7 ||pla == 8 && dia == "segunda" || dia == "Segunda"){
        texto.innerHTML = "Circulação liberada";
        texto.innerHTML+= " <p>Circulação restrita das 7H ás 10H e das 17H ás 20H</p>"
    }
     else if(pla == 7 ||pla == 8  && dia == "terça" || dia == "terça" || dia == "Terça" || dia == "Terça"){
        texto.innerHTML = "Circulação Liberada";
        texto.innerHTML+= " <p>Circulação restrita das 7H ás 10H e das 17H ás 20H</p>"
    }
    else if(pla == 7 ||pla == 8 && dia == "quarta" || dia == "Quarta"){
        texto.innerHTML = "Circulação Liberada";
        texto.innerHTML+= " <p>Circulação restrita das 7H ás 10H e das 17H ás 20H</p>"
    }
    else if(pla == 7 ||pla == 8 && dia == "quinta" || dia == "Quinta"){
        texto.innerHTML = "Circulação Proibida";
        texto.innerHTML+= " <p>Demais placas liberadas.</p>"
    }
    else if(pla == 7||pla == 8 && dia == "sexta" || dia == "Sexta"){
        texto.innerHTML = "Circulação Liberada";
        texto.innerHTML+= " <p>Circulação restrita das 7H ás 10H e das 17H ás 20H</p>"
    }

    //Numeros 9 e 0 //

    else if(pla == 9 ||pla == 0 && dia == "segunda" || dia == "Segunda"){
        texto.innerHTML = "Circulação liberada";
        texto.innerHTML+= " <p>Circulação restrita das 7H ás 10H e das 17H ás 20H</p>"
    }
     else if(pla == 9 ||pla == 0 && dia == "terça"|| dia == "terça" || dia == "Terça" || dia == "Terça"){
        texto.innerHTML = "Circulação Liberada";
        texto.innerHTML+= " <p>Circulação restrita das 7H ás 10H e das 17H ás 20H</p>"
    }
    else if(pla == 9 ||pla == 0 && dia == "quarta" || dia == "Quarta"){
        texto.innerHTML = "Circulação Liberada";
        texto.innerHTML+= " <p>Circulação restrita das 7H ás 10H e das 17H ás 20H</p>"
    }
    else if(pla == 9 ||pla == 20 && dia == "quinta" || dia == "Quinta"){
        texto.innerHTML = "Circulação Liberada";
        texto.innerHTML+= " <p>Circulação restrita das 7H ás 10H e das 17H ás 20H</p>"
    }
    else if(pla == 9 ||pla == 0 && dia == "sexta" || dia == "Sexta"){
        texto.innerHTML = "Circulação Proibida";
        texto.innerHTML+= " <p>Demais placas liberadas.</p>"
    }
    else if((pla > 9 || pla <0) || (dia !== "segunda" || dia !== "Segunda" || dia !== "terça" || dia !== "Terça" || dia !== "Terça" || dia !== "Terça" || dia !== "quarta" || dia !== "Quarta" || dia !== "quinta" || dia !== "Quinta" || dia !== "sexta" || dia !== "Sexta" ));
    else{
        texto.innerHTML = "Sua placa condiz com o dia não rodavel";
    }
}

        
        
        
        
        
        
        
        