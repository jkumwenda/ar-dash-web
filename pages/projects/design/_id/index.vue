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
      <div class="text-xl">Project</div>
    </div>

    <div class="flex flex-col lg:flex-row flex-grow">
      <div class="w-12/12 lg:w-8/12">
        <div class="flex space-y-6">
          <div
            class="
              flex flex-col flex-grow
              m-5
              p-6
              rounded-xl
              border border-gray-200
              text-white
              bg-gradient-to-r
              from-blue-700
              to-blue-500
            "
          >
            <h2 class="flex-grow text-xl pb-2 text-blue-200">
              Project details
            </h2>
            <div class="flex flex-row flex-grow">
              <p class="font-semibold pr-5">Project Name</p>
              <p>{{ project.project_name }}</p>
            </div>
            <template v-if="project.manager">
              <div class="flex flex-row flex-grow">
                <p class="font-semibold pr-5">Project Manager</p>
                <p>
                  {{ project.manager.first_name }}
                  {{ project.manager.last_name }}
                </p>
              </div>
            </template>
            <div class="flex flex-row flex-grow">
              <p class="font-semibold pr-5">Duration</p>
              <p class="text-sm">
                {{ project.start_date }}
                {{ project.end_date }}
              </p>
            </div>
          </div>
        </div>

        <div class="flex flex-col lg:flex-row flex-grow text-gray-500">
          <div
            class="
              w-12/12
              lg:w-6/12
              m-5
              p-6
              bg-white
              rounded-xl
              border border-gray-200
            "
          >
            <h2 class="flex-grow text-xl pb-2">Client details</h2>
            <template v-if="project.client">
              <div class="flex flex-row flex-grow">
                <p class="font-semibold pr-5">Name</p>
                <p>
                  {{ project.client.user.first_name }}
                  {{ project.client.user.last_name }}
                </p>
              </div>
              <div class="flex flex-row flex-grow">
                <p class="font-semibold pr-5">Email</p>
                <p>{{ project.client.user.email }}</p>
              </div>
              <div class="flex flex-row flex-grow">
                <p class="font-semibold pr-5">Phone</p>
                {{ project.client.phone_number }}
              </div>
            </template>
          </div>
          <div
            class="
              w-12/12
              lg:w-6/12
              m-5
              p-6
              bg-white
              rounded-xl
              border border-gray-200
            "
          >
            <h2 class="flex-grow text-xl pb-2 text-gray-500">
              Location details
            </h2>
            <template v-if="project.location">
              <div class="flex flex-row flex-grow">
                <p class="font-semibold pr-5">Location</p>
                {{ project.location.location }}
              </div>
              <div class="flex flex-row flex-grow">
                <p class="font-semibold pr-5">District</p>
                {{ project.location.district.district }}
              </div>
            </template>
          </div>
        </div>

        <div class="flex space-y-6 text-gray-500">
          <div
            class="
              flex flex-col flex-grow
              m-5
              p-6
              rounded-xl
              border border-gray-200
              bg-white
            "
          >
            <div class="flex flex-row">
              <h2 class="flex-grow text-xl font-md pb-2">Project Spaces</h2>
              <button
                class="
                  bg-gradient-to-r
                  from-blue-800
                  to-blue-600
                  text-blue-100
                  flex flex-row
                  rounded-xl
                  py-2
                  px-2
                  font-bold
                  text-sm
                "
                @click="showAddProjectSpaceModal = true"
              >
                <solid-plus-icon class="w-5 h-5 font-extrabold" /> Add space
              </button>
            </div>
            <div class="flex flex-wrap flex-grow mt-2">
              <div
                class="bg-gray-100 rounded-xl m-1"
                v-for="project_space in project_spaces"
                :key="project_space.project_space_id"
              >
                <div class="py-3 px-4 m-1">
                  <p class="font-semibold">{{ project_space.space.space }}</p>
                  <p>{{ project_space.size }} m</p>
                </div>

                <p class="bg-blue-600 px-4 pt-1 rounded-b-xl">
                  <button
                    class="rounded-lg m-0"
                    @click="editSpaceModal(project_space.project_space_id)"
                  >
                    <solid-pencil-alt-icon class="w-5 h-5 text-blue-200" />
                  </button>

                  <button
                    class="rounded-lg m-0"
                    @click="deleteProjectSpace(project_space.project_space_id)"
                  >
                    <solid-trash-icon class="w-5 h-5 text-blue-200" />
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-12/12 lg:w-4/12 text-gray-500">
        <div
          class="
            flex flex-col flex-grow
            m-5
            p-4
            py-5
            bg-white
            rounded-xl
            border border-gray-200
          "
        >
          <h2
            class="
              flex-grow
              text-md
              bg-blue-500
              font-xl
              p-4
              border border-xl
              text-blue-100
              rounded-2xl
              mb-4
              mx-1
            "
          >
            Project Stages
          </h2>
          <div class="flex flex-row w-full">
            <div
              class="
                bg-white
                flex-none
                text-center text-gray-500
                rounded-full
                inline-block
                align-middle
                border-2 border-blue-400
                font-semibold
                px-4
                p-2
                mx-1
              "
            >
              1
            </div>
            <div
              class="
                bg-gray-100
                flex-grow
                rounded-full
                inline-block
                align-middle
                border-2 border-gray-100
                px-4
                p-2
              "
            >
              Sketching
            </div>
          </div>
          <div class="flex flex-row w-full">
            <div
              class="
                flex-none
                text-center text-gray-500
                inline-block
                align-middle
                border-1 border-blue-400
                font-semibold
                px-2
                mx-1
                py-0
                my-0
              "
            >
              <outline-arrow-narrow-down-icon class="w-6 h-10 text-blue-400" />
            </div>
          </div>
          <div class="flex flex-row w-full">
            <div
              class="
                bg-white
                flex-none
                text-center text-gray-500
                rounded-full
                inline-block
                align-middle
                border-2 border-gray-400
                font-semibold
                px-4
                p-2
                mx-1
              "
            >
              2
            </div>
            <div
              class="
                bg-gray-100
                flex-grow
                rounded-full
                inline-block
                align-middle
                border-2 border-gray-100
                px-4
                p-2
              "
            >
              Drawing
            </div>
          </div>
          <div class="flex flex-row w-full">
            <div
              class="
                flex-none
                text-center text-gray-500
                inline-block
                align-middle
                border-1 border-gray-400
                font-semibold
                px-2
                mx-1
                py-0
                my-0
              "
            >
              <outline-arrow-narrow-down-icon class="w-6 h-10 text-gray-400" />
            </div>
          </div>
          <div class="flex flex-row w-full">
            <div
              class="
                bg-white
                flex-none
                text-center text-gray-500
                rounded-full
                inline-block
                align-middle
                border-2 border-gray-400
                font-semibold
                px-4
                p-2
                mx-1
              "
            >
              3
            </div>
            <div
              class="
                bg-gray-100
                flex-grow
                rounded-full
                inline-block
                align-middle
                border-2 border-gray-100
                px-4
                p-2
              "
            >
              3D Modeling
            </div>
            <div
              class="
                bg-gray-100
                flex-none
                rounded-full
                inline-block
                align-middle
                border-2 border-gray-100
                px-3
                p-2
                pt-3
                mx-1
                pb-1
              "
            >
              <button
                class="rounded-lg m-0"
                @click="editSpaceModal(project_space.project_space_id)"
              >
                <solid-pencil-alt-icon
                  ChatAlt2Icon
                  class="w-4 h-4 text-blue-500 font-bold"
                />
              </button>
              <button
                class="rounded-lg m-0"
                @click="editSpaceModal(project_space.project_space_id)"
              >
                <solid-chat-alt2-icon class="w-4 h-4 text-blue-500 font-bold" />
              </button>
              <button
                class="rounded-lg m-0"
                @click="deleteProjectSpace(project_space.project_space_id)"
              >
                <solid-trash-icon class="w-4 h-4 text-blue-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AddSpaceModal
      v-show="showAddProjectSpaceModal"
      @close-modal="showAddProjectSpaceModal = false"
    />
    <EditSpaceModal
      v-show="showEditProjectSpaceModal"
      @close-modal="showEditProjectSpaceModal = false"
    />
  </div>
