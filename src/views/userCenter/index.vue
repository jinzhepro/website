<template>
  <div class="container h-75">
    <div class="row">
      <ul class="list-group col-md-2 mb-2">
        <router-link to="/center/user" tag="li" class="list-group-item finger hover">用户中心</router-link>
        <router-link to="/center/setting" tag="li" class="list-group-item finger hover">基本设置</router-link>
        <router-link to="/center/posts" tag="li" class="list-group-item finger hover">我的帖子</router-link>
        <router-link to="/center/message" tag="li" class="list-group-item finger hover">我的消息</router-link>
        <router-link to="/center/others" tag="li" class="list-group-item finger hover">其他设置</router-link>
      </ul>
      <router-view class="card col-md-10 p-3 h-auto"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userCenter'
}
</script>

<style></style>
