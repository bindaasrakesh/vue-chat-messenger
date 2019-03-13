<template>
    <div class="col-md-8 col-xl-6 chat">
        <div class="card chat-common-card">
            <div class="card-header msg_head">
                <div class="d-flex bd-highlight">
                    <div class="img_cont">
                        <img src="https://devilsworkshop.org/files/2013/01/enlarged-facebook-profile-picture.jpg" class="rounded-circle user_img">
                        <span class="online_icon"></span>
                    </div>
                    <div class="user_info">
                        <span>Chat with Maryam Naz</span>
                        <p>1767 Messages</p>
                    </div>
                    <div class="video_cam">
                        <span><i class="fas fa-video"></i></span>
                        <span><i class="fas fa-phone"></i></span>
                    </div>
                </div>
                <span id="action_menu_btn"><i class="fas fa-ellipsis-v"></i></span>
                <div class="action_menu">
                    <ul>
                        <li><i class="fas fa-user-circle"></i> View profile</li>
                        <li><i class="fas fa-users"></i> Add to close friends</li>
                        <li><i class="fas fa-plus"></i> Add to group</li>
                        <li><i class="fas fa-ban"></i> Block</li>
                    </ul>
                </div>
            </div>
            <div class="card-body msg_card_body pb-0">
                <div class="w-100 d-inline-block">
                    <div class="d-flex justify-content-start mb-4">
                        <div class="img_cont_msg">
                            <img src="https://devilsworkshop.org/files/2013/01/enlarged-facebook-profile-picture.jpg"
                                class="rounded-circle user_img_msg">
                        </div>
                        <div class="msg_cotainer">
                            Hi, how are you samim?
                            <span class="msg_time">8:40 AM, Today</span>
                        </div>
                    </div>
                    <div class="d-flex justify-content-end mb-4">
                        <div class="msg_cotainer_send">
                            Hi Maryam i am good tnx how about you?
                            <span class="msg_time_send">8:55 AM, Today</span>
                        </div>
                        <div class="img_cont_msg">
                            <img src="https://2.bp.blogspot.com/-8ytYF7cfPkQ/WkPe1-rtrcI/AAAAAAAAGqU/FGfTDVgkcIwmOTtjLka51vineFBExJuSACLcBGAs/s320/31.jpg" alt="" />
                        </div>
                    </div>
                    <div class="d-flex justify-content-start mb-4">
                        <div class="img_cont_msg">
                            <img src="https://devilsworkshop.org/files/2013/01/enlarged-facebook-profile-picture.jpg"
                                class="rounded-circle user_img_msg">
                        </div>
                        <div class="msg_cotainer">
                            I am good too, thank you for your chat template
                            <span class="msg_time">9:00 AM, Today</span>
                        </div>
                    </div>
                    <div class="d-flex justify-content-end mb-4">
                        <div class="msg_cotainer_send">
                            You welcome Maryam
                            <span class="msg_time_send">9:05 AM, Today</span>
                        </div>
                        <div class="img_cont_msg">
                            <img src="https://2.bp.blogspot.com/-8ytYF7cfPkQ/WkPe1-rtrcI/AAAAAAAAGqU/FGfTDVgkcIwmOTtjLka51vineFBExJuSACLcBGAs/s320/31.jpg" alt="" />
                        </div>
                    </div>
                    <div class="d-flex justify-content-start mb-4">
                        <div class="img_cont_msg">
                            <img src="https://devilsworkshop.org/files/2013/01/enlarged-facebook-profile-picture.jpg"
                                class="rounded-circle user_img_msg">
                        </div>
                        <div class="msg_cotainer">
                            I am looking for your next templates
                            <span class="msg_time">9:07 AM, Today</span>
                        </div>
                    </div>
                    <div class="d-flex justify-content-end mb-4">
                        <div class="msg_cotainer_send">
                            Ok, thank you have a good day
                            <span class="msg_time_send">9:10 AM, Today</span>
                        </div>
                        <div class="img_cont_msg">
                            <img src="https://2.bp.blogspot.com/-8ytYF7cfPkQ/WkPe1-rtrcI/AAAAAAAAGqU/FGfTDVgkcIwmOTtjLka51vineFBExJuSACLcBGAs/s320/31.jpg" alt="" />
                        </div>
                    </div>
                    <div class="d-flex justify-content-start mb-4">
                        <div class="img_cont_msg">
                            <img src="https://devilsworkshop.org/files/2013/01/enlarged-facebook-profile-picture.jpg"
                                class="rounded-circle user_img_msg">
                        </div>
                        <div class="msg_cotainer">
                            Bye, see you
                            <span class="msg_time">9:12 AM, Today</span>
                        </div>
                    </div>
                </div>

            </div>
            <div class="card-footer pt-0">
                <div class="emoji-row position-relative" v-bind:class="{ active: showEmojiBox }">
                    <finderGiphy />
                    <b-card no-body>
                        <b-tabs pills card>
                            <b-tab title="GIF" active>
                                <b-card-text>
                                    <GiphyGIF />
                                </b-card-text>
                            </b-tab>
                            <b-tab title="STICKER">
                                <b-card-text>
                                    <GiphyStickers />

                                </b-card-text>
                            </b-tab>
                        </b-tabs>
                    </b-card>
                </div>
                <div class="input-group">
                    <div class="input-group-append">
                        <span class="input-group-text smile-btn" @click="showEmoji">
                            <!-- <i class="fas fa-paperclip"></i> -->
                            <font-awesome-icon icon="smile"></font-awesome-icon>
                        </span>
                    </div>
                    <textarea name="" class="form-control type_msg" placeholder="Type your message..."></textarea>
                    <div class="input-group-append">
                        <span class="input-group-text send_btn">
                            <!-- <i class="fas fa-location-arrow"></i> -->


                            <font-awesome-icon icon="location-arrow"></font-awesome-icon>

                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

import GiphyGIF from '../Giphy/GiphyGIF'
import GiphyStickers from '../Giphy/GiphySticker'
import finderGiphy from '../Giphy/Search/FinderGiphy'
    export default {
        name:'UserChatBox',
        	components:{
            GiphyGIF,
            GiphyStickers,
            finderGiphy
            },
        	data(){
            return{
                showEmojiBox: false,
            }
	},
	methods:{
		showEmoji:function(){
			this.showEmojiBox = !this.showEmojiBox;
		}
	},
    }
</script>