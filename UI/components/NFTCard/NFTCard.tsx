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
      <div className="md:p-2 p-5 bg-[#242435] rounded-lg hover:shadow-2xl hover:shadow-[#00a3ff] flex flex-col col-auto items-center max-w-xs mx-auto transform transition-transform duration-300 hover:scale-105">
        <div className="w-18 h-18 ">
          <Image src={data.image} width="60" height="60" alt={data.title} className="" />
        </div>
        <Link href={`/NFT/${data.tokenId}`}>
          <h4 className="text-white text font-bold cursor-pointer mt-2 text-center">{data.title}</h4>
        </Link>
        <div className="flex justify-between w-full mt-2">
          <span className="text-white flex items-center">
          </span>
        </div>
      </div>
    </div>
  );
}

export default NFTCard;