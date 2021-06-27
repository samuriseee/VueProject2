<template>
   <div>
      <secretLayout>
        <router-view />
      </secretLayout>
   </div>
</template>

<script>

import secretLayout from "../layout/secret.vue"
export default {
  components: { 
   secretLayout
   },
}
</script>

<style>

</style>