import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    allNotes: [
      {
        title: "SATU",
        content: "usahdia odi hak shdkash dkah dkha kjdsh ",
        color: "blue",
      },
      {
        title: "DUA",
        content: "n knk nkj njk nknkj jlkklmlkmkl m",
        color: "green",
      },
      {
        title: "TIGA",
        content: "lnasdmlk salmd l;asd;la l,da[ls ",
        color: "yellow",
      },
    ],
  },
});
