import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TidligereOrdrer from '../utils/TidligereOrdrer.json';
import senesteOrdrer from '../icons/senesteOrdrer.svg';

interface Order {
    date: string;
    orderNumber: string;
}

export function LastOrders() {
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        setOrders(TidligereOrdrer);
    }, []);

    return (
        <div className=" h-fit min-w-[500px] border-none">
            <div className="flex place-content-between items-center">
                <div className="flex items-center mb-2">
                    <img className="w-[25px] h-[25px]" src={senesteOrdrer} alt="senesteOrdrer"></img>
                    <p className="uppercase font-medium text-base ml-2">Seneste ordrer</p>
                </div>
                <Link to={""} className="text-xs text-black underline">
                    Se alle
                </Link>
            </div>

            <div className="rounded-lg min-h-[200px] bg-[#F5F5F5]">
                <div className="p-5">
                    <ul className="pt-3 flex flex-col ">
                        {orders.map((order, index) => (
                            <li
                                key={index}
                                className={`flex place-content-between h-[40px] pr-2 items-center ${index % 2 !== 1 ? 'bg-[#FFFFFF]' : ''}`}
                            >

                                <div className="flex gap-[20px] align">
                                    <div className="w-fit uppercase text-center font-[400] text-[14px] text-[#261F18]">{order.date}</div>
                                    <div className="w-fit uppercase font-bold text-[14px] text-[#261F18]">#{order.orderNumber}</div>
			                    </div>

                                <div className="flex gap-[20px]">
                                    <div className="font-['Open Sans'] text-[14px] underline">Se ordre</div>
                                    <div className="font-['Open Sans'] text-[14px] underline">Genbestil</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

