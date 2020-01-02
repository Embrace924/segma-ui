# 欢迎使用 segma_ui

## Install
	npm install --save segma-ui
## Import
	//main.js中
	import './plugins/segmaUI.js'
## Use
新建文件夹plugins
在plugins 中 新建文件segmaUI.js

里面的element-ui的原生组件按需引入。

  import Vue from 'vue'
	// npm install --save segma-ui
	import 'segma-ui/lib/segma-ui.css'
	import element from 'segma-ui/lib/segma-ui.common'
	//按需引入
	let {
		$confirm,  //重写的confirm
		$alert,  //重写的alert
		Pagination,
		Dialog,
		Autocomplete,
		Dropdown,
		DropdownMenu,
		DropdownItem,
		Menu,
		Submenu,
		MenuItem,
		MenuItemGroup,
		Link,
		Input,
		InputNumber,
		Radio,
		RadioGroup,
		RadioButton,
		Checkbox,
		CheckboxButton,
		CheckboxGroup,
		Switch,
		Select,
		Option,
		OptionGroup,
		Button,
		ButtonGroup,
		Table,
		TableColumn,
		DatePicker,
		// TimeSelect,
		// TimePicker,
		Popover,
		Tooltip,
		Breadcrumb,
		BreadcrumbItem,
		Form,
		FormItem,
		// Tabs,
		// TabPane,
		Tag,
		Tabs,
		TabPane,
		// Tag,
		Tree,
		Alert,
		// Slider,
		Icon,
		Row,
		Col,
		Upload,
		Progress,
		// Badge,
		Card,
		// Rate,
		// Steps,
		// Step,
		// Carousel,
		// CarouselItem,
		// Collapse,
		// CollapseItem,
		// Cascader,
		// ColorPicker,
		// Transfer,
		Container,
		Header,
		Aside,
		Main,
		Footer,
		Loading,
		MessageBox,
		Message,
		InfiniteScroll
		// Notification,
		// Backtop
		// Divider
	} = element
	Vue.use(Pagination);
	Vue.use(Dialog);
	Vue.use(Autocomplete);
	Vue.use(Dropdown);
	Vue.use(DropdownMenu);
	Vue.use(DropdownItem);
	Vue.use(Menu);
	Vue.use(Submenu);
	Vue.use(MenuItem);
	Vue.use(MenuItemGroup);
	Vue.use(Link);
	Vue.use(Input);
	Vue.use(InputNumber);
	Vue.use(Radio);
	Vue.use(RadioGroup);
	Vue.use(RadioButton);
	Vue.use(Checkbox);
	Vue.use(CheckboxButton);
	Vue.use(CheckboxGroup);
	Vue.use(Switch);
	Vue.use(Select);
	Vue.use(Option);
	Vue.use(OptionGroup);
	Vue.use(Button);
	Vue.use(ButtonGroup);
	Vue.use(Table);
	Vue.use(TableColumn);
	Vue.use(DatePicker);
	// Vue.use(TimeSelect);
	// Vue.use(TimePicker);
	Vue.use(Popover);
	Vue.use(Tooltip);
	Vue.use(Breadcrumb);
	Vue.use(BreadcrumbItem);
	Vue.use(Form);
	Vue.use(FormItem);
	// Vue.use(Tabs);
	// Vue.use(TabPane);
	Vue.use(Tag);
	Vue.use(Tabs);
	Vue.use(TabPane);
	// Vue.use(Tag);
	Vue.use(Tree);
	Vue.use(Alert);
	// Vue.use(Slider);
	Vue.use(Icon);
	Vue.use(Row);
	Vue.use(Col);
	Vue.use(Upload);
	Vue.use(Progress);
	// Vue.use(Badge);
	Vue.use(Card);
	// Vue.use(Rate);
	// Vue.use(Steps);
	// Vue.use(Step);
	// Vue.use(Carousel);
	// Vue.use(CarouselItem);
	// Vue.use(Collapse);
	// Vue.use(CollapseItem);
	// Vue.use(Cascader);
	// Vue.use(ColorPicker);
	// Vue.use(Transfer);
	Vue.use(Container);
	Vue.use(Header);
	Vue.use(Aside);
	Vue.use(Main);
	Vue.use(Footer);
	// Vue.use(Backtop);
	Vue.use(Popover);
	Vue.use(Loading.directive);
	Vue.use(InfiniteScroll);

	// Vue.prototype.$loading = Loading.service;
	// Vue.prototype.$msgbox = MessageBox;
	Vue.prototype.$alert = $alert;
	Vue.prototype.$confirm = $confirm;
	Vue.prototype.$prompt = MessageBox.prompt;
	// Vue.prototype.$notify = Notification;
	Vue.prototype.$message = Message;