import { ERC725, ERC725JSONSchema } from "@erc725/erc725.js";
import Web3 from "web3";

const schemas: ERC725JSONSchema[] = [
  {
    name: "SupportedStandards:LSP3UniversalProfile",
    key: "0xeafec4d89fa9619884b60000abe425d64acd861a49b8ddf5c0b6962110481f38",
    keyType: "Mapping",
    valueContent: "0xabe425d6",
    valueType: "bytes",
  },
  {
    name: "LSP3Profile",
    key: "0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5",
    keyType: "Singleton",
    valueContent: "JSONURL",
    valueType: "bytes",
  },
  {
    name: "LSP1UniversalReceiverDelegate",
    key: "0x0cfc51aec37c55a4d0b1a65c6255c4bf2fbdf6277f3cc0730c45b828b6db8b47",
    keyType: "Singleton",
    valueContent: "Address",
    valueType: "address",
  },
];

const address = "0x0c03fba782b07bcf810deb3b7f0595024a444f4e";
const provider = new Web3.providers.HttpProvider(
  "https://rpc.l16.lukso.network"
);
const config = {
  ipfsGateway: "https://ipfs.lukso.network/ipfs/",
};

export const erc725GetData = async (address: string) => {
  const erc725 = new ERC725(schemas, address, provider, config);

  return erc725.getData([
    "LSP3Profile",
    "SupportedStandards:LSP3UniversalProfile",
  ]);
};
