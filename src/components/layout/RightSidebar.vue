<template>
  <aside class="right-sidebar" :class="{ 'collapsed': !isOpen }">
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
</template>

<script setup lang="ts">
interface Props {
  isOpen: boolean
}

defineProps<Props>()
</script>

<style scoped>
.right-sidebar {
  width: 300px;
  background-color: #fafafa;
  border-left: 1px solid #e0e0e0;
  padding: 16px;
  display: flex;
  flex-direction: column;
  transition: width 0.3s, padding 0.3s, opacity 0.3s;
}

.right-sidebar.collapsed {
  width: 0;
  padding: 0;
  opacity: 0;
  overflow: hidden;
}

.ai-header {
  margin-bottom: 16px;
}

.ai-header h3 {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.ai-chat {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.ai-input {
  display: flex;
  gap: 8px;
}

.ai-input input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #d0d0d0;
  border-radius: 4px;
  font-size: 13px;
  outline: none;
}

.ai-input input:focus {
  border-color: #4a90e2;
}

.ai-send-btn {
  padding: 8px 16px;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
  transition: background-color 0.2s;
}

.ai-send-btn:hover {
  background-color: #357abd;
}

.ai-quick-buttons {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.quick-btn {
  padding: 10px 12px;
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  color: #333;
  text-align: left;
  transition: all 0.2s;
}

.quick-btn:hover {
  background-color: #f0f0f0;
  border-color: #d0d0d0;
}
</style>
