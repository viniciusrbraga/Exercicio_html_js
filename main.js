const form = document.getElementById("formulario");

function validacampos(x, y) {
    if (y > x) {
        return true
    } else {
        return false
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const campo_a = document.getElementById("campo-a");
    const campo_b = document.getElementById("campo-b");

    const containerMensagemSucesso = document.querySelector('.mensagem');
    const containerMensagemErro = document.querySelector('.mensagem-e');

    resultado = validacampos(campo_a.value, campo_b.value);

    if (resultado) {
        const mensagemSucesso = `O valor informado <b>${campo_b.value}</b> é maior do que o valor informado <b>${campo_a.value}</b>.`

        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
    } else {
        const mensagemErro = `O valor informado <b>${campo_b.value}</b> não é maior do que o valor informado <b>${campo_a.value}</b>.`
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
    }
});