<template>
    <form class="search-form" v-on:submit.prevent="handelFormSubmit">
                <!-- <div class="search-type-row">
                <b-form-group  label="Search Type" class="search-type">
                    <b-form-radio value="gifs" v-model="selected" name="some-radios">GIF</b-form-radio>
                    <b-form-radio value="stickers" v-model="selected" name="some-radios">Sticker</b-form-radio>
                </b-form-group>  
                </div> -->
                  <!-- <div class="mt-3">Selected: <strong>{{ selected }}</strong></div> -->
                <div class="action-row ">
                    <div class="form-group ">
                        <input type="text" v-model="searchString" class="form-control"  placeholder="Search">
                    </div>
                    <!-- <div class="form-group col-2">
                        <select v-model="selectOption">
                             <option disabled value="">Please select one</option>
                            <option selected :value="6">6</option>
                            <option :value="12">12</option> 
                            <option :value="18">18</option>
                            <option :value="24">24</option>
                        </select>
                    </div> -->
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
