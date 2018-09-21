<template>
    <section id="exo4">
        <button class="btn btn-danger" @click="ajoutImage()">Go</button>
        <!-- <img v-for="item in item" :key="item" src="../images/1.jpg" alt=""> -->
        <img v-for="(item, index) in tabImg"  :key="index" src="" alt="">

        <!-- <div id="divImage"></div> -->
        
    </section>
</template>

<script>
export default {
    data(){
        return{
            
           nbImg :0
        }
    
    },
     methods: {
        ajoutImage(){
            

        // let imgDiv = document.getElementById("divImage");
        // console.log(imgDiv);
        // imgDiv.innerHTML += '<img src="/img/1.ae4dd920.jpg" alt="">'
        } 
        
     }
}
</script>