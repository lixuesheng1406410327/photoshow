/*
 * js是基于web浏览器的脚本语音
 * 不能独立运行(除了nodejs外)
 * 弱类型以及基于事件类型的语音
 */
//获取播放的音乐的对象
var player = document.getElementById('player');

//标准位,标识歌曲是否在播放
var isplay=false;
//根据元素的ID获取元素对象,并且绑定一个事件监听:click表示鼠标点击,function表示一个方法
document.getElementById('musicBox').addEventListener('click',function(){
	//判断歌曲是否在放
	if (isplay) {
		isplay=false;
		player.pause();
		this.title='点击播放'
		this.className='music-box';
	} else{
		isplay=true;
		player.play();
		this.title='点击静音'
		this.className='music-box play'
	}
});

//获取图片墙中的所有对象
var imgs = document.querySelectorAll('.photo-box>img');
//遍历所有的图片,并绑定点击事件
for (var i=0;i<imgs.length;i++) {
	imgs[i].addEventListener('click',function(){
	bigImg(this.src);
	})
}
//显示图片的原始大小
function bigImg(imgpath){
	//获取浏览器文档元素的高度
	var h = document.documentElement.clientHeight;
	var tp = document.documentElement.scrollTop || document.body.scrollTop;
	//生成一个模态窗口
	var dialog = document.createElement('div');
	//设置模态窗口的高度
	dialog.style.height=tp+h+'px';
	//为窗体设置class属性
	dialog.className='modal';
	
	//将窗体加入body
	document.body.appendChild(dialog);
	//禁用body的滚动条
	document.body.style.overflow='hidden';
	//加入图片
	var img = document.createElement('img');
	img.src=imgpath;
	img.className='img-item';
	//获取图片的高宽
	var imgW = img.width/2;
	var imgH = img.height/2;
	img.style.marginTop=-imgH+'px';
	img.style.marginLeft=-imgW+'px';
	dialog.appendChild(img);
	
	dialog.addEventListener('click',function(){
		document.body.removeChild(dialog);
		document.body.style.overflow="visible";
	})
	img.addEventListener('click',function(e){
		if (e && e.stopPropagation) {
			e.stopPropagation();
		} else{
			e.cancelBubble=true;
		}
	})
	
	
}


//窗体的拉伸监听
window.addEventListener('resize',function () {
	var height = document.documentElement.clientHeight;
	//获取文档
	document.querySelector('.modal');
	dialog.style.height = height+"px";
})