import React, { useState } from 'react';
import { Star, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Bamboo Water Bottle',
    description: 'Sustainable bamboo water bottle with stainless steel interior',
    price: 599,
    image: 'https://m.media-amazon.com/images/I/51gVNXSejKL._SX679_.jpg',
    rating: 4.8,
    reviews: 128,
    url: 'https://www.amazon.in/Bamboo-Water-Bottle/dp/B0D795J5QG', // Unique link
  },
  {
    id: 2,
    name: 'Reusable Produce Bags',
    description: 'Set of 5 mesh produce bags for plastic-free shopping',
    price: 424,
    image: 'https://m.media-amazon.com/images/I/818bFUNW8uL._SX679_.jpg',
    rating: 4.9,
    reviews: 89,
    url: 'https://www.amazon.in/Beddify-Cotton-Reusable-Storage-Vegetables/dp/B07GZKW4CG/ref=sr_1_5?crid=21USRBOZN33D7&dib=eyJ2IjoiMSJ9.k3P89ATC7gDmOGDvzKMD-Lqz_GK5zSPzvkZ6e8gn1YLO39K22TaYY3T5wklmr2OZqzfk17enDvSmDnJeAouO6qMciyhKLpQU6ixxCys-kRRlm-sTrGHbDGjhZfZZKSQ_Qf0bBEnP9F6DEQGXP9nr0awu6BPrJS9HU2y-vYKX3KCAInmVZeofBwCJyRKQYb_rKtYbZwzHhkFvi6bKs9n12C897prScSAH2Hk6AaBJopqIRV6NT90rmqLLUJH2R8sqjvMOrG0ETq3L8n36gO6fx0WKX1DyoXWvj_0uSUlnNTk.S8DWyzIsRUGPC9yhv-kj2Kh80Ji_ABbgIYGf3trK6-o&dib_tag=se&keywords=Reusable+Produce+Bags&qid=1730456108&sprefix=bamboo+water+bottle%2Caps%2C248&sr=8-5', // Unique link
  },
  {
    id: 3,
    name: 'Bamboo Cutlery Set',
    description: 'Portable bamboo utensil set with carrying case',
    price: 379,
    image: 'https://m.media-amazon.com/images/I/810k2cJR9FL._SL1500_.jpg',
    rating: 4.7,
    reviews: 156,
    url: 'https://www.amazon.in/Bamboo-Bae-Cutlery-Friendly-Handcrafted/dp/B099NFQ4L7/ref=sr_1_4?crid=3R45IKRLPX51B&dib=eyJ2IjoiMSJ9.MZCv6tRW-JJ40ofxuDbPoIByDWCXgHeCCGy9pBxsM4_Cgmkwg_TdfWrJM7OenJXt-xNhIGpBMdXnSBbHIoHUzFVySDBq8poDKrZIAvlEZ_D6MDmyJlJoJpHSGl93mamzonTalQp2zu4NsS71ENAn2jJId48TFHUUSMEOOgEX1RVAEAGTRj1OCCWMQdNEmigYnjhEeEaVqB_MZBZUz2Ez_wSU1OGveNHj2nfPC1n77zPJtgkOoBa2Eb04d7X0QVZyisDGxRivD6YzBdabXMab6eZvTb7g6jt2P-BePZGBRAY.jMWD7bkaMzHTziEb3iRMAF2rfG0iwx6qXU0Y5ESP_qQ&dib_tag=se&keywords=bamboo+cutlery+set&qid=1730456594&sprefix=bamboo+clutery+se%2Caps%2C215&sr=8-4', // Unique link
  },
  {
    id: 4,
    name: 'Organic Cotton Tote',
    description: 'Durable organic cotton shopping bag with inner pockets',
    price: 248,
    image: 'https://m.media-amazon.com/images/I/81ZWR9jVJ1L._SX679_.jpg',
    rating: 4.6,
    reviews: 92,
    url: 'https://www.amazon.in/Metsi-internal-Traveling-Shopping-Shoulder/dp/B0CBPS432N/ref=sr_1_25?crid=1Z415PUT94I4J&dib=eyJ2IjoiMSJ9.mUmJR3OQKB9Iyi_srQhLUfsgDplglQdpzhHwIXApJtrR6FEf0x9sl3vbwLjDhaCf9WH_uygn2vXJ11NLMnQjhbrbdhHGGCe0SFYwcODubKtm8yGTh6Irfuv-ViiHYZiOicz_72EBGuWV-jPEJHJknrXnq7Nx8Om-ajUcvSosEoWHQBO7jZBhH3HqHJA5KD_O7ocLO4TR_ql8IK0gRjI8xofePNb7G_j7xB-zxUWLhAaOQa27lQ-eUWRQiClsnaCP9jdSGihhjIRZEO8Ti84Dwa9P9Ylnoa7VbCH6STlSlKI.Q-UO4c9fmyVWmRYKJOJ98yyaWFTETaoNFDC65QiPrcM&dib_tag=se&keywords=Organic+Cotton+Tote&qid=1730456711&sprefix=organic+cotton+tote%2Caps%2C224&sr=8-25', // Unique link
  },
  {
    id: 5,
    name: 'Beeswax Food Wraps',
    description: 'Reusable food wraps made from organic cotton and beeswax',
    price: 3686,
    image: 'https://m.media-amazon.com/images/I/81-RFKZmXML._SX679_.jpg',
    rating: 4.8,
    reviews: 143,
    url: 'https://www.amazon.in/HUNNYBEE-Reusable-Friendly-Alternative-Sustainable/dp/B083GKGT3C/ref=sr_1_12?crid=33CDXBKP1D280&dib=eyJ2IjoiMSJ9.Yk6MNN0IxSeO5wF89BfyAdeM6eSyvzZS5_Ix1mbq7hKp1K43WRLqiiaDlrzIvmHpPBBGVOu6ON3Kl3D_BYnnBN2l79ues971aZqk_Ke0Pg16Vb35DdmBhP1Zd04D3tp6vtceAxMHlPCyoV3icR8B3scKfJJiP7UqijT9WqP5twvpQ4uSPi8gQSsu0gxt241IhAoc8apeMN-1pjql1W393Zw9Pl6bVr9CmldhapBPQqoJlIZZ5Ppn_K9o3XAUI1e2XlLYE02RfU68ZY9vVY3Zb3uLvduwIVDTDczxJ2CjJ-U.gimXXec9eTReCCpE2Vlx7NfNLRQ75jWAUqfStB-R6ic&dib_tag=se&keywords=Beeswax%2BFood%2BWraps&qid=1730456802&sprefix=beeswax%2Bfood%2Bwraps%2Caps%2C219&sr=8-12&th=1', // Unique link
  },
  {
    id: 6,
    name: 'Glass Storage Containers',
    description: 'Set of 3 airtight glass containers for food storage',
    price: 1829,
    image: 'https://m.media-amazon.com/images/I/71MEL7WO72L._SX679_.jpg',
    rating: 4.9,
    reviews: 167,
    url: 'https://www.amazon.in/FineDine-Glass-Food-Storage-Container/dp/B0CDXDHNXB/ref=sr_1_10?crid=3LNG8IA990PV4&dib=eyJ2IjoiMSJ9.7feSbWAtAL4gs0D4OV4_ZpCziek2TFVCB-yq4S6ESkUStbZOa1tf5K0QcQ6U4ao_MK7bVH1V-drXOIe2HgrSnVDncPj_sGd2or8Cee7stmy8dxIDT3TED97LHoxupzTYj69LsYCi3z3MsgSJvGK_ttxsTKiJZmkGKseqiYvTaY_8M8TECfgoan9EOkpix55mff8tbG8NB8lcVRnN23faYFArGtSOGxF5EpVAOY4sjcTGUZLEIGWzpg8CbGX6NVrHF1xs4kuYLOW_sgSBZz5Bj9RVyuqAviCpDjyzXNGvwn8.v8JTNtEd-z8KWDiYyHRy8i-wSNmmRXNOM0bhC6a0ffg&dib_tag=se&keywords=Glass+Storage+Containers&qid=1730456893&sprefix=glass+storage+containers%2Caps%2C226&sr=8-10', // Unique link
  }
];

