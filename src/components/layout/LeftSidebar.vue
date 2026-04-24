<template>
    <aside class="left-sidebar" :class="{ 'collapsed': !isOpen }">
        <div class="sidebar-section">
            <div class="sidebar-item">新建文档</div>
            <div class="sidebar-item">搜索</div>
            <div class="sidebar-item">草稿箱</div>
        </div>
        <div class="divider"></div>
        <div class="sidebar-section">
            <div class="sidebar-item">随想</div>
            <div class="sidebar-item">随记</div>
            <div class="sidebar-item">随摘</div>
            <div class="sidebar-item">备忘</div>
            <div class="sidebar-item">工作</div>
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
.left-sidebar {
    width: 200px;
    background-color: #fafafa;
    border-right: 1px solid #e0e0e0;
    padding: 16px;
    overflow-y: auto;
    transition: width 0.3s, padding 0.3s, opacity 0.3s;
}

.left-sidebar.collapsed {
    width: 0;
    padding: 0;
    opacity: 0;
    overflow: hidden;
}

.sidebar-section {
    margin-top: 12px;
    margin-bottom: 12px;
}

.sidebar-section h3 {
    font-size: 14px;
    font-weight: 600;
    color: #666;
    margin-bottom: 8px;
    padding-bottom: 4px;
    border-bottom: 1px solid #e0e0e0;
}

.sidebar-item {
    padding: 8px 12px;
    margin: 4px 0;
    cursor: pointer;
    border-radius: 4px;
    font-size: 13px;
    color: #333;
}

.sidebar-item:hover {
    background-color: #e5e5e5;
}

.divider {
    height: 1px;
    background-color: #e0e0e0;
    margin: 16px 0;
}
</style>
