<template>
  <header>
    <div class="search-box">
      <i class="search-box__icon">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22 22L20 20"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </i>

      <input type="search" class="search-box__input" placeholder="جستجو..." />

      <div class="filter-dropdown">
        <div class="filter-dropdown__badges">
          <span class="badge">آواز</span>
          <span class="badge">ایرانی</span>
          <span class="badge">سنتی</span>
        </div>

        <button class="toggle filter-dropdown__toggle">
          <i class="toggle__logo">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 6.5H16"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 6.5H2"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 10C11.933 10 13.5 8.433 13.5 6.5C13.5 4.567 11.933 3 10 3C8.067 3 6.5 4.567 6.5 6.5C6.5 8.433 8.067 10 10 10Z"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22 17.5H18"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 17.5H2"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 21C15.933 21 17.5 19.433 17.5 17.5C17.5 15.567 15.933 14 14 14C12.067 14 10.5 15.567 10.5 17.5C10.5 19.433 12.067 21 14 21Z"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </i>
          <span>فیلتر</span>
        </button>

        <div class="filter-dropdown__content"></div>
      </div>
    </div>

    <div class="profile-dropdown" v-if="isLogin">
      <button class="profile-dropdown__toggle">
        09156909200
        <i class="arrow-bottom">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.92 8.95L13.4 15.47C12.63 16.24 11.37 16.24 10.6 15.47L4.08002 8.95"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </i>
      </button>

      <div class="profile-dropdown__content"></div>
    </div>
    <div class="tabs" v-else>
      <div class="tabs__option" @click="signin">
        <input type="radio" id="login" value="login" name="seside-tab" />
        <label for="login">ورود</label>
      </div>
      <div class="tabs__option" @click="signup">
        <input
          type="radio"
          id="signup"
          value="signup"
          name="seside-tab"
          checked
        />
        <label for="signup">ثبت نام</label>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();

const isLogin = store.state.user.isLogin;

console.log(isLogin);

const signin = () => {
  router.push({ name: "signin" });
};

const signup = () => {
  router.push({ name: "signup" });
};
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  width: 20%;
  height: 3.5rem;
  background: rgba(70, 70, 70, 0.4);
  border-radius: 1rem;
  overflow: hidden;

  &__option {
    text-align: center;
    flex: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    input {
      display: none;
    }

    label {
      cursor: pointer;
      @include font(1rem, 700, 1.5rem, #999999);
      border-radius: 1rem;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background: rgba(70, 70, 70, 0.604);
      }
    }

    input[id="signup"] + label {
      background: linear-gradient(108.1deg, #fe8a48 -11.1%, #fda53e 112.32%);
      color: white;
    }
  }
}
</style>
