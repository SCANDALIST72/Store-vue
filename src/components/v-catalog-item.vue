<template>
  <div class="v-catalog-item">
      <img class="v-catalog-item__image" :src=" require('../assets/images/'+ product_data.image) " alt="img">
      <p class="v-catalog-item__name">{{product_data.name}}</p>
      <p class="v-catalog-item__avaliable">{{product_data.avaliable?"Доступно":"Не доступно"}}</p>
      <p class ="v-catalog-item__article">Артикл товара: {{product_data.article}}</p>
      <button  :disabled="!product_data.avaliable"
              class="v-catalog-item_add_to_cart_btn btn"
              @click="addTostore"

      >Добавить на склад
      </button>

  </div>

</template>

<script>
export default {
    name: "v-catalog-item.vue",
    props:{
        product_data:{
            type:Object,
            default () {
                return {}
            }
        }
    },
    data(){
        return{
        }
    },
    computed:{},
    methods:{
        addTostore(){
            this.$emit('addTostore',this.product_data)
        }


    }
}
</script>

<style lang="scss">
@import "../assets/styles/styles.scss";

.v-catalog-item{
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $padding*2;
  margin-bottom: $margin*2;
  &__image {
    width: auto;
    height: 150px;
  }
}

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