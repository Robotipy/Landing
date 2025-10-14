"use client";
import { useEffect, useState, useCallback } from "react";
import ButtonAccount from "@/components/ButtonAccount";
import InputSearch from "@/components/InputSearch";

import { getCryptos } from "@/libs/binance";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

const columns = [
  { name: "TICKER", uid: "ticker" },
  { name: "NAME", uid: "name" },
  { name: "SHARES", uid: "shares" },
  { name: "AVG. COST", uid: "avg_cost" },
  { name: "TOTAL COST", uid: "total_cost" },
  { name: "PRICE", uid: "price" },
  // { name: "CHANGE", uid: "change" },
  { name: "TOTAL GAIN $", uid: "total_gain" },
  { name: "TOTAL GAIN %", uid: "total_gain_percent" },
  { name: "ACTIONS", uid: "actions" },
];

const StockCard = ({ name, gain }) => {
  const isGainer = gain.charAt(0) === "+";

  return (
    <div
      className={`p-4 ${
        isGainer ? "bg-green-500" : "bg-red-500"
      } border border-gray-300`}
    >
      <div className="text-center">
        <h2 className="text-white text-xl">{name}</h2>
        <p className="text-white">{gain}</p>
      </div>
    </div>
  );
};

// This is a private page: It's protected by the layout.js component which ensures the user is authenticated.
// It's a server compoment which means you can fetch data (like the user profile) before the page is rendered.
// See https://shipfa.st/docs/tutorials/private-page
export default function MyPortfolio() {
  const [cryptos, setCryptos] = useState([]);
  const [userPortfolio, setUserPortfolio] = useState([]);
  const filterCrypto = (data) => {
    return data
      .filter((crypto) => crypto.symbol.endsWith("USDT"))
      .map((crypto) => {
        return {
          id: crypto.symbol.replace("USDT", ""),
          name: crypto.symbol.replace("USDT", ""),
          price: crypto.price,
        };
      });
  };

  const getPorfolio = async () => {
    const portfolio = await fetch("/api/portfolio");
    return portfolio.json();
  };

  const setTicker = async (ticker) => {
    return await fetch("/api/portfolio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ticker),
    });
  };
  useEffect(() => {
    getCryptos().then((data) => {
      setCryptos(filterCrypto(data));
    });

    getPorfolio().then((portfolio) => {
      setUserPortfolio(portfolio);
    });
  }, []);

  const renderCell = useCallback(
    (user, columnKey) => {
      const cellValue = user[columnKey];
      const crypto = cryptos.find((crypto) => crypto.name === user.name);
      const price = crypto ? Math.round(crypto.price * 100) / 100 : 0;
      if (columnKey == "ticker") {
        // use name instance ticker
        return user.name;
      }
      if (columnKey == "price") {
        return price;
      }
      if (columnKey == "total_gain") {
        return (
          (Math.round((user.avg_cost - price) * user.shares) * 1000) / 1000
        );
      }
      if (columnKey == "total_gain_percent") {
        return Math.round((user.avg_cost - price) / user.avg_cost) * 100;
      }
      if (columnKey === "actions") {
        return (
          <div className="flex justify-center space-x-4">
            {/* Add trash icon here */}
            <button className="btn btn-sm btn-danger">Eliminar</button>
          </div>
        );
      }
      return String(cellValue);
    },
    [cryptos]
  );

  const addCryptoCallback = async (value) => {
    const crypto = cryptos.find((crypto) => crypto.name === value);
    if (crypto) {
      let result = await setTicker({
        ticker: crypto.name,
        name: crypto.name,
        shares: 0,
        cost: crypto.price,
      });

      result = await result.json();

      // const portfolio = await result.json();
      console.log(result);
      setUserPortfolio(result.portfolio);
    }
  };

  const generateRandomPrice = () => {
    // return a num between -1000 and 1000
    const num = Math.floor(Math.random() * 2000) - 1000;
    if (num >= 0) {
      return `+${num}`;
    }
    return String(num);
  };

  return (
    <main className=" min-h-screen p-8 pb-24">
      <section className="container mx-auto space-y-8">
        <ButtonAccount />
        <h1 className="text-3xl md:text-4xl font-extrabold">Portafolio</h1>
        <InputSearch
          datalist={cryptos.map((crypto) => crypto.name)}
          dataId="crypto-list"
          btnName="Agregar crypto"
          callback={addCryptoCallback}
        />
        <Table aria-label="Example table with custom cells">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn
                key={column.uid}
                align={column.uid === "actions" ? "center" : "start"}
              >
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={userPortfolio}>
            {(item) => (
              // add tree for each row
              <TableRow key={item.name}>
                {columns.map((column) => (
                  <TableCell key={column.uid}>
                    {renderCell(item, column.uid)}
                  </TableCell>
                ))}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </section>
      <section className="my-7 container mx-auto space-y-8">
        <h1 className="text-2xl font-bold">Mapa del Portafolio</h1>
        <p className="text-gray-500">
          Una representación visual de tu portafolio
        </p>
        <br />
        <div className="mx-auto flex justify-center">
          <div className="grid grid-cols-4 w-screen h-96">
            {userPortfolio.map((stock) => (
              <StockCard
                name={stock.name}
                gain={generateRandomPrice()}
                key={stock.name}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
