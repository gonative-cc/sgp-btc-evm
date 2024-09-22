import React from "react";
import NFTCard from "./NFTCard";

// Structure for both NFT and Bitcoin
interface NFTCardStrut {
  title: string;
  price: string;
  image: string;
  tokenId: number | null;
}

// Wallet item (either NFT or Bitcoin)
interface WalletItem {
  type: "NFT" | "Bitcoin";
  data: NFTCardStrut;
}

// Structure for Wallet
interface Wallet {
  walletId: number;
  walletName: string;
  totalAmount: string;
  items: WalletItem[];
}

function NFTItems() {
  // Wallets array with Bitcoin and NFTs structured similarly
  const wallets: Wallet[] = [
      {
        walletId: 1,
        walletName: "Wallet 1",
        totalAmount: "3546 USDC",
        items: [
          {
            type: "NFT",
            data: {
              title: "SilverWolf#234",
              price: "2.001 ETH",
              image: "/design1.webp",
              tokenId: 11
            }
          },
          {
            type: "NFT",
            data: {
              title: "BronzeEagle#789",
              price: "1.667 ETH",
              image: "/design3.webp",
              tokenId: 12
            }
          },
          {
            type: "Bitcoin",
            data: {
              title: "Bitcoin 0.5 BTC",
              price: "0.5 BTC",
              image: "/bitcoin.jpg",
              tokenId: null
            }
          },
        ]
      }
      
      ,{
        "walletId": 2,
        "walletName": "Wallet 2",
        "totalAmount": "4250 USDC",
        "items": [
          {
            "type": "NFT",
            "data": {
              "title": "GoldenLion#321",
              "price": "3.450 ETH",
              "image": "/design4.webp",
              "tokenId": 13
            }
          },
          {
            "type": "NFT",
            "data": {
              "title": "ShadowPanther#456",
              "price": "2.003 ETH",
              "image": "/design7.jpg",
              "tokenId": 14
            }
          },
          {
            "type": "NFT",
            "data": {
              "title": "BlackPanther#456",
              "price": "2.003 ETH",
              "image": "/dsign_9.webp",
              "tokenId": 14
            }
          },
          {
            "type": "Bitcoin",
            "data": {
              "title": "Bitcoin 0.75 BTC",
              "price": "0.75 BTC",
              "image": "/bitcoin.jpg",
              "tokenId": null
            }
          }
        ]
      },
      {
        "walletId": 3,
        "walletName": "Wallet 3",
        "totalAmount": "4500 USDC",
        "items": [
          {
            "type": "NFT",
            "data": {
              "title": "GoldenPhoenix#512",
              "price": "3.120 ETH",
              "image": "/design4.webp",
              "tokenId": 21
            }
          },
          {
            "type": "NFT",
            "data": {
              "title": "MysticLion#888",
              "price": "2.750 ETH",
              "image": "/design8.webp",
              "tokenId": 22
            }
          },
          {
            "type": "Bitcoin",
            "data": {
              "title": "Bitcoin 1.0 BTC",
              "price": "1.0 BTC",
              "image": "/bitcoin.jpg",
              "tokenId": null
            }
          }
        ]
      }
      
      
      
      
  ];

  return (
    <div className="container mb-5">
      {wallets.map((wallet, walletIndex) => (
        <div key={wallet.walletId} className="mb-10">
          {/* Wallet title and Buy button */}
          <div className="flex justify-between mt-10 gap-6">
            <p className="text-3xl text-white font-medium">{wallet.walletName} - {wallet.totalAmount}</p>
            <button
              onClick={() => window.location.href = '/allnft'}
              className="bg-[#00a3ff] hover:bg-[#212e48] text-white rounded-md w-40 duration-300"
            >
              Bridge
            </button>
          </div>

          {/* Items (NFTs and Bitcoin) grid */}
          <div className="grid grid-cols-1 md:grid-cols-6 mt-8 gap-9">
            {wallet.items.map((walletItem: WalletItem, index: number) => {
              if (walletItem.type === "NFT" || walletItem.type === "Bitcoin") {
                // Render NFT or Bitcoin card similarly
                const CardData = walletItem.data as NFTCardStrut;
                return <NFTCard key={CardData.tokenId ?? index} {...CardData}  />;
                
              }
              if (index < wallet.items.length - 1) {
                return (
                  <div key={`plus-${index}`} className="flex justify-center items-center text-white text-4xl font-bold">
                    +thiodfaos dfij
                  </div>
                );
              }
            }

              // After each item, except the last one, add a big plus symbol
              )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default NFTItems;
