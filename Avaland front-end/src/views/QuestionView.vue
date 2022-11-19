<template>
  <div>
    <LoginRegisterComponent :google-login-btn="googleLoginBtn">
      <template v-slot:form>
        <Form class="form" v-slot="{ errors }" @submit="redirect">
          <div class="form__text-item">
            <label for="questions">سوال</label><br />
            <select name="questions">
              <option value="لورم ایپسوم متن آماده">
                لورم ایپسوم متن آماده
              </option>
            </select>
          </div>
          <div class="form__text-item">
            <label for="answer">پاسخ</label><br />
            <Field
              name="answer"
              rules="required"
              type="text"
              value="لورم ایپسوم متن آماده"
            />
            <div class="error">{{ errors.answer }}</div>
          </div>
          <button class="form__submit-btn" type="submit">ثبت</button>
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

    input,
    select {
      width: 21.25rem;
      height: 3.5rem;
      margin-top: 0.5rem;
      background: rgba(70, 70, 70, 0.5);
      @include font(1rem, 500, 1.5rem);
      padding: 1rem;
      border-radius: 0.5rem;
    }

    select {
      cursor: pointer;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background-image: url("@/assets/icons/linear/select-arrow-down.svg");
      background-repeat: no-repeat;
      background-position-x: 1.4rem;
      background-position-y: 50%;
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
