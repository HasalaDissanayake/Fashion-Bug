import React, { Component } from 'react';
import axios from 'axios';

class EditPost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            topic: "",
            description: "",
            price:"",
            image1: "",
            image2: ""
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
        //still backend URL is http://localhost:8000/men/post/${id}
        const id = window.location.pathname.substring(20);

        const { topic, description, price, image1, image2 } = this.state;

        const data = {
            topic: topic,
            description: description,
            price: price,
            image1: image1,
            image2: image2
        }

        console.log(data);

        axios.put(`http://localhost:8000/men/post/update/${id}`, data).then((res) => {
            if (res.data.success) {
                alert("Post Update Successfully")
                this.setState(
                    {
                        topic: "",
                        description: "",
                        price:"",
                        image1: "",
                        image2: ""
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
                    price:res.data.post.price,
                    image1: res.data.post.image1,
                    image2: res.data.post.image2
                });
            }
        });

        console.log(this.state.post);
    }


    render() {
        return (
            <div class="container mt-5 mb-5 d-flex justify-content-center" >
                <style>{'body{background-color:#FFEBEE}.card{width:400px;background-color:#fff;border:none;border-radius: 12px}label.radio{cursor: pointer;width: 100%}label.radio input{position: absolute;top: 0;left: 0;visibility: hidden;pointer-events: none}label.radio span{padding: 7px 14px;border: 2px solid #eee;display: inline-block;color: #039be5;border-radius: 10px;width: 100%;height: 48px;line-height: 27px}label.radio input:checked+span{border-color: #039BE5;background-color: #81D4FA;color: #fff;border-radius: 9px;height: 48px;line-height: 27px}.form-control{margin-top: 10px;height: 48px;border: 2px solid #eee;border-radius: 10px}.form-control:focus{box-shadow: none;border: 2px solid #039BE5}.agree-text{font-size: 12px}.terms{font-size: 12px;text-decoration: none;color: #039BE5}.confirm-button{height: 50px;border-radius: 10px}'}</style>

            <div class="card px-1 py-4">
            
            <div class="card-body">
                <h1 class='h3 mb-3 font-weight-normal'>Edit Item</h1>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="form-group">
                            <input type='text'
                            class='form-control'
                            name='topic'
                            placeholder='Enter Topic'
                            value={this.state.topic}
                            onChange={this.handleInputChange}/> 
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="form-group">
                            <div class="input-group">
                                <input type='text'
                                class='form-control'
                                name='description'
                                placeholder='Enter Description'
                                value={this.state.description}
                                onChange={this.handleInputChange}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="form-group">
                            <div class="input-group"> 
                                <input type='text'
                                class='form-control'
                                name='price'
                                placeholder='Enter Price'
                                value={this.state.price}
                                onChange={this.handleInputChange}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="form-group">
                            <div class="input-group"> 
                                <input type='text'
                                class='form-control'
                                name='image1'
                                placeholder='Enter Image 1'
                                value={this.state.image1}
                                onChange={this.handleInputChange}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="form-group">
                            <div class="input-group"> 
                                <input type='text'
                                class='form-control'
                                name='image2'
                                placeholder='Enter Image 2'
                                value={this.state.image2}
                                onChange={this.handleInputChange}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" d-flex flex-column text-center px-5 mt-3 mb-3"> </div> 
                <button class='btn btn-success' type='submit' style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                        <i class='far fa-check-square'></i>
                        &nbsp; Update
                </button>
            </div>
        </div>
    </div>
        );
    }
}
export default EditPost;