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
    <div class="text-center bg-white mt-10 rounded-2xl w-6/12 p-6" @click.stop>
      <h6>Saved!</h6>
      <p>Your Details have been saved Successfully</p>
      <button class="bg-shiraz-400">Go Home</button>
      <button @click="$emit('close-modal')">Close</button>
    </div>
    <div class="close"></div>
  </div>
</template>

<script>
export default {}
</script>
