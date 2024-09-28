const lista = ["be(ser/estar)","become(tornar-se)","begin(começar)","come(vir)","do(fazer)","drink(beber)","eat(comer)","feel(sentir-se)","find(encontrar)","forbid(proibir)","forget()",
    "forgive(perdoar)","get(pegar/conseguir)","give(dar)","go(ir)","grow(crescer)","have(ter)","hide(esconder)","keep(manter)","know(saber)","learn(aprender)","leave(sair)",
    "let(deixar)","make(fazer)","meet(encontrar)","read(ler)","run(correr)","say(dizer)","see(ver)","send(enviar)","sit(sentar)","sleep(dormir)","speak(falar)","take(tomar)",
    "teach(ensinar)","tell(dizer)","think(pensar)","write(escrever)"
    ]

function sorteio(){
    a = lista[Math.floor(Math.random() * lista.length)]
    var mensagem = "->verbo " + a + "<-"
    document.getElementById('sorteio').innerHTML = mensagem
}

function respostas(){
    var x = document.getElementById('x').value
    var result = ""
    if (a == "be(ser/estar)"){
        if (x =="was/were e been"){
            result = "resposta certa!!!" 
        }else{
            result= "você errou, a resposta certa é was/were e been"
        }
    }
    else if (a == "become(tornar-se)"){
        if (x =="became e become"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é became e become"
        }
    }

    else if (a == "begin(começar)"){
        if (x =="began e begun"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é began e begun"
        }
    }
    else if (a == "come(vir)"){
        if (x =="came e come"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é came e come"
        }
    }
    else if (a == "do(fazer)"){
        if (x =="did e done"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é did e done"
        }
    }
    else if (a == "drink(beber)"){
        if (x =="drank e drunk"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é drank e drunk"
        }
    }
    else if (a == "eat(comer)"){
        if (x =="ate e eaten"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é ate e eaten"
        }
    }
    else if (a == "feel(sentir-se)"){
        if (x =="felt e felt"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é felt e felt"
        }
    }
    else if (a == "find(encontrar)"){
        if (x =="found e found"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é found e found"
        }
    }
    else if (a == "forbid(proibir)"){
        if (x =="forbade e forbidden"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é forbade e forbidden"
        }
    }
    else if (a == "forget(esquecer)"){
        if (x =="forgot e forgotten"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é forgot e forgotten"
        }
    
    }
    else if (a == "forgive(perdoar)"){
        if (x =="forgave e forgiven"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é forgave e forgiven"
        }
    }
    else if (a == "get(pegar/conseguir)"){
        if (x =="got e gotten"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é got e gotten"
        }
    }
    else if (a == "give(dar)"){
        if (x =="gave e given"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é gave e given"
        }
    }
    else if (a == "go(ir)"){
        if (x =="went e gone"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é went e gone"
        }
    }
    else if (a == "grow(crescer)"){
        if (x =="grew e grown"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é grew e grown"
        }
    }
    else if (a == "have(ter)"){
        if (x =="had e had"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é had e had"
        }
    }
    else if (a == "hide(esconder)"){
        if (x =="hid e hidden"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é hid e hidden"
        }
    }
    else if (a == "keep(manter)"){
        if (x =="kept e kept"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é kept e kept"
        }
    }
    else if (a == "know(saber)"){
        if (x =="knew e known"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é knew e known"
        }
    }
    else if (a == "learn(aprender)"){
        if (x =="learned/learnt e learned/learnt"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é learned/learnt e learned/learnt"
        }
    }
    else if (a == "leave(sair)"){
        if (x =="left e left"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é left e left"
        }
    }
    else if (a == "let(deixar)"){
        if (x =="let e let"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é let e let"
        }
    }
    else if (a == "meet(encontrar)"){
        if (x =="met e met"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é met e met"
        }
    }
    else if (a == "make(fazer)"){
        if (x =="made e made"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é made e made"
        }
    }
    else if (a == "read(escrever)"){
        if (x =="read e read"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é read e read"
        }
    }
    else if (a == "run(correr)"){
        if (x =="ran e run"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é ran e run"
        }
    }
    else if (a == "say(dizer)"){
        if (x =="said e said"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é said e said"
        }
    }
    else if (a == "see(ver)"){
        if (x =="saw e seen"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é saw e seen"
        }
    }
    else if (a == "send(enviar)"){
        if (x =="sent e sent"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é sent e sent"
        }
    }
    else if (a == "sit(sentar)"){
        if (x =="sat e sat"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é "
        }
    }
    else if (a == "sleep(dormir)"){
        if (x =="slept e slept"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é slept e slept"
        }
    }
    else if (a == "speak(falar)"){
        if (x =="spoke e spoken"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é spoke e spoken"
        }
    }
    else if (a == "take(tomar)"){
        if (x =="took e taken"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é took e taken"
        }
    }
    else if (a == "teach(ensinar)"){
        if (x =="taught e taught"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é taught e taught"
        }
    }
    else if (a == "tell(dizer)"){
        if (x =="told e told"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é told e told"
        }
    }
    else if (a == "think(pensar)"){
        if (x =="thought e thought"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é thought e thought"
        }
    }
    else if (a == "write(escrever)"){
        if (x =="wrote e written"){
            result = "resposta certa!!!"   
        }else{
            result = "você errou, a resposta certa é wrote e written"
        }
    }
    
    document.getElementById('result').innerHTML = result + "<br>RESPONDA A PRÓXIMA"
    sorteio()
    document.getElementById('x').value = ""
    }
