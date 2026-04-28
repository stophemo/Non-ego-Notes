<template>
    <div class="folder-tree">
        <FolderItem
            v-for="folder in folders"
            :key="folder.id"
            :folder="folder"
            :depth="0"
            @context-menu="forwardContextMenu"
            @folder-action="forwardFolderAction"
            @rename="forwardRename"
        />
    </div>
</template>

<script setup lang="ts">
import FolderItem from './FolderItem.vue'
import type { FolderNode, ContextMenuPosition } from '../../types/folder'

interface Props {
    folders: FolderNode[]
}

interface Emits {
    (e: 'context-menu', data: { folder: FolderNode, position: ContextMenuPosition }): void
    (e: 'folder-action', data: { action: string, folder: FolderNode }): void
    (e: 'rename', data: { folder: FolderNode, newName: string }): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const forwardContextMenu = (data: { folder: FolderNode, position: ContextMenuPosition }) => {
    emit('context-menu', data)
}

const forwardFolderAction = (data: { action: string, folder: FolderNode }) => {
    emit('folder-action', data)
}

const forwardRename = (data: { folder: FolderNode, newName: string }) => {
    emit('rename', data)
}
</script>

<style scoped>
.folder-tree {
       padding: 8px 8px;
    margin: 2px 0;
    cursor: pointer;
    border-radius: 6px;
    font-size: 13px;
    color: #333;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.2s;
    height: 36px;
    width: 100%;
}
</style>
