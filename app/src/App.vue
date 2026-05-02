<template>
  <div class="app-container">
    <!-- 顶部菜单栏 -->
    <TopMenu 
      :is-open="topMenuOpen"
      @toggle-left-sidebar="toggleLeftSidebar"
      @toggle-thumbnail-sidebar="toggleThumbnailSidebar"
      @toggle-right-sidebar="toggleRightSidebar"
      @open-settings="showSettings = true"
      @open-login="showLogin = true"
      @toggle-top-menu="toggleTopMenu"
      @toggle-status-bar="toggleStatusBar"
    />
    
    <!-- 主内容区域 -->
    <div class="main-content">
      <!-- 左侧菜单列 -->
      <LeftSidebar :is-open="leftSidebarOpen" />
      
      <!-- 中间缩略图列 -->
      <ThumbnailColumn :is-open="thumbnailSidebarOpen" />
      
      <!-- 中央编辑区域 -->
      <EditArea :is-status-bar-open="statusBarOpen" />
      
      <!-- 右侧AI对话区域 -->
      <RightSidebar :is-open="rightSidebarOpen" @open-settings="showSettings = true" />
    </div>

    <!-- 设置弹窗 -->
    <SettingsDialog :visible="showSettings" @close="showSettings = false" />

    <!-- 登录弹窗 / 账户信息弹窗 -->
    <LoginDialog
      :visible="showLogin"
      @close="handleLoginClose"
      @login-success="handleLoginSuccess"
      @logout="handleLogout"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import TopMenu from './components/layout/TopMenu.vue'
import LeftSidebar from './components/layout/LeftSidebar.vue'
import ThumbnailColumn from './components/layout/ThumbnailColumn.vue'
import EditArea from './components/layout/EditArea.vue'
import RightSidebar from './components/layout/RightSidebar.vue'
import SettingsDialog from './components/layout/SettingsDialog.vue'
import LoginDialog from './components/layout/LoginDialog.vue'
import { useThemeStore } from './stores/theme'
import { useAuthStore } from './stores/auth'
import { useWorkspaceStore } from './stores/workspace'

// 初始化主题（确保 data-theme 属性在应用启动时就被设置到 <html>）
useThemeStore()

const authStore = useAuthStore()
const workspaceStore = useWorkspaceStore()

// 侧边栏状态
const leftSidebarOpen = ref(true)
const thumbnailSidebarOpen = ref(true)
const rightSidebarOpen = ref(true)
const showSettings = ref(false)
const showLogin = ref(false)
const topMenuOpen = ref(true)
const statusBarOpen = ref(true)

// 登录成功后拉取数据
async function handleLoginSuccess() {
  await authStore.fetchMe()
  await workspaceStore.bootstrap()
}

function handleLoginClose() {
  showLogin.value = false
}

// 用户主动退出登录：清理工作空间状态
function handleLogout() {
  workspaceStore.reset()
}

// 监听 Token 失效，自动弹出登录
function onUnauthorized() {
  authStore.logout()
  workspaceStore.reset()
  showLogin.value = true
}

// 启动流程：有 Token 则拉用户+目录；否则弹出登录
async function initApp() {
  if (authStore.isLoggedIn) {
    const ok = await authStore.fetchMe()
    if (ok) {
      try {
        await workspaceStore.bootstrap()
      } catch {
        /* error 已在 store 中保存 */
      }
      return
    }
  }
  showLogin.value = true
}

// 切换顶部菜单栏
const toggleTopMenu = () => {
  topMenuOpen.value = !topMenuOpen.value
}

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

// 切换底部状态栏
const toggleStatusBar = () => {
  statusBarOpen.value = !statusBarOpen.value
}

// 左侧菜单栏 + 缩略图栏 四步循环：
// (左开,缩开) -> 收起缩略图 -> (左开,缩关) -> 收起左侧 -> (左关,缩关) -> 展开缩略图 -> (左关,缩开) -> 展开左侧 -> (左开,缩开)
const cycleLeftPanels = () => {
  if (leftSidebarOpen.value && thumbnailSidebarOpen.value) {
    thumbnailSidebarOpen.value = false
  } else if (leftSidebarOpen.value && !thumbnailSidebarOpen.value) {
    leftSidebarOpen.value = false
  } else if (!leftSidebarOpen.value && !thumbnailSidebarOpen.value) {
    thumbnailSidebarOpen.value = true
  } else {
    leftSidebarOpen.value = true
  }
}

// 键盘快捷键处理函数
const handleKeyDown = (event: KeyboardEvent) => {
  if (!event.ctrlKey) return
  switch (event.key) {
    case 'ArrowUp':
      event.preventDefault()
      toggleTopMenu()
      break
    case 'ArrowDown':
      event.preventDefault()
      toggleStatusBar()
      break
    case 'ArrowLeft':
      event.preventDefault()
      cycleLeftPanels()
      break
    case 'ArrowRight':
      event.preventDefault()
      toggleRightSidebar()
      break
  }
}

// 组件挂载时添加键盘事件监听
onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('auth:unauthorized', onUnauthorized as EventListener);
  initApp();
});

// 组件卸载前移除键盘事件监听，防止内存泄漏
onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeyDown);
  window.removeEventListener('auth:unauthorized', onUnauthorized as EventListener);
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