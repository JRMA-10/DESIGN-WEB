<template>
    <header>
        <h1>
            <img src="../assets/logo.png" alt="logo">
            <span>{{ logo.nome }}</span>
        </h1>
        <nav>
            <ul>
                <li v-for="nav in navegacao" :key="nav.id">
                    <a :href="nav.link">{{ nav.nome }}</a>
                </li>
                <li>
                    <button>
                        Apoie nossa jornada <img src="../assets/arrow_up_right.png" alt="Seta para cima">
                    </button>
                </li>
            </ul>
        </nav>
        <div id="carouselStackedIndicators" class="carousel slide">
        <div class="carousel-inner rounded-5">
            <div class="carousel-item active">
            <img src="..." class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="...">
            </div>
        </div>
        <div class="d-flex justify-content-between align-items-center">
            <div>
            <button class="btn-icon btn-sm" type="button" data-bs-target="#carouselStackedIndicators" data-bs-slide="prev">
                <span class="carousel-icon-prev" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="btn-icon btn-sm" type="button" data-bs-target="#carouselStackedIndicators" data-bs-slide="next">
                <span class="carousel-icon-next" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
            <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselStackedIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselStackedIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselStackedIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
        </div>
        </div>
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
                { id: 0, nome: 'Quem somos', link: '/quemsomos' }, 
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