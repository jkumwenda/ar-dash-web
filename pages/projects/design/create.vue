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
        New Project
        <p class="text-sm flex flex-row">
          <solid-information-circle-icon class="w-4 h-4" />Project details
          details
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
        @submit.prevent="addProject"
      >
        <div class="flex flex-wrap my-6">
          <div class="w-full">
            <label
              class="block uppercase text-gray-500 text-xs font-bold mb-2"
              for="grid-project"
            >
              Project name
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
              id="role"
              name="project_name"
              v-model="projectData.project_name"
              type="text"
              placeholder="Project name ..."
            />
            <p class="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
        </div>

        <div class="flex flex-wrap my-6">
          <div class="w-full md:w-1/2 md:pr-1">
            <label
              class="block uppercase text-gray-500 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Project Manager
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
              id="project_manager"
              name="project_manager"
              v-model="projectData.project_manager"
              type="text"
              placeholder="Project Manager..."
            >
              <option
                :value="profile.user_id"
                v-for="profile in profiles"
                :key="profile.user_id"
              >
                {{ profile.user.email }}
              </option>
            </select>
            <p class="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div class="w-full md:w-1/2 md:pr-1">
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
              Client
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
              id="client"
              name="client_id"
              v-model="projectData.client_id"
              type="text"
              placeholder="Client..."
            >
              <option
                :value="client.client_id"
                v-for="client in clients"
                :key="client.client_id"
              >
                {{ client.user.email }}
              </option>
            </select>
            <p class="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
        </div>

        <div class="flex flex-wrap my-6">
          <div class="w-full md:w-1/2 md:pr-1">
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
                Location
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
                id="location"
                name="location_id"
                v-model="projectData.location_id"
                type="text"
                placeholder="Location..."
              >
                <option
                  :value="location.location_id"
                  v-for="location in locations"
                  :key="location.location_id"
                >
                  {{ location.location }}
                </option>
              </select>
              <p class="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
          </div>

          <div class="w-full md:w-1/2 md:pr-1">
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
                Building Type
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
                id="client"
                name="client_id"
                v-model="projectData.building_type_id"
                type="text"
                placeholder="Building type..."
              >
                <option
                  :value="building_type.building_type_id"
                  v-for="building_type in building_types"
                  :key="building_type.building_type_id"
                >
                  {{ building_type.building_type }}
                </option>
              </select>
              <p class="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap my-6">
          <div class="w-full">
            <label
              class="block uppercase text-gray-500 text-xs font-bold mb-2"
              for="grid-description"
            >
              Description
            </label>
            <textarea
              class="
                block
                w-full
                text-gray-500
                border border-gray-300
                rounded-lg
                py-3
                px-4
                mb-3
                focus:outline-none
              "
              id="description"
              name="description"
              v-model="projectData.description"
              type="text"
              placeholder="Project description ..."
            ></textarea>

            <p class="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
        </div>

        <div class="flex flex-wrap my-6">
          <div class="w-full md:w-1/2 md:pr-1">
            <label
              class="block uppercase text-gray-500 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Start Date
            </label>
            <date-picker
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
              id="start_date"
              name="start_date"
              type="text"
              placeholder="MM/DD/YYYY"
              format="MM/dd/yyyy"
              v-model="projectData.start_date"
            />
            <p class="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div class="w-full md:w-1/2 md:pl-1">
            <label
              class="block uppercase text-gray-500 text-xs font-bold mb-2"
              for="grid-end-date-picker"
            >
              End Date
            </label>
            <date-picker
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
              id="end_date"
              name="end_date"
              type="text"
              placeholder="MM/DD/YYYY"
              format="MM/dd/yyyy"
              v-model="projectData.end_date"
            />
          </div>
        </div>

        <div class="flex flex-wrap my-6">
          <div class="w-full">
            <label
              class="block uppercase text-gray-500 text-xs font-bold mb-2"
              for="grid-project"
            >
              Status
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
              v-model="projectData.status_id"
              type="text"
              placeholder="Building type..."
            >
              <option
                :value="status.status_id"
                v-for="status in statuses"
                :key="status.status_id"
              >
                {{ status.status }}
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
              to="/projects/design"
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
      projectData: {
        project_name: '',
        project_manager: '',
        client_id: '',
        building_type_id: '',
        location_id: '',
        description: '',
        start_date: new Date(),
        end_date: new Date(),
        status_id: '',
      },
      districts: '',
      profiles: '',
      building_types: '',
      clients: '',
      locations: '',
      statuses: '',
      project_id: '',
    }
  },
  created() {
    this.getProfile()
    this.getBuildingType()
    this.getLocation()
    this.getClient()
    this.getStatus()
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

    getProfile() {
      get(this.$axios, 'profile/')
        .then((results) => {
          this.profiles = results.results
        })
        .catch((error) => {
          console.log(error)
        })
    },

    getBuildingType() {
      get(this.$axios, 'building_type/')
        .then((results) => {
          this.building_types = results.results
        })
        .catch((error) => {
          console.log(error)
        })
    },

    getLocation() {
      get(this.$axios, 'location/')
        .then((results) => {
          this.locations = results.results
        })
        .catch((error) => {
          console.log(error)
        })
    },

    getStatus() {
      get(this.$axios, 'status/')
        .then((results) => {
          this.statuses = results.results
        })
        .catch((error) => {
          console.log(error)
        })
    },

    getClient() {
      get(this.$axios, 'client/')
        .then((results) => {
          this.clients = results.results
        })
        .catch((error) => {
          console.log(error)
        })
    },

    addProject() {
      post(this.$axios, 'project/', this.projectData)
        .then((result) => {
          this.project_id = result.project_id
          this.$router.push('/projects/design/' + this.project_id)
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
})
</script>
