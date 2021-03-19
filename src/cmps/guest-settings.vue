<template>
  <el-dropdown @change="handleChange">
    <span class="el-dropdown-link">
      GUESTS<i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown" >
      <el-dropdown-item
        >Adults:
        <el-input-number
          v-model="guest.adultsNum"
          :min="1"
          :max="10"
        >
        </el-input-number>
      </el-dropdown-item>
      <el-dropdown-item
        >Children:
        <el-input-number
          v-model="guest.childrenNum"
          :min="0"
          :max="10"
        >
        </el-input-number>
      </el-dropdown-item>
      <el-dropdown-item
        >Infants:
        <el-input-number
          v-model="guest.infantsNum"
          :min="0"
          :max="10"
        >
        </el-input-number>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<script>
export default {
  name: "guest-settings",
  data() {
    return {
      guest: {
        adultsNum: 1,
        childrenNum: 0,
        infantsNum: 0,
      },
    };
  },
  methods: {
    handleChange() {
      this.$emit("pickgusets", this.guest);
    },
  },
};
</script>
