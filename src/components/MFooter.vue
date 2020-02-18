<template>
  <footer>
    <a href="#">Terminos y condiciones</a>
    <div class="contact">
      <span>Hecho con ❤️ por Samuelab2</span>
      <a href="https://www.twitter.com/samuelab_26"
        >¿Trabajamos juntos?
        <img :src="require('@/assets/twitter.png')" alt="twitter" />
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "MFooter"
};
</script>

<style>
footer {
  background: white;
  padding: 0 10px;
  height: 70px;
  box-shadow: 1px -4px 15px 0px lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

footer a {
  color: black;
  text-decoration: none;
}

.contact {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.contact img {
  width: 20px;
}
</style>