</template>

<script>
import { get, destroy } from '~/services/api.service'
import AddSpaceModal from '~/components/AddSpaceModal.vue'
import EditSpaceModal from '~/components/EditSpaceModal.vue'

export default {
  layout: 'logged',
  components: { AddSpaceModal, EditSpaceModal },

  data() {
    return {
      project: '',
      project_spaces: '',
      project_space_id: '',
      project_space: '',
      showAddProjectSpaceModal: false,
      showEditProjectSpaceModal: false,
    }
  },
  created() {
    this.getProject()
    this.getProjectSpaces()
  },
  methods: {
    editSpaceModal(project_space_id) {
      this.project_space_id = project_space_id
      this.getProjectSpace()
      this.showEditProjectSpaceModal = true
    },
    getProject() {
      get(this.$axios, 'project/' + this.$route.params.id + '/')
        .then((result) => {
          this.project = result
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getProjectSpaces() {
      get(this.$axios, 'project_space/?project_id=' + this.$route.params.id)
        .then((results) => {
          this.project_spaces = results.results
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getProjectSpace() {
      get(this.$axios, 'project_space/' + this.project_space_id + '/')
        .then((result) => {
          this.project_space = result
          console.log('Bola zatheka', this.project_space)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    deleteProjectSpace(project_space_id) {
      destroy(this.$axios, 'project_space/' + project_space_id + '/')
        .then((results) => {}, this.$router.go())
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>
