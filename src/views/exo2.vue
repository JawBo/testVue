<template>
    <section id="exo2">
        <h1>Exo2</h1>
        <h2>Welcome <span>{{ nom }}</span></h2>
        <input type="text" >
        <button @click="changeNom">Go</button>
    </section>
</template>

<script>
export default {
    data(){
        return{
            nom:""
        }
    
    },
     methods: {
         
        changeNom(){
         let nomchange = document.getElementById("exo2").getElementsByTagName("input")[0].value
         this.nom = nomchange
         nomchange = ""
     }
     }
}
</script>

