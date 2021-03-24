<template>
<section class="messages flex">
    <div class="messages-address">
        <h3 class="messages-address-headline flex">Messages</h3>
        <ul v-if="loggedInUserMessages.length" class="list-of-messages">
            <li  v-for="(message, idx) in loggedInUserMessages" :key="message.sender">
                <div @click="showAllMsg(idx)" class="msg-prev">
               <span class="msg-from"> {{message[0].from}}</span> 
               <span class="msg-title"> {{message[0].title}}</span> 
               </div>
            </li>
        </ul>
    </div>

    <div class="message-content">
        <h3 class="messages-content-headline flex"> Chat</h3>
         <div v-if="currMsg" class="currMsg-container"> 
             <section v-for="(message,idx) in currMsg" :key="idx">  
                 <div class="msg-content">    
            <span class="time-msg"> ✉ {{currMsg[idx].createdAt}} </span> 
            <div class="msg-txt"> 
            <span class="from-msg"> {{currMsg[idx].from}} </span> 
            <span class="txt-msg"> {{currMsg[idx].txt}} </span> 
            </div>
            </div>
             </section>
             </div>
             <div class="send-container"> 
             <input class="reply-input" type="text" v-model="reply.txt">
               <el-button class="send-btn"  @click.native="sbmitReply" type="success" icon="el-icon-message" circle></el-button>
               </div>
    </div>
</section>
  
</template>

<script>
import { userService } from '../services/user.service'
export default {
    data(){
        return{
            msgs:null,
            currMsg :null,
            reply: { from: "", txt: "", status: "read",  createdAt:new Date()},
            currMsgId:null,
            index:null
        }
    },
    methods:{
        showAllMsg(idx){
            this.index = idx
            this.currMsg = this.msgs[idx]
            const currMsgAraay = []
            for(const el in this.currMsg){
                currMsgAraay.push( this.currMsg[el])
            }
            this.currMsg = currMsgAraay
            
        },

      async  sbmitReply(){

            const msgs = this.$store.getters.loggedinUser.messages;
            const user = this.$store.getters.loggedinUser
            this.reply.from = this.$store.getters.loggedinUser.username
            msgs[this.currMsgId].push(this.reply);
             user.messages = msgs
             await this.$store.dispatch({ type: "updateUser", user });
             this.showAllMsg(this.index)
             const sendTo = await userService.getById(this.currMsgId)
             sendTo.messages[this.currMsgId].push(this.reply)
             this.reply.txt = ''
        }
    },

    computed:{
        loggedInUserMessages(){
            const msgs = this.$store.getters.loggedinUser.messages;
            const msgArray = [];
            for (const el in msgs){
                this.currMsgId = el;
                msgArray.push(msgs[el]);
            }

            this.msgs = msgArray
            return msgArray;

            
            // return this.$store.getters.loggedinUser.messages;
        },
  
    },
    mounted(){
        this.currMsg = this.msgs[0]
    }
}
</script>

