import { action, createStore } from "easy-peasy";

export const store = createStore({
  activeSongs: [],
  activeSong: null,
  changeActiveSOngs: action((state: any, payload) => {
    state.activeSongs = payload;
  }),
  changeActiveSong: action((state: any, payload) => {
    state.aciveSong = payload;
  }),
});
