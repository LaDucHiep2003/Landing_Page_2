<template>
  <div class="pt-6 pb-3 px-6 bg-white rounded-xl">
    <div class="text-2xl max-md:text-xl font-semibold text-color-1 mb-5 flex justify-between items-center relative">
      <div>Thiết kế Website</div>
      <svg @click="toggleEdit" class="rotate-90 cursor-pointer" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.99658 10H10.0041" stroke="#667085" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.9998 10H15.0073" stroke="#667085" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.99976 10H5.00724" stroke="#667085" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <div v-if="editInformation" class="p-2 text-sm font-medium border border-color-2 rounded-md z-10 shadow-sd-2 absolute top-10 right-0 w-44">
        <div @click="handleEditWork" class="p-2 flex gap-2 items-center cursor-pointer">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.6615 1.85931H5.16883C3.11883 1.85931 1.8335 3.31065 1.8335 5.36531V10.908C1.8335 12.9626 3.11283 14.414 5.16883 14.414H11.0515C13.1082 14.414 14.3875 12.9626 14.3875 10.908V8.22265" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88517 7.28059L10.8672 2.29859C11.4878 1.67859 12.4938 1.67859 13.1145 2.29859L13.9258 3.10992C14.5465 3.73059 14.5465 4.73725 13.9258 5.35725L8.91984 10.3633C8.6485 10.6346 8.2805 10.7873 7.8965 10.7873H5.39917L5.46184 8.26725C5.47117 7.89659 5.6225 7.54325 5.88517 7.28059Z" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.1101 3.06833L13.1541 6.11233" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Sửa thông tin</div>
        <div @click="handleDeleteWork" class="p-2 flex gap-2 items-center cursor-pointer">
          <svg width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.3249 9.4682C19.3249 9.4682 18.7819 16.2032 18.4669 19.0402C18.3169 20.3952 17.4799 21.1892 16.1089 21.2142C13.4999 21.2612 10.8879 21.2642 8.27991 21.2092C6.96091 21.1822 6.13791 20.3782 5.99091 19.0472C5.67391 16.1852 5.13391 9.4682 5.13391 9.4682" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20.7082 6.23972H3.75024" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17.4407 6.2397C16.6557 6.2397 15.9797 5.6847 15.8257 4.9157L15.5827 3.6997C15.4327 3.1387 14.9247 2.7507 14.3457 2.7507H10.1127C9.5337 2.7507 9.0257 3.1387 8.8757 3.6997L8.6327 4.9157C8.4787 5.6847 7.8027 6.2397 7.0177 6.2397" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div>Xóa công việc</div>
        </div>
      </div>
    </div>
    <div>
      <div class="flex mb-4">
        <div class="flex gap-2 items-center w-1/6 max-md:w-1/2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9202 3.48092L12.4431 6.52321C12.5923 6.82188 12.8804 7.02898 13.2145 7.0769L16.6211 7.56726C17.4628 7.68878 17.7977 8.70887 17.1886 9.29337L14.7252 11.6604C14.4831 11.8932 14.3729 12.2278 14.4301 12.5564L15.0115 15.8983C15.1547 16.7249 14.2748 17.3557 13.5225 16.9646L10.4777 15.3857C10.1792 15.2308 9.82168 15.2308 9.52232 15.3857L6.4775 16.9646C5.72519 17.3557 4.84533 16.7249 4.98937 15.8983L5.56987 12.5564C5.62714 12.2278 5.51694 11.8932 5.27485 11.6604L2.8114 9.29337C2.20226 8.70887 2.5372 7.68878 3.37889 7.56726L6.78554 7.0769C7.11961 7.02898 7.40856 6.82188 7.55781 6.52321L9.07979 3.48092C9.45638 2.72869 10.5436 2.72869 10.9202 3.48092Z" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div class="text-base font-normal text-color-3 max-md:text-sm">Mức độ ưu tiên</div>
        </div>
        <div class="flex-1 px-2">
          <button class="py-1 px-2 bg-color-18 rounded-md flex items-center gap-1">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_901_18031)">
                <path d="M7.9974 0.833252C8.69693 0.833252 9.24793 1.36161 9.59966 2.07453L10.7744 4.44336C10.81 4.51667 10.8945 4.61991 11.0214 4.71435C11.1482 4.80869 11.2724 4.86073 11.3541 4.87445L13.4805 5.23067C14.2486 5.35974 14.8924 5.73625 15.1014 6.39185C15.3102 7.04692 15.0043 7.72765 14.4519 8.28099L14.4513 8.28159L12.7994 9.94719C12.7339 10.0132 12.6606 10.1375 12.6146 10.2995C12.5689 10.4605 12.5649 10.6071 12.5856 10.7017L12.5859 10.7031L13.0585 12.7635C13.2545 13.6211 13.1895 14.4715 12.5847 14.9161C11.9778 15.3621 11.1485 15.1644 10.395 14.7157L8.40173 13.5259C8.318 13.4759 8.17426 13.4354 8.00073 13.4354C7.82846 13.4354 7.68173 13.4754 7.59253 13.5273L7.59126 13.528L5.60192 14.7154C4.84936 15.1657 4.02102 15.3599 3.41407 14.9134C2.80966 14.4687 2.74142 13.6199 2.93807 12.7631L3.4106 10.7031L3.41088 10.7017C3.4316 10.6071 3.42755 10.4605 3.38186 10.2995C3.33586 10.1375 3.26252 10.0132 3.19705 9.94719L1.5439 8.28032C0.995098 7.72699 0.690138 7.04685 0.897298 6.39275C1.10506 5.73675 1.74762 5.35979 2.51622 5.23063L4.64088 4.87471L4.64155 4.8746C4.71944 4.86109 4.8418 4.80963 4.96832 4.71504C5.09507 4.62028 5.17972 4.51682 5.21541 4.44336L5.21721 4.4397L6.39041 2.0739L6.39088 2.07297C6.746 1.36064 7.29866 0.833252 7.9974 0.833252Z" fill="#079455"/>
              </g>
              <defs>
                <clipPath id="clip0_901_18031">
                  <rect width="16" height="16" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <div class="text-sm font-semibold text-color-20 max-md:text-xs">Thấp</div>
          </button>
        </div>
      </div>
      <div class="flex mb-4">
        <div class="flex gap-2 items-center w-1/6 max-md:w-1/2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_958_7419)">
              <path d="M18.3333 10.0001C18.3333 5.39771 14.6023 1.66675 9.99996 1.66675C5.39758 1.66675 1.66663 5.39771 1.66663 10.0001C1.66663 14.6024 5.39758 18.3334 9.99996 18.3334C14.6023 18.3334 18.3333 14.6024 18.3333 10.0001Z" stroke="#667085" stroke-width="1.5"/>
              <path d="M6.66663 10.4167L8.74996 12.5L13.3333 7.5" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_958_7419">
                <rect width="20" height="20" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <div class="text-base font-normal text-color-3 max-md:text-sm">Trạng thái</div>
        </div>
        <div class="relative flex-1 px-2">
          <button
              class="py-1 px-2 rounded-md flex items-center gap-1 bg-color-5"
          >
            <div class="text-sm font-semibold text-color-4 max-md:text-xs">Chưa thực hiện</div>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6L7.29289 9.29289C7.62623 9.62623 7.79289 9.79289 8 9.79289C8.20711 9.79289 8.37377 9.62623 8.70711 9.29289L12 6" stroke="#7F56D9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      <div class="flex items-center mb-2 max-md:flex-wrap" :class="{ 'mb-4' : isExpanded}">
        <div class="flex gap-2 items-center w-1/6 max-md:w-1/2 ">
          <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.06152 6.26931H13.9442" stroke="#475467" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.9615 8.87307H10.9676" stroke="#475467" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.00298 8.87307H8.00915" stroke="#475467" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.03862 8.87307H5.0448" stroke="#475467" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.9615 11.4641H10.9676" stroke="#475467" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.00298 11.4641H8.00915" stroke="#475467" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.03862 11.4641H5.0448" stroke="#475467" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.696 1.33325V3.52711" stroke="#475467" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.31027 1.33325V3.52711" stroke="#475467" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8255 2.38599H5.18064C3.22285 2.38599 2 3.47661 2 5.48134V11.5144C2 13.5507 3.22285 14.6665 5.18064 14.6665H10.8193C12.7833 14.6665 14 13.5696 14 11.5649V5.48134C14.0062 3.47661 12.7895 2.38599 10.8255 2.38599Z" stroke="#475467" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div class="text-base font-normal text-color-3 max-md:text-sm">Thời gian</div>
        </div>
        <div class="px-2">
          <div class="text-base font-medium text-color-3 flex gap-2 items-center max-md:text-sm">
            22/01/2025
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.1667 7.81712L3.16669 7.81712" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9.13348 3.80086L13.1668 7.81686L9.13348 11.8335" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            22/09/2505</div>
        </div>
        <div class="flex gap-3 items-center ml-5">
          <svg class="max-md:w-6 max-md:h-6" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="white"/>
            <path d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM4.8 16C4.8 22.1856 9.81441 27.2 16 27.2C22.1856 27.2 27.2 22.1856 27.2 16C27.2 9.81441 22.1856 4.8 16 4.8C9.81441 4.8 4.8 9.81441 4.8 16Z" fill="#F2F4F7"/>
            <path d="M16 29.6C16 30.9255 17.0805 32.0185 18.3911 31.8204C21.7497 31.3128 24.8826 29.7448 27.3137 27.3137C30.3143 24.3131 32 20.2435 32 16C32 11.7565 30.3143 7.68687 27.3137 4.68629C24.8826 2.25517 21.7497 0.687192 18.3911 0.179608C17.0805 -0.0184644 16 1.07452 16 2.4C16 3.72548 17.0866 4.77424 18.3818 5.05614C20.4633 5.50919 22.3899 6.5507 23.9196 8.08041C26.02 10.1808 27.2 13.0296 27.2 16C27.2 18.9704 26.02 21.8192 23.9196 23.9196C22.3899 25.4493 20.4633 26.4908 18.3818 26.9439C17.0866 27.2258 16 28.2745 16 29.6Z" fill="#7F56D9"/>
            <circle cx="16" cy="16" r="4" fill="#F4EBFF"/>
          </svg>
          <div class="text-sm font-medium text-color-3 max-md:text-xs">50/100 ngày</div>
        </div>
      </div>
      <div v-show="isExpanded" class="flex transition-all duration-300 ease-in-out mb-4">
        <div class="flex gap-2 items-center w-1/6 max-md:w-1/2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_958_7432)">
              <path d="M9.99996 6.66675V13.3334M13.3333 10.0001H6.66663" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9.99996 18.3334C14.6023 18.3334 18.3333 14.6025 18.3333 10.0001C18.3333 5.39771 14.6023 1.66675 9.99996 1.66675C5.39759 1.66675 1.66663 5.39771 1.66663 10.0001C1.66663 14.6025 5.39759 18.3334 9.99996 18.3334Z" stroke="#667085" stroke-width="1.5"/>
            </g>
            <defs>
              <clipPath id="clip0_958_7432">
                <rect width="20" height="20" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <div class="text-base font-normal text-color-3 max-md:text-sm">Người tạo</div>
        </div>
        <div class="flex-1 px-2">
          <div class="py-1 flex items-center gap-2">
            <img src="@/assets/images/Avatar.png" alt="Avatar" class="w-6 h-6">
            <div class="text-base font-medium text-color-3 max-md:text-sm">Phạm Kim Chi</div>
            <div class="py-[2px] px-[6px] bg-color-10 rounded-[4px] text-sm font-medium text-color-3 max-md:text-xs">Trưởng phòng thiết kế </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="isExpanded" class="py-5 border-t border-color-2 transition-all duration-300 ease-in-out">
      <div class="flex mb-4">
        <div class="flex gap-2 items-center w-1/6">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_970_23731)">
              <path d="M8.33337 15H11.6667" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1.95945 11.0112C1.66527 9.09679 1.51818 8.13965 1.8801 7.29111C2.24202 6.44256 3.04498 5.86198 4.65091 4.70084L5.85078 3.83329C7.84853 2.38885 8.84738 1.66663 9.99996 1.66663C11.1525 1.66663 12.1514 2.38885 14.1491 3.83329L15.349 4.70084C16.955 5.86198 17.7579 6.44256 18.1198 7.29111C18.4817 8.13965 18.3346 9.09679 18.0405 11.0112L17.7896 12.6436C17.3725 15.3574 17.164 16.7143 16.1908 17.5238C15.2175 18.3333 13.7947 18.3333 10.949 18.3333H9.05096C6.20523 18.3333 4.78238 18.3333 3.80913 17.5238C2.83587 16.7143 2.62735 15.3574 2.21032 12.6436L1.95945 11.0112Z" stroke="#667085" stroke-width="1.5" stroke-linejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_970_23731">
                <rect width="20" height="20" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <div class="text-base font-normal text-color-3">Phòng ban</div>
        </div>
        <div class="flex-1 px-2">
          <div class="text-base font-medium text-color-3">Phòng Marketing</div>
        </div>
      </div>
      <div class="flex mb-4">
        <div class="flex gap-2 items-center w-1/6">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_970_23739)">
              <path d="M10.416 18.3337H5.49174C4.20392 18.3337 3.17961 17.707 2.2599 16.8308C0.377154 15.0371 3.46835 13.6037 4.64732 12.9017C6.52185 11.7855 8.7381 11.4261 10.8327 11.8235" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12.916 5.41699C12.916 7.48806 11.2371 9.16699 9.16602 9.16699C7.09495 9.16699 5.41602 7.48806 5.41602 5.41699C5.41602 3.34593 7.09495 1.66699 9.16602 1.66699C11.2371 1.66699 12.916 3.34593 12.916 5.41699Z" stroke="#667085" stroke-width="1.5"/>
              <path d="M15.5753 12.1484L16.1619 13.3313C16.2419 13.4959 16.4551 13.6539 16.6351 13.6842L17.6984 13.8623C18.3783 13.9765 18.5383 14.4738 18.0483 14.9645L17.2217 15.7979C17.0818 15.9391 17.0051 16.2113 17.0484 16.4062L17.285 17.4378C17.4717 18.2544 17.0418 18.5703 16.3252 18.1435L15.3286 17.5488C15.1486 17.4412 14.852 17.4412 14.6687 17.5488L13.6721 18.1435C12.9589 18.5703 12.5256 18.2511 12.7122 17.4378L12.9489 16.4062C12.9922 16.2113 12.9155 15.9391 12.7755 15.7979L11.9489 14.9645C11.4624 14.4738 11.619 13.9765 12.2989 13.8623L13.3621 13.6842C13.5388 13.6539 13.7521 13.4959 13.8321 13.3313L14.4187 12.1484C14.7387 11.5065 15.2586 11.5065 15.5753 12.1484Z" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_970_23739">
                <rect width="20" height="20" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <div class="text-base font-normal text-color-3">Người quản lý</div>
        </div>
        <div class="flex-1 px-2">
          <div class="py-1 flex items-center gap-2">
            <img src="@/assets/images/Avatar.png" alt="Avatar" class="w-6 h-6">
            <div class="text-base font-medium text-color-3">Phạm Kim Chi</div>
            <div class="py-[2px] px-[6px] bg-color-10 rounded-[4px] text-sm font-medium text-color-3">Trưởng phòng thiết kế </div>
          </div>
        </div>
      </div>
      <div class="flex mb-4">
        <div class="flex gap-2 items-center w-1/6">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.3117 15C17.9361 15 18.4327 14.6071 18.8787 14.0576C19.7916 12.9328 18.2928 12.034 17.7212 11.5938C17.14 11.1463 16.4912 10.8928 15.8333 10.8333M15 9.16667C16.1506 9.16667 17.0833 8.23392 17.0833 7.08333C17.0833 5.93274 16.1506 5 15 5" stroke="#667085" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M2.68834 15C2.06392 15 1.56726 14.6071 1.12133 14.0576C0.208446 12.9328 1.70726 12.034 2.27891 11.5938C2.86001 11.1463 3.50886 10.8928 4.16671 10.8333M4.58337 9.16667C3.43278 9.16667 2.50004 8.23392 2.50004 7.08333C2.50004 5.93274 3.43278 5 4.58337 5" stroke="#667085" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M6.73654 12.5926C5.88506 13.1191 3.65253 14.1942 5.01229 15.5395C5.67652 16.1966 6.41631 16.6666 7.3464 16.6666H12.6537C13.5838 16.6666 14.3235 16.1966 14.9878 15.5395C16.3475 14.1942 14.115 13.1191 13.2635 12.5926C11.2668 11.358 8.73329 11.358 6.73654 12.5926Z" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.9167 6.25004C12.9167 7.86087 11.6109 9.16671 10 9.16671C8.38921 9.16671 7.08337 7.86087 7.08337 6.25004C7.08337 4.63921 8.38921 3.33337 10 3.33337C11.6109 3.33337 12.9167 4.63921 12.9167 6.25004Z" stroke="#667085" stroke-width="1.5"/>
          </svg>
          <div class="text-base font-normal text-color-3">Thành viên</div>
        </div>
        <div class="flex-1 px-2">
          <div class="flex gap-2 items-center">
            <div class="flex items-center">
              <div class="w-6 h-6 border border-color-10 rounded-full">
                <img src="@/assets/images/Avatar.png" alt="a">
              </div>
              <div class="w-6 h-6 border border-color-10 rounded-full -ml-2">
                <img src="@/assets/images/Avatar.png" alt="a">
              </div>
            </div>
            <div class="text-base font-medium text-color-3">Nguyễn Hoàng Anh</div>
            <div class="w-8 h-8 rounded-full bg-color-22 flex justify-center items-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00002 2.66669V13.3334M13.3334 8.00002H2.66669" stroke="#7F56D9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="flex mb-4">
        <div class="flex gap-2 items-center w-1/6">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2805 2.30148H6.73712C5.00379 2.29481 3.58379 3.67564 3.54212 5.40898V14.3565C3.50462 16.1081 4.89462 17.5581 6.64546 17.5956C6.67629 17.5956 6.70712 17.5965 6.73712 17.5956H13.3938C15.1355 17.534 16.5121 16.099 16.5021 14.3565V6.69814L12.2805 2.30148Z" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.0624 2.29175V4.71591C12.0624 5.89925 13.0199 6.85841 14.2032 6.86175H16.4982" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.70072 8.25732V13.2915" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.6554 10.2203L9.70124 8.25775L7.74707 10.2203" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div class="text-base font-normal text-color-3">File đính kèm</div>
        </div>
        <div class="flex-1 px-2">
          <div class="text-base font-medium text-color-3">Thêm file</div>
        </div>
      </div>
      <div class="flex">
        <div class="flex gap-2 items-start w-1/6">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.0969 13.5195H7.0802" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.0969 10.0307H7.0802" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.37603 6.55009H7.0802" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2572 2.2915C13.2572 2.2915 6.85965 2.29484 6.84965 2.29484C4.54965 2.309 3.12549 3.82234 3.12549 6.13067V13.794C3.12549 16.114 4.56049 17.6332 6.88049 17.6332C6.88049 17.6332 13.2772 17.6307 13.288 17.6307C15.588 17.6165 17.013 16.1023 17.013 13.794V6.13067C17.013 3.81067 15.5772 2.2915 13.2572 2.2915Z" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div class="text-base font-normal text-color-3">Mô tả</div>
        </div>
        <div class="flex-1">
            <div class="text-base font-medium py-[6px] px-2 rounded-lg border border-white text-color-3 focus:outline-none w-full">
              AI Agent – Trợ lý thông minh giúp tự động hóa công việc, phân tích dữ liệu và tạo nội dung sáng tạo. Với khả năng học hỏi và tương tác linh hoạt, AI Agent
                tối ưu hiệu suất và hỗ trợ ra quyết định hiệu quả. 🚀
            </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center">
      <button @click="toggleContent" class="text-base max-md:text-sm font-medium text-color-3 py-[4px] px-3 bg-color-10 rounded-md flex gap-2 items-center">
        {{ isExpanded ? 'Ẩn bớt' : 'Xem thêm' }}
        <svg :class="{'rotate-180': !isExpanded}" width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 12.5L10 7.5L5 12.5" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isExpanded: false,
      editInformation : false
    };
  },
  methods: {
    toggleContent() {
      this.isExpanded = !this.isExpanded;
    },
    toggleEdit(){
      this.editInformation = !this.editInformation;
    }
  },
  props:{
    handleDeleteWork:{
      type : Function,
      required : true
    },
    handleEditWork:{
      type : Function,
      required: true
    }
  }
};
</script>
