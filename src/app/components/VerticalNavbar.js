import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import DashboardIcon from 'material-ui/svg-icons/action/dashboard';
import ReportsIcon from 'material-ui/svg-icons/action/assessment';
import EventsIcon from 'material-ui/svg-icons/editor/insert-invitation';
import JobsIcon from 'material-ui/svg-icons/action/work';
import CompaniesIcon from 'material-ui/svg-icons/social/location-city';
import RequestsIcon from 'material-ui/svg-icons/communication/chat';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import ImageWithOverlay from './ImageWithOverlay';
import CTMenuItem from './CTMenuItem';

class VerticalNavbar extends Component{
	constructor(props, context){
		super(props, context);

		this.state = {
			activeTab: 1,
			open: false,
		}
	}

	isActiveTab(key){
		return this.state.activeTab == key;
	}
	componentWillMount(){
		if(window.innerWidth > 767)
			this.setState({open: true});
		if(this.props.setState && this.props.activeTab != null)
			this.setState({activeTab: this.props.activeTab});
	}

	toggleDrawer(event){
		let btn = this.getParent(event.target, '.btn-toggle');
		let state = !this.state.open;
		this.setState({open: state});
		if(this.state.open == false)
			btn.style.zIndex = 3;
		else
			btn.style.zIndex = 5;
	}

	getParent(el, selector){
		while ((el = el.parentElement) && !((el.matches || el.matchesSelector).call(el,selector)));
    	return el;
	}

	render(){
		return(
			<div>
				<RaisedButton
					label=""
					icon={<MenuIcon />} 
					className="btn-toggle"
					onTouchTap={(e) => this.toggleDrawer(e)}/>
				<Drawer open={this.state.open} className="navbar" containerClassName="navbar-wrapper">
					<div className="menu-toggle">
						<div className="menu">
							<RaisedButton
								label=""
								icon={<CloseIcon />} 
								className="btn-toggle btn-toggle-close"
								onTouchTap={(e) => this.toggleDrawer(e)}/>
							<ImageWithOverlay 
								src="https://pbs.twimg.com/profile_images/60951831/Blue_400x400.gif"
								wrapperClasses="js-school-logo-target hover-wrapper is-hoverable-logo top"
								innerClasses="overlay-wrapper animate-top js-school-logo-target"
								logoClasses="js-school-logo"
								overlayIcon={<SettingsIcon className="icon-small icon-overlay"/>}
								overlayText="School"
								onLoadOverlay={document.getElementsByClassName('js-school-logo-target')}
								onLoadImage={document.getElementsByClassName('js-school-logo')}
								onLoadDirection="top"
								setBanner={true}
							/>
							<CTMenuItem icon={<DashboardIcon />} text="Dashboard" key="1" isActive={this.isActiveTab(1)} path="/"/>
							<CTMenuItem icon={<ReportsIcon />} text="Reports" key="2" isActive={this.isActiveTab(2)} path="reports"/>
							<CTMenuItem icon={<EventsIcon />} text="Events" key="3" isActive={this.isActiveTab(3)} path="events"/>
							<CTMenuItem icon={<JobsIcon />} text="Jobs" key="4" isActive={this.isActiveTab(4)} path="jobs"/>
							<CTMenuItem icon={<CompaniesIcon />} text="Companies" key="5" isActive={this.isActiveTab(5)} path="companies"/>
							<CTMenuItem icon={<RequestsIcon />} text="Requests" key="6" isActive={this.isActiveTab(6)} path="requests"/>
							<ImageWithOverlay 
								src="https://www.filepicker.io/api/file/l1K7rCntQeuyQXHpwlhr"
								wrapperClasses="overlay-wrapper navbar-avatar-wrapper js-avatar-target hover-wrapper is-hoverable-logo bottom"
								innerClasses="overlay-wrapper animate-bottom js-avatar-target"
								logoClasses="avatar js-avatar"
								overlayIcon={<SettingsIcon className="icon-small icon-overlay"/>}
								overlayText="Profile"
								onLoadOverlay={document.getElementsByClassName('js-avatar-target')}
								onLoadImage={document.getElementsByClassName('js-avatar')}
								onLoadDirection="bottom"
								setBanner={false}
							/>
						</div>
					</div>
				</Drawer>
			</div>	
		);
	}
}

export default VerticalNavbar;