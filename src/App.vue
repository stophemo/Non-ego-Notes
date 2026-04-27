<template>
  <div class="app-container">
    <!-- 顶部菜单栏 -->
    <TopMenu 
      @toggle-left-sidebar="toggleLeftSidebar"
      @toggle-thumbnail-sidebar="toggleThumbnailSidebar"
      @toggle-right-sidebar="toggleRightSidebar"
    />
    
    <!-- 主内容区域 -->
    <div class="main-content">
      <!-- 左侧菜单列 -->
      <LeftSidebar :is-open="leftSidebarOpen" />
      
      <!-- 中间缩略图列 -->
      <ThumbnailColumn :is-open="thumbnailSidebarOpen" />
      
      <!-- 中央编辑区域 -->
      <EditArea />
      
      <!-- 右侧AI对话区域 -->
      <RightSidebar :is-open="rightSidebarOpen" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import TopMenu from './components/layout/TopMenu.vue'
import LeftSidebar from './components/layout/LeftSidebar.vue'
import ThumbnailColumn from './components/layout/ThumbnailColumn.vue'
import EditArea from './components/layout/EditArea.vue'
import RightSidebar from './components/layout/RightSidebar.vue'

// 侧边栏状态
const leftSidebarOpen = ref(true)
const thumbnailSidebarOpen = ref(true)
const rightSidebarOpen = ref(true)

// 切换左侧侧边栏
const toggleLeftSidebar = () => {
  leftSidebarOpen.value = !leftSidebarOpen.value
}

// 切换缩略图栏
const toggleThumbnailSidebar = () => {
  thumbnailSidebarOpen.value = !thumbnailSidebarOpen.value
}

// 切换右侧侧边栏
const toggleRightSidebar = () => {
  rightSidebarOpen.value = !rightSidebarOpen.value
}

// 键盘快捷键处理函数
const handleKeyDown = (event: KeyboardEvent) => {
  // 检查是否按下 Ctrl 键
  if (event.ctrlKey) {
    switch (event.key) {
      case '1':
        event.preventDefault(); // 阻止默认行为（如切换标签页）
        toggleLeftSidebar();
        break;
      case '2':
        event.preventDefault();
        toggleThumbnailSidebar();
        break;
      case '3':
        event.preventDefault();
        toggleRightSidebar();
        break;
    }
  }
}

// 组件挂载时添加键盘事件监听
onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

// 组件卸载前移除键盘事件监听，防止内存泄漏
onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeyDown);
});
</script>

<style scoped>
.app-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.main-content {
  flex: 1;
  display: flex;
  overflow: hidden;
}
</style>