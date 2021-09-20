<template>
  <div class="flex flex-col">
    <div
      class="
        flex flex-row
        bg-white
        text-gray-600
        border border-gray-200
        rounded-xl
        mx-5
        p-5
      "
    >
      <div class="text-xl">
        New space
        <p class="text-sm flex flex-row">
          <solid-information-circle-icon class="w-4 h-4" />Space details
        </p>
      </div>
    </div>
    <div
      class="
        flex flex-col flex-grow
        border-primary-100
        hover:border-gray-300
        p-5
      "
    >
      <form
        class="w-full max-w-3xl bg-white rounded-xl px-5 border border-gray-200"
        @submit.prevent="addSpace"
      >
        <div class="flex flex-wrap my-6">
          <div class="w-full">
            <label
              class="block uppercase text-gray-500 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Space
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
              id="space"
              name="phone_number"
              v-model="spaceData.space"
              type="text"
              placeholder="Space name ..."
            />
            <p class="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
        </div>

        <div class="flex flex-wrap mb-6">
          <div class="w-full md:w-1/2 py-1 md:pr-1">
            <button
              type="submit"
              class="
                block
                w-full
                bg-gradient-to-r
                from-blue-800
                to-blue-600
                hover:from-blue-700 hover:to-blue-500
                font-bold
                text-blue-100
                border-1
                rounded-2xl
                border-blue-500
                hover:bg-blue-800
                focus:outline-none focus:border-gray-500
                py-4
                px-4
              "
              id="submit"
            >
              Submit
            </button>
          </div>
          <div class="w-full md:w-1/2 py-1 md:pl-1">
            <button
              type="submit"
              class="
                block
                w-full
                font-bold
                text-blue-800
                border-1
                bg-blue-100
                hover:bg-gray-100
                rounded-2xl
                focus:outline-none focus:border-blue-200
                py-4
                px-4
                mb-3
              "
              id="cancel"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { post } from '~/services/api.service'
export default Vue.extend({
  layout: 'logged',
  data() {
    return {
      spaceData: {
        space: '',
      },
    }
  },
  methods: {
    addSpace() {
      post(this.$axios, 'space/', this.spaceData)
        .then((results) => {
          this.$router.push('/configure/design/spaces')
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
})
</script>
