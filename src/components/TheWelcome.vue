<script setup>
import Youtube from '../components/Youtube.vue';
import User from './User.vue';

</script>

<template>
  <div class="flex flex-col items-center m-auto  justify-center h-screen">
    <div class="w-full max-w-lg  mt-11 ml-20  text-center">
      <div class="h-[340px]  ml-12 mx-auto">
        <img src="../assets/google.svg" class="h-full" alt="Google logo">
      </div>
      <form class="flex -mt-[90px] static -ml-14 items-center">
        <div class="flex justify-center items-center rounded-full absolute border-none h-10 w-12 bg-white">
          <img src="../assets/search.svg" class="h-[27px] cursor-pointer mt-2 ml-2 " alt="Search icon">
        </div>
        <input type="search" placeholder="Google'da arama yapın veya bir URL yazın"
          class="flex-1 px-2 h-11  border-none pl-12  mr-2 rounded-full focus:outline-none  ">
        <div class="flex justify-center items-center rounded-full h-10  absolute  ml-[510px]   w-12 bg-white">
          <a href="/">
            <img src="../assets/microphone.svg" class="h-[21px] mr-2 " alt="Microphone icon">
          </a>
        </div>
      </form>
    </div>
    <div class="absolute hidden  mt-[45%] m-auto right-4  lg:flex">
      <button
        class="flex items-center  justify-center h-[34px] w-[168px]   shadow-lg shadow-neutral-950/20 bg-32 rounded-full bg-blue-500 text-138 hover:bg-08 duration-100 " >
        <img src="../assets/pencil.svg" class="h-4 mr-2" alt="Pencil icon">
        <span class="text-[81%] font-google font-normal">Chrome'u özelleştir</span>
      </button>
    </div>
    <user />
    <youtube class="-left-1 top-12" />
  </div>
</template>