<template>
  <Logo />
  <Bill />
  <AppFooter />
</template>

<script>
import Logo from './components/Logo.vue'
import Bill from './components/Bill.vue'
import AppFooter from './components/AppFooter/index.vue'

export default {
  components: {
    Logo,
    Bill,
    AppFooter
  }
}
</script>
