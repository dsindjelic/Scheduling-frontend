<template>
  <nav>
    <ul>
      <li><router-link to="/" exact-active-class="router-link-active">Zakazite termin</router-link></li>
      <li><router-link to="/unschedulingclient" active-class="router-link-active">Otkazite termin</router-link></li>
      <li><router-link to="/watchschedulings" active-class="router-link-active">Admin salon</router-link></li>
      <li><router-link to="/adduser" active-class="router-link-active">Novi korisnik</router-link></li>
      <li><router-link to="/addbusiness" active-class="router-link-active">Novi salon</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppHeader'
  // Vue 3 ne zahteva dodatnu konfiguraciju u script tagu za osnovne komponente
}
</script>

<style scoped>
ul {
  list-style-type: none;
  text-align: center;
  margin: 0;
}

li {
  display: inline;
  margin: 0 10px;
}

a {
  color: #fff;
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 10px;
  transition: all 0.3s ease;
}

nav {
  background: deepskyblue;
  padding: 20px 0;
  margin-bottom: 40px;
}

.router-link-active,
.router-link-exact-active {
  background: #eee;
  color: #444;
  font-weight: bold;
}

/* Responsive dizajn */
@media (max-width: 768px) {
  li {
    display: block;
    margin: 10px 0;
  }
}
</style>