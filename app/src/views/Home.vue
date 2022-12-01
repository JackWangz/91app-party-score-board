<template>
  <div class="home">
    <RankingTableVue />
  </div>
</template>

<style scoped>
.home {
  background: rgb(15, 15, 15); 
  background: rgba(0, 0, 0, 0.8); 
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import RankingTableVue from "../components/RankingTable.vue";

export default defineComponent({
  name: "Home",
  components: {
    RankingTableVue
  },
});
</script>
