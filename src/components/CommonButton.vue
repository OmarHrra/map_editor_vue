<template>
  <div>
    <a>
      <img :src="getImageUrl()"
           :alt="alt"
           :width="width" 
           :height="height"
      >
    </a>
  </div>
</template>

<script>
import button from '@/mixins/button'

export default {
  name: 'CommonButton',
  mixins: [
    button
  ],
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
