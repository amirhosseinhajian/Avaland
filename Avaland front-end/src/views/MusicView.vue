<template>
  <LayoutView>
    <template v-slot:content>
      <ModalComponent v-show="removeMusicModal" @closeModal="removeMusic">
        <template v-slot:body>
          <div class="remove-music">
            <p class="remove-music__message">
              آیا از حذف این آهنگ اطمینان دارید؟
            </p>
            <button class="remove-music__remove-btn" @click="confirmRemove">
              حذف
            </button>
            <button class="remove-music__cancel-btn" @click="removeMusic">
              لغو
            </button>
          </div>
        </template>
      </ModalComponent>
      <ModalComponent v-show="editMusicModal" @closeModal="modifyMusic">
        <template v-slot:body>
          <div class="edit-music">
            <form
              action="/"
              method="post"
              enctype="multipart/form-data"
              @submit.prevent="saveNewMusicInfos"
            >
              <div class="row wrap">
                <div class="col65">
                  <div class="nim">
                    <div class="form-text-item">
                      <label for="music-name">نام آهنگ</label>
                      <input
                        type="text"
                        id="music-name"
                        name="music-name"
                        v-model="currentMusicName"
                        required
                      />
                    </div>
                    <!-- End Form Text Item -->
                    <div class="form-text-item">
                      <label for="album-name">نام آلبوم</label>
                      <input
                        type="text"
                        id="album-name"
                        name="album-name"
                        v-model="currentMusicAlbum"
                        required
                      />
                    </div>
                    <!-- End Form Text Item -->
                  </div>

                  <!-- </div>
											<div class="col"> -->
                  <div class="nim">
                    <div class="form-text-item">
                      <label for="singer">نام خواننده</label>
                      <input
                        type="text"
                        id="singer"
                        name="singer"
                        v-model="currentMusicSinger"
                        required
                      />
                    </div>
                    <!-- End Form Text Item -->
                    <div class="form-text-item">
                      <label for="duration">مدت زمان آهنگ</label>
                      <input
                        type="text"
                        id="duration"
                        name="duration"
                        :value="computeDuration(currentMusic.duration)"
                        disabled
                      />
                    </div>
                    <!-- End Form Text Item -->
                  </div>
                </div>
                <!-- End Col -->
                <div class="col30">
                  <div
                    class="form-photo-item"
                    ref="musicCoverBackgraound"
                    @click="choosePhoto"
                  >
                    <div class="overlay">
                      <img src="@/assets/icons/linear/camera.svg" alt="" />
                      <p>بارگذاری عکس</p>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      name="music-cover"
                      id="music-cover"
                      ref="imageInput"
                      @change="musicCoverUpload"
                    />
                  </div>
                  <!-- End Form Photo Item -->
                </div>
                <!-- End Col -->
              </div>
              <!-- End row -->
              <div class="row">
                <div class="col">
                  <div class="form-text-item">
                    <label for="lyric">متن آهنگ</label>
                    <textarea
                      name="lyric"
                      id="lyric"
                      v-model="currentMusicLyric"
                      required
                    >
                    </textarea>
                  </div>
                  <!-- End Form Text Item -->
                </div>
                <!-- End Col -->
              </div>
              <!-- End Row -->
              <div class="row">
                <div class="col">
                  <div class="form-button-item">
                    <button class="active-btn">ذخیره اطلاعات</button>
                    <button
                      type="button"
                      @click="modifyMusic"
                      class="in-active-btn"
                    >
                      لغو
                    </button>
                  </div>
                  <!-- End Form Button Item -->
                </div>
                <!-- End Col -->
              </div>
              <!-- End Row -->
            </form>
          </div>
        </template>
      </ModalComponent>
      <ModalComponent v-show="playlistModal" @closeModal="addToPlaylist">
        <template v-slot:header>
          <div class="tab">
            <div class="tab__select">
              <input
                v-model="selectedtab"
                type="radio"
                name="tab"
                id="create-playlist"
                value="create-playlist"
                checked
              />
              <label for="create-playlist"> ایجاد لیست پخش </label>
              <input
                v-model="selectedtab"
                type="radio"
                name="tab"
                id="select-playlist"
                value="select-playlist"
              />
              <label for="select-playlist"> انتخاب لیست پخش </label>
            </div>
            <div calss="tab__close-icon" @click="addToPlaylist">
              <i>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                    stroke="#999999"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.16992 14.83L14.8299 9.16998"
                    stroke="#999999"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.8299 14.83L9.16992 9.16998"
                    stroke="#999999"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </i>
            </div>
          </div>
          <hr />
        </template>
        <template v-slot:body>
          <div v-if="selectedtab === 'create-playlist'">
            <div class="playlist-input">
              <form @submit.prevent="addNewPlaylist">
                <label for="playlist-name">نام لیست پخش</label><br />
                <input
                  type="text"
                  name="playlist-name"
                  v-model="playlistName"
                  required
                />
                <button>ذخیره</button>
              </form>
            </div>
            <div class="new-musics-container">
              <div
                class="playlist-music-input"
                v-for="(music, index) in newlyAddToPlaylistMusics"
                :key="index"
              >
                <div class="music">
                  <figure class="music__image">
                    <img
                      :src="require(`@/assets/images/${music.img}`)"
                      alt=""
                    />
                  </figure>
                  <div class="music__info info">
                    <p class="info__name">{{ music.name }}</p>
                    <p class="info__singer">{{ music.singer }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="select-playlists">
              <label for="filter">نام لیست پخش</label><br />
              <input
                type="text"
                v-model="existPlaylist"
                id="filter"
                name="filter-playlists"
              />
            </div>
            <div class="playlists-container">
              <h1>لیست های پخش</h1>
              <div v-for="playlist in playlists" :key="playlist.name">
                <div class="playlist">
                  <div class="playlist__intro intro">
                    <figure class="playlist__image">
                      <img
                        :src="
                          require(`@/assets/images/${playlist.musics[0].img}`)
                        "
                        alt=""
                      />
                    </figure>
                    <div class="playlist__info info">
                      <p class="info__name">{{ playlist.name }}</p>
                      <p class="info__song-count">
                        {{ playlist.musics.length }} آهنگ
                      </p>
                    </div>
                  </div>
                  <button
                    class="playlist__add-btn"
                    @click="addMusicToExistPlaylist(playlist.name)"
                  >
                    اضافه کردن به لیست پخش
                  </button>
                </div>
              </div>
            </div>
          </div>
        </template>
        <template v-slot:footer>
          <hr v-if="selectedtab === 'create-playlist'" />
          <div v-if="selectedtab === 'create-playlist'" class="similar-musics">
            <h1 class="similar-musics__header">آهنگ های مشابه</h1>
            <div class="similar-musics__body">
              <div
                v-for="(music, index) in similarMusics"
                :key="index"
                class="similar-musics__container"
              >
                <div>
                  <figure class="similar-musics-info__image">
                    <img
                      :src="require(`@/assets/images/${music.img}`)"
                      alt=""
                    />
                  </figure>
                  <div class="similar-musics-info info">
                    <p class="info__name">{{ music.name }}</p>
                    <p class="info__singer">{{ music.singer }}</p>
                  </div>
                </div>
                <button
                  class="similar-musics__add-btn"
                  @click="addSimilarMusic(music.id)"
                >
                  اضافه کردن به لیست پخش
                </button>
              </div>
            </div>
          </div>
        </template>
      </ModalComponent>
      <section class="music-detail" :style="musicDetails">
        <figure>
          <img
            class="music-detail__image"
            :src="require(`@/assets/images/${currentMusic.img}`)"
            alt=""
          />
          <button class="music-detail__play-btn" @click="playMusic">
            <i>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
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
            </i>
          </button>
        </figure>
        <div>
          <h1 class="music-detail__name">{{ currentMusic.name }}</h1>
          <div class="music-detail__meta-data meta-data">
            <div class="meta-data__item">
              <i>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.1605 11.62C12.1305 11.62 12.1105 11.62 12.0805 11.62C12.0305 11.61 11.9605 11.61 11.9005 11.62C9.00055 11.53 6.81055 9.25 6.81055 6.44C6.81055 3.58 9.14055 1.25 12.0005 1.25C14.8605 1.25 17.1905 3.58 17.1905 6.44C17.1805 9.25 14.9805 11.53 12.1905 11.62C12.1805 11.62 12.1705 11.62 12.1605 11.62ZM12.0005 2.75C9.97055 2.75 8.31055 4.41 8.31055 6.44C8.31055 8.44 9.87055 10.05 11.8605 10.12C11.9105 10.11 12.0505 10.11 12.1805 10.12C14.1405 10.03 15.6805 8.42 15.6905 6.44C15.6905 4.41 14.0305 2.75 12.0005 2.75Z"
                    fill="#FFA928"
                  />
                  <path
                    d="M12.1696 22.55C10.2096 22.55 8.23961 22.05 6.74961 21.05C5.35961 20.13 4.59961 18.87 4.59961 17.5C4.59961 16.13 5.35961 14.86 6.74961 13.93C9.74961 11.94 14.6096 11.94 17.5896 13.93C18.9696 14.85 19.7396 16.11 19.7396 17.48C19.7396 18.85 18.9796 20.12 17.5896 21.05C16.0896 22.05 14.1296 22.55 12.1696 22.55ZM7.57961 15.19C6.61961 15.83 6.09961 16.65 6.09961 17.51C6.09961 18.36 6.62961 19.18 7.57961 19.81C10.0696 21.48 14.2696 21.48 16.7596 19.81C17.7196 19.17 18.2396 18.35 18.2396 17.49C18.2396 16.64 17.7096 15.82 16.7596 15.19C14.2696 13.53 10.0696 13.53 7.57961 15.19Z"
                    fill="#FFA928"
                  />
                </svg>
              </i>
              <p>{{ currentMusic.singer }}</p>
            </div>
            <div class="meta-data__item">
              <i>
                <svg
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
              </i>
              <p>{{ computeDuration() }}</p>
            </div>
          </div>
          <div class="music-detail__icons">
            <i @click="likeToggle">
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                :class="{ liked: currentMusic.isLike }"
              >
                <path
                  d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.69C2 5.6 4.49 3.1 7.56 3.1C9.38 3.1 10.99 3.98 12 5.34C13.01 3.98 14.63 3.1 16.44 3.1C19.51 3.1 22 5.6 22 8.69C22 15.69 15.52 19.82 12.62 20.81Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </i>
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
                <DropdownItem @click="addToPlaylist">
                  <template #icon>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                        stroke="#FFA928"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.90024 16.53C9.38024 16.01 10.1203 16.05 10.5403 16.62L11.1403 17.42C11.6103 18.05 12.3902 18.05 12.8602 17.42L13.4503 16.63C13.8703 16.07 14.6102 16.03 15.0902 16.54C16.1402 17.66 16.9902 17.29 16.9902 15.72V9.09C16.9902 6.72 16.4302 6.13 14.2102 6.13H9.77023C7.55023 6.13 6.99023 6.72 6.99023 9.09V15.72C7.00023 17.27 7.86024 17.64 8.90024 16.53Z"
                        stroke="#FFA928"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </template>
                  اضافه کردن به لیست پخش
                </DropdownItem>

                <DropdownItem @click="modifyMusic">
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
                  ویرایش آهنگ
                </DropdownItem>

                <DropdownItem @click="removeMusic">
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
                  حذف آهنگ
                </DropdownItem>
              </DropdownMenu>
            </DropdownComponent>
          </div>
        </div>
        <div class="lyric-container">
          <p class="music-detail__lyric">
            {{ lyric }}
          </p>
          <button class="read-more" @click="readMore">
            مشاهده بیشتر
            <svg
              width="9"
              height="7"
              viewBox="0 0 9 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.72281 6.01374C4.53281 6.01374 4.34281 5.94374 4.19281 5.79374L0.662813 2.26374C0.372813 1.97374 0.372813 1.49374 0.662813 1.20374C0.952812 0.913737 1.43281 0.913737 1.72281 1.20374L4.72281 4.20374L7.72281 1.20374C8.01281 0.913737 8.49281 0.913737 8.78281 1.20374C9.07281 1.49374 9.07281 1.97374 8.78281 2.26374L5.25281 5.79374C5.10281 5.94374 4.91281 6.01374 4.72281 6.01374Z"
                fill="#FFA928"
              />
            </svg>
          </button>
        </div>
      </section>
      <section class="related-musics">
        <h1 class="related-musics__header">محبوب ترین های مشابه</h1>
        <swiper
          :slidesPerView="6"
          :spaceBetween="30"
          :slidesPerGroup="1"
          :loop="true"
          :loopFillGroupWithBlank="true"
          :navigation="true"
          :modules="modules"
        >
          <swiper-slide v-for="music in musics" :key="music.id">
            <MusicComponent :music="music"></MusicComponent>
          </swiper-slide>
        </swiper>
      </section>
    </template>
  </LayoutView>
</template>

<script setup>
import MusicComponent from "@/components/MusicComponent.vue";
import ModalComponent from "@/components/Modal/ModalComponent.vue";
import DropdownComponent from "@/components/Dropdown/DropdownComponent.vue";
import DropdownMenu from "@/components/Dropdown/DropdownMenu.vue";
import DropdownItem from "@/components/Dropdown/DropdownItem.vue";
import { ref, onMounted, onBeforeMount, onUpdated, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper";
import LayoutView from "@/layout/LayoutView.vue";
import { useStore } from "vuex";
// import store from "@/store";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const route = useRoute();
const router = useRouter();
const store = useStore();

let selectedtab = ref("create-playlist");
let newlyAddToPlaylistMusics = ref([]);
let playlistName = ref(null);
let existPlaylist = ref(null);
let playlists = ref(store.state.user.playlists);
let removeMusicModal = ref(false);
let playlistModal = ref(false);
let editMusicModal = ref(false);
let currentMusicName = ref(null);
let currentMusicSinger = ref(null);
let currentMusicAlbum = ref(null);
let currentMusicImg = ref(null);
let currentMusicLyric = ref(null);
let musicCoverBackgraound = ref(null);
let imageInput = ref(null);

watch(existPlaylist, () => {
  playlists.value = store.state.user.playlists.filter((playlist) => {
    return playlist.name.includes(existPlaylist.value);
  });
});

let modules = [Pagination, Navigation];

const musics = computed(() => store.getters["musics/relatedMusics"]);

const similarMusics = [musics.value[0], musics.value[1], musics.value[2]];

function addToPlaylist() {
  playlistModal.value = !playlistModal.value;
}

function modifyMusic() {
  editMusicModal.value = !editMusicModal.value;
}

function removeMusic() {
  removeMusicModal.value = !removeMusicModal.value;
}

function confirmRemove() {
  removeMusic();
  store.dispatch("musics/removeMusic");
  alert("موزیک با موفقیت حذف شد!");
  router.push({ name: "home" });
}

const playMusic = () => {
  store.dispatch("musics/playMusic", route.params.musicId);
};

const currentMusic = computed(() => store.state.musics.currentMusic);

let showAll = ref(false);
let lyric = ref();
const readMore = () => {
  showAll.value = !showAll.value;
};
watch(showAll, () => {
  if (showAll.value) {
    lyric.value = currentMusic.value.lyric;
  } else {
    lyric.value = currentMusic.value.lyric.slice(0, 346);
  }
});

const updateCurrentMusicInfos = () => {
  currentMusicName.value = currentMusic.value.name;
  currentMusicSinger.value = currentMusic.value.singer;
  currentMusicAlbum.value = currentMusic.value.album;
  currentMusicImg.value = currentMusic.value.img;
  currentMusicLyric.value = currentMusic.value.lyric;
};

const updateMusicViewDetails = () => {
  const coverSRC = require(`@/assets/images/${currentMusic.value.img}`);
  musicDetails.value.background = `linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(${coverSRC})`;
  musicDetails.value.backgroundRepeat = "no-repeat";
  musicDetails.value.backgroundPosition = "center";
  musicDetails.value.backgroundSize = "cover";
  newlyAddToPlaylistMusics.value = [currentMusic.value];
  musicCoverBackgraound.value.style.backgroundImage = `url(${coverSRC})`;
};

const musicDetails = ref({});
onBeforeMount(() => {
  store.dispatch("musics/getMusicById", route.params.musicId);
  lyric.value = currentMusic.value.lyric.slice(0, 346);
  updateCurrentMusicInfos();
});
onMounted(() => {
  updateMusicViewDetails();
});
onUpdated(() => {
  store.dispatch("musics/getMusicById", route.params.musicId);
  showAll.value = false;
  lyric.value = currentMusic.value.lyric.slice(0, 346);
  updateMusicViewDetails();
  updateCurrentMusicInfos();
});

const computeDuration = () => {
  const totalSeccond = currentMusic.value.duration;
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

const likeToggle = () => {
  store.dispatch("musics/likeToggle");
};

const addSimilarMusic = (musicId) => {
  if (
    !newlyAddToPlaylistMusics.value.includes(
      similarMusics.find((music) => music.id === musicId)
    )
  ) {
    newlyAddToPlaylistMusics.value.push(
      similarMusics.find((music) => music.id === musicId)
    );
  }
};

const addNewPlaylist = () => {
  const playlists = store.state.user.playlists;
  if (playlists.find((playlist) => playlist.name === playlistName.value)) {
    alert("پلی لیستی با این نام از قبل وجود دارد.");
  } else {
    store.dispatch("user/addNewPlaylist", {
      playlist: playlistName.value,
      musics: [...newlyAddToPlaylistMusics.value],
    });
    alert("پلی لیست جدید با موفقیت ایجاد شد.");
    playlistModal.value = false;
  }
};

const addMusicToExistPlaylist = (playlistName) => {
  store.dispatch("user/addMusicToPlaylist", playlistName);
  alert("موزیک با موفقیت به پلی لیست اضافه شد.");
};

const saveNewMusicInfos = () => {
  store.dispatch("musics/editMusic", {
    musicName: currentMusicName.value,
    musicSinger: currentMusicSinger.value,
    musicAlbum: currentMusicAlbum.value,
    musicLyric: currentMusicLyric.value,
    musicImg: currentMusicImg.value,
  });
  modifyMusic();
  alert("ویرایش موزیک با موفقیت اتجام شد!");
};

const choosePhoto = () => {
  imageInput.value.click();
};

const musicCoverUpload = (event) => {
  const musicImage = event.target.files[0];
  uploadFile(musicImage);
};

const uploadFile = (file) => {
  const reader = new FileReader();
  reader.addEventListener("load", (event) => {
    const result = event.target.result;
    musicCoverBackgraound.value.style.backgroundImage = `url(${result})`;
  });

  reader.readAsDataURL(file);
};
</script>

<style lang="scss">
.music-detail {
  padding: 3.25rem;
  margin-top: 3.25rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  border-radius: 1rem;
  position: relative;
  z-index: 0;

  &__image {
    border-radius: 1.875rem;
    max-width: 13.5rem;
    max-height: 13.5rem;
    min-width: 13.5rem;
    min-height: 13.5rem;
  }

  figure {
    position: relative;

    button {
      position: absolute;
      bottom: -12px;
      right: -12px;
    }
  }

  figure + div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-bottom: 1.5rem;
    margin: 0 4rem 0 5rem;
  }

  &__name {
    @include font(2rem, 900, 2.8rem);
  }

  .meta-data {
    margin: 0 5rem 0 6.25rem;
    display: flex;
    gap: 2.875rem;
    margin: 1.2rem 0;
    align-items: center;

    div:nth-child(1) {
      position: relative;
    }

    div:nth-child(1)::after {
      content: "";
      width: 1px;
      height: 15px;
      background: $inactive-color;
      position: absolute;
      left: -1.5rem;
    }

    &__item {
      display: flex;
      gap: 0.7875rem;
      white-space: nowrap;
      align-items: center;

      p {
        @include font(1.125rem, 500, 1.575rem, $inactive-color);
      }

      i {
        width: 24px;
        height: 24px;
      }
    }
  }

  &__icons {
    display: flex;
    gap: 1.5rem;
    white-space: nowrap;
    align-items: center;

    i {
      width: 36px;
      height: 36px;
      cursor: pointer;
    }

    i:last-child {
      width: 24px;
      height: 24px;
    }
    .liked {
      fill: $active-color;
      path {
        stroke: $active-color;
      }
    }
  }

  .lyric-container {
    max-width: 100%;
  }

  .read-more {
    margin-top: 0.625rem;
    background-color: transparent;
    @include font(0.875rem, 400, 1.5rem, $active-color);
    svg {
      margin-right: 0.75rem;
    }
  }

  &__play-btn {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: $active-color;
  }
}

.related-musics {
  margin-top: 4.5rem;

  &__header {
    @include font(1.25rem, 700, 1.5rem);
    margin-bottom: 2.5rem;
  }
}

.remove-music {
  &__message {
    @include font(1.125rem, 600, 1.5rem);
  }

  &__remove-btn {
    width: 19.375rem;
    height: 3.5rem;
    background-color: #f54444;
    @include font(1rem, 700, 1.4rem);
    border-radius: 0.5rem;
    margin-top: 1.5rem;
  }

  &__cancel-btn {
    width: 13.125rem;
    height: 3.5rem;
    background-color: #464646;
    @include font(1rem, 700, 1.4rem);
    border-radius: 0.5rem;
    margin-right: 1.5rem;
  }
}

.edit-music {
  width: 78.875rem;
  border-radius: 16px;

  .row {
    display: flex;
    margin-top: 2rem;
  }

  .row:first-child {
    margin-top: 0;
  }

  .col {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    width: 100%;
  }

  .form-text-item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  input[type="text"],
  textarea {
    width: 100%;
    height: 3rem;
    border-radius: 16px;
    background: $form-elements-bg-color;
    padding: 0.5rem;
    @include font(0.875rem, 600, 1.5rem, $inactive-color);
  }

  .col65 {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    flex: 65%;

    .form-text-item:last-of-type {
      @include min-media(992px) {
        margin-top: 2.5rem;
      }
    }

    .nim {
      flex: 50%;

      @include max-media(992px) {
        flex: 100%;
      }
    }

    input[type="text"] {
      width: 90%;

      @include max-media(992px) {
        width: 100%;
      }
    }

    label {
      @include max-media(992px) {
        margin-top: 1.5rem;
      }
    }
  }

  .col30 {
    flex: 30%;

    @include max-media(992px) {
      flex: 100%;
    }
  }

  .wrap {
    flex-wrap: wrap;

    @include max-media(992px) {
      .col30 {
        order: -1;
      }
    }
  }

  @include max-media(992px) {
    .form-photo-item {
      order: -1;
      height: 350px;
    }
  }

  textarea {
    resize: none;
    min-height: 18rem;
    text-align: justify;
    padding: 1rem;

    @include max-media(992px) {
      height: 54rem;
    }
  }

  .form-button-item {
    display: flex;
    gap: 0.8rem;
    justify-content: flex-end;

    @include max-media(992px) {
      height: 12rem;
    }
  }

  .active-btn {
    @include font(1rem, 700, 1.4rem);
    width: 13.75rem;
    height: 3.5rem;
    background: linear-gradient(106.97deg, #fe8a48 -11.29%, #fda53e 91.8%);
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      background: linear-gradient(106.97deg, #ff701d -11.29%, #f29429 91.8%);
    }

    @include max-media(992px) {
      width: 100%;
      @include font(0.875rem, 700, 1.25rem);
      height: 3rem;
    }
  }

  .in-active-btn {
    @include font(1rem, 700, 1.4rem);
    width: 9.375rem;
    height: 3.5rem;
    background: rgba(70, 70, 70, 0.3);
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      background: linear-gradient(
        106.97deg,
        rgba(72, 71, 71, 0.459) -11.29%,
        rgba(70, 70, 70, 0.525) 91.8%
      );
    }

    @include max-media(992px) {
      display: none;
    }
  }

  .form-photo-item {
    width: 100%;
    height: 100%;

    @include max-media(992px) {
      height: 180px;
      width: 100%;
      margin: 0 auto;
    }

    // background-image: url("@/assets/images/esharat.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;
    cursor: pointer;
  }

  .overlay {
    width: 100%;
    height: 33%;
    background: rgba(70, 70, 70, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
    @include font(0.875rem, 600, 1.5rem);
  }

  input[name="music-cover"] {
    display: none;
  }

  .form-photo-item:hover .overlay {
    background: rgb(70, 70, 70);
  }
}

.playlist-input {
  margin-top: 1.5rem;

  form {
    margin-top: 0.5rem;
  }

  input {
    width: 27.125rem;
    border-top-right-radius: 0.625rem;
    border-bottom-right-radius: 0.625rem;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    background-color: #464646;
    padding: 0.75rem 0.5rem 0.75rem 0;
    height: 3rem;
    color: white;
    font-size: 1rem;
    margin-top: 0.5rem;
  }

  button {
    width: 6.875rem;
    border-bottom-left-radius: 0.625rem;
    border-top-left-radius: 0.625rem;
    padding: 0.75rem 2.375rem;
    @include font(0.875rem, 600, 1.5rem);
    height: 3rem;
    background-color: #fc8f22;
  }
}

hr {
  width: 34rem;
  height: 1px;
  background-color: #ffffff26;
}

.new-musics-container {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2.25rem;
}

.playlist-music-input {
  width: 33%;

  .music {
    display: flex;
    align-items: center;
    margin-top: 1.75rem;

    &__image {
      img {
        width: 2.75rem;
        height: 2.75rem;
        border-radius: 0.625rem;
      }
    }

    .info {
      margin-right: 1rem;
      &__name {
        @include font(0.875rem, 600, 1.5rem, $active-color);
      }

      &__singer {
        @include font(0.75rem, 400, 1.5rem, $inactive-color);
      }
    }
  }
}

.similar-musics {
  margin-top: 1.5rem;

  &__header {
    @include font(1rem, 600, 1.5rem);
    margin-bottom: 0.5rem;
  }

  &__body {
    border-radius: 1rem;
    overflow: hidden;
    background-color: #3f3f3f;
    width: 34rem;

    .similar-musics__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem 0.75rem;
    }

    div:first-child {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    img {
      width: 4.5rem;
      height: 4.5rem;
      border-radius: 0.625rem;
    }

    .info {
      &__name {
        @include font(1rem, 700, 1.5rem);
      }

      &__singer {
        @include font(0.75rem, 400, 1.5rem, $inactive-color);
      }
    }
  }

  &__add-btn {
    @include font(0.875rem, 600, 1.5rem, $active-color);
    background-color: transparent;
  }
}

.tab {
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    cursor: pointer;
  }

  &__select {
    width: 17.8125rem;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      #fc8f22;
    border-radius: 0.625rem;
  }
  label {
    display: inline-block;
    width: 8.90625rem;
    height: 2.75rem;
    border-radius: 0.625rem;
    background-color: transparent;
    text-align: center;
    line-height: 2.75rem;
    cursor: pointer;
    transition: 0.2s ease-out;
    user-select: none;
  }

  input {
    display: none;
  }

  input:checked + label {
    background-color: #fc8f22;
  }
}

.select-playlists {
  margin-top: 1.5rem;
  input {
    margin-top: 0.5rem;
    width: 34rem;
    height: 3rem;
    color: white;
    font-size: 1rem;
    padding: 0.5rem;
  }
}

.playlists-container {
  h1 {
    margin-top: 1.5rem;
    @include font(1rem, 600, 1.5rem);
  }
  .playlist {
    width: 34rem;
    height: 5.5rem;
    display: flex;
    margin-top: 0.5rem;
    background-color: #3f3f3f;
    border-radius: 0.625rem;
    margin-bottom: 1rem;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem 0.75rem;
    justify-content: space-between;

    figure {
      width: 4.5rem;
      height: 4.5rem;
    }

    img {
      width: 4.5rem;
      height: 4.5rem;
      border-radius: 0.625rem;
    }

    .info {
      margin-right: 0.75rem;

      &__name {
        @include font(1rem, 700, 1.5rem);
      }

      &__song-count {
        @include font(0.75rem, 400, 1.5rem, $inactive-color);
      }
    }

    &__intro {
      display: flex;
      align-items: center;
    }
    &__add-btn {
      background-color: transparent;
      @include font(0.875rem, 600, 1.5rem, $active-color);
    }
  }

  div:last-child .playlist {
    margin-bottom: 0;
  }
}

.swiper {
  padding: 0 0 8.2rem;
  margin-bottom: 3rem;
}

.swiper-button-next,
.swiper-button-prev {
  color: white;
  top: calc(50% - 3.5rem);
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  color: black;
}
</style>
