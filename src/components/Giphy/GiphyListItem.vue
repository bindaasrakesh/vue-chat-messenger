<template>
<li class="col">
  <b-card class="text-center">
    <figure>
        <img v-bind:src="giphyImage" v-bind:alt="giphyTitle" />
    </figure>
  </b-card>
</li>
</template>

<script>
    

export default {
    name:'giphyListItem',
    props:['giphyItem'],

     computed:{
        giphyTitle(){
            return this.giphyItem.title
        },

        giphyImage(){
            return this.giphyItem.images.fixed_height.url
        },
    },
    
    
}
</script>

<style scoped>

</style>
