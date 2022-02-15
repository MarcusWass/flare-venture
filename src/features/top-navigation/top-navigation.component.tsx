import logo from '../../images/Logo-black-text.png';

export const TopNavigation = (props: any) => {

    return(<div style={{display:"flex", flexDirection:"row", margin:"10px"}}>
        <img style={{maxWidth:"100px", minWidth:"50px"}} src={logo} className="" alt="logo" />
        <div style={{flexGrow:"1", alignContent:"left", justifyContent:"end", textAlign:"end", lineHeight:"100%"}}></div>
        </div>)
} 