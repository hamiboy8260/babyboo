import React from 'react';
import { ProduktListe } from '../components/ProduktListe';
import { LastOrders } from '../components/TidligereOrdrer';
import { FavoritListe } from '../components/FavoritListe';
import { Produkt } from '../types/Produkt'; // Assuming you have defined the Produkt type
import { getRequest } from '../utils/api';
import { useState, useEffect } from 'react';
import { KampagneSektion } from '../components/KampagneSektion';


export const HomePage:React.FC = () => {
  
   const [produkter, setProdukter] = useState([] as Produkt[]);
   const [totalProducts, setTotalProducts] = useState<number>(produkter.length);


const toggleFavorite = (productId: number) => {
        setProdukter(prevProdukter => 
            prevProdukter.map(produkt =>
                produkt.id === productId ? { ...produkt, isFavorite: !produkt.isFavorite } : produkt
            )
        );
    };
   
   useEffect(() => {
        async function getProducts() {
            try {
                const response = await getRequest<Produkt[]>('https://fakestoreapi.com/products?limit=8');
                setProdukter(response);
                setTotalProducts(response.length);

                // console.log(response);
            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
        }
        getProducts();
    }, [totalProducts]);

return (
<div className='flex flex-col px-14'>
    <h1 className='uppercase py-5 text-left text-2xl font-bold px-15'> velkommen babyboo a/s </h1>
      <div className="flex sm:flex-col md:flex-col xl:flex-row gap-[25px] ">
        <ProduktListe products = {produkter} toggleFavorite={toggleFavorite} totalProducts = {totalProducts}/>
        <LastOrders/>
        <FavoritListe produkter = {produkter} />  
    
      </div>
        <div className="flex gap-6 py-4 sm:items-center">
          <div className='w-auto h-auto'>
               <KampagneSektion/>
          </div>
        </div>
</div>
);

}
