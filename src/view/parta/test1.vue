<template>
	<div class="out">
	<div class="account-operation-list">
		<div class='box'>
			<div class="right-con cf">
				<div class="right-hd">
					<div class="right-title cf">
						<h4>账户业务列表</h4>
					</div>
				</div>
				<div class='right-bd'>
          <h1>test1-------------</h1>
			    <el-form class='search-form' size="small" type='flex' justify='center' input-width="250px" label-width="100px">
						<el-row>
							<el-col :span='8' class="wjzs inputML130">
								<el-form-item label="产品代码">
									<csdc-combox style="width:180px;" 
										v-if="PRODUCT_CODE_LIST_ALL.length"
                    :columns="columns" 
                    :tableData="PRODUCT_CODE_LIST_ALL" 
                    :config="config" 
										@getMsg="getMsg"
                    @getSelected="getInfo">
                  </csdc-combox>
									<el-input style="width:180px;" v-if="!PRODUCT_CODE_LIST_ALL.length"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span='8' class="wjzs inputML130">
								<el-form-item label="产品代码">
									<csdc-combox style="width:180px;" 
										v-if="PRODUCT_CODE_LIST_ALL.length"
                    :columns="columns" 
                    :tableData="PRODUCT_CODE_LIST_ALL" 
                    :config="config" 
										@getMsg="getMsg"
                    @getSelected="getInfo">
                  </csdc-combox>
									<el-input style="width:180px;" v-if="!PRODUCT_CODE_LIST_ALL.length"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span='8' class="wjzs inputML130">
								<el-form-item label="产品代码">
									<csdc-combox style="width:180px;" 
										v-if="PRODUCT_CODE_LIST_ALL.length"
                    :columns="columns" 
                    :tableData="PRODUCT_CODE_LIST_ALL" 
                    :config="config" 
										@getMsg="getMsg"
                    @getSelected="getInfo">
                  </csdc-combox>
									<el-input style="width:180px;" v-if="!PRODUCT_CODE_LIST_ALL.length"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span='8' class="wjzs inputML130">
								<el-form-item label="产品代码">
									<csdc-combox style="width:180px;" 
										v-if="PRODUCT_CODE_LIST_ALL.length"
                    :columns="columns" 
                    :tableData="PRODUCT_CODE_LIST_ALL" 
                    :config="config" 
										@getMsg="getMsg"
                    @getSelected="getInfo">
                  </csdc-combox>
									<el-input style="width:180px;" v-if="!PRODUCT_CODE_LIST_ALL.length"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span='8' class="wjzs inputML130">
								<el-form-item label="产品代码">
									<csdc-combox style="width:180px;" 
										v-if="PRODUCT_CODE_LIST_ALL.length"
                    :columns="columns" 
                    :tableData="PRODUCT_CODE_LIST_ALL" 
                    :config="config" 
										@getMsg="getMsg"
                    @getSelected="getInfo">
                  </csdc-combox>
									<el-input style="width:180px;" v-if="!PRODUCT_CODE_LIST_ALL.length"></el-input>
								</el-form-item>
							</el-col>
						</el-row>
					</el-form>
				</div>
			</div>
		</div>
	</div>
  </div>
