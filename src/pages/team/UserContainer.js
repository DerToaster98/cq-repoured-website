import './usercontainer.css';

import { Component } from 'react';

export default class UserContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loadingImage: true,
            imageSrc: this.props.imageSrc,
            textContainer: this.props.userinfo,
            userLinks: this.props.userlinks
        }
    }

    render() {
        return (
            <div>
                <div className='user-avatar'>

                </div>
                <div className='user-info'>
                    {this.state.textContainer}
                </div>
                <div className='user-links'>
                    {this.state.userLinks}
                </div>
            </div>
        );
    }

}