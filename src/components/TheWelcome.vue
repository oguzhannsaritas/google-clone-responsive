<script setup>
import Youtube from '../components/Youtube.vue';
import User from './User.vue';

</script>

<template>
  <div class="w-full max-lg:w-full h-screen flex items-center justify-center ">

    <div class="w-[40%] box-content text-center mt-3 ml-[30%]">
      <div class="h-56  -ml-2  min-w-full flex flex-col m-auto">
        <img src="../assets/google.svg" class="h-[340px] flex ">
      </div>

      <form class="flex">


        <div class="flex absolute   justify-center rounded-s-full mt-7 ml-[102px] h-[44px] w-16 bg-white  ">
          <img src="../assets/search.svg" class="flex self-center mt-2 mr-2 h-[27px] cursor-pointer">
        </div>
        <input type="search" placeholder="Google'da arama yapın veya bir URL yazın"
          class="w-[63%] inline-block  pr-1 h-[44px] relative border-solid border-[0px] outline-none left-3 mb-[550px]  mt-7 m-auto placeholder-gray-600">

        <div class="flex absolute   justify-center rounded-e-full mt-7 ml-[600px] h-[44px] w-16 bg-white ">
          <a href="/"> <img src="../assets/microphone.svg" class="flex self-center  mt-3 h-[21px]"></a>

        </div>

      </form>
      <button
        class="flex absolute flex-col h-[34px] w-[160px] self-center -mt-5 ml-[60%] rounded-full bg-33  text-138 text-[13px] font-normal m-auto hover:bg-08 duration-200 ">
        <img src="../assets/pencil.svg" class="flex relative h-[17px] left-4 mt-2">
        <p class="flex  -mt-[18px] self-center ml-7 font-google">Chrome'u özelleştir</p>
      </button>
    </div>
    <youtube />

    <User />



  </div></template>
