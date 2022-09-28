<template>
  <div>
    <nav class="nav nav-pills mb-2">
      <router-link to="/center/posts/my" class="nav-link py-1 px-2 finger" tag="a">我的发帖</router-link>
      <router-link to="/center/posts/collection" class="nav-link py-1 px-2 finger" tag="a">我的收藏</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'userCenter'
}
</script>

<style></style>
