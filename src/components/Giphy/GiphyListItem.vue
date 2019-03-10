<template>
<li class="col-4">

    <figure>
        <img v-bind:src="giphyImage" v-bind:alt="giphyTitle" />
    </figure>
 
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
            return this.giphyItem.images.fixed_height_small.url
        },
    },
    
    
}
</script>

<style scoped>
img{ max-width: 100%;}
</style>
