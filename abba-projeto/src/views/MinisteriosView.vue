<template>
  <main>
    <h2>Ministérios</h2>
    <div>
      <h3>Louvor</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis quia et velit accusantium facilis labore ex libero quidem, recusandae natus quam neque qui, aliquid inventore autem doloremque. Quod, labore ipsam.</p>
    </div>
    <div>
      <h3>Dança</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ab dolor porro delectus tempora quos inventore nesciunt eius et quis labore dolore deserunt ullam maxime accusamus vel voluptate nisi incidunt.</p>
    </div>
    <div>
      <h3>Missões</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur repellat minima pariatur corporis. Explicabo voluptatem debitis sunt vitae consectetur fugit nisi consequatur molestias, cupiditate neque? Similique ipsum dolorum temporibus voluptate!</p>
    </div>
    <div>
      <h3>Intercessão</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo tenetur modi similique, fuga voluptatem inventore quibusdam, reprehenderit laboriosam cum minima consequatur provident temporibus facere mollitia excepturi, culpa asperiores soluta ab!</p>
    </div>
  </main>
  
  <div id="seja-membro">
    <p>Gostaria de participar?</p>
    <button>SEJA MEMBRO</button>
    <ListaMembros />
  </div>
</template>

<script setup>
  import ListaMembros from '../components/ListaMembros.vue';
</script>

<style scoped>
  main{
    width: 50%;
    margin: 25px auto 25px;
    padding: 2em;
    background-color: #884d0086;
    div{
      padding: 1em;
      margin: 1em auto;
      background-color: #ffffff60;
    }
  }
  #seja-membro{
    justify-self: right;
    text-align: right;
    width: auto;
    margin: 25px 0 25px 0;
    p{
      margin: 5px auto;
    }
  }
</style>