export default function FeaturedProducts() {
  const [startIndex, setStartIndex] = useState(0);
  const productsToShow = 3;

  const nextProducts = () => {
    setStartIndex((prevIndex) =>
      prevIndex + productsToShow >= products.length ? 0 : prevIndex + productsToShow
    );
  };

  const previousProducts = () => {
    setStartIndex((prevIndex) =>
      prevIndex - productsToShow < 0 ? Math.max(0, products.length - productsToShow) : prevIndex - productsToShow
    );
  };

  const visibleProducts = products.slice(startIndex, startIndex + productsToShow);

  return (
    <div id="featured-products" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Eco-Products
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Discover our most popular sustainable alternatives
          </p>
        </div>

        <div className="relative mt-12">
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full">
            <button
              onClick={previousProducts}
              className="transform -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all z-10 text-emerald-600 hover:text-emerald-700"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextProducts}
              className="transform translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all z-10 text-emerald-600 hover:text-emerald-700"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleProducts.map((product) => (
              <div
                key={product.id}
                className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-medium text-gray-900">
                      {product.name}
                    </h3>
                    <p className="text-lg font-medium text-emerald-600">
                      Rs.{product.price}
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400" />
                      <span className="ml-1 text-sm text-gray-500">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>
                    <a href={product.url} target="_blank" rel="noopener noreferrer">
                      <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-full hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-200">
                        <ShoppingBag className="h-4 w-4 mr-2" />
                        Buy Now
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            {Array.from({ length: Math.ceil(products.length / productsToShow) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setStartIndex(index * productsToShow)}
                className={`h-2 w-2 rounded-full mx-1 transition-all ${Math.floor(startIndex / productsToShow) === index
                    ? 'bg-emerald-600 w-4'
                    : 'bg-gray-300 hover:bg-emerald-400'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}