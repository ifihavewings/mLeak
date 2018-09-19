/**
 * code : 接口返回的标识码
 * 如果不需要弹窗，以下4项不需要配置
 * -----------------------------
 * show ：是否需要弹窗，true：需要，false不需要
 * text ：需要弹窗时，弹窗中的文案
 * title：弹窗的标题
 * callback : 点击弹窗“确定”按钮时，需要回调的函数
 */
export default  [
  {
    code : '00000',
  },
  {
    code : '50152',
    show : true,    
    title:'提示',
    text : '这个是50152报错',
    callback : () =>{
      alert('这个是50152报错')
    }
  },
  {
    code : '50153',
    show : true,    
    title:'提示',
    text : '这个是50153报错',
  },
  {
    code : '50154',
    show : true,    
    text : '这个是50154报错',
    callback : () =>{
      alert('这个是50154报错')
    }
  },
  {
    code : '50155',
    show : true,    
    text : '这个是50155报错',
    callback : () =>{
      alert('这个是50155报错')
    }
  },
] 
