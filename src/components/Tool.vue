<template>
  <div>
    <a @click="setTool">
      <img :src="getImageUrl()"
           :alt="alt"
           :width="width" 
           :height="height"
      >
    </a>
  </div>
</template>

<script>
export default {
  name: 'Tool',
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
      default: 30,
      required: false
    },
    height: {
      type: Number,
      default: 30,
      required: false
    }
  },
  methods: {
    getImageUrl () {
      return require(`@/assets/images/toolbar/${this.toolName}.svg`)
    },
    setTool () {
      this.$store.commit('setSelectedTool', this.toolName);
    }
  }
}
</script>

<style lang="css" scoped>
  div {
    display: inline-block;
    margin: 2px;
    padding: 3px;
  }

  div:hover{
    background-color: #056bd9;
    border-radius: 2px;
  }

  .active-button{
    background-color: #065fbe;
    border-radius: 2px;
  }
</style>
