import React, { Component } from 'react'
import { Label, Menu } from 'semantic-ui-react'
import { connect } from 'react-redux';

class AppbarMenu extends Component {
    state = { activeItem: 'inbox' }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name });
        this.props.dispatch({ 
            type: 'CLICK',
            pageIndex: name
        });
    }

    render() {
        const { activeItem } = this.state

        return (
        <Menu size='large' vertical style={{padding:0}}>
            <Menu.Item name='inbox' active={activeItem === 'inbox'} onClick={this.handleItemClick}>
                <Label color='orange'>2</Label>
                Inbox
            </Menu.Item>

            <Menu.Item name='spam' active={activeItem === 'spam'} onClick={this.handleItemClick}>
                <Label color='teal'>4</Label>
                Spam
            </Menu.Item>

            <Menu.Item name='updates' active={activeItem === 'updates'} onClick={this.handleItemClick}>
                <Label color='blue'>6</Label>
                Updates
            </Menu.Item>
        </Menu>
        )
    }
}

function mapStateToProps(state) {
    return {
        pageIndex: state.pageIndex
    };
}

export default connect(mapStateToProps)(AppbarMenu);