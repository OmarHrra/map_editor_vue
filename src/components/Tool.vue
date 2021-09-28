<template>
  <div>
    <a @click="setTool">
      <img :src="getImageUrl()"
           :alt="alt"
           :width="width" 
           :height="height"
           :class="actived"
      >
    </a>
  </div>
</template>

<script>
import button from '@/mixins/button'

export default {
  name: 'Tool',
  mixins: [
    button
  ],
  methods: {
    setTool () {
      this.$store.commit('setSelectedTool', this.toolName);
    }
  },
  computed: {
    selectedTool () {
      return this.$store.state.selectedTool
    },
    actived () {
      if (this.selectedTool == '' && this.toolName == 'pencil') return 'active-button'
      if (this.selectedTool === this.toolName) return 'active-button'

      return ''
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
