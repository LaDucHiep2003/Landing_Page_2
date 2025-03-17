<template>
  <div class="bg-white rounded-xl min-h-screen w-2/3 mx-auto">
    <div class="text-lg font-semibold text-color-1 mb-5 flex justify-between items-center border-b border-color-2 p-4">
      <div class="flex gap-4 items-center">
        <div class="w-10 h-10 bg-color-10 rounded-xl flex justify-center items-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.23423 12.7471C3.219 13.3613 0.557138 14.6156 2.17839 16.1851C2.97036 16.9518 3.85241 17.5001 4.96137 17.5001H11.2893C12.3982 17.5001 13.2803 16.9518 14.0723 16.1851C15.6935 14.6156 13.0316 13.3613 12.0164 12.7471C9.63572 11.3066 6.61493 11.3066 4.23423 12.7471Z" stroke="#475467" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.2507 5.83333C11.2507 7.67428 9.75827 9.16667 7.91732 9.16667C6.07637 9.16667 4.58398 7.67428 4.58398 5.83333C4.58398 3.99238 6.07637 2.5 7.91732 2.5C9.75827 2.5 11.2507 3.99238 11.2507 5.83333Z" stroke="#475467" stroke-width="1.5"/>
            <path d="M14.167 4.16675L18.3337 4.16675" stroke="#475467" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.167 6.66675L18.3337 6.66675" stroke="#475467" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.667 9.16675L18.3337 9.16675" stroke="#475467" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        Thông tin người dùng
      </div>
      <svg class="rotate-90 cursor-pointer" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.99658 10H10.0041" stroke="#667085" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.9998 10H15.0073" stroke="#667085" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.99976 10H5.00724" stroke="#667085" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="text-center">
      <div class="mb-5 relative">
