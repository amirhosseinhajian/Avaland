<template>
  <div>
    <LoginRegisterComponent :google-login-btn="googleLoginBtn">
      <template v-slot:form>
        <Form class="form" v-slot="{ errors }" @submit="redirect">
          <div class="form__text-item">
            <label for="password">رمزعبور جدید</label><br />
            <Field name="password" rules="required|password" type="password" />
            <div class="error">{{ errors.password }}</div>
          </div>
          <div class="form__text-item">
            <label for="confirmation">تکرار رمزعبور جدید</label><br />
            <Field
              name="confirmation"
              rules="confirmed:@password"
              type="password"
            />
            <div class="error">{{ errors.confirmation }}</div>
          </div>
          <button class="form__submit-btn" type="submit">تغيير رمز عبور</button>
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

const googleLoginBtn = false;

defineRule("required", (value) => {
  if (!value || !value.trim()) {
    return "وارد کردن این فیلد الزامی است.";
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

defineRule("confirmed", (value, [target]) => {
  if (value === target) {
    return true;
  }
  return "رمزهای عبور باید مطابقت داشته باشند.";
});

const router = useRouter();
const redirect = () => {
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
}
</style>
