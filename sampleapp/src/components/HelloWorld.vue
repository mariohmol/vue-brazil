<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Filtros</h2>
    <ul>
      <li>
        CPF: {{ cpf | vueBrazil('cpf') }}
          <vue-brazil-mask></vue-brazil-mask>
      </li>

      <li>
         CNPJ: {{ cpf | vueBrazil('cnpj') }}
          <vue-brazil-mask></vue-brazil-mask>
      </li>
    </ul>
    <h2>Masks</h2>
    <ul>

      <li>
      </li>
    </ul>

    <h2>Masks</h2>
    <ul>
      <li>
      </li>
    </ul>
  </div>
</template>

<script>
import { DATA, DATARAW, DATAERROR } from '../data'
export default {
  name: 'Vue-Brazil',
  data () {
    return {
      cpf: '12345678901',
      msg: 'Bem vindo ao JsBrasil para Vue',
      DATA: 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
