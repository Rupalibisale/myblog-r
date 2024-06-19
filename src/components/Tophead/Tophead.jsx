import React from 'react';

function Tophead(){
    return(
        <>
       <section className="bg-success d-flex justify-content-between text-white px-15 pt-3">
        <p>
            Welcome Guest &nbsp;
            <a href="javascript:void()" className="text-info">Login</a> &nbsp;
            <a href="javascript:void()" className="text-info">SignUp</a>
        </p>
        <p>
            Stay Updated: &nbsp;
            <a href="javascript:void()" className="text-info">Subscribe Via RSS</a> &nbsp;
            <a href="javascript:void()" className="text-info">Email Update</a>
        </p>
       </section>
        </>
    )
}
export default Tophead;