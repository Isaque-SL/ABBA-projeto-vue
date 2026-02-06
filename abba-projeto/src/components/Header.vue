<template>
    <header>
        <img src="../assets/logo_abba.png" alt="Logo do Ministério ABBA" width="180px">
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
        height: 7em;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: Arial, Helvetica, sans-serif;
        nav{
            width: 50%;
            ol{
                display: flex;
                justify-content: space-around;
                list-style-type: none;
            }
        }
    }
    a{
        font-size: 1.25em;
        color: black;
        text-decoration: none;
    }
    a:hover{
        transition-delay: 1000ms;
        animation-name: sobre;
        animation-duration: 1000ms;
        animation-delay: 20ms;
        text-decoration: underline;
        font-size: 1.4em;
    }
    @keyframes sobre{
        0%{
            font-size: 1.2em;
        }
        25%{
            opacity: 1;
        }
        50%{
            opacity: 1;
        }
        75%{
            opacity: 1;
        }
        100%{
            font-size: 1.4em;
            opacity: 1;
        }
    }
</style>