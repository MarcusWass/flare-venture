export const InvestementTextArea = ({textColor, headline, ingress, description} : {textColor:string, headline: string, ingress: string, description: string}) => {
    
    return (
        <div style={{padding:'20px'}}>
            <div style={{color: textColor, fontSize:'20px'}} >{headline}</div>
            <div style={{padding:'10px', color: textColor, fontStyle: 'italic',  fontSize:'18px'}} >{ingress}</div>
            <div style={{direction:'ltr', textAlign:"justify", color: textColor, fontSize:'12px'}} >{description}</div>
        </div>
    )
} 