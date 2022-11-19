<template>
  <div>
    <LoginRegisterComponent :google-login-btn="googleLoginBtn">
      <template v-slot:form>
        <Form class="form" v-slot="{ errors }" @submit="redirect">
          <div class="form__text-item">
            <label for="userName">نام کاربری</label><br />
            <Field name="userName" rules="required|username" />
            <div class="error">{{ errors.userName }}</div>
          </div>
          <div class="form__text-item">
            <label for="password">رمزعبور</label><br />
            <Field name="password" rules="required|password" type="password" />
            <div class="error">{{ errors.password }}</div>
          </div>
          <button class="form__submit-btn" type="submit">ورود</button>
          <div class="form__option option">
            <p class="option__signup">
              حساب کاربری ندارید؟
              <router-link to="signup"> ثبت نام </router-link>
            </p>
            <router-link
              to="question-reset-pass"
              class="option__forget-password"
            >
              بازیابی رمز عبور
            </router-link>
          </div>
        </Form>
      </template>
    </LoginRegisterComponent>
  </div>
</template>
<script setup>
import LoginRegisterComponent from "../components/LoginRegisterComponent.vue";
import { Field, Form } from "vee-validate";
import { defineRule } from "vee-validate";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const googleLoginBtn = true;

defineRule("required", (value) => {
  if (!value || !value.trim()) {
    return "وارد کردن این فیلد الزامی است.";
  }
  return true;
});

defineRule("username", (value) => {
  if (!/^(\+98|0)?9\d{9}$/.test(value)) {
    return "لطفا شماره موبایل صحیح وارد کنید.";
  }
  return true;
});

defineRule("password", (value) => {
  if (!value || !value.trim()) {
    return "لطفا رمز عبور را وارد کنید";
  } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value)) {
    return "رمز عبور باید شامل حداقل هشت کاراکتر و حاوی حداقل یک حرف کوچک و یک حرف بزرگ و یک عدد باشد.";
  }
  return true;
});

const router = useRouter();
const redirect = () => {
  store.commit("SET_ISLOGIN", true);
  router.push({ name: "home" });
};
</script>
<style lang="scss" scoped>
.form {
  background-color: transparent;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  &__text-item {
    label {
      @include font(1rem, 700, 1.5rem);
    }

    input {
      width: 21.25rem;
      height: 3.5rem;
      margin-top: 0.5rem;
      background: rgba(70, 70, 70, 0.5);
      @include font(1rem, 500, 1.5rem);
      padding: 1rem;
      border-radius: 0.5rem;
    }

    .error {
      @include font(1rem, 400, 1.5rem, red);
      margin-top: 0.5rem;
      width: 21.25rem;
    }
  }

  &__submit-btn {
    background: linear-gradient(106.97deg, #fe8a48 -11.29%, #fda53e 91.8%);
    border-radius: 0.5rem;
    @include font(1rem, 700, 1.375rem);
    width: 21.25rem;
    height: 3rem;
    margin-top: 1.5rem;
  }

  .option {
    margin-top: 0.5rem;

    &__signup {
      @include font(0.875rem, 700, 0.5rem, $inactive-color);

      a {
        color: white;
        margin-right: 0.17rem;
      }
    }

    &__forget-password {
      display: block;
      text-align: center;
      @include font(0.875rem, 500, 0.5rem, $active-color);
      margin-top: 1.3rem;
    }
  }
}
</style>
