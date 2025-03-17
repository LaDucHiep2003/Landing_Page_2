<template>
  <div class="bg-white rounded-xl min-h-screen mx-auto p-4">
    <div class="text-lg font-semibold text-color-1 mb-5">
      <div class="flex gap-4 items-center mb-5">
        <div class="w-10 h-10 bg-color-10 rounded-xl flex justify-center items-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.23423 12.7471C3.219 13.3613 0.557138 14.6156 2.17839 16.1851C2.97036 16.9518 3.85241 17.5001 4.96137 17.5001H11.2893C12.3982 17.5001 13.2803 16.9518 14.0723 16.1851C15.6935 14.6156 13.0316 13.3613 12.0164 12.7471C9.63572 11.3066 6.61493 11.3066 4.23423 12.7471Z" stroke="#475467" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.2507 5.83333C11.2507 7.67428 9.75827 9.16667 7.91732 9.16667C6.07637 9.16667 4.58398 7.67428 4.58398 5.83333C4.58398 3.99238 6.07637 2.5 7.91732 2.5C9.75827 2.5 11.2507 3.99238 11.2507 5.83333Z" stroke="#475467" stroke-width="1.5"/>
            <path d="M14.167 4.16675L18.3337 4.16675" stroke="#475467" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.167 6.66675L18.3337 6.66675" stroke="#475467" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.667 9.16675L18.3337 9.16675" stroke="#475467" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        Thông tin vai trò
      </div>
      <div class="mb-10">
        <div class="text-sm font-medium text-color-1 mb-1">Tên vai trò<span class="text-color-4">*</span></div>
        <div class="py-[10px] px-[14px] border border-color-11 rounded-md text-base text-color-16 w-full"> Admin
        </div>
      </div>
      <div class="flex gap-4 items-center mb-4">
        <div class="w-10 h-10 bg-color-10 rounded-xl flex justify-center items-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 4.16675H17.5" stroke="#667085" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M2.5 4.16675H4.16667" stroke="#667085" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M7.5 10H17.5" stroke="#667085" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M2.5 10H4.16667" stroke="#667085" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M7.5 15.8333H17.5" stroke="#667085" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M2.5 15.8333H4.16667" stroke="#667085" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </div>
        Danh sách quyền
      </div>
      <label class="flex items-center cursor-pointer custom-checkbox gap-2 w-full p-4">
        <input type="checkbox" class="hidden" checked>
        <span class="checkmark w-6 h-6 rounded-lg relative"></span>
        <div class="text-sm font-semibold text-color-1">Chọn tất cả</div>
      </label>
      <div class="border border-color-2 rounded-2xl">
        <div>
          <div class="bg-color-10 border-b border-color-2 p-4 rounded-tr-2xl rounded-tl-2xl">
            <label class="flex items-center cursor-pointer custom-checkbox gap-2 w-full">
              <input type="checkbox" class="hidden" checked>
              <span class="checkmark w-6 h-6 rounded-lg relative"></span>
              <div class="text-sm font-semibold text-color-1">Tài khoản</div>
            </label>
          </div>
          <div class="px-4 py-5 flex justify-between items-center">
            <div class="pr-4 w-full">
              <label class="flex items-center cursor-pointer custom-checkbox gap-2 border-r border-color-2">
                <input type="checkbox" class="hidden" checked>
                <span class="checkmark w-6 h-6 rounded-lg relative"></span>
                <div class="text-sm font-medium text-color-3">Xem tài khoản</div>
              </label>
            </div>
            <div class="pr-4 w-full">
              <label class="flex items-center cursor-pointer custom-checkbox gap-2  border-r border-color-2">
                <input type="checkbox" class="hidden" checked>
                <span class="checkmark w-6 h-6 rounded-lg relative"></span>
                <div class="text-sm font-medium text-color-3">Tạo tài khoản</div>
              </label>
            </div>
            <div class="pr-4 w-full">
              <label class="flex items-center cursor-pointer custom-checkbox gap-2  border-r border-color-2">
                <input type="checkbox" class="hidden" checked>
                <span class="checkmark w-6 h-6 rounded-lg relative"></span>
                <div class="text-sm font-medium d text-color-3">Cập nhật tài khoản</div>
              </label>
            </div>
            <div class="pr-4 w-full">
              <label class="flex items-center cursor-pointer custom-checkbox gap-2">
                <input type="checkbox" class="hidden" checked>
                <span class="checkmark w-6 h-6 rounded-lg relative"></span>
                <div class="text-sm font-medium text-color-3">Xoá tài khoản</div>
              </label>
            </div>
          </div>
        </div>
        <div>
          <div class="bg-color-10 border-b border-color-2 p-4">
            <label class="flex items-center cursor-pointer custom-checkbox gap-2 w-full">
              <input type="checkbox" class="hidden" checked>
              <span class="checkmark w-6 h-6 rounded-lg relative"></span>
              <div class="text-sm font-semibold text-color-1">Vai trò</div>
            </label>
          </div>
          <div class="px-4 py-5 flex justify-between items-center">
            <div class="pr-4 w-full">
              <label class="flex items-center cursor-pointer custom-checkbox gap-2 border-r border-color-2">
                <input type="checkbox" class="hidden" checked>
                <span class="checkmark w-6 h-6 rounded-lg relative"></span>
                <div class="text-sm font-medium text-color-3">Xem vai trò</div>
              </label>
            </div>
            <div class="pr-4 w-full">
              <label class="flex items-center cursor-pointer custom-checkbox gap-2  border-r border-color-2">
                <input type="checkbox" class="hidden" checked>
                <span class="checkmark w-6 h-6 rounded-lg relative"></span>
                <div class="text-sm font-medium text-color-3">Tạo vai trò</div>
              </label>
            </div>
            <div class="pr-4 w-full">
              <label class="flex items-center cursor-pointer custom-checkbox gap-2  border-r border-color-2">
                <input type="checkbox" class="hidden" checked>
                <span class="checkmark w-6 h-6 rounded-lg relative"></span>
                <div class="text-sm font-medium text-color-3">Cập nhật vai trò</div>
              </label>
            </div>
            <div class="pr-4 w-full">
              <label class="flex items-center cursor-pointer custom-checkbox gap-2">
                <input type="checkbox" class="hidden" checked>
                <span class="checkmark w-6 h-6 rounded-lg relative"></span>
                <div class="text-sm font-medium text-color-3">Xoá vai trò</div>
              </label>
            </div>
          </div>
        </div>
        <div>
          <div class="bg-color-10 border-b border-color-2 p-4">
            <label class="flex items-center cursor-pointer custom-checkbox gap-2 w-full">
              <input type="checkbox" class="hidden" checked>
              <span class="checkmark w-6 h-6 rounded-lg relative"></span>
              <div class="text-sm font-medium text-color-1">Công việc</div>
            </label>
          </div>
          <div class="px-4 py-5 flex justify-between items-center border-b border-color-2 ">
            <div class="pr-4 w-full">
              <label class="flex items-center cursor-pointer custom-checkbox gap-2 border-r border-color-2">
                <input type="checkbox" class="hidden" checked>
                <span class="checkmark w-6 h-6 rounded-lg relative"></span>
                <div class="text-sm font-medium text-color-3">Xem công việc của bản thân</div>
              </label>
            </div>
            <div class="pr-4 w-full">
              <label class="flex items-center cursor-pointer custom-checkbox gap-2  border-r border-color-2">
                <input type="checkbox" class="hidden" checked>
                <span class="checkmark w-6 h-6 rounded-lg relative"></span>
                <div class="text-sm font-medium text-color-3">Xem tất cả công việc</div>
              </label>
            </div>
            <div class="pr-4 w-full">
              <label class="flex items-center cursor-pointer custom-checkbox gap-2  border-r border-color-2">
                <input type="checkbox" class="hidden" checked>
                <span class="checkmark w-6 h-6 rounded-lg relative"></span>
                <div class="text-sm font-medium text-color-3">Theo dõi công việc</div>
              </label>
            </div>
            <div class="pr-4 w-full">
              <label class="flex items-center cursor-pointer custom-checkbox gap-2">
                <input type="checkbox" class="hidden" checked>
                <span class="checkmark w-6 h-6 rounded-lg relative"></span>
                <div class="text-sm font-medium text-color-3">Tạo công việc</div>
              </label>
            </div>
          </div>
          <div class="px-4 py-5 flex justify-between items-center">
            <div class="pr-4 w-full">
              <label class="flex items-center cursor-pointer custom-checkbox gap-2 border-r border-color-2">
                <input type="checkbox" class="hidden" checked>
                <span class="checkmark w-6 h-6 rounded-lg relative"></span>
                <div class="text-sm font-medium text-color-3">Giao công việc của bản thân</div>
              </label>
            </div>
            <div class="pr-4 w-full">
              <label class="flex items-center cursor-pointer custom-checkbox gap-2  border-r border-color-2">
                <input type="checkbox" class="hidden" checked>
                <span class="checkmark w-6 h-6 rounded-lg relative"></span>
                <div class="text-sm font-medium text-color-3">Giao toàn bộ công việc  </div>
              </label>
            </div>
            <div class="pr-4 w-full">
              <label class="flex items-center cursor-pointer custom-checkbox gap-2  border-r border-color-2">
                <input type="checkbox" class="hidden" checked>
                <span class="checkmark w-6 h-6 rounded-lg relative"></span>
                <div class="text-sm font-medium text-color-3">Cập nhật công việc của bản thân</div>
              </label>
            </div>
            <div class="pr-4 w-full">
              <label class="flex items-center cursor-pointer custom-checkbox gap-2">
                <input type="checkbox" class="hidden" checked>
                <span class="checkmark w-6 h-6 rounded-lg relative"></span>
                <div class="text-sm font-medium text-color-3">Cập nhật toàn bộ công việc</div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>

<style scoped>

.custom-checkbox {
  user-select: none;
}
.custom-checkbox .checkmark {
  border: 1px solid rgba(0,0,0,0.3);
  transition: all 0.3s ease;
}

.custom-checkbox input:checked + .checkmark {
  background-color: #7F56D9;
  border-color: #7F56D9;
}

.custom-checkbox input:checked + .checkmark::after {
  content: "✔";
  color: white;
  font-size: 12px;
  font-weight: 600;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

</style>