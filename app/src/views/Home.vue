<template>
  <div class="home">
    <RankingTable />
  </div>
</template>

<style scoped>
.home {
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import RankingTable from "../components/RankingTable.vue";

export default defineComponent({
  name: "Home",
  components: {
    RankingTable
  },
});
</script>
