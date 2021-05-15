<template>
  <CSidebar 
    fixed 
    :minimize="minimize"
    :show="show"
    @update:show="(value) => $store.commit('set', ['sidebarShow', value])"
    style="background: rgba(0, 40, 77, 1)"
  >
    <CSidebarBrand class="d-md-down-none" to="/">
<!--      <CIcon -->
<!--        class="c-sidebar-brand-full" -->
<!--        name="logo" -->
<!--        size="custom-size" -->
<!--        :height="35" -->
<!--        viewBox="0 0 556 134"-->
<!--      />-->
      <CIcon 
        class="c-sidebar-brand-minimized" 
        name="logo" 
        size="custom-size" 
        :height="35" 
        viewBox="0 0 110 134"
      />
      <img style="width: 30px; height: 30px; margin-right: 20px" id="u69_img" class="img " src="http://iot.flsiot.com:202/pub/images/框架/u68.svg">
      <span>场站管理</span>
    </CSidebarBrand>

    <CRenderFunction flat :content-to-render="$options.nav"/>
    <CSidebarMinimizer
      class="d-md-down-none"
      @click.native="$store.commit('set', ['sidebarMinimize', !minimize])"
    />
  </CSidebar>
</template>

<script>
import nav from './_nav'

export default {
  name: 'TheSidebar',
  nav,
  computed: {
    show () {
      return this.$store.state.sidebarShow 
    },
    minimize () {
      return this.$store.state.sidebarMinimize 
    }
  }
}
</script>
