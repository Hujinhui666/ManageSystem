import Vue from 'vue'
import { 
    Card, 
    Breadcrumb, 
    BreadcrumbItem, 
    Button,
    Divider,
    Input,
    Form,
    FormItem,
    Checkbox,
    Link,
    Container,
    Header,
    Table,
    TableColumn,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    Aside,
    RadioGroup,
    Submenu,
    Menu,
    MenuItem,
    Main,
    Message,
    Notification,
    Select,
    Option,
    Pagination,
    DatePicker
 } from 'element-ui'

 Vue.use(Pagination)
 Vue.use(DatePicker)
Vue.use(Select)
Vue.use(Card)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Button)
Vue.use(Divider)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Checkbox)
Vue.use(Link)
Vue.use(Container)
Vue.use(Header)
Vue.use(TableColumn)
Vue.use(Table)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Dropdown)
Vue.use(Aside)
Vue.use(RadioGroup)
Vue.use(Submenu)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Main)
Vue.use(Option)

// 挂在 原型对象上 让每个组件都能 访问到this.$message
Vue.prototype.$message=Message
Vue.prototype.$notify=Notification