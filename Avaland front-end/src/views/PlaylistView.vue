<template>
  <LayoutView>
    <template v-slot:content>
      <main>
        <section class="playlist-intro">
          <figure class="playlist-intro__image">
            <img
              :src="require(`@/assets/images/${playlist.musics[0].img}`)"
              alt=""
            />
            <button class="playlist-intro__play-btn" @click="playPlaylist">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#FFFFFF"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12V8.44C4 4.02 7.13 2.21 10.96 4.42L14.05 6.2L17.14 7.98C20.97 10.19 20.97 13.81 17.14 16.02L14.05 17.8L10.96 19.58C7.13 21.79 4 19.98 4 15.56V12Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </figure>
          <div class="playlist-intro__details detail">
            <div class="detail__badge">لیست پخش</div>
            <div class="detail__title">
              <h2>{{ playlist.name }}</h2>
            </div>

            <div class="detail__meta-data meta-data">
              <div class="meta-data__item">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 3.75H2C1.59 3.75 1.25 3.41 1.25 3C1.25 2.59 1.59 2.25 2 2.25H22C22.41 2.25 22.75 2.59 22.75 3C22.75 3.41 22.41 3.75 22 3.75Z"
                    fill="#FFA928"
                  />
                  <path
                    d="M11 9.75H2C1.59 9.75 1.25 9.41 1.25 9C1.25 8.59 1.59 8.25 2 8.25H11C11.41 8.25 11.75 8.59 11.75 9C11.75 9.41 11.41 9.75 11 9.75Z"
                    fill="#FFA928"
                  />
                  <path
                    d="M8 15.75H2C1.59 15.75 1.25 15.41 1.25 15C1.25 14.59 1.59 14.25 2 14.25H8C8.41 14.25 8.75 14.59 8.75 15C8.75 15.41 8.41 15.75 8 15.75Z"
                    fill="#FFA928"
                  />
                  <path
                    d="M6 21.75H2C1.59 21.75 1.25 21.41 1.25 21C1.25 20.59 1.59 20.25 2 20.25H6C6.41 20.25 6.75 20.59 6.75 21C6.75 21.41 6.41 21.75 6 21.75Z"
                    fill="#FFA928"
                  />
                  <path
                    d="M11.8402 22.7501C10.2302 22.7501 8.91016 21.4401 8.91016 19.8201C8.91016 18.2101 10.2202 16.8901 11.8402 16.8901C13.4602 16.8901 14.7702 18.2001 14.7702 19.8201C14.7702 21.4401 13.4602 22.7501 11.8402 22.7501ZM11.8402 18.4001C11.0502 18.4001 10.4102 19.0401 10.4102 19.8301C10.4102 20.6201 11.0502 21.2601 11.8402 21.2601C12.6302 21.2601 13.2702 20.6201 13.2702 19.8301C13.2702 19.0401 12.6302 18.4001 11.8402 18.4001Z"
                    fill="#FFA928"
                  />
                  <path
                    d="M14.02 20.5701C13.61 20.5701 13.27 20.2301 13.27 19.8201V11.0501C13.27 9.84007 13.99 8.8901 15.16 8.5801L19.51 7.39009C20.46 7.13009 21.28 7.23007 21.86 7.68007C22.44 8.13007 22.74 8.86007 22.74 9.87007V18.3801C22.74 18.7901 22.4 19.1301 21.99 19.1301C21.58 19.1301 21.24 18.7901 21.24 18.3801V9.87007C21.24 9.37007 21.14 9.02008 20.95 8.88008C20.76 8.73008 20.37 8.72005 19.9 8.85005L15.55 10.0401C15.26 10.1201 14.77 10.3601 14.77 11.0701V19.8401C14.77 20.2401 14.43 20.5701 14.02 20.5701Z"
                    fill="#FFA928"
                  />
                  <path
                    d="M19.8201 21.3C18.2101 21.3 16.8901 19.9901 16.8901 18.3701C16.8901 16.7601 18.2001 15.4401 19.8201 15.4401C21.4401 15.4401 22.7501 16.7501 22.7501 18.3701C22.7501 19.9901 21.4401 21.3 19.8201 21.3ZM19.8201 16.9501C19.0301 16.9501 18.3901 17.5901 18.3901 18.3801C18.3901 19.1701 19.0301 19.8101 19.8201 19.8101C20.6101 19.8101 21.2501 19.1701 21.2501 18.3801C21.2501 17.5901 20.6101 16.9501 19.8201 16.9501Z"
                    fill="#FFA928"
                  />
                  <path
                    d="M14.0202 14.35C13.6902 14.35 13.3902 14.13 13.3002 13.8C13.1902 13.4 13.4302 12.9901 13.8302 12.8801L21.8102 10.7001C22.2102 10.5901 22.6202 10.83 22.7302 11.23C22.8402 11.63 22.6002 12.0401 22.2002 12.1501L14.2202 14.3301C14.1502 14.3401 14.0802 14.35 14.0202 14.35Z"
                    fill="#FFA928"
                  />
                </svg>
                <p>{{ playlist.musics.length }} ترانه</p>
              </div>
              <div class="meta-data__item">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                    fill="#FFA928"
                  />
                  <path
                    d="M15.7101 15.93C15.5801 15.93 15.4501 15.9 15.3301 15.82L12.2301 13.97C11.4601 13.51 10.8901 12.5 10.8901 11.61V7.51001C10.8901 7.10001 11.2301 6.76001 11.6401 6.76001C12.0501 6.76001 12.3901 7.10001 12.3901 7.51001V11.61C12.3901 11.97 12.6901 12.5 13.0001 12.68L16.1001 14.53C16.4601 14.74 16.5701 15.2 16.3601 15.56C16.2101 15.8 15.9601 15.93 15.7101 15.93Z"
                    fill="#FFA928"
                  />
                </svg>
                <p>{{ computePlaylistDuration() }}</p>
              </div>
            </div>
            <div class="detail__icons">
              <input type="checkbox" id="intro-like" class="like" hidden />
              <label
                for="intro-like"
                @click="playlistLikeToggle"
                :class="{ liked: playlist.isLike }"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.69C2 5.6 4.49 3.1 7.56 3.1C9.38 3.1 10.99 3.98 12 5.34C13.01 3.98 14.63 3.1 16.44 3.1C19.51 3.1 22 5.6 22 8.69C22 15.69 15.52 19.82 12.62 20.81Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </label>
              <i>
                <svg
                  viewBox="0 0 36 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.9304 20.105C30.3604 20.105 29.8804 19.67 29.8054 19.1C29.4454 15.71 27.6154 12.635 24.7954 10.685C24.2854 10.325 24.1654 9.63503 24.5104 9.12503C24.8704 8.61503 25.5754 8.49503 26.0704 8.84003C29.4304 11.165 31.5904 14.825 32.0254 18.86C32.0854 19.475 31.6504 20.03 31.0204 20.105C31.0054 20.105 30.9604 20.105 30.9304 20.105Z"
                    fill="white"
                  />
                  <path
                    d="M5.23584 20.1799C5.19084 20.1799 5.16084 20.1799 5.11584 20.1799C4.50084 20.1049 4.05084 19.5499 4.11084 18.9349C4.51584 14.8999 6.66084 11.2549 9.97584 8.8999C10.4858 8.5399 11.1908 8.6599 11.5508 9.1699C11.9108 9.6799 11.7908 10.3849 11.2808 10.7449C8.49083 12.7099 6.69084 15.7849 6.34584 19.1749C6.30084 19.7449 5.80584 20.1799 5.23584 20.1799Z"
                    fill="white"
                  />
                  <path
                    d="M18.0899 34.415C15.8699 34.415 13.7549 33.905 11.7749 32.915C11.2199 32.63 10.9949 31.955 11.2799 31.4C11.5649 30.845 12.2399 30.62 12.7949 30.905C16.0349 32.54 19.9349 32.57 23.2049 30.995C23.7599 30.725 24.4349 30.965 24.7049 31.52C24.9749 32.075 24.7349 32.75 24.1799 33.02C22.2599 33.95 20.2199 34.415 18.0899 34.415Z"
                    fill="white"
                  />
                  <path
                    d="M18.0899 13.16C15.1649 13.16 12.7949 10.79 12.7949 7.86501C12.7949 4.94001 15.1649 2.57001 18.0899 2.57001C21.0149 2.57001 23.3849 4.94001 23.3849 7.86501C23.3849 10.79 20.9999 13.16 18.0899 13.16ZM18.0899 4.83501C16.4099 4.83501 15.0449 6.20001 15.0449 7.88001C15.0449 9.56001 16.4099 10.925 18.0899 10.925C19.7699 10.925 21.1349 9.56001 21.1349 7.88001C21.1349 6.20001 19.7549 4.83501 18.0899 4.83501Z"
                    fill="white"
                  />
                  <path
                    d="M7.24422 31.505C4.31922 31.505 1.94922 29.135 1.94922 26.21C1.94922 23.3 4.31922 20.915 7.24422 20.915C10.1692 20.915 12.5392 23.285 12.5392 26.21C12.5392 29.12 10.1692 31.505 7.24422 31.505ZM7.24422 23.165C5.56422 23.165 4.19922 24.53 4.19922 26.21C4.19922 27.89 5.56422 29.255 7.24422 29.255C8.92422 29.255 10.2892 27.89 10.2892 26.21C10.2892 24.53 8.92422 23.165 7.24422 23.165Z"
                    fill="white"
                  />
                  <path
                    d="M28.7559 31.505C25.8309 31.505 23.4609 29.135 23.4609 26.21C23.4609 23.3 25.8309 20.915 28.7559 20.915C31.6809 20.915 34.0509 23.285 34.0509 26.21C34.0359 29.12 31.6659 31.505 28.7559 31.505ZM28.7559 23.165C27.0759 23.165 25.7109 24.53 25.7109 26.21C25.7109 27.89 27.0759 29.255 28.7559 29.255C30.4359 29.255 31.8009 27.89 31.8009 26.21C31.7859 24.53 30.4359 23.165 28.7559 23.165Z"
                    fill="white"
                  />
                </svg>
              </i>
              <DropdownComponent>
                <template #toggle>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-v-3b104551=""
                  >
                    <path
                      d="M14 5C14 3.9 13.1 3 12 3C10.9 3 10 3.9 10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5Z"
                      fill="white"
                      stroke="white"
                      stroke-width="1.5"
                      data-v-3b104551=""
                    ></path>
                    <path
                      d="M14 19C14 17.9 13.1 17 12 17C10.9 17 10 17.9 10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19Z"
                      fill="white"
                      stroke="white"
                      stroke-width="1.5"
                      data-v-3b104551=""
                    ></path>
                    <path
                      d="M14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12Z"
                      fill="white"
                      stroke="white"
                      stroke-width="1.5"
                      data-v-3b104551=""
                    ></path>
                  </svg>
                </template>

                <DropdownMenu>
                  <DropdownItem @click="modalToggle">
                    <template #icon>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998"
                          stroke="#F54444"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97"
                          stroke="#F54444"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M18.8504 9.14001L18.2004 19.21C18.0904 20.78 18.0004 22 15.2104 22H8.79039C6.00039 22 5.91039 20.78 5.80039 19.21L5.15039 9.14001"
                          stroke="#F54444"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.3301 16.5H13.6601"
                          stroke="#F54444"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.5 12.5H14.5"
                          stroke="#F54444"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </template>
                    حذف
                  </DropdownItem>

                  <DropdownItem>
                    <template #icon>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13"
                          stroke="#FFA928"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16.0399 3.02001L8.15988 10.9C7.85988 11.2 7.55988 11.79 7.49988 12.22L7.06988 15.23C6.90988 16.32 7.67988 17.08 8.76988 16.93L11.7799 16.5C12.1999 16.44 12.7899 16.14 13.0999 15.84L20.9799 7.96001C22.3399 6.60001 22.9799 5.02001 20.9799 3.02001C18.9799 1.02001 17.3999 1.66001 16.0399 3.02001Z"
                          stroke="#FFA928"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.9102 4.15002C15.5802 6.54002 17.4502 8.41002 19.8502 9.09002"
                          stroke="#FFA928"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </template>
                    تغییر نام لیست
                  </DropdownItem>
                </DropdownMenu>
              </DropdownComponent>
            </div>
          </div>
        </section>

        <section class="play-list">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>عنوان</th>
                <th>آلبوم</th>
                <th>تاریخ انتشار</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(music, index) in playlist.musics"
                :key="index"
                :class="{
                  playing:
                    musicPlayerCurrentPlaylist === playlist.name &&
                    musicPlayerCurrentMusicIndex === index &&
                    !isPlaylistEnded,
                }"
              >
                <td>
                  <span
                    :class="{
                      hidden:
                        musicPlayerCurrentPlaylist === playlist.name &&
                        musicPlayerCurrentMusicIndex === index &&
                        !isPlaylistEnded &&
                        !isMusicPause,
                    }"
                    >{{ index + 1 }}</span
                  >
                  <svg
                    v-show="!isMusicPause"
                    width="30"
                    height="24"
                    viewBox="0 0 30 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="music-animation-svg"
                  >
                    <path
                      d="M16.4166 1.006C16.831 0.9237 17.3802 1.1707 17.3576 1.6535C17.3603 8.5524 17.3609 15.4513 17.3576 22.3503C17.3769 22.7115 17.0369 22.9732 16.7022 22.9984C16.3004 23.0655 15.7758 22.8251 15.7898 22.3622C15.7825 15.4766 15.7884 8.5909 15.7871 1.7059C15.7439 1.3367 16.066 1.0359 16.4166 1.006Z"
                      fill="#FFA928"
                    />
                    <path
                      class="delay"
                      d="M6.85492 3.86169C7.17102 3.77736 7.55285 3.82982 7.78063 4.0815C7.96391 4.28536 7.91477 4.57954 7.92274 4.83056C7.92008 9.70013 7.92207 14.5697 7.92207 19.4393C7.92871 19.6398 7.87824 19.8576 7.71156 19.9858C7.38617 20.2435 6.87617 20.2421 6.55344 19.9818C6.39008 19.8523 6.3416 19.6372 6.34824 19.4386C6.3509 14.4568 6.34625 9.47501 6.35024 4.49322C6.32965 4.18841 6.56871 3.9281 6.85492 3.86169Z"
                      fill="#FFA928"
                    />
                    <path
                      d="M19.4077 3.87137C19.7344 3.77243 20.1421 3.82422 20.3739 4.09516C20.5465 4.29969 20.4974 4.58391 20.506 4.83028C20.5034 9.70118 20.5053 14.5721 20.5053 19.4423C20.5113 19.6342 20.4648 19.8407 20.3121 19.9696C19.9834 20.2465 19.4462 20.2458 19.1201 19.9656C18.97 19.8368 18.9255 19.6329 18.9322 19.443C18.9328 14.6372 18.9322 9.83133 18.9322 5.02618C18.9362 4.79176 18.9149 4.55602 18.9521 4.32426C18.9973 4.09848 19.1958 3.93579 19.4077 3.87137Z"
                      fill="#FFA928"
                    />
                    <path
                      class="delay"
                      d="M13.0991 6.39351C13.4165 6.29191 13.8063 6.33308 14.05 6.57613C14.1875 6.70761 14.2154 6.90484 14.2134 7.08613C14.2121 10.3626 14.2121 13.6398 14.2134 16.9162C14.22 17.1141 14.1736 17.3286 14.0122 17.4594C13.6901 17.7231 13.1781 17.7264 12.8514 17.4694C12.6827 17.3406 12.6309 17.1214 12.6396 16.9196C12.6416 13.6185 12.6376 10.3168 12.6409 7.01507C12.6216 6.72886 12.8302 6.47187 13.0991 6.39351Z"
                      fill="#FFA928"
                    />
                    <path
                      d="M3.60135 6.58952C3.92409 6.45869 4.33514 6.48858 4.59877 6.73096C4.75549 6.86908 4.78338 7.08756 4.77873 7.28479C4.77608 10.4524 4.7794 13.6206 4.77741 16.7882C4.78604 16.996 4.70303 17.2125 4.52506 17.3301C4.17311 17.5658 3.63389 17.5446 3.34104 17.2225C3.16772 17.0279 3.20956 16.751 3.20358 16.5119C3.20823 13.3942 3.20026 10.2757 3.20756 7.15795C3.19959 6.90627 3.37092 6.6785 3.60135 6.58952Z"
                      fill="#FFA928"
                    />
                    <path
                      class="delay"
                      d="M25.6472 6.57803C25.9833 6.45451 26.4162 6.50033 26.6619 6.78056C26.8147 6.95455 26.7941 7.20025 26.7967 7.41541C26.7927 10.5365 26.7961 13.6576 26.7947 16.778C26.8167 17.0516 26.652 17.3186 26.3923 17.4115C25.9527 17.6134 25.2302 17.4162 25.2262 16.8517C25.2176 13.639 25.2242 10.4256 25.2229 7.21287C25.1983 6.93197 25.3823 6.66635 25.6472 6.57803Z"
                      fill="#FFA928"
                    />
                    <path
                      d="M0.479334 8.57498C0.921599 8.38307 1.63414 8.59158 1.62816 9.15537C1.63547 11.0121 1.6275 12.8695 1.63215 14.7269C1.63547 14.9168 1.6089 15.1266 1.46148 15.2634C1.15867 15.5476 0.65199 15.5629 0.312654 15.3351C0.133357 15.2183 0.0496852 15.0024 0.0589821 14.7939C0.0576539 12.9332 0.058318 11.0719 0.0589821 9.21115C0.0337477 8.93092 0.215037 8.66463 0.479334 8.57498Z"
                      fill="#FFA928"
                    />
                    <path
                      class="delay"
                      d="M22.52 8.5683C22.8427 8.4574 23.2451 8.49923 23.4922 8.75091C23.6316 8.88771 23.6515 9.09158 23.6502 9.27685C23.6469 11.1143 23.6509 12.9524 23.6482 14.7899C23.6575 15.0024 23.5705 15.2249 23.3846 15.3404C23.0419 15.5615 22.5352 15.5436 22.2377 15.2534C22.0764 15.1007 22.073 14.8656 22.0744 14.6597C22.081 12.821 22.0697 10.9828 22.0797 9.1447C22.0711 8.87576 22.2743 8.64798 22.52 8.5683Z"
                      fill="#FFA928"
                    />
                    <path
                      d="M28.8283 8.56104C29.1524 8.45611 29.5561 8.5026 29.7959 8.76225C29.926 8.89904 29.9433 9.09561 29.9426 9.2749C29.9393 11.1157 29.9433 12.9558 29.9406 14.7966C29.9486 15.0011 29.8676 15.2136 29.6929 15.3305C29.3536 15.5629 28.8409 15.5496 28.5375 15.2621C28.3887 15.1273 28.3641 14.9168 28.3675 14.7275C28.3721 12.8688 28.3641 11.0101 28.3715 9.15139C28.3608 8.87447 28.572 8.63807 28.8283 8.56104Z"
                      fill="#FFA928"
                    />
                    <path
                      class="delay"
                      d="M9.9133 9.1866C10.2447 9.0605 10.6716 9.101 10.922 9.3706C11.0502 9.5047 11.0701 9.698 11.0688 9.8746C11.0661 11.3163 11.0701 12.7573 11.0668 14.199C11.0754 14.4174 10.9711 14.6386 10.7786 14.7501C10.4306 14.9533 9.9332 14.9294 9.6443 14.6326C9.5142 14.4998 9.4923 14.3065 9.4943 14.1306C9.4976 12.6869 9.4929 11.2432 9.4963 9.7996C9.4763 9.5266 9.659 9.2756 9.9133 9.1866Z"
                      fill="#FFA928"
                    />
                  </svg>
                </td>
                <td>
                  <div class="music">
                    <figure class="music__image">
                      <img
                        :src="require(`@/assets/images/${music.img}`)"
                        alt="music image"
                      />
                      <button v-show="!isMusicPause" @click="pauseMusicPlayer">
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="14" cy="14.0001" r="14" fill="#FFA928" />
                          <path
                            d="M13.125 18.8389V9.16139C13.125 8.24264 12.799 7.87514 11.9755 7.87514H9.89951C9.07598 7.87514 8.75 8.24264 8.75 9.16139V18.8389C8.75 19.7576 9.07598 20.1251 9.89951 20.1251H11.9755C12.799 20.1251 13.125 19.7576 13.125 18.8389Z"
                            fill="white"
                          />
                          <path
                            d="M20.125 18.8389V9.16139C20.125 8.24264 19.799 7.87514 18.9755 7.87514H16.8995C16.0817 7.87514 15.75 8.24264 15.75 9.16139V18.8389C15.75 19.7576 16.076 20.1251 16.8995 20.1251H18.9755C19.799 20.1251 20.125 19.7576 20.125 18.8389Z"
                            fill="white"
                          />
                        </svg>
                      </button>
                    </figure>
                    <div class="music__info info">
                      <p class="info__title">{{ music.name }}</p>
                      <p class="info__singer">{{ music.singer }}</p>
                    </div>
                  </div>
                </td>
                <td>{{ music.album }}</td>
                <td>{{ computePublishTime(music.publishDate) }}</td>
                <td>
                  <span>{{ computeDuration(music.duration) }}</span>
                  <input type="checkbox" :id="music.id" class="like" hidden />
                  <label
                    :for="music.id"
                    @click="musicLikeToggle(music.id)"
                    :class="{ liked: music.isLike }"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.69C2 5.6 4.49 3.1 7.56 3.1C9.38 3.1 10.99 3.98 12 5.34C13.01 3.98 14.63 3.1 16.44 3.1C19.51 3.1 22 5.6 22 8.69C22 15.69 15.52 19.82 12.62 20.81Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </label>

                  <span>
                    <MusicDropdownComponent></MusicDropdownComponent>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </template>
  </LayoutView>
