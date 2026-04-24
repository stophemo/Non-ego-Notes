<template>
  <div class="app-container">
    <!-- 顶部菜单栏 -->
    <header class="top-menu">
      <div class="menu-left">
        <div class="menu-item">文件</div>
        <div class="menu-item">编辑</div>
        <div class="menu-item">AI</div>
        <div class="menu-item">标记</div>
        <div class="menu-item">查看</div>
        <div class="menu-item">帮助</div>
      </div>
      <div class="menu-right">
        <button class="window-control-btn" @click="toggleLeftSidebar" title="收起左侧菜单">
          <IconLeftSidebar />
        </button>
        <button class="window-control-btn" @click="toggleRightSidebar" title="收起AI聊天">
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
    
    <!-- 主内容区域 -->
    <div class="main-content">
      <!-- 左侧菜单列 -->
      <aside class="left-sidebar" :class="{ 'collapsed': !leftSidebarOpen }">
        <div class="sidebar-section">
          <h3>文件</h3>
          <div class="sidebar-item">新建文档</div>
          <div class="sidebar-item">搜索</div>
        </div>
        <div class="sidebar-section">
          <h3>灵感</h3>
          <div class="sidebar-item">灵感</div>
          <div class="sidebar-item">收藏</div>
          <div class="sidebar-item">Effie介绍</div>
        </div>
        <div class="sidebar-section">
          <h3>项目</h3>
          <div class="sidebar-item">文案</div>
          <div class="sidebar-item">工作</div>
          <div class="sidebar-item">中国</div>
        </div>
      </aside>
      
      <!-- 中间缩略图列 -->
      <section class="thumbnail-column">
        <div class="note-item">
          <h4>智能锁营销策划</h4>
          <p>方案 中心小学解决方案可以连接多个机房，特点可以分别到个设备。一个方案多个成本中心</p>
        </div>
        <div class="note-item">
          <h4>智能锁章程</h4>
          <p>智能锁适用场景、用途、于4年废资源票还费用。各种制服服，品牌选择供应商，供应商计划及品牌采购清单，成本计划</p>
        </div>
        <div class="note-item">
          <h4>密码</h4>
          <p>邮箱：bojd@46 营销系统<br>zhzx zoom8992110@126.com<br>yprn 1342185024 Zoom1234...</p>
        </div>
        <div class="note-item empty-note">
          <p>空白文档</p>
        </div>
      </section>
      
      <!-- 中央编辑区域 -->
      <section class="edit-area">
        <div class="edit-content">
          <!-- 编辑内容将在这里 -->
        </div>
      </section>
      
      <!-- 右侧AI对话区域 -->
      <aside class="right-sidebar" :class="{ 'collapsed': !rightSidebarOpen }">
        <div class="ai-header">
          <h3>有什么我可以帮你的？</h3>
        </div>
        <div class="ai-chat">
          <div class="ai-input">
            <input type="text" placeholder="和 Effie AI 聊聊天...">
            <button class="ai-send-btn">发送</button>
          </div>
          <div class="ai-quick-buttons">
            <button class="quick-btn">试试 AI 写作助手</button>
            <button class="quick-btn">标题党 →</button>
            <button class="quick-btn">能为我推荐一些写作灵感吗？→</button>
            <button class="quick-btn">帮我梳理一下写作思路 →</button>
            <button class="quick-btn">能帮我生成一段开头吗？→</button>
            <button class="quick-btn">玩文字冒险游戏 →</button>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IconLeftSidebar from './components/icons/IconLeftSidebar.vue'
import IconRightSidebar from './components/icons/IconRightSidebar.vue'
import IconMinimize from './components/icons/IconMinimize.vue'
import IconMaximize from './components/icons/IconMaximize.vue'
import IconClose from './components/icons/IconClose.vue'

// 侧边栏状态
const leftSidebarOpen = ref(true)
const rightSidebarOpen = ref(true)

// 切换左侧侧边栏
const toggleLeftSidebar = () => {
  leftSidebarOpen.value = !leftSidebarOpen.value
}

// 切换右侧侧边栏
const toggleRightSidebar = () => {
  rightSidebarOpen.value = !rightSidebarOpen.value
}

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
</script>

<style scoped>
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