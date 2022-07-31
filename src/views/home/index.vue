<template>
  <h1>{{ $store.state.count }}</h1>
</template>

<script lang="ts" setup>
import { useStore } from '../../store'
import user from '@/api/user'

console.log(user)

const store = useStore()

console.log(store.state.count)

</script>

<style lang="scss" scoped>
  h1 {
    color: $color;
  }

</style>
