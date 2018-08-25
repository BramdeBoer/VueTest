<template>
  <div class="home">
    <blocks></blocks>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Blocks from '@/components/Blocks.vue'; // @ is an alias to /src

@Component({
  components: {
    Blocks,
  },
  mounted() {
    this.$store.dispatch('loadBlocks');
  },
})
export default class Home extends Vue {}
</script>
