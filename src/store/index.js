import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tilesetMakerParams: {
      scale: 1
    },
    rawImage: {
      image: new Image,
      mouse: {
        posX: 0,
        posY: 0
      }
    },
    tilesetEditor: {
      image: new Image,
      mouse: {
        posX: 0,
        posY: 0
      }
    },
    selectedTool: ''
  },
  getters: {
    tilesetMakerParams (state) {
      return state.tilesetMakerParams
    },
    rawImage (state) {
      return state.rawImage
    },
    tilesetEditor (state) {
      return state.tilesetEditor
    },
    selectedTool (state) {
      return state.selectedTool
    }
  },
  mutations: {
    setTilesetMakerParams (state, payload) {
      state.tilesetMakerParams = payload
    },
    setRawImageImage (state, payload) {
      state.rawImage.image = payload
    },
    setRawImageMouse (state, payload) {
      state.rawImage.mouse = payload
    },
    setTilesetEditorImage (state, payload) {
      state.tilesetEditor.image = payload
    },
    setTilesetEditorMouse (state, payload) {
      state.tilesetEditor.mouse = payload
    },
    setSelectedTool (state, payload) {
      state.selectedTool = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
