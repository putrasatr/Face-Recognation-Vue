<template>
  <div class="app card bg-secondary mx-1 my-2">
    <div class="card-body row">
      <div class="col">
        <input
          v-model="kaskus"
          type="number"
          placeholder="Enter the number of kaskus"
          class="form-control"
        />
      </div>
      <div class="col">
        <input type="text" class="form-control" />
      </div>
      <div class="col">
        <input type="text" class="form-control" />
      </div>
    </div>
    <button class="btn btn-primary lg" @click="clickMe">
      <span>KASKUS</span>
    </button>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
  public clickMe(e: object): void {
    console.log(e);
  }
}
// export default {
//      name: "Kaskus",
//   data() {
//     return {
//       kaskus: {
//         type: "sda",
//       },
//     };
//   },
//   watch: {
//     kaskus: function () {
//         this.handleSetValue();
//     },
//   },
//   methods: {
//       async handleSetValue() {
//           @Watch("kaskus");
//       if (this.kaskus) console.log("KAS",this.kaskus);
//     },
//   },
// }
</script>