<template>
  <v-form v-model="valid">
    <v-text-field
      v-model="userInfo.email"
      label="이메일 주소"
      :rules="[required('email', '이메일 주소를 입력해주세요!'), emailFormat()]"
      class="mt-10"
    />
    <v-text-field
      v-if="hasName"
      v-model="userInfo.phone"
      label="휴대폰 번호"
      :rules="[required('phone', '휴대폰번호를 입력해주세요!')]"
    />
    <v-text-field
      v-if="hasName"
      v-model="userInfo.userid"
      label="영문 아이디"
      :rules="[required('userid', '영문 아이디를 입력해주세요!')]"
    />
    <v-text-field
      v-model="userInfo.password"
      label="비밀번호"
      :type="showPassword ? 'text' : 'password'"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      counter="true"
      :rules="[required('password', '비밀번호를 입력해주세요!'), minLength('password', 8)]"
      @click:append="showPassword = !showPassword"
    />

    <v-text-field
      v-if="hasName"
      v-model="userInfo.name"
      label="사용자 이름 또는 닉네임"
      :rules="[required('name', '이름 또는 닉네임을 입력해주세요!')]"
    />

    <v-text-field
      v-if="hasName"
      v-model="userInfo.church"
      label="섬기는 교회"
      :rules="[required('church', '섬기는 교회를 입력해주세요!')]"
      class="mt-10"
    />
    <v-text-field
      v-if="hasName"
      v-model="userInfo.officer"
      label="직분"
      :rules="[required('officer', '직분을 입력해주세요!')]"
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
        email: 'daniel@gmail.com',
        phone: '0102345789',
        userid: 'srsoft',
        password: 'password',
        name: '다니엘',
        church: '',
        officer: ''
      },
      showPassword: false,
      ...validations
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
