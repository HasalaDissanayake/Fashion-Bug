import React, { Component } from 'react';
import axios from 'axios';

class EditPost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            topic: "",
            description: "",
            price:""
        };
    }

    //see form input change update state
    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) => {
        
        e.preventDefault();
        //still backend URL is http://localhost:8000/post/${id}
        const id = window.location.pathname.substring(20);

        const { topic, description, price } = this.state;

        const data = {
            topic: topic,
            description: description,
            price: price
        }

        console.log(data);

        axios.put(`http://localhost:8000/men/post/update/${id}`, data).then((res) => {
            if (res.data.success) {
                alert("Post Update Successfully")
                this.setState(
                    {
                        topic: "",
                        description: "",
                        price:""
                    }
                )
            }
        })
    }
    
    
    componentDidMount() {
        
        // const id = this.props.match.params.id;
        const id = window.location.pathname.substring(20);

        axios.get(`http://localhost:8000/men/post/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    topic: res.data.post.topic,
                    description: res.data.post.description,
                    price:res.data.post.price
                });
            }
        });

        console.log(this.state.post);
    }


    render() {
        return (
            <div className='col-md-8 mt-4 mx-auto'>
                <h1 className='h3 mb-3 font-weight-normal'>Edit post</h1>
                <form className='needs-validation' noValidate>
                    <div className='form-group' style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }}>Topic</label>
                        <input type='text'
                            className='form-control'
                            name='topic'
                            placeholder='Enter Topic'
                            value={this.state.topic}
                            onChange={this.handleInputChange}/>
                    </div>

                    <div className='form-group' style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }}>Description</label>
                        <input type='text'
                            className='form-control'
                            name='description'
                            placeholder='Enter Description'
                            value={this.state.description}
                            onChange={this.handleInputChange}/>
                    </div>

                    <div className='form-group' style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }}>Price</label>
                        <input type='text'
                            className='form-control'
                            name='price'
                            placeholder='Enter Price'
                            value={this.state.price}
                            onChange={this.handleInputChange}/>
                    </div>

                    <button className='btn btn-success' type='submit' style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                        <i className='far fa-check-square'></i>
                        &nbsp; Update
                    </button>
                
                </form>

            </div>
        );
    }
}
export default EditPost;