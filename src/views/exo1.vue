<template>
    <section id="exo1">
        <h1>Exo1</h1>
        <h2>{{titre}}</h2>
        <p>
            quand on clique <button @click="titre='titre a changé'" class="btn btn-info">Bouton</button>
            <ul><li>Changer contenu h2 par titre modifie</li>
            <li>changer couleur h2</li>
            <li>ajouter un class bacground bootstrap h2</li></ul>
            bonus: faire un toggle pour reinitialiser le texte par h2
        </p>
        </section>
</template>

<script>
export default {
    data(){
return{

titre : "vide"
}

    }
}
</script>
