<template>
  <div id="app">
      <ChatMessenger />
   <!-- <GiphyDash /> -->

  </div>
</template>

<script>
//import GiphyDash from './components/Giphy/GiphyDash'
import ChatMessenger from './components/messenger/Messenger'

export default {
  name: 'app',
  components: {
      ChatMessenger
   // GiphyDash,
  
  }
}
</script>

<style>
#app {
 font-family: Arial, Helvetica, sans-serif;
 font-size: 16px;
 line-height: 1;
 font-weight: 400;
}

</style>
