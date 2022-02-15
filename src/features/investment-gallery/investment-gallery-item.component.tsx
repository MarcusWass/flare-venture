import { Carousel } from 'react-bootstrap';
import { useState } from 'react';
import { InvestmentGalleryItemDetail} from './investment-gallery.item-detail.component';

export const InvestmentGalleryItem = ({title, description, image}: {title: string, description:string, image:any}) => {

    const showPicture = () => {
        //setShowPopup(true);
    }
    return(
        <div style={{padding:"20px"}}>
            <div style={{}}>
                <img
                    className="d-block w-100 item"
                    src={image}
                    alt="First slide"
                    onClick={showPicture}
                    />
            </div>
        </div>
    )
} 

