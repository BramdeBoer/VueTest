<template lang="html">
  <div class="">
    <table class="table">
      <thead>
        <tr>
          <th>Hash</th>
          <th>Height</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="block in blocks">
          <td>{{block.hash}}</td>
          <td>{{block.height}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>

import { mapState } from 'vuex';

export default {
  name: 'blocks',
  computed: mapState([
    'blocks',
  ]),
};

</script>
<style lang="css">
</style>