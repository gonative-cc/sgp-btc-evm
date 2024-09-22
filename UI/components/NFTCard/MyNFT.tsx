import React, { useEffect, useState } from "react";
import NFTCard from "../NFTCard/NFTCard";
import { ethers } from "ethers";
import DNFTAbi from "../../contractAbi/DNFT.js"
import DMarketPlaceabi from "../../contractAbi/DMarketPlace.js"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";

function MyNFT({ provider }: { provider: ethers.providers.JsonRpcProvider | null }) {
  const [NFTData, setNFTData] = useState<any>();
  const [signer, setSigner] = useState<ethers.Signer | null>(null);

  const NFTCardList = [
    // Sample NFT data
  ];

  const getMyAllNFT = async () => {
    try {
      if (!provider || !signer) return;

      let marketplaceContract = new ethers.Contract(
        process.env.NEXT_PUBLIC_MYNFT_ADDRESS || "",
        DNFTAbi, // Make sure you define your ABI
        signer
      );

      let tokenContract = new ethers.Contract(
        process.env.NEXT_PUBLIC_MARKETPLACE_ADDRESS || "",
        DMarketPlaceabi, // Make sure you define your ABI
        signer
      );

      const data = await marketplaceContract.getMyNFT();
      let newItems: any = await Promise.all(
        data.map(async (d: any) => {
          const tokenUri = await tokenContract.tokenURI(d._tokenId);
          const meta = await axios.get(tokenUri);
          const price = ethers.utils.formatUnits(d.price.toString(), "ether");
          const imageUrl = `https://ipfs.io/ipfs/${meta.data.image.substr(7)}`;
          return {
            price,
            tokenId: d._tokenId.toNumber(),
            seller: d.seller,
            owner: d.owner,
            image: imageUrl,
            title: meta.data.name,
            desc: meta.data.description,
          };
        })
      );
      setNFTData(newItems);
    } catch (error) {
      toast.error("Something went wrong; please check if your wallet is connected.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  useEffect(() => {
    const fetchSigner = async () => {
      if (provider) {
        const newSigner = provider.getSigner();
        setSigner(newSigner);
      }
    };

    fetchSigner();
  }, [provider]);

  useEffect(() => {
    getMyAllNFT();
  }, [signer]);

  return (
    <div className="">
      <span className="text-white text-3xl font-bold">Our Product</span>
      <div>
        <div className={`grid ${NFTData ? "grid-cols-1 md:grid-cols-3" : ""} gap-3 md:gap-9 mt-8`}>
          {NFTData ? (
            NFTData.map((NFTCardData: any) => {
              return <NFTCard key={NFTCardData.tokenId} {...NFTCardData} />;
            })
          ) : (
            <span className="flex justify-center my-auto">
              <RotatingLines strokeColor="grey" strokeWidth="5" animationDuration="0.75" width="96" visible={true} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyNFT;
