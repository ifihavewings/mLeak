import axios from 'axios'
import { Loading, MessageBox } from 'element-ui';
import responseCode from '@/utils/responseCode'
//定义一个默认的参数
let defaultParam = {
  url: null, //路径
  data: null, //数据json格式
  // isResolve: true //是否统一处理请求响应，默认处理，false自己处理
};
let popMsg = (txt,callback)=> {
  MessageBox.alert(txt, '提示', {
    confirmButtonText: '确定',
    callback: null || callback
  })
}
//弹框内容
let dialogContent = "";
const service = {
  doPost: function (params) {
    console.log(params)
    //popper.js---提示框  注册一个提示框
    // if (undefined !== params.data) {
    //     let xt = JSON.parse(params.data);
    //     xt.verifyCode = localStorage.getItem("verifyCode");
    //     params.data = JSON.stringify(xt);
    // }

    var temp_param = Object.assign({}, defaultParam, params);
    //过滤掉标签,防止XSS攻击,axios需要传对象
    var dataStr = JSON.parse(JSON.stringify(temp_param.data).replace(/<[^>]+>/g, ""));
    // 创建axios实例
    const axiosInstance = axios.create({
      // baseURL: tgptcfg.fispWebServer, // api的base_url
      // timeout: tgptcfg.axiostimeout, // 请求超时时间
      responseType: 'json',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json;charset=utf-8'
      },
    });
    // request拦截器 http request拦截
    // axiosInstance.interceptors.request.use(config => {
    //   // if (temp_param.isLoading) { //显示加载框
    //   //     loading = Loading.service({
    //   //         fullscreen: true,
    //   //         lock: true
    //   //     });
    //   // }
    //   console.log('dopost.config')
    //   console.log(config)
    //   // return config;
    // }, error => {
    //   //处理请求错误
    //   return Promise.reject(error);
    // })

    
    // const TgErrorTips = '无投管人代码，请联系管理员';
    // respone拦截器
    axiosInstance.interceptors.response.use(
      response => {
        const data = response.data;
        // 1.用户未登录
        if (null === data || undefined === data) {
          popMsg('您未登录，请登录');
          return Promise.reject(new Error('用户未登录'));
        }
        // 2.返回"00000",直接解析结果 ， 配置到responseCode 
        // if (data.respCode && data.respCode == "00000") {
        //   return response;
        // }
        // if (response.config.url.lastIndexOf("api/download") > 0) {
        //     return response;
        // }

        // 用户未登录
        // if (null == data || '50102' == data.respCode) {
        //   window.location.href = tgptcfg.loginUrl;
        //   return;
        // }


        // 3.data.respCode !== "00000" 的情况，从responseCode 中查找
        // 3.1不需要弹窗，直接返回response
        // 3.2 需要弹窗，给$post发送报错原因
        if (data.respCode) {
          const rcLength = responseCode.length
          // debugger
          for (let i = 0; i < rcLength; i++) {
            if (responseCode[i]['code'] === data.respCode) {
              // 不需要显示弹框
              if (!responseCode[i]['show']) {
                return response;
              }
              // 按钮要分取消/确定
              MessageBox.alert(responseCode[i]['text'], responseCode[i]['title'], {
                confirmButtonText: '确定',
                callback: null || responseCode[i]['callback']
              })
              // $post().catch 处理该错误
              return Promise.reject(new Error(responseCode[i]['text']));
              // return Promise.reject(response);
            }
          }
        }

        // 4. 在 responseCode 中未查找到 data.respCode,根据data.respDesc去判断
        let dialogContent = ''
        if (null === data.respDesc || '' === data.respDesc || undefined === data.respDesc) {
          dialogContent = "系统繁忙，请您稍后再试"
          popMsg(dialogContent);
          return Promise.reject(new Error(dialogContent ));
        }
        if (typeof (data.respDesc) == "object") {
          for (let key in data.respDesc) {
            dialogContent += data.respDesc[key].toString() + "\n";
          }
        } else {
          dialogContent = data.respDesc.toString();
        }
        popMsg(dialogContent);
        return Promise.reject(new Error(dialogContent ));


        // 用户登录，session失效
        // if ('50150' == data.respCode) {
        //   MessageBox.alert(TgErrorTips, '提示', {
        //     confirmButtonText: '确定',
        //     callback: action => {
        //       window.location.href = tgptcfg.logoutUrl;
        //     }
        //   })
        //   return;
        // }

        //用户已经被冻结或者注销，请联系管理人员
        // if ('50167' == data.respCode) {
        //   MessageBox.alert(data.respDesc, '提示', {
        //     confirmButtonText: '确定',
        //     callback: action => {
        //       window.location.href = tgptcfg.umsMenusListPage;
        //     }
        //   })
        //   return
        // }


        // messageBox(loading); //数据请求完成后，去掉loading框

        // //              //统一处理弹窗
        // if (data.respCode !== "00000") {
        //   // var dialogContent = ""; //弹框内容
        //   //根据不同的回响，显示不同的内容
        //   if (data.respCode == "50122" || data.respCode == "50123" || data.respCode == "50124" || data.respCode == "50159" || data.respCode == "50160" ||
        //     data.respCode == "50156" || data.respCode == "50157" || data.respCode == "50158") {
        //     return response;
        //   }
        //   if (data.respDesc === "" || data.respDesc === undefined) {
        //     dialogContent = "系统繁忙，请您稍后再试";
        //   } else {
        //     if (typeof (data.respDesc) == "object") {
        //       for (key in data.respDesc) {
        //         dialogContent = dialogContent + data.respDesc[key].toString() + "\n";
        //       }
        //     } else {
        //       dialogContent = data.respDesc.toString();
        //     }
        //   }
        //   MessageBox.alert(dialogContent, '提示', {
        //     confirmButtonText: '确定',
        //     callback: action => { }
        //   })
        // }

        // return Promise.reject(response);

        //给页面返回数据
        // if (data.respCode == "00000") {
        //   return response;
        // } else {
        //   return Promise.reject(response);
        // }
      },
      //错误
      // error => {
      //   messageBox(loading);
      //   //是否有错误响应
      //   //有错误响应，根据不同的状态码，进行不同的显示
      //   if (error.response) {
      //     const status = error.response.status;
      //     if (status == 401) {
      //       window.location.href = http_error_statues.portal_url;
      //     } else if (status == 403) {
      //       this.$router.push({ path: '/403' });
      //     } else if (status === 500) {
      //       // 没有权限
      //       if (error.response.data) {
      //         if ('10004' === error.response.data.respCode) {
      //           MessageBox.alert(error.response.data.respDesc, '错误', {
      //             confirmButtonText: '确定',
      //           })
      //           return;
      //         }
      //       }
      //       MessageBox.alert('网络开小差了，请稍后再试', '提示', {
      //         confirmButtonText: '确定',
      //       })
      //     } else {
      //       var dialogContText = http_error_statues[error.response.status];
      //       MessageBox.alert(dialogContText, '提示', {
      //         confirmButtonText: '确定',
      //         callback: action => { }
      //       })
      //     }
      //   }
      //   //没有错误响应
      //   else {
      //     MessageBox.alert("系统繁忙，请您稍后再试", '提示', {
      //       confirmButtonText: '确定',
      //       callback: action => { }
      //     })
      //   }
      //   return Promise.reject(error);
      // }
    )
    //返回的axios对象
    return axiosInstance.post(temp_param.url, dataStr);
  },
}
export default service