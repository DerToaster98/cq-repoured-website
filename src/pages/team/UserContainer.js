import './usercontainer.css';

import React, { Component } from 'react';

import { generateLazyBackgroundWithJustImagePath } from '../../Constants';

export default class UserContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loadingImage: true,
            username: this.props.username,
            imageSrc: this.props.imageSrc,
            textContainer: this.props.userinfo,
            userLinks: this.props.userlinks
        }
    }

    render() {
        return (
            <div className="team-member-container">
                <h1>{this.state.username}</h1>
                <div className='user-avatar'>
                    {generateLazyBackgroundWithJustImagePath(this.state.imageSrc)}
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