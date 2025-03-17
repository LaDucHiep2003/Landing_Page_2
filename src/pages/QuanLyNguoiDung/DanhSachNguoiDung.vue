<template>
  <div class="pt-6 pb-3 bg-white rounded-xl min-h-screen">
    <div class="text-base font-semibold text-color-1 mb-5 px-4">
      Danh sách người dùng <span class="text-color-3 ml-2">(1200)</span>
    </div>
<!--    Danh sach-->

    <table class="w-full">
      <thead>
        <tr class="border-b border-color-2">
          <th class="text-left text-xs font-medium text-color-6 py-4 px-6 whitespace-nowrap">
            <div class="flex gap-1 items-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.62402 2.25024V9.62525M8.62402 9.62525L10.875 6.87512M8.62402 9.62525L6.375 6.87512" stroke="#475467" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.37402 9.75012V2.37512M3.37402 2.37512L5.625 5.12524M3.37402 2.37512L1.125 5.12524" stroke="#98A2B3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Tên người dùng
            </div>
          </th>
          <th class="text-left text-xs font-medium text-color-6 py-4 px-6 whitespace-nowrap">
            <div class="flex gap-1 items-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.62402 2.25024V9.62525M8.62402 9.62525L10.875 6.87512M8.62402 9.62525L6.375 6.87512" stroke="#475467" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.37402 9.75012V2.37512M3.37402 2.37512L5.625 5.12524M3.37402 2.37512L1.125 5.12524" stroke="#98A2B3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Vai trò công việc
            </div>
          </th>
          <th class="text-left text-xs font-medium text-color-6 py-4 px-6 whitespace-nowrap">
            <div class="flex gap-1 items-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.62402 2.25024V9.62525M8.62402 9.62525L10.875 6.87512M8.62402 9.62525L6.375 6.87512" stroke="#475467" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.37402 9.75012V2.37512M3.37402 2.37512L5.625 5.12524M3.37402 2.37512L1.125 5.12524" stroke="#98A2B3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Trạng thái
            </div>
          </th>
          <th class="text-left text-xs font-medium text-color-6 py-4 px-6 whitespace-nowrap">
            <div class="flex gap-1 items-center">
              Ngày thêm
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00016 3.33325V12.6666M8.00016 12.6666L12.6668 7.99992M8.00016 12.6666L3.3335 7.99992" stroke="#475467" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </th>
          <th class="text-right text-xs font-medium text-color-6 py-3 px-6 whitespace-nowrap">Hành động</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b border-color-2">
          <td class="text-left text-sm font-semibold text-color-16 py-4 px-6 whitespace-nowrap">
            <RouterLink :to="{ name : 'chitietnguoidung'}" class="flex items-center gap-3">
              <img src="@/assets/images/Avatar2.png" alt="Avatar">
              <div class="text-sm font-semibold text-color-16">Trần Huy Hoàng</div>
            </RouterLink>
          </td>
          <td class="text-left text-sm font-semibold text-color-16 py-4 px-6 whitespace-nowrap">
            <div class="py-[2px] px-[6px] bg-color-10 rounded-[4px] text-sm font-medium text-color-3 w-fit">Tổng giám đốc</div>
          </td>
          <td class="text-left text-sm font-semibold text-color-16 py-4 px-6 whitespace-nowrap">
            <div class="py-[2px] px-2 rounded-full border border-[#ABEFC6] bg-color-26 w-fit text-color-27 font-medium
              text-xs text-center">Hoạt động</div>
          </td>
          <td class="text-left text-sm font-semibold text-color-16 py-4 px-6 whitespace-nowrap">
            <div class="text-sm font-medium text-color-16">17/10/2024</div>
            <div class="text-sm font-normal text-color-6">22:20</div>
          </td>
          <td class="text-left text-sm font-semibold text-color-16 py-4 px-6 whitespace-nowrap">
            <div class="flex items-center gap-2 justify-end">
              <RouterLink :to="{ name : 'chitietnguoidung'}" class="w-9 h-9 rounded-lg bg-color-10 flex justify-center items-center cursor-pointer">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.43844 13.6584H11.9269C12.2652 13.6584 12.5457 13.3751 12.5457 13.0334C12.5457 12.6917 12.2652 12.4167 11.9269 12.4167H7.43844C7.10016 12.4167 6.81963 12.6917 6.81963 13.0334C6.81963 13.3751 7.10016 13.6584 7.43844 13.6584ZM10.2272 8.25008H7.43844C7.10016 8.25008 6.81963 8.53341 6.81963 8.87508C6.81963 9.21675 7.10016 9.49175 7.43844 9.49175H10.2272C10.5655 9.49175 10.846 9.21675 10.846 8.87508C10.846 8.53341 10.5655 8.25008 10.2272 8.25008ZM16.1154 7.52142C16.3093 7.51919 16.5205 7.51675 16.7124 7.51675C16.9186 7.51675 17.0837 7.68341 17.0837 7.89175V14.5917C17.0837 16.6584 15.4252 18.3334 13.379 18.3334H6.81138C4.66617 18.3334 2.91699 16.5751 2.91699 14.4084V5.42508C2.91699 3.35842 4.58366 1.66675 6.63811 1.66675H11.0441C11.2586 1.66675 11.4236 1.84175 11.4236 2.05008V4.73341C11.4236 6.25842 12.6695 7.50841 14.1794 7.51675C14.5321 7.51675 14.843 7.51938 15.1151 7.52169C15.3268 7.52349 15.5149 7.52508 15.681 7.52508C15.7985 7.52508 15.9507 7.52332 16.1154 7.52142ZM16.3429 6.30508C15.6647 6.30758 14.8652 6.30508 14.2901 6.29925C13.3776 6.29925 12.6259 5.54008 12.6259 4.61841V2.42175C12.6259 2.06258 13.0574 1.88425 13.3041 2.14341C13.7512 2.6129 14.3657 3.25847 14.9773 3.90087C15.5858 4.54011 16.1913 5.17621 16.6259 5.63258C16.8668 5.88508 16.6903 6.30425 16.3429 6.30508Z" fill="#98A2B3"/>
                </svg>
              </RouterLink>
              <div class="w-9 h-9 rounded-lg bg-color-10 flex justify-center items-center">
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2871 3.24297C17.6761 3.24297 18 3.56596 18 3.97696V4.35696C18 4.75795 17.6761 5.09095 17.2871 5.09095H0.713853C0.32386 5.09095 0 4.75795 0 4.35696V3.97696C0 3.56596 0.32386 3.24297 0.713853 3.24297H3.62957C4.22185 3.24297 4.7373 2.82197 4.87054 2.22798L5.02323 1.54598C5.26054 0.616994 6.0415 0 6.93527 0H11.0647C11.9488 0 12.7385 0.616994 12.967 1.49699L13.1304 2.22698C13.2627 2.82197 13.7781 3.24297 14.3714 3.24297H17.2871ZM15.8058 17.134C16.1102 14.2971 16.6432 7.55712 16.6432 7.48913C16.6626 7.28313 16.5955 7.08813 16.4623 6.93113C16.3193 6.78413 16.1384 6.69713 15.9391 6.69713H2.06852C1.86818 6.69713 1.67756 6.78413 1.54529 6.93113C1.41108 7.08813 1.34494 7.28313 1.35467 7.48913C1.35646 7.50162 1.37558 7.73903 1.40755 8.13594C1.54958 9.89917 1.94517 14.8102 2.20079 17.134C2.38168 18.846 3.50498 19.922 5.13206 19.961C6.38763 19.99 7.68112 20 9.00379 20C10.2496 20 11.5149 19.99 12.8094 19.961C14.4929 19.932 15.6152 18.875 15.8058 17.134Z" fill="#98A2B3"/>
                </svg>
              </div>
              <div class="w-9 h-9 rounded-lg bg-color-10 flex justify-center items-center cursor-pointer">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.81366 16.6899L15.1357 7.2212C15.5336 6.71059 15.6751 6.12025 15.5424 5.51916C15.4275 4.97271 15.0914 4.45314 14.5874 4.05899L13.3582 3.08255C12.2882 2.23153 10.9618 2.32111 10.2013 3.29755L9.37887 4.36446C9.27276 4.49793 9.29929 4.69501 9.43193 4.80251C9.43193 4.80251 11.51 6.46872 11.5542 6.50455C11.6957 6.63892 11.8018 6.81808 11.8284 7.03308C11.8726 7.45411 11.5808 7.84827 11.1475 7.90201C10.9441 7.92889 10.7495 7.86618 10.608 7.74973L8.42383 6.01185C8.31771 5.93213 8.15854 5.94915 8.07011 6.05664L2.87928 12.7752C2.54325 13.1963 2.42829 13.7427 2.54325 14.2712L3.20647 17.1468C3.24184 17.2991 3.37449 17.4066 3.53366 17.4066L6.45185 17.3707C6.98242 17.3618 7.47763 17.1199 7.81366 16.6899ZM11.8997 15.7944H16.6581C17.1224 15.7944 17.5 16.1769 17.5 16.6472C17.5 17.1184 17.1224 17.5 16.6581 17.5H11.8997C11.4355 17.5 11.0579 17.1184 11.0579 16.6472C11.0579 16.1769 11.4355 15.7944 11.8997 15.7944Z" fill="#98A2B3"/>
                </svg>
              </div>
            </div>
          </td>
        </tr>
        <tr class="border-b border-color-2">
          <td class="text-left text-sm font-semibold text-color-16 py-4 px-6 whitespace-nowrap">
            <RouterLink :to="{ name : 'chitietnguoidung'}" class="flex items-center gap-3">
              <img src="@/assets/images/Avatar2.png" alt="Avatar">
              <div class="text-sm font-semibold text-color-16">Trần Huy Hoàng</div>
            </RouterLink>
          </td>
          <td class="text-left text-sm font-semibold text-color-16 py-4 px-6 whitespace-nowrap">
            <div class="py-[2px] px-[6px] bg-color-10 rounded-[4px] text-sm font-medium text-color-3 w-fit">Tổng giám đốc</div>
          </td>
          <td class="text-left text-sm font-semibold text-color-16 py-4 px-6 whitespace-nowrap">
            <div class="py-[2px] px-2 rounded-full border border-[#ABEFC6] bg-color-26 w-fit text-color-27 font-medium
              text-xs text-center">Hoạt động</div>
          </td>
          <td class="text-left text-sm font-semibold text-color-16 py-4 px-6 whitespace-nowrap">
            <div class="text-sm font-medium text-color-16">17/10/2024</div>
            <div class="text-sm font-normal text-color-6">22:20</div>
          </td>
          <td class="text-left text-sm font-semibold text-color-16 py-4 px-6 whitespace-nowrap">
            <div class="flex items-center gap-2 justify-end">
              <RouterLink :to="{ name : 'chitietnguoidung'}" class="w-9 h-9 rounded-lg bg-color-10 flex justify-center items-center cursor-pointer">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.43844 13.6584H11.9269C12.2652 13.6584 12.5457 13.3751 12.5457 13.0334C12.5457 12.6917 12.2652 12.4167 11.9269 12.4167H7.43844C7.10016 12.4167 6.81963 12.6917 6.81963 13.0334C6.81963 13.3751 7.10016 13.6584 7.43844 13.6584ZM10.2272 8.25008H7.43844C7.10016 8.25008 6.81963 8.53341 6.81963 8.87508C6.81963 9.21675 7.10016 9.49175 7.43844 9.49175H10.2272C10.5655 9.49175 10.846 9.21675 10.846 8.87508C10.846 8.53341 10.5655 8.25008 10.2272 8.25008ZM16.1154 7.52142C16.3093 7.51919 16.5205 7.51675 16.7124 7.51675C16.9186 7.51675 17.0837 7.68341 17.0837 7.89175V14.5917C17.0837 16.6584 15.4252 18.3334 13.379 18.3334H6.81138C4.66617 18.3334 2.91699 16.5751 2.91699 14.4084V5.42508C2.91699 3.35842 4.58366 1.66675 6.63811 1.66675H11.0441C11.2586 1.66675 11.4236 1.84175 11.4236 2.05008V4.73341C11.4236 6.25842 12.6695 7.50841 14.1794 7.51675C14.5321 7.51675 14.843 7.51938 15.1151 7.52169C15.3268 7.52349 15.5149 7.52508 15.681 7.52508C15.7985 7.52508 15.9507 7.52332 16.1154 7.52142ZM16.3429 6.30508C15.6647 6.30758 14.8652 6.30508 14.2901 6.29925C13.3776 6.29925 12.6259 5.54008 12.6259 4.61841V2.42175C12.6259 2.06258 13.0574 1.88425 13.3041 2.14341C13.7512 2.6129 14.3657 3.25847 14.9773 3.90087C15.5858 4.54011 16.1913 5.17621 16.6259 5.63258C16.8668 5.88508 16.6903 6.30425 16.3429 6.30508Z" fill="#98A2B3"/>
                </svg>
              </RouterLink>
              <div class="w-9 h-9 rounded-lg bg-color-10 flex justify-center items-center">
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2871 3.24297C17.6761 3.24297 18 3.56596 18 3.97696V4.35696C18 4.75795 17.6761 5.09095 17.2871 5.09095H0.713853C0.32386 5.09095 0 4.75795 0 4.35696V3.97696C0 3.56596 0.32386 3.24297 0.713853 3.24297H3.62957C4.22185 3.24297 4.7373 2.82197 4.87054 2.22798L5.02323 1.54598C5.26054 0.616994 6.0415 0 6.93527 0H11.0647C11.9488 0 12.7385 0.616994 12.967 1.49699L13.1304 2.22698C13.2627 2.82197 13.7781 3.24297 14.3714 3.24297H17.2871ZM15.8058 17.134C16.1102 14.2971 16.6432 7.55712 16.6432 7.48913C16.6626 7.28313 16.5955 7.08813 16.4623 6.93113C16.3193 6.78413 16.1384 6.69713 15.9391 6.69713H2.06852C1.86818 6.69713 1.67756 6.78413 1.54529 6.93113C1.41108 7.08813 1.34494 7.28313 1.35467 7.48913C1.35646 7.50162 1.37558 7.73903 1.40755 8.13594C1.54958 9.89917 1.94517 14.8102 2.20079 17.134C2.38168 18.846 3.50498 19.922 5.13206 19.961C6.38763 19.99 7.68112 20 9.00379 20C10.2496 20 11.5149 19.99 12.8094 19.961C14.4929 19.932 15.6152 18.875 15.8058 17.134Z" fill="#98A2B3"/>
                </svg>
              </div>
              <div class="w-9 h-9 rounded-lg bg-color-10 flex justify-center items-center cursor-pointer">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.81366 16.6899L15.1357 7.2212C15.5336 6.71059 15.6751 6.12025 15.5424 5.51916C15.4275 4.97271 15.0914 4.45314 14.5874 4.05899L13.3582 3.08255C12.2882 2.23153 10.9618 2.32111 10.2013 3.29755L9.37887 4.36446C9.27276 4.49793 9.29929 4.69501 9.43193 4.80251C9.43193 4.80251 11.51 6.46872 11.5542 6.50455C11.6957 6.63892 11.8018 6.81808 11.8284 7.03308C11.8726 7.45411 11.5808 7.84827 11.1475 7.90201C10.9441 7.92889 10.7495 7.86618 10.608 7.74973L8.42383 6.01185C8.31771 5.93213 8.15854 5.94915 8.07011 6.05664L2.87928 12.7752C2.54325 13.1963 2.42829 13.7427 2.54325 14.2712L3.20647 17.1468C3.24184 17.2991 3.37449 17.4066 3.53366 17.4066L6.45185 17.3707C6.98242 17.3618 7.47763 17.1199 7.81366 16.6899ZM11.8997 15.7944H16.6581C17.1224 15.7944 17.5 16.1769 17.5 16.6472C17.5 17.1184 17.1224 17.5 16.6581 17.5H11.8997C11.4355 17.5 11.0579 17.1184 11.0579 16.6472C11.0579 16.1769 11.4355 15.7944 11.8997 15.7944Z" fill="#98A2B3"/>
                </svg>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

