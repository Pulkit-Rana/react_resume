import React from 'react'
import './Skills.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ProgressBar } from '../ProgressBar/ProgressBar';

const Skills = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,


        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
    };
    return (
        <section className='row skills'>
            <div className='col-7'>
                <div className='skills-text'>
                    <h1>Skills</h1>
                    <p>lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum</p>
                </div>
                <Carousel responsive={responsive} infinite={true} className='skill-slider' >

                    <div className='item'>
                        <ProgressBar targetProgress={65} />
                    </div>
                    <div className='item'>
                        <ProgressBar targetProgress={75} />
                    </div>
                    <div className='item'>
                        <ProgressBar targetProgress={80} />
                    </div>
                    <div className='item'>
                        <ProgressBar targetProgress={85} />
                    </div>

                    <div className='item'>
                        <ProgressBar targetProgress={99} />
                    </div>
                    <div className='item'>
                        <ProgressBar targetProgress={99} />
                    </div>
                </Carousel>

                <Carousel responsive={responsive}
                    infinite={true}
                    showDots={true}
                    autoPlay={true}
                    autoPlaySpeed='1230'
                    removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                    itemClass="carousel-item-padding-40-px"
                    dotListClass="custom-dot-list-style"
                    focusOnSelect={true}
                    className='skill-slider'
                >

                    <div className='item'>
                        <ProgressBar targetProgress={65} />
                    </div>
                    <div className='item'>
                        <ProgressBar targetProgress={75} />
                    </div>
                    <div className='item'>
                        <ProgressBar targetProgress={80} />
                    </div>
                    <div className='item'>
                        <ProgressBar targetProgress={85} />
                    </div>
                    <div className='item'>
                        <ProgressBar targetProgress={99} />
                    </div>
                    <div className='item'>
                        <ProgressBar targetProgress={99} />
                    </div>
                </Carousel >
            </div>
            <div className='col-3'>
                <h1>Tools I use</h1>
            </div>
        </section>
    )
}

export default Skills
