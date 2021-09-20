<template>
  <div
    class="
      flex
      fixed
      inset-0
      justify-center
      items-center
      bg-gray-800 bg-opacity-75
    "
    @click="$emit('close-modal')"
  >
    <div class="bg-white rounded-2xl w-6/12 p-6" @click.stop>
      <h6 class="text-xl">Project Space Details</h6>
      <form
        class="w-full max-w-3xl bg-white rounded-xl"
        @submit.prevent="addProjectSpace"
      >
        <div class="flex flex-wrap my-6">
          <div class="w-full">
            <label
              class="block uppercase text-gray-500 text-xs font-bold mb-2"
              for="grid-project"
            >
              Space
            </label>
            <select
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
              id="status"
              name="status_id"
              v-model="projectSpaceData.space_id"
              type="text"
              placeholder="Building type..."
            >
              <option
                :value="space.space_id"
                v-for="space in spaces"
                :key="space.space_id"
              >
                {{ space.space }}
              </option>
            </select>
          </div>
        </div>

        <div class="flex flex-wrap my-6">
          <div class="w-full">
            <label
              class="block uppercase text-gray-500 text-xs font-bold mb-2"
              for="grid-project"
            >
              Space size (m)
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
              name="space"
              v-model="projectSpaceData.size"
              type="text"
              placeholder="Space size ..."
            />
          </div>
        </div>

        <div class="flex flex-wrap">
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
            <div
              class="
                block
                w-full
                font-bold
                text-blue-800 text-center
                border-1
                bg-blue-100
                hover:bg-gray-100
                rounded-2xl
                focus:outline-none focus:border-blue-200
                py-4
                px-4
                mb-3
              "
              @click="$emit('close-modal')"
            >
              Cancel
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { post, get } from '~/services/api.service'
export default Vue.extend({
  data() {
    return {
      projectSpaceData: {
        size: '',
        space_id: '',
        project_id: this.$route.params.id,
      },
      spaces: '',
    }
  },
  created() {
    this.getSpace()
  },
  methods: {
    getSpace() {
      get(this.$axios, 'space/')
        .then((results) => {
          this.spaces = results.results
        })
        .catch((error) => {
          console.log(error)
        })
    },
    addProjectSpace() {
      post(this.$axios, 'project_space/', this.projectSpaceData)
        .then((result) => {
          this.$router.go()
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
})
</script>