<!--    Phan trang-->

    <div class="my-4 px-4">
      <div class="flex ml-auto border border-color-2 rounded-md w-fit">
        <div class="w-10 h-10 py-2 px-[10px] border-r border-color-2 flex justify-center items-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 14.1667L10.8333 10L15 5.83337M9.16667 14.1667L5 10L9.16667 5.83337" stroke="#667085" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="w-10 h-10 py-2 px-[10px] border-r border-color-2 flex justify-center items-center">
          <svg class="rotate-180" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.50023 5L11.911 9.41075C12.1888 9.6885 12.3276 9.82742 12.3276 10C12.3276 10.1726 12.1888 10.3115 11.911 10.5892L7.50023 15" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="w-10 h-10 py-2 px-[10px] border-r border-color-2 flex justify-center items-center text-sm
          font-semibold text-white bg-color-4">1</div>
        <div class="w-10 h-10 py-2 px-[10px] border-r border-color-2 flex justify-center items-center text-sm
          font-semibold text-color-3">2</div>
        <div class="w-10 h-10 py-2 px-[10px] border-r border-color-2 flex justify-center items-center text-sm
          font-semibold text-color-3">...</div>
        <div class="w-10 h-10 py-2 px-[10px] border-r border-color-2 flex justify-center items-center text-sm
          font-semibold text-color-3">9</div>
        <div class="w-10 h-10 py-2 px-[10px] border-r border-color-2 flex justify-center items-center text-sm
          font-semibold text-color-3">10</div>
        <div class="w-10 h-10 py-2 px-[10px] border-r border-color-2 flex justify-center items-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.50023 5L11.911 9.41075C12.1888 9.6885 12.3276 9.82742 12.3276 10C12.3276 10.1726 12.1888 10.3115 11.911 10.5892L7.50023 15" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="w-10 h-10 py-2 px-[10px] border-r border-color-2 flex justify-center items-center">
          <svg class="rotate-180" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 14.1667L10.8333 10L15 5.83337M9.16667 14.1667L5 10L9.16667 5.83337" stroke="#667085" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components:{
  },
  props:{

  }
}
</script>