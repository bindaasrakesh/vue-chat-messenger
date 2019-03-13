<template>
    <div class="container-fluid">
 
      <!-- <div class="search-box">
        <finderGiphy />
      </div> -->

      <div class="giphy-container-box">
        <!-- Bind Giphylist data -->
          <giphyList :giphylist ="giphyListData" />
      </div>
       <div class="loading " v-if="loading" >
            <div class="lds-ripple">
              <div></div>
            </div>
      </div>
    </div>
</template>

<script>

import giphyApi from './Api/auth.js'
import giphyList from './GiphyList'
// import finderGiphy from './FinderGiphy'

export default {
  name: 'GiphyGIF',
  components:{
      giphyList,
      // finderGiphy,


  },
  data () {
    return {

        giphyListData :null,
        loading:true,

    }
  },
  created(){
 
  giphyApi({
            apiKey : 'HLHjYzcaAgKysotw0QcVYBDuDYXf2Ib4',
            searchType:'gifs',
            giphytarget: 'trending',
             
           //  giphytarget: 'random',
             tagItem:'Funny',
             result: 16,
             rating: 'G',
            
    },response => this.giphyListData = response.data);
     window.eventBus.$on('SearchForGiphyStarted', ()=>{
     this.loading = true;
   });
   window.eventBus.$on('searchResultFromGiphy', giphyListData =>{
    console.log('search result',giphyListData );
    this.loading = false;
     this.giphyListData = giphyListData;
   });

        setTimeout(() => {
                  this.loading = false
       },2000)
  },
  methods:{
      
  },
}
</script>

<style scoped>


</style>
