<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Filtros / Masks / Validation</h2>
    <form @submit="checkForm" action="#/" method="post">
      <ul class="block">
        <li>
          <h2>celular</h2>
          {{ DATA.celular | vueBrazil("celular") }}
          <input v-brazilmask="{ type: 'celular' }" data-brtype="cpf"  name="celular" />
        </li>
        <hr />
        <li>
          <h2>cep</h2>
          {{ DATA.cep | vueBrazil("cep") }}
          <input v-brazilmask="{ type: 'cep' }" data-brtype="cep" id="cep" />
        </li>
        <hr />
        <li>
          <h2>certidao</h2>
          {{ DATA.certidao | vueBrazil("certidao") }}
          <input v-brazilmask="{ type: 'certidao' }" data-brtype="certidao" id="certidao" name="certidao"/>
        </li>
        <hr />
        <li>
          <h2>cnh</h2>
          {{ DATA.cnh | vueBrazil("cnh") }}
          <input v-brazilmask="{ type: 'cnh' }" data-brtype="cnh" id="cnh" name="cnh"/>
        </li>
        <hr />
        <li>
          <h2>cpf</h2>
          {{ DATA.cpf | vueBrazil("cpf") }} ,
          <input v-brazilmask="{ type: 'cpf' }" data-brtype="cpf" id="cpf" name="cpf"/>
          <br />

          Number{{ DATA.cpfNumber | vueBrazil("cpf") }}
        </li>
        <hr />
        <li>
          <h2>currency</h2>
          {{ DATA.currency | vueBrazil("currency") }}
          <input v-brazilmask="{ type: 'currency' }" data-brtype="currency" id="currency" name="currency"/>
        </li>
        <hr />
        <li>
          <h2>data</h2>
        {{ DATA.date | vueBrazil('data') }}
          <input v-brazilmask="{ type: 'data' }" data-brtype="data" id="date" name="date"/>
        </li>
        <hr/>
        <li>
          <h2>date</h2>
        {{ DATA.date | vueBrazil('date') }}
          <input v-brazilmask="{ type: 'date' }" data-brtype="date" id="date" name="date"/>
        </li>
        <hr/>
        <li>
          <h2>datetime</h2>
        {{ DATA.date | vueBrazil('datetime') }}
          <input v-brazilmask="{ type: 'datetime' }" data-brtype="datetime" id="date" name="date"/>
        </li>
        <hr/>
        <li>
          <h2>datahora</h2>
        {{ DATA.date | vueBrazil('datahora') }}
          <input v-brazilmask="{ type: 'datahora' }" data-brtype="datahora" id="date" name="date"/>
        </li>
        <hr/>
        <li>
          <h2>ect</h2>
        {{  DATA.ect | vueBrazil('ect') }}
            <input v-brazilmask="{ type: 'ect' }" data-brtype="ect" id="ect" name="ect"/>
        </li>
        <hr/>
        <li>
          <h2>number</h2>
          {{ DATA.number | vueBrazil("number") }}
          <input v-brazilmask="{ type: 'number' }" data-brtype="number" id="number" name="number"/>
        </li>
        <hr />
        <li>
          <h2>percentage</h2>
          {{ DATA.number | vueBrazil("porcentagem") }}
          <input v-brazilmask="{ type: 'percentage' }" data-brtype="percentage" id="percentage" name="percentage"/>
        </li>
        <hr />
        <!-- <li>
           <h2>pis</h2>
         DATA.pis | vueBrazil('pis')
          <input v-brazilmask="{ type: 'pis' }" data-brtype="pis" id="pis" name="pis"/>
      </li>
      <hr/> -->
        <li>
          <h2>placa</h2>
          {{ DATA.placa | vueBrazil("placa") }}
          <input v-brazilmask="{ type: 'placa' }" data-brtype="placa" id="placa" name="placa"/>
        </li>
        <!--
        <hr/>
        <li>
         <h2>processo</h2>
          {{ DATA.processo | vueBrazil('processo') }}
          <input v-brazilmask="{ type: 'processo' }" data-brtype=" processo" id="processo" name="processo"/>
      </li> -->
        <hr />
        <li>
          <h2>renavam</h2>
          {{ DATA.renavam | vueBrazil("renavam") }}
          <input v-brazilmask="{ type: 'renavam' }" data-brtype="renavam" id="renavam" name="renavam"/>
        </li>
        <hr />
        <li>
          <h2>rg</h2>
          {{ DATA.rg | vueBrazil("rg") }}
          <input v-brazilmask="{ type: 'rg' }" data-brtype="rg" id="rg" name="rg"/>
        </li>
        <hr />
        <li>
          <h2>telefone</h2>
          {{ DATA.telefone | vueBrazil("telefone") }}
          <input v-brazilmask="{ type: 'telefone' }" data-brtype="telefone" id="telefone" name="telefone"/>
        </li>
        <hr />
        <li>
          <h2>time</h2>
          {{ DATA.time | vueBrazil("time") }}
          <input v-brazilmask="{ type: 'time' }" data-brtype="time" id="time" name="time"/>
        </li>
        <hr />
        <li>
          <h2>titulo</h2>
          {{ DATA.titulo | vueBrazil("titulo") }}
          <input v-brazilmask="{ type: 'titulo' }" data-brtype="titulo" id="titulo" name="titulo"/>
        </li>
        <hr />
      </ul>
      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-bind:key="error" v-for="error in errors">{{ error }}</li>
        </ul>
      </p>
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
import { DATA, DATARAW, DATAERROR } from '../data'
import { JSBrazilValidate } from 'vue-brazil'
export default {
  name: 'Vue-Brazil',
  methods: {
    checkForm: function (e) {
      this.errors = []
      // Put your own logic here
      // if(!wrong){
      //   this.errors.push('Name required.')
      // }
      // Get the JsBrasil validations
      JSBrazilValidate(e, this.errors)
      e.preventDefault()
    }
  },
  data () {
    return {
      errors: [],
      msg: 'Bem vindo ao JsBrasil para Vue',
      DATA,
      DATARAW,
      DATAERROR,
      celular: '(31) 99898-9898',
      cpf: null,
      cpfNumber: null,
      certidao: null,
      cnh: null,
      cnpj: null,
      cep: null,
      currency: null,
      inscricaoestadual: null,
      number: null,
      pispasep: null,
      placa: null,
      processo: null,
      renavam: null,
      rg: null,
      telefone: null,
      time: null,
      titulo: null
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
