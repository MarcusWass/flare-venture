import whiteFlameLogo from '../../images/Flame-white-35x35.png';
import linkedInLogo from '../../images/LI-Bug.svg.original.svg';
import facebookLogo from '../../images/f_logo_RGB-Blue_58.png';

export const FooterInfo = () => {

    return (
        <div style={{background:'black', display:"flex", flexDirection:"column", paddingTop: "60px", paddingBottom:"20px", justifyContent:"end"}}>
            <div>
                <img style={{ marginRight:"5px", width:"40px"}} src={linkedInLogo} className="" alt="LinkedIn" />
                <img style={{ marginLeft:"5px", width:"35px"}} src={facebookLogo} className="" alt="Facebook" />
            </div>
            
            <div style={{display:"flex", justifyContent:"center", paddingTop:"10px"}}>
                <div style={{display:'flex', justifyItems:"center"}}>
                    <img style={{ marginRight:"5px"}} src={whiteFlameLogo} className="" alt="logo" />
                    <div style={{color:'white', fontSize:"16px", justifyContent:"end", display:'flex', flexDirection:"column"}}>© Flare Consulting group AB 2022</div>
                </div>
            </div>
        </div>
    )
}