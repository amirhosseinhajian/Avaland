<template>
  <LayoutView>
    <template v-slot:content>
      <section>
        <main>
          <!-- ======= Breadcrumbs ======= -->
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb__item"><a href="#">بارگذاری آهنگ</a></li>
              <li class="breadcrumb__item_active" aria-current="page">
                ذخیره اطلاعات
              </li>
            </ol>
          </nav>
          <!-- End Breadcrumbs -->

          <!-- ======= Upload Area ======= -->
          <div class="upload-area">
            <!-- Upload Area Header -->
            <div class="upload-area__header">
              <p>بارگذاری آهنگ</p>
            </div>
            <!-- End Upload Area Header -->
            <!-- Upload Area Body -->
            <div class="upload-area__body">
              <!-- Drop Zoon -->
              <div class="drop-zoon">
                <p class="drop-zoon__paragraph">اتمام بارگذاری</p>
                <input
                  type="file"
                  id="input-music-file"
                  class="drop-zoon__file-input"
                  accept="audio/*"
                />
                <!-- Progress Bar  -->
                <div id="uploadedFile" class="drop-zoon__bar">
                  <div class="drop-zoon__progress"></div>
                  <span>100%</span>
                </div>
                <!-- End Progress Bar -->
              </div>
              <!-- End dropzone -->
              <!-- Upload Area Footer -->
              <div class="upload-area__info">
                <img src="@/assets/icons/bold/info-circle-orange.svg" alt="" />
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است
                </p>
              </div>
              <!-- End Upload Area Footer -->
            </div>
            <!-- End Upload Area Body -->
          </div>
          <!-- End Upload Area -->

          <!-- ======= Music informations upload area ======= -->
          <div class="music-informations-form">
            <div class="music-informations-form__header">
              <p>اطلاعات آهنگ</p>
            </div>
            <!-- End Music Information Header -->
            <div class="music-informations-form__body">
              <form action="/" method="post" enctype="multipart/form-data">
                <div class="row wrap">
                  <div class="col65">
                    <div class="nim">
                      <div class="form-text-item">
                        <label for="music-name">نام آهنگ</label>
                        <input
                          type="text"
                          id="music-name"
                          name="music-name"
                          value="اشارات"
                        />
                      </div>
                      <!-- End Form Text Item -->
                      <div class="form-text-item">
                        <label for="album-name">نام آلبوم</label>
                        <input
                          type="text"
                          id="album-name"
                          name="album-name"
                          value="اشارات"
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
                          value=" محمدرضا شجریان و همایون شجریان"
                        />
                      </div>
                      <!-- End Form Text Item -->
                      <div class="form-text-item">
                        <label for="duration">مدت زمان آهنگ</label>
                        <input
                          type="text"
                          id="duration"
                          name="duration"
                          value="09:00"
                        />
                      </div>
                      <!-- End Form Text Item -->
                    </div>
                  </div>
                  <!-- End Col -->
                  <div class="col30">
                    <div class="form-photo-item" ref="musicImageDisplay">
                      <div class="overlay" @click="chooseImage">
                        <img src="@/assets/icons/linear/camera.svg" alt="" />
                        <p>بارگذاری عکس</p>
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        name="music-cover"
                        ref="musicCover"
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
                        value="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد"
                      ></textarea>
                    </div>
                    <!-- End Form Text Item -->
                  </div>
                  <!-- End Col -->
                </div>
                <!-- End Row -->
                <div class="row">
                  <div class="col">
                    <div class="form-button-item">
                      <button class="active-btn" type="submit">
                        ذخیره اطلاعات
                      </button>
                      <button class="in-active-btn">لغو</button>
                    </div>
                    <!-- End Form Button Item -->
                  </div>
                  <!-- End Col -->
                </div>
                <!-- End Row -->
              </form>
            </div>
            <!-- End Music Information Form Body -->
          </div>
          <!-- End Music Informatio Upload Area -->
        </main>
      </section>
    </template>
  </LayoutView>
</template>

<script setup>
import LayoutView from "@/layout/LayoutView.vue";
import { ref } from "vue";

const musicCover = ref(null);
const musicImageDisplay = ref(null);

const chooseImage = () => {
  musicCover.value.click();
};

const musicCoverUpload = (event) => {
  const musicImage = event.target.files[0];
  uploadFile(musicImage);
};

function uploadFile(file) {
  const reader = new FileReader();
  reader.addEventListener("load", (event) => {
    const result = event.target.result;
    musicImageDisplay.value.style.backgroundImage = `url(${result})`;
  });

  reader.readAsDataURL(file);
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/music-upload-3.scss";
</style>
