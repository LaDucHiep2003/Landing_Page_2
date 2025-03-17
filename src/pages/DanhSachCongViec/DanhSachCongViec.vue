<template>
  <LocCongViec />
  <CongViec />
</template>

<script>
import LocCongViec from "@/pages/DanhSachCongViec/LocCongViec.vue";
import CongViec from "@/pages/DanhSachCongViec/CongViec.vue";
export default {
  components:{
    LocCongViec,
    CongViec
  }
}
</script>