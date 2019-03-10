<template>

    <div class="col-md-4 col-xl-3 chat">
        <div class="card chat-common-card mb-sm-3 mb-md-0 contacts_card">
            <div class="card-header">
                <div class="input-group">
                    <input type="text" placeholder="Search..." name="" v-model="search" class="form-control search">
                    <div class="input-group-prepend">
                        <span class="input-group-text search_btn"><i class="fas fa-search"></i></span>
                    </div>
                </div>
            </div>
            <div class="card-body contacts_body">
                <ui class="contacts" v-bind:key="user.id" v-for="user in filteredList">
                    <li class="" v-bind:class="{ active: user.id==1 }">
                        <div class="d-flex bd-highlight">
                            <div class="img_cont">
                                <img v-bind:src="user.profile_pic"
                                    class="rounded-circle user_img">
                                  <span class="online_icon" v-bind:class="{ offline: user.active=='false' }"></span>
                            </div>
                            <div class="user_info">
                                <span>{{ user.name }}</span>
                                <p>{{ user.name }} is {{ user.status}}</p>
                            </div>
                        </div>
                    </li>
                    <!-- <li>
                        <div class="d-flex bd-highlight">
                            <div class="img_cont">
                                <img src="https://2.bp.blogspot.com/-8ytYF7cfPkQ/WkPe1-rtrcI/AAAAAAAAGqU/FGfTDVgkcIwmOTtjLka51vineFBExJuSACLcBGAs/s320/31.jpg"
                                    class="rounded-circle user_img">
                                <span class="online_icon offline"></span>
                            </div>
                            <div class="user_info">
                                <span>Sahar Darya</span>
                                <p>Sahar left 7 mins ago</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="d-flex bd-highlight">
                            <div class="img_cont">
                                <img src="https://i.pinimg.com/originals/54/6e/6d/546e6d4c6ce4322e6aa3b2f8ca73ac28.jpg"
                                    class="rounded-circle user_img">
                                <span class="online_icon"></span>
                            </div>
                            <div class="user_info">
                                <span>Yolduz Rafi</span>
                                <p>Yolduz is online</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="d-flex bd-highlight">
                            <div class="img_cont">
                                <img src="http://profilepicturesdp.com/wp-content/uploads/2018/07/sweet-girl-profile-pictures-9.jpg"
                                    class="rounded-circle user_img">
                                <span class="online_icon offline"></span>
                            </div>
                            <div class="user_info">
                                <span>Nargis Hawa</span>
                                <p>Nargis left 30 mins ago</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="d-flex bd-highlight">
                            <div class="img_cont">
                                <img src="https://www.freshmorningquotes.com/wp-content/uploads/2015/11/cute-and-beautifull-girls-profile-pictures.jpg"
                                    class="rounded-circle user_img">
                                <span class="online_icon offline"></span>
                            </div>
                            <div class="user_info">
                                <span>Khadija Mehr</span>
                                <p>Khadija left 50 mins ago</p>
                            </div>
                        </div>
                    </li> -->
                </ui>
            </div>
            <div class="card-footer"></div>
        </div>
    </div>

</template>
<script>

let users =  [
                { id: '1', name: 'Maryam Naz', profile_pic: 'https://devilsworkshop.org/files/2013/01/enlarged-facebook-profile-picture.jpg', email:'ab@gmail.com',  unread:'0', status:'online', active:'true', },
                { id: '2', name: 'Sahar Darya', profile_pic: 'https://2.bp.blogspot.com/-8ytYF7cfPkQ/WkPe1-rtrcI/AAAAAAAAGqU/FGfTDVgkcIwmOTtjLka51vineFBExJuSACLcBGAs/s320/31.jpg', email:'abcd@gmail.com', unread:'2', status:'away', active:'false', },
                { id: '3', name: 'Yolduz Rafi', profile_pic: 'https://i.pinimg.com/originals/54/6e/6d/546e6d4c6ce4322e6aa3b2f8ca73ac28.jpg', email:'test@gmail.com',  unread:'4', status:'online', active:'true', },
                { id: '4', name: 'Nargis Hawa', profile_pic: 'http://profilepicturesdp.com/wp-content/uploads/2018/07/sweet-girl-profile-pictures-9.jpg', email:'sample@gmail.com', unread:'1', status:'away', active:'false', },
                { id: '5', name: 'Khadija Mehr', profile_pic: 'https://www.freshmorningquotes.com/wp-content/uploads/2015/11/cute-and-beautifull-girls-profile-pictures.jpg', email:'sample@gmail.com', unread:'10', status:'away', active:'false', },
             ]

    export default {
        name:'UserList',
        data(){
            return{
                search: '',
                users,
                userActive:''
             
            }
        },
        computed: {
            filteredList() {
                return this.users.filter(user => {
                    return user.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
                })
            }
    },
            

          
     
    }
</script>

<style>

</style>