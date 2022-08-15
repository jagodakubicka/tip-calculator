<script>
export default {
  data() {
    return {
      billValue: 0,
      peopleNumber: 1,
      btnValue: 0,
      allertMessage: `Can't be less than 1`,
    };
  },
  methods: {
    clickedButtonValue(event) {
      this.btnValue = event.target.value;
      console.log(this.btnValue);
    },
    resetData() {
      Object.assign(
        (this.billValue = 0),
        (this.peopleNumber = 1),
        (this.btnValue = 0)
      );
    },
    displayAlertMessage() {
      if (this.peopleNumber == 0 || this.peopleNumber < 0) {
        return this.allertMessage;
      }
    },
  },
  computed: {
    TotalPerPersonValue: function () {
      return (
        (this.billValue + this.btnValue * this.billValue) /
        this.peopleNumber
      ).toFixed(2);
    },
    tipAmountPerPerson: function () {
      return ((this.btnValue * this.billValue) / this.peopleNumber).toFixed(2);
    },
  },
};
</script>

<template>
  <div class="app-logo">
    <img src="./assets/images/splitter.svg" alt="splitter" />
  </div>

  <div class="app-container">
    <div class="app-container__box">
      <h2 class="app-container__title">Bill</h2>
      <div class="app-container__billValue">
        <img src="./assets/images/icon-dollar.svg" alt="" />
        <label for="billValue"></label>
        <input
          type="number"
          :min="0"
          :max="1000000"
          v-model.number="billValue"
          placeholder="e.g 50"
        />
      </div>
      <h2 class="app-container__title">Select Tip %</h2>
      <div class="app-container__tipValue">
        <button
          @click="clickedButtonValue($event)"
          type="button"
          value="0.05"
          class="app-container__tipBtn"
        >
          5%
        </button>
        <button
          @click="clickedButtonValue($event)"
          type="button"
          value="0.1"
          class="app-container__tipBtn"
        >
          10%
        </button>
        <button
          @click="clickedButtonValue($event)"
          type="button"
          value="0.15"
          class="app-container__tipBtn"
        >
          15%
        </button>
        <button
          @click="clickedButtonValue($event)"
          type="button"
          value="0.25"
          class="app-container__tipBtn"
        >
          25%
        </button>
        <button
          @click="clickedButtonValue($event)"
          type="button"
          value="0.5"
          class="app-container__tipBtn"
        >
          50%
        </button>
      </div>
      <h2 class="app-container__title">Number of People</h2>
      <p class="app-container__alertMessage">{{ displayAlertMessage() }}</p>
      <div class="app-container__personValue">
        <img src="./assets/images/icon-person.svg" alt="" />
        <label for="peopleNumber"></label>
        <input
          type="number"
          :min="1"
          :max="1000000"
          oninput="this.value = Math.round(this.value);"
          v-model.number="peopleNumber"
          placeholder="e.g 2"
        />
      </div>
    </div>
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
        <h2>${{ TotalPerPersonValue }}</h2>
      </div>
      <button
        @click="resetData($event)"
        type="button"
        class="app-container__resetBtn"
      >
        RESET
      </button>
    </div>
  </div>
  <div class="app-footer">
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
  </div>
</template>
