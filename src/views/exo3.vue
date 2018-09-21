<template>
    <section id="exo3">
        <h1>Exo3</h1>
        <div class="div my-3 ml-3">
            <div class="divInt" v-if="x"></div>
        </div >
        <div class="div my-3 ml-3 ">
            <div class="divInt" v-if="!x"></div>
        </div>
        <br>
    <button class="btn px-3 my-3" @click="chDivInt">Go</button>
    <br>
    <span>Vous avez bougé le rectangle {{nbFois}} fois </span>

        </section>
</template>

<script>
export default {
    data(){
return{
    nbFois: 0,
    x:false,
 }
},
    methods:{
        chDivInt(){
        this.nbFois ++ ;
        this.x = !this.x

}


    }
}   
</script>

<style scoped>

.div{
    background: blue;
    width: 250px;
    height: 200px;
    display: inline-block;
    margin: 0 auto;

}
.divInt{
    height: 75px;
    width: 75px;
    background: black;
        
}


</style>



