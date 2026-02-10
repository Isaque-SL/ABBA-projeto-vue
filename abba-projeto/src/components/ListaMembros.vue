<template>
    <fieldset>
        <form action="">
            <p>Escreva seu nome para a solicitação de membresia!</p>
            <input v-model="membro" type="text">
            <button @click="salvarMembro">Registrar</button>
        </form>
        <ol>
          <li v-for="membro in membros" :key="membro.nome">
              {{ membro.nome }}
          </li>
        </ol>
    </fieldset>
</template>

<script setup>

import { ref, onMounted } from 'vue';

const membros = ref([]);

const carregarMembros = () => {
  const dados = localStorage.getItem('lista_membros')
  if (dados) {
    membros.value = JSON.parse(dados)
  }
}
onMounted(() => {
  carregarMembros()
})

const membro = ref('Fulano da Silvassauro')

const salvarMembro = () => {
  const listamembros = JSON.parse(localStorage.getItem('lista_membros') || '[]')
  const novoMembro = {
    nome: membro.value
  }
  listamembros.push(novoMembro)
  localStorage.setItem('lista_membros', JSON.stringify(listamembros))
  textomembro.value = ''
  carregarMembros()
}
</script>