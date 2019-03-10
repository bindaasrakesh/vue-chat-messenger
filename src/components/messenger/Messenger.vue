<template>
    
    <div class="chat-box-container">
        
        	<div class="container-fluid h-100">
					<div class="row justify-content-center align-items-end pt-4 pb-4 chat-row-container">
							<UserList />
							<UserChatBox />
					
					</div>
		</div>
    </div>
</template>

<script>
import UserList from './UserList'
import UserChatBox from './UserChatBox'


export default {
	name:'ChatMessenger',
	components:{
	 UserList,
	 UserChatBox,

	},

	//   computed: {
  //   filteredList() {
  //     return this.postList.filter(post => {
  //       return post.title.toLowerCase().includes(this.search.toLowerCase())
  //     })
  //   }
  // },
}
</script>


<style>

</style>
