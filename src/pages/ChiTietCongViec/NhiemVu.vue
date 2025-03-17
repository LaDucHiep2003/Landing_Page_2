<template>
  <div class="grid grid-cols-3 gap-4">
    <div class="pt-6 pb-3 px-6 bg-white rounded-xl">
      <div class="text-xl font-semibold text-color-1 mb-5">Chưa thực hiện <span class="text-color-3">(3)</span></div>
      <div @click="handleDetailWork" class="p-4 border border-color-2 rounded-2xl mb-3 cursor-pointer">
        <div class="flex justify-between items-center gap-3 mb-2 px-2">
          <div class="flex gap-2 items-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_901_18031)">
                <path d="M7.9974 0.833252C8.69693 0.833252 9.24793 1.36161 9.59966 2.07453L10.7744 4.44336C10.81 4.51667 10.8945 4.61991 11.0214 4.71435C11.1482 4.80869 11.2724 4.86073 11.3541 4.87445L13.4805 5.23067C14.2486 5.35974 14.8924 5.73625 15.1014 6.39185C15.3102 7.04692 15.0043 7.72765 14.4519 8.28099L14.4513 8.28159L12.7994 9.94719C12.7339 10.0132 12.6606 10.1375 12.6146 10.2995C12.5689 10.4605 12.5649 10.6071 12.5856 10.7017L12.5859 10.7031L13.0585 12.7635C13.2545 13.6211 13.1895 14.4715 12.5847 14.9161C11.9778 15.3621 11.1485 15.1644 10.395 14.7157L8.40173 13.5259C8.318 13.4759 8.17426 13.4354 8.00073 13.4354C7.82846 13.4354 7.68173 13.4754 7.59253 13.5273L7.59126 13.528L5.60192 14.7154C4.84936 15.1657 4.02102 15.3599 3.41407 14.9134C2.80966 14.4687 2.74142 13.6199 2.93807 12.7631L3.4106 10.7031L3.41088 10.7017C3.4316 10.6071 3.42755 10.4605 3.38186 10.2995C3.33586 10.1375 3.26252 10.0132 3.19705 9.94719L1.5439 8.28032C0.995098 7.72699 0.690138 7.04685 0.897298 6.39275C1.10506 5.73675 1.74762 5.35979 2.51622 5.23063L4.64088 4.87471L4.64155 4.8746C4.71944 4.86109 4.8418 4.80963 4.96832 4.71504C5.09507 4.62028 5.17972 4.51682 5.21541 4.44336L5.21721 4.4397L6.39041 2.0739L6.39088 2.07297C6.746 1.36064 7.29866 0.833252 7.9974 0.833252Z" fill="#F04438"/>
              </g>
              <defs>
                <clipPath id="clip0_901_18031">
                  <rect width="16" height="16" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <div class="text-lg font-semibold text-color-1 line-clamp-1">Tìm kiếm thông tin sản phẩm aj ahj</div>
          </div>
          <svg class="rotate-90" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.99658 10H10.0041" stroke="#667085" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.9998 10H15.0073" stroke="#667085" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.99976 10H5.00724" stroke="#667085" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="flex gap-2 items-center mb-5 px-2">
          <div class="flex items-center">
            <div class="w-6 h-6 border border-color-10 rounded-full">
              <img src="@/assets/images/Avatar.png" alt="a">
            </div>
            <div class="w-6 h-6 border border-color-10 rounded-full -ml-2">
              <img src="@/assets/images/Avatar.png" alt="a">
            </div>
          </div>
          <div class="text-base font-medium text-color-3">2 thành viên</div>
        </div>
        <div class="flex gap-3 items-center mb-2 py-[4px] px-2">
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
          <div class="text-base font-medium text-color-3">15/06/2024</div>
        </div>
        <div class="flex justify-self-start gap-3 items-center py-[4px] px-2 rounded-lg">
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
          <div class="text-base font-medium text-color-3">0/5 nhiệm vụ</div>
        </div>
      </div>
      <div class="p-4 border border-color-2 rounded-2xl mb-3">
        <div class="flex justify-between items-center gap-3 mb-2">
          <div class="flex gap-2 items-center px-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_901_18031)">
                <path d="M7.9974 0.833252C8.69693 0.833252 9.24793 1.36161 9.59966 2.07453L10.7744 4.44336C10.81 4.51667 10.8945 4.61991 11.0214 4.71435C11.1482 4.80869 11.2724 4.86073 11.3541 4.87445L13.4805 5.23067C14.2486 5.35974 14.8924 5.73625 15.1014 6.39185C15.3102 7.04692 15.0043 7.72765 14.4519 8.28099L14.4513 8.28159L12.7994 9.94719C12.7339 10.0132 12.6606 10.1375 12.6146 10.2995C12.5689 10.4605 12.5649 10.6071 12.5856 10.7017L12.5859 10.7031L13.0585 12.7635C13.2545 13.6211 13.1895 14.4715 12.5847 14.9161C11.9778 15.3621 11.1485 15.1644 10.395 14.7157L8.40173 13.5259C8.318 13.4759 8.17426 13.4354 8.00073 13.4354C7.82846 13.4354 7.68173 13.4754 7.59253 13.5273L7.59126 13.528L5.60192 14.7154C4.84936 15.1657 4.02102 15.3599 3.41407 14.9134C2.80966 14.4687 2.74142 13.6199 2.93807 12.7631L3.4106 10.7031L3.41088 10.7017C3.4316 10.6071 3.42755 10.4605 3.38186 10.2995C3.33586 10.1375 3.26252 10.0132 3.19705 9.94719L1.5439 8.28032C0.995098 7.72699 0.690138 7.04685 0.897298 6.39275C1.10506 5.73675 1.74762 5.35979 2.51622 5.23063L4.64088 4.87471L4.64155 4.8746C4.71944 4.86109 4.8418 4.80963 4.96832 4.71504C5.09507 4.62028 5.17972 4.51682 5.21541 4.44336L5.21721 4.4397L6.39041 2.0739L6.39088 2.07297C6.746 1.36064 7.29866 0.833252 7.9974 0.833252Z" fill="#F79009"/>
              </g>
              <defs>
                <clipPath id="clip0_901_18031">
                  <rect width="16" height="16" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <div class="text-lg font-semibold text-color-1 line-clamp-1">Thiết kế giao diện</div>
          </div>
          <svg class="rotate-90" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.99658 10H10.0041" stroke="#667085" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.9998 10H15.0073" stroke="#667085" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.99976 10H5.00724" stroke="#667085" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="flex gap-2 items-center mb-5 px-2">
          <div class="flex items-center">
            <div class="w-6 h-6 border border-color-10 rounded-full">
              <img src="@/assets/images/Avatar.png" alt="a">
            </div>
            <div class="w-6 h-6 border border-color-10 rounded-full -ml-2">
              <img src="@/assets/images/Avatar.png" alt="a">
            </div>
          </div>
          <div class="text-base font-medium text-color-3">2 thành viên</div>
        </div>
        <div class="flex gap-3 items-center mb-2 py-[4px] px-2">
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
          <div class="text-base font-medium text-color-3">15/06/2024</div>
        </div>
        <div class="flex gap-3 items-center py-[4px] px-2">
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
          <div class="text-base font-medium text-color-3">0/5 nhiệm vụ</div>
        </div>
      </div>
      <div class="p-4 border border-color-2 rounded-2xl mb-3">
        <div class="flex justify-between items-center gap-3 mb-2">
          <div class="flex gap-2 items-center px-2">
            <div class="text-lg font-semibold text-color-1 line-clamp-1">Triển khai</div>
          </div>
          <svg class="rotate-90" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.99658 10H10.0041" stroke="#667085" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.9998 10H15.0073" stroke="#667085" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.99976 10H5.00724" stroke="#667085" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="flex gap-2 items-center mb-5 py-[4px] px-2">
          <div class="flex items-center">
            <div class="w-6 h-6 border border-color-10 rounded-full">
              <img src="@/assets/images/Avatar.png" alt="a">
            </div>
            <div class="w-6 h-6 border border-color-10 rounded-full -ml-2">
              <img src="@/assets/images/Avatar.png" alt="a">
            </div>
          </div>
          <div class="text-base font-medium text-color-3">2 thành viên</div>
        </div>
        <div class="flex gap-3 items-center mb-2 px-2 py-[4px]">
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
          <div class="text-base font-medium text-color-3">15/06/2024</div>
        </div>
        <div class="flex gap-3 items-center py-[4px] px-2">
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
          <div class="text-base font-medium text-color-3">0/5 nhiệm vụ</div>
        </div>
      </div>
    </div>
    <div class="pt-6 pb-3 px-6 bg-white rounded-xl">
      <div class="text-xl font-semibold text-color-1 mb-5">Đang thực hiện <span class="text-color-3">(1)</span></div>
      <div class="p-4 border border-[#B692F6] rounded-2xl mb-3">
        <div class="flex justify-between items-center gap-3 mb-2 px-2">
          <div class="flex gap-2 items-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_901_18031)">
                <path d="M7.9974 0.833252C8.69693 0.833252 9.24793 1.36161 9.59966 2.07453L10.7744 4.44336C10.81 4.51667 10.8945 4.61991 11.0214 4.71435C11.1482 4.80869 11.2724 4.86073 11.3541 4.87445L13.4805 5.23067C14.2486 5.35974 14.8924 5.73625 15.1014 6.39185C15.3102 7.04692 15.0043 7.72765 14.4519 8.28099L14.4513 8.28159L12.7994 9.94719C12.7339 10.0132 12.6606 10.1375 12.6146 10.2995C12.5689 10.4605 12.5649 10.6071 12.5856 10.7017L12.5859 10.7031L13.0585 12.7635C13.2545 13.6211 13.1895 14.4715 12.5847 14.9161C11.9778 15.3621 11.1485 15.1644 10.395 14.7157L8.40173 13.5259C8.318 13.4759 8.17426 13.4354 8.00073 13.4354C7.82846 13.4354 7.68173 13.4754 7.59253 13.5273L7.59126 13.528L5.60192 14.7154C4.84936 15.1657 4.02102 15.3599 3.41407 14.9134C2.80966 14.4687 2.74142 13.6199 2.93807 12.7631L3.4106 10.7031L3.41088 10.7017C3.4316 10.6071 3.42755 10.4605 3.38186 10.2995C3.33586 10.1375 3.26252 10.0132 3.19705 9.94719L1.5439 8.28032C0.995098 7.72699 0.690138 7.04685 0.897298 6.39275C1.10506 5.73675 1.74762 5.35979 2.51622 5.23063L4.64088 4.87471L4.64155 4.8746C4.71944 4.86109 4.8418 4.80963 4.96832 4.71504C5.09507 4.62028 5.17972 4.51682 5.21541 4.44336L5.21721 4.4397L6.39041 2.0739L6.39088 2.07297C6.746 1.36064 7.29866 0.833252 7.9974 0.833252Z" fill="#F04438"/>
              </g>
              <defs>
                <clipPath id="clip0_901_18031">
                  <rect width="16" height="16" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <div class="text-lg font-semibold text-color-1 line-clamp-1">Nghiên cứu thị trường</div>
          </div>
          <svg class="rotate-90" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.99658 10H10.0041" stroke="#667085" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.9998 10H15.0073" stroke="#667085" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.99976 10H5.00724" stroke="#667085" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="flex gap-2 items-center mb-5 px-2">
          <div class="flex items-center">
            <div class="w-6 h-6 border border-color-10 rounded-full">
              <img src="@/assets/images/Avatar.png" alt="a">
            </div>
            <div class="w-6 h-6 border border-color-10 rounded-full -ml-2">
              <img src="@/assets/images/Avatar.png" alt="a">
            </div>
          </div>
          <div class="text-base font-medium text-color-3">2 thành viên</div>
        </div>
        <span class="flex gap-3 items-center justify-self-start mb-2 py-[4px] px-2 rounded-lg bg-color-21">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.57721 7.83688H17.4305" stroke="#2E90FA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.7017 11.0914H13.7094" stroke="#2E90FA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.0038 11.0914H10.0116" stroke="#2E90FA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.29822 11.0914H6.30594" stroke="#2E90FA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.7017 14.3302H13.7094" stroke="#2E90FA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.0038 14.3302H10.0116" stroke="#2E90FA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.29822 14.3302H6.30594" stroke="#2E90FA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.3698 1.66663V4.40894" stroke="#2E90FA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.63795 1.66663V4.40894" stroke="#2E90FA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5319 2.98267H6.4758C4.02856 2.98267 2.5 4.34594 2.5 6.85185V14.3932C2.5 16.9385 4.02856 18.3333 6.4758 18.3333H13.5242C15.9791 18.3333 17.5 16.9622 17.5 14.4563V6.85185C17.5077 4.34594 15.9868 2.98267 13.5319 2.98267Z" stroke="#2E90FA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div class="text-base font-medium text-color-9">15/06/2024</div>
        </span>
        <div class="flex justify-self-start gap-3 items-center py-[4px] px-2 rounded-lg">
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
          <div class="text-base font-medium text-color-3">0/5 nhiệm vụ</div>
        </div>
      </div>
    </div>
    <div class="pt-6 pb-3 px-6 bg-white rounded-xl">
      <div class="text-xl font-semibold text-color-1 mb-5">Hoàn thành <span class="text-color-3">(1)</span></div>
      <div class="p-4 border border-color-2 rounded-2xl mb-3">
        <div class="flex justify-between items-center gap-3 mb-2 px-2">
          <div class="flex gap-2 items-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_901_18031)">
                <path d="M7.9974 0.833252C8.69693 0.833252 9.24793 1.36161 9.59966 2.07453L10.7744 4.44336C10.81 4.51667 10.8945 4.61991 11.0214 4.71435C11.1482 4.80869 11.2724 4.86073 11.3541 4.87445L13.4805 5.23067C14.2486 5.35974 14.8924 5.73625 15.1014 6.39185C15.3102 7.04692 15.0043 7.72765 14.4519 8.28099L14.4513 8.28159L12.7994 9.94719C12.7339 10.0132 12.6606 10.1375 12.6146 10.2995C12.5689 10.4605 12.5649 10.6071 12.5856 10.7017L12.5859 10.7031L13.0585 12.7635C13.2545 13.6211 13.1895 14.4715 12.5847 14.9161C11.9778 15.3621 11.1485 15.1644 10.395 14.7157L8.40173 13.5259C8.318 13.4759 8.17426 13.4354 8.00073 13.4354C7.82846 13.4354 7.68173 13.4754 7.59253 13.5273L7.59126 13.528L5.60192 14.7154C4.84936 15.1657 4.02102 15.3599 3.41407 14.9134C2.80966 14.4687 2.74142 13.6199 2.93807 12.7631L3.4106 10.7031L3.41088 10.7017C3.4316 10.6071 3.42755 10.4605 3.38186 10.2995C3.33586 10.1375 3.26252 10.0132 3.19705 9.94719L1.5439 8.28032C0.995098 7.72699 0.690138 7.04685 0.897298 6.39275C1.10506 5.73675 1.74762 5.35979 2.51622 5.23063L4.64088 4.87471L4.64155 4.8746C4.71944 4.86109 4.8418 4.80963 4.96832 4.71504C5.09507 4.62028 5.17972 4.51682 5.21541 4.44336L5.21721 4.4397L6.39041 2.0739L6.39088 2.07297C6.746 1.36064 7.29866 0.833252 7.9974 0.833252Z" fill="#F79009"/>
              </g>
              <defs>
                <clipPath id="clip0_901_18031">
                  <rect width="16" height="16" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <div class="text-lg font-semibold text-color-1 line-clamp-1">Nghiên cứu đối thủ</div>
          </div>
          <svg class="rotate-90" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.99658 10H10.0041" stroke="#667085" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.9998 10H15.0073" stroke="#667085" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.99976 10H5.00724" stroke="#667085" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="flex gap-2 items-center mb-5 px-2">
          <div class="flex items-center">
            <div class="w-6 h-6 border border-color-10 rounded-full">
              <img src="@/assets/images/Avatar.png" alt="a">
            </div>
            <div class="w-6 h-6 border border-color-10 rounded-full -ml-2">
              <img src="@/assets/images/Avatar.png" alt="a">
            </div>
          </div>
          <div class="text-base font-medium text-color-3">2 thành viên</div>
        </div>
        <span class="flex justify-self-start gap-3 items-center mb-2 py-[4px] px-2 rounded-lg bg-color-20">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.57721 7.83688H17.4305" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.7017 11.0915H13.7094" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.0038 11.0915H10.0116" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.29822 11.0915H6.30594" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.7017 14.3302H13.7094" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.0038 14.3302H10.0116" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.29822 14.3302H6.30594" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.3698 1.66669V4.409" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.63795 1.66669V4.409" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5319 2.98267H6.4758C4.02856 2.98267 2.5 4.34594 2.5 6.85185V14.3932C2.5 16.9385 4.02856 18.3333 6.4758 18.3333H13.5242C15.9791 18.3333 17.5 16.9622 17.5 14.4563V6.85185C17.5077 4.34594 15.9868 2.98267 13.5319 2.98267Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div class="text-base font-medium text-white">15/06/2024</div>
        </span>
        <div class="flex justify-self-start gap-3 items-center py-[4px] px-2 rounded-lg bg-color-20">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_958_7419)">
              <path d="M18.3333 10.0001C18.3333 5.39771 14.6023 1.66675 9.99996 1.66675C5.39758 1.66675 1.66663 5.39771 1.66663 10.0001C1.66663 14.6024 5.39758 18.3334 9.99996 18.3334C14.6023 18.3334 18.3333 14.6024 18.3333 10.0001Z" stroke="#FFF" stroke-width="1.5"/>
              <path d="M6.66663 10.4167L8.74996 12.5L13.3333 7.5" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_958_7419">
                <rect width="20" height="20" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <div class="text-base font-medium text-white">0/5 nhiệm vụ</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    handleDetailWork : {
      type : Function,
      required : true
    }
  }
}
</script>