const {createApp, ref} = Vue
// Criação do objeto vue e chamada dos métodos

const lanches = ['Pão com queijo', 'Tapioca', 'Cuscuz com ovo', 'Bolo', 'Bolacha']
// Variável de lista
const app = createApp({
    // Crio uma nova aplicação de Vue
    setup() {
        // Onde se declara dados e funções
        return {
            mensagem: ref("Hello, world!"), 
            lanches
            // Variável reativa do Vue
        }
    }
})
app.component('app-footer', AppFooter)
app.component('app-header', AppHeader)
app.mount("#app")
// Aqui a aplicação é incluida na marcação que contém o id "app"