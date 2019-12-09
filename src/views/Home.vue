<template>
    <div class="segma-ui">

    </div>
</template>

<script>
export default {
	name: 'test',
	data() {
		return {
			segmaInput: {
				value1: ''
			},
			segmaSelect: {
				value1: '',
				value1Options: [
					{
						value: '1',
						label: '测试1'
					},
					{
						value: '2',
						label: '测试2'
					}
				],
				value2: '',
				value2Options: [
					{
						value: '选项1',
						label: '黄金糕'
					},
					{
						value: '选项2',
						label: '双皮奶'
					},
					{
						value: '选项3',
						label: '蚵仔煎'
					},
					{
						value: '选项4',
						label: '龙须面'
					},
					{
						value: '选项5',
						label: '北京烤鸭'
					}
				],
			},
			segmaInputNumber: {
				num: 0
			}
		};
	}
};
</script>

<style lang="less"
       scoped>
@import "../assets/css/segmaUIResetElementUI";

.segma-ui {
    .segma-input {
        margin-left: 20px;
        width: 300px;
    }

    .segma-select {
        box-sizing: border-box;
        padding: 20px 0;
    }
}

</style>