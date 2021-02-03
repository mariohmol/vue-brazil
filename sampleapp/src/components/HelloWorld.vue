<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Filtros</h2>
    <ul class="block">
      <li>
        celular: {{ DATA.celular | vueBrazil('celular') }}
          <vue-brazil-mask></vue-brazil-mask>
      </li>
      <li>
         cep: {{ DATA.cep | vueBrazil('cep') }}
          <vue-brazil-mask></vue-brazil-mask>
      </li>
      <li>
         certidao: {{ DATA.certidao | vueBrazil('certidao') }}
          <vue-brazil-mask></vue-brazil-mask>
      </li>
      <li>
         cnh: {{ DATA.cnh | vueBrazil('cnh') }}
          <vue-brazil-mask></vue-brazil-mask>
      </li>
      <li>
         cpf: {{ DATA.cpf | vueBrazil('cpf') }}
          <vue-brazil-mask></vue-brazil-mask>
          <br/>
          cpfNumber: {{ DATA.cpfNumber | vueBrazil('cpf') }}
      </li>
      <li>
         currency: {{ DATA.currency | vueBrazil('currency') }}
          <vue-brazil-mask></vue-brazil-mask>
      </li>
      <li>
         <!-- date:  DATA.date | vueBrazil('date') -->
          <vue-brazil-mask></vue-brazil-mask>
      </li>
      <li>
         <!-- ect:  DATA.ect | vueBrazil('ect')  -->
          <vue-brazil-mask></vue-brazil-mask>
      </li>
      <li>
         number: {{ DATA.number | vueBrazil('number') }}
          <vue-brazil-mask></vue-brazil-mask>
      </li>
      <li>
         percentage: {{ DATA.number | vueBrazil('porcentagem') }}
          <vue-brazil-mask></vue-brazil-mask>
      </li>
      <li>
         <!-- pis:  DATA.pis | vueBrazil('pis') -->
          <vue-brazil-mask></vue-brazil-mask>
      </li>
      <li>
         placa: {{ DATA.placa | vueBrazil('placa') }}
          <vue-brazil-mask></vue-brazil-mask>
      </li>
      <li>
         <!-- processo: {{ DATA.processo | vueBrazil('processo') }} -->
          <vue-brazil-mask></vue-brazil-mask>
      </li>
      <li>
         renavam: {{ DATA.renavam | vueBrazil('renavam') }}
          <vue-brazil-mask></vue-brazil-mask>
      </li>
      <li>
         rg: {{ DATA.rg | vueBrazil('rg') }}
          <vue-brazil-mask></vue-brazil-mask>
      </li>
      <li>
         telefone: {{ DATA.telefone | vueBrazil('telefone') }}
          <vue-brazil-mask></vue-brazil-mask>
      </li>
      <li>
         time: {{ DATA.time | vueBrazil('time') }}
          <vue-brazil-mask></vue-brazil-mask>
      </li>
      <li>
         titulo: {{ DATA.titulo | vueBrazil('titulo') }}
          <vue-brazil-mask></vue-brazil-mask>
      </li>

    </ul>
    <h2>Masks</h2>
    <ul>

      <li>
        TODO
      </li>
    </ul>

    <h2>Validate</h2>
    <ul>
      <li>
        TODO
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
      DATA,
      DATARAW,
      DATAERROR
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
.block li {
  display: block;
}
</style>
