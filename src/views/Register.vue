<template>
  <div
    class="
      bg-gray-500 bg-opacity-20
      border-none
      w-4/5
      m-auto
      md:w-2/4
      rounded-xl
      p-5
      md:p-10
    "
  >
    <p class="text-2xl md:text-4xl text-gray-50 mb-5">
      <span @click="$router.push('/')"
        ><i
          class="fas fa-arrow-left text-2xl mr-4 md:mb-0.5 cursor-pointer"
        ></i></span
      >Register
    </p>
    <hr class="border-t-1 border-white border-opacity-20 w-full py-5" />
    <p class="text-center text-l text-gray-50 mb-2">
      Scan QR code with the dedicated application to connect :
    </p>
    <div class="flex justify-center mb-5">
      <custom-loader
        v-if="loading"
        class="mr-2 mt-0.5"
        color="#5d4ff6 "
        size="20px"
      >
      </custom-loader>
      <p class="text-center text-l text-purple-500">
        {{ status }}
      </p>
    </div>
    <qrcode-vue
      v-if="qrCode"
      :value="qrCode"
      :size="270"
      level="H"
      class="bg-white mx-auto mb-5 p-4"
    />
    <p
      v-if="verifiableCredentials.length > 0"
      class="text-center text-sm text-gray-500 mb-1"
    >
      <i class="fas fa-shield-alt mr-1"></i>Verifiable credentials needed :
    </p>
    <p
      class="text-center text-md text-gray-100"
      v-for="vc in verifiableCredentials"
      :key="vc"
    >
      {{ vc }}
    </p>
  </div>
</template>

<script>
import { ref, inject, onBeforeUnmount } from 'vue';
export default {
  async setup() {
    const $api = inject('$api');
    const $cookies = inject('$cookies');
    const qrCode = ref('');
    const status = ref('');
    const verifiableCredentials = ref({});
    const loading = ref(false);

    onBeforeUnmount(() => {
      $api.closeChallengeValidation();
    });

    const newChallenge = (await $api.createChallenge()).data;
    qrCode.value = JSON.stringify(newChallenge);
    verifiableCredentials.value = newChallenge.verifiableCredentials;

    // CREATE SSE CONNECTION
    $api.waitChallengeValidation(newChallenge.challenge, (response) => {
      switch (response.status) {
        case 'waiting':
          status.value = 'Waiting scan from mobile application';
          loading.value = true;
          break;
        case 'treating':
          status.value = 'Checking your registration';
          loading.value = true;
          break;
        case 'expired':
          status.value = 'Error while registrating : ' + response.message;
          loading.value = false;
          break;
        case 'validated':
          status.value = "Congratulations, you're registered. Redirecting...";
          loading.value = false;
          $cookies.set('token', response.token);
          setTimeout(() => window.location.replace('/user'), 1000);
          break;
      }
    });

    return {
      qrCode,
      status,
      verifiableCredentials,
      loading,
    };
  },
};
</script>
