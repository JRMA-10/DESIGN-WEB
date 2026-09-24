const itens = ['Contato', 'Serviços', 'Preços']

const AppFooter = { // CHAVES!
    template:
    `
    <footer>
        <p>Footer do IFRN</p>
        <ol v-for="(item, index) in itens" :key="index">
            <li><a href="#">{{ item }}</a></li>
        </ol>
    </footer>
    `
    // É necessário colocar o acento crase porque estamos na sintaxe js!
}