</template>

<script setup>
import DropdownComponent from "@/components/Dropdown/DropdownComponent.vue";
import DropdownMenu from "@/components/Dropdown/DropdownMenu.vue";
import DropdownItem from "@/components/Dropdown/DropdownItem.vue";
import MusicDropdownComponent from "@/components/MusicDropdownComponent.vue";
import LayoutView from "../layout/LayoutView.vue";
import { useStore } from "vuex";
import { computed } from "vue";
import { useRoute } from "vue-router";

const store = useStore();
const route = useRoute();

const musicPlayerCurrentPlaylist = computed(
  () => store.state.musics.musicPlayer.playlistName
);
const musicPlayerCurrentMusicIndex = computed(
  () => store.state.musics.musicPlayer.currentMusicIndex
);

const isMusicPause = computed(
  () => store.state.musics.musicPlayer.pauseMusicPlayer
);

const isPlaylistEnded = computed(
  () => store.state.musics.musicPlayer.isPlaylistEnd
);

const playlist = computed(() =>
  store.state.user.playlists.find(
    (playlist) => playlist.name === route.params.playlistName
  )
);

const computeDuration = (duration) => {
  const minute =
    Math.trunc(duration / 60) < 10
      ? "0" + Math.trunc(duration / 60)
      : Math.trunc(duration / 60);
  let decimalPart = duration / 60 - Math.floor(duration / 60);
  const seccond =
    Math.round(decimalPart * 60) < 10
      ? "0" + Math.round(decimalPart * 60)
      : Math.round(decimalPart * 60);
  return minute + ":" + seccond;
};

