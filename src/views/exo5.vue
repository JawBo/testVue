<template>
    <section id="exo5">
        <input type="text" v-model="inp1">
        <input type="text" v-model="inp2">
        <button @click="addit">Additionne</button>
        <span>{{resultat}}</span>
    </section>
</template>

<script>
export default {
    data(){
        return{
            inp1: "",
            inp2: "",
            resultat: "",
        }
    },
methods:{
addit(){
    this.resultat = parseFloat( this.inp1) +  parseFloat(this.inp2)
}

}
}
</script>
<style scoped>

</style>

