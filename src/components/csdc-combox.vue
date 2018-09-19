<template>
	<div>
    <div class="csdc-combox" ><!-- style="position:relative;width:100%;" -->
        <!-- <el-input v-if="!tableData.length" ></el-input> -->
        <input 
        v-if="tableData.length"
        v-on:input="doInput"
        v-model="inputMSG"
        @focus="doFocus" 
        @blur="doBlur"
         @change="changeInput(inputMSG)"
         @click="doClick"
        :placeholder="config.placeholder" 
        type="text" 
        class="el-input__inner"
        style="height:34px; line-height:34px;" >   
        <div class="cscd-inner" style="style=width:100%;overflow-x:hidden;overflow-y:auto; height:0px;position: absolute; left:0; top:20px; border-radius: 4px; border: none; background:#fff;z-index:10000;">
          <el-table
            @row-click="clickRow"
            ref="multipleTable"
            :data="tableDataCopy1"
            height="250"
            >
            <el-table-column
              align="center"
              v-for="col in columns"
              :key="col.id"
              :prop="col.prop"
              :width="col.width" 
              :label="col.label">
            </el-table-column>
          </el-table>
      </div>
      <!-- 搜索提示 -->
      <div v-if="errText" style="padding-top:2px;color: #DF1614;font-size: 12px;line-height: 1;padding-top: 2px;position: absolute;top: 100%;left: 0">{{config.errorText}}</div>
      <!-- 必填提示 -->
      <div v-if="errText2" style="padding-top:2px;color: #DF1614;font-size: 12px;line-height: 1;padding-top: 2px;position: absolute;top: 100%;left: 0">{{config.required.errorText}}</div>
      <!-- 填写的项不在下拉列表内提示 -->
      <div v-if="errText3" style="padding-top:2px;color: #DF1614;font-size: 12px;line-height: 1;padding-top: 2px;position: absolute;top: 100%;left: 0">{{config.errorText3}}</div>
      <!-- 从父组件传过来值，进行报错 -->
      <div v-if="outError" style="padding-top:2px;color: #DF1614;font-size: 12px;line-height: 1;padding-top: 2px;position: absolute;top: 100%;left: 0">{{outText}}</div>
    </div>
	</div>
