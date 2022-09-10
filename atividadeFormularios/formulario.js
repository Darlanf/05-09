const enviar = document.getElementById(`btn-enviar`);

document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault();

    let nome = document.getElementById(`nome`).value;
    let endereco = document.getElementById(`endereco`).value;
    let cidade = document.getElementById(`cidade`).value;
    let estado = document.getElementById(`estado`).value;
    let cargo = document.querySelector('input[name="cargo"]:checked').value;
    let interesses = document.querySelectorAll('input[type="checkbox"]:checked')
    let curriculo = document.getElementById('curriculo').value

    if(nome === '' || endereco === '' || cidade === '' || estado === 'selecione'){
        alert(`Dados pessoais devem ser preenchidos!`);
        return
    }

    // if(!cargo) {
    //     alert('Preencha a natureza do cargo!')
    // }

    if(interesses.length === 0) {
        alert('Selecione a area do seu interesse!');
        return
    }

    let listaInteresses = []
        interesses.forEach((checkbox)=>{
            return listaInteresses.push(checkbox.value)
        })

    let dadosPreechidos = {
        nome,
        endereco,
        cidade,
        estado,
        cargo,
        listaInteresses,
        curriculo,
    }
    console.table(dadosPreechidos);
    alert('Dados Salvos!');
    limpar();
})
function limpar() {
    document.getElementById('nome').value = '';
    document.getElementById('endereco').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = 'selecione';
    document.getElementById('curriculo').value = '';
}