<!--        <img src="@/assets/images/Avatar.png" alt="" class="w-24 h-24 bg-cover mx-auto">-->
        <div class="mx-auto flex justify-center items-center">
          <div class="w-24 h-24 rounded-full bg-color-10 flex justify-center items-center border border-color-2">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2219 29.3333H21.7774C26.2978 29.3333 29.3337 26.1625 29.3337 21.4443V10.5556C29.3337 5.83744 26.2978 2.66663 21.7787 2.66663H10.2219C5.70285 2.66663 2.66699 5.83744 2.66699 10.5556V21.4443C2.66699 26.1625 5.70285 29.3333 10.2219 29.3333ZM11.3321 14.6666C9.49394 14.6666 8.00033 13.171 8.00033 11.3333C8.00033 9.4956 9.49394 7.99996 11.3321 7.99996C13.169 7.99996 14.6639 9.4956 14.6639 11.3333C14.6639 13.171 13.169 14.6666 11.3321 14.6666ZM26.4281 19.9119C26.8746 21.0567 26.6426 22.4327 26.1653 23.5665C25.5995 24.915 24.5161 25.936 23.1512 26.3818C22.5452 26.5799 21.9097 26.6666 21.2755 26.6666H10.0385C8.92032 26.6666 7.93083 26.3983 7.11966 25.8988C6.61151 25.5851 6.52168 24.8613 6.89844 24.3921C7.5286 23.6078 8.15072 22.8207 8.77819 22.0268C9.97416 20.5077 10.78 20.0674 11.6756 20.454C12.0389 20.6137 12.4036 20.8531 12.779 21.1063C13.7793 21.786 15.1696 22.7203 17.0011 21.7062C18.2545 21.0042 18.9814 19.8001 19.6144 18.7516L19.625 18.7341C19.6699 18.6605 19.7143 18.5869 19.7587 18.5136L19.7587 18.5135C19.9714 18.1615 20.1813 17.8142 20.4188 17.4943C20.7164 17.0939 21.8199 15.8417 23.2491 16.7334C24.1595 17.2948 24.9251 18.0543 25.7443 18.8675C26.0567 19.1785 26.2793 19.5321 26.4281 19.9119Z" fill="#D0D5DD"/>
            </svg>
          </div>
        </div>
        <div class="w-8 h-8 rounded-full border-2 border-white absolute bottom-0 right-[44%] bg-color-23 flex justify-center items-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.81366 16.6899L15.1357 7.2212C15.5336 6.71059 15.6751 6.12025 15.5424 5.51916C15.4275 4.97271 15.0914 4.45314 14.5874 4.05899L13.3582 3.08255C12.2882 2.23153 10.9618 2.32111 10.2013 3.29755L9.37887 4.36446C9.27276 4.49793 9.29929 4.69501 9.43193 4.80251C9.43193 4.80251 11.51 6.46872 11.5542 6.50455C11.6957 6.63892 11.8018 6.81808 11.8284 7.03308C11.8726 7.45411 11.5808 7.84827 11.1475 7.90201C10.9441 7.92889 10.7495 7.86618 10.608 7.74973L8.42383 6.01185C8.31771 5.93213 8.15854 5.94915 8.07011 6.05664L2.87928 12.7752C2.54325 13.1963 2.42829 13.7427 2.54325 14.2712L3.20647 17.1468C3.24184 17.2991 3.37449 17.4066 3.53366 17.4066L6.45185 17.3707C6.98242 17.3618 7.47763 17.1199 7.81366 16.6899ZM11.8997 15.7944H16.6581C17.1224 15.7944 17.5 16.1769 17.5 16.6472C17.5 17.1184 17.1224 17.5 16.6581 17.5H11.8997C11.4355 17.5 11.0579 17.1184 11.0579 16.6472C11.0579 16.1769 11.4355 15.7944 11.8997 15.7944Z" fill="#FFFFFF"/>
          </svg>
        </div>
      </div>
      <div class="text-base font-semibold text-color-16 mb-1">Phạm Kim Chi</div>
      <div class="text-sm font-medium text-color-3">kimchi2209@gmail.com</div>
    </div>

    <div class="p-4">
      <div class="flex justify-between items-center mb-5">
        <div class="text-sm font-semibold text-color-8">Trạng thái</div>
        <div class="py-[2px] px-2 rounded-full border border-[#ABEFC6] bg-color-26 w-fit text-color-27 font-medium
              text-xs text-center flex gap-1 items-center">
          Hoạt động
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
            <path d="M4 6L7.29289 9.29289C7.62623 9.62623 7.79289 9.79289 8 9.79289C8.20711 9.79289 8.37377 9.62623 8.70711 9.29289L12 6" stroke="#079455" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <div class="flex justify-between items-center mb-5">
        <div class="text-sm font-semibold text-color-8">Vai trò công việc</div>
        <div class="py-[2px] px-[6px] bg-color-10 rounded-[4px] text-sm font-medium text-color-3 w-fit">Tổng giám đốc</div>
      </div>
      <div class="flex justify-between items-center mb-5">
        <div class="text-sm font-semibold text-color-8">User Role</div>
        <div class="py-[2px] px-[6px] bg-color-10 rounded-[4px] text-sm font-medium text-color-3 w-fit">Employee</div>
      </div>
      <div class="flex justify-between items-center mb-5">
        <div class="text-sm font-semibold text-color-8">Họ và Tên</div>
        <div class="py-[2px] px-[6px] rounded-[4px] text-sm font-medium text-color-3 w-fit">Phạm Kim Chi</div>
      </div>
      <div class="flex justify-between items-center mb-5">
        <div class="text-sm font-semibold text-color-8">Email</div>
        <div class="py-[2px] px-[6px] rounded-[4px] text-sm font-medium text-color-3 w-fit">kimchi2209@gmail.com</div>
      </div>
      <div class="flex justify-between items-center mb-5">
        <div class="text-sm font-semibold text-color-8">Số điện thoại</div>
        <div class="py-[2px] px-[6px] rounded-[4px] text-sm font-medium text-color-3 w-fit">0972482888</div>
      </div>
      <div class="flex justify-between items-center mb-5">
        <div class="text-sm font-semibold text-color-8">Công ty</div>
        <div class="py-[2px] px-[6px] rounded-[4px] text-sm font-medium text-color-3 w-fit">CMB</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>