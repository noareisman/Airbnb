<template>
    <section>
        <form>
            <div>
                <span>Stay Name:</span>
                <el-input class="add-stay-name" placeholder="Name" v-model="stay.name"></el-input>
            </div>
            <div>
                <span>Stay Summary:</span>
                <el-input
                    class="add-stay-summary"
                    type="textarea"
                    :rows="2"
                    placeholder="Enter summary here..."
                    v-model="stay.summary">
                </el-input>
            </div>
            <div>
                <span>Price:</span>
                <el-input class="add-stay-price" placeholder="Enter price" v-model="stay.name"></el-input>
            </div>
            <div>
                <span>Capacity:</span>
                <el-input-number v-model="capacity" @change="handleChange" :min="1" :max="20"></el-input-number>
            </div>
            <add-stay-amenities @updateAmenities="updateAmenities()"/>
            <!-- <div class="add-stay-address"/> -->
            <!-- <div class="upload-stay-img"/> -->
            <button class="call-to-action-btn" @click="addStay()">Add Stay</button>
        </form>
    </section>    
</template>

<script>
import { stayService } from '../services/stay.service';
const Swal = require('sweetalert2')

export default {
  name: "add-stay",
  props: { host },
  data() {
    return {
      stay: {
        name: "",
        imgUrls: ["1.1","1.2a","1.2b","1.2c","1.2d"],////////////////////////////////////FIX (temp)
        price: null,
        summary: "",
        capacity: 1,
        favorites: [],
        amenities: [],
        host: {
          _id: this.host._id,
          fullname: this.host.fullname,
          imgUrl: this.host.imgUrl,
        },
        /////////////////////////////////FIX (temp)
        loc: {
          country: 'Israel',
          countryCode: 'IL',
          address: 'Jerusalem',
          lat: 31.771959,
          lng: 35.217018,
        },
        ////////////////////////////////////
        reviews: []
        }
    }
    },
    methods: {
      handleChange(value) {
        console.log(value)
      },
      updateAmenities(amenities){
          this.stay.amenities=amenities;
      },
      async addStay(){
          try{
            await this.$store.dispatch({type:'saveStay',stay:this.stay})
            Swal.fire('Your new stay was added to listing!')
            this.stay=stayService.getEmptyStay()
          } catch(err){
              console.log('stay was not added:',err);
              Swal.fire('Oops! Something went wrong. Stay was not added. Try again later.')
          }
      }
    },
    components: {
    addStayAmenities,
  },
};
</script>

<style>
.el-dropdown-link {
  cursor: pointer;
  color: #FF385C;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>