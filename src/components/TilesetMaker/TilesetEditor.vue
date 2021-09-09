<template>
  <div>
    <toolbar :tools="tools">
    </toolbar>

    <canvas ref="tilesetEditorCanvas"
            @mouseup="mouseUp"
            @mousedown="mouseDown"
            @mousemove="mouseMove"
            @mouseout="mouseOut"
    >
    </canvas>

    <div class=" mt-3">
      Current Tool: {{currentTool}} <br>
      <div v-if="map.length > 0">
      Tile selected: [X:{{tileSelected.posX}}, Y:{{tileSelected.posY}}]<br>
      Mouse position: [X:{{mouse.posX}}, Y:{{mouse.posY}}]<br>
      Tile selected: {{map[tileSelected.posX][tileSelected.posY]}}
      </div>
      <hr>
      Map Properties: <br>
      {{map}}
    </div>
  </div>
</template>

<script>
import canvas from '@/mixins/canvas'
import Toolbar from '@/components/Toolbar'

export default {
  name: 'TilesetEditor',
    components: {
    Toolbar
  },
  mixins: [
    canvas
  ],
  data () {
    return {
      map: [],
      tools: [
        'pencil',
        'select',
        'erase'
      ]
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
      this.map[this.mouse.posX][this.mouse.posY] = {
        x: this.mouse.posX,
        y: this.mouse.posX,
        properties: {
          frames: []
        }
      }
    },
    select () {
      this.tileSelected.posX = this.mouse.posX
      this.tileSelected.posY = this.mouse.posY
    },
    erase () {
      this.ctx.clearRect(this.x1, this.y1, this.tileSize, this.tileSize)
      this.map[this.mouse.posX][this.mouse.posY] = null
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
      this.map.push([])
    }
    // Context
    this.ctx = this.getContext2D('tilesetEditorCanvas')
    this.ctx.canvas.width = this.sizeX*this.tileSize*this.scale
    this.ctx.canvas.height = this.sizeY*this.tileSize*this.scale
    this.ctx.scale(this.scale, this.scale)
    this.ctx.imageSmoothingEnabled = false

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