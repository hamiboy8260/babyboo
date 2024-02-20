import { KampangeKort } from "./KampangeKort";
import kampange1 from '../images/kampagne1.png';
import kampange2 from '../images/kampagne2.png';
import kampange3 from '../images/kampagne3.png';
import kampangeIcon from '../icons/kampagnerIcon.svg';

export function KampagneSektion() {

   
    return (
        <div className="text-left border-2 border-red w-auto">
            <div className="flex items-center mb-4">
                <img src={kampangeIcon} alt="Kampagne Icon" className="w-[25px] h-[25px] mr-2" />
                <h2 className="text-2xl font-bold">Kampagner</h2>
            </div>
            <div className="flex justify-between w-full">
                <KampangeKort 
                    heading="Classic senge og skabe"
                    bgImage={kampange1}
                    buttonText="Gå til kampagne"
                    date="August 2022"  
                    link=""
                />
                <KampangeKort 
                    heading="Wally pusleborde"
                    bgImage={kampange2}
                    buttonText="Gå til kampagne"
                    date="Oktober 2022"
                    link=""
                />
                <KampangeKort 
                    heading="Alle tekstiler"
                    bgImage={kampange3}
                      buttonText="Gå til kampagne"
                    date="December 2022"
                    link=""
                />
            </div>
        </div>
    );
}