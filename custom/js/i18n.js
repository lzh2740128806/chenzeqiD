;(function(window, document, $) {
	var tr = {
		'en_US': {
			'得分': 'SCORE',
			'最高分': 'BEST',
			'只支持jpg、jpeg、png格式的图片': 'support jpg、jpeg or png only',
			'文件太大，请选择一张稍小点的图片（小于10MB）': 'Too large picture, smaller than 10MB recommended',
			'上传': 'Upload',
			'取消': 'Cancel',
			'请在图片上拖动以剪裁': 'Drag on the image for trimming',
			'请输入标题': 'Enter a tltle please',
			'标题不能超过6个字': 'Shorter than 12 characters the title recommended',
			'请填写' : 'Plaese type the text of number ',
			'对应的文字': '',
			'文字不能超过10个字': 'Shorter than 10 characters the title recommended',
			'请上传': 'Please upload the image of number ',
			'对应的图片': '',
			'不要乱改哦': 'Don\'t be evil',
			'链接不能为空': 'Link shouldn\'t be null',
			'链接长度至少为4': 'More than four characters the link should be',
			'链接长度至多为256': 'Less than 256 characters the link should be',
			'链接不合法': 'Illegal link'
		}
	};


	var preg = window.location.href.match(/lang=([a-zA-Z_]*)/);
	var lang = "zh_Hans";
	if (preg) {
		lang = preg[1];
	} else {
		lang = "zh_Hans";
	}
	$._ = function(str) {
		if (typeof tr[lang] !== 'undefined' && typeof tr[lang][str] !== 'undefined') {
			return tr[lang][str];
		} else {
			return str;
		}
	}
	/*$(document).ready(function(){
		$("body").append('<style>.score-container:after {content: "' + $._("得分") + '";}.best-container:after {content: "' + $._("最高分") + '";}</style>');
	});*/
})(window, document, jQuery);



