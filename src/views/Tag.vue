<template>
    <div class="tag">
        <p>普通标签</p>
        <br> <br>
        <!--mini20px  small22px  medium28px-->
        <el-tag size="mini"
                closable>mini标签
        </el-tag>
        <el-tag size="small"
                closable>small标签
        </el-tag>
        <el-tag size="medium"
                closable>medium标签
        </el-tag>
        <br> <br>
        <el-tag v-for="(tag,index) in dynamicTags"
                :key="`normal-${index}`"
                closable
                :disable-transitions="true"
                size="medium"
                @close="handleClose(tag)">
            {{tag}}
        </el-tag>
        <el-input class="input-new-tag tag-medium"
                  v-if="inputVisible"
                  v-model="inputValue"
                  ref="saveTagInput"
                  size="small"
                  @keyup.enter.native="handleInputConfirm"
                  @blur="handleInputConfirm">
        </el-input>
        <el-button v-else
                   class="button-light-tag tag-medium"
                   size="small"
                   @click="showInput"><i class="el-icon-plus"></i> New Tag
        </el-button>
        <el-divider></el-divider>
        <p>边框标签</p>  <br>
        <el-tag size="mini"
                effect="plain"
                closable>mini标签
        </el-tag>
        <el-tag size="small"
                effect="plain"
                closable>small标签
        </el-tag>
        <el-tag size="medium"
                effect="plain"
                closable>
            medium标签
        </el-tag>
        <br><br>
        <el-tag v-for="(tag,index) in dynamicTags"
                :key="`border-${index}`"
                closable
                effect="plain"
                size="small"
                :disable-transitions="true"
                @close="handleClose(tag)">
            {{tag}}
        </el-tag>
        <el-input class="input-new-tag tag-small tag-border"
                  v-if="inputVisible"
                  v-model="inputValue"
                  ref="saveTagInput"
                  @keyup.enter.native="handleInputConfirm"
                  @blur="handleInputConfirm">
        </el-input>
        <el-button v-else
                   class="button-plain-tag tag-small"
                   @click="showInput"><i class="el-icon-plus"></i> New Tag
        </el-button>
        <el-divider></el-divider>
        <p>禁用标签</p>  <br>

        <el-tag v-for="i in color"
                size="mini"
                :key="i"
                :class="`tag-${i}`">标签五
        </el-tag>
        <br> <br>

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
            ],
            color: [
                'blue',
                'red',
                'yellow',
                'green',
                'bright-blue',
                'purple',
                'filling'
            ],
            dynamicTags: [
                '标签一',
                '标签二',
                '标签三'
            ],
            inputVisible: false,
            inputValue: ''

        }
    },
    methods: {
        handleClose(tag) {
            this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
        },

        showInput() {
            this.inputVisible = true;
            this.$nextTick(() => {
                this.$refs.saveTagInput.$refs.input.focus();
            });
        },

        handleInputConfirm() {
            let inputValue = this.inputValue;
            if (inputValue) {
                this.dynamicTags.push(inputValue);
            }
            this.inputVisible = false;
            this.inputValue = '';
        }
    },
}
</script>
<style lang="less"
       scoped>
.tag {
    span {
        display: inline-block;
        margin: 0 10px;
    }

    .el-tag + .el-tag {
        margin-left: 10px;
    }
}
</style>

