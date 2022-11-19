<template>
  <div class="login-register-container">
    <div class="login-register-container__paragraph paragraph">
      <h1 class="paragraph__title">به آوا لند خوش آمدید</h1>
      <p class="paragraph__text">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد
      </p>
    </div>
  </div>
  <div class="form-container">
    <figure class="form-container__header">
      <img src="@/assets/images/logo.png" alt="Avaland logo" />
    </figure>
    <div class="form-container__body">
      <slot name="form"></slot>
    </div>
    <hr />
    <div class="form-container__footer">
      <button class="google-login-btn" v-show="googleLoginBtn">
        <svg
          width="23"
          height="22"
          viewBox="0 0 23 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_4172_16942)">
            <path
              d="M21.6991 11.0585C21.6991 10.3558 21.6311 9.63052 21.5178 8.95052H11.7031V12.9625H17.3245C17.0978 14.2545 16.3498 15.3878 15.2391 16.1132L18.5938 18.7198C20.5658 16.8838 21.6991 14.2092 21.6991 11.0585Z"
              fill="#4280EF"
            />
            <path
              d="M11.7035 21.2131C14.5142 21.2131 16.8715 20.2838 18.5942 18.6971L15.2395 16.1131C14.3102 16.7477 13.1088 17.1104 11.7035 17.1104C8.98349 17.1104 6.69416 15.2744 5.85549 12.8264L2.41016 15.4784C4.17816 18.9917 7.75949 21.2131 11.7035 21.2131Z"
              fill="#34A353"
            />
            <path
              d="M5.85502 12.8038C5.42435 11.5118 5.42435 10.1065 5.85502 8.81451L2.40969 6.13985C0.936354 9.08651 0.936354 12.5545 2.40969 15.4785L5.85502 12.8038Z"
              fill="#F6B704"
            />
            <path
              d="M11.7035 4.53051C13.1768 4.50785 14.6275 5.07451 15.6928 6.09451L18.6622 3.10251C16.7808 1.33451 14.2875 0.382514 11.7035 0.405181C7.75949 0.405181 4.17816 2.62651 2.41016 6.13985L5.85549 8.81451C6.69416 6.34385 8.98349 4.53051 11.7035 4.53051Z"
              fill="#E54335"
            />
          </g>
          <defs>
            <clipPath id="clip0_4172_16942">
              <rect
                width="22"
                height="21"
                fill="white"
                transform="translate(0.5 0.455566)"
              />
            </clipPath>
          </defs>
        </svg>
        ورود با حساب گوگل
      </button>
      <div class="info">
        <div class="info__item">لورم ایپسوم متن ساختگی با تولید سادگی</div>
        <div class="info__item">
          چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  googleLoginBtn: {
    type: Boolean,
    default: true,
  },
});
</script>

<style lang="scss">
.login-register-container {
  width: 100%;
  min-height: 100vh;
  background-image: url("@/assets/images/login-register-background.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;

  .paragraph {
    max-width: 40.625rem;
    min-width: 25rem;
    text-align: center;
    margin-right: 45%;

    &__title {
      @include font(3rem, 900, 1.75rem);
    }

    &__text {
      margin-top: 2.2rem;
      @include font(1.125rem, 500, 2rem, rgba(255, 255, 255, 0.7));
    }
  }
}
.form-container {
  overflow-y: auto;
  width: 30rem;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #46464680;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
  padding-bottom: 1rem;
  direction: ltr;

  * {
    direction: rtl;
  }

  img {
    width: 75%;
  }

  &__footer {
    margin-top: 2rem;

    .google-login-btn {
      width: 21.25rem;
      height: 3rem;
      background: rgba(70, 70, 70, 0.4);
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.55rem;
      margin-bottom: 2rem;
      @include font(1rem, 700, 0.5rem);

      &:hover {
        background: rgba(70, 70, 70, 0.65);
      }
    }

    .info {
      display: flex;
      gap: 1rem;
      flex-direction: column;

      &__item {
        width: 20.3125rem;
        @include font(0.875rem, 500, 1.5rem, rgba(255, 255, 255, 0.8));
        position: relative;
        margin-right: 0.75rem;
      }

      &__item::before {
        content: "";
        background-color: #ffa92882;
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        position: absolute;
        right: -0.75rem;
        top: 0.5rem;
      }
    }
  }

  hr {
    background-color: #ffffff33;
    width: 21.25rem;
    height: 0.1rem;
    margin-top: 1.5rem;
  }
}
</style>
