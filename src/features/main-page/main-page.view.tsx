import { useState } from "react"
import { ImageCarousel } from "../image-carousel/image-carousel.component"
import { InvestmentGalleryWrapper } from "../investment-gallery/investment-gallery-wrapper.component"
import { TopNavigation } from "../top-navigation/top-navigation.component"
import { InvestmentGalleryItemDetail } from "../investment-gallery/investment-gallery.item-detail.component"
import { InvestementTextAreaWrapper } from "../investment-text-area-wrapper/investment-text-area-wrapper.component"
import {FooterInfo} from '../footer-info/footer-info.component';

export const MainPage = (props: any) => {

    const [showDetails, setShowDetails] = useState(false);

    return(
    <div style={{display:"flex", flexDirection:"column", position:"relative"}}>
    
        <div style={{position:"absolute", zIndex:10, width:"100%"}}><TopNavigation/></div>
        
        <div style={{}}><ImageCarousel/></div>
        <div style={{}}><InvestmentGalleryWrapper/></div>
        {
                showDetails ? 
                <div style={{position:'absolute', top:"0px", width:"100%", height:"100%", display:"flex", flexDirection:"column", alignItems:'center'}}>
                    <InvestmentGalleryItemDetail style={{maxWidth:"50%"}}>
                        <div>HELLO</div>
                    </InvestmentGalleryItemDetail>
                </div>
                :
                ""
            }
        <div style={{marginTop:'40px'}}><InvestementTextAreaWrapper/></div>

        <div style={{marginTop:'80px'}}><FooterInfo/></div>
        
    </div>)
} 