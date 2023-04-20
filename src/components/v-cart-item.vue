<template>
 <div class='v-cart-item'>
     <img class="v-cart-item__image" :src=" require('../assets/images/' + cart_item_data.image)" alt="">
     <div class="v-cart-item__info">
         <p>{{cart_item_data.name}}</p>
         <input type="number" min="0" max="100" value="1" >
         <p> Артикл товара:{{cart_item_data.article}}</p>
     </div>
     <div class="v-cart-item__quantity"> </div>
         <button>Отменить</button>


 </div>

</template>

<script>

export default {
    name: "v-cart-item",
    props:{
        cart_item_data:{
            type: Object,
            default(){
                return{ }
            }
        }
    },
    data(){
        return{}
    },
    computed:{}
}
</script>

<style lang="scss">
@import "../assets/styles/styles.scss";
.v-cart-item{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
  box-shadow: 0 0 8px 8px #e0e0e0;
  padding: $padding*2;
  margin-bottom: $margin*2;
  &__image{
    max-height: 200px;
    max-width: 150px;
  }
}


</style>