<template>
  <div id="app">
    <h1>Vue Image Search</h1>
    <form @submit.prevent="formSubmitted">
      <label for="searchTerm">Search Term</label>
      <input v-model="searchTerm" class="u-full-width" type="text" id="searchTerm" name="searchTerm">
      <button type="submit">Search</button>
    </form>
    <img v-if="loading" id="loadingImage" src="https://i.imgur.com/LVHmLnb.gif">
    <section class="images">
      <img v-for="image in images" :key="image.id" :src="image.image">
    </section>
  </div>
</template>

<script>
import API from './API.js';
export default {
  name: 'App',
  data() {
    return {
      title: 'Vue Image Search',
      searchTerm: '',
      images: [],
      loading: false,
    };
  },
  methods: {
    formSubmitted() {
      this.loading = true;
      this.images = [];
      API.search(this.searchTerm)
        .then(images => {
          this.images = images;
          this.loading = false;
        });
    }
  },
}
</script>

<style>
body {
  width: 80%;
  margin: 2em auto 0 auto;
}
.images {
  column-count: 3;
}
img {
  width: 100%;
}
</style>
