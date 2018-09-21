<template>
<form action="submit" id="exo06">

<input type="text" v-model="textAPrendre" > 
<button class="btn btn-danger mx-1" type="submit" @click.prevent="tDBut">To Do</button>
<br>
<br>    
<button v-for="(objet, clef) in btnsFilters" :class="objet.class" :key="clef">{{objet.value}}</button>


<div v-for="(listTD, index) in list" id="divTD" :class="'row'" :key="index">
    <span id="spanTD" :class="'col-3'" >{{list[index]}}</span>
    <div :class="'col-2'"></div>
    
    <button @click.prevent="btn(item.value)" v-for="(item, i) in btnsList" :class="item.class" :key="i">{{item.value}}</button>
    <button type="submit" @click.prevent="edit" class="col-2 bg-warning" id="butEdit"> <i class="far fa-edit"></i> </button>
    
</div>
</form>
</template>

<script>
export default {
    
data(){
    return{
    textAPrendre:"",
    textPris:"",    

    list:[],
    btnsFilters:
    [ 
        {value:"All", class:"btn btn-info border border-dark mx-1"},
        {value:"Deleted", class:"btn btn-danger border border-dark mx-1"},
        {value:"Done", class:"btn btn-success border border-dark mx-1"},
        {value:"To Do", class:"btn btn-warning border border-dark mx-1"}
    ],
    btnsList:   
    [
        {value:"Done", class:"btn btn-success border border-dark mx-1 col-2 btn-lg"},
        // {value:"To Do", class:"btn btn-warning border border-dark mx-1 col-2 btn-lg"},
        {value:"Deleted", class:"btn btn-danger border border-dark mx-1 col-2 btn-lg"},
        
    ]
    }
},
methods:{
tDBut(){
    if (this.textAPrendre == "" || this.textAPrendre.charAt(0) == " " ) {
       alert("Vous ne pouvez pas remplir le champ en commençant par un espace.\nVeuillez réessayer.")
    } else {
        this.list.push(this.textAPrendre)
        this.textAPrendre = ""
        
    }
},
    btn(fct){  
        

        let bg = document.getElementById("divTD")
        switch (fct) {
            case"Deleted":
                event.currentTarget.parentElement.className = "row bg-danger text-dark"
                
                break;
            case "Done":
                 
                event.currentTarget.parentElement.className = "row bg-success text-dark"
                break;
            case "To Do":
                 
                event.currentTarget.parentElement.className = "row bg-dark text-white"
                break;           
            default:
            console.log("ne fct pas")
                break;
        }
    }
}
}
</script>


<style scoped>

#divTD{
background: rgba(28, 247, 255, 0.925);
margin: 10px 550px;
border-radius: 50px;
padding: 15px;
line-height: 50%;
}
#butEdit{
    
border-radius: 9px;

}

</style>
