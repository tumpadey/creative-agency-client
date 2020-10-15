import React from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const Admin = () => {
    return (
        <div className="row">

        <Sidebar></Sidebar>


        <div style={{ height: '100vh', width: '80%', background: '#F4F7FC' }}>


            <h2 className="pt-5 ml-5" >Review</h2>

            <div className="p-5">
                <div className="bg-white p-5">
                    <table className="table table-hover ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email ID</th>
                                <th scope="col">Service</th>
                                <th scope="col">Project Details</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td><button className="btn btn-danger">Delete</button></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td><button className="btn btn-danger">Delete</button></td>

                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colSpan="2">Larry the Bird</td>
                                <td>@twitter</td>
                                <td><button className="btn btn-danger">Delete</button></td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Admin;