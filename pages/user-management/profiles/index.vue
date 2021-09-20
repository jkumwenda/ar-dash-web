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
      <div class="text-xl">Profiles</div>
    </div>
    <div class="flex flex-row p-5">
      <div
        class="
          flex flex-none
          pr-1
          lg:pr-5
          items-center
          font-semibold
          justify-left
        "
      >
        List of all profiles
      </div>
      <div class="pr-1 flex flex-grow items-center justify-end">
        <button
          @click="create"
          class="
            flex flex-row
            bg-gradient-to-r
            from-blue-800
            to-blue-600
            hover:bg-blue-800
            text-blue-50
            py-4
            px-4
            rounded-xl
            border border-gray-200 border-1 border-blue-200
            ml-2
            leading-tight
            focus:outline-none focus:shadow-outline
          "
        >
          <solid-document-add-icon
            class="w-5 h-5 mr-2 font-extrabold text-blue-400"
          />New Profile
        </button>
        <!-- This example requires Tailwind CSS v2.0+ -->
        <div class="relative inline-block text-left z-10">
          <div>
            <button
              type="button"
              @click="filter"
              class="
                inline-flex
                justify-center
                w-full
                bg-white
                border border-white
                rounded-xl
                shadow-md
                font-semibold
                hover:bg-gray-100 hover:border-gray-100
                text-gray-500
                py-4
                px-4
                ml-2
                leading-tight
                focus:outline-none focus:shadow-outline
                z-20
              "
            >
              <solid-filter-icon
                class="w-5 h-5 mr-2 font-extrabold text-blue-500"
              />
              Filter
            </button>
          </div>

          <div
            class="
              hidden
              absolute
              right-0
              mt-2
              w-80
              border border-gray-200
              rounded-xl
              border border-gray-50
              shadow-lg
              bg-white
            "
            id="filterSearch"
            tabindex="-1"
          >
            <div class="p-4 px-2">
              <div class="flex items-center border-b border-gray-200 m-2 pb-2">
                <div class="flex-none font-extrabold">
                  <div
                    class="
                      py-2
                      items-center
                      justify-center
                      text-md
                      focus:outline-none
                    "
                  >
                    <solid-search-icon
                      class="w-7 h-7 text-blue-800 font-extrabold"
                    />
                  </div>
                </div>
                <div class="flex-grow mx-2 items-center justify-center">
                  <input
                    class="
                      block
                      w-full
                      text-gray-500 text-sm
                      font-semibold
                      rounded-lg
                      py-3
                      focus:outline-none
                    "
                    type="text"
                    placeholder="Search..."
                  />
                </div>
                <div class="flex-none items-center justify-center">
                  <button
                    class="
                      p-1
                      px-3
                      border border-gray-300
                      bg-white
                      hover:bg-gray-200
                      rounded-md
                      items-center
                      justify-center
                      focus:outline-none
                      text-sm
                    "
                    @click="filterClose"
                  >
                    esc
                  </button>
                </div>
              </div>
              <div class="font-bold text-gray-600 m-2">Results</div>
              <div
                class="
                  bg-blue-200
                  hover:bg-blue-300
                  text-gray-600
                  rounded-xl
                  border border-gray-200
                  mt-2
                  mx-2
                  p-4
                "
              >
                Another searched item
              </div>
              <div
                class="
                  bg-gray-100
                  hover:bg-gray-200
                  text-gray-600
                  rounded-xl
                  border border-gray-200
                  mt-2
                  mx-2
                  p-4
                "
              >
                Searched item
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="
        flex flex-col flex-grow
        mx-5
        p-4
        bg-white
        rounded-xl
        border border-gray-200
      "
    >
      <div
        class="flex flex-row uppercase bg-gray-300 px-5 py-5 text-xs font-bold"
      >
        <div class="w-3/12">Firstname</div>
        <div class="w-3/12">Lastname</div>
        <div class="w-3/12">Email</div>
        <div class="w-2/12">Username</div>
        <div class="w-1/12 text-right justify-items-end">Options</div>
      </div>
      <div
        class="flex flex-row bg-gray-100 px-5 py-5 mt-2 hover:bg-gray-200"
        v-for="profile in profiles"
        :key="profile.profilea_id"
      >
        <div class="w-3/12">{{ profile.user.first_name }}</div>
        <div class="w-3/12">{{ profile.user.last_name }}</div>
        <div class="w-3/12">{{ profile.user.email }}</div>
        <div class="w-2/12">{{ profile.user.username }}</div>
        <div class="w-1/12 flex flex-col flex-end">
          <!--Dropdown menu-->
          <div class="relative inline-block text-left">
            <div>
              <div
                @click="gridOption('grid-data-' + profile.profile_id)"
                class="inline-flex justify-end w-full"
              >
                <solid-dots-horizontal-icon
                  class="w-6 h-6 font-extrabold z-0"
                />
              </div>
            </div>
            <div
              class="hidden absolute right-0 rounded-md shadow-lg bg-white z-10"
              :id="'grid-data-' + profile.profile_id"
            >
              <div class="py-1">
                <nuxt-link
                  :to="`/user-management/profiles/${profile.profile_id}`"
                  class="
                    text-gray-700
                    block
                    px-4
                    py-1
                    text-sm text-center
                    hover:bg-gray-100
                    cursor-pointer
                  "
                >
                  View
                </nuxt-link>

                <nuxt-link
                  :to="`/user-management/profiles/${profile.profile_id}/edit`"
                  class="
                    text-gray-700
                    block
                    px-4
                    py-1
                    text-sm text-center
                    hover:bg-gray-100
                    cursor-pointer
                  "
                >
                  Edit
                </nuxt-link>

                <div
                  @click="deleteProfile(profile.profile_id)"
                  class="
                    text-gray-700
                    block
                    px-4
                    py-1
                    text-sm text-center
                    hover:bg-gray-100
                    cursor-pointer
                  "
                >
                  Delete
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-row p-5">
      <nuxt-link
        to="/"
        class="
          h-11
          w-11
          text-blue-100
          rounded-xl
          border border-gray-50
          shadow
          bg-blue-800
          hover:bg-blue-700
          flex
          items-center
          justify-center
          text-xs
          font-semibold
        "
      >
        <outline-arrow-circle-left-icon
          class="w-5 h-5 mx-2 font-extrabold text-blue-100"
        />
      </nuxt-link>
      <div
        to="/"
        class="
          h-11
          w-11
          mx-3
          text-gray-500
          font-semibold
          rounded-xl
          border border-gray-200 border-2 border-blue-800
          flex
          items-center
          justify-center
        "
      >
        {{ count }}
      </div>
      <nuxt-link
        to="/"
        class="
          h-11
          w-11
          text-blue-200
          rounded-xl
          border border-gray-50
          shadow
          bg-blue-800
          hover:bg-blue-700
          flex
          items-center
          justify-center
          text-xs
          font-semibold
        "
      >
        <outline-arrow-circle-right-icon
          class="w-5 h-5 mx-2 font-extrabold text-blue-100"
        />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { get, destroy } from '~/services/api.service'

export default {
  layout: 'logged',
  methods: {
    create() {
      this.$router.push('/user-management/profiles/create')
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
    edit(profile_id) {
      console.log(profile_id)
      this.$router.push('/user-management/profiles/' + { profile_id })
    },
    deleteProfile(profile_id) {
      destroy(this.$axios, 'profile/' + profile_id + '/')
        .then((results) => {
          console.log('Profile deleted')
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
  data() {
    return {
      profiles: {},
      count: '',
      previous: '',
      next: '',
    }
  },
  async fetch() {
    get(this.$axios, 'profile/')
      .then((results) => {
        this.profiles = results.results
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
