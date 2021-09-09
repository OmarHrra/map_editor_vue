<template>
  <div>
    <div class="container-fluid unselectable">
      <div class="row bg-light">
        <div class="col-6" style="background: #67a9f0; padding:0">
          <a @click="clickFileInput" class="btn btn-primary btn-block">Upload image</a>
          <input @change="changeImageSource" type="file" ref="uploadRawImage" style="display: none">
          <div style="max-height:1024px;overflow:auto;">
            <raw-image ref="raw-image"></raw-image>
          </div>
        </div>
        <div class="col-6" style="background: #e66f51; padding:0;">
          <tileset-editor></tileset-editor>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RawImage from '@/components/TilesetMaker/RawImage'
import TilesetEditor from '@/components/TilesetMaker/TilesetEditor'

export default {
  name: 'TilesetMaker',
  components: {
    RawImage,
    TilesetEditor
  },
  methods: {
    clickFileInput () {
      this.$refs['uploadRawImage'].click()
    },
    changeImageSource (e) {
      this.$refs['raw-image'].changeImageSource(e)
    }
  },
  computed: {
    tilesetMakerParams () {
      return this.$store.state.tilesetMakerParams
    }
  }
}
</script>