<template>
  <div class="about">
    <h1>This is an about page</h1>
    ---{{bean}}---
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
    name: "About",
    data () {
      return {
        
      }
    },
    computed: {
        ...mapGetters([
            "bean"
        ])
    }
}
</script>

