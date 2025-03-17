<template>
  <Header :toggleSidebar="toggleSidebar" :openSidebar="openSidebar" />

  <Sidebar :toggleSidebar="toggleSidebar" :openSidebar="openSidebar" />
  <main class="bg-color-10 ml-auto w-[calc(100%-19rem)] p-4" :class="{ 'w-full' : !openSidebar}">
    <slot />
  </main>
</template>
<script>
import Header from "@/components/partials/Header.vue";
import Sidebar from "@/components/partials/Sidebar.vue";
export default {
  data(){
    return{
      openSidebar : true,
    }
  },
  components: {
    Header,
    Sidebar
  },
  methods : {
    toggleSidebar() {
      this.openSidebar = !this.openSidebar;
    },
  }
}
</script>