<template>
  <div class="bg-white rounded-xl min-h-screen mx-auto p-4 max-md:p-2">
    <div class="text-lg font-semibold text-color-1 mb-5">
      <div class="flex gap-4 items-center mb-5">
        <div class="w-10 h-10 bg-color-10 rounded-xl flex justify-center items-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.6673 1.89136V5.33348C11.6673 5.80018 11.6673 6.03354 11.7581 6.2118C11.838 6.3686 11.9655 6.49609 12.1223 6.57598C12.3006 6.66681 12.5339 6.66681 13.0007 6.66681H16.4428M11.6673 14.1667H6.66732M13.334 10.8334H6.66732M16.6673 8.3236V14.3334C16.6673 15.7335 16.6673 16.4336 16.3948 16.9684C16.1552 17.4388 15.7727 17.8212 15.3023 18.0609C14.7675 18.3334 14.0674 18.3334 12.6673 18.3334H7.33398C5.93385 18.3334 5.23379 18.3334 4.69901 18.0609C4.2286 17.8212 3.84615 17.4388 3.60647 16.9684C3.33398 16.4336 3.33398 15.7335 3.33398 14.3334V5.66675C3.33398 4.26662 3.33398 3.56655 3.60647 3.03177C3.84615 2.56137 4.2286 2.17892 4.69901 1.93923C5.23379 1.66675 5.93385 1.66675 7.33398 1.66675H10.0105C10.6219 1.66675 10.9277 1.66675 11.2154 1.73582C11.4705 1.79707 11.7143 1.89808 11.938 2.03515C12.1903 2.18975 12.4065 2.40594 12.8389 2.83832L15.4957 5.49517C15.9281 5.92755 16.1443 6.14374 16.2989 6.39604C16.436 6.61972 16.537 6.86358 16.5982 7.11867C16.6673 7.40639 16.6673 7.71213 16.6673 8.3236Z" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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
      <label class="flex items-center cursor-pointer custom-checkbox gap-2 w-full p-4 max-md:p-3 max-md:px-2">
        <input type="checkbox" class="hidden" checked>
        <span class="checkmark w-5 h-5 rounded-md relative"></span>
        <div class="text-sm font-semibold text-color-1">Chọn tất cả</div>
      </label>
      <div class="border border-color-2 rounded-2xl">
        <div>
          <div class="bg-color-10 border-b border-color-2 p-4 rounded-tr-2xl rounded-tl-2xl max-md:p-2">
            <label class="flex items-center cursor-pointer custom-checkbox gap-2 w-full">
              <input type="checkbox" class="hidden" checked>
              <span class="checkmark w-5 h-5 rounded-md relative"></span>
              <div class="text-sm font-semibold text-color-1">Tài khoản</div>
            </label>
          </div>
          <div class="px-4 py-5 flex justify-between items-center max-md:flex-wrap max-md:px-2 max-md:py-3">
            <div class="pr-4 w-full max-md:w-1/2 max-md:mb-2">
              <label class="flex items-center cursor-pointer custom-checkbox gap-2 border-r border-color-2">
                <input type="checkbox" class="hidden" checked>
                <span class="checkmark w-5 h-5 rounded-md relative"></span>
                <div class="text-sm font-medium text-color-3">Xem tài khoản</div>
              </label>
            </div>
            <div class="pr-4 w-full max-md:w-1/2 max-md:pr-0 max-md:mb-2">
              <label class="flex items-center cursor-pointer custom-checkbox gap-2 border-r border-color-2 max-md:border-none">
                <input type="checkbox" class="hidden" checked>
                <span class="checkmark w-5 h-5 rounded-md relative"></span>
                <div class="text-sm font-medium text-color-3">Tạo tài khoản</div>
              </label>
            </div>
            <div class="pr-4 w-full max-md:w-1/2 max-md:mb-2">
              <label class="flex items-center cursor-pointer custom-checkbox gap-2  border-r border-color-2">
                <input type="checkbox" class="hidden" checked>
                <span class="checkmark w-5 h-5 rounded-md relative"></span>
                <div class="text-sm font-medium d text-color-3">Cập nhật tài khoản</div>
              </label>
            </div>
            <div class="pr-4 w-full max-md:w-1/2  max-md:pr-0 max-md:mb-2">
              <label class="flex items-center cursor-pointer custom-checkbox gap-2 max-md:border-none">
                <input type="checkbox" class="hidden" checked>
                <span class="checkmark w-5 h-5 rounded-md relative"></span>
                <div class="text-sm font-medium text-color-3">Xoá tài khoản</div>
              </label>
            </div>
          </div>
        </div>
        <div>
          <div class="bg-color-10 border-b border-color-2 p-4 rounded-tr-2xl rounded-tl-2xl max-md:p-3 max-md:px-2">
            <label class="flex items-center cursor-pointer custom-checkbox gap-2 w-full">
              <input type="checkbox" class="hidden" checked>
              <span class="checkmark w-5 h-5 rounded-md relative"></span>
              <div class="text-sm font-semibold text-color-1">Vai trò</div>
            </label>
          </div>
          <div class="px-4 py-5 flex justify-between items-center max-md:flex-wrap max-md:px-2 max-md:py-3">
            <div class="pr-4 w-full max-md:w-1/2 max-md:mb-2">
              <label class="flex items-center cursor-pointer custom-checkbox gap-2 border-r border-color-2">
                <input type="checkbox" class="hidden" checked>
                <span class="checkmark w-5 h-5 rounded-md relative"></span>
                <div class="text-sm font-medium text-color-3">Xem vai trò</div>
              </label>
            </div>
            <div class="pr-4 w-full max-md:w-1/2 max-md:pr-0 max-md:mb-2">
              <label class="flex items-center cursor-pointer custom-checkbox gap-2 border-r border-color-2 max-md:border-none">
                <input type="checkbox" class="hidden" checked>
                <span class="checkmark w-5 h-5 rounded-md relative"></span>
                <div class="text-sm font-medium text-color-3">Tạo vai trò</div>
              </label>
            </div>
            <div class="pr-4 w-full max-md:w-1/2 max-md:mb-2">
              <label class="flex items-center cursor-pointer custom-checkbox gap-2  border-r border-color-2">
                <input type="checkbox" class="hidden" checked>
                <span class="checkmark w-5 h-5 rounded-md relative"></span>
                <div class="text-sm font-medium d text-color-3">Cập nhật vai trò</div>
              </label>
            </div>
            <div class="pr-4 w-full max-md:w-1/2  max-md:pr-0 max-md:mb-2">
              <label class="flex items-center cursor-pointer custom-checkbox gap-2 max-md:border-none">
                <input type="checkbox" class="hidden" checked>
                <span class="checkmark w-5 h-5 rounded-md relative"></span>
                <div class="text-sm font-medium text-color-3">Xoá vai trò</div>
              </label>
            </div>
          </div>
        </div>
        <div>
          <div class="bg-color-10 border-b border-color-2 p-4 rounded-tr-2xl rounded-tl-2xl max-md:p-3 max-md:px-2">
            <label class="flex items-center cursor-pointer custom-checkbox gap-2 w-full">
              <input type="checkbox" class="hidden" checked>
              <span class="checkmark w-5 h-5 rounded-md relative"></span>
              <div class="text-sm font-semibold text-color-1">Công việc</div>
            </label>
          </div>
          <div class="px-4 py-5 flex justify-between items-center max-md:flex-wrap max-md:px-2 max-md:py-3">
            <div class="pr-4 w-full max-md:w-1/2 max-md:mb-2">
              <label class="flex items-center cursor-pointer custom-checkbox gap-2 border-r border-color-2">
                <input type="checkbox" class="hidden" checked>
                <span class="checkmark w-5 h-5 rounded-md relative"></span>
                <div class="text-sm font-medium text-color-3 flex-1">Xem công việc của bản thân</div>
              </label>
            </div>
            <div class="pr-4 w-full max-md:w-1/2 max-md:pr-0 max-md:mb-2">
              <label class="flex items-center cursor-pointer custom-checkbox gap-2 border-r border-color-2 max-md:border-none">
                <input type="checkbox" class="hidden" checked>
                <span class="checkmark w-5 h-5 rounded-md relative"></span>
                <div class="text-sm font-medium text-color-3 flex-1">Xem tất cả công việc</div>
              </label>
            </div>
            <div class="pr-4 w-full max-md:w-1/2 max-md:mb-2">
              <label class="flex items-center cursor-pointer custom-checkbox gap-2  border-r border-color-2">
                <input type="checkbox" class="hidden" checked>
                <span class="checkmark w-5 h-5 rounded-md relative"></span>
                <div class="text-sm font-medium d text-color-3 flex-1">Theo dõi công việc</div>
              </label>
            </div>
            <div class="pr-4 w-full max-md:w-1/2  max-md:pr-0 max-md:mb-2">
              <label class="flex items-center cursor-pointer custom-checkbox gap-2 max-md:border-none">
                <input type="checkbox" class="hidden" checked>
                <span class="checkmark w-5 h-5 rounded-md relative"></span>
                <div class="text-sm font-medium text-color-3 flex-1">Tạo công việc</div>
              </label>
            </div>
          </div>
          <div class="px-4 py-5 flex justify-between items-center max-md:flex-wrap max-md:px-2 max-md:py-3">
            <div class="pr-4 w-full max-md:w-1/2 max-md:mb-2">
              <label class="flex items-center cursor-pointer custom-checkbox gap-2  border-r border-color-2">
                <input type="checkbox" class="hidden" checked>
                <span class="checkmark w-5 h-5 rounded-md relative"></span>
                <div class="text-sm font-medium d text-color-3 flex-1">Giao công việc của bản thân</div>
              </label>
            </div>
            <div class="pr-4 w-full max-md:w-1/2 max-md:pr-0 max-md:mb-2">
              <label class="flex items-center cursor-pointer custom-checkbox gap-2 border-r border-color-2 max-md:border-none">
                <input type="checkbox" class="hidden" checked>
                <span class="checkmark w-5 h-5 rounded-md relative"></span>
                <div class="text-sm font-medium text-color-3 flex-1">Giao toàn bộ công việc</div>
              </label>
            </div>
            <div class="pr-4 w-full max-md:w-1/2 max-md:mb-2">
              <label class="flex items-center cursor-pointer custom-checkbox gap-2  border-r border-color-2">
                <input type="checkbox" class="hidden" checked>
                <span class="checkmark w-5 h-5 rounded-md relative"></span>
                <div class="text-sm font-medium d text-color-3 flex-1">Cập nhật công việc của bản thân</div>
              </label>
            </div>
            <div class="pr-4 w-full max-md:w-1/2  max-md:pr-0 max-md:mb-2">
              <label class="flex items-center cursor-pointer custom-checkbox gap-2 max-md:border-none">
                <input type="checkbox" class="hidden" checked>
                <span class="checkmark w-5 h-5 rounded-md relative"></span>
                <div class="text-sm font-medium text-color-3 flex-1">Cập nhật toàn bộ công việc</div>
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