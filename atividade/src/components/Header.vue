<template>
    <header>
        <h1>
            <img src="../assets/logo.png" alt="logo">
            <span>{{ logo.nome }}</span>
        </h1>
        <nav>
            <ul>
                <li v-for="nav in navegacao" :key="nav.id">
                    <router-link :to="nav.link">{{ nav.nome }}</router-link>
                </li>
                <li>
                    <button>
                        Apoie nossa jornada <img src="../assets/arrow_up_right.png" alt="Seta para cima">
                    </button>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'MeuCabecalho',
    data() {
        return {
            logo: {
                nome: 'Apple Makers',
            },
            navegacao: [
                { id: 0, nome: 'Quem somos', link: '/quemsomos'}, 
                { id: 1, nome: 'Projetos', link: '/projetos' }, 
                { id: 2, nome: 'Conquistas', link: '/conquistas' }, 
                { id: 3, nome: 'Competições', link: '/competicoes' }, 
                { id: 4, nome: 'Vaquinha', link: '/vaquinha' }, 
                { id: 5, nome: 'Contato', link: '/contato' }
            ]
        }
    }
}
</script>

<style scoped>
span {
  font-size: 0.8rem;
}
header {
    background-color: #F5F2E8;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 1.3rem;
    flex-wrap: wrap;
    padding-inline: 1vw;
    padding-block: 1vh;
}
ul {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    align-items: center;
    flex-wrap: wrap;
}
h1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #192C3E;
    font-weight: bolder;
}
a {
    color: #192C3E;
    text-decoration: none;
    font-weight: 700;
    transition-behavior: allow-discrete;
}
a:hover {
    color: #F3C84A;
    transition-behavior: allow-discrete;
}
button {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    background-color: #142B45;
    border-radius: 2rem;
    color: white;
    font-weight: bolder;
    padding: 0.8rem;
    cursor: pointer;
    border: none;
}
</style>