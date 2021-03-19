<template>
<section v-if="stay">
<h1>Amenities</h1>
<ul>
    <li v-for="(amen,idx) in stay.amenities" :key="idx">
        <i :class="icon(idx)"/> {{stay.amenities[idx]}}
    </li>
</ul>
</section>    
</template>


<script>
export default {
    name:"stay-amenities",
    props:{
        stay:Object
    },
    methods:{
        icon(idx){
            var icon=null
            switch(this.stay.amenities[idx]){
                case 'TV':
                    icon="fas fa-tv"
                    return icon
                case 'Wifi':
                    icon= "fas fa-wifi"
                    return icon
                case 'Air-conditioning':
                    icon="far fa-snowflake"
                    return icon
                case 'Smoking allowed':
                    icon="fas fa-smoking"
                    return icon
                case 'Pets allowed':
                    icon="fas fa-paw"
                    return icon
                case 'Cooking basics':
                    icon="fas fa-utensils"
                    return icon

            }
        }
    },
    created(){
        console.log(this.stay);
    }
}
</script>
