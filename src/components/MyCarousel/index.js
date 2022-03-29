import React from 'react'
import 'antd/dist/antd.css'
import {MyCarouselWarpper} from './style'
import { Carousel } from 'antd'
export default function MyCarousel() {
    return (
        <MyCarouselWarpper>
            <Carousel autoplay>
                <div>
                <div className='content'>
                    <h3 className='MyCarouselplay'>1</h3>
                    <h3 className='MyCarouselplay'>1</h3>
                </div>
                </div>
                <div>
                <div className='content' >
                    <h3 className='MyCarouselplay'>2</h3>
                    <h3 className='MyCarouselplay'>2</h3>
                </div>
                </div>
                <div>
                <div className='content' >
                    <h3 className='MyCarouselplay'>3</h3>
                    <h3 className='MyCarouselplay'>3</h3>
                </div>
                </div>
                <div>
                <div className='content' >
                    <h3 className='MyCarouselplay'>4</h3>
                    <h3 className='MyCarouselplay'>4</h3>
                </div>
                </div>
            </Carousel>
        </MyCarouselWarpper>
    )
}
