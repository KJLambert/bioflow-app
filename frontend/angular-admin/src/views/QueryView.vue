<template>
  <div style="padding: 2rem">
    <h2>GenBank Feature Query</h2>
    <form @submit.prevent="search">
      <input v-model="organism" placeholder="Organism" />
      <input v-model="feature" placeholder="Feature" />
      <input v-model.number="start" placeholder="Start" />
      <input v-model.number="end" placeholder="End" />
      <button type="submit">Search</button>
    </form>

    <FeatureList :features="results" />
  </div>
</template>

<script>
import axios from 'axios';
import FeatureList from '../components/FeatureList.vue';

export default {
  components: { FeatureList },
  data() {
    return {
      organism: '',
      feature: '',
      start: 0,
      end: 0,
      results: []
    };
  },
  methods: {
    async search() {
      const { data } = await axios.post('http://localhost:3000/api/query', {
        organism: this.organism,
        feature: this.feature,
        start: this.start,
        end: this.end
      });
      this.results = data.results || [];
    }
  }
};
</script>
