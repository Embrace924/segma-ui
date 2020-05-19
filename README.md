# 欢迎使用 segma_ui

## Install
    npm install --save segma-ui

## Set
    2.2.0版本只抛出样式文件和自定义指令文件
    插件引入文件 例如：

	   import 'segma-ui/lib/segma-ui.css';//引入样式文件
	   import directives from 'segma-ui/lib/segma-ui.common'  //引入segma-ui封装的一些插件 目前只有directives
	   import element_ui from './element_ui';//自己按需引入element的文件


	   const plugins = [
		   element_ui,
		   directives
	   ];

	   export default {
		   install(Vue) {
			   plugins.forEach(plugin => {
				   Vue.use(plugin);
			   });
		   }
	   };

## Link
    [SegmaUI组件库使用文档](https://docs.qq.com/doc/DYU5Hd3RYRnpqYnly)
    [SegmaUI规范](https://docs.qq.com/doc/DYWxuZGtEWFhMVW5o)