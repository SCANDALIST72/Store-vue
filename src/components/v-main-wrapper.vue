<template>
<div class="v-main-wrapper">
    <v-catalog/>
    <v-cart
        v-if="CART.length"
       :cart_data="CART"
    />
</div>
</template>

<script>
import vCatalog from './v-catalog'
import vCart from './v-cart.vue'
import {mapGetters} from 'vuex';

export default {
    name: "v-main-wrapper",
    components:{
        vCatalog,
        vCart
    },
    props:{},
    data() {
        return {
            title:'Заказать на склад'
        }
    },
    computed:{
        ...mapGetters([
            'CART'
        ])
    },
    methods:{},
    watch:{},
    mounted() {
        console.log('Hello im alive')
    }
}

</script>

<style>
.v-main-wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    max-width: 900px;
    margin: 0 auto;
}

</style>