<template>
    
    <div class="chat-box-container">
        
        	<div class="container-fluid h-100">
					<div class="row justify-content-center align-items-end pt-4 pb-4 chat-row-container">
							<UserListData />
							<UserChatBox />
					
					</div>
		</div>
    </div>
</template>

<script>
import UserListData from './UserList'
import UserChatBox from './UserChatBox'


// let chatData = {
//   "results": [
//     {
//       "url": "https://scribe.zopim.com/api/v2/chats/123",
//       "timestamp": "2014-10-15T16:31:25Z",
//       "preview": "Hi there! How are you?",
//       "type": "chat",
//       "id": "123"
//     }
//   ],
//   "count": 1,
//   "prev_url": null,
//   "next_url": null
// }


export default {
	name:'ChatMessenger',
	components:{
	 UserListData,
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
