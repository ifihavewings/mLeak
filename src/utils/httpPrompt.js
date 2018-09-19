
const baseUrl = 'http://localhost:8080'; //webpack默认启动8080端口

const http_error_statues = {
//	"url" : window.appUrls.ol_fund_vote_url,
//	"web_service_url" : window.appUrls.ol_fund_vote_url,
//	"web_service_name" : "api/",
//	"portal_url": window.appUrls.ol_portal_url,
//	"web_name_loginhtml" : "index.html",
//  "sso_url":window.appUrls.passport_url,
//  "uums_login":window.appUrls.uums_login,
	"0" : "您当前网络状况不好,请稍后再试!",
	"400" : "程序请求出现语法错误。",
	"401" : "程序试图未经授权访问受密码保护的页面。应答中会包含一个WWW-Authenticate头，浏览器据此显示用户名字/密码对话框，然后在填 写合适的Authorization头后再次发出请求。",
	"403" : "资源不可用。服务器理解程序的请求，但拒绝处理它。通常由于服务器上文件或目录的权限设置导致。",
	"404" : "网络开小差了~~~请您稍后刷新~~~",
	"405" : "请求方法（GET、POST、HEAD、DELETE、PUT、TRACE等）对指定的资源不适用。（HTTP 1.1新）",
	"406" : "指定的资源已经找到，但它的MIME类型和程序在Accpet头中所指定的不兼容（HTTP 1.1新）。",
	"407" : "类似于401，表示程序必须先经过代理服务器的授权。（HTTP 1.1新）",
	"408" : "在服务器许可的等待时间内，程序一直没有发出任何请求。程序可以在以后重复同一请求。（HTTP 1.1新）",
	"409" : "请求和资源的当前状态相冲突，请求不能成功。（HTTP 1.1新）",
	"410" : "所请求的文档已经不再可用，而且服务器不知道应该重定向到哪一个地址。它和404的不同在于，返回407表示文档永久地离开了指定的位置，而 404表示由于未知的原因文档不可用。（HTTP 1.1新）",
	"411" : "服务器不能处理请求，除非程序发送一个Content-Length头。（HTTP 1.1新）",
	"412" : "请求头中指定的一些前提条件失败（HTTP 1.1新）。",
	"413" : "目标文档的大小超过服务器当前愿意处理的大小。如果服务器认为自己能够稍后再处理该请求，则应该提供一个Retry-After头（HTTP 1.1新）。",
	"414" : "请求过长（HTTP 1.1新）。",
	"416" : "服务器不能满足程序在请求中指定的Range头。（HTTP 1.1新）",
	"500" : "出错了，请您稍后再试~~~",
	"501" : "出错了，请您稍后再试~~~",
	"502" : "出错了，请您稍后再试~~~",
	"503" : "出错了，请您稍后再试~~~",
	"504" : "出错了，请您稍后再试~~~",
	"505" : "出错了，请您稍后再试~~~",
	"serviceurl" : { //自定义接口
	}
};

export default http_error_statues;

