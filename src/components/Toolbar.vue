<template>
  <div>
    <tool v-for="(tool, key) in tools" :key="key"
          :toolName="tool"
          :alt="tool"
    >
    </tool>
  </div>
</template>

<script>
import Tool from '@/components/Tool'

export default {
  name: 'Toolbar',
  props: {
    tools: {
      type: Array,
      required: true
    },
  },
  components: {
    Tool
  },
}
</script>
