<template>
  <div class="hello">
    <div>
      {{value}}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    value: String
  },
  data () {
    return {
      val: '',
      val2: ''
    }
  }
})
</script>
<style scoped>

</style>
