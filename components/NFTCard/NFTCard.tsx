import React, { useEffect } from "react";
import Image from "next/image";
import { FaHeart } from 'react-icons/fa';
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';

interface NFTCardStrut {
  title: string;
  price: string;
  likes: string;
  image: string;
  tokenId: number;
}

function NFTCard(data: NFTCardStrut) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <div data-aos="fade-up">
      <div className="md:p-2 p-5 bg-[#242435] rounded-lg hover:shadow-2xl hover:shadow-[#00a3ff] flex flex-col items-center">
        <div className="w-full h-48 relative">
          <Image src={data.image} layout="fill" objectFit="contain" alt={data.title} className="mx-auto" />
        </div>
        <Link href={`/NFT/${data.tokenId}`}>
          <h4 className="text-white text font-bold cursor-pointer mt-2 text-center">{data.title}</h4>
        </Link>
        <div className="flex justify-between w-full mt-2">
          <span className="text-[#00a3ff]">{data.price} USDC</span>
          <span className="text-white flex items-center">
            <FaHeart className="mr-1" /> {data.likes}
          </span>
        </div>
      </div>
    </div>
  );
}

export default NFTCard;