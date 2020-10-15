import React from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AddService = () => {
    return (
        <div className="row">
            <Sidebar></Sidebar>
            <div style={{ height: '100vh', width: '80%', background: '#F4F7FC' }}>


                <h2 className="pt-5 ml-5" >Add Service</h2>

                <form action="" className="customFormStyle">


                    <div className="bg-white " style={{ width: '800px' }}>
                        <div className="form-group">
                            <div class="form-row">
                                <div class="col">
                                    <label htmlFor="">Service Title</label>
                                    <input type="text" className="form-control form-control-lg" placeholder="Enter title" />
                                </div>
                                
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Description</label>
                            <textarea name="" className="form-control" id="" cols="30" rows="6" placeholder="Enter Description"></textarea>
                        </div>

                        <div className="row d-flex justify-content-end">
                            <button type="submit" class="btn btn-success" >Submit</button>
                        </div>

                    </div>

                </form>
                </div>
        </div>
    );
};

export default AddService;