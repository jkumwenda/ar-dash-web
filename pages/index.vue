<template>
  <div class="w-2/2 lg:w-1/2 flex flex-col flex-grow p-5 bg-blue-50">
    <div class="flex flex-col flex-grow items-center justify-center">
      <div class="w-full lg:max-w-xl text-4xl font-extrabold text-blue-800">
        <span class="text-blue-400">Arch</span>Dash
      </div>
      <form class="w-full lg:max-w-xl" @submit.prevent="userLogin">
        <div class="flex flex-wrap my-6">
          <div class="w-full">
            <label
              class="block uppercase text-gray-700 text-xs font-extrabold mb-2"
              for="grid-password"
            >
              Username
            </label>
            <input
              class="
                block
                w-full
                text-gray-500
                border border-white
                rounded-lg
                shadow-md
                py-3
                px-4
                mb-3
                focus:outline-none
              "
              id="username"
              name="username"
              type="text"
              placeholder="Username..."
              v-model="loginData.username"
            />
            <p class="text-gray-600 text-xs italic">
              Make it as long and as crazy as you'd like
            </p>
          </div>
        </div>

        <div class="flex flex-wrap my-6">
          <div class="w-full">
            <label
              class="block uppercase text-gray-500 text-xs font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="
                block
                w-full
                text-gray-500
                border border-white
                rounded-lg
                shadow
                py-3
                px-4
                mb-3
                focus:outline-none
              "
              id="password"
              name="password"
              v-model="loginData.password"
              type="password"
              placeholder="******************"
            />
            <p class="text-gray-600 text-xs italic">
              Make it as long and as crazy as you'd like
            </p>
          </div>
        </div>

        <div class="flex flex-wrap mb-6">
          <div class="w-full md:w-1/2 py-1 md:pr-1">
            <button
              type="submit"
              class="
                bg-blue-900
                font-bold
                text-white
                rounded-xl
                hover:bg-blue-800
                focus:outline-none focus:border-gray-500
                py-3
                px-10
              "
            >
              Sign In
            </button>
          </div>
        </div>

        <div class="flex flex-wrap my-6">
          <div class="w-full">
            <label class="block text-gray-700 font-bold mb-2 text-sm">
              Don't have an Account?
              <nuxt-link
                to="/register"
                class="text-blue-800 hover:text-blue-600 cursor-pointer"
                >Register</nuxt-link
              >
            </label>
          </div>
        </div>
      </form>
    </div>

    <div class="flex justify-between w-full">
      <div class="font-bold text-sm">Powered by: Lojik Solutions Inc</div>
      <div
        class="
          uppercase
          font-bold
          text-sm text-blue-600
          hover:text-blue-400
          cursor-pointer
        "
      >
        <nuxt-link to="">Download App</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'auth',
  head() {
    return {
      title: 'ArDash - Welcome',
    }
  },
  data() {
    return {
      loginData: {
        username: '',
        password: '',
      },
    }
  },
  methods: {
    async userLogin() {
      await this.$axios
        .$post('auth/', this.loginData, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then((result: any) => {
          let token = result.access
          let tokenParts = token.split(/\./)
          const tokenDecoded = JSON.parse(window.atob(tokenParts[1]))
          let user_id = tokenDecoded.user_id
          localStorage.setItem('token', token)
          this.getUser(user_id, token)
          this.$router.push('/dashboard')
        })
        .catch((error: any) => {
          console.log(error)
        })
    },
    async getUser(user_id: any, token: any) {
      await this.$axios
        .$get('user/' + user_id + '/', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        })
        .then((result: any) => {
          localStorage.setItem('user_id', result.id)
          localStorage.setItem('first_name', result.first_name)
          localStorage.setItem('last_name', result.last_name)
          localStorage.setItem('username', result.username)
          localStorage.setItem('email', result.email)
        })
        .catch((error: any) => {
          console.log(error)
        })
    },
  },
})
</script>
