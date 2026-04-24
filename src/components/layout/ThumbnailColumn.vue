<template>
  <section class="thumbnail-column" :class="{ 'collapsed': !isOpen }">
    <div class="note-item" :class="{ 'active': selectedNote === 0 }" @click="selectNote(0)">
      <h4>智能锁营销策划</h4>
      <p>方案 中心小学解决方案可以连接多个机房，特点可以分别到个设备。一个方案多个成本中心</p>
    </div>
    <div class="note-item" :class="{ 'active': selectedNote === 1 }" @click="selectNote(1)">
      <h4>智能锁章程</h4>
      <p>智能锁适用场景、用途、于4年废资源票还费用。各种制服服，品牌选择供应商，供应商计划及品牌采购清单，成本计划</p>
    </div>
    <div class="note-item" :class="{ 'active': selectedNote === 2 }" @click="selectNote(2)">
      <h4>密码</h4>
      <p>邮箱：bojd@46 营销系统<br>zhzx zoom8992110@126.com<br>yprn 1342185024 Zoom1234...</p>
    </div>
    <div class="note-item empty-note" :class="{ 'active': selectedNote === 3 }" @click="selectNote(3)">
      <p>空白文档</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  isOpen: boolean
}

defineProps<Props>()

const selectedNote = ref(0)

const selectNote = (index: number) => {
  selectedNote.value = index
}
</script>

<style scoped>
.thumbnail-column {
  width: 250px;
  background-color: #f9f9f9;
  border-right: 1px solid #e0e0e0;
  padding: 12px;
  overflow-y: auto;
  transition: width 0.3s, padding 0.3s, opacity 0.3s;
}

.thumbnail-column.collapsed {
  width: 0;
  padding: 0;
  opacity: 0;
  overflow: hidden;
}

.note-item {
  padding: 12px;
  margin-bottom: 12px;
  background-color: white;
  border-radius: 6px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.2s;
}

.note-item:hover {
  border-color: #d0d0d0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.note-item.active {
  border-color: #4a90e2;
  box-shadow: 0 2px 8px rgba(74, 144, 226, 0.2);
}

.note-item h4 {
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin: 0 0 8px 0;
}

.note-item p {
  font-size: 12px;
  color: #666;
  margin: 0;
  line-height: 1.5;
}

.note-item.empty-note {
  background-color: #f5f5f5;
  border: 2px dashed #d0d0d0;
}
</style>
