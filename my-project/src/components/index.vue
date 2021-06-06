<template>
  <div class="test">
    <p>ユーザーのアプリ画面</p>
    <router-link to="/config" tag="button">管理画面へ</router-link>
    <div class="area" v-on:click="getPosition">
      <img class="PhotoSpace" :src="imagePath" width="100" :style="{ left: leftValue + 'px', top: topValue + 'px' }" v-on:mouseover="mouseOverAction" v-on:mouseleave="mouseLeaveAction" />
      <p class="PhotoSpace comment" v-if="hoverFlag" :style="{ left: leftValue + 'px', top: topValue-45 + 'px' }">{{comment}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      count: 0,
      imagePath: '',
      comment: '',
      leftValue: '',
      topValue: '',
      hoverFlag: false
    }
  },
  computed: {
    number () {
      return this.$store.state.number
    },
    items () {
      return this.$store.state.items
    }
  },
  methods: {
    countUp () {
      this.count += 1
    },
    changeImage () {
      this.count = (this.count < this.items.length) * this.count
      this.imagePath = this.items[this.count].image
      this.count++
    },
    getPosition (event) {
      this.leftValue = event.offsetX - 50
      this.topValue = event.offsetY - 50
      this.count = (this.count < this.items.length) * this.count
      this.imagePath = this.items[this.count].image
      this.comment = this.items[this.count].name
      this.count++
    },
    mouseOverAction () {
      this.hoverFlag = true
    },
    mouseLeaveAction () {
      this.hoverFlag = false
    }
  }
}
</script>

<style>
.area {
  padding: 0.5px;
  outline: 1px dashed green;
  height: calc(100vh - 93px);
  width: 100%;
  text-align: center;
  position: relative;
  background-image: url("~@/assets/madori.jpg");
  background-size:cover;
  background-color:rgba(255,255,255,0.8);
background-blend-mode:lighten;
}
.PhotoSpace {
  position: absolute;
}
.comment {
  background-color: dodgerblue;
  color: white;
  padding: 0 10px;
}
</style>
