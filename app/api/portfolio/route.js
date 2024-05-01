import { NextResponse } from "next/server";
import connectMongo from "@/libs/mongoose";
import Ticker from "@/models/Ticker";
import { getServerSession } from "next-auth";
import User from "@/models/User";
import { authOptions } from "@/libs/next-auth";

// This route is used to store the leads that are generated from the landing page.
// The API call is initiated by <ButtonLead /> component
// Duplicate emails just return 200 OK

const getPortfolio = (tickers) => {
  // group by ticket name and calculate average cost and total cost
  //ej. [{name: btc, avg_cost: 60000, total_cost: 60000, tickers: [{ticker: "btc", name: "btc", shares: 0.0001, cost: 60000}]}]
  const portfolio = {}
  for(const ticker of tickers){
    if(!portfolio[ticker.name]){
      portfolio[ticker.name] = {
        name: ticker.name,
        avg_cost: tickers.filter(t => t.name === ticker.name).reduce((acc, t) => acc + t.cost, 0) / tickers.filter(t => t.name === ticker.name).length,
        total_cost: tickers.filter(t => t.name === ticker.name).reduce((acc, t) => acc + t.cost*t.shares, 0),
        shares: tickers.filter(t => t.name === ticker.name).reduce((acc, t) => acc + t.shares, 0),
        tickers: tickers.filter(t => t.name === ticker.name)
      }
    }
  }

  return Object.values(portfolio);
};

export async function GET() {
    const session = await getServerSession(authOptions);
  await connectMongo();

  const { id } = session.user;
  const user = await User.findById(id);

  try {
    const tickers = await Ticker.find({ userId: user._id });
    const portfolio = getPortfolio(tickers);
    return NextResponse.json(portfolio);

  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function POST(request) {
    const session = await getServerSession(authOptions);
  await connectMongo();

  const { id } = session.user;
  const user = await User.findById(id);
  // console.log(request.json())
  try{
    const { ticker, name, shares, cost } = await request.json();
    const newTicker = new Ticker({
      ticker,
      name,
      shares,
      cost,
      userId: user._id,
    });
    await newTicker.save();
    const tickers = await Ticker.find({ userId: user._id });
    const portfolio = getPortfolio(tickers);
    console.log(portfolio);

    return NextResponse.json({ success: true, portfolio });

  }catch(e){
    console.error(e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }

}
