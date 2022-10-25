import React, { Component } from 'react';
import axios from 'axios';


export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("http://localhost:8000/accessories/posts").then(res => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts
        });
        console.log(this.state.posts)
    }
  })
  }
  
  onDelete = (id) => {
    
    axios.delete(`http://localhost:8000/accessories/post/delete/${id}`).then((res) => {
      alert("Deleted Successfully")
      this.retrievePosts();
    })
  }

  filterData(posts, searchKey) {
    
    const result = posts.filter((post) =>
      post.topic.includes(searchKey) ||
      post.description.includes(searchKey) ||
      //if checked with lower case
      post.topic.toLowerCase().includes(searchKey) ||
      post.description.toLowerCase().includes(searchKey) 
    )

    this.setState({posts:result})
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8000/accessories/posts").then(res => {
      if (res.data.success) {

        this.filterData(res.data.existingPosts,searchKey)

    }
  })
  }

  render() {
    return (
      <div className="container py-5">
        <div className='row justify-content-between'>
          <div class="col-7">
              <div className='col-lg-3 mt-2 mb-2 mx-lg-5 row'>
                <input className='form-control mx-lg-5'
                  type='search'
                  placeholder="Search"
                  name="searchQuery"
                  onChange={this.handleSearchArea}/>
              
              </div>
          </div>
          <div class="col-4">
              <div className=" text-end text-black mb-5">
                  <button className="btn btn-success"><a href="/dashboard/accessories/add" style={{ textDecoration: 'none', color: 'white' }}>Add New Item</a></button>
              </div>
          </div>

        </div>



        
    <div className="row text-center text-black mb-5">
        <div className="col-lg-7 mx-auto">
            <h1 className="display-4">Accessories</h1>
        </div>
    </div>
    <div className="row">
        <div className="col-lg-8 mx-auto my-lg-5">
            <ul className="list-group shadow">
            
            {this.state.posts.map((posts, index) => (
                <li className="list-group-item">
                    <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                        <div className="media-body order-2 order-lg-1">
                            <h5 className="mt-0 font-weight-bold mb-2">
                                <a href={`/dashboard/accessories/post/${posts._id}`} style= {{ textDecoration: 'none' }}>
                                    {posts.topic}
                                </a>
                            </h5>
                            
                            <p className="font-italic text-muted mb-0 small">{posts.description}</p>
                            
                            <div className="d-flex align-items-center justify-content-between mt-1">
                                <h6 className="font-weight-bold my-2">Rs. {posts.price}.00</h6>
                            </div>
                        </div>
                        
                        <img src={posts.image1} alt="Generic placeholder image" width="200" class="ml-lg-5 order-1 order-lg-2"/>
                        <img src={posts.image2} alt="Generic placeholder image" width="200" class="ml-lg-5 order-1 order-lg-2"/>
                    </div>
                    
                    <a className="btn btn-warning" href={`/dashboard/accessories/edit/${posts._id}`}>
                        <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>
                    &nbsp;
                    <a className="btn btn-danger" href="#" onClick={()=> this.onDelete(posts._id)}>
                        <i className="fas fa-trash-alt"></i>&nbsp;Delete
                    </a>
                </li>
            ))}
            </ul>
        </div>
    </div>
    
    

        
      </div>
    );
  }
}