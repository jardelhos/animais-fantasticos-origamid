export default function initmodal(){
    const botaoAbrir = document.querySelector('[data-modal="abrir"]')
    const botaoFechar = document.querySelector('[data-modal="fechar"]')
    const ContainerModal = document.querySelector('[data-modal="container"]')

    if(botaoAbrir && botaoFechar && ContainerModal){
        function abrirModal(event) {
            event.preventDefault();
            ContainerModal.classList.add('ativo')
        }

        function fecharModal(event) {
            event.preventDefault();
            ContainerModal.classList.remove('ativo')
        }

        function cliqueForaModal(event){
            if (event.target === this)
                fecharModal(event)
        }

        botaoAbrir.addEventListener('click',abrirModal)
        botaoFechar.addEventListener('click',fecharModal)
        ContainerModal.addEventListener('click', cliqueForaModal)
    }
}

