<template>
  <div class="v-catalog">
      <h1>Catalog</h1>
      <div class="v-catalog__list">
          <v-catalog-item
          v-for="product in PRODUCTS"
          :key="product.article"
          :product_data="product"
          @addTostore="addTostore"
          />

      </div>

  </div>

</template>

<script>
import  vCatalogItem from './v-catalog-item.vue'
import {mapActions, mapGetters} from "vuex";

export default {
    name: "v-catalog.vue",
    components:{
        vCatalogItem,
    },
    props:{},
    data(){
        return{

        }
    },
    computed:{
        ...mapGetters([
            'PRODUCTS'

        ])
    },
    methods:{
        ...mapActions([
            'GET_PRODUCT_FROM_API',
            'ADD_TO_STORE'
        ]),
        addTostore(data){
            this.ADD_TO_STORE(data)
        }
    },
    mounted() {
        this.GET_PRODUCT_FROM_API()
            .then((response)=>{
                if (response.data){
                    console.log('Data arrived!')
                }
            })

    },
    actions:{

    }


}
</script>

<style lang="scss">
.v-catalog{
  &__list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

}


</style>