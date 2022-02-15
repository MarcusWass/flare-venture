import { Children } from "react"

export const InvestmentGalleryItemDetail = (props:any) => {

    return(
        <div style={{width:"100%", height:"100%", background:"red"}}>
            {props.children}
        </div>
    )
}