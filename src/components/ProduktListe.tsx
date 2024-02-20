import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Produkt } from '../types/Produkt';
import bestillingsliste from '../icons/bestillingsliste.svg';
import heartIcon from '../icons/heart.svg';
import heartFilledIcon from '../icons/heart-filled.svg';
import ArrowDown from '../icons/arrowDown.svg';

export function ProduktListe(props:{products : Produkt[], totalProducts : number, toggleFavorite: (productId : number) => void}) {

    const {products, totalProducts, toggleFavorite} = props;
    const [listLength, setListLength] = useState<number>(4);
    const [arrowRotated, setArrowRotated] = useState(false);
    const exchangeRate = 6.92; // 1 USD = 6.92 DKK
    
 

   

 
const calculateTotalPriceInDKK = (produkter: Produkt[], exchangeRate: number): number => {

    // Initialisering af variabel til at holde den samlede pris i DKK
let totalPriceForAll = 0;

// Iteration over hvert produkt i produkter-arrayet
produkter.forEach(produkt => {
    // For hvert produkt tilføjer vi dets pris til den samlede pris
    totalPriceForAll += produkt.price;
});

// Multiplicering med valutakursen for at få prisen i DKK
return totalPriceForAll * exchangeRate;
};



const ProductPCS = (produkter: Produkt[]): { [productId: number]: number } => {

    const productCounts: { [productId: number]: number } = {};

    for (let i = 0; i < produkter.length; i++) {
        const productId = produkter[i].id;
        productCounts[productId] = (productCounts[productId] || 0) + 1;
    }

    return productCounts;
};



const productCounts = ProductPCS(products);
const totalPriceInDKK = calculateTotalPriceInDKK(products, exchangeRate);


    return (  
        <div className="h-fit w-[673px] border-none">
            <div className="flex place-content-between items-center" >
                <div className="flex items-center mb-2">
                    <img className="w-[25px] h-[25px]" src={bestillingsliste} alt="bestillingsliste"></img>
                    <p className="uppercase font-medium text-base">Bestillingsliste</p>
                </div>
                <Link to={""} className="text-xs text-black underline">
                    Gå til bestillingslisten
                </Link>
            </div>

            <div className="rounded-lg min-h-[310px] bg-[#F5F5F5] ">
                <div className="p-5">
                    <div className="flex place-content-between">
                        <div className="p-2 rounded-sm w-auto overflow-x-hidden bg-[#F1ECE6]">
                            <p className="text-xs ">{totalProducts} produkter</p>
                        </div>
                        <div className="p-2 rounded-sm w-auto overflow-x-hidden bg-[#F1ECE6]">
                            <p className="text-xs ">Total : {totalPriceInDKK.toFixed(1)} DKK</p>
                        </div>
                    </div>

                    <ul className="pt-3 flex flex-col gap-3">
                        {products.slice(0, listLength).map((produkt, index) => (
                            <li
                                key={produkt.id}
                                className={`flex place-content-between h-[60px] pr-2  ${index % 2 !== 1 ? 'bg-[#FFFFFF]' : ''}`}
                            >
                                <div className="flex items-center justify-center gap-3">
                                    <div className="rounded-[3px] w-[50px] h-[50px] bg-cover" style={{ backgroundImage: `url(${produkt.image})` }}>
                                        <img
                                            className="w-5 h-5 top-0 left-0"
                                            src={produkt.isFavorite ? heartFilledIcon : heartIcon}
                                            alt="heart icon"
                                            onClick={() => toggleFavorite(produkt.id)}
                                        />
                                    </div>
                                    <div className="w-[200px] flex flex-col justify-center text-start">
                                        <p className="truncate font-medium text-[16px] pt-1 text-[#261F18]">{produkt.title}</p>
                                        <p className="font-['Open Sans'] font-[400] text-[14px] text-[#261F18]">{produkt.category}</p>
                                    </div>
                                </div>
                             

                                <div className="flex gap-[60px] font-[400] text-[14px] text-[#261F18] items-center justify-center">
                                    <p>{`${productCounts[produkt.id]} STK`}</p> 
                                    <p>{`${(produkt.price * exchangeRate).toFixed(1)} DKK`}</p>
                                    
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <button
                    className="bg-[#CFCCC5] rounded-[23px] w-[95px] h-[35px] text-center flex items-center justify-center gap-2"
                    onClick={() => {
                        setListLength(listLength === 4 ? totalProducts : 4);
                        setArrowRotated(!arrowRotated);
                    }}>
                    {listLength === 4 ? "Vis alle" : "Vis færre"}
                    <img className="w-3 h-3" src={ArrowDown} alt="Workflow" style={{transform:arrowRotated ? 'rotate(180deg)' : 'rotate(0deg)'}} />
                </button>
            </div>
        </div>
    );
}