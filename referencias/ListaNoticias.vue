<template>
    <fieldset>

        <form action="">
            <textarea v-model="textoNoticia" ></textarea>  
             <!-- v-model equivale ao id do textarea  -->
            <button @click="salvarNoticia">Adicionar notícia</button>
            <!-- o evento click chama o método do vue salvarNoticia -->
        </form>
    </fieldset>

    <ol>
        <li v-for="noticia in noticias" :key="noticia.id">
            {{ noticia.texto }}
        </li>
    </ol>
    
</template>


<script setup>

import { ref, onMounted } from 'vue';

// a variável a lista de notícias
const noticias = ref([]);

// método vai chamar/carregar a litsa
const carregarNoticias = () => {
  const dados = localStorage.getItem('lista_noticias')
  if (dados) {
    //json.parse – converte uma string em um obj js
    noticias.value = JSON.parse(dados)
  }
}


// Carrega as notícias assim que o componente é montado na tela
// onMounted é um método que já existe no vue será chamado quando o arquivo for carregado
onMounted(() => {
  carregarNoticias()
})

const textoNoticia = ref('Texto notícia 1')

const salvarNoticia = () => {
  // 1. Recupera a lista atual do localStorage ou cria uma nova se estiver vazia
  const listaNoticias = JSON.parse(localStorage.getItem('lista_noticias') || '[]')

  // 2. Cria o novo objeto de notícia
  const novaNoticia = {
    id: Date.now(), // Gera um ID único baseado no timestamp
    texto: textoNoticia.value,
    data: new Date().toLocaleString('pt-BR') // Formata a data e hora atual
  }

  // 3. Adiciona a nova notícia ao array
  listaNoticias.push(novaNoticia)

  // 4. Salva de volta no localStorage convertendo para String
  localStorage.setItem('lista_noticias', JSON.stringify(listaNoticias))

  // Limpa o campo após salvar
  textoNoticia.value = ''
  carregarNoticias()
}

</script>
