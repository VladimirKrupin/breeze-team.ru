import axios from 'axios';
import settings from "../../config/settings";
import env from "../../config/env";
let appSettings = settings.get(env.get());
const state = {
  lang: '',
};

const getters = {
    lang: state => state.lang,
};

const mutations = {
    setLang(state, payload) {
        state.lang = payload.lang;
    },
    setAllowedLangs(state, payload) {
        console.log(payload.allowedLangs);
        state.allowedLangs = payload.allowedLangs;
    }
};

const actions = {
  changeLang(context,payload) {
      localStorage.setItem('lang',payload.lang);
      context.commit('setLang', { lang: payload.lang });
  },
  getAllowedLangs(context,payload) {
      const options = {
          method: 'GET',
          url: appSettings.apiHost + '/api/allowedLangs/',
      };
      axios(options)
          .then(response => {
              context.commit('setAllowedLangs', { allowedLangs: response.data.data.langs});
          })
          .catch(e => {
              console.log(e);
          });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
