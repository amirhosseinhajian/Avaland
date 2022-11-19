<template>
  <aside>
    <nav class="menu">
      <router-link to="/" class="menu__logo">
        <img src="@/assets/images/logo.svg" alt="Logo" />
      </router-link>

      <ul class="navbar menu__navbar">
        <li class="navbar__item">
          <router-link :to="{ name: 'home' }" class="nav-link">
            <i class="nav-link__logo">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.04 6.82L14.28 2.79C12.71 1.69 10.3 1.75 8.79 2.92L3.78 6.83C2.78 7.61 1.99 9.21 1.99 10.47V17.37C1.99 19.92 4.06 22 6.61 22H17.39C19.94 22 22.01 19.93 22.01 17.38V10.6C22.01 9.25 21.14 7.59 20.04 6.82ZM12.75 18C12.75 18.41 12.41 18.75 12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18Z"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </i>
            صفحه اصلی
          </router-link>
        </li>

        <li class="navbar__item">
          <router-link :to="{ name: 'search' }" class="nav-link">
            <i class="nav-link__logo">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.5 8C10.47 8 8 10.48 8 13.5C8 14.87 9.12 16 10.5 16C13.52 16 16 13.52 16 10.5C16 9.13 14.87 8 13.5 8Z"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </i>
            جستجو
          </router-link>
        </li>

        <li class="navbar__item">
          <router-link :to="{ name: 'play-music' }" class="nav-link">
            <i class="nav-link__logo">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 12V8.44C4 4.02 7.13 2.21 10.96 4.42L14.05 6.2L17.14 7.98C20.97 10.19 20.97 13.81 17.14 16.02L14.05 17.8L10.96 19.58C7.13 21.79 4 19.98 4 15.56V12Z"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </i>
            پخش آهنگ
          </router-link>
        </li>

        <li class="navbar__item">
          <router-link :to="{ name: 'most-popular' }" class="nav-link">
            <i class="nav-link__logo">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.69C2 5.6 4.49 3.1 7.56 3.1C9.38 3.1 10.99 3.98 12 5.34C13.01 3.98 14.63 3.1 16.44 3.1C19.51 3.1 22 5.6 22 8.69C22 15.69 15.52 19.82 12.62 20.81Z"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </i>
            محبوب ترین ها
          </router-link>
        </li>

        <li class="navbar__item">
          <router-link :to="{ name: 'list-playlist' }" class="nav-link">
            <i class="nav-link__logo">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.89999 16.53C9.37999 16.01 10.12 16.05 10.54 16.62L11.14 17.42C11.61 18.05 12.39 18.05 12.86 17.42L13.45 16.63C13.87 16.07 14.61 16.03 15.09 16.54C16.14 17.66 16.99 17.29 16.99 15.72V9.09C16.99 6.72 16.43 6.13 14.21 6.13H9.76999C7.54999 6.13 6.98999 6.72 6.98999 9.09V15.72C6.99999 17.27 7.85999 17.64 8.89999 16.53Z"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </i>
            لیست های پخش
          </router-link>
        </li>

        <li class="navbar__item">
          <router-link :to="{ name: 'music-upload-1' }" class="nav-link">
            <i class="nav-link__logo">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.44 8.9C20.04 9.21 21.51 11.06 21.51 15.11V15.24C21.51 19.71 19.72 21.5 15.25 21.5H8.73998C4.26998 21.5 2.47998 19.71 2.47998 15.24V15.11C2.47998 11.09 3.92998 9.24 7.46998 8.91"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 2V14.88"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.35 12.65L12 16L8.65002 12.65"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </i>
            آپلود آهنگ
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup></script>

<style lang="scss" scoped>
.nav-link.router-link-active {
  color: $active-color;

  &::before {
    height: 100%;
  }

  .nav-link__logo {
    stroke: $active-color;
  }
}
</style>
