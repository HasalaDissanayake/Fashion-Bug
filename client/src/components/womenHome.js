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
    axios.get("http://localhost:8000/women/posts").then(res => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts
        });

        console.log(this.state.posts)
    }
  })
  }
  
  onDelete = (id) => {
    
    axios.delete(`http://localhost:8000/women/post/delete/${id}`).then((res) => {
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

    axios.get("http://localhost:8000/women/posts").then(res => {
      if (res.data.success) {

        this.filterData(res.data.existingPosts,searchKey)

    }
  })
  }

  render() {
    return (
      <div className="container my-3">

        <div className='row'>
          <div className='col-lg-9 mt-2 mb-2'>
            <h4>All Items</h4>
          </div>
          <div className='col-lg-3 mt-2 mb-2'>
            <input className='form-control'
              type='search'
              placeholder="Search"
              name="searchQuery"
              onChange={this.handleSearchArea}/>
          </div>
        </div>



        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Item</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              {/* for edit delete */}
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
            {this.state.posts.map((posts, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <a href={`/dashboard/women/post/${posts._id}`} style= {{ textDecoration: 'none' }}>
                    {posts.topic}
                  </a>
                </td>
                <td>{posts.description}</td>
                <td>{posts.price}</td>
                <td>
                  <a className="btn btn-warning" href={`/dashboard/women/edit/${posts._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={()=> this.onDelete(posts._id)}>
                    <i className="fas fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
                
            ))}
          </tbody>


        </table>

        <button className="btn btn-success"><a href="/dashboard/women/add" style={{ textDecoration: 'none', color: 'white' }}>Add New Item</a></button>
        
      </div>
    );
  }
}