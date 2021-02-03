# vue-brazil

Commons and utils in vue for brazillian apps

Javascript Validate, Mask, Faker e Utils para Tipos do Brasil: 
Celular, CEP, Certidão, CNH, CNPJ, CNS, CPF, Currency, Date, ECT, EMAIL, Empresa, Endereço, Inscrição Estadual, 
Number, Percentage, Pessoa, PIS/PASEP, placa (Placa de carro), processo (Processo da justiça), RENAVAM , RG , 
Site, Telefone , Time (data/hora), Título de Eleitor , Veículo


## Live example:  

* https://stackblitz.com/edit/vue-brazil


See the demo working project in [sampleapp](./sampleapp) folder.:


![Demo Image](./sampleapp/src/assets/print.png)


## Installation

To install this library with npm, run:

` npm install --save vue-brazil js-brasil`

 
## Usage

### Configuration

Import module in root

```js
import Vue from 'vue'
import App from './App'
import VueBrazil from 'vue-brazil'

Vue.use(VueBrazil)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
```

## Tipos 

Os tipos disponiveis para filtros, masks a validação são:

 aih, cartaocredito, celular, cep, certidao, chassi,
ci cnae, cnh, cnpj, cns, contabanco, cpf, cpfcnpj, currency, data, ect, endereco,
inscricaoestadual iptu,
number, porcentagem pispasep, placa, processo, renavam, rg, sped,
telefone time, titulo, utils

Vejam todos e updates em [JSBrasil](https://github.com/mariohmol/js-brasil)

## Filters / Masks

Para usar um filtro faça ``` {{ valor | vueBrazil(tipo) }}  ```

Veja um exemplo completo:

```html
<template>
  <div class="hello">
    CPF: {{ cpf | vueBrazil('cpf') }} 
    <!-- será exibido 123.456.789.01 --->

     <input v-brazilmask="{ type: 'cpf' }" />
     <!-- criará uma máscara no input exibindo  123.___.___.__ --->
  </div>
</template>

<script>
export default {
  name: 'Vue-Brazil',
  data () {
    return {
      cpf: '12345678901'
    }
  }
}
</script>
```

#### Using Masks
TODO

## Forms and Mask
TODO

# Demo

Demo component files are included in Git Project.

Demo Project:
[https://github.com/mariohmol/vue-brazil/tree/master/sampleapp/src/components](https://github.com/mariohmol/vue-brazil/tree/master/sampleapp/src/components)

Reference projects:

* https://github.com/mariohmol/js-brasil


# TODO

Tem várias issues para trabalha e ajudar no projeto.


## Contribute

Ajude também! Fork o projeto e siga os passos abaixo para montar o ambiente.

Instale o yarn:
```sh
curl -o- -L https://yarnpkg.com/install.sh | bash
```

Instale o vuejs
```
yarn global add @vue/cli-init
npm install --global @vue/cli
```

Fork esse repositório, clone em sua máquina e instale as dependencias, na pasta raiz e na sampleapp: 
```
npm i
cd sampleapp
npm i
```

Para iniciar o processo de desenvolvimento:
```sh
npm run start
```

Para publicar nova versão,é necessárioincrementara versao no [package](./package.json) e rodar 
`npm run publishnpm`


# License

MIT(./LICENSE)

