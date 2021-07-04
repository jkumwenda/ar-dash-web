<template>
  <div class="flex flex-col">
    <div class="flex flex-row bg-white text-gray-500 border border-white rounded-xl shadow mx-5 p-5">
      <solid-information-circle-icon class="w-4 h-4"/> <div>The form template with all based basic form requirements </div>
    </div>   
    <div class="flex flex-col flex-grow border-primary-100 hover:border-gray-300 p-5">
      
      <form class="w-full max-w-3xl" @submit.prevent="onSubmit">
        <div class="flex flex-wrap my-6">
          <div class="w-full md:w-1/2 md:pr-1">
            <label class="block uppercase text-gray-500 text-xs font-bold mb-2" for="grid-first-name">
              First Name
            </label>
            <input class="block w-full text-gray-500 border border-gray-300 rounded-lg  py-3 px-4 mb-3 focus:outline-none" type="text" placeholder="First Name">
            <p class="text-red-500 text-xs italic">Please fill out this field.</p>
          </div>
          <div class="w-full md:w-1/2 md:pl-1">
            <label class="block uppercase text-gray-500 text-xs font-bold mb-2" for="grid-last-name">
              Last Name
            </label>
            <input class="block w-full text-gray-500 border border-gray-300 rounded-lg  py-3 px-4 mb-3 focus:outline-none" id="grid-last-name" type="text" placeholder="Last Name">
          </div>
        </div>

        <div class="flex flex-wrap my-6">
          <div class="w-full">
            <label class="block uppercase text-gray-500 text-xs font-bold mb-2" for="grid-password">
              Password
            </label>
            <input class="block w-full text-gray-500 border border-gray-300 rounded-lg  py-3 px-4 mb-3 focus:outline-none" id="grid-password" type="password" placeholder="******************">
            <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
          </div>
        </div>

        <div class="flex flex-wrap my-6">
          <div class="w-full md:w-1/3 md:pr-1">
            <label class="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" for="grid-city">
              City
            </label>
            <input class="block w-full text-gray-500 border border-gray-300 rounded-lg  py-3 px-4 mb-3 focus:outline-none" type="text" placeholder="Albuquerque">
          </div>
          <div class="w-full md:w-1/3 md:px-1">
            <label class="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" for="grid-zip">
              State
            </label>
            <select class="block w-full text-gray-500 border border-gray-300 rounded-lg  py-3.5 px-4 mb-3 focus:outline-none" id="grid-zip" type="text" placeholder="90210">
              <option>New Mexico</option>
              <option>Missouri</option>
              <option>Texas</option>
            </select>
          </div>
          <div class="w-full md:w-1/3 md:pl-1">
            <label class="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" for="grid-zip">
              Zip
            </label>
            <input class="block w-full text-gray-500 border border-gray-300 rounded-lg  py-3 px-4 mb-3 focus:outline-none" id="grid-zip" type="text" placeholder="90210">
          </div>    
        </div>

        <div class="flex flex-wrap my-6">
          <div class="w-full">
            <label class="block uppercase text-gray-500 text-xs font-bold mb-2" for="grid-password">
              Description
            </label>
            <textarea class="block w-full text-gray-500 border border-gray-300 rounded-lg  py-3 px-4 mb-3 focus:outline-none" id="grid-textarea" type="textarea" placeholder="Description"></textarea>
            <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
          </div>
        </div>

        <div class="flex flex-wrap mb-6">
          <div class="w-full md:w-1/2 py-1 md:pr-1">
            <button type='submit' class="block w-full bg-blue-900 font-bold text-white border-1 rounded-lg border-blue-500  hover:bg-blue-800 focus:outline-none focus:border-gray-500 py-3 px-4">Submit</button>
          </div>
          <div class="w-full md:w-1/2 py-1 md:pl-1">
            <button class="block w-full font-bold text-blue-800 border-1 bg-blue-100  hover:bg-gray-100 rounded-lg focus:outline-none focus:border-blue-200 py-3 px-4 mb-3">Cancel</button>
          </div>
        </div> 
      </form>
    </div>
  </div>      
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    layout: 'logged',
    methods: {
      onSubmit() {
        console.log('Submit login form')
        this.$router.push('/templates')
      }
    },  
  })
</script>