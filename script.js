const lista = ["be(ser/estar)","become(tornar-se)","begin(começar)","come(vir)","do(fazer)","drink(beber)","eat(comer)","feel(sentir-se)","find(encontrar)","forbid(proibir)","forget(esquecer)",
    "forgive(perdoar)","get(pegar/conseguir)","give(dar)","go(ir)","grow(crescer)","have(ter)","hide(esconder)","keep(manter)","know(saber)","learn(aprender)","leave(sair)",
    "let(deixar)","make(fazer)","meet(encontrar)","read(ler)","run(correr)","say(dizer)","see(ver)","send(enviar)","sit(sentar)","sleep(dormir)","speak(falar)","take(tomar)",
    "teach(ensinar)","tell(dizer)","think(pensar)","write(escrever)"
    ];

function sorteio(){
    verbo = lista[Math.floor(Math.random() * lista.length)];
    var mensagem = "Verbo " + verbo;
    console.log(verbo);
    document.getElementById('verbo').innerHTML = mensagem;
}

function respostas(){
    var participio = document.getElementById('participio').value;
    var passado = document.getElementById('passado').value;
    var result = "";
    if (verbo == "be(ser/estar)"){
        if (participio == "was/were" && passado == "been"){
            result = "resposta certa!!!" 
        }else{
            result= "você errou, a resposta certa é was/were e been";
        }
    }
    else if (verbo == "become(tornar-se)"){
        if (participio == "became" && passado == "become"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é became e become";
        }
    }
    else if (verbo == "begin(começar)"){
        if (participio == "began" && passado == "begun"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é began e begun";
        }
    }
    else if (verbo == "come(vir)"){
        if (participio == "came" && passado == "come"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é came e come";
        }
    }
    else if (verbo == "do(fazer)"){
        if (participio == "did" && passado == "done"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é did e done";
        }
    }
    else if (verbo == "drink(beber)"){
        if (participio == "drank" && passado == "drunk"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é drank e drunk";
        }
    }
    else if (verbo == "eat(comer)"){
        if (participio == "ate" && passado == "eaten"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é ate e eaten";
        }
    }
    else if (verbo == "feel(sentir-se)"){
        if (participio == "felt" && passado == "felt"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é felt e felt";
        }
    }
    else if (verbo == "find(encontrar)"){
        if (participio == "found" && passado == "found"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é found e found";
        }
    }
    else if (verbo == "forbid(proibir)"){
        if (participio == "forbade" && passado == "forbidden"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é forbade e forbidden";
        }
    }
    else if (verbo == "forget(esquecer)"){
        if (participio == "forgot" && passado == "forgotten"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é forgot e forgotten";
        }
    }
    else if (verbo == "forgive(perdoar)"){
        if (participio == "forgave" && passado == "forgiven"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é forgave e forgiven";
        }
    }
    else if (verbo == "get(pegar/conseguir)"){
        if (participio == "got" && passado == "gotten"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é got e gotten";
        }
    }
    else if (verbo == "give(dar)"){
        if (participio == "gave" && passado == "given"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é gave e given";
        }
    }
    else if (verbo == "go(ir)"){
        if (participio == "went" && passado == "gone"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é went e gone";
        }
    }
    else if (verbo == "grow(crescer)"){
        if (participio == "grew" && passado == "grown"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é grew e grown";
        }
    }
    else if (verbo == "have(ter)"){
        if (participio == "had" && passado == "had"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é had e had";
        }
    }
    else if (verbo == "hide(esconder)"){
        if (participio == "hid" && passado == "hidden"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é hid e hidden";
        }
    }
    else if (verbo == "keep(manter)"){
        if (participio == "kept" && passado == "kept"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é kept e kept";
        }
    }
    else if (verbo == "know(saber)"){
        if (participio == "knew" && passado == "known"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é knew e known";
        }
    }
    else if (verbo == "learn(aprender)"){
        if ((participio == "learned" || participio == "learnt") && (passado == "learned" || passado == "learnt")){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é learned/learnt e learned/learnt";
        }
    }
    else if (verbo == "leave(sair)"){
        if (participio == "left" && passado == "left"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é left e left";
        }
    }
    else if (verbo == "let(deixar)"){
        if (participio == "let" && passado == "let"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é let e let";
        }
    }
    else if (verbo == "make(fazer)"){
        if (participio == "made" && passado == "made"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é made e made";
        }
    }
    else if (verbo == "meet(encontrar)"){
        if (participio == "met" && passado == "met"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é met e met";
        }
    }
    else if (verbo == "read(ler)"){
        if (participio == "read" && passado == "read"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é read e read";
        }
    }
    else if (verbo == "run(correr)"){
        if (participio == "ran" && passado == "run"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é ran e run";
        }
    }
    else if (verbo == "say(dizer)"){
        if (participio == "said" && passado == "said"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é said e said";
        }
    }
    else if (verbo == "see(ver)"){
        if (participio == "saw" && passado == "seen"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é saw e seen";
        }
    }
    else if (verbo == "send(enviar)"){
        if (participio == "sent" && passado == "sent"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é sent e sent";
        }
    }
    else if (verbo == "sit(sentar)"){
        if (participio == "sat" && passado == "sat"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é sat e sat";
        }
    }
    else if (verbo == "sleep(dormir)"){
        if (participio == "slept" && passado == "slept"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é slept e slept";
        }
    }
    else if (verbo == "speak(falar)"){
        if (participio == "spoke" && passado == "spoken"){
            result = "resposta certa!!!"   
        }else{
        }
    }
    else if (verbo == "take(tomar)"){
        if (x == "took e taken"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é took e taken";
        }
    }
    else if (verbo == "teach(ensinar)"){
        if (x == "taught e taught"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é taught e taught";
        }
    }
    else if (verbo == "tell(dizer)"){
        if (x == "told e told"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é told e told";
        }
    }
    else if (verbo == "think(pensar)"){
        if (x == "thought e thought"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é thought e thought";
        }
    }
    else if (verbo == "write(escrever)"){
        if (x == "wrote e written"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é wrote e written";
        }
    }

    let tempo = 3;

    document.getElementById('result').innerHTML = 
    result + "<br>Responda a próxima em " + tempo;
    document.getElementById('verbo').innerHTML = "";

    const contador = setInterval(() => {
        tempo--;

        document.getElementById('result').innerHTML = 
            result + "<br>Responda a próxima em " + tempo;

        if (tempo === 0) {
            clearInterval(contador);
    }
    }, 1000);

    setTimeout(() => {
        sorteio();
    }, 3000);
    document.getElementById('participio').value = "";
    document.getElementById('passado').value = "";
}
