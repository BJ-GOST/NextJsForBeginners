import SectionLink from "@/UI/sectionLinks"
import SectionHeading from "@/UI/sectionHeading"

export default function PageSection({body}){

    return(

        <div className="page-section">

            <div className="page-section-head">
                <SectionHeading/>
                <SectionLink/>
            </div>

            <p>{body}</p>
            
        </div>

    )

}