const computePlaylistDuration = () => {
  const totalSeccond = playlist.value.musics.reduce((acc, music) => {
    return acc + music.duration;
  }, 0);
  const hour = Math.floor(totalSeccond / 3600);
  const minute = Math.floor((totalSeccond % 3600) / 60);
  const seccond = Math.floor((totalSeccond % 3600) % 60);
  let result = hour > 0 ? `${hour} ساعت` : "";
  if (result.length > 0 && minute > 0) {
    result += " و ";
  }
  result += minute > 0 ? `${minute} دقیقه` : "";
  if (result.length > 0 && seccond > 0) {
    result += " و ";
  }
  result += seccond > 0 ? `${seccond} ثانیه` : "";
  return result;
};

const playlistLikeToggle = () => {
  store.commit("user/playlistLikeToggle", playlist.value.name);
};

const musicLikeToggle = (musicId) => {
  store.commit("user/musicLikeToggle", {
    playlistName: playlist.value.name,
    musicId: musicId,
  });
};

const computePublishTime = (fullDate) => {
  const currentTime = new Date();
  if (currentTime.getFullYear() > fullDate.getFullYear()) {
    return currentTime.getFullYear() - fullDate.getFullYear() + " سال پیش";
  } else if (currentTime.getMonth() > fullDate.getMonth()) {
    return currentTime.getMonth() - fullDate.getMonth() + " ماه پیش";
  } else if (currentTime.getDate() > fullDate.getDate()) {
    return currentTime.getDate() - fullDate.getDate() + " روز پیش";
  } else if (currentTime.getHours() > fullDate.getHours()) {
    return currentTime.getHours() - fullDate.getHours() + " ساعت پیش";
  } else if (currentTime.getMinutes() > fullDate.getMinutes()) {
    return currentTime.getMinutes() - fullDate.getMinutes() + " دقیقه پیش";
  } else {
    return currentTime.getSeconds() - fullDate.getSeconds() + " ثانیه پیش";
  }
};

const playPlaylist = () => {
  store.dispatch("musics/playPlaylist", {
    musics: playlist.value.musics,
    name: playlist.value.name,
  });
};

const pauseMusicPlayer = () => {
  store.dispatch("musics/setMusicPlayerToPause");
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/playlist.scss";
</style>
