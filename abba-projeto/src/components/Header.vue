<template>
    <header>
        <img src="../assets/logo_abba.png" alt="Logo do Ministério ABBA">
        <nav>
            <ol>
                <li><p><router-link to="../views/CultosView.vue">Cultos</router-link></p></li>
                <li><p><router-link to="../views/EventosView.vue">Eventos</router-link></p></li>
                <li><p><router-link to="../views/MinisteriosView.vue">Ministérios</router-link></p></li>
                <li><p><router-link to="../views/HistoriaView.vue">História</router-link></p></li>
                <li><p><router-link to="../views/ContatoView.vue">Contato</router-link></p></li>
            </ol>
        </nav>
    </header>
</template>

<style scoped>
    header{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        nav{
            ol{
                display: flex;
                list-style-type: none;
            }
        }
        router-link{
            text-decoration: none;
        }
    }
</style>