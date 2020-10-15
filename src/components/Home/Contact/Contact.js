import React from 'react';

 
const Contact = () => {
    return (
        <section style={{ height: '600px', background: '#FBD062' }} className=" row p-2">

                <div className="col-md-4 offset-md-1  mt-5">
                    <h3>Let us handle your <br/> project, professionally.</h3>
                    <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                </div>
                <div className="col-md-6 mt-5">
                   <form action="">
                        <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your email address " />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your name / company’s name " />
                            </div>
                            <div className="form-group">
                                <textarea  style={{height:'200px'}} name="" className="form-control" id="" cols="30" rows="10" placeholder="Your message "></textarea>
                            </div>
                            <div className="form-group">
                                <button type="button" className="btn btn-dark"> Submit </button>
                            </div>
                   </form>
                </div>
                
        </section>
    );
};

export default Contact;