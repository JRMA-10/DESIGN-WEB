<template>
    <footer class="!px-[10vw] !py-[7vh] bg-[#142B45] flex flex-col gap-[2rem] flex-wrap">
        <section class="flex justify-between items-center flex-wrap">
            <div class="flex flex-col inline-flex basis-128 gap-[1rem] flex-wrap">
                <span class="w-fit inline-block text-[0.8rem] text-yellow-500 !p-[0.4rem] border-2 border-yellow-500 rounded-3xl">Agradecimento</span>
                <p class="text-4xl text-white font-bold">Você não precisa construir um robô para fazer parte dessa conquista.</p>
                <p class="text-gray-400">Sua contribuição pode nos ajudar a transformar horas de dedicação em uma oportunidade de competir, aprender e crescer.</p>
            </div>
            <button class="h-fit w-fit font-semibold text-[#142B45] p-4 rounded-xl bg-yellow-500 !p-[1rem] cursor-pointer">
                {{ butao.nome }}
            </button>
        </section>
        <section class="flex justify-between items-center border-b border-yellow-500 !py-[2rem] flex-wrap">
            <div class="flex flex-col gap-[1rem] flex-wrap">
                <div class="flex flex-wrap">
                    <img src="../assets/logo.png" alt="Logo" class="w-10">
                    <div class="flex flex-col gap-[0rem]">
                        <p class="font-bold text-white">Apple Makers</p>
                        <span class="text-gray-400 text-[0.8rem]">ROBÓTICA * CRIAÇÃO</span>
                    </div>
                </div>
                <p class="text-gray-400">Criando, aprendendo e inovando através da robótica.</p>
            </div>
            <nav>
                <ul class="flex flex-wrap basis-64 gap-[2rem] flex-wrap text-white">
                    <li v-for="nome in navegacao" :key="nome.key">
                        <router-link :to="nome.link">{{ nome.nome }}</router-link>
                    </li>
                </ul>
            </nav>

        </section>
    </footer>
</template>
<script>
export default {
    name: 'MeuFooter',
    data() {
        return {
            butao: {nome: "Apoiar a Apple Makers"}, 
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
<style>

</style>