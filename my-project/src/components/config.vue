<template>
  <div class="config">
    <p>管理画面</p>
    <router-link to="/" tag="button">アプリ画面へ</router-link>
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div id="app">
            <table class="table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>名前</th>
                  <th>種類</th>
                  <th>画像</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, key) in items" :key="key">
                  <td>{{ key + 1 }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.kind }}</td>
                  <td><img class="img" :src="item.image" width="100" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <form v-on:submit.prevent>
      <label>名前</label>
      <input v-model="name" type="text" ref="input">
      <label>種類</label>
      <input v-model="kind" type="text" ref="input">
      <label class="input-item__label">
        画像を選択
        <!-- <input type="file" /> -->
        <input type="file" ref="preview" @change="uploadFile">
      </label>
      <button v-on:click="addObject" type="submit">送信</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'config',
  computed: {
    number () {
      return this.$store.state.number
    },
    items () {
      return this.$store.state.items
    }
  },
  data () {
    return {
      name: '',
      kind: '',
      url: ''
    }
  },
  methods: {
    addObject () {
      console.log(this.items)
      // this.items.push({name: this.name, kind: this.kind, image: require('@/assets/4.png')})
      this.items.push({name: this.name, kind: this.kind, image: this.url})
      this.$store.commit('setItems', this.items)
    },
    uploadFile () {
      const file = this.$refs.preview.files[0]
      this.url = URL.createObjectURL(file)
    }
  }
}
</script>

<style>
  body, p {
    margin: 0;
  }
  .config {
    background-color: #EEEEEE;
    height: 100vh;
  }
</style>
