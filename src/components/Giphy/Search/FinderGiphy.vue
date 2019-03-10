<template>
    <form class="search-form" v-on:submit.prevent="handelFormSubmit">

                <div class="action-row ">
                    <div class="form-group ">
                        <input type="text" v-model="searchString" class="form-control"  placeholder="Search">
                    </div>
                </div>

        </form>
</template>

<script>
import giphyGifApi from '../Api/auth.js'
import stickerApi from '../Api/auth.js'
export default {
    name:'FinderGiphy',
    props:[],
    data(){
        return{
            searchString:'',
            selected:'gifs',
            selectedStckr:'stickers',
            selectOption:'12',
        }

    },
    

    methods:{
        handelFormSubmit(){
            window.eventBus.$emit('SearchForGiphyStarted')

            giphyGifApi({
            apiKey : 'HLHjYzcaAgKysotw0QcVYBDuDYXf2Ib4',
             term: this.searchString,
             searchType:this.selected,
             giphytarget: 'search',
             result: this.selectOption,
             rating: 'G',
             offset:0,
             lang:'en',
          },response => {
                window.eventBus.$emit('searchResultFromGiphy',response.data);
            }
            );

            stickerApi({
            apiKey : 'HLHjYzcaAgKysotw0QcVYBDuDYXf2Ib4',
             term: this.searchString,
             searchType:this.selectedStckr,
             giphytarget: 'search',
             result: this.selectOption,
             rating: 'G',
             offset:0,
             lang:'en',
          },response => {
                window.eventBus.$emit('searchResultFromGiphySticker',response.data);
            }
            );
  

        }
    },
}
</script>

<style >
.search-type-row{ text-align: center}
.search-type-row legend + div{ 
        display: flex;
    justify-content: center;
    align-items: center;
}
.search-type-row .search-type .custom-control{
        margin: 0 20px;
    display: inline-block;
}

.search-type-row  .custom-control-label{
       min-height: 25px;
    display: flex;
    align-items: center;
}

</style>
