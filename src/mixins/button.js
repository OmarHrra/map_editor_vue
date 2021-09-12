export default {
  props: {
    toolName: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      default: 60,
      required: false
    },
    height: {
      type: Number,
      default: 60,
      required: false
    }
  },
  methods: {
    getImageUrl () {
      return require(`@/assets/images/toolbar/${this.toolName}.svg`)
    },
  }
}
