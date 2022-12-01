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
        v-for="(player) in this.state.data"
        :key="player.employeeNo"
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
        <td>{{ player.score }}</td>
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
import { changeRandomScore } from "../services/RankingHelper";

interface Player {
  id: number,
  rank: number,
  rankEng: string,
  name: string,
  employeeNo: string,
  dept: string,
  score: number
}

const refreshTime = 200;

export default defineComponent({
  name: "RankingTable",
  components: {},
  setup() {
    let state = reactive({
      data: [] as Player[],
      streamerEl: []
    });

    state.data = [
      { id: 1,  rank: 1, name: 'JACK WANG', employeeNo: 'NY0948', dept: 'UPD', score: 200 },
      { id: 2,  rank: 2, name: 'Dan', employeeNo: 'NY0001', dept: 'USD', score: 500 },
      { id: 3,  rank: 3, name: 'Sonic', employeeNo: 'NY0033', dept: 'UAD', score: 800 },
      { id: 4,  rank: 4, name: 'Cloud', employeeNo: 'NY0592', dept: 'UFD', score: 600 },
      { id: 5,  rank: 5, name: 'Mario', employeeNo: 'NY0333', dept: 'UCD', score: 400 },
      { id: 6,  rank: 6, name: 'Cool', employeeNo: 'NY0545', dept: 'UCD', score: 400 },
      { id: 7,  rank: 7, name: 'Dennis', employeeNo: 'NY0112', dept: 'UCD', score: 1000 },
      { id: 8,  rank: 8, name: 'Ken', employeeNo: 'NY0452', dept: 'UCD', score: 500 },
      { id: 9,  rank: 9, name: 'Ryu', employeeNo: 'NY0593', dept: 'UCD', score: 2500 },
      { id: 10, rank: 10, name: 'Guile', employeeNo: 'NY1249', dept: 'UPD', score: 50000 },
      { id: 11, rank: 11, name: 'Lu', employeeNo: 'NY1233', dept: 'UCD', score: 56000 },
      { id: 12, rank: 12, name: 'Guy', employeeNo: 'NY1244', dept: 'UCD', score: 62000 },
      { id: 13, rank: 13, name: 'Sean', employeeNo: 'NY1277', dept: 'UCD', score: 81233 },
      { id: 14, rank: 14, name: 'Kirby', employeeNo: 'NY1288', dept: 'UCD', score: 500000 },
      { id: 15, rank: 15, name: 'SuperMan', employeeNo: 'NY1299', dept: 'UCD', score: 100000 },
    ] as Player[];

    setInterval(function() {
      // randomize data
      changeRandomScore(state.data, refreshTime);

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
