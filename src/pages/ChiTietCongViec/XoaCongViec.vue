<template>
  <div class="w-[400px] h-auto max-md:w-full  bg-white p-6 rounded-2xl transition-all duration-300 ease-in-out overflow-y-auto"
       style="scrollbar-width: none;">
    <div class="flex justify-center items-center gap-2 w-20 h-20 rounded-full bg-[#FEF2F1] mx-auto">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M33.8119 8.73832C34.4602 8.73832 35 9.27665 35 9.96164V10.595C35 11.2633 34.4602 11.8183 33.8119 11.8183H6.18976C5.53977 11.8183 5 11.2633 5 10.595V9.96164C5 9.27665 5.53977 8.73832 6.18976 8.73832H11.0493C12.0364 8.73832 12.8955 8.03666 13.1176 7.04667L13.3721 5.91002C13.7676 4.3617 15.0692 3.33337 16.5588 3.33337H23.4412C24.9146 3.33337 26.2308 4.3617 26.6117 5.82835L26.8841 7.045C27.1045 8.03666 27.9636 8.73832 28.9523 8.73832H33.8119ZM31.343 31.8901C31.8504 27.1618 32.7387 15.9286 32.7387 15.8153C32.7711 15.4719 32.6592 15.1469 32.4372 14.8853C32.1989 14.6403 31.8974 14.4953 31.5651 14.4953H8.44754C8.11363 14.4953 7.79593 14.6403 7.57548 14.8853C7.35179 15.1469 7.24157 15.4719 7.25778 15.8153C7.26076 15.8361 7.29263 16.2318 7.34592 16.8933C7.58264 19.832 8.24195 28.017 8.66798 31.8901C8.96947 34.7434 10.8416 36.5367 13.5534 36.6017C15.646 36.65 17.8019 36.6667 20.0063 36.6667C22.0827 36.6667 24.1915 36.65 26.349 36.6017C29.1548 36.5534 31.0253 34.7917 31.343 31.8901Z" fill="#F04438"/>
      </svg>
    </div>
    <div class="text-center py-3 mb-2">
      <div class="text-color-1 font-semibold text-lg mb-2">Xác nhận xóa công việc này!</div>
      <div class="text-sm font-medium text-color-3">Bạn có chắc chắn muốn xoá công việc này? Hành động này không thể hoàn tác.</div>
    </div>
    <div class="flex justify-between items-center gap-2">
      <div @click="handleDeleteWork" class="py-[10px] px-4 text-center rounded-md bg-color-10 text-base font-semibold cursor-pointer
          text-color-3 w-full">Hủy</div>
      <div class="py-[10px] px-4 rounded-md bg-[#D92D20] text-base font-semibold text-white text-center w-full cursor-pointer">Xác nhận</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  methods: {

  },
  props:{
    handleDeleteWork : {
      type : Function,
      required : true
    }
  }
}
</script>

<style scoped>

</style>