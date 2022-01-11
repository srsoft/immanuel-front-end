<template>
  <v-form v-model="valid">
    <v-text-field
      v-model="userInfo.church"
      label="교회명"
      :rules="[required('church', '교회명을 입력해주세요!')]"
      class="mt-10"
    />
    <v-text-field
      v-model="userInfo.address"
      label="주소지"
      :rules="[required('address', '주소지를 입력해주세요!')]"
    />
    <v-text-field
      v-model="userInfo.minister"
      label="대표 목사님명"
      :rules="[required('minister', '대표 목사님명을 입력해주세요!')]"
    />
    <v-btn :disabled="!valid" @click="submitForm(userInfo)">
      {{ buttonText }}
    </v-btn>
  </v-form>
</template>

<script>
import validations from '@/utils/validations'

export default {
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
        church: '',
        address: '',
        minister: ''
      },
      ...validations
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
