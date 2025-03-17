<template>
  <LocNguoiDung />
  <DanhSachNguoiDung />
</template>

<script>
import LocNguoiDung from "@/pages/QuanLyNguoiDung/LocNguoiDung.vue";
import DanhSachNguoiDung from "@/pages/QuanLyNguoiDung/DanhSachNguoiDung.vue";
export default {
  components: {
    LocNguoiDung,
    DanhSachNguoiDung
  }
}
</script>