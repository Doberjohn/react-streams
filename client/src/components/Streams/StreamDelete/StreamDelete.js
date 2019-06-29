import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Modal from '../../Modal/Modal';
import history from '../../../history';
import { fetchStream, deleteStream } from '../../../actions';

class StreamDelete extends Component {
    componentDidMount = () => {
        this.props.fetchStream(this.props.match.params.id);
    }

    deleteStream = () => {
        this.props.deleteStream(this.props.stream.id);
    }

    renderActions() {
        return (
            // Fragment can also be written with empty tags like <>...</>
            <Fragment>
                <button onClick={this.deleteStream} className="ui red button">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </Fragment>
        );
    }

    renderContent() {
        if (!this.props.stream) {
            return 'Are you sure you want to delete stream?';
        } else {
            return `Are you sure you want to delete stream with title: ${this.props.stream.title}?`
        }
    }

    render() {
        return (
            <Modal
                title="Delete stream"
                message={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')} />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);