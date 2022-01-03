<template>
  <v-form v-model="valid">
    <v-text-field
      v-if="hasName"
      v-model="userInfo.name"
      label="Name"
      :rules="[required('name')]"
    />

    <v-text-field
      v-model="userInfo.email"
      label="Email"
      :rules="[required('email'), emailFormat()]"
    />

    <v-text-field
      v-model="userInfo.password"
      label="Password"
      :type="showPassword ? 'text' : 'password'"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="showPassword = !showPassword"
      counter="true"
      :rules="[required('password'), minLength('password', 8)]"
    />

    <v-btn :disabled="!valid" @click="submitForm(userInfo)">
      {{ buttonText }}
    </v-btn>
  </v-form>
</template>

<script>
import validations from '@/utils/validations'
// import UserAuthPassword from '@/components/UserAuthPassword.vue'

export default {
  // components: {
  //   UserAuthPassword
  // },
  props: {
    submitForm: {
      type: Function,
      required: true
    },
    buttonText: {
      type: String,
      required: true
    },
    hasName: Boolean,
    registrationCheckboxes: Boolean
  },
  data () {
    return {
      valid: false,
      userInfo: {
        name: 'srsoft',
        email: 'daniel@gmail.com',
        password: 'password'
        // agreeToTerms: false,
        // email_daily: true,
        // email_weekly: true
      },
      ...validations
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
