<template>
  <div class="flex justify-between items-center mb-4">
    <label class="flex gap-1 border border-color-2 py-[10px] px-[14px] items-center rounded-lg bg-white w-[270px]">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.5 17.5L14.5834 14.5833M16.6667 9.58333C16.6667 13.4954 13.4954 16.6667 9.58333 16.6667C5.67132 16.6667 2.5 13.4954 2.5 9.58333C2.5 5.67132 5.67132 2.5 9.58333 2.5C13.4954 2.5 16.6667 5.67132 16.6667 9.58333Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <input type="text" class="focus:outline-none text-md text-color-3 pl-1" placeholder="Tìm kiếm...">
    </label>
    <RouterLink :to="{ name : 'them-vai-tro'}" class="py-[10px] px-[14px] cursor-pointer rounded-lg flex gap-2 items-center bg-linear-gradient-2">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.04163 10.0001C1.04163 14.9477 5.05241 18.9584 9.99996 18.9584C14.9475 18.9584 18.9583 14.9477 18.9583 10.0001C18.9583 5.05253 14.9475 1.04175 9.99996 1.04175C5.05241 1.04175 1.04163 5.05253 1.04163 10.0001Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 5.83325C10.4603 5.83325 10.8334 6.20635 10.8334 6.66659V9.16659H13.3334C13.7936 9.16659 14.1667 9.53967 14.1667 9.99992C14.1667 10.4602 13.7936 10.8333 13.3334 10.8333H10.8334V13.3333C10.8334 13.7935 10.4603 14.1666 10 14.1666C9.53979 14.1666 9.16671 13.7935 9.16671 13.3333V10.8333H6.66671C6.20647 10.8333 5.83337 10.4602 5.83337 9.99992C5.83337 9.53967 6.20647 9.16659 6.66671 9.16659H9.16671V6.66659C9.16671 6.20635 9.53979 5.83325 10 5.83325Z" fill="#7F56D9"/>
      </svg>
      <div class="text-base font-semibold text-white">Thêm nhóm</div>
    </RouterLink>
  </div>
</template>
<script>
export default {

}
</script>