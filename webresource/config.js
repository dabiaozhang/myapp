require.config({
	baseUrl: './webresource',

    paths:{
		'index': './views/index',
		'text': './3rd/require.text',
		//'proload': 'js/proload',
        'iconfontCss':'./style/iconfont.css',
        'evlCss':'./style/evlCss.css',
        'vue': './js/vue.min',
        'vueResource': './js/vue-resource.min',
        'tpl_index': 'templates/index.html',
    }
});



require(['index'], 
	function(index) {
});
