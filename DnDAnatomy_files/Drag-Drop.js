
function Menu(quizIndex, $quizInstance){
	this.$quizInstance = $quizInstance;
	this.$quizIndex = quizIndex;

	if ($('html').is('.lt-ie6, .lt-ie7, .lt-ie8, .lt-ie9')) {//IF IE THEN NO NICE BG FOR YOUUUUuuu..
		this.$quizInstance.html("<div class='version_warning'><p>Your browser does not support HTML5. To view the media on this page, you need to update your browser to the latest version or download a HTML5 friendly browser. <a href='http://www.mozilla.org/en-US/'>Download: Firefox</a> // <a href='http://www.google.com/intl/en_uk/chrome/browser/'>Download: Chrome</a></div>")
	}else{
		this.menu = [];
		this.init();
	}
}