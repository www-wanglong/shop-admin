<template>
  <h1>登陆 </h1>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { getLoginInfo } from '@/api/common'

onMounted(() => {
  getLoginInfo().then((res) => {
    console.log(res)
  })
})

</script>

<style lang="scss" scoped></style>
