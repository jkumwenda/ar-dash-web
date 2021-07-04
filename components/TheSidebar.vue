<template>
  <div class="text-gray-600 lg:pt-10 flex flex-col flex-grow">
    <nuxt-link
      to="/dashboard"
      class="bg-blue-800 text-blue-100 rounded-lg px-5 py-4 my-1 flex flex-row"
      ><outline-home-icon class="w-5 h-5 mr-2 text-blue-400" />
      Dashboard</nuxt-link
    >
    <div
      class="hover:bg-blue-800 hover:text-blue-100 rounded-lg px-5 py-4 my-1 flex flex-row"
    >
      <outline-table-icon class="w-5 h-5 mr-2 text-blue-400" /> Projects
    </div>
    <div
      class="hover:bg-blue-800 hover:text-blue-100 rounded-lg px-5 py-4 my-1 flex flex-row"
    >
      <outline-document-report-icon class="w-5 h-5 mr-2 text-blue-400" />
      Reports
    </div>
    <div
      class="hover:bg-blue-800 hover:text-blue-100 rounded-lg px-5 py-4 my-1 flex flex-row cursor-pointer"
      @click="userManagementDropdownMenu"
    >
      <outline-users-icon class="w-5 h-5 mr-2 text-blue-400" /> User Management
    </div>
    <div
      class="bg-white border-1 border-blue-100 shadow rounded-lg px-2 py-4 my-2 mx-4 hidden flex-col text-gray-500"
      id="userManagementDropdown"
    >
      <nuxt-link
        class="p2-1 p-1 px-5 mx-1 cursor-pointer text-sm hover:bg-gray-400 rounded hover:text-gray-50"
        to="/user-management/users"
        >System users</nuxt-link
      >
      <nuxt-link
        class="p2-1 p-1 px-5 mx-1 cursor-pointer text-sm hover:bg-gray-400 rounded hover:text-gray-50"
        to="/user-management/roles"
        >Roles</nuxt-link
      >
      <nuxt-link
        class="p2-1 p-1 px-5 mx-1 cursor-pointer text-sm hover:bg-gray-400 rounded hover:text-gray-50"
        to="/user-management/clients"
        >Client management</nuxt-link
      >
    </div>
    <div
      class="hover:bg-blue-800 hover:text-blue-100 rounded-lg px-5 py-4 my-1 flex flex-row cursor-pointer"
      @click="configureDropdownMenu"
    >
      <outline-cog-icon class="w-5 h-5 mr-2 text-blue-400" /> Configure
    </div>
    <div
      class="bg-white border-1 py-4 shadow rounded-lg px-2 py-4 my-2 mx-4 hidden flex-col text-gray-500"
      id="configureDropdown"
    >
      <div class="p2-1 p-1 px-3 p-2 mx-1 text-gray-600 text-lg" to="/">
        Design
      </div>
      <nuxt-link
        class="p2-1 p-1 px-5 mx-1 cursor-pointer text-sm hover:bg-gray-400 rounded hover:text-gray-50"
        to="/configure/design/building-types"
        >Building types</nuxt-link
      >
      <nuxt-link
        class="p2-1 p-1 px-5 mx-1 cursor-pointer text-sm hover:bg-gray-400 rounded hover:text-gray-50"
        to="/configure/design/spaces"
        >Spaces</nuxt-link
      >
      <nuxt-link
        class="p2-1 p-1 px-5 mx-1 cursor-pointer text-sm hover:bg-gray-400 rounded hover:text-gray-50"
        to="/configure/design/phases"
        >Phases</nuxt-link
      >
      <nuxt-link
        class="p2-1 p-1 px-5 mx-1 cursor-pointer text-sm hover:bg-gray-400 rounded hover:text-gray-50"
        to="/configure/design/status"
        >Status</nuxt-link
      >
      <nuxt-link
        class="p2-1 p-1 px-5 mx-1 cursor-pointer text-sm hover:bg-gray-400 rounded hover:text-gray-50"
        to="/configure/locations"
        >Locations</nuxt-link
      >
      <div class="p2-1 p-1 px-3 mx-1 text-gray-600 text-lg" to="/">
        Construction
      </div>
      <nuxt-link
        class="p2-1 p-1 px-5 mx-1 cursor-pointer text-sm hover:bg-gray-400 rounded hover:text-gray-50"
        to="#"
        >Phases</nuxt-link
      >
      <nuxt-link
        class="p2-1 p-1 px-5 mx-1 cursor-pointer text-sm hover:bg-gray-400 rounded hover:text-gray-50"
        to="#"
        >Maerials</nuxt-link
      >
    </div>
    <nuxt-link
      to="/templates"
      class="hover:bg-blue-800 hover:text-blue-100 rounded-lg px-5 py-4 my-1 flex flex-row"
      ><outline-template-icon class="w-5 h-5 mr-2 text-blue-400" />
      Templates</nuxt-link
    >
    <nuxt-link
      to="/help"
      class="hover:bg-blue-800 hover:text-blue-100 rounded-lg px-5 py-4 my-1 flex flex-row"
      ><outline-question-mark-circle-icon
        class="w-5 h-5 mr-2 text-blue-400"
      />Help</nuxt-link
    >
  </div>
</template>
<script>
export default {
  methods: {
    configureDropdownMenu() {
      const dropdown = document.querySelector('#configureDropdown')
      dropdown.classList.toggle('hidden')
      dropdown.classList.toggle('flex')
    },
    userManagementDropdownMenu() {
      const dropdown = document.querySelector('#userManagementDropdown')
      dropdown.classList.toggle('hidden')
      dropdown.classList.toggle('flex')
    },
  },
}
</script>
