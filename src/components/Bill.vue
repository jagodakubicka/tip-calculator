<template>
  <div class="app-container">
    <div class="app-container__box">
      <h2 class="app-container__title">Bill</h2>
      <div class="app-container__billValue">
        <img src="../assets/images/icon-dollar.svg" alt="" />
        <label for="billValue"></label>
        <input
          type="number"
          min="0"
          max="1000000"
          v-model.number="billValue"
          @change="validateBillValue"
          placeholder="e.g 50"
        />
      </div>
      <h2 class="app-container__title">Select Tip %</h2>
      <div class="app-container__tipValue">
        <button
          v-for="(tip, index) in tips"
          :key="index"
          @click="selectTipAmount"
          type="button"
          :value="tip.value"
          class="app-container__tipBtn"
        >
          {{ tip.label }}
        </button>
      </div>
      <h2 class="app-container__title">Number of People</h2>
      <p v-if="!hasPeople" class="app-container__alertMessage">
        {{ alertMessage }}
      </p>
      <div class="app-container__personValue">
        <img src="../assets/images/icon-person.svg" alt="" />
        <label for="peopleNumber"></label>
        <input
          type="number"
          min="1"
          max="1000000"
          v-model.number="peopleNumber"
          @change="validatePeopleNumber"
          placeholder="e.g 2"
        />
      </div>
    </div>
    <BillResult
      :tipAmountPerPerson="tipAmountPerPerson"
      :totalAmountPerPerson="totalAmountPerPerson"
      @resetData="resetData"
    />
  </div>
</template>

<script>
import BillResult from '@/components/BillResult.vue'

export default {
  components: {
    BillResult
  },
  data() {
    return {
      billValue: 0,
      peopleNumber: 1,
      tipAmount: 0,
      alertMessage: "Can't be less than 1",
      tips: [
        {
          value: 0.05,
          label: '5%'
        },
        {
          value: 0.1,
          label: '10%'
        },
        {
          value: 0.15,
          label: '15%'
        },
        {
          value: 0.25,
          label: '25%'
        },
        {
          value: 0.5,
          label: '50%'
        }
      ]
    }
  },
  methods: {
    selectTipAmount(event) {
      this.tipAmount = event.target.value
    },
    validateBillValue(e) {
      this.billValue = Math.floor(e.target.value).toFixed(2)
    },
    validatePeopleNumber(e) {
      this.peopleNumber = Math.floor(e.target.value).toFixed(0)
    },
    resetData() {
      this.billValue = 0
      this.peopleNumber = 1
      this.tipAmount = 0
    }
  },
  computed: {
    roundedNumber(e) {
      return Math.round(e)
    },
    hasPeople() {
      return this.peopleNumber >= 1
    },
    totalAmountPerPerson() {
      return this.billValue && this.tipAmount
        ? (
          (this.billValue + this.tipAmount * this.billValue)
            / this.peopleNumber
        ).toFixed(2)
        : 0
    },
    tipAmountPerPerson() {
      return this.billValue && this.tipAmount
        ? ((this.tipAmount * this.billValue) / this.peopleNumber).toFixed(2)
        : 0
    }
  }
}
</script>

<style></style>
