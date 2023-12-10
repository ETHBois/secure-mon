export enum Chain {
  ETH = "eth",
  ARB = "arb",
  MNT = "mnt",
  SCRL = "scrl"
}

export enum Network {
  MAINNET = "mainnet",
  SEPOLIA = "sepolia",
  // GOERLI = "goerli" TODO: Add support for Goerli
}

export default interface Contract {
  id: number;
  name: string;
  address: string;
  chain: Chain;
  network: Network;
}
