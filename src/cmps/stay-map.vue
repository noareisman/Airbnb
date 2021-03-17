<template>
<h1>Location</h1>
  <!-- <GmapMap -->
    <!-- class="google-map" -->
    <!-- ref="gMap" -->
    <!-- :center="position" -->
    <!-- :zoom="zoom" -->
    <!-- map-type-id="terrain" -->
    <!-- style="width: 700px; height: 500px" -->
  <!-- > -->
    <!-- <GmapMarker -->
      <!-- :key="index" -->
      <!-- :clickable="true" -->
      <!-- :draggable="true" -->
      <!-- @click="centerMap(stay - position)" -->
    <!-- /> -->
    <!-- <GmapInfoWindow>gfds</GmapInfoWindow> -->
  <!-- </GmapMap> -->
</template>

<script>
export default {
  name: "stay-map",
  props: {
    location: Object,
  },
  data() {
    return {
      zoom: 7,
      position:{ lat: this.location.lat, lng: this.location.lng  }
    }
  },
  methods: {
    // centerMap(pos) {
    //   this.$refs.gMap.panTo(pos);
    //   this.zoom = 10;
    // },
//   },
}
}
</script>