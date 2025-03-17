<template>
  <div class="relative">
    <button
        @click="toggleDropdown"
        class="py-1 px-2 rounded-md flex items-center gap-1"
        :style="{ backgroundColor: selectColor}"
    >
      <div class="text-sm font-semibold" :style="{ color : selectColorText }">{{ selectedOption }}</div>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6L7.29289 9.29289C7.62623 9.62623 7.79289 9.79289 8 9.79289C8.20711 9.79289 8.37377 9.62623 8.70711 9.29289L12 6" stroke="#7F56D9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <div
        v-if="isOpen"
        class="absolute left-0 w-full bg-white shadow-lg rounded-md border border-gray-200 z-10"
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
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      selectedOption: "Chưa thực hiện",
      selectColor : '#F4EBFF',
      selectColorText : '#7F56D9',
      options: [
        { label: "Chưa thực hiện", color: "#F4EBFF", text : '#7F56D9' },
        { label: "Đang thực hiện", color: "#2E90FA" , text : '#fff'},
        { label: "Đã Hoàn thành", color: "#17B26A" , text : '#fff'},
      ],
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(option) {
      this.selectedOption = option.label;
      this.isOpen = false;
      this.selectColor = option.color;
      this.selectColorText = option.text
    },
  },
};
</script>