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

        const { topic, description, price, image1, image2 } = this.state.post;
        return (
            // <section style="background-color: #eee;">
            <div className="row">
            <div className="col-lg-8 mx-auto my-lg-5">
                <ul className="list-group shadow">
                    <li className="list-group-item">
                        <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                            <div className="media-body order-2 order-lg-1">
                            <h5 className="mt-0 font-weight-bold mb-2">
                                    {topic}
                            </h5>
                                <p className="font-italic text-muted mb-0 small">{description}</p>
                                
                                <div className="d-flex align-items-center justify-content-between mt-1">
                                    <h6 className="font-weight-bold my-2">Rs. {price}.00</h6>
                                </div>
                            </div>
                            
                            <img src={image1} alt="Generic placeholder image" width="200" class="ml-lg-5 order-1 order-lg-2"/>
                            <img src={image2} alt="Generic placeholder image" width="200" class="ml-lg-5 order-1 order-lg-2"/>
                        </div>
                        <div class="card-body">
                            <div class="d-flex justify-content-center align-items-center pb-2 mb-1">
                                <a href="../">
                                    <button type="button" class="btn btn-danger mr-2 mt-4">Cancel</button>
                                </a>
                                <button type="button" class="btn btn-warning ml-2 mt-4">Buy now</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        );
    }
}

export default PostDetails;