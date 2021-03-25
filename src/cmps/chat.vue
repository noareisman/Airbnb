<template>
  <section class="chat-room flex column space-between">
    <h2 @click="toggleShowChat">{{ isUserTyping }}</h2>
    <ul v-if="isChatShowing" class="chat-container clean-list">
      <li v-for="(msg, idx) in msgs" :key="idx">
        <span>{{ msg.from }}:</span> {{ msg.txt }}
      </li>
    </ul>
    <form v-if="isChatShowing" @submit.prevent="sendMsg" class="flex">
      <input type="text" v-model="msg.txt" @input="onTyping" />
      <button>Send</button>
    </form>
  </section>
</template>

<script>
import { socketService } from "../services/socket.service.js";
import { utilService } from "../services/util.service.js";//IFAT
// import { userService } from "../services/user.service.js";////////////////////////ERAN
export default {
    // ERAN/////////////////////////
//       name: "chat",
//   props: {
//     stay: Object,
//   },
////////////////////////////////////////
  data() {
    return {
      isChatShowing: false,////////IFAT
      msgs: [],
      msg: { from: "Me", txt: "", createdAt: Date.now() },////////ONLY ERAN CREATED AT
      topic: null,
      isUserTyping: "What's on your mind?",///////IFAT
      bounce: null,/////////IFAT
    };
  },
  created() {
    this.topic = this.$route.params.toyId;
    socketService.setup();
    socketService.emit("chat topic", this.topic);
    socketService.on("chat addMsg", this.addMsg);
    socketService.on("chat isTyping", this.isTyping);
    this.bounce = utilService.debounce(this.clearTyping, 1000);
    /////////////////ERAN////////////////////////////
    //     const user = this.$store.getters.loggedinUser;
    // this.messages = user.messages || [];
    // // const _id = this.$route.params.toyId;*********************************88
    // this.topic = user._id;
    // socketService.setup();
    // socketService.emit("chat topic", this.topic);
    // // socketService.on('user typing', this.userTyping)*****************************
    // socketService.on("chat addMsg", this.addMsg);
    /////////////////////////////////////////////////////
  },
  destroyed() {
    socketService.off("chat addMsg", this.addMsg);
    socketService.terminate();
        // socketService.off('user typing', this.userTyping)//ERAN
  },
  methods: {
    toggleShowChat() {
      this.isChatShowing = !this.isChatShowing;
    },
    addMsg(msg) {
      this.msgs.push(msg);
    },
    sendMsg() {
      this.msgs.push({ ...this.msg });
      this.msg.from = this.$store.getters.username;
      socketService.emit("chat newMsg", {
        msg: this.msg,
        toyId: this.$route.params.toyId,
      });
      this.msg = { from: "Me", txt: "" };
      //   this.$store.dispatch('saveMessage', {msg:this.msg, toyId:this.toyId})
    },
    changeTopic() {
      socketService.emit("change topic", this.topic);
    },
    onTyping() {
      console.log("onTyping:");
      this.setIsTyping();
      this.bounce();
      //   utilService.debounce(this.setIsTyping, 1000, false);
    },
    setIsTyping() {
      socketService.emit("chat userTyping", this.$store.getters.username);
      //   setTimeout(() => {
      //     socketService.emit("chat userTyping", false);
      //   }, 500);
    },
    isTyping(username) {
      // this.isUserTyping = username
      if (username) return (this.isUserTyping = `${username} is typing...`);
      this.isUserTyping = "What's on your mind?";
    },
    clearTyping() {
      socketService.emit("chat userTyping", null);
    },
  },
};
</script>