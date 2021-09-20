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
      <div class="text-xl">Users</div>
    </div>
    <div
      class="
        flex flex-col flex-grow
        mx-5
        p-4
        bg-white
        rounded-xl
        border border-gray-200
        my-5
      "
    >
      JOEL KUMWENDA
    </div>
  </div>
</template>

<script>
import { get, destroy } from '~/services/api.service'

export default {
  layout: 'logged',
  created() {
    console.log('This has loaded fine', this.$route.params.id)
    this.getUser()
  },
  methods: {
    load() {
      console.log('Load works')
    },
    create() {
      this.$router.push('/user-management/users/create')
    },
    filter() {
      const dropdown = document.querySelector('#filterSearch')
      dropdown.classList.toggle('hidden')
      dropdown.classList.toggle('origin-top-right')
    },
    filterClose() {
      const dropdown = document.querySelector('#filterSearch')
      dropdown.classList.toggle('hidden')
    },
    gridOption(gridData) {
      const dropdown = document.querySelector('#' + gridData)
      dropdown.classList.toggle('hidden')
      dropdown.classList.toggle('origin-top-right')
    },
    edit(user_id) {
      console.log(user_id)
      this.$router.push('/user-management/users/' + { user_id })
    },
    getUser() {
      get(this.$axios, 'user/' + this.$route.params.id + '/')
        .then((results) => {
          console.log('Get user user', results)
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
  data() {
    return {
      users: {},
      count: '',
      previous: '',
      next: '',
    }
  },
  async fetch() {
    get(this.$axios, 'user/')
      .then((results) => {
        this.users = results.results
        this.count = results.count
        this.next = results.next
        this.previous = results.previous
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>
