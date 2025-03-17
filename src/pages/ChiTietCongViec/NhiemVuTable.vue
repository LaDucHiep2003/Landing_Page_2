<template>
  <div class="pt-6 pb-3 bg-white rounded-xl min-h-screen">
    <div class="text-base font-semibold text-color-1 mb-5 px-4">
      Danh sách nhiệm vụ <span class="text-color-3 ml-2">(5)</span>
    </div>
    <table class="w-full">
      <thead>
        <tr class="border-b border-color-2">
          <th class="text-left text-xs font-medium text-color-6 py-3 px-6 whitespace-nowrap">
            <div class="flex gap-1 items-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.62402 2.25024V9.62525M8.62402 9.62525L10.875 6.87512M8.62402 9.62525L6.375 6.87512" stroke="#475467" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.37402 9.75012V2.37512M3.37402 2.37512L5.625 5.12524M3.37402 2.37512L1.125 5.12524" stroke="#98A2B3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Tên nhiệm vụ
            </div>
          </th>
          <th class="text-left text-xs font-medium text-color-6 py-3 px-6 whitespace-nowrap">
            <div class="flex gap-1 items-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.62402 2.25024V9.62525M8.62402 9.62525L10.875 6.87512M8.62402 9.62525L6.375 6.87512" stroke="#475467" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.37402 9.75012V2.37512M3.37402 2.37512L5.625 5.12524M3.37402 2.37512L1.125 5.12524" stroke="#98A2B3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Trạng thái
            </div>
          </th>
          <th class="text-left text-xs font-medium text-color-6 py-3 px-6 whitespace-nowrap">
            <div class="flex gap-1 items-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.62402 2.25024V9.62525M8.62402 9.62525L10.875 6.87512M8.62402 9.62525L6.375 6.87512" stroke="#475467" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.37402 9.75012V2.37512M3.37402 2.37512L5.625 5.12524M3.37402 2.37512L1.125 5.12524" stroke="#98A2B3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Mức độ ưu tiên
            </div>
          </th>
          <th class="text-left text-xs font-medium text-color-6 py-3 px-6 whitespace-nowrap">
            <div class="flex gap-1 items-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00016 3.33325V12.6666M8.00016 12.6666L12.6668 7.99992M8.00016 12.6666L3.3335 7.99992" stroke="#475467" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Đã làm
            </div>
          </th>
          <th class="text-left text-xs font-medium text-color-6 py-3 px-6 whitespace-nowrap">
            <div class="flex gap-1 items-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00016 3.33325V12.6666M8.00016 12.6666L12.6668 7.99992M8.00016 12.6666L3.3335 7.99992" stroke="#475467" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Thành viên
            </div>
          </th>
          <th class="text-left text-xs font-medium text-color-6 py-3 px-6 whitespace-nowrap">
            <div class="flex gap-1 items-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00016 3.33325V12.6666M8.00016 12.6666L12.6668 7.99992M8.00016 12.6666L3.3335 7.99992" stroke="#475467" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Ngày kết thúc
            </div>
          </th>
          <th class="text-left text-xs font-medium text-color-6 py-3 px-6 whitespace-nowrap">Hành động</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b">
          <td @click="handleDetailWork" class="text-left text-sm cursor-pointer font-semibold text-color-16 py-3 px-6 whitespace-nowrap">Nghiên cứu thị trường</td>
          <td class="text-left text-sm font-semibold text-color-16 py-3 px-6 whitespace-nowrap">
            <ChonNhiemVu />
          </td>
          <td class="text-left text-sm font-semibold text-color-16 py-3 px-6 whitespace-nowrap">
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
          </td>
          <td class="text-left text-sm font-semibold text-color-16 py-3 px-6 whitespace-nowrap">
            <div>0/5 nhiệm vụ</div>
          </td>
          <td class="text-left text-sm font-semibold text-color-16 py-3 px-6 whitespace-nowrap">
            <div class="flex gap-2 items-center">
              <div class="flex items-center">
                <div class="w-6 h-6 border border-color-10 rounded-full">
                  <img src="@/assets/images/Avatar.png" alt="a">
                </div>
                <div class="w-6 h-6 border border-color-10 rounded-full -ml-2">
                  <img src="@/assets/images/Avatar.png" alt="a">
                </div>
              </div>
              <div>2 thành viên</div>
            </div>
          </td>
          <td class="text-left text-sm font-semibold text-color-16 py-3 px-6 whitespace-nowrap">
            <div>15/06/2024</div>
          </td>
          <td class="text-left text-sm font-semibold text-color-16 py-3 px-6 whitespace-nowrap">
            <div class="flex items-center gap-2">
              <div class="w-9 h-9 rounded-lg bg-color-10 flex justify-center items-center">
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2871 3.24297C17.6761 3.24297 18 3.56596 18 3.97696V4.35696C18 4.75795 17.6761 5.09095 17.2871 5.09095H0.713853C0.32386 5.09095 0 4.75795 0 4.35696V3.97696C0 3.56596 0.32386 3.24297 0.713853 3.24297H3.62957C4.22185 3.24297 4.7373 2.82197 4.87054 2.22798L5.02323 1.54598C5.26054 0.616994 6.0415 0 6.93527 0H11.0647C11.9488 0 12.7385 0.616994 12.967 1.49699L13.1304 2.22698C13.2627 2.82197 13.7781 3.24297 14.3714 3.24297H17.2871ZM15.8058 17.134C16.1102 14.2971 16.6432 7.55712 16.6432 7.48913C16.6626 7.28313 16.5955 7.08813 16.4623 6.93113C16.3193 6.78413 16.1384 6.69713 15.9391 6.69713H2.06852C1.86818 6.69713 1.67756 6.78413 1.54529 6.93113C1.41108 7.08813 1.34494 7.28313 1.35467 7.48913C1.35646 7.50162 1.37558 7.73903 1.40755 8.13594C1.54958 9.89917 1.94517 14.8102 2.20079 17.134C2.38168 18.846 3.50498 19.922 5.13206 19.961C6.38763 19.99 7.68112 20 9.00379 20C10.2496 20 11.5149 19.99 12.8094 19.961C14.4929 19.932 15.6152 18.875 15.8058 17.134Z" fill="#98A2B3"/>
                </svg>
              </div>
              <div @click="handleEditMission" class="w-9 h-9 rounded-lg bg-color-10 flex justify-center items-center cursor-pointer">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.81366 16.6899L15.1357 7.2212C15.5336 6.71059 15.6751 6.12025 15.5424 5.51916C15.4275 4.97271 15.0914 4.45314 14.5874 4.05899L13.3582 3.08255C12.2882 2.23153 10.9618 2.32111 10.2013 3.29755L9.37887 4.36446C9.27276 4.49793 9.29929 4.69501 9.43193 4.80251C9.43193 4.80251 11.51 6.46872 11.5542 6.50455C11.6957 6.63892 11.8018 6.81808 11.8284 7.03308C11.8726 7.45411 11.5808 7.84827 11.1475 7.90201C10.9441 7.92889 10.7495 7.86618 10.608 7.74973L8.42383 6.01185C8.31771 5.93213 8.15854 5.94915 8.07011 6.05664L2.87928 12.7752C2.54325 13.1963 2.42829 13.7427 2.54325 14.2712L3.20647 17.1468C3.24184 17.2991 3.37449 17.4066 3.53366 17.4066L6.45185 17.3707C6.98242 17.3618 7.47763 17.1199 7.81366 16.6899ZM11.8997 15.7944H16.6581C17.1224 15.7944 17.5 16.1769 17.5 16.6472C17.5 17.1184 17.1224 17.5 16.6581 17.5H11.8997C11.4355 17.5 11.0579 17.1184 11.0579 16.6472C11.0579 16.1769 11.4355 15.7944 11.8997 15.7944Z" fill="#98A2B3"/>
                </svg>
              </div>
            </div>
          </td>
        </tr>
        <tr class="border-b">
          <td @click="handleDetailWork" class="text-left text-sm font-semibold text-color-16 py-3 px-6 whitespace-nowrap">Nghiên cứu thị trường</td>
          <td class="text-left text-sm font-semibold text-color-16 py-3 px-6 whitespace-nowrap">
            <ChonNhiemVu />
          </td>
          <td class="text-left text-sm font-semibold text-color-16 py-3 px-6 whitespace-nowrap">
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
          </td>
          <td class="text-left text-sm font-semibold text-color-16 py-3 px-6 whitespace-nowrap">
            <div>0/5 nhiệm vụ</div>
          </td>
          <td class="text-left text-sm font-semibold text-color-16 py-3 px-6 whitespace-nowrap">
            <div class="flex gap-2 items-center">
              <div class="flex items-center">
                <div class="w-6 h-6 border border-color-10 rounded-full">
                  <img src="@/assets/images/Avatar.png" alt="a">
                </div>
                <div class="w-6 h-6 border border-color-10 rounded-full -ml-2">
                  <img src="@/assets/images/Avatar.png" alt="a">
                </div>
              </div>
              <div>2 thành viên</div>
            </div>
          </td>
          <td class="text-left text-sm font-semibold text-color-16 py-3 px-6 whitespace-nowrap">
            <div>15/06/2024</div>
          </td>
          <td class="text-left text-sm font-semibold text-color-16 py-3 px-6 whitespace-nowrap">
            <div class="flex items-center gap-2">
              <div class="w-9 h-9 rounded-lg bg-color-10 flex justify-center items-center">
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2871 3.24297C17.6761 3.24297 18 3.56596 18 3.97696V4.35696C18 4.75795 17.6761 5.09095 17.2871 5.09095H0.713853C0.32386 5.09095 0 4.75795 0 4.35696V3.97696C0 3.56596 0.32386 3.24297 0.713853 3.24297H3.62957C4.22185 3.24297 4.7373 2.82197 4.87054 2.22798L5.02323 1.54598C5.26054 0.616994 6.0415 0 6.93527 0H11.0647C11.9488 0 12.7385 0.616994 12.967 1.49699L13.1304 2.22698C13.2627 2.82197 13.7781 3.24297 14.3714 3.24297H17.2871ZM15.8058 17.134C16.1102 14.2971 16.6432 7.55712 16.6432 7.48913C16.6626 7.28313 16.5955 7.08813 16.4623 6.93113C16.3193 6.78413 16.1384 6.69713 15.9391 6.69713H2.06852C1.86818 6.69713 1.67756 6.78413 1.54529 6.93113C1.41108 7.08813 1.34494 7.28313 1.35467 7.48913C1.35646 7.50162 1.37558 7.73903 1.40755 8.13594C1.54958 9.89917 1.94517 14.8102 2.20079 17.134C2.38168 18.846 3.50498 19.922 5.13206 19.961C6.38763 19.99 7.68112 20 9.00379 20C10.2496 20 11.5149 19.99 12.8094 19.961C14.4929 19.932 15.6152 18.875 15.8058 17.134Z" fill="#98A2B3"/>
                </svg>
              </div>
              <div class="w-9 h-9 rounded-lg bg-color-10 flex justify-center items-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.81366 16.6899L15.1357 7.2212C15.5336 6.71059 15.6751 6.12025 15.5424 5.51916C15.4275 4.97271 15.0914 4.45314 14.5874 4.05899L13.3582 3.08255C12.2882 2.23153 10.9618 2.32111 10.2013 3.29755L9.37887 4.36446C9.27276 4.49793 9.29929 4.69501 9.43193 4.80251C9.43193 4.80251 11.51 6.46872 11.5542 6.50455C11.6957 6.63892 11.8018 6.81808 11.8284 7.03308C11.8726 7.45411 11.5808 7.84827 11.1475 7.90201C10.9441 7.92889 10.7495 7.86618 10.608 7.74973L8.42383 6.01185C8.31771 5.93213 8.15854 5.94915 8.07011 6.05664L2.87928 12.7752C2.54325 13.1963 2.42829 13.7427 2.54325 14.2712L3.20647 17.1468C3.24184 17.2991 3.37449 17.4066 3.53366 17.4066L6.45185 17.3707C6.98242 17.3618 7.47763 17.1199 7.81366 16.6899ZM11.8997 15.7944H16.6581C17.1224 15.7944 17.5 16.1769 17.5 16.6472C17.5 17.1184 17.1224 17.5 16.6581 17.5H11.8997C11.4355 17.5 11.0579 17.1184 11.0579 16.6472C11.0579 16.1769 11.4355 15.7944 11.8997 15.7944Z" fill="#98A2B3"/>
                </svg>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ChonNhiemVu from "@/pages/ChiTietCongViec/ChonNhiemVu.vue";
export default {
  components:{
    ChonNhiemVu
  },
  props:{
    handleEditMission:{
      type : Function,
      required : true
    },
    handleDetailWork : {
      type : Function,
      required : true
    }
  }
}
</script>