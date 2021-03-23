<template>
  <div class="">
    <table v-if="messages">
      <tr v-for="(messages, idx) in messages[topic]" :key="idx">
        <td>from: {{ messages.from }} : {{ messages.txt }}</td>
      </tr>
    </table>
    <div class="chat-container">
      <!-- <span v-if="isTyping"> User is typing..</span> -->
      <el-input
        ref="input"
        class="txt-input"
        type="textarea"
        :rows="8"
        placeholder="Your messege will be sent to the host..."
        v-model="msg.txt"
      />
      <el-button @click.native="sendMsg" type="primary" plain icon="el-icon-message" circle ></el-button>
    </div>
  </div>
</template> 

<script>
import { socketService } from "../services/socket.service.js";
import { userService } from "../services/user.service.js";
const Swal = require('sweetalert2')
export default {
  name: "chatApp",
  props: {
    stay: Object,
  },
  data() {
    return {
      messages: [],
      msg: { from: "", txt: "", status: "read" ,  createdAt:new Date()},
      topic: "",
      // isTyping:false
    };
  },
  methods: {
    sendMsg() {
      this.msg.from = this.$store.getters.loggedinUser.username;
      socketService.emit("chat newMsg", this.msg);
      // this.messages.push(this.msg);
    },

    focusInput() {
      this.$refs.input.focus();
    },
    async addMsg(msg) {
      msg.title = msg.txt.substring(0,10) + '...'
      if (!this.messages[this.topic]) this.messages[this.topic] = [];
      this.messages[this.topic].push(msg);
      const user = this.$store.getters.loggedinUser;
      try {
        await this.$store.dispatch({ type: "updateUser", user });
        if (this.stay.host._id === this.topic) return;
        const toUser = await userService.getById(this.stay.host._id);
        if (!toUser.messages[this.topic]) toUser.messages[this.topic] = [];
        msg.status = "unread";
        toUser.messages[this.topic].push(msg);
        console.log(toUser);
        await this.$store.dispatch({ type: "updateUser", user: toUser });
        Swal.fire("your message has been sent successfully", "we will inform you when the host response", "success");
      } catch (err) {
        console.log(err);
      }
    },

    // userTyping(istyping){
    //   this.isTyping = istyping
    // }
  },
  mounted() {
    this.focusInput();
  },
  created() {
    const user = this.$store.getters.loggedinUser;
    this.messages = user.messages || [];
    // const _id = this.$route.params.toyId;
    this.topic = user._id;
    socketService.setup();
    socketService.emit("chat topic", this.topic);
    // socketService.on('user typing', this.userTyping)
    socketService.on("chat addMsg", this.addMsg);
  },
  destroyed() {
    socketService.off("chat addMsg", this.addMsg);
    // socketService.off('user typing', this.userTyping)
    socketService.terminate();
  },

  //     watch: {
  //     msg:  {
  //        handler(val){
  //          console.log('watch?????')
  //             if(this.msg.txt.length >1) {
  //           socketService.emit('user is typing', true)
  //           }else{
  //             socketService.emit('user is typing', false)
  //           }
  //         // setTimeout(() => {
  //         //   socketService.emit('user is typing', false)

  //         // }, 1000);

  //      },
  //            deep: true

  //     },

  // }
};
</script>

<style>
</style>