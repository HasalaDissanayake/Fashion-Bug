import React, { Component } from 'react';
import axios from 'axios';

class PostDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            post: {}
        };
    }

    componentDidMount() {
        
        // const id = this.props.match.params.id; not working in react-router-dom v5 onwards
        const id = window.location.pathname.substring(28);

        axios.get(`http://localhost:8000/accessories/post/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    post: res.data.post
                });
            }
        });

        console.log(this.state.post);
    }


    render() {

        const { topic, description, price } = this.state.post;
        return (
            <div style={{marginTop:'20px'}}>
                <h4>{topic}</h4>
                <hr />

                <dl className='row'>
                    <dt className='col-sm-3'>Description</dt>
                    <dd className='col-sm-9'>{description}</dd>

                    <dt className='col-sm-3'>Price</dt>
                    <dd className='col-sm-9'>{price}</dd>                    
                </dl>

            </div>
        );
    }
}

export default PostDetails;