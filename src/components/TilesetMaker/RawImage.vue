<template>
  <div>
    <canvas ref="rawImageCanvas"
            @mouseup="mouseUp"
            @mousedown="mouseDown"
            @mousemove="mouseMove"
            @mouseout="mouseOut"
    >
    </canvas>
  </div>
</template>

<script>
import canvas from '@/mixins/canvas'

export default {
  name: 'RawImage',
  mixins: [
    canvas
  ],
  methods: {
    changeImageSource (e) {
      if (e.target.files.length == 0) return false

      this.image.src = URL.createObjectURL(e.target.files[0])
      this.image.onload = () => {
        this.updateCanvasToImageSize()
        this.ctx.drawImage(this.image, 0, 0)
        this.$store.commit('setRawImageImage', this.image)
      }
    },
    updateCanvasToImageSize () {
      this.ctx.canvas.width = this.image.width*this.scale
      this.ctx.canvas.height = this.image.height*this.scale
      this.ctx.imageSmoothingEnabled = false
      this.ctx.scale(this.scale, this.scale)
    },
    select () {
      this.tileSelected.posX = this.mouse.posX
      this.tileSelected.posY = this.mouse.posY
    },
  },
  watch: {
    'tileSelected.posX' () {
      this.$store.commit('setRawImageMouse', this.tileSelected)
    },
    'tileSelected.posY' () {
      this.$store.commit('setRawImageMouse', this.tileSelected)
    }
  },
  mounted () {
    this.ctx = this.getContext2D('rawImageCanvas')
    this.updateCanvasSize()

    this.currentTool = 'select'
    this.image.src = this.ctx.canvas.toDataURL('image/jpg')
  }
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