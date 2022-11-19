import $axios from "@/plugins/axios";

const playlists = {
  namespaced: true,

  state: {
    playlists: [],
    top_playlists: [],
  },

  getters: {},

  mutations: {
    SET_PLAYLISTS(state, data) {
      state.playlists = data;
    },
    SET_TOP_PLAYLISTS(state, data) {
      state.top_playlists = data;
    },
  },

  actions: {
    async getUserPlaylists({ commit }) {
      try {
        const response = await $axios.get("/playlists");
        commit("SET_PLAYLISTS", response.data);
      } catch (error) {
        console.log(error.response.data.message);
      }
    },

    async getTopPlaylists({ commit }) {
      try {
        const response = await $axios.get("/top-playlists");
        commit("SET_TOP_PLAYLISTS", response.data);
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
  },
};

export default playlists;
