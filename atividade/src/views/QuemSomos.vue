<template>
  <div id="hero2">
    <h2 class="text-3xl font-semibold text-center ">Nossos trabalhos:</h2>
    <main class="flex flex-wrap flex-row justify-center gap-[2rem]">
      <section>
        <figure><img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-1222271.jpg&fm=jpg" alt="Imagem"></figure>
        <h3>OBR 2026</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, veritatis eligendi corporis perferendis sed suscipit, aliquid obcaecati deleniti harum sapiente aliquam eius blanditiis impedit ducimus magnam enim minus vitae facere!</p>
      </section>

      <section>
        <figure><img src="https://tse1.mm.bing.net/th/id/OIP.lTVRqQRf7Bq7UiX2zMiK3QHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Imagem"></figure>
        <h3>OBR 2025</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, veritatis eligendi corporis perferendis sed suscipit, aliquid obcaecati deleniti harum sapiente aliquam eius blanditiis impedit ducimus magnam enim minus vitae facere!</p>
      </section>

      <section>
        <figure><img src="https://tse1.mm.bing.net/th/id/OIP.LHMpbhjkQhrO2nKVneIGqQAAAA?r=0&w=430&h=358&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Imagem"></figure>
        <h3>OBR 2024</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, veritatis eligendi corporis perferendis sed suscipit, aliquid obcaecati deleniti harum sapiente aliquam eius blanditiis impedit ducimus magnam enim minus vitae facere!</p>
      </section>

      <section class="basis-[20vw] flex flex-col items-center">
        <figure><img src="https://png.pngtree.com/png-vector/20240724/ourmid/pngtree-luis-ai-png-image_12912858.png" alt="Imagem"></figure>
        <h3>OBR 2023</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, veritatis eligendi corporis perferendis sed suscipit, aliquid obcaecati deleniti harum sapiente aliquam eius blanditiis impedit ducimus magnam enim minus vitae facere!</p>
      </section>
    </main>
  </div>
</template>
<script>

export default {
  name: 'QuemSomosView',

}
</script>

<style scoped>
#hero2 {
  padding: 2rem;
}
h3 {
  font-size: large;
  font-weight: 500;
  border-bottom: 2px solid #e7b41c;
}
h3:hover {
  color: #e7b41c;
  transition: 0.3s ease-in-out;
}
section {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 20vw;
  gap: 2rem;
  padding: 1vw;
  background-color: #ffffff;
  border-radius: 2rem;
  box-shadow: 1px 1px 5px black;
}
section:hover {
  box-shadow: 1px 1px 10px black;
  transition: 0.3s ease-in-out;
}
p {
  text-align: center;
}
h2 {
  margin-bottom: 2rem;
}
img {
  width: 400px;
  height: 350px;
  object-fit: cover;
  border-radius: 2rem;
}
</style>
