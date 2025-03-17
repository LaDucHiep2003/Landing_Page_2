<template>
  <div class="bg-white min-h-screen rounded-xl transition-all duration-300 ease-in-out">
    <div v-if="!openAI" class="py-4 px-3 border-b border-color-7">
      <div class="text-base font-semibold text-color-1 ">Công việc của tôi</div>
    </div>
    <div class="py-4 px-3">
      <div class="flex justify-between items-center mb-5">
        <div class="text-base font-semibold text-color-1 ">Danh sách công việc <span class="text-color-3">(6)</span></div>
        <div class="flex items-center gap-3">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 8C0.5 3.85786 3.85786 0.5 8 0.5H28C32.1421 0.5 35.5 3.85786 35.5 8V28C35.5 32.1421 32.1421 35.5 28 35.5H8C3.85786 35.5 0.5 32.1421 0.5 28V8Z" fill="white"/>
            <path d="M0.5 8C0.5 3.85786 3.85786 0.5 8 0.5H28C32.1421 0.5 35.5 3.85786 35.5 8V28C35.5 32.1421 32.1421 35.5 28 35.5H8C3.85786 35.5 0.5 32.1421 0.5 28V8Z" stroke="#E4E7EC"/>
            <path d="M16.6085 21.8274H11.3579" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.9507 13.7502H24.2013" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2721 13.7052C15.2721 12.6255 14.3903 11.75 13.3028 11.75C12.2153 11.75 11.3335 12.6255 11.3335 13.7052C11.3335 14.7849 12.2153 15.6604 13.3028 15.6604C14.3903 15.6604 15.2721 14.7849 15.2721 13.7052Z" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.6666 21.7948C24.6666 20.7151 23.7855 19.8396 22.698 19.8396C21.6098 19.8396 20.728 20.7151 20.728 21.7948C20.728 22.8745 21.6098 23.75 22.698 23.75C23.7855 23.75 24.6666 22.8745 24.6666 21.7948Z" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div @click="handleCreateWork" class="text-sm font-medium text-white py-[10px] cursor-pointer px-[14px] rounded-md bg-linear-gradient-2">Thêm công việc</div>
        </div>
      </div>
      <label class="flex gap-1 border border-color-2 h-11 items-center rounded-lg mb-5 ">
        <div class="pl-3 pr-1">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 17.5L14.5834 14.5833M16.6667 9.58333C16.6667 13.4954 13.4954 16.6667 9.58333 16.6667C5.67132 16.6667 2.5 13.4954 2.5 9.58333C2.5 5.67132 5.67132 2.5 9.58333 2.5C13.4954 2.5 16.6667 5.67132 16.6667 9.58333Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <input type="text" class="focus:outline-none text-md text-color-3" placeholder="Tìm kiếm">
      </label>
      <div>
        <div class="pl-7 pr-3 py-2 border border-color-7 rounded-xl relative box-work before:bg-color-9 mb-5">
          <div class="flex justify-between items-center gap-2 mb-4">
            <div class="flex gap-2 items-center w-1/3">
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
              <RouterLink :to="{ name : 'chitietcongviec'}" class="text-lg text-color-8 font-semibold line-clamp-1 flex-1">Thiết kế Website chuyên</RouterLink>
            </div>
            <div class="text-sm font-medium text-color-3 w-1/3">Hoàng Anh - Mk1</div>
            <button class="flex gap-2 items-center justify-center py-1 px-2 bg-color-9 rounded-lg ">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5939 8.564C12.3582 9.45933 11.2446 10.092 9.0173 11.3574C6.86416 12.5806 5.78763 13.1923 4.92005 12.9464C4.56136 12.8447 4.23456 12.6517 3.97099 12.3858C3.3335 11.7426 3.3335 10.4951 3.3335 8C3.3335 5.50493 3.3335 4.2574 3.97099 3.61421C4.23456 3.3483 4.56136 3.15525 4.92005 3.05361C5.78763 2.80777 6.86416 3.41938 9.0173 4.64262C11.2446 5.90798 12.3582 6.54067 12.5939 7.436C12.6912 7.8056 12.6912 8.1944 12.5939 8.564Z" stroke="#F2F4F7" stroke-width="1.5" stroke-linejoin="round"/>
              </svg>
              <span class="text-sm font-semibold text-white">Đang thực hiện</span>
            </button>
          </div>
          <div class="flex justify-between items-center mb-3">
            <div class="text-sm font-medium text-color-1">Tiến trình: <span class="font-semibold">50%</span></div>
            <div class="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <div class="text-sm font-medium text-color-1">15/03/2025</div>
            </div>
          </div>
          <div class="relative h-5 ">
            <div class="rounded-full h-5 bg-color-10 "></div>
            <div class="bg-color-11 rounded-full h-5 absolute left-0 right-0 top-0 w-1/2"></div>
            <div class="flex justify-center items-center gap-2 h-5 absolute left-[45%] top-0 rounded-full">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1663 8.00041C14.1663 11.4064 11.4057 14.1671 7.99967 14.1671C4.59367 14.1671 1.83301 11.4064 1.83301 8.00041C1.83301 4.59441 4.59367 1.83374 7.99967 1.83374C11.4057 1.83374 14.1663 4.59441 14.1663 8.00041Z" stroke="#475467" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.2873 9.96211L7.77393 8.46278V5.23145" stroke="#475467" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="text-xs font-medium">2/5 ngày</span>
            </div>
          </div>
        </div>
        <div class="pl-7 pr-3 py-2 border border-color-7 rounded-xl relative box-work before:bg-color-12">
          <div class="flex justify-between items-center gap-2 mb-4">
            <div class="flex gap-2 items-center w-1/3">
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
              <span class="text-lg text-color-8 font-semibold line-clamp-1 flex-1">Thiết kế Website chuyên</span>
            </div>
            <div class="text-sm font-medium text-color-3 w-1/3">Hoàng Anh - Mk1</div>
            <button class="flex gap-2 items-center justify-center py-1 px-2 bg-color-12 rounded-lg ">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.20956 13.6245H12.7982C13.8529 13.6245 14.5149 12.4845 13.9909 11.5685L9.20022 3.19183C8.67289 2.26983 7.34356 2.26917 6.81556 3.19117L2.01689 11.5678C1.49289 12.4838 2.15422 13.6245 3.20956 13.6245Z" stroke="#F2F4F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.00179 8.94313V6.87646" stroke="#F2F4F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.99699 11.0001H8.00366" stroke="#F2F4F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="text-sm font-semibold text-white">Quá hạn</span>
            </button>
          </div>
          <div class="flex justify-between items-center mb-3">
            <div class="text-sm font-medium text-color-1">Tiến trình: <span class="font-semibold">50%</span></div>
            <div class="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <div class="text-sm font-medium text-color-1">15/03/2025</div>
            </div>
          </div>
          <div class="relative h-5 ">
            <div class="rounded-full h-5 bg-color-10 "></div>
            <div class="bg-color-11 rounded-full h-5 absolute left-0 right-0 top-0 w-1/2"></div>
            <div class="flex justify-center items-center gap-2 h-5 absolute left-[45%] top-0 rounded-full">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1663 8.00041C14.1663 11.4064 11.4057 14.1671 7.99967 14.1671C4.59367 14.1671 1.83301 11.4064 1.83301 8.00041C1.83301 4.59441 4.59367 1.83374 7.99967 1.83374C11.4057 1.83374 14.1663 4.59441 14.1663 8.00041Z" stroke="#475467" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.2873 9.96211L7.77393 8.46278V5.23145" stroke="#475467" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="text-xs font-medium">2/5 ngày</span>
            </div>
          </div>
        </div>
      </div>
      <div class=" justify-center items-center h-full mt-36 hidden">
        <div>
          <img src="@/assets/images/Illus%201.png" alt="">
          <div class="text-base text-color-1">Không tìm thấy công việc nào</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props:{
      openAI : {
        type : Boolean,
        required : true
      },
      handleCreateWork:{
        type : Function,
        required: true
      }
    }
  }
</script>
<style scoped>
.box-work:before{
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 12px;
  border-radius: 12px 0 0 12px;
}
</style>