<template>
    <div class="giphy-list-box">
        
        <ul class="row flex-wrap">
            
                <giphyListItem 

                :key="giphy.id"
                :giphyItem="giphy"
                v-for="giphy in giphylist" 
                        
                />
        
        </ul>
        
    </div>
</template>

<script>
import giphyListItem from './GiphyListItem'
export default {
    
    name:'giphyList',
    props:['giphylist'],
    components:{
        giphyListItem
    },
    
   
}
</script>

<style scoped>
  ul li{
      margin-bottom: 30px;
      list-style: none;
  }
</style>

