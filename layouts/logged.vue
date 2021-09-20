<template>
  <div
    class="flex flex-col lg:flex-row max-h-full min-h-screen font-metropolis"
  >
    <div class="w-12/12 lg:w-2/12 flex flex-col bg-white p-5 text-blue-50">
      <LoadSpinner v-if="showHideSpinner" />
      <Logo />
      <TheSidebar />
    </div>
    <div class="w-12/12 lg:w-10/12 flex flex-col bg-gray-100">
      <div class="header border-b-3 border-blue-50 py-5 px-10">
        <TheHeader />
      </div>
      <div class="content flex-grow px-5"><Nuxt /></div>
      <div class="footer border-t-2 border-gray-200 py-5 px-10">
        <TheFooter />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo'
import TheSidebar from '~/components/TheSidebar'
import TheHeader from '~/components/TheHeader'
import TheFooter from '~/components/TheFooter'

export default {
  name: 'logged',
  components: { Logo, TheSidebar, TheHeader, TheFooter },
  data() {
    return {
      showHideSpinner: true,
    }
  },
  beforeCreate() {
    this.showHideSpinner = true
  },
  mounted() {
    this.showHideSpinner = false
  },
}
</script>
