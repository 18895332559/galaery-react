require('normalize.css/normalize.css');
require('styles/App.css');


import React from 'react';
// 引入json文件
var imageDatas = require('../data/imageurl.json') ;

// let yeomanImage = require('../images/yeoman.png');
// 拼接图片的真是路径(通过闭包调用)
imageDatas=(function getImageURL(imageDataArr){
	for(var i = 0 ; i < imageDataArr.length ; i++ ){
		var singleImageData = imageDatas[i] ;
		singleImageData.image.imageURL = require('../images/' + singleImageData.fileName)
		singleDataArr[i] = singleImageData ;
	}
	return imageDataArr ;
})(imageDatas) ;
// 调用函数
// imageDatas = getImageURL(imageDatas) ;


class AppComponent extends React.Component {
  render() {
    return (
     	<section className='stage'>
     		<section className='img-sec'>

     		</section>
     		<nav className='controller-nav'></nav>
     	</section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
