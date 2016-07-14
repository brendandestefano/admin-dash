import React, {Component, PropTypes} from 'react';

class ImageWithOverlay extends Component{
	constructor(props, context){
		super(props, context);
	}

	applyCssProperties(overlay, image, direction){
		let height = image[0].offsetHeight + 'px';
		overlay.style.height = height;
		if(!direction)
			return true;
		if(direction == 'bottom'){
			let bottom = '-'+(image[0].offsetHeight + 'px');
			overlay.style.bottom = bottom;
		}else
			overlay.style.top = '-'+image[0].height+'px';
	}

	checkOverlaySize(overlay, image, border = false, direction){
		if(!image.length || window.innerWidth < 767)
			return;
		for(let i = 0; i < overlay.length; i++){
			this.applyCssProperties(overlay[i], image, border, direction);
		}
	}

	setBannerPadding(){
		document.getElementsByClassName('header')[0].style.padding = (document.getElementsByClassName('banner')[0].offsetHeight - document.getElementsByClassName('header')[0].offsetHeight) / 2 + 'px';
	}

	onLoad(overlay, image, direction){
		this.checkOverlaySize(overlay, image, direction);
		if(this.props.setBanner){
			document.getElementsByClassName('banner')[0].style.height = document.getElementsByClassName('js-school-logo-target')[0].clientHeight+'px';
			this.setBannerPadding();
		}
	}

	componentDidMount(){
		let globalThis = this;
		window.addEventListener('resize', function() {
			globalThis.onLoad(globalThis.props.onLoadOverlay, globalThis.props.onLoadImage, globalThis.props.onLoadDirection);
			document.getElementsByClassName('banner')[0].style.height = document.getElementsByClassName('js-school-logo-target')[0].clientHeight+'px';
			globalThis.setBannerPadding();
		}, true);
	}

	render(){
		return(
			<div className={this.props.wrapperClasses}>
				<img className={this.props.logoClasses} 
					src={this.props.src} 
					onLoad={() => this.onLoad(this.props.onLoadOverlay, this.props.onLoadImage, this.props.onLoadDirection)}
				/>
				<div className={this.props.innerClasses}>
					<div className="overlay"></div>
					{this.props.overlayIcon}
					<p className="text-navbar text-overlay">{this.props.overlayText}</p>
				</div>
			</div>
		);
	}
	
}

ImageWithOverlay.propTypes = {
	src: PropTypes.string.isRequired,
	setBanner: PropTypes.bool.isRequired,
}

export default ImageWithOverlay;