</template>
<script>
export default {
  // 1.tableData条数有变化的时候，（输入文案的时候），设置边框
  name: "csdc-combox",
  props: ["columns", "tableData", "config", "returnValue","isError","outText"],
  data() {
    return {
      table:null,
      tableFlag:"",
      tableWrap: null,
      inputMSG: "",
      tableDataCopy: [],
      tableDataCopy1: [],
      multipleSelection: [],
      timerHandler: null,
      outError : false,
      errText: false, //搜索
      errText2: false, //必填
      errText3 : false, // 所填的项是否在下拉列表内
      flag: false, // doBlur中的--输入框的内的文案是否匹配列表的某项的某键的值
      flag2: false, // autoChoose中的--输入框的内的文案是否匹配列表的某项的某键的值
      saveFlag: true,
      selected: null
      // defaultColor : '', // 默认边框颜色,选择完成的时候边框的颜色 green : #36AE37, red : #DF1614,blue : #28A4D6，gray : #e2e2e2
      // doneColor : '',//选择完成的时候边框的颜色 green : #36AE37, red : #DF1614,blue : #28A4D6，gray : #e2e2e2
      // doneColor : '',//选择完成的时候边框的颜色 green : #36AE37, red : #DF1614,blue : #28A4D6，gray : #e2e2e2
    };
  },
  watch: {
    "isError": function(newVal, oldVal) {
      if (newVal > oldVal) {
        this.errText =  false ;
        this.errText2 =  false ;
        this.errText3  =  false ;
        this.outError = true;
        this.setBorderColor('red');
      }else {
        this.setBorderColor('green');
        this.outError = false;
      }
    },
    "config.clear": function(newVal, oldVal) {
      if (newVal > oldVal) {
        this.inputMSG = "";
        this.$emit("getSelected", null);
        this.$emit("getInput2", "");
        this.errText = false;
        this.errText2 = false;
        this.errText3 = false;
        this.setBorderColor(this.config.defaultColor);
        this.tableDataCopy1 = this.deepCopy(this.tableDataCopy);
      }
    },
    "config.required.state": function(newVal) {
      if (newVal) {
        this.showRequiredText();
      }
    },
    "returnValue": function(newVal) {
      if (newVal) {
        this.inputMSG = newVal;
      }
    },
    "tableDataCopy1.length" : function() {
      // alert(1)
      this.doRightBorder();
    },
    inputMSG: function(newVal) {
      if (newVal) {
        this.$emit("getInput2", newVal);
      }
      this.doRightBorder();

    },
  },
  methods: {
    getCss(obj, attr) {
      if (obj.currentStyle) {
        return obj.currentStyle[attr];
      } else {
        return window.getComputedStyle(obj, null)[attr];
      }
    },
    domInput() {
      return this.$el.children[0].children[0];
    },
    domInner() {
      return this.$el.children[0].children[1];
    },
   changeInput(item){
      this.$emit("getchangeInput",item)
    },
    // 设置边框的颜色
    setBorderColor(color) {
      // 实参对应的色值：        green : #36AE37, red : #DF1614,blue : #28A4D6
      if (color) {
        const input = this.domInput();
        let css = "";
        if (color === "green") {
          css = "1px solid #36AE37";
        } else if (color === "red") {
          // 需要验证的项，验证不通过的时候，显示红色边框
          if (this.config.check == 1 || this.config.checkInArray) {
            css = "1px solid #DF1614";
          }
          if(this.outError) {
            css = "1px solid #DF1614";
          }
          if(this.errText2){
            css = "1px solid #DF1614";
          }
        } else if (color === "blue") {
          css = "1px solid #28A4D6";
        } else if (color === "gray") {
          css = "1px solid #e2e2e2";
        }
        input.style.border = css;
      }
    },
    // 如果输入框文案匹配列表某项的某个键的值，自动选择该项，传到父组件
    autoChoose(actionType) {
      this.doSearch();
      let self = this;
      // 匹配到了
      for (let i = 0; i < this.tableDataCopy.length; i++) {
        for (let p in self.tableDataCopy[i]) {
          // ===，因为输入框为空并且代码为0时，判断有误
          if (self.tableDataCopy[i][p] === self.inputMSG && '' !== self.inputMSG) {
            self.flag2 = true; // 标识：true 匹配到合适的值
            self.errText = false;
            self.errText3 = false;//输入的项是否在下拉列表中
            self.selected = self.tableDataCopy[i];
            self.$emit("getSelected", self.selected);
            self.inputMSG = self.selected[self.config.inputShow];
            self.saveFlag = true;
            self.$emit("getSaveFlag", self.saveFlag);
            self.setBorderColor(self.config.doneColor || 'gray');
            // break;
            return;
          }
        }
      }
      //没匹配到
      if (!self.flag2) {
        self.selected = null;
        // 输入框为空
        if (self.inputMSG == "") {
          // self.saveFlag = true;
          // 如果是必填的项,不能继续操作（提交、保存等），显示错误文案
          if (self.config.required && self.config.required.flag == true) {
            self.saveFlag = false;
            self.errText = false;
            self.errText2 = true;//必填项
            self.errText3 = false;//输入的项是否在下拉列表中
            self.setBorderColor("red");
          }else {
            // 非必填项可以继续操作（提交、保存等）
            self.saveFlag = true;
          }
          // 输入框不为空
        } else {
          if(actionType && actionType === 'input') {
            self.setBorderColor('blue')
          }else {
            self.setBorderColor("red");
          }
          if (self.config.check == 1) {
            self.errText = true;
          }
          if(self.config.checkInArray) {
            self.errText3= true;
            self.setBorderColor('red');
          }
          // 输入框中的文案不为空且不能匹配列表中某项的键的值，向父组件传出一个是否可以继续下一步操作的标识
          // false : 不可以操作下一步，true : 可以操作下一步
          self.saveFlag = false;
        }
        self.$emit("getSaveFlag", self.saveFlag);
        self.$emit("getSelected", null);
      }
    },
    // 展示必填报错文案
    showRequiredText() {
      this.setBorderColor("red");
      this.errText2 = true;
      this.errText = false;
      this.errText3 = false;
    },
    // 隐藏必填报错文案
    hideRequiredText() {
      // this.setBorderColor('green')
      this.errText2 = false;
    },
    // 失去焦点时
    doBlur(e) {
      this.doSearch();
      let self = this;
      let inner = self.domInner();
      self.timerHandler = setTimeout(() => {
        if (!!window.ActiveXObject || "ActiveXObject" in window){
        if(self.tableFlag===""){
          self.hideTable(inner); 
          return;
        }
        if(self.tableFlag==true){
            self.hideTable(inner);  
        }    
        }else{
          self.hideTable(inner);  
        }
        if (null != self.timerHandler) {
          clearTimeout(self.timerHandler);
          self.timerHandler = null;
        }
      }, 200);
      // 必填项
      if (self.config.required && self.config.required.flag == true) {
        if (self.inputMSG == "") {
          self.showRequiredText();
          self.$emit("getMsg", this.inputMSG);
          self.$emit("getSelected", null);
        } 
         self.autoChoose();
        // 非必填项
      } else {
        //if(self.config.required.flag == false)
        // 非必填项，为空时
        if (self.inputMSG == "") {
          // const input = self.domInput();
          // input.style.border = '1px solid rgb(40, 164, 214)';
          self.setBorderColor(self.config.defaultColor || "gray");
          self.errText = false;
          self.errText3 = false;
          self.$emit("getMsg", this.inputMSG);
          self.$emit("getSelected", null);
        } else {
          self.autoChoose();
        }
      }
      // if(self.saveFlag) {
      //   self.setBorderColor(self.config.doneColor || 'gray');
      // }
      self.$emit("getInput2", self.inputMSG);
    },
    // 点击行,选中某条数据
    clickRow(row, event, column) {
      this.saveFlag = true;
      this.setBorderColor(this.config.doneColor || 'gray');
      this.$emit("getSaveFlag", this.saveFlag);
      this.hideRequiredText();
      this.errText = false;
      this.errText3 = false;
      let inner = this.domInner();
      if (row) {
        this.$emit("getSelected", row);
      }
      this.hideTable(inner);
      if (this.config["inputShow"] && row) {
        this.inputMSG = row[this.config["inputShow"]];
        this.doSearch();
      }
    },
    doFocus(event) {
      const self = this;
      self.flag2 = false;
      self.selected = null;
      self.$emit("getSelected", null);
      self.setBorderColor("blue");
      self.hideRequiredText();
      let input = event.target;
      let inner = input.nextElementSibling;
      self.doPosition(input, inner);
      if (inner.style.height == "0px") {
        self.showTable(inner);
      } else {
        self.hideTable(inner);
      }
      if (self.inputMSG == "") {
        self.doSearch();
      }
      self.autoChoose();
    },
    hideTable(dom) {
      dom.style.height = "0px";
      dom.style.transition = "0.2s";
      dom.style.border = "none";
    },
    showTable(dom) {
      dom.style.height = "250px";
      dom.style.border = "1px solid #28A4D6";
      dom.style.transition = "0.2s";
      this.doRightBorder();
    },
    doRightBorder() {
      setTimeout(()=>{
        let input = this.domInput();
        let dom = this.domInner();
        let wI = parseInt(this.getCss(input,'width')) - 1;
        let wD = parseInt(this.getCss(dom,'width'));
        dom.querySelector('.el-table__body-wrapper').style.overflowX = 'hidden';
        dom.querySelector('.el-table__body-wrapper').style.overflowY = 'auto';
        function rightGray(el) {
          el.style.boxSizing = 'border-box';
          el.style.borderRight = '1px solid #dddddd';
        }
        // let td = dom.querySelectorAll('td');
        let th = dom.querySelectorAll('th');
        // for(let i = 0;i<td.length; i++) {
        //   if((i!= td.length-1)) {
        //     rightGray(td[i]);
        //   }
        // }
        for(let i =0;i<th.length;i++) {
          if(i != (th.length-2) && (i!= th.length-1)) {
            rightGray(th[i]);
          }
          th[i].style.paddingLeft = '0px';
          th[i].style.paddingRight = '0px';
        }
        if(wI > wD) {
          dom.style.width = wI + 'px';
        }
      },0)
    },
    deepCopy(p, c) {

      // 检查下拉列表中的值，是否有null的项，有null的话将null转换成''
      function checkDict(dictArr) {
          if(dictArr.length) {
              for(let i = 0;i<dictArr.length;i++) {
                  for(let p in dictArr[i]) {
                      if(null === dictArr[i][p]) {
                          dictArr[i][p] = '';
                      }
                  }
              }
          }
      }      
      checkDict(p);
      var c = c || new Array();
      for (var i in p) {
        if (typeof p[i] === "object") {
          c[i] = p[i].constructor === Array ? [] : {};
          this.deepCopy(p[i], c[i]);
        } else {
          c[i] = p[i];
        }
      }
      return c;
    },
    doInput(e) {
      this.flag2 = false;
      this.setBorderColor("blue");
      this.autoChoose('input');
      this.$emit("getMsg", this.inputMSG);
      if (!this.selected) {
        this.$emit("getSelected", null);
      }
      var self = this;
      let dom = e.target.nextElementSibling;
      if (dom.style.height == "0px") {
        this.showTable(dom);
      }
      this.doSearch();
      // this.doRightBorder();

      // 不是必填项
      // if(!self.config.required.flag) {
      //   if(self.inputMSG == '') {
      //     self.setBorderColor('red');
      //     if(self.config.check == 1) {
      //       self.errText = true;
      //     }
      //   }
      // }
    },
    doSearch() {
      // this.autoChoose();
      const self = this;
      const input = self.domInput();
      const inner = this.domInner();
      let arr = [];
      for (let i = 0; i < self.tableDataCopy.length; i++) {
        for (let p in self.tableDataCopy[i]) {
          if (self.tableDataCopy[i][p].indexOf) {
            if (self.tableDataCopy[i][p].indexOf(self.inputMSG) > -1) {
              arr.push(self.tableDataCopy[i]);
              break;
            }
          }
        }
      }
      // 未搜索到匹配的项
      if (!arr.length) {
        self.setBorderColor("red");
        if (self.config.check == 1) {
          self.errText = true;
          self.errText2 = false;
        }
        // self.hideTable(inner);
        // 搜索到匹配的项
      } else {
        // self.setBorderColor(self.config.doneColor || 'gray');
        self.errText = false;
        self.errText2 = false;
      }
      self.tableDataCopy1 = arr;
      this.doRightBorder();
    },
    doCopy() {
      this.tableDataCopy = this.deepCopy(this.tableData);
      this.tableDataCopy1 = this.deepCopy(this.tableData);
    },
    doPosition(dom, inner) {
      let innerH = inner.offsetHeight + 8;
      let domH = dom.offsetHeight + 8;
      let w = document.documentElement.clientWidth; // 可见区域宽度
      let h = document.documentElement.clientHeight; // 可见区域高度
      let tableH = parseInt(inner.querySelector(".el-table").offsetHeight);
      let tableW = parseInt(inner.querySelector(".el-table").offsetWidth);
      let obj = dom.getBoundingClientRect();
      // 居左
      function alignLeft() {
        inner.style.left = "0";
        inner.style.right = "auto";
      }
      // 居右
      function alignRight() {
        inner.style.right = "0";
        inner.style.left = "auto";
      }
      // 居上
      function alignTop() {
        inner.style.bottom = domH + "px";
        inner.style.top = "auto";
      }
      // 居下
      function alignBottom() {
        inner.style.top = domH + "px";
        inner.style.bottom = "auto";
      }
      // 右侧>表格宽度  是              否
      //               alignLeft       左侧>表格宽度
      //                               是                   否
      //                               alignRight           alignLeft
      //
      if (w - obj.left >= tableW) {
        alignLeft();
      } else {
        if (obj.right >= tableW) {
          alignRight();
        } else {
          alignLeft();
        }
      }
      if (h - obj.bottom >= tableH) {
        alignBottom();
      } else {
        if (obj.top >= tableH) {
          alignTop();
        } else {
          alignBottom();
        }
      }
    },
      getTable(){
     if (!!window.ActiveXObject || "ActiveXObject" in window){
      let self=this;
      this.table = self.domInner();
      this.table.onmouseenter=function(){
        self.tableFlag=false;
      }
       this.table.onmouseleave=function(){
        self.tableFlag=true;
        self.hideTable(self.table); 
      }
     }
    },
      doClick(){
      if (!!window.ActiveXObject || "ActiveXObject" in window){
      if(this.table.offsetHeight==0){
        this.showTable(this.table); 
        }
      }
    },
  },
  created() {
    this.doCopy();
    let self = this;
    if (this.returnValue) {
      this.inputMSG = this.returnValue;
      for (let i = 0; i < this.tableDataCopy.length; i++) {
        for (let p in self.tableDataCopy[i]) {
          if (self.tableDataCopy[i][p] == self.inputMSG) {
            this.selected = self.tableDataCopy[i];
            this.$emit("getSelected", this.selected);
            break;
          }
        }
      }
    }
  },
  mounted() {
    this.getTable()
    // let inner = this.domInner();
    // let input = this.domInput();
    // let width = parseInt(this.getCss(input,'width'))-2+'px';
    // inner.style.width = width;
  }
};
</script>
<style>
.csdc-combox {position:relative;width:100%;}
.csdc-combox td { border-right: 1px solid #dddddd; }
.csdc-combox tr td:last-child { border-right: none!important; }
.csdc-combox-required .el-form-item__label:before {
    content: '*';
    color: #DF1614;
    margin-right: 4px;
}
</style>

  