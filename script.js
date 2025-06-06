function enviarWPP(event) {
    event.preventDefault(); // previne o comportamento padrão do formulário(recarregar a página)
    const nome = document.getElementById('nome').value; /* conteudo que a pessoa digitou no nome */
    const mensagem = document.getElementById('mensagem').value; /* conteudo que a pessoa digitou na mensagem */
    const telefone = '5567993379089' /* meu telefone, que será usado para enviar a mensagem */

    const texto = `Olá, meu nome é ${nome} e minha mensagem é: ${mensagem}` // mensagem que será enviada
    const msgFormatada = encodeURIComponent(texto) // mensagem formatada para ser enviada via WhatsApp
    // encodeURIComponent é usado para codificar a mensagem, substituindo espaços e caracteres especiais por seus equivalentes percentuais
    

    const url = `https://wa.me/${telefone}?text=${msgFormatada}` // URL para enviar a mensagem via WhatsApp

    window.open(url, '_blank'); // abre a URL em uma nova aba
}
