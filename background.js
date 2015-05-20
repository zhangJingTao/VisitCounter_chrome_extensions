chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab) {
	if(tab.status=="complete"&&tab.url){
		var url = tab.url
		var title = tab.title
		if(url){
			var token = localStorage.getItem("token")
			var url = "http://v2.onlysleep.net/chrome/saveData"
			$.post(url,
			{
				url:tab.url,
				title:tab.title,
				token:token
			},
			function(result){
				
			});
		}
	}
}); 