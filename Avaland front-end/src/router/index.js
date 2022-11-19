import { createRouter, createWebHashHistory } from "vue-router";
import store from "../store/index";

const routes = [
  {
    path: "/",
    name: "home",
    meta: { requiresAuth: false, includeMusicPlayer: true },
    component: () =>
      import(/* webpackChunkName: "MusicUpload-1" */ "../views/HomeView.vue"),
  },
  {
    path: "/music-upload-1",
    name: "music-upload-1",
    meta: { requiresAuth: true, includeMusicPlayer: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "MusicUpload-1" */ "../views/MusicUpload-1-View.vue"
      ),
  },
  {
    path: "/music-upload-2",
    name: "music-upload-2",
    meta: { requiresAuth: true, includeMusicPlayer: true },
    component: () =>
      import(
        /* webpackChunkName: "MusicUpload-2" */ "../views/MusicUpload-2-View.vue"
      ),
  },
  {
    path: "/music-upload-3",
    name: "music-upload-3",
    meta: { requiresAuth: true, includeMusicPlayer: true },
    component: () =>
      import(
        /* webpackChunkName: "MusicUpload-3" */ "../views/MusicUpload-3-View.vue"
      ),
  },
  {
    path: "/playlist/:playlistName",
    name: "playlist",
    meta: { requiresAuth: false, includeMusicPlayer: true },
    component: () =>
      import(
        /* webpackChunkName: "MusicUpload-3" */ "../views/PlaylistView.vue"
      ),
  },
  {
    path: "/music-details/:musicId",
    name: "music-details",
    meta: { requiresAuth: false, includeMusicPlayer: true },
    component: () =>
      import(/* webpackChunkName: "MusicUpload-3" */ "../views/MusicView.vue"),
  },
  {
    path: "/list-playlist",
    name: "list-playlist",
    meta: { requiresAuth: false, includeMusicPlayer: true },
    component: () =>
      import(
        /* webpackChunkName: "MusicUpload-3" */ "../views/Playlist-s-View.vue"
      ),
  },
  {
    path: "/search",
    name: "search",
    meta: { requiresAuth: false, includeMusicPlayer: true },
    component: () =>
      import(/* webpackChunkName: "MusicUpload-3" */ "../views/SearchView.vue"),
  },
  {
    path: "/most-popular",
    name: "most-popular",
    meta: { requiresAuth: false, includeMusicPlayer: true },
    component: () =>
      import(
        /* webpackChunkName: "MusicUpload-3" */ "../views/MostPopularView.vue"
      ),
  },
  {
    path: "/play-music",
    name: "play-music",
    meta: { requiresAuth: false, includeMusicPlayer: true },
    component: () =>
      import(
        /* webpackChunkName: "MusicUpload-3" */ "../views/PlayMusicView.vue"
      ),
  },
  {
    path: "/signin",
    name: "signin",
    meta: { requiresAuth: false, includeMusicPlayer: false },
    component: () =>
      import(/* webpackChunkName: "MusicUpload-3" */ "../views/SignInView.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    meta: { requiresAuth: false, includeMusicPlayer: false },
    component: () =>
      import(/* webpackChunkName: "MusicUpload-3" */ "../views/SignUpView.vue"),
  },
  {
    path: "/question-reset-pass",
    name: "question-reset-pass",
    meta: { requiresAuth: false, includeMusicPlayer: false },
    component: () =>
      import(
        /* webpackChunkName: "MusicUpload-3" */ "../views/QuestionResetPassView.vue"
      ),
  },
  {
    path: "/question",
    name: "question",
    meta: { requiresAuth: false, includeMusicPlayer: false },
    component: () =>
      import(
        /* webpackChunkName: "MusicUpload-3" */ "../views/QuestionView.vue"
      ),
  },
  {
    path: "/reset-password",
    name: "reset-password",
    meta: { requiresAuth: false, includeMusicPlayer: false },
    component: () =>
      import(
        /* webpackChunkName: "MusicUpload-3" */ "../views/ResetPasswordView.vue"
      ),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    meta: { requiresAuth: false, includeMusicPlayer: true },
    component: () => import("../views/NotFoundView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !store.state.user.isLogin) {
    router.push({ name: "signin" });
  }
  if (!to.meta.includeMusicPlayer) {
    store.dispatch("musics/pauseMusic");
  }
});

export default router;
