
const lanches = [
                  'bolo','tapioca','torrada'
]
        

const {createApp, ref} = Vue

const lancheifrn = createApp({
    setup(){

        // a variável teve que ficar dentro do setup porque ela precisava mudar os valores
        //isto é, ser dinâmica, não apenas acessar seus dados, mas também alterar os dados.
        

        
       

        return{
            mensagem: ref("Olá, Mundo!!"), //é o getElementById            
            lanches
        }
    }
})
lancheifrn.component('app-header', AppHeader); //CHAMAR O ARQUIVO JS DO HEADER
lancheifrn.component('app-footer', AppFooter); //CHAMAR O ARQUIVO JS DO HEADER
lancheifrn.mount('#app');
