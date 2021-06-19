<template>
    <section>
        <form class="add-stay-form">
          <h2>Add a New List:</h2>
            <div>
                <span>Stay Name:</span>
                <el-input class="add-stay-name" placeholder="Name" v-model="stay.name"></el-input>
            </div>
            <div>
                <span>Stay Summary:</span>
                <el-input
                    type="textarea"
                    placeholder="Enter summary here..."
                    v-model="stay.summary"
                    maxlength="70"
                    show-word-limit
                  >
                </el-input>
            </div>
            <div>
                <span>Stay Description:</span>
                <el-input
                    class="add-stay-summary"
                    type="textarea"
                    :rows="4"
                    placeholder="Enter description here..."
                    v-model="tempDescription">
                </el-input>
            </div>
            <div class="flex align-center">
                <span>Price per night:</span>
                <el-input class="add-stay-price" placeholder="Enter price" size=small v-model="stay.price"></el-input>
            </div>
            <div class="capacity">
                <span class="capacity-title">Capacity:</span>
                <el-input-number size=small v-model="stay.capacity" @change="handleChange" :min="1" :max="20"></el-input-number>
            </div>
            <div>
              <span class="add-amen"> Choose amenities:</span>
              <add-stay-amenities @updateAmenities="updateAmenities()"/>
            </div>
            <!-- <div class="add-stay-address"/> -->
            <div>
            <span>Upload stay images:</span>
            <img-cld-upload class="upload-stay-img"/>
            </div>
            <button class="special-btn add-asset-btn" @click="addStay()">Publish Listing</button>
        </form>
    </section>    
</template>

<script>
import { stayService } from '../services/stay.service.js';
import addStayAmenities from '../cmps/add-stay-amenities';
import imgCldUpload from '../cmps/img-cld-upload';
const Swal = require('sweetalert2')

export default {
  name: "add-stay",
  props: ['host' ],
  data() {
    return {
      tempDescription:'',
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
      },
      updateAmenities(amenities){
          this.stay.amenities=amenities;
      },
      async addStay(){
        this.$notify.error({
          title: 'This feature is not active yet but will be implemented soon :)',
          // message: 'Thank'
        })
          // try{
          //   this.stay.price=+this.stay.price;
          //   await this.$store.dispatch({type:'saveStay',stay:this.stay})
          //   Swal.fire('Your new stay was added to listing!')
          //   this.stay=stayService.getEmptyStay()
          // } catch(err){
          //     console.log('stay was not added:',err);
          //     Swal.fire('Oops! Something went wrong. Stay was not added. Try again later.')
          // }
      }
    },
    components: {
    addStayAmenities,
    imgCldUpload
  },
};
</script>
<style>
.add-stay-price{
  max-width:130px;
  margin-inline-start: 26px;
}
</style>