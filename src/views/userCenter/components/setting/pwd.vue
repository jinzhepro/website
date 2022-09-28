<template>
  <form>
    <div class="row">
      <div class="form-floating col-md-4 mt-2">
        <input id="email" class="form-control" type="email" />
        <label for="email" class="ps-4">当前密码</label>
      </div>
    </div>
    <div class="row">
      <div class="form-floating col-md-4 mt-2">
        <input id="email" class="form-control" type="email" />
        <label for="email" class="ps-4">新密码</label>
      </div>
    </div>
    <div class="row">
      <div class="form-floating col-md-4 mt-2">
        <input id="email" class="form-control" type="email" />
        <label for="email" class="ps-4">确认密码</label>
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
