import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const PostReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data =>{
        fetch('https://shielded-springs-71314.herokuapp.com/addReview', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('Review post successfully.')
                }
            })
    }
    return (
        <div className="row">

        <Sidebar></Sidebar>


        <div style={{ height: '100vh', width: '80%', background: '#F4F7FC' }}>


            <h2 className="pt-5 ml-5" >Review</h2>

            <form action="" className="customFormStyle" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input type="text" className="form-control form-control-lg" placeholder="Your name" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control form-control-lg" placeholder="Company’s name, Designation" />
                </div>

                <div className="form-group">
                    <textarea name="" className="form-control" id="" cols="30" rows="6" placeholder="Description"></textarea>
                </div>

                <button type="submit" class="btn btn-dark" >Submit</button>

            </form>
        </div>
    </div>

    );
};

export default PostReview;