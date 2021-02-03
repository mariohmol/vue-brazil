<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Filtros / Masks</h2>
    <ul class="block">
      <li>
        <h2>celular</h2>
        {{ DATA.celular | vueBrazil("celular") }}
        <input v-brazilmask="{ type: 'celular' }" />
      </li>
      <hr />
      <li>
        <h2>cep</h2>
        {{ DATA.cep | vueBrazil("cep") }}
        <input v-brazilmask="{ type: 'cep' }" />
      </li>
      <hr />
      <li>
        <h2>certidao</h2>
        {{ DATA.certidao | vueBrazil("certidao") }}
        <input v-brazilmask="{ type: 'certidao' }" />
      </li>
      <hr />
      <li>
        <h2>cnh</h2>
        {{ DATA.cnh | vueBrazil("cnh") }}
        <input v-brazilmask="{ type: 'cnh' }" />
      </li>
      <hr />
      <li>
        <h2>cpf</h2>
        {{ DATA.cpf | vueBrazil("cpf") }} ,
        {{ DATA.cpfNumber | vueBrazil("cpf") }}
        <input v-brazilmask="{ type: 'cpf' }" />
        <br />
      </li>
      <hr />
      <li>
        <h2>currency</h2>
        {{ DATA.currency | vueBrazil("currency") }}
        <input v-brazilmask="{ type: 'currency' }" />
      </li>
      <hr />
      <!-- <li>
         date:  DATA.date | vueBrazil('date'
          <input v-brazilmask="{ type: 'cpf' }" />
      </li> -->
      <!-- <hr/> -->
      <!-- <li>
         ect:  DATA.ect | vueBrazil('ect')
          <input v-brazilmask="{ type: 'cpf' }" />
      </li>
        <hr/>
       -->
      <li>
        <h2>number</h2>
        {{ DATA.number | vueBrazil("number") }}
        <input v-brazilmask="{ type: 'number' }" />
      </li>
      <hr />
      <li>
        <h2>percentage</h2>
        {{ DATA.number | vueBrazil("porcentagem") }}
        <input v-brazilmask="{ type: 'percentage' }" />
      </li>
      <hr />
      <!-- <li>
         pis:  DATA.pis | vueBrazil('pis')
          <input v-brazilmask="{ type: 'pis' }" />
      </li>
      <hr/> -->
      <li>
        <h2>placa</h2>
        {{ DATA.placa | vueBrazil("placa") }}
        <input v-brazilmask="{ type: 'placa' }" />
      </li><!--
        <hr/>
        <li>
         <h2> processo</h2>
          {{ DATA.processo | vueBrazil('processo') }}
          <input v-brazilmask="{ type: 'processo' }" />
      </li> -->
      <hr />
      <li>
        <h2>renavam</h2>
        {{ DATA.renavam | vueBrazil("renavam") }}
        <input v-brazilmask="{ type: 'renavam' }" />
      </li>
      <hr />
      <li>
        <h2>rg</h2>
        {{ DATA.rg | vueBrazil("rg") }}
        <input v-brazilmask="{ type: 'rg' }" />
      </li>
      <hr />
      <li>
        <h2>telefone</h2>
        {{ DATA.telefone | vueBrazil("telefone") }}
        <input v-brazilmask="{ type: 'telefone' }" />
      </li>
      <hr />
      <li>
        <h2>time</h2>
        {{ DATA.time | vueBrazil("time") }}
        <input v-brazilmask="{ type: 'time' }" />
      </li>
      <hr />
      <li>
        <h2>titulo</h2>
        {{ DATA.titulo | vueBrazil("titulo") }}
        <input v-brazilmask="{ type: 'titulo' }" />
      </li>
      <hr />
    </ul>
    <h2>Validate</h2>
    <ul>
      <li>TODO</li>
      <hr />
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
h1,
h2 {
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
