$(document).ready(function(){
	var initFlag = true
	if(localStorage.getItem("email")){
		initFlag = false
		$("#email").attr("disabled","disabled");
		$("#email").val(localStorage.getItem("email"));
	}
	if(initFlag){
		$("#saveBtn").bind("click",function(){
		var email = $("#email").val();
		var url = "http://v2.onlysleep.net/chrome/chromeReg";
		$.ajax({
             type: "GET",
             url: url,
             data: {email:email,source:'v1'},
             dataType: "json",
             success: function(data){
                if(data.result==1){
					localStorage.setItem("email",email);
					localStorage.setItem("token",data.token);
					$("#email").attr("disabled","disabled");
					alert("配置成功！");
				}else{
					alert("注册失败/(ㄒoㄒ)/~~")
				}
            }
         });
	})
	}
})