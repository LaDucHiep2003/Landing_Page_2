<template>
  <div class="w-[700px] h-[650px] bg-white p-4 pb-16 rounded-2xl transition-all duration-300 ease-in-out overflow-y-auto"
       style="scrollbar-width: none;">
    <div class=" flex justify-between items-center gap-2">
      <input type="text" placeholder="Tên nhiệm vụ" class="focus:outline-none border border-color-2 w-full py-2 px-4
          rounded-lg text-xl font-medium text-color-1 focus:text-color-1" value="Tìm kiếm thông tin sản phẩm">
      <svg @click="handleDetailWork" class="cursor-pointer" width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 5L5 15M5 5L15 15" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="border-b border-color-2 py-4">
      <div class="flex mb-4">
        <div class="flex gap-2 items-center w-1/3">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.849 13.11C17.849 16.0917 16.0915 17.8492 13.1099 17.8492H6.62488C3.63571 17.8492 1.87488 16.0917 1.87488 13.11V6.61C1.87488 3.6325 2.96988 1.875 5.95238 1.875H7.61904C8.21738 1.87583 8.78071 2.15667 9.13904 2.63583L9.89988 3.6475C10.2599 4.12583 10.8232 4.4075 11.4215 4.40833H13.7799C16.769 4.40833 17.8724 5.93 17.8724 8.9725L17.849 13.11Z" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.23413 12.0524H13.5133" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div class="text-base font-normal text-color-3">Công việc</div>
        </div>
        <div class="flex-1 px-2">
          <div class="text-base font-medium text-color-1">Thiết kế Website khách hàng</div>
        </div>
      </div>
      <div class="flex mb-4">
        <div class="flex gap-2 items-center w-1/3">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9202 3.48092L12.4431 6.52321C12.5923 6.82188 12.8804 7.02898 13.2145 7.0769L16.6211 7.56726C17.4628 7.68878 17.7977 8.70887 17.1886 9.29337L14.7252 11.6604C14.4831 11.8932 14.3729 12.2278 14.4301 12.5564L15.0115 15.8983C15.1547 16.7249 14.2748 17.3557 13.5225 16.9646L10.4777 15.3857C10.1792 15.2308 9.82168 15.2308 9.52232 15.3857L6.4775 16.9646C5.72519 17.3557 4.84533 16.7249 4.98937 15.8983L5.56987 12.5564C5.62714 12.2278 5.51694 11.8932 5.27485 11.6604L2.8114 9.29337C2.20226 8.70887 2.5372 7.68878 3.37889 7.56726L6.78554 7.0769C7.11961 7.02898 7.40856 6.82188 7.55781 6.52321L9.07979 3.48092C9.45638 2.72869 10.5436 2.72869 10.9202 3.48092Z" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div class="text-base font-normal text-color-3">Mức độ ưu tiên</div>
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
            <div class="text-sm font-semibold text-color-20">Thấp</div>
          </button>
        </div>
      </div>
      <div class="flex mb-4">
        <div class="flex gap-2 items-center w-1/3">
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
          <div class="text-base font-normal text-color-3">Trạng thái</div>
        </div>
        <div class="relative flex-1 px-2">
          <button
              @click="toggleDropdown"
              class="py-1 px-2 rounded-md flex items-center gap-1 bg-color-5"
          >
            <div class="text-sm font-semibold text-color-4">{{ selectedOption }}</div>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6L7.29289 9.29289C7.62623 9.62623 7.79289 9.79289 8 9.79289C8.20711 9.79289 8.37377 9.62623 8.70711 9.29289L12 6" stroke="#7F56D9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div
              v-if="isOpen"
              class="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-md border border-gray-200 z-10"
          >
            <div
                v-for="(option, key) in options"
                :key="key"
                @click="selectOption(option)"
                class="p-3 text-sm hover:bg-gray-100 border-b border-gray-200 cursor-pointer flex gap-3 items-center justify-between font-medium"
            >
              <div class="flex gap-3 items-center">
                <div class="w-2 h-2 rounded-full" :style="{ backgroundColor: option.color }"></div>
                {{ option.label }}
              </div>
              <svg
                  v-if="selectedOption === option.label"
                  width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="flex mb-4">
        <div class="flex gap-2 items-center w-1/3">
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
          <div class="text-base font-normal text-color-3">Người tạo</div>
        </div>
        <div class="flex-1 px-2">
          <button class="py-1 flex items-center gap-2">
            <img src="@/assets/images/Avatar.png" alt="Avatar" class="w-6 h-6">
            <div class="text-base font-medium text-color-3">Phạm Kim Chi</div>
            <div class="py-[2px] px-[6px] bg-color-10 rounded-[4px] text-sm font-medium text-color-3">Trưởng phòng thiết kế </div>
          </button>
        </div>
      </div>
      <div class="flex ">
        <div class="flex gap-2 items-center w-1/3">
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
          <div class="text-base font-normal text-color-3">Thời gian</div>
        </div>
        <div class="flex-1 px-2">
          <div class="text-base font-medium text-color-1 flex gap-2 items-center">
            22/01/2025
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.1667 7.81712L3.16669 7.81712" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9.13348 3.80086L13.1668 7.81686L9.13348 11.8335" stroke="#344054" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            22/09/2505</div>
        </div>
      </div>
    </div>
    <div class="border-b border-color-2 py-4">
      <div class="flex mb-5">
        <div class="flex gap-2 items-center w-1/3">
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
          <div class="text-base font-medium text-color-1">Phòng Marketing</div>
        </div>
      </div>
      <div class="flex mb-5">
        <div class="flex gap-2 items-center w-1/3">
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
      <div class="flex mb-5">
        <div class="flex gap-2 items-center w-1/3">
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
      <div class="flex mb-5">
        <div class="flex gap-2 items-center w-1/3">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2805 2.30148H6.73712C5.00379 2.29481 3.58379 3.67564 3.54212 5.40898V14.3565C3.50462 16.1081 4.89462 17.5581 6.64546 17.5956C6.67629 17.5956 6.70712 17.5965 6.73712 17.5956H13.3938C15.1355 17.534 16.5121 16.099 16.5021 14.3565V6.69814L12.2805 2.30148Z" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.0624 2.29175V4.71591C12.0624 5.89925 13.0199 6.85841 14.2032 6.86175H16.4982" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.70072 8.25732V13.2915" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.6554 10.2203L9.70124 8.25775L7.74707 10.2203" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div class="text-base font-normal text-color-3">File đính kèm</div>
        </div>
        <div class="flex-1 px-2">
          <div v-if="fileName" class="p-1 bg-color-10 w-fit rounded-[5px] flex items-center gap-2 border border-color-2 text-base font-medium text-color-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.40002 4C2.40002 1.79086 4.19089 0 6.40002 0H14.4L21.6 7.2V20C21.6 22.2091 19.8092 24 17.6 24H6.40002C4.19088 24 2.40002 22.2091 2.40002 20V4Z" fill="#D92D20"/>
              <path opacity="0.3" d="M14.4 0L21.6 7.2H18.4C16.1909 7.2 14.4 5.40914 14.4 3.2V0Z" fill="white"/>
              <path d="M5.81177 20.55V15.6409H7.74856C8.12089 15.6409 8.4381 15.712 8.70017 15.8542C8.96225 15.9948 9.162 16.1906 9.29943 16.4415C9.43845 16.6908 9.50797 16.9784 9.50797 17.3044C9.50797 17.6304 9.43766 17.918 9.29703 18.1673C9.15641 18.4166 8.95266 18.6108 8.68579 18.7498C8.42052 18.8888 8.09932 18.9583 7.72219 18.9583H6.48773V18.1266H7.5544C7.75415 18.1266 7.91875 18.0922 8.04818 18.0235C8.17922 17.9532 8.2767 17.8565 8.34062 17.7335C8.40614 17.6088 8.4389 17.4658 8.4389 17.3044C8.4389 17.1414 8.40614 16.9992 8.34062 16.8777C8.2767 16.7547 8.17922 16.6596 8.04818 16.5925C7.91715 16.5238 7.75095 16.4894 7.5496 16.4894H6.84968V20.55H5.81177Z" fill="white"/>
              <path d="M11.9224 20.55H10.1821V15.6409H11.9367C12.4305 15.6409 12.8556 15.7391 13.212 15.9357C13.5683 16.1307 13.8424 16.4111 14.0341 16.7771C14.2275 17.143 14.3242 17.5809 14.3242 18.0906C14.3242 18.602 14.2275 19.0414 14.0341 19.409C13.8424 19.7765 13.5667 20.0586 13.2072 20.2551C12.8492 20.4517 12.4209 20.55 11.9224 20.55ZM11.22 19.6607H11.8792C12.186 19.6607 12.4441 19.6063 12.6535 19.4977C12.8644 19.3874 13.0226 19.2172 13.1281 18.9871C13.2351 18.7554 13.2887 18.4566 13.2887 18.0906C13.2887 17.7279 13.2351 17.4314 13.1281 17.2013C13.0226 16.9712 12.8652 16.8018 12.6559 16.6932C12.4465 16.5845 12.1884 16.5302 11.8816 16.5302H11.22V19.6607Z" fill="white"/>
              <path d="M15.093 20.55V15.6409H18.3434V16.4966H16.1309V17.6663H18.1276V18.5221H16.1309V20.55H15.093Z" fill="white"/>
            </svg>
            {{ fileName }}
            <svg width="24" height="24" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2871 3.24297C17.6761 3.24297 18 3.56596 18 3.97696V4.35696C18 4.75795 17.6761 5.09095 17.2871 5.09095H0.713853C0.32386 5.09095 0 4.75795 0 4.35696V3.97696C0 3.56596 0.32386 3.24297 0.713853 3.24297H3.62957C4.22185 3.24297 4.7373 2.82197 4.87054 2.22798L5.02323 1.54598C5.26054 0.616994 6.0415 0 6.93527 0H11.0647C11.9488 0 12.7385 0.616994 12.967 1.49699L13.1304 2.22698C13.2627 2.82197 13.7781 3.24297 14.3714 3.24297H17.2871ZM15.8058 17.134C16.1102 14.2971 16.6432 7.55712 16.6432 7.48913C16.6626 7.28313 16.5955 7.08813 16.4623 6.93113C16.3193 6.78413 16.1384 6.69713 15.9391 6.69713H2.06852C1.86818 6.69713 1.67756 6.78413 1.54529 6.93113C1.41108 7.08813 1.34494 7.28313 1.35467 7.48913C1.35646 7.50162 1.37558 7.73903 1.40755 8.13594C1.54958 9.89917 1.94517 14.8102 2.20079 17.134C2.38168 18.846 3.50498 19.922 5.13206 19.961C6.38763 19.99 7.68112 20 9.00379 20C10.2496 20 11.5149 19.99 12.8094 19.961C14.4929 19.932 15.6152 18.875 15.8058 17.134Z" fill="#98A2B3"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="flex gap-2 items-center w-1/3">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.0969 13.5195H7.0802" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.0969 10.0307H7.0802" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.37603 6.55009H7.0802" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2572 2.2915C13.2572 2.2915 6.85965 2.29484 6.84965 2.29484C4.54965 2.309 3.12549 3.82234 3.12549 6.13067V13.794C3.12549 16.114 4.56049 17.6332 6.88049 17.6332C6.88049 17.6332 13.2772 17.6307 13.288 17.6307C15.588 17.6165 17.013 16.1023 17.013 13.794V6.13067C17.013 3.81067 15.5772 2.2915 13.2572 2.2915Z" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div class="text-base font-normal text-color-3">Mô tả</div>
        </div>
        <div class="flex-1">
          <input type="text" placeholder="Nhập mô tả..." class="text-base font-medium focus:bg-color-10 py-[6px] px-2 rounded-lg border focus:border-color-2
              border-white text-color-1 focus:outline-none w-full" value="Thiết kế Website dự án CMB">
        </div>
      </div>
    </div>
    <!--    Nhiem vu can lam-->
    <div class="py-4">
      <div class="text-base font-medium text-color-3">Nhiệm vụ cần làm</div>
      <div class="flex items-center gap-2 py-2">
        <div class="text-xs font-medium text-color-3">50%</div>
        <div class="relative h-2 flex-1">
          <div class="rounded-full h-2 bg-[#DCFAE6] "></div>
          <div class="bg-[#17B26A] rounded-full h-2 absolute left-0 right-0 top-0 w-1/2"></div>
        </div>
      </div>
      <div class="flex justify-between items-center border border-color-2 rounded-lg p-3 mb-2">
        <label class="flex items-center cursor-pointer custom-checkbox gap-2 w-full">
          <input type="checkbox" class="hidden" checked>
          <span class="checkmark w-6 h-6 rounded-lg relative"></span>
          <div class="text-base font-medium text-color-3">Tìm kiếm nội dung</div>
        </label>
        <div class="px-2 cursor-pointer">
          <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2871 3.24297C17.6761 3.24297 18 3.56596 18 3.97696V4.35696C18 4.75795 17.6761 5.09095 17.2871 5.09095H0.713853C0.32386 5.09095 0 4.75795 0 4.35696V3.97696C0 3.56596 0.32386 3.24297 0.713853 3.24297H3.62957C4.22185 3.24297 4.7373 2.82197 4.87054 2.22798L5.02323 1.54598C5.26054 0.616994 6.0415 0 6.93527 0H11.0647C11.9488 0 12.7385 0.616994 12.967 1.49699L13.1304 2.22698C13.2627 2.82197 13.7781 3.24297 14.3714 3.24297H17.2871ZM15.8058 17.134C16.1102 14.2971 16.6432 7.55712 16.6432 7.48913C16.6626 7.28313 16.5955 7.08813 16.4623 6.93113C16.3193 6.78413 16.1384 6.69713 15.9391 6.69713H2.06852C1.86818 6.69713 1.67756 6.78413 1.54529 6.93113C1.41108 7.08813 1.34494 7.28313 1.35467 7.48913C1.35646 7.50162 1.37558 7.73903 1.40755 8.13594C1.54958 9.89917 1.94517 14.8102 2.20079 17.134C2.38168 18.846 3.50498 19.922 5.13206 19.961C6.38763 19.99 7.68112 20 9.00379 20C10.2496 20 11.5149 19.99 12.8094 19.961C14.4929 19.932 15.6152 18.875 15.8058 17.134Z" fill="#98A2B3"/>
          </svg>
        </div>
      </div>
      <div class="flex justify-between items-center border border-color-2 rounded-lg p-3 mb-2">
        <label class="flex items-center cursor-pointer custom-checkbox gap-2 w-full">
          <input type="checkbox" class="hidden w-full cursor-pointer">
          <span class="checkmark w-6 h-6 rounded-lg relative"></span>
          <div class="text-base font-medium text-color-3">Lên kịch bản</div>
        </label>
        <div class="px-2 cursor-pointer">
          <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2871 3.24297C17.6761 3.24297 18 3.56596 18 3.97696V4.35696C18 4.75795 17.6761 5.09095 17.2871 5.09095H0.713853C0.32386 5.09095 0 4.75795 0 4.35696V3.97696C0 3.56596 0.32386 3.24297 0.713853 3.24297H3.62957C4.22185 3.24297 4.7373 2.82197 4.87054 2.22798L5.02323 1.54598C5.26054 0.616994 6.0415 0 6.93527 0H11.0647C11.9488 0 12.7385 0.616994 12.967 1.49699L13.1304 2.22698C13.2627 2.82197 13.7781 3.24297 14.3714 3.24297H17.2871ZM15.8058 17.134C16.1102 14.2971 16.6432 7.55712 16.6432 7.48913C16.6626 7.28313 16.5955 7.08813 16.4623 6.93113C16.3193 6.78413 16.1384 6.69713 15.9391 6.69713H2.06852C1.86818 6.69713 1.67756 6.78413 1.54529 6.93113C1.41108 7.08813 1.34494 7.28313 1.35467 7.48913C1.35646 7.50162 1.37558 7.73903 1.40755 8.13594C1.54958 9.89917 1.94517 14.8102 2.20079 17.134C2.38168 18.846 3.50498 19.922 5.13206 19.961C6.38763 19.99 7.68112 20 9.00379 20C10.2496 20 11.5149 19.99 12.8094 19.961C14.4929 19.932 15.6152 18.875 15.8058 17.134Z" fill="#98A2B3"/>
          </svg>
        </div>
      </div>
      <div class="text-base font-medium text-color-4 py-[10px] px-2 bg-color-22 rounded-lg text-center">Thêm nhiệm vụ</div>
    </div>

    <!--    Hoat dong-->
    <div class="text-base font-medium text-color-3 mt-3">Hoạt động</div>
    <div class="py-4 border-b border-color-2">
      <div class="flex gap-3 items-start mb-3">
        <img src="@/assets/images/Avatar.png" alt="Avatar" class="h-6 w-6">
        <div class="">
          <div class="text-base font-medium text-color-1 mb-2">Phạm Kim Chi <span class="text-xs ml-3 text-color-3">1 giờ trước</span></div>
          <div class="text-sm font-normal text-color-1">Tham khảo thêm các trang web đối thủ</div>
        </div>
      </div>
      <div class="flex gap-3 items-start mb-3">
        <img src="@/assets/images/Avatar.png" alt="Avatar" class="h-6 w-6">
        <div>
          <div class="text-base font-medium text-color-1 mb-2">Phạm Kim Chi <span class="text-xs ml-3 text-color-3">1 giờ trước</span></div>
          <div class="text-sm font-normal text-color-1">Tham khảo thêm các trang web đối thủ</div>
        </div>
      </div>
      <div class="flex justify-between items-center mt-8">
        <div class="flex gap-5 w-full">
          <img src="@/assets/images/Avatar.png" alt="Avatar" class="h-6 w-6">
          <input type="text" class="focus:outline-none w-full" placeholder="Nhập bình luận...">
        </div>
        <svg class="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_927_16166)">
            <path d="M20.9693 12.0989C20.9948 11.4124 20.6099 10.7608 20.1625 10.218C19.6924 9.64767 19.036 9.05794 18.2772 8.47514C16.7554 7.30627 14.7217 6.08944 12.6578 5.0307C10.5926 3.9713 8.46469 3.0535 6.74451 2.49271C5.8884 2.21362 5.10419 2.01325 4.46591 1.93576C4.14808 1.89717 3.83507 1.88495 3.55268 1.9227C3.28333 1.95871 2.94336 2.05318 2.68318 2.31673C2.00025 3.00852 1.98257 3.96241 2.155 4.78698C2.331 5.6286 2.74287 6.54205 3.20518 7.39726C3.67246 8.26165 4.21878 9.11571 4.696 9.84237C4.72727 9.88999 4.78982 9.98515 4.86647 10.1017C5.15514 10.5408 5.29948 10.7603 5.52168 10.8801C5.74388 10.9999 6.00683 10.9999 6.53273 10.9999L11.7382 11C12.2905 11 12.7382 11.4477 12.7382 12C12.7382 12.5522 12.2905 13 11.7382 13L6.88376 12.9999C6.34771 12.9999 6.07969 12.9999 5.85502 13.1232C5.63036 13.2464 5.48661 13.4719 5.19913 13.923C4.08455 15.6719 3.17682 17.1302 2.65559 18.2009C2.35116 18.8262 2.12926 19.4091 2.06115 19.9345C1.99006 20.4828 2.08057 21.0413 2.48886 21.4873C2.74304 21.765 3.08559 21.8647 3.34991 21.9037C3.62839 21.9448 3.93787 21.9358 4.25126 21.9011C4.88117 21.8313 5.65952 21.6414 6.51166 21.3747C8.22429 20.8387 10.3547 19.9542 12.4327 18.9305C14.5098 17.9072 16.5658 16.7293 18.1211 15.597C18.8968 15.0322 19.5714 14.462 20.0637 13.9116C20.5306 13.3897 20.9447 12.765 20.9693 12.0989Z" fill="url(#paint0_linear_927_16166)"/>
          </g>
          <defs>
            <linearGradient id="paint0_linear_927_16166" x1="0.24776" y1="4.75212" x2="33.3235" y2="37.8279" gradientUnits="userSpaceOnUse">
              <stop stop-color="#9054F7"/>
              <stop offset="1" stop-color="#2E8EF5"/>
            </linearGradient>
            <clipPath id="clip0_927_16166">
              <rect width="24" height="24" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
      selectedOption: "Chưa thực hiện",
      options: [
        { label: "Chưa thực hiện", color: "#98A2B3" },
        { label: "Đang thực hiện", color: "#2E90FA" },
        { label: "Hoàn thành", color: "#17B26A" },
      ],
      fileName: "ABC.pdf",
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(option) {
      this.selectedOption = option.label;
      this.isOpen = false;
    },
    handleFileUpload(event) {
      const file = event.target.files[0]; // Lấy file đầu tiên
      this.fileName = file ? file.name : "Chưa có file nào được chọn";
    },
  },
  props:{
    handleDetailWork:{
      type : Function,
      required : true
    }
  }
}
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
  font-size: 10px;
  font-weight: 500;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

</style>