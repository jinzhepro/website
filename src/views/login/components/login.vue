<template>
  <div class="col-md-12 col-lg-6 col-xl-4 col-md-4">
    <form ref="form" autocomplete="off">
      <div class="form-floating mb-2">
        <input type="email" v-model="form.username" class="form-control" id="username" required placeholder="">
        <label for="username">邮箱</label>
      </div>
      <div class="form-floating mb-2">
        <input type="password" v-model="form.password" class="form-control" id="password" minlength="6" maxlength="18" pattern="^[a-zA-Z]\w{5,17}$" placeholder="" required>
        <label for="password">密码</label>
      </div>
      <div class="form-floating mb-2">
        <input type="text" class="form-control" v-model="form.code" maxlength="6" minlength="6" id="code" placeholder="" required>
        <label for="code">验证码</label>
      </div>
      <div class="mb-2">
        <div class="captcha" @click="getCaptcha" v-html="captchaImg"></div>
      </div>
    </form>
    <div>
      <button class="btn btn-primary me-2" @click="submit">登录</button>
    </div>
  </div>

</template>

<script>
import { v4 } from 'uuid'
import md5 from 'js-md5'
import { setStorage } from 'wanado/src/sources/setStorage'
import { getStorage } from 'wanado/src/sources/getStorage'

export default {
  name: 'Login',
  data () {
    return {
      captchaImg: '',
      form: {
        username: '',
        password: '',
        code: ''
      }
    }
  },
  created () {
    if (!getStorage('uuid')) {
      setStorage({ key: 'uuid', value: v4() })
    }
    this.getCaptcha()
  },
  methods: {
    goForget () {
      this.$router.push({ name: 'ForgetModule' })
    },
    async getCaptcha () {
      const { data } = await this.$fetch.get('/public/get_captcha', {
        uuid: getStorage('uuid')
      })
      this.captchaImg = data.data
    },
    async submit () {
      if (!this.$refs.form.checkValidity()) {
        this.$refs.form.reportValidity()
        return
      }
      const { data } = await this.$fetch.post('/public/login', {
        ...this.form,
        password: md5(this.form.password),
        uuid: getStorage('uuid')
      }, {
        toast: true
      })
      console.log(data)
      await setStorage({ key: 'userInfo', value: { ...data.data, token: data.token } })
      await this.$router.push({ path: this.$route.query.refresh || '/home/index' })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  background: #ffffff;
  .captcha{
    margin: 10px 0 0;
  }
}
</style>
