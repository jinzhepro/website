<template>
  <div>
    <div class="mb-3 col-md-4">
      <label for="formFile" class="form-label">上传头像</label>
      <input class="form-control" type="file" id="formFile">
    </div>
    <img src='@/assets/logo.png' class="img-thumbnail" alt="...">
    <div class="mt-2">
      <button class="btn btn-primary">提交</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userCenter'
}
</script>

<style></style>
