const {createApp, ref, watch} = Vue

const lancheifrn = createApp({
    setup(){
        const lancheifrnLS = localStorage.getItem('lanches')
    
        const lanches = ref(
            lancheifrnLS ? JSON.parse(lancheifrnLS) :
            [
            // Lista de objetos
                {
                    descricao: 'Bolo',
                    ativo: true, 
                    imagem: 'bolo.jpg'
                },
                {
                    descricao: 'Bolacha', 
                    ativo: false, 
                    imagem: 'bolacha.jpg'
                }, 
                {
                    descricao: 'Tapioca', 
                    ativo: false, 
                    imagem: 'tapioca.jpg'
                }
            ]
        )

        watch(lanches, () => {
            localStorage.setItem('lanches', JSON.stringify(lanches.value))
        }, {deep: true, immediate: true})

        function mudarAtivo(item){
            lanches.value.forEach(lanche => {
                lanche.ativo = false;
            });
            item.ativo = true;
        }

        const novoLancheInput = ref('');
        function novoLanche() {
            lanches.value.push({
                descricao: novoLancheInput.value,
                ativo: false,
                imagem: 'bolo.jpg'
            });
            novoLancheInput.value = '';
        }

        // a variável teve que ficar dentro do setup porque ela precisava mudar os valores
        //isto é, ser dinâmica, não apenas acessar seus dados, mas também alterar os dados.
       
        return{
            mensagem: ref("Olá, Mundo!!"), //é o getElementById            
            lanches, 
            mudarAtivo, 
            novoLancheInput, 
            novoLanche
        }
    }
})
lancheifrn.component('app-header', AppHeader); //CHAMAR O ARQUIVO JS DO HEADER
lancheifrn.component('app-footer', AppFooter); //CHAMAR O ARQUIVO JS DO HEADER
lancheifrn.mount('#app');
