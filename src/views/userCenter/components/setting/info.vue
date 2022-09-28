<template>
  <form>
    <div class="row">
      <div class="form-floating col-md-4 mt-2">
        <input id="email" class="form-control" type="email" />
        <label for="email" class="ps-4">邮箱</label>
      </div>
      <div class="col-md-6 mt-2 d-table-cell">
        <button class="btn btn-primary align-middle">发送验证码</button>
      </div>
    </div>
    <div class="row">
      <div class="form-floating col-md-4 mt-2">
        <input id="email" class="form-control" type="email" />
        <label for="email" class="ps-4">昵称</label>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 mt-2">
        <select class="form-select">
          <option value="1">男</option>
          <option value="2">女</option>
          <option selected >无</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="form-floating col-md-4 mt-2">
        <input id="email" class="form-control" type="email" />
        <label for="email" class="ps-4">城市</label>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 mt-2">
        <textarea rows="4" class="form-control" placeholder="签名" />
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 mt-2">
        <button class="btn btn-primary">确认修改</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'userCenter'
}
</script>

<style></style>
