import { useState } from "react";
import { Produkt } from '../types/Produkt';
import favoritProduktIcon from '../icons/favoritProdukter.svg';
import listIcon from '../icons/listIcon.svg';
import trashIcon from '../icons/trashIcon.svg';


export function FavoritListe(props: {produkter : Produkt[]}) {

    const {produkter} = props;
    const [edit, setEdit] = useState(false);
    
   

    return (
        <div className="w-[350px]">
            <div className="flex place-content-between items-center">
                <div className="flex items-center gap-3 ">
                    <img className="w-[25px] h-[25px] " src={favoritProduktIcon} alt="favoritProdukter" />
                    <div className="uppercase font-medium text-[16px]">favorit produkter</div>
                </div>
                {edit ? (
                    <button className="font-['Open Sans'] text-[14px] underline" onClick={() => setEdit(false)}>
                        Gem
                    </button>
                ) : (
                    <button className="font-[Open Sans] text-[14px] underline" onClick={() => setEdit(true)}>
                        Redigér
                    </button>
                )}
            </div>
            <div className="py-2">
                <div className="min-h-[310px] rounded-[10px] bg-[#F5F5F5] p-4">
                    <div className="flex flex-col items-start py-2 gap-[7px]">
                        {produkter.filter((item : Produkt) => item.isFavorite).map((item: Produkt, index) => (
                            <div key={index} className="mb-2">
                                <div className="flex items-center justify-center gap-3">
                                    <div className="rounded-[3px] w-[50px] h-[50px] bg-cover" style={{ backgroundImage: `url(${item.image})` }}></div>
                                        <div className="w-[200px] flex flex-col justify-center text-start">
                                            <p className="truncate font-medium text-[16px] pt-1 text-[#261F18]">{item.title}</p>
                                            <p className="font-['Open Sans'] font-[400] text-[14px] text-[#261F18]">{item.category}</p>
                                        </div>
                                        {edit ? (  
                                            <button
                                                className="bg-[#D4B8B8] rounded-[24px] w-fit px-2 h-[33px] flex place-items-center justify-center gap-[2px]"
                                                onClick={() => console.log("Remove from favorites")}
                                            >
                                                <img className="w-[20px] h-[20px]" src={trashIcon} alt="Trash" />
                                            </button>
                                        ) : (

                                             <button
                                                className="bg-[#C4C9C1] rounded-[24px] w-fit px-2 h-[33px] flex place-items-center justify-center gap-[2px]">
                                                <img className="w-[20px] h-[20px]" src={listIcon} alt="Cross" />
                                            </button>
                                            
                                        )}
                                         
                                        
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}