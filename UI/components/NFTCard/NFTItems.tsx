import Link from "next/link";
import React from "react";
import { FaBeer, FaArrowRight } from "react-icons/fa";
import NFTCard from "./NFTCard";

function NFTItems() {
  interface NFTCardStrut {
    title: string;
    price: string;
    likes: string;
    image: string;
    tokenId: number;
  }

  interface WalletItem {
    type: "NFT" | "BTC";
    data: NFTCardStrut | string;
  }

  const generateRandomBTC = () => {
    return (Math.random() * 0.0001).toFixed(8);
  };

  const wallets: { name: string; items: WalletItem[] }[] = [
    {
      name: "Wallet 1",
      items: [
        {
          type: "NFT",
          data: {
            title: "EpicUnicorn#123",
            price: "0.668",
            likes: "028",
            image: "/design2.webp",
            tokenId: 5,
          },
        },
        {
          type: "NFT",
          data: {
            title: "MysticDragon#456",
            price: "0.668",
            likes: "253",
            image: "/design1.webp",
            tokenId: 5,
          },
        },
        {
          type: "BTC",
          data: generateRandomBTC(),
        },
      ],
    },
    {
      name: "Wallet 2",
      items: [
        {
          type: "NFT",
          data: {
            title: "LegendPhoenix#789",
            price: "0.668",
            likes: "120",
            image: "/design3.webp",
            tokenId: 5,
          },
        },
        {
          type: "NFT",
          data: {
            title: "BrilliantGriffin#101",
            price: "0.668",
            likes: "207",
            image: "/design4.webp",
            tokenId: 5,
          },
        },
        {
          type: "BTC",
          data: generateRandomBTC(),
        },
      ],
    },
    // Add more wallets as needed
  ];

  return (
    <div className="container mb-5">
      {wallets.map((wallet, walletIndex) => (
        <div key={walletIndex} className="mb-10">
          <div className="flex justify-between mt-10 gap-6">
            <p className="text-3xl text-white font-medium">{wallet.name}</p>
            <button
              onClick={() => window.location.href = '/allnft'}
              className="bg-[#00a3ff] hover:bg-[#212e48] text-white rounded-md w-40 duration-300"
            >
              Buy
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 mt-8 gap-9">
            {wallet.items.map((walletItem: WalletItem, index: number) => {
              if (walletItem.type === "NFT") {
                const NFTCardData = walletItem.data as NFTCardStrut;
                return <NFTCard key={NFTCardData.title} {...NFTCardData} />;
              } else {
                const btcAmount = walletItem.data as string;
                return (
                  <div key={index} className="bg-gray-800 p-4 rounded-md text-white">
                    <p>BTC: {btcAmount}</p>
                    <img src="/bitcoin.png" alt="Bitcoin" className="w-16 h-16 mt-2" />
                  </div>
                );
              }
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default NFTItems;