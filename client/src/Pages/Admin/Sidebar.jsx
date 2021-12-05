import axios from 'axios';
import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';


class Sidebar extends Component {

    signout() {
        axios.put('/api/signout')
            .then(res => {
                localStorage.clear()
                window.location.pathname = "/login"
            })
            .catch(e => console.log(e))
    }

    render() {
        return (
            <div className="bg-dark vh-100">
                <span className="d-flex align-items-center mb-3 p-2 border-bottom">
                    <span className="fs-5 fw-bold btn col-12 text-white">
                        <i className="fas fa-link"></i> PostIT
                    </span>
                </span>

                <ul className="list-unstyled ps-0 ms-4">
                    <li className="mb-1">
                        <Link className="btn align-items-center rounded text-white" to="/dashboard">
                            <i className="fas fa-tachometer-alt"></i> &nbsp;
                            Dashboard
                        </Link>
                    </li>
                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed text-white " data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                            <i className="fas fa-users"></i> &nbsp;
                            Users
                        </button>
                        <div className="collapse ms-5" id="home-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1">
                                {/* <li><Link to="#" className="link-dark rounded text-white">Add new</Link></li> */}
                                <li><Link to="/users" className="link-dark rounded text-white text-decoration-none">List</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed text-white" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                            <i className="fas fa-copy"></i> &nbsp;
                            Posts
                        </button>
                        <div className="collapse ms-5" id="dashboard-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1">
                                {/* <li><Link to="#" className="link-dark rounded text-white">Add new</Link></li> */}
                                <li><Link to="/posts" className="link-dark rounded text-white text-decoration-none">List</Link></li>
                            </ul>
                        </div>
                    </li>
                    
                    <li className="mb-1">
                        <button className="btn align-items-center rounded text-white">
                            <i className="fas fa-file-alt"></i> &nbsp;
                            Reports
                        </button>
                    </li>
                    <li className="border-top my-3"></li>
                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed text-white " data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                            <i className="fas fa-user-alt"></i> &nbsp;
                            Account
                        </button>
                        <div className="collapse ms-5" id="account-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1">
                                <li><span onClick={this.signout} className="link-dark rounded text-danger text-decoration-none" style={{cursor: 'pointer'}}>Sign out</span></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Sidebar;