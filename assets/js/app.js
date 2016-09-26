function touAjax(type, key, url) {
	ajax: $.ajax({
		type: 'get',
//		dataType: 'jsonp',
		url: url,
		data: {
			'type': type, //类型
			'key': key //密钥
		},
		success: function(data) {
			//			alert('a');
			//转行成对象
			//			touObj = JSON.parse(data);
			console.log(data);
			//生成html调用
			//			touList(courseObj.list);
		},
		error: function(jqXHR) {
			console.log('发生错误:' + jqXHR.status);
		}

	});
}
var key = '2d6bf5ead491f6e342129dd69c9d4487',
	type = ['top', 'shehui', 'guonei', 'guoji', 'yule', 'tiyu', 'junshi', 'keji', 'caijing', 'shishang'],
	touObj = '',
	touList = '',
	url = 'http://v.juhe.cn/toutiao/index';
touAjax(type, key, url);