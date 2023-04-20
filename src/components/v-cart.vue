<template>
  <div class='v-cart'>
      <h1>Будет доставлено на склад</h1>
      <v-cart-item
      v-for="item in cart_data"
      :key="item.article"
      :cart_item_data="item"
      />
      <button class="v-catalog-item_add_to_cart_btn">Заказать</button>
  </div>

</template>

<script>
import vCartItem from './v-cart-item'
export default {
    name: "v-cart",
    components:{
        vCartItem
    },
    props:{
        cart_data: {
            type:Array,
            default(){
                return[]
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

.v-catalog-item_add_to_cart_btn {
  display: inline-flex;
  margin: 10px;
  text-decoration: none;
  position: relative;
  font-size: 20px;
  line-height: 20px;
  padding: 12px 30px;
  color: #FFF;
  font-weight: bold;
  text-transform: uppercase;
  font-family: 'Roboto Condensed', Тahoma, sans-serif;
  background: #337AB7;
  cursor: pointer;
  border: 2px solid #BFE2FF;
  overflow: hidden;
  z-index: 1;
}
.v-catalog-item_add_to_cart_btn:hover,
.v-catalog-item_add_to_cart_btn:active,
.v-catalog-item_add_to_cart_btn:focus {
  color: #FFF;
}
.v-catalog-item_add_to_cart_btn:before,
.v-catalog-item_add_to_cart_btn:after {
  content: '';
  position: absolute;
  top: 50%;
  width: 20px;
  height: 100%;
  background-color: #1C4B73;
  z-index: -1;
}
.v-catalog-item_add_to_cart_btn:before {
  left: -20px;
  transform: translate(-50%, -50%);
}
.v-catalog-item_add_to_cart_btn:after {
  right: -20px;
  transform: translate(50%, -50%);
}
.v-catalog-item_add_to_cart_btn:hover:before,
.v-catalog-item_add_to_cart_btn:active:before,
.v-catalog-item_add_to_cart_btn:focus:before {
  animation: from-left 0.5s both;
}
.v-catalog-item_add_to_cart_btn:hover:after,
.v-catalog-item_add_to_cart_btn:active:after,
.v-catalog-item_add_to_cart_btn:focus:after {
  animation: from-right 0.5s both;
}
@keyframes from-right {
  0% {
    right: -20px;
  }
  50% {
    right: 50%;
    width: 20px;
  }
  100% {
    right: 50%;
    width: 100%;
  }
}
@keyframes from-left {
  0% {
    left: -20px;
  }
  50% {
    left: 50%;
    width: 20px;
  }
  100% {
    left: 50%;
    width: 100%;
  }
}

</style>