import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';

class TableModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: this.props.open,
            data: []
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            open: nextProps.open,
            data: nextProps.data
        });
     }

    onClose = () => {
        this.setState({open: false});
    }

    render() {
        const ContentStr = this.state.data.itemCalories + '卡路里，蛋白質：' + this.state.data.itemProtein ;
        return (
            <Modal 
                open={this.state.open}
                onClose={this.onClose}
                header={this.state.data.itemName}
                content= {ContentStr}
                style={{margin:'0 auto', marginTop:0, position:'relative', top:'20%'}}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        modalStatus: state.modalStatus
    };
}

export default connect(mapStateToProps)(TableModal);
