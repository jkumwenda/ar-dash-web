<template>
    <div class="flex flex-col">
        <div class="flex flex-row bg-white text-gray-500 border border-white rounded-xl shadow mx-5 p-5">
            <solid-information-circle-icon class="w-4 h-4"/> <div>Page Header <p>Some content</p></div>
        </div>    
        <div class="flex flex-row p-5">
            <div class="flex flex-row flex-grow pr-1 lg:pr-5 items-center justify-center">
                <input class="flex-grow border-2 border-blue-200 rounded-xl w-full py-4 px-5 text-gray-700 mr-1 focus:outline-none" id="search" type="text" placeholder="Search">
                <button class="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl border-4 border-blue-200 ml-2 leading-tight focus:outline-none focus:shadow-outline">Search</button>
            </div>
            <div class="pr-1 flex items-center justify-center">
                <button @click="form" class="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl border-4 border-blue-200 ml-2 leading-tight focus:outline-none focus:shadow-outline">Form</button>
            </div>
        </div> 
        <div class="flex flex-col flex-grow border-primary-100 hover:border-gray-200">
            <div class="flex flex-row uppercase bg-gray-200 px-5 py-2 text-xs font-bold">
                <div class="w-2/5">User</div>
                <div class="w-1/5">Category</div>
                <div class="w-1/5">Log</div>
                <div class="w-1/5">Options</div>
            </div>
            <div class="flex flex-row border-b-4 px-5 py-5 hover:bg-gray-100">
                <div class="w-2/5">Joel</div>
                <div class="w-1/5">Joel</div>
                <div class="w-1/5">Joel</div>
                <div class="w-1/5">Joel</div>
            </div>
            <div class="flex flex-row border-b-4 px-5 py-5 hover:bg-gray-100">
                <div class="w-2/5">Joel</div>
                <div class="w-1/5">Joel</div>
                <div class="w-1/5">Joel</div>
                <div class="w-1/5">Joel</div>
            </div>            
        </div> 
        <div class="flex flex-row p-5">
            <nuxt-link to="/" class="h-12 w-12 text-blue-200 rounded-full bg-blue-800 hover:bg-blue-700 flex items-center justify-center text-xs font-extrabold">&langle;&langle;</nuxt-link>  
            <div to="/" class="h-12 w-12 mx-3 text-gray-500 font-semibold rounded-full border-2 border-blue-800 flex items-center justify-center">6</div>  
            <nuxt-link to="/" class="h-12 w-12 text-blue-200 rounded-full bg-blue-800 hover:bg-blue-700 flex items-center justify-center text-xs font-extrabold">&rangle;&rangle;</nuxt-link>
        </div>  
    </div>
</template>

<script>
    export default {
        layout: 'logged',
        methods:{
            form(){
                this.$router.push('/templates/form');
            }
        }
    }
</script>