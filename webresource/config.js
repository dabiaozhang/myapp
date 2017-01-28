require.config({
	baseUrl: './webresource',

    paths:{
		'index': './views/index',
		'text': './3rd/require.text',
		//'proload': 'js/proload',
        'iconfontCss':'./style/iconfont.css',
        'evlCss':'./style/evlCss.css',
        'vue': './3rd/vue.min',
        'vueResource': './3rd/vue-resource.min',
        'tpl_index': 'templates/index.html',
    }
});



require(['index'], 
	function(index) {
});
