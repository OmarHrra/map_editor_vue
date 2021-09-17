<template>
  <div>
    <div class="container-fluid unselectable">
      <div class="row bg-primary bottom-border navbar-padding">
        <div class="col-6 right-border">
          <common-button @click.native="clickFileInput"
                         toolName="upload_image"
                         alt="upload_image"
          >
          </common-button>
          <input @change="changeImageSource" type="file" ref="uploadRawImage" style="display: none">
        </div>
        <div class="col-6 left-border">
          <div class="d-inline float-left">
            <toolbar :tools="tools">
            </toolbar>
          </div>

          <div class="d-inline float-right">
            <common-button @click.native="saveTileset"
                           toolName="save_tileset"
                           alt="save_tileset"
            >
            </common-button>
          </div>
        </div>
      </div>

      <div class="row bg-light">
        <div class="col-6 right-border no-padding" style="background: #67a9f0;">
          <div style="max-height:1024px;overflow:auto;">
            <raw-image ref="raw-image"
                       :sizeX="25"
                       :sizeY="25"
            >
            </raw-image>
          </div>
        </div>
        <div class="col-6 left-border no-padding" style="background: #e66f51;">
          <tileset-editor ref="tileset-editor"></tileset-editor>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RawImage from '@/components/TilesetMaker/RawImage'
import TilesetEditor from '@/components/TilesetMaker/TilesetEditor'
import CommonButton from '@/components/CommonButton'
import Toolbar from '@/components/Toolbar'

export default {
  name: 'TilesetMaker',
  components: {
    RawImage,
    TilesetEditor,
    CommonButton,
    Toolbar,
  },
  data () {
    return {
      tools: [
        'pencil',
        'select',
        'erase'
      ]
    }
  },
  methods: {
    clickFileInput () {
      this.$refs['uploadRawImage'].click()
    },
    changeImageSource (e) {
      this.$refs['raw-image'].changeImageSource(e)
    },
    saveTileset () {
      this.$refs['tileset-editor'].saveTileset()
    }
  },
  computed: {
    tilesetMakerParams () {
      return this.$store.state.tilesetMakerParams
    }
  }
}
</script>

<style lang="css" scoped>
  .right-border {
    border-right: 1px solid #065fbe;
  }

  .left-border {
    border-left: 1px solid #065fbe;
  }

  .bottom-border {
    border-bottom: 1px solid #065fbe;
  }

  .navbar-padding {
    padding: 5px 0px 5px 0px;
  }
</style>