import Image from "next/image";

import { Chain } from "@/models/contract";
import { FaEthereum } from "react-icons/fa";

export default function ChainIcon({ chain }: { chain: Chain }) {

  switch (chain) {
    case Chain.ETH:
      return <Image src="https://cryptologos.cc/logos/ethereum-eth-logo.svg" alt="Ethereum" width={24} height={24} />;
    case Chain.ARB:
      return <Image src="https://cryptologos.cc/logos/arbitrum-arb-logo.svg" alt="Arbitrum" width={24} height={24} />;
    case Chain.MNT:
      return <Image src="https://cryptologos.cc/logos/mantle-mnt-logo.svg" alt="Mantle" width={24} height={24} />;
    case Chain.SCRL:
      return <Image src="https://pbs.twimg.com/profile_images/1696531511519150080/Fq5O0LeN_400x400.jpg" alt="Scroll" width={24} height={24} />;
    default:
      return <FaEthereum />;
  }
}
