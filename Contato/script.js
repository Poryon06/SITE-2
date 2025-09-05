function enviar() {
    // Normaliza as bordas dos inputs
    document.getElementById('name').style.border = "1px solid black";
    document.getElementById('email').style.border = "1px solid black";
    document.getElementById('message').style.border = "1px solid black";

    // Pega os valores digitados
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validação simples: se algum campo estiver vazio, marca em vermelho e sai da função
    let hasError = false;
    if (!name) {
        document.getElementById('name').style.border = "2px solid red";
        hasError = true;
    }
    if (!email) {
        document.getElementById('email').style.border = "2px solid red";
        hasError = true;
    }
    if (!message) {
        document.getElementById('message').style.border = "2px solid red";
        hasError = true;
    }

    if (hasError) return;

    // Monta a mensagem para WhatsApp
    const texto = `Olá! Gostaria de entrar em contato.\n\nNome: ${name}\nEmail: ${email}\nMensagem: ${message}`;
    const textoEncode = encodeURIComponent(texto);

    // Redireciona para o WhatsApp com a mensagem pronta
    window.location.href = `https://wa.me/5541996505343?text=${textoEncode}`;
}
