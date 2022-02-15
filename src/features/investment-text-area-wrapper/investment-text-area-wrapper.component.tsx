import './investment-text-area-wrapper.css';
import {InvestementTextArea} from './investment-text-area.component';

export const InvestementTextAreaWrapper = (props:any) => {
    
    return (
        <div className='textAreaWrapper'>
            <div style={{background:'black', paddingTop: '20px', paddingBottom: '20px'}}>
                <InvestementTextArea textColor='white' headline='PARTNERSKAP' ingress='En långsiktig och engagerad ägare' description='Vi gillar bolag med stor passion och starkt driv framåt. Vår första investering i ert bolag ser vi som ett startskott på en lång och god affärsrelation där vi bidrar med vår kompetens. Både affärsutveckling och produktutveckling är några områden vi gärna hjälper till med, allt utifrån var ert behov finns. Ibland vill vi ha en styrelsepost och i andra fall sker samarbetet via advisory boards eller i andra former.'></InvestementTextArea>
            </div>
            <div style={{background:'#474747',paddingTop: '20px', paddingBottom: '20px'}}>
                <InvestementTextArea textColor='white' headline='TEKNIK' ingress='Tekniskt djup och bredd' description='Flare Venture investerar mestadels i teknikdrivna bolag som kan ha kommit olika långt i sin affärsresa. Förutom att skjuta till kapital bidrar vi även med vår djupa IT-kompetens. Vi har lång erfarenhet inom alla olika delar av mjukvaruutveckling och vi jobbar dagligen med att förstå hur verksamhetens behov kan stöttas på bästa sätt med hjälp av IT-lösningar, detta hjälper vi gärna till med i ert bolag också!'></InvestementTextArea>
            </div>
        </div>
    )
} 