<template>
  <ul>
    <li v-for="item in features" :key="item.id">
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  props: ['features']
};
</script>