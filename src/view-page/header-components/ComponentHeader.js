import OHeader from "./first-level/OHeader";
import SHeader from "./second-level/SHeader";
import TechnicalPart from "./second-level/TechnicalPart";


function ComponentHeader(){

    return (
        <div>
            <span className="header-block">
                <OHeader/>
                <SHeader/>
                <TechnicalPart/>
            </span>
        </div>
    )

}


export default ComponentHeader;