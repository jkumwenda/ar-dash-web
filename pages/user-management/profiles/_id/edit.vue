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
        Update User Profile
        <p class="text-sm flex flex-row">
          <solid-information-circle-icon class="w-4 h-4" />User details
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
        @submit.prevent="updateProfile"
      >
        <div class="flex flex-wrap my-6">
          <div class="w-full md:w-1/2 md:pr-1">
            <label
              class="block uppercase text-gray-500 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              First Name
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
              id="first_name"
              name="first_name"
              v-model="profileData.first_name"
              type="text"
              placeholder="First name..."
            />
            <p class="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div class="w-full md:w-1/2 md:pl-1">
            <label
              class="block uppercase text-gray-500 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Last Name
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
              id="last_name"
              name="last_name"
              v-model="profileData.last_name"
              type="text"
              placeholder="Last name..."
            />
          </div>
        </div>

        <div class="flex flex-wrap my-6">
          <div class="w-full">
            <label
              class="block uppercase text-gray-500 text-xs font-bold mb-2"
              for="grid-username"
            >
              Username
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
              id="username"
              name="username"
              v-model="profileData.username"
              type="text"
              placeholder="Username ..."
            />
            <p class="text-gray-600 text-xs italic">
              Make it as long and as crazy as you'd like
            </p>
          </div>
        </div>

        <div class="flex flex-wrap my-6">
          <div class="w-full md:w-1/2 md:pr-1">
            <label
              class="block uppercase text-gray-500 text-xs font-bold mb-2"
              for="grid-email"
            >
              Email
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
              id="email"
              name="email"
              v-model="profileData.email"
              type="email"
              placeholder="Email ..."
            />
            <p class="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div class="w-full md:w-1/2 md:pl-1">
            <label
              class="block uppercase text-gray-500 text-xs font-bold mb-2"
              for="grid-phone-number"
            >
              Phone number
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
              id="phone_number"
              name="phone_number"
              v-model="profileData.phone_number"
              type="text"
              placeholder="Phone number ..."
            />
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
              Save
            </button>
          </div>
          <div class="w-full md:w-1/2 py-1 md:pl-1">
            <nuxt-link
              to="/user-management/profiles"
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
                text-center
              "
            >
              Cancel
            </nuxt-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { update, get } from '~/services/api.service'
export default {
  layout: 'logged',
  head() {
    return {
      title: 'ArDash - Add User',
    }
  },
  data() {
    return {
      profileData: {
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        phone_number: '',
      },
    }
  },
  created() {
    this.getProfile()
  },
  methods: {
    getProfile() {
      get(this.$axios, 'profile/' + this.$route.params.id + '/')
        .then((result) => {
          this.profileData.first_name = result.user.first_name
          this.profileData.last_name = result.user.last_name
          this.profileData.username = result.user.username
          this.profileData.email = result.user.email
          this.profileData.phone_number = result.phone_number
        })
        .catch((error) => {
          console.log(error)
        })
    },
    async updateProfile() {
      update(
        this.$axios,
        'profile/' + this.$route.params.id + '/',
        this.profileData
      )
        .then((results) => {
          this.$router.push('/user-management/profiles')
        })
        .catch((error) => {
          console.log('This is my error coming from the backend ', error)
        })
    },
  },
}
</script>
