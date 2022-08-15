<template>
  <div class="app-container__box app-container__box--blue">
    <div class="app-container__tipAmount">
      <p>
        Tip Amount <br />
        <span>/ person</span>
      </p>
      <h2>${{ tipAmountPerPerson }}</h2>
    </div>
    <div class="app-container__total">
      <p>
        Total <br />
        <span>/ person</span>
      </p>
      <h2>${{ totalAmountPerPerson }}</h2>
    </div>
    <button @click="resetData" type="button" class="app-container__resetBtn">
      RESET
    </button>
  </div>
</template>

<script>
export default {
  props: {
    tipAmountPerPerson: {
      type: Number,
      required: true
    },
    totalAmountPerPerson: {
      type: Number,
      required: true
    }
  },
  emits: ['resetData'],
  methods: {
    resetData() {
      this.$emit('resetData')
    }
  }
}
</script>

<style></style>
