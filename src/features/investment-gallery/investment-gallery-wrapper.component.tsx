import './investment-gallery-wrapper.css';
import { InvestmentGalleryItem } from './investment-gallery-item.component';
import lignaImage from '../../images/Ligna1920.jpeg';
import myGizmoImage from '../../images/Mygizmo1920w.jpeg';
import solarBoraImage from '../../images/Solarbora1920w.jpeg';

export const InvestmentGalleryWrapper = (props: any) => {

    return(
        <div style={{padding:"30px"}}>
            <div style={{fontSize:"20px", color:'black'}}>INVESTERINGAR</div>
            <div style={{}} className='investementItemList'>
                <InvestmentGalleryItem title='Ligna' description='Batterigrej' image={lignaImage}/>
                <InvestmentGalleryItem title='MyGizmo' description='Byggsvängen' image={myGizmoImage}/>
                <InvestmentGalleryItem title='SolarBora' description='Byggsvängen' image={solarBoraImage}/>
            </div>
        </div>
    )
} 
