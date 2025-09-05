function enviar(){
    //volta as bordas para preto normalizando o input
    document.getElementById('nome').style.border = "1px solid black"
    document.getElementById('assunto').style.border = "1px solid black"

    //atribui para variaveis constantes os valores digitados pelo usuario
    const nome = document.getElementById('nome').value 
    const assunto = document.getElementById('assunto').value
    
    //condicional para verificar se nao há nome e assunto digitados,
    //caso nao digitados as bordas do input ficam vermelhas
    if(!nome || !assunto){
        document.getElementById('nome').style.border = "2px solid red"
        document.getElementById('assunto').style.border = "2px solid red"
        return
    }

    //mandando msg por whats
    const mensagem = `Gostaria de entrar em contato!!! \n\nNome: ${nome} \nAssunto: ${assunto}`
    const msg = encodeURIComponent(mensagem)
    window.location.href = `https://wa.me/5541996505343?text=${msg}`
}