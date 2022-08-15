<template>
  <footer class="footer">
    <p>
      Challenge from
      <a href="https://www.frontendmentor.io/challenges" target="_blank"
        >Frontend Mentor.</a
      >
    </p>
    <p>
      Coded by
      <a href="https://github.com/jagodakubicka" target="_blank"
        >Jagoda Kubicka.</a
      >
    </p>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss">
.footer {
  margin: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 12px;
  }
  a {
    font-size: 12px;
    margin: 0 5px;
    color: $Very-dark-cyan;
  }
}
</style>
