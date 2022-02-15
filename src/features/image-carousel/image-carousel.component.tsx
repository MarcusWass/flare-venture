import imagePitch4us from '../../images/pitch4us.jpg';
import imageEngagement from '../../images/Engagement.jpg';
import { Carousel } from 'react-bootstrap';

export const ImageCarousel = (props: any) => {

    return(
        <Carousel variant="dark" pause={false} interval={3000} >
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={imagePitch4us}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={imageEngagement}
                alt="First slide"
                />
            </Carousel.Item>
        </Carousel>
    )
} 

