import { Link } from 'react-router-dom';
import arrowRight from '../icons/arrow-right.svg';
import hourGlass from '../icons/hourglassIcon.svg';

export function KampangeKort({ heading, bgImage, buttonText, date, link }: { heading: string, bgImage: string, buttonText: string, date: string, link: string }) {
    // Parse the date string
    const formattedDate = new Date(date);
    // Get the month and year
    const month = formattedDate.toLocaleString('default', { month: 'long' });
    const year = formattedDate.getFullYear();

    date = `${month} ${year}`;

    return (
        <div className="w-[288px] h-[310px] px-[10px] py-[20px] flex flex-col text-left p-5 m-1" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="rounded-sm bg-[#C8C5BE] flex items-center max-w-[150px]">
                <img src={hourGlass} alt="Hourglass icon" className="w-[15px] h-[15px] mx-1" />
                <p className="first-letter:uppercase">{date}</p>
            </div>
            <div className="flex flex-col h-[310px] justify-end">
                <p className="text-[16px] font-bold uppercase leading-[24px] text-white py-1">{heading}</p>
                <Link to={link} className="bg-[#C4C9C1] rounded-[24px] w-fit px-2 h-[33px] flex place-items-center justify-center gap-[2px]">
                    <p className="text-[14px] font-[700px]">{buttonText}</p>
                    <img className="w-[20px] h-[20px]" src={arrowRight} alt="Workflow" />
                </Link>
            </div>
        </div>
    );
}