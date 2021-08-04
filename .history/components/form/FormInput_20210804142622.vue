<template>
  <div>
    <label
      class="block uppercase text-gray-500 text-xs font-bold mb-2"
      for="grid-first-name"
    >
      {{ label }}
    </label>
    <input
      class="
        block
        w-full
        text-gray-500
        border border-gray-300
        rounded-xl
        py-3
        px-4
        mb-3
        focus:outline-none
      "
      :id="id"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      v-model="value"
    />
    <p class="text-red-500 text-xs italic">Please fill out this field.</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    label: {
      type: String,
      required: true,
      default: '',
    },
    id: {
      type: String,
      required: true,
      default: '',
    },
    name: {
      type: String,
      required: true,
      default: '',
    },
    type: {
      type: String,
      required: true,
      default: '',
    },
    placeholder: {
      type: String,
      required: true,
      default: '',
    },
    value: {
      type: String,
      required: true,
      default: '',
    },
  },
})
</script>
