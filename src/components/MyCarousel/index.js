import React from 'react'
import 'antd/dist/antd.css'
import { MyCarouselWarpper } from './style'
import { Carousel } from 'antd'
export default function MyCarousel(props) {
    let temp_item
    return (
        <MyCarouselWarpper>
            <Carousel autoplay>
                {
                    props.info.slice(0, 8).map((item, index) => {

                        if (index % 2 === 0) {
                            temp_item = item
                            return ""
                        } else {

                            return (<div key={item.targetId} >
                                       <div className='content'>
                                            <img className='MyCarouselplay' alt='正在加载' src={temp_item.imageUrl} />
                                            <img className='MyCarouselplay' alt='正在加载' src={item.imageUrl} />
                                       </div>
                                    </div>)
                        }
                    })
                }

            </Carousel>
        </MyCarouselWarpper>
    )
}
