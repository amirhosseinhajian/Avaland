import { createStore } from "vuex";
import musics from "./modules/musics";
import playlists from "./modules/playlists";
import user from "./modules/user";

export default createStore({
  modules: {
    musics: musics,
    playlists: playlists,
    user: user,
  },
});
