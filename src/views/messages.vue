<template>
<section class="messages flex">
    <div class="messages-address">
        <h3 class="messages-address-headline flex">Messages</h3>
        <ul class="list-of-messages">
            <li v-for="message in loggedInUserMessages" :key="message.sender">
                {{message[0]}}
            </li>
        </ul>
    </div>

    <div class="message-content">
        <h3 class="messages-content-headline flex">tads</h3>

    </div>
</section>
  
</template>

<script>
export default {
    computed:{
        loggedInUserMessages(){
            const msgs = this.$store.getters.loggedinUser.messages;
            const arr = [];
            for (const el in msgs){
                arr.push(msgs[el]);
            }
            console.log(arr);
            return arr;

            
            // return this.$store.getters.loggedinUser.messages;
        }
    },
    created(){
        console.log(this.loggedInUser.messages);
    }
}
</script>

