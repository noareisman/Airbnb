<template>
  <section class="home main-layout">
    <section class="hero full main-layout">
      <div class="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/stay">stayApp</router-link> |
      </div>
      <div
        class="filter-container flex justify-center align-center scroll-serarch"
      >
        <div class="wrapper flex">
          <span class="box">
            <div class="location">
              <span class="title">Location</span>
              <input
                type="text"
                placeholder="where are you going?"
                class="desc"
              />
            </div>
          </span>
          <span class="box">
            <div class="location">
              <span class="title">Dates</span>
              <input
                type="text"
                placeholder="where are you going?"
                class="desc"
              />
            </div>
          </span>
          <span class="box">
            <div class="guests">
              <span class="title">Guests</span>
              <input
                type="text"
                placeholder="where are you going?"
                class="desc"
              />
            </div>
          </span>
          <div class="search-icon">
            <div class="btn-search">
              <img src="../assets/images/icons/icon-search.png" />
            </div>
          </div>
        </div>
      </div>
      <div class="h1-container">
        <h1 class="hero-header">Love</h1>
        <h1 class="hero-header-2">
          Where You Live <span class="dot">. </span>
        </h1>
      </div>
    </section>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {},
};
</script>
