export default {
  props: {
    sizeX: {
      type: Number,
      default: 15,
      required: false
    },
    sizeY: {
      type: Number,
      default: 32,
      required: false
    },
  },
  data () {
    return {
      image: new Image,
      mouse: {
        posX: 0,
        posY: 0,
        isClicked: false
      },
      tileSelected: {
        posX: 0,
        posY: 0
      },
      ctx: null,
      scale: 1,
      tileSize: 16,
      currentTool: null,
      disabled: true,
    }
  },
  methods: {
    getContext2D (ref) {
      return this.$refs[ref].getContext('2d')
    },
    mouseUp () {
      this.mouse.isClicked = false
    },
    mouseDown (e) {
      this.mouse.isClicked = true
      this.toolHandler(e.offsetX, e.offsetY)
    },
    mouseMove (e) {
      this.toolHandler(e.offsetX, e.offsetY)
    },
    mouseOut () {
      this.mouse.isClicked = false
    },
    toolHandler (posX, posY) {
      if (this.disabled) return false
      // Out of bounds
      if (this.isOutOfBounds(posX, posY)) return false

      let x = Math.trunc(posX/(this.tileSize*this.scale))
      let y = Math.trunc(posY/(this.tileSize*this.scale))

      this.mouse.posX = x
      this.mouse.posY = y

      if (this.currentTool == 'select' && !this.mouse.isClicked) {
        return false
      }

      // Clear canvas
      this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height)
      // Draw previous image
      this.ctx.drawImage(this.image,0,0,this.ctx.canvas.width/this.scale,this.ctx.canvas.height/this.scale)

      // Tool work
      if (this.mouse.isClicked) {
        this[this.currentTool]()
      }

      // Save
      if (this.currentTool != 'select') {
        this.image.src = this.ctx.canvas.toDataURL('image/png')
      }
      
      // this.$forceUpdate() // Optional

      // Square
      this.drawSquare()
    },
    drawSquare () {
      this.ctx.beginPath()
      this.ctx.lineWidth = '1.6'
      this.ctx.strokeStyle = 'red'
      this.ctx.rect(this.x1, this.y1, this.x2, this.y2)
      this.ctx.stroke()
    },
    updateCanvasSize () {
      this.ctx.canvas.width = this.sizeX*this.tileSize*this.scale
      this.ctx.canvas.height = this.sizeY*this.tileSize*this.scale
      this.ctx.imageSmoothingEnabled = false
      this.ctx.scale(this.scale, this.scale)
    },
    isOutOfBounds (posX, posY) {
      return posX >= this.ctx.canvas.width || posY >= this.ctx.canvas.height || posX < 0 || posY < 0
    },
    enableCanvas () {
      this.disabled = false
    },
    disableCanvas () {
      this.disabled = true
    }
  },
  computed: {
    x1 () {
      return this.mouse.posX*this.tileSize
    },
    y1 () {
      return this.mouse.posY*this.tileSize
    },
    x2 () {
      return this.tileSize
    },
    y2 () {
      return this.tileSize
    }
  }
}

