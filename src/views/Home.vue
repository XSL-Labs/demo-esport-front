<template>
  <div
    class="
      bg-gray-500 bg-opacity-20
      border-none
      w-4/5
      md:w-2/4
      rounded-xl
      m-auto
      p-5
      md:p-10
    "
  >
    <p class="text-center text-2xl md:text-4xl text-gray-50 mb-5">
      <i class="fas fa-id-card-alt mr-3"></i>DID register
    </p>
    <p class="text-center text-sm text-gray-500 mb-1">
      Connect safely using the mobile application.
    </p>
    <p class="text-center text-sm text-gray-500 mb-10">
      XSL Labs provides decentralized solutions for dataless authentication.
    </p>
    <div class="flex justify-center">
      <router-link to="/register">
        <div
          class="
            text-sm
            md:text-lg
            text-white text-center
            bg-purple-700
            font-semibold
            w-24
            md:w-48
            rounded-xl
            py-3
            px-5
            cursor-pointer
          "
        >
          Register
        </div></router-link
      >
    </div>
  </div>
</template>
