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
        New location
        <p class="text-sm flex flex-row">
          <solid-information-circle-icon class="w-4 h-4" />Location details
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
        @submit.prevent="addLocation"
      >
        <div class="flex flex-wrap my-6">
          <div class="w-full">
            <label
              class="block uppercase text-gray-500 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Location
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
              id="location"
              name="phone_number"
              v-model="locationData.location"
              type="text"
              placeholder="Location name ..."
            />
            <p class="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
        </div>

        <div class="flex flex-wrap my-6">
          <div class="w-full">
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-500 text-xs
                font-bold
                mb-2
              "
              for="grid-zip"
            >
              District
            </label>
            <select
              class="
                block
                w-full
                text-gray-500
                border border-gray-300
                rounded-lg
                py-3.5
                px-4
                mb-3
                focus:outline-none
              "
              id="district"
              name="district_id"
              v-model="locationData.district_id"
              type="text"
              placeholder="District..."
            >
              <option
                :value="district.district_id"
                v-for="district in districts"
                :key="district.district_id"
              >
                {{ district.district }}
              </option>
            </select>
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
            <nuxt-link
              to="/configure/locations"
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
            </nuxt-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { post, get } from '~/services/api.service'
export default Vue.extend({
  layout: 'logged',
  data() {
    return {
      locationData: {
        location: '',
        district_id: '',
      },
      districts: '',
    }
  },
  created() {
    this.getDistrict()
  },
  methods: {
    getDistrict() {
      get(this.$axios, 'district/')
        .then((results) => {
          this.districts = results.results
        })
        .catch((error) => {
          console.log(error)
        })
    },
    addLocation() {
      post(this.$axios, 'location/', this.locationData)
        .then((results) => {
          this.$router.push('/configure/locations')
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
})
</script>
