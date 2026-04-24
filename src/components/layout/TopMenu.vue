<template>
  <header class="top-menu">
    <div class="menu-left">
      <Dropdown v-for="menu in menus" :key="menu.label">
        <template #trigger>
          <div class="menu-item">{{ menu.label }}</div>
        </template>
        <DropdownMenu :items="menu.items" @action="handleMenuAction" />
      </Dropdown>
    </div>
    <div class="menu-right">
      <button class="window-control-btn" @click="$emit('toggle-left-sidebar')" title="收起左侧菜单">
        <IconLeftSidebar />
      </button>
      <button class="window-control-btn" @click="$emit('toggle-right-sidebar')" title="收起AI聊天">
        <IconRightSidebar />
      </button>
      <button class="window-control-btn minimize-btn" @click="minimizeWindow" title="最小化">
        <IconMinimize />
      </button>
      <button class="window-control-btn maximize-btn" @click="maximizeWindow" title="最大化">
        <IconMaximize />
      </button>
      <button class="window-control-btn close-btn" @click="closeWindow" title="关闭">
        <IconClose />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IconLeftSidebar from '../../components/icons/IconLeftSidebar.vue'
import IconRightSidebar from '../../components/icons/IconRightSidebar.vue'
import IconMinimize from '../../components/icons/IconMinimize.vue'
import IconMaximize from '../../components/icons/IconMaximize.vue'
import IconClose from '../../components/icons/IconClose.vue'
import Dropdown from '../ui/Dropdown.vue'
import DropdownMenu from '../ui/DropdownMenu.vue'
import {
  fileMenuItems,
  editMenuItems,
  aiMenuItems,
  markMenuItems,
  viewMenuItems,
  helpMenuItems
} from '../../config/menus'

// 菜单配置数据
class TopMenu {
  static menus = [
    { label: '文件', items: fileMenuItems },
    { label: '编辑', items: editMenuItems },
    { label: 'AI', items: aiMenuItems },
    { label: '标记', items: markMenuItems },
    { label: '查看', items: viewMenuItems },
    { label: '帮助', items: helpMenuItems }
  ]
}

const menus = ref(TopMenu.menus)

defineEmits<{
  'toggle-left-sidebar': []
  'toggle-right-sidebar': []
}>()

// 窗口控制
const minimizeWindow = () => {
  if (window.electronAPI) {
    window.electronAPI.minimize()
  }
}

const maximizeWindow = () => {
  if (window.electronAPI) {
    window.electronAPI.maximize()
  }
}

const closeWindow = () => {
  if (window.electronAPI) {
    window.electronAPI.close()
  }
}

// 菜单操作处理
const handleMenuAction = (action: string) => {
  console.log('Menu action:', action)
  // 这里可以根据不同的 action 执行不同的操作
  // 例如：
  // if (action === 'new-document') { ... }
}
</script>

<style scoped>
.top-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 40px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e0e0e0;
  -webkit-app-region: drag;
}

.menu-left {
  display: flex;
  gap: 4px;
  -webkit-app-region: no-drag;
}

.menu-item {
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
}

.menu-item:hover {
  background-color: #e5e5e5;
}

.menu-right {
  display: flex;
  gap: 4px;
  -webkit-app-region: no-drag;
}

.window-control-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  transition: all 0.2s;
}

.window-control-btn:hover {
  background-color: #e5e5e5;
  color: #333;
}

.window-control-btn.close-btn:hover {
  background-color: #e81123;
  color: white;
}

.window-control-btn svg {
  width: 18px;
  height: 18px;
}
</style>
