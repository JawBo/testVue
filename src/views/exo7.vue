<template>
    <div id="exo7">

        <div v-for="(row, index) in btns" :class="'bg-dark mx-5'" :key="index">         
            <button v-for="(item, index) in row" :class="item.class" :key="index">{{item.value}}</button>
        </div>
    </div>
</template>


<script>
export default {
    data(){

return{
    
    btns: [
        [
        { value: "=" , class: "btn btn-outline-secondary m-2 "},
        { value: "²" , class: "btn btn-outline-secondary m-2 "}, 
        { value: "³" , class: "btn btn-outline-secondary m-2" },
        { value: "<-" , class: "btn btn-outline-danger m-2 ", fonction: "multplication"}
        
        ],
        [
        {value: "7" , class: "btn btn-outline-secondary m-2 "},
        {value: "8" , class: "btn btn-outline-secondary m-2  "}, 
        {value: "9" , class: "btn btn-outline-secondary m-2"},
        {value: "/" , class: "btn btn-outline-danger m-2 ", fonction: "multplication"}
        
        ],
        [
        { value: "4" , class: "btn btn-outline-secondary m-2 "},
        { value: "5" , class: "btn btn-outline-secondary m-2 "}, 
        { value: "6" , class: "btn btn-outline-secondary m-2"},
        { value: "x" , class: "btn btn-outline-danger m-2 ", fonction: "multplication"}
        ],
        [
        { value: "1" , class: "btn btn-outline-secondary m-2 "},
        { value: "2" , class: "btn btn-outline-secondary m-2 "}, 
        { value: "3" , class: "btn btn-outline-secondary m-2"},
        { value: "-" , class: "btn btn-outline-danger m-2", fonction: "soustraire"}
        ],
        [
        { value: "C" , class: "btn btn-outline-secondary m-2 "},
        { value: "0" , class: "btn btn-outline-secondary m-2 "},
        { value: "," , class: "btn btn-outline-secondary m-2 "},
        { value: "+" , class: "btn btn-outline-danger m-2 ", fonction: "addtionner"}
        ]
    ]
}
}
}

</script>

