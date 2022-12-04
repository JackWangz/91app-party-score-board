<template>
  <div class="ranking-section">
    <table class="ranking-table">
      <tr>
        <th style="width: 80px;"></th>
        <th class="ranking-table-header" style="width: 180px;">RANK</th>
        <th class="ranking-table-header" style="width: 300px;">EMPLOYEE NO.</th>
        <th class="ranking-table-header">DEPT.</th>
        <th class="ranking-table-header" style="width: 300px;">NAME</th>
        <th class="ranking-table-header">SCORE</th>
      </tr>
      <tr 
        v-for="(player) in state.data.filter((m) => m.rank <= 15)"
        :key="player.employeeNo"
        :ref="
        (el) => {
            state.playerEl[player.id] = el;
          }
        "
        class="ranking-table-row"
      >
        <td>
          <img class="ranking-table-row-icon" v-if="player.rank <= 3" src="../../public/img/coin_gold.gif" alt="" />
          <img class="ranking-table-row-icon" v-else-if="player.rank > 3 && player.rank <= 7" src="../../public/img/coin_silver.gif" alt="" />
          <img class="ranking-table-row-icon" v-else-if="player.rank > 7 && player.rank <= 10" src="../../public/img/coin_copper.gif" alt="" />
          <img class="ranking-table-row-icon" v-else-if="player.rank > 10" style="width: 50px;" src="../../public/img/flying_cash.gif" alt="" />
        </td>
        <td>{{ TransRankDesc(player.rank) }}</td>
        <td>{{ player.employeeNo }}</td>
        <td>{{ player.dept }}</td>
        <td>{{ ToUpper(player.name) }}</td>
        <td>{{ player.scoreToDisplay }}</td>
      </tr>  
    </table>
    <div class="ranking-footer">
      THE KING OF FIGHTERS' 91
    </div>
  </div>
</template>

<style scoped>

.ranking-section {
  font-size: 28px;
}
.ranking-table {
  color: white;
  text-align: left;
  padding: 20px 0;
  margin: 0 auto;
}

.ranking-table-row-icon {
  vertical-align: middle;
}

.ranking-table-header {
  transition: all 0.3s ease 0s;
  width: 200px;
}

.ranking-table-row {
  height: 50px;
}

.ranking-table-row:nth-child(-n+11){
  color: #e7cfb2;
}

.ranking-footer {
  font-size: 2.5rem;
  padding: 10px 0;
  color: red;
}

</style>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { changeRandomScore, refreshTime, sortArr, swapElement } from "../services/RankingHelper";
import { Player } from "../models/RankingModels";

export default defineComponent({
  name: "RankingTable",
  components: {},
  setup() {
    let state = reactive({
      data: [] as Player[],
      playerEl: [] as any
    });

    state.data = [
      { id: 1,  rank: 1, name: 'GG', employeeNo: 'NY0777', dept: 'UPD', score: 0 },
      { id: 2,  rank: 2, name: 'Dan', employeeNo: 'NY0001', dept: 'USD', score: 0 },
      { id: 3,  rank: 3, name: 'Sonic', employeeNo: 'NY0033', dept: 'UAD', score: 0 },
      { id: 4,  rank: 4, name: 'Cloud', employeeNo: 'NY0592', dept: 'UFD', score: 0 },
      { id: 5,  rank: 5, name: 'Mario', employeeNo: 'NY0333', dept: 'UCD', score: 0 },
      { id: 6,  rank: 6, name: 'Cool', employeeNo: 'NY0545', dept: 'UCD', score: 0 },
      { id: 7,  rank: 7, name: 'Dennis', employeeNo: 'NY0112', dept: 'UCD', score: 0 },
      { id: 8,  rank: 8, name: 'Ken', employeeNo: 'NY0452', dept: 'UCD', score: 0 },
      { id: 9,  rank: 9, name: 'Ryu', employeeNo: 'NY0593', dept: 'UCD', score: 0 },
      { id: 10, rank: 10, name: 'Guile', employeeNo: 'NY1249', dept: 'UPD', score: 0 },
      { id: 11, rank: 11, name: 'Lu', employeeNo: 'NY1233', dept: 'UCD', score: 0 },
      { id: 12, rank: 12, name: 'Guy', employeeNo: 'NY1244', dept: 'UCD', score: 0 },
      { id: 13, rank: 13, name: 'Sean', employeeNo: 'NY1277', dept: 'UCD', score: 0 },
      { id: 14, rank: 14, name: 'Kirby', employeeNo: 'NY1288', dept: 'UCD', score: 0 },
      { id: 15, rank: 15, name: 'SuperMan', employeeNo: 'NY1299', dept: 'UCD', score: 0 },
      // { id: 16, rank: 16, name: 'BirdMan', employeeNo: 'NY1299', dept: 'UCD', score: 0 },
      // { id: 17, rank: 17, name: 'FireMan', employeeNo: 'NY1299', dept: 'UCD', score: 0 },
      // { id: 18, rank: 18, name: 'ThunderMan', employeeNo: 'NY1299', dept: 'UCD', score: 0 },
      // { id: 19, rank: 19, name: 'SpiderMan', employeeNo: 'NY1299', dept: 'UCD', score: 0 },
      // { id: 20, rank: 20, name: 'FuckBoy', employeeNo: 'NY1299', dept: 'UCD', score: 0 },
    ] as Player[];

    state.data.forEach((val) => {
      val.scoreToDisplay = val.score;
    });

    // Sort first
    sortArr(state.data);

    setInterval(function() {
      // In order for demo, just add up score for randomly row.
      changeRandomScore(state.data, refreshTime)
        .then(() => {

          let prevPosition = [] as any;
          state.data.forEach((player) => {
            prevPosition[player.id] = state.playerEl[
              player.id
            ].getBoundingClientRect().top;
          });

          sortArr(state.data).then((sortedArr: Player[]) => {
            // swap position after sorted
            sortedArr.forEach((player: Player) => {
              let newTop = state.playerEl[player.id].getBoundingClientRect().top;
              let prevTop = prevPosition[player.id];
              let diffY = prevTop - newTop;
              if (diffY) {
                // swap position after sorted
                swapElement(state.playerEl[player.id], diffY, refreshTime);
              }
            });
          });
        });
    }, refreshTime);

    return {
      state,
    };
  },
  methods: {
    TransRankDesc(val: any) {
      switch (val) {
        case 1:
          return '1ST'
        case 2:
          return '2ND'
        case 3:
          return '3RD'
        default:
          return `${val}TH`;
      }
    },
    ToUpper(val: string) {
      return val.toUpperCase();
    }
  }
});
</script>
