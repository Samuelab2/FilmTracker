<template>
  <footer>
    <a href="#">Terminos y condiciones</a>
    <div class="contact">
      <a href="https://www.twitter.com/samuelab_26" target="_blank">
        Hecho con ❤️ por Samuelab2
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
  background: black;
  color: white;
  padding: 0 10px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

footer a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  line-height: 30px;
}

.contact {
  display: flex;
  flex-direction: column;
  text-align: center;
  font-weight: bold;
}
</style>
