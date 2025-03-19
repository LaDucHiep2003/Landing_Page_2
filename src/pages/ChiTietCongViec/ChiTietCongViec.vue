<template>
  <ThongTinCongViec :handleDeleteWork="handleDeleteWork" :handleEditWork="handleEditWork" />
  <LocNhiemVu :handleMission="handleMission" :viewType="viewType" @updateViewType="viewType = $event" />
  <div v-if="viewType === 'Bảng'">
    <NhiemVuTable :handleEditMission="handleEditMission" :handleDetailWork="handleDetailWork" />
  </div>
  <div v-else>
    <NhiemVu :handleDetailWork="handleDetailWork" />
  </div>
  <div
      :class="{
    'opacity-100 scale-100 pointer-events-auto': createMission,
    'opacity-0 scale-95 pointer-events-none': !createMission,
  }"
      class="fixed top-0 left-0 right-0 bottom-0 z-[101] flex justify-center items-center transition-all duration-300 ease-in-out transform"
      style="background: rgba(0, 0, 0, 0.5)"
  >
    <ThemNhiemVu :handleMission="handleMission" />
  </div>
  <div
      :class="{
      'opacity-100 scale-100 pointer-events-auto': deleteWork,
      'opacity-0 scale-95 pointer-events-none': !deleteWork,
  }"
      class="fixed top-0 left-0 right-0 bottom-0 z-[101] flex justify-center items-center transition-all duration-300 ease-in-out transform"
      style="background: rgba(0, 0, 0, 0.5)"
  >
    <XoaCongViec :handleDeleteWork="handleDeleteWork" />
  </div>
  <div
      :class="{
      'opacity-100 scale-100 pointer-events-auto': editWork,
      'opacity-0 scale-95 pointer-events-none': !editWork,
  }"
      class="fixed top-0 left-0 right-0 bottom-0 z-[101] flex justify-center items-center transition-all duration-300 ease-in-out transform"
      style="background: rgba(0, 0, 0, 0.5)"
  >
    <SuaCongViec :handleEditWork="handleEditWork" />
  </div>

  <div
      :class="{
      'opacity-100 scale-100 pointer-events-auto': detailWork,
      'opacity-0 scale-95 pointer-events-none': !detailWork,
  }"
      class="fixed top-0 left-0 right-0 bottom-0 z-[101] flex justify-center items-center transition-all duration-300 ease-in-out transform"
      style="background: rgba(0, 0, 0, 0.5)"
  >
    <ChiTietNhiemVu :handleDetailWork="handleDetailWork" />
  </div>
  <div
      :class="{
      'opacity-100 scale-100 pointer-events-auto': editMission,
      'opacity-0 scale-95 pointer-events-none': !editMission,
  }"
      class="fixed top-0 left-0 right-0 bottom-0 z-[101] flex justify-center items-center transition-all duration-300 ease-in-out transform"
      style="background: rgba(0, 0, 0, 0.5)"
  >
    <SuaNhiemVu :handleEditMission="handleEditMission" />
  </div>
</template>

<script>
import ThongTinCongViec from "@/pages/ChiTietCongViec/ThongTinCongViec.vue";
import LocNhiemVu from "@/pages/ChiTietCongViec/LocNhiemVu.vue";
import NhiemVu from "@/pages/ChiTietCongViec/NhiemVu.vue";
import ThemNhiemVu from "@/pages/ChiTietCongViec/ThemNhiemVu.vue";
import XoaCongViec from "@/pages/ChiTietCongViec/XoaCongViec.vue";
import SuaCongViec from "@/pages/ChiTietCongViec/SuaCongViec.vue";
import ChiTietNhiemVu from "@/pages/ChiTietCongViec/ChiTietNhiemVu.vue";
import NhiemVuTable from "@/pages/ChiTietCongViec/NhiemVuTable.vue";
import SuaNhiemVu from "@/pages/ChiTietCongViec/SuaNhiemVu.vue";
export default {
  data(){
    return{
      createMission : false,
      deleteWork : false,
      editWork : false,
      detailWork : false,
      viewType: "Lưới",
      editMission : false
    }
  },
  components:{
    ThongTinCongViec,
    LocNhiemVu,
    NhiemVu,
    ThemNhiemVu,
    XoaCongViec,
    SuaCongViec,
    ChiTietNhiemVu,
    NhiemVuTable,
    SuaNhiemVu
  },
  methods:{
    handleMission(){
      this.createMission = !this.createMission
    },
    handleDeleteWork(){
      this.deleteWork = !this.deleteWork
    },
    handleEditWork(){
      this.editWork = !this.editWork;
    },
    handleDetailWork(){
      this.detailWork = !this.detailWork;
    },
    handleEditMission(){
      this.editMission = !this.editMission;
    }
  }
}
</script>