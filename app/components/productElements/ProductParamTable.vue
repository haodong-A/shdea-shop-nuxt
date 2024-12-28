<script setup lang="ts">
const { table } = defineProps({
  table: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <table class="mb-8 mt-4 w-full md:w-3/4">
    <tbody>
      <tr v-for="key in Object.keys(table)" :key>
        <td>{{ key }}</td>
        <td>
          {{ table[key] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  font-size: 0.7em;
  border-collapse: collapse;
}

th,
td {
  border-bottom: 1px solid #cdcccc;
  text-align: center;
  padding: 10px 0;
}
tr:first-child {
  border-top: 1px solid #cdcccc;
}

table tbody tr td:first-child {
  font-weight: 600;
  width: 200px;
}

table tfoot tr td {
  text-align: right;
  padding-right: 20px;
}
</style>
