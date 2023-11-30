import React from 'react'
import './WorkExp.css'

export const WorkExp = () => {
    return (

        <section className="row timeline">
            <div className="col-7">
                <div>
                    <h1>My Work</h1>
                    <time>2019-2023</time>
                    <div className="company-rignt-side">
                        <h2>My CompanyName</h2>
                        <p>Working title</p>
                        <p>A short Descript</p>
                    </div>
                    <time>2039-2023</time>
                    <div className="company-rignt-side">
                        <h1>Scientist</h1>
                        <span>Working title</span>
                        <p>A short Descript</p>
                    </div>
                </div>

            </div>
            <div className="col-5">
                <h1>Services I Provide</h1>
            </div>
        </section>

    );
};
