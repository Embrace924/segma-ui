<template>
    <div>
        <el-tag
            v-for="item in items"
            :key="item.label"
            :type="item.type"
            effect="dark">
            {{ item.label }}
        </el-tag>
    </div>
</template>

<script>
export default {
    name: "Tag",
    data() {
        return {
            items: [
                { type: '', label: '标签一' },
                { type: 'success', label: '标签二' },
                { type: 'info', label: '标签三' },
                { type: 'danger', label: '标签四' },
                { type: 'warning', label: '标签五' }
            ]
        }
    }
}
</script>

