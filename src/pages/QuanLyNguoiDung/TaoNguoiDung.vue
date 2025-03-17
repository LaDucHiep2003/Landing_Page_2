<template>
  <div class="pt-6 pb-3 bg-white rounded-xl min-h-screen">
    <div class="text-lg font-semibold text-color-1 mb-5 px-4 flex gap-4 items-center">
      <div class="w-10 h-10 bg-color-10 rounded-xl flex justify-center items-center">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.23423 12.7471C3.219 13.3613 0.557138 14.6156 2.17839 16.1851C2.97036 16.9518 3.85241 17.5001 4.96137 17.5001H11.2893C12.3982 17.5001 13.2803 16.9518 14.0723 16.1851C15.6935 14.6156 13.0316 13.3613 12.0164 12.7471C9.63572 11.3066 6.61493 11.3066 4.23423 12.7471Z" stroke="#475467" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M11.2507 5.83333C11.2507 7.67428 9.75827 9.16667 7.91732 9.16667C6.07637 9.16667 4.58398 7.67428 4.58398 5.83333C4.58398 3.99238 6.07637 2.5 7.91732 2.5C9.75827 2.5 11.2507 3.99238 11.2507 5.83333Z" stroke="#475467" stroke-width="1.5"/>
          <path d="M14.167 4.16675L18.3337 4.16675" stroke="#475467" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14.167 6.66675L18.3337 6.66675" stroke="#475467" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16.667 9.16675L18.3337 9.16675" stroke="#475467" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      Thông tin tài khoản
    </div>
    <div class="px-4 grid grid-cols-2 gap-4 mb-5">
      <div class="mb-2">
        <div class="text-sm font-medium text-color-1 mb-1">Họ và Tên <span class="text-color-4">*</span></div>
        <input type="text" placeholder="Nhập họ và tên" class="py-[10px] px-[14px] border border-color-11 focus:outline-none
          rounded-lg text-base text-color-3 w-full">
      </div>
      <div class="mb-2">
        <div class="text-sm font-medium text-color-1 mb-1">Email <span class="text-color-4">*</span></div>
        <input type="text" placeholder="Nhập địa chỉ email" class="py-[10px] px-[14px] border border-color-11 focus:outline-none
          rounded-lg text-base text-color-3 w-full">
      </div>
      <div class="mb-2">
        <div class="text-sm font-medium text-color-1 mb-1">Mật khẩu mới <span class="text-color-4">*</span></div>
        <input type="text" placeholder="Nhập mật khẩu" class="py-[10px] px-[14px] border border-color-11 focus:outline-none
          rounded-lg text-base text-color-3 w-full">
      </div>
      <div class="mb-2">
        <div class="text-sm font-medium text-color-1 mb-1">Xác nhận mật khẩu mới <span class="text-color-4">*</span></div>
        <input type="text" placeholder="Nhập mật khẩu" class="py-[10px] px-[14px] border border-color-11 focus:outline-none
          rounded-lg text-base text-color-3 w-full">
      </div>
      <div class="mb-2">
        <div class="text-sm font-medium text-color-1 mb-1">
          User Role <span class="text-color-4">*</span>
        </div>
        <div class="relative">
          <input type="checkbox" :id="'dropdownToggle1'" class="hidden peer" />
          <label
              :for="'dropdownToggle1'"
              class="flex items-center justify-between gap-1 py-[10px] px-[14px] border border-color-11 rounded-md
          text-base text-color-16 w-full font-medium cursor-pointer"
          >
            <div>{{ selectedRole }}</div>
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
              <path d="M4 6L7.29289 9.29289C7.62623 9.62623 7.79289 9.79289 8 9.79289C8.20711 9.79289 8.37377 9.62623 8.70711 9.29289L12 6" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </label>
          <div class="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-md border border-gray-200 z-10 hidden peer-checked:block">
            <div
                v-for="(option, key) in options"
                :key="key"
                @click="selectRole(option)"
                class="p-3 text-base text-color-3 hover:bg-gray-100 border-b border-gray-200 cursor-pointer flex gap-3 items-center justify-between font-medium"
            >
              <div class="flex gap-3 items-center">
                {{ option.label }}
              </div>
              <svg v-if="selectedRole === option.label" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-2">
        <div class="text-sm font-medium text-color-1 mb-1">
          Số điện thoại <span class="text-color-4">*</span>
        </div>
        <div class="relative">
          <input type="checkbox" :id="'dropdownToggle2'" class="hidden peer" />
          <label
              :for="'dropdownToggle2'"
              class="flex items-center justify-between gap-1 py-[10px] px-[14px] border border-color-11 rounded-md
          text-base text-color-16 w-full font-medium cursor-pointer"
          >
            <div class="flex gap-2 items-center">
              <div class="inline-flex gap-1 items-center">
                <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="28" height="20" rx="3" fill="#D80027"/>
                  <g clip-path="url(#clip0_226_409762)">
                    <rect x="4" width="20" height="20" rx="4" fill="#D80027"/>
                    <path d="M14 20C19.5228 20 24 15.5228 24 10C24 4.47715 19.5228 0 14 0C8.47715 0 4 4.47715 4 10C4 15.5228 8.47715 20 14 20Z" fill="#D80027"/>
                    <path d="M14.0003 5.21777L15.0795 8.53922H18.5719L15.7464 10.592L16.8257 13.9134L14.0003 11.8607L11.1749 13.9134L12.2541 10.592L9.42871 8.53922H12.9211L14.0003 5.21777Z" fill="#FFDA44"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_226_409762">
                      <rect x="4" width="20" height="20" rx="4" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6L7.29289 9.29289C7.62623 9.62623 7.79289 9.79289 8 9.79289C8.20711 9.79289 8.37377 9.62623 8.70711 9.29289L12 6" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              {{ selectedPhone }}
            </div>
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
              <path d="M4 6L7.29289 9.29289C7.62623 9.62623 7.79289 9.79289 8 9.79289C8.20711 9.79289 8.37377 9.62623 8.70711 9.29289L12 6" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </label>
          <div class="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-md border border-gray-200 z-10 hidden peer-checked:block">
            <div
                v-for="(option, key) in phoneOptions"
                :key="key"
                @click="selectPhone(option)"
                class="p-3 text-base text-color-3 hover:bg-gray-100 border-b border-gray-200 cursor-pointer flex gap-3 items-center justify-between font-medium"
            >
              <div class="flex gap-3 items-center">
                {{ option.label }}
              </div>
              <svg v-if="selectedPhone === option.label" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-lg font-semibold text-color-1 mb-5 px-4 flex gap-4 items-center">
      <div class="w-10 h-10 bg-color-10 rounded-xl flex justify-center items-center">
        <svg class="rotate-180" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.33325 6.66671C2.33325 4.15255 2.33325 2.89547 3.16312 2.11442C3.99298 1.33337 5.32863 1.33337 7.99992 1.33337H8.51505C10.6892 1.33337 11.7763 1.33337 12.5312 1.86527C12.7475 2.01766 12.9395 2.19839 13.1015 2.40197C13.6666 3.11249 13.6666 4.13561 13.6666 6.18186V7.87884C13.6666 9.85431 13.6666 10.842 13.354 11.6308C12.8514 12.8991 11.7885 13.8994 10.441 14.3724C9.60285 14.6667 8.55339 14.6667 6.45447 14.6667C5.25509 14.6667 4.6554 14.6667 4.17644 14.4986C3.40645 14.2283 2.79909 13.6566 2.51189 12.932C2.33325 12.4812 2.33325 11.9168 2.33325 10.7879V6.66671Z" stroke="#667085" stroke-width="1.5" stroke-linejoin="round"/>
          <path d="M13.6667 8C13.6667 9.22727 12.6717 10.2222 11.4445 10.2222C11.0006 10.2222 10.4773 10.1445 10.0457 10.2601C9.66233 10.3628 9.3628 10.6623 9.26007 11.0457C9.14447 11.4773 9.2222 12.0006 9.2222 12.4445C9.2222 13.6717 8.22727 14.6667 7 14.6667" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M5.33325 4.66663H9.99992" stroke="#7F56D9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M5.33325 7.33337H7.33325" stroke="#7F56D9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      Thông tin tài khoản
    </div>
    <div class="px-4 grid grid-cols-2 gap-4 mb-5">
      <div class="mb-2">
        <div class="text-sm font-medium text-color-1 mb-1">Tên công ty <span class="text-color-4">*</span></div>
        <input type="text" placeholder="Nhập tên công ty" class="py-[10px] px-[14px] border border-color-11 focus:outline-none
          rounded-lg text-base text-color-3 w-full">
      </div>
      <div class="mb-2">
        <div class="text-sm font-medium text-color-1 mb-1">
          Vai trò công việc <span class="text-color-4">*</span>
        </div>
        <div class="relative">
          <input type="checkbox" :id="'dropdownToggle3'" class="hidden peer" />
          <label
              :for="'dropdownToggle3'"
              class="flex items-center justify-between gap-1 py-[10px] px-[14px] border border-color-11 rounded-md
          text-base text-color-16 w-full font-medium cursor-pointer"
          >
            <div>{{ selectedRoleWork }}</div>
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
              <path d="M4 6L7.29289 9.29289C7.62623 9.62623 7.79289 9.79289 8 9.79289C8.20711 9.79289 8.37377 9.62623 8.70711 9.29289L12 6" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </label>
          <div class="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-md border border-gray-200 z-10 hidden peer-checked:block">
            <div
                v-for="(option, key) in roleWorkOptions"
                :key="key"
                @click="selectRoleWork(option)"
                class="p-3 text-base text-color-3 hover:bg-gray-100 border-b border-gray-200 cursor-pointer flex gap-3 items-center justify-between font-medium"
            >
              <div class="flex gap-3 items-center">
                {{ option.label }}
              </div>
              <svg v-if="selectRoleWork === option.label" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="px-4 w-1/2 flex justify-between items-center mb-5">
      <div class="text-base font-medium text-color-1">Trạng thái hoạt động</div>
      <label class="cursor-pointer">
        <input type="checkbox" class="absolute opacity-0 custom_switch_input">
        <span class="inline-block h-6 w-11 bg-[#f5f9fc] custom-switch-indicator rounded-[50px] relative border border-[#ebecf1] align-bottom save_inf"></span>
      </label>
    </div>
    <div class="border-t border-color-2 px-4">
      <div class="py-5 flex justify-end gap-3">
        <div class="py-[10px] px-[14px] w-36 text-center rounded-md border border-color-11 shadow-sd-1 text-sm font-semibold text-color-1">Hủy</div>
        <div class="py-[10px] px-[14px] w-36 text-center rounded-md border bg-linear-gradient-2 shadow-sd-2 text-sm font-semibold text-white">Tạo</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedRole: "Employee",
      selectedPhone: "+84",
      selectedRoleWork : "Chọn vai trò",
      options: [
        { label: "Employee" },
        { label: "Đang thực hiện" },
        { label: "Hoàn thành" },
        { label: "Quá hạn" },
        { label: "Đã hủy" },
      ],
      phoneOptions: [
        { label: "0123456789" },
        { label: "0987654321" },
        { label: "0765432198" },
      ],
      roleWorkOptions: [
        { label: "AA" },
      ],
    };
  },
  methods: {
    selectRole(option) {
      this.selectedRole = option.label;
      document.getElementById("dropdownToggle1").checked = false;
    },
    selectPhone(option) {
      this.selectedPhone = option.label;
      document.getElementById("dropdownToggle2").checked = false;
    },
    selectRoleWork(option) {
      this.selectedRoleWork = option.label;
      document.getElementById("dropdownToggle3").checked = false;
    },
  },
};
</script>

<style scoped>
.custom_switch_input:checked ~ .custom-switch-indicator:before{
  left: calc(1rem + 5px);
}
.custom_switch_input:checked ~ .custom-switch-indicator{
  background-color: #7F56D9;
}
.save_inf:before{
  content: "";
  position: absolute;
  height: calc(24px - 4px);
  width: calc(24px - 4px);
  top: 50%;
  left: 3px;
  transform: translateY(-50%);
  background: #fff;
  border-radius: 50%;
  transition: 0.3s left;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0,0.4);
}
</style>