</template>
<script>
import csdcCombox from "@/components/csdc-combox";
export default {
  name:'test1',
  data(){
        return {
				config: {
					inputShow: "zxzdxm", // 输入框中要展示的值，传入键的名称
					clear: 0 //1 清空 0默认不清空
        },
        PRODUCT_CODE_LIST_ALL : [
        {zxzdxm: "kkk6497", zxzxmc: "废旧塑料东方嘉盛来1"},
        {zxzdxm: "kkk6499", zxzxmc: "废旧塑料东方嘉盛来2"},
        {zxzdxm: "kkk6500", zxzxmc: "废旧塑料东方嘉盛来3"},
        {zxzdxm: "kkk6502", zxzxmc: "废旧塑料东方嘉盛来4"},
        {zxzdxm: "kkk6506", zxzxmc: "废旧塑料东方嘉盛来5"},
        {zxzdxm: "kkk6519", zxzxmc: "废旧塑料东方嘉盛来6"},
        {zxzdxm: "kkk6525", zxzxmc: "废旧塑料东方嘉盛来7"},
        {zxzdxm: "kkk6543", zxzxmc: "废旧塑料东方嘉盛来8"},
        {zxzdxm: "kkk6597", zxzxmc: "废旧塑料东方嘉盛来"},
        {zxzdxm: "kkk6598", zxzxmc: "废旧塑料东方嘉盛来"},
        {zxzdxm: "kkk6632", zxzxmc: "废旧塑料东方嘉盛来"},
        {zxzdxm: "kkk6637", zxzxmc: "废旧塑料东方嘉盛来"},
        {zxzdxm: "kkk6724", zxzxmc: "废旧塑料东方嘉盛来"},
        {zxzdxm: "kkk6725", zxzxmc: "废旧塑料东方嘉盛来"},
        {zxzdxm: "kkk6727", zxzxmc: "废旧塑料东方嘉盛来-zhaowc01"},
        {zxzdxm: "kkk6728", zxzxmc: "废旧塑料东方嘉盛来"},
        {zxzdxm: "kkk6729", zxzxmc: "废旧塑料东方嘉盛来"},
        {zxzdxm: "kkk6730", zxzxmc: "废旧塑料东方嘉盛来"},
        {zxzdxm: "kkk6732", zxzxmc: "废旧塑料东方嘉盛来"},
        {zxzdxm: "kkk6738", zxzxmc: "废旧塑料东方嘉盛来"},
        {zxzdxm: "kkk6739", zxzxmc: "废旧塑料东方嘉盛来"},
        {zxzdxm: "kkk6744", zxzxmc: "废旧塑料东方嘉盛来"},
        {zxzdxm: "kkk6770", zxzxmc: "废旧塑料东方嘉盛来"},
        {zxzdxm: "kkk6771", zxzxmc: "废旧塑料东方嘉盛来-变更A"},
        {zxzdxm: "kkk6780", zxzxmc: "废旧塑料东方嘉盛来"},
        {zxzdxm: "kkk6782", zxzxmc: "废旧塑料东方嘉盛来"},
        {zxzdxm: "kkk6786", zxzxmc: "废旧塑料东方嘉盛来"},
        {zxzdxm: "kkk6792", zxzxmc: "废旧塑料东方嘉盛来"},
        {zxzdxm: "kkk6799", zxzxmc: "废旧塑料东方嘉盛来"},
        {zxzdxm: "kkk6800", zxzxmc: "废旧塑料东方嘉盛来"},
        {zxzdxm: "kkk6801", zxzxmc: "废旧塑料东方嘉盛来"},
        {zxzdxm: "kkk6802", zxzxmc: "废旧塑料东方嘉盛来"},
        {zxzdxm: "kkk6803", zxzxmc: "废旧塑料东方嘉盛来"},
        {zxzdxm: "kkk6804", zxzxmc: "废旧塑料东方嘉盛来"}        ],
				columns: [
					{ prop: "zxzdxm", label: "产品代码" ,width : 120 },
					{ prop: "zxzxmc", label: "产品名称", width :300 }
				],
        menus : [],
        timer : null,
        }
  },
  methods:{  
    getMsg (msg) {
      console.log(msg)
    },
    getInfo(info) {
      console.log(info)
    },
    
  },
		components: {
      csdcCombox
		},
  created(){ 
    for (let index = 0; index < 1000; index++) {
     console.log('test2--'+index)
    }
   },
// beforeRouteLeave(to,from,next){
//       this.$off()
//       this.$destroy();
//       next();
//     },
    beforeDestroy() {
      CollectGarbage()
    },
}
</script>
<style scoped>
    /*头部导航*/
   .out{
        width:1200px;
        margin-left: 31px;
   		min-width:1200px;
   		background-color: #28a4d6;
   }
    .main-nav{
        width: 1200px;
        height: 40px;
        margin:0 auto;
        background-color: #28a4d6;
    }
    .main-nav ul li a,
    .main-nav ul li:hover a,
    .main-nav ul li:visited a,
    .main-nav ul li.active a
    {
        color: #fff!important;
        text-decoration: none!important; 
    }

    .main-nav a{
        padding:0 4em;
        height: 40px;
        line-height: 40px;
        color:#fff;
        border-left:1px solid #28a4d6;
    }
    .member-nav a{
        height:60px;
        line-height:60px;
    }
    .main-nav a:hover{
        text-decoration: none;
        color: #fff;
    }
    .main-nav li,
    .main-nav li:focus{
        font-size: 12px;
        background-color: #28a4d6;
    }
    .main-nav li:hover,
    .main-nav li.sfHover,
    .main-nav li.current{
        background-color: #0099d6;
    }
    /*二级菜单css*/
    .main-nav .subnav{
        min-width:auto;
        width:100%;
        text-align: center;
    }
    .main-nav .subnav li{
        font-size: 12px;
        background-color: #28a4d6;
    }
    .main-nav .subnav li:hover,
    .main-nav .subnav li.current{
        background-color: #0099d6;
    }
    .main-nav .subnav a{
        height: 35px;
        line-height: 30px;
        padding:0;
        border-top:0;
    }
    .sf-menu{margin-bottom: 0;}
    .sf-with-ul:after,
    .sf-with-ul:before{
        display: none;
    }
    .sf-menu, .sf-menu * {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .sf-menu li {
        position: relative;
    }
    .sf-menu ul {
        position: absolute;
        display: none;
        top: 100%;
        left: 0;
        z-index: 99;
    }
    .sf-menu > li {
        float: left;
    }
    .sf-menu li:hover > ul,
    .sf-menu li.sfHover > ul {
        display: block;
    }

    .sf-menu a {
        display: block;
        position: relative;
    }
    .sf-menu ul ul {
        top: 0;
        left: 100%;
    }

    .router-link-active{
        background-color: #0099d6;
    }

</style>
