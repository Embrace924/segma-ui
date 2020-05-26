<!--Tree-->
<template>
    <div class="tree">
        <p> 基础用法 </p>
        <br>
        <el-tree :data="data"
                 accordion
                 :props="defaultProps"
                 @node-click="handleNodeClick"></el-tree>
        <p> 可选择(适用于需要选择层级时使用。) </p>
        <br>
        <el-tree :props="props2"
                 :load="loadNode"
                 lazy
                 show-checkbox
                 @check-change="handleCheckChange">
        </el-tree>
        <p> 默认展开和默认选中(可将 Tree 的某些节点设置为默认展开或默认选中 ) </p>
        <br>
        <el-tree :data="data3"
                 show-checkbox
                 node-key="id"
                 :default-expanded-keys="[2, 3]"
                 :default-checked-keys="[5]"
                 :props="defaultProps">
        </el-tree>
        <p> 可拖拽节点(通过 draggable 属性可让节点变为可拖拽。) </p>
        <br>
        <el-tree :data="data4"
                 node-key="id"
                 default-expand-all
                 @node-drag-start="handleDragStart"
                 @node-drag-enter="handleDragEnter"
                 @node-drag-leave="handleDragLeave"
                 @node-drag-over="handleDragOver"
                 @node-drag-end="handleDragEnd"
                 @node-drop="handleDrop"
                 draggable
                 :allow-drop="allowDrop"
                 :allow-drag="allowDrag">
        </el-tree>
    </div>
</template>

<script>
export default {
    name: 'Tree',
    // components: {},
    // directives: {},
    // filters: {},
    // model: {},
    // props: [],
    data() {
        return {
            data: [
                {
                    label: '中冶赛迪集团1',
                    children: [
                        {
                            label: '赛迪集团高管',
                            children: [
                                {
                                    label: '赛迪集团团委'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: '中冶赛迪集团2',
                    children: [
                        {
                            label: '赛迪集团管理层2-1',
                            children: [
                                {
                                    label: '赛迪集团管理层2-1-1',
                                    children: [
                                        {
                                            label: '赛迪集团管理层2-1-1-1'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            label: '赛迪集团管理层2 2-2',
                            children: [
                                {
                                    label: '赛迪集团管理层2 2-2-1'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: '中冶赛迪集团3',
                    children: [
                        {
                            label: '赛迪集团执行层 3-1',
                            children: [
                                {
                                    label: '赛迪集团执行层 3-1-1'
                                }
                            ]
                        },
                        {
                            label: '赛迪集团执行层 3-2',
                            children: [
                                {
                                    label: '赛迪集团执行层 3-2-1'
                                }
                            ]
                        }
                    ]
                }
            ],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            props2: {
                label: 'name',
                children: 'zones'
            },
            count: 1,
            data3: [
                {
                    id: 1,
                    label: '一级 1',
                    children: [
                        {
                            id: 4,
                            label: '二级 1-1',
                            disabled: true,
                            children: [
                                {
                                    id: 9,
                                    label: '三级 1-1-1'
                                },
                                {
                                    id: 10,
                                    label: '三级 1-1-2'
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 2,
                    label: '一级 2',
                    children: [
                        {
                            id: 5,
                            label: '二级 2-1'
                        },
                        {
                            id: 6,
                            label: '二级 2-2'
                        }
                    ]
                },
                {
                    id: 3,
                    label: '一级 3',
                    children: [
                        {
                            id: 7,
                            label: '二级 3-1'
                        },
                        {
                            id: 8,
                            label: '二级 3-2'
                        }
                    ]
                }
            ],
            data4: [
                {
                    id: 1,
                    label: '一级 1',
                    children: [
                        {
                            id: 4,
                            label: '二级 1-1',
                            children: [
                                {
                                    id: 9,
                                    label: '三级 1-1-1'
                                },
                                {
                                    id: 10,
                                    label: '三级 1-1-2'
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 2,
                    label: '一级 2',
                    children: [
                        {
                            id: 5,
                            label: '二级 2-1'
                        },
                        {
                            id: 6,
                            label: '二级 2-2'
                        }
                    ]
                },
                {
                    id: 3,
                    label: '一级 3',
                    children: [
                        {
                            id: 7,
                            label: '二级 3-1'
                        },
                        {
                            id: 8,
                            label: '二级 3-2',
                            children: [
                                {
                                    id: 11,
                                    label: '三级 3-2-1'
                                },
                                {
                                    id: 12,
                                    label: '三级 3-2-2'
                                },
                                {
                                    id: 13,
                                    label: '三级 3-2-3'
                                }
                            ]
                        }
                    ]
                }
            ],

        };
    },
    methods: {
        handleNodeClick(data) {
            console.log(data);
        },
        handleCheckChange(data, checked, indeterminate) {
            console.log(data, checked, indeterminate);
        },
        loadNode(node, resolve) {
            if (node.level === 0) {
                return resolve([
                    { name: 'region1' },
                    { name: 'region2' }
                ]);
            }
            if (node.level > 3) return resolve([]);

            let hasChild;
            if (node.data.name === 'region1') {
                hasChild = true;
            } else if (node.data.name === 'region2') {
                hasChild = false;
            } else {
                hasChild = Math.random() > 0.5;
            }

            setTimeout(() => {
                let data;
                if (hasChild) {
                    data = [
                        {
                            name: 'zone' + this.count++
                        },
                        {
                            name: 'zone' + this.count++
                        }
                    ];
                } else {
                    data = [];
                }

                resolve(data);
            }, 500);
        },
        handleDragStart(node, ev) {
            console.log('drag start', node);
        },
        handleDragEnter(draggingNode, dropNode, ev) {
            console.log('tree drag enter: ', dropNode.label);
        },
        handleDragLeave(draggingNode, dropNode, ev) {
            console.log('tree drag leave: ', dropNode.label);
        },
        handleDragOver(draggingNode, dropNode, ev) {
            console.log('tree drag over: ', dropNode.label);
        },
        handleDragEnd(draggingNode, dropNode, dropType, ev) {
            console.log('tree drag end: ', dropNode && dropNode.label, dropType);
        },
        handleDrop(draggingNode, dropNode, dropType, ev) {
            console.log('tree drop: ', dropNode.label, dropType);
        },
        allowDrop(draggingNode, dropNode, type) {
            if (dropNode.data.label === '二级 3-1') {
                return type !== 'inner';
            } else {
                return true;
            }
        },
        allowDrag(draggingNode) {
            return draggingNode.data.label.indexOf('三级 3-2-2') === -1;
        }
    }
    // computed: {},
    // watch: {},
    // mounted() {},
    // created() {},
    // activated() {},
    // beforeDestroy() {},
    // destroyed() {},

};
</script>

<style lang="less"
       scoped>
.tree {
    width: 300px;
}
</style>
 