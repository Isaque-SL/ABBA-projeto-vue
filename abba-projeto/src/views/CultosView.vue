<template>
  <main>
    <h2>Cultos</h2>
    <table>
      <th>Dias</th>
      <th>Horários</th>
      <tr>
        <td>Quarta</td>
        <td>19:30</td>
      </tr>
      <tr>
        <td>Sexta</td>
        <td>19:30</td>
      </tr>
      <tr>
        <td>Domingo</td>
        <td>18:30</td>
      </tr>
    </table>
  </main>
</template>

<style scoped>
  main{
    text-align: center;
    width: 30%;
    margin: 25px auto 25px;
    padding: 2em;
    background-color: #884d0086;
    table{
      background-color: rgba(255, 255, 255, 0.5);
      width: 70%;
      margin: auto auto;
      padding: 1em;
    }
    td{
      border: solid 1px;
    }
  }
</style>
