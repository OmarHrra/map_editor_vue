<template>
  <div>
    <canvas ref="tilesetEditorCanvas"
            @mouseup="mouseUp"
            @mousedown="mouseDown"
            @mousemove="mouseMove"
            @mouseout="mouseOut"
    >
    </canvas>

    <div class=" mt-3">
      Current Tool: {{currentTool}} <br>
      <div v-if="tileset['map'].length > 0">
      Tile selected: [X:{{tileSelected.posX}}, Y:{{tileSelected.posY}}]<br>
      Mouse position: [X:{{mouse.posX}}, Y:{{mouse.posY}}]<br>
      Tile selected: {{tileset['map'][tileSelected.posX][tileSelected.posY]}}
      </div>
      <hr>
      Tileset Properties: <br>
      {{tileset['map']}}
    </div>
  </div>
</template>

<script>
import canvas from '@/mixins/canvas'

export default {
  name: 'TilesetEditor',
  mixins: [
    canvas
  ],
  data () {
    return {
      tileset: {
        image: '',
        map: [],
      },
    }
  },
  methods: {
    pencil () {
      let rawImage = this.$store.state.rawImage
      this.ctx.clearRect(this.x1, this.y1, this.tileSize, this.tileSize)
      this.ctx.drawImage(
        rawImage.image,
        rawImage.mouse.posX*this.tileSize,
        rawImage.mouse.posY*this.tileSize,
        this.tileSize,
        this.tileSize,
        this.x1,
        this.y1,
        this.x2,
        this.y2,
      )
      this.tileset['map'][this.mouse.posX][this.mouse.posY] = {
        x: this.mouse.posX,
        y: this.mouse.posX,
      }
    },
    select () {
      this.tileSelected.posX = this.mouse.posX
      this.tileSelected.posY = this.mouse.posY
    },
    erase () {
      this.ctx.clearRect(this.x1, this.y1, this.tileSize, this.tileSize)
      this.tileset['map'][this.mouse.posX].splice(this.mouse.posY, 1);
    },
    saveTileset () {
      this.tileset['image'] = this.image.src

      let text = JSON.stringify(this.tileset)
      let filename = 'tileset.json'
      let element = document.createElement('a')
      element.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(text))
      element.setAttribute('download', filename)
      element.style.display = 'none'
      document.body.appendChild(element)

      element.click();
      document.body.removeChild(element);
    }
  },
  computed: {
    selectedTool () {
      return this.$store.state.selectedTool
    }
  },
  watch: {
    selectedTool (value) {
      this.currentTool = value
    },
  },
  mounted () {
    for (let i = 0; i < this.sizeX; i++) {
      this.tileset['map'].push([])
    }
    // Context
    this.ctx = this.getContext2D('tilesetEditorCanvas')
    this.updateCanvasSize()

    this.currentTool = 'pencil'
    this.image.src = this.ctx.canvas.toDataURL('image/jpg')
  },
}
</script>

<style lang="css" scoped>
  canvas {
    border-right: 1px solid #9a9a9a;
    background-image: url('~@/assets/images/null.svg');
    background-repeat: repeat;
    display: block;
  }
</style>