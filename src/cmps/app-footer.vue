<template>
  <section class="footer-container">
    <div class="footer-content">
      <img
        class="logo-img"
        :src="require(`@/assets/imgs/icons/HomeAwaylogo.svg`)"
        alt="img not found"
      />

      <div class="rights-container">
        <p>© 2021 HomeAway, Inc.</p>
      </div>
      <ul class="flex center social-links clean-list">
        <li>
          <i class="fab fa-facebook"></i>
        </li>
        <li>
          <i class="fab fa-twitter"></i>
        </li>
        <li>
          <i class="fab fa-linkedin"></i>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.airbnb-font-logo {
  font-size: 30px;
}
</style>