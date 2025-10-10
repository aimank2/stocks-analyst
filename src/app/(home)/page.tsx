import TradingViewWidget from "@/components/trading-view-widget";
import {
  ECONOMIC_CALENDAR,
  HEATMAP_WIDGET_CONFIG,
  MARKET_DATA_WIDGET_CONFIG,
  MARKET_OVERVIEW_WIDGET_CONFIG,
  TOP_STORIES_WIDGET_CONFIG,
} from "@/lib/constants";

const Home = () => {
  return (
    <div className="flex h-screen home-wrapper">
      <section className="gap-8 grid w-full home-section">
        <div className="md:col-span-1 xl:col-span-1">
          <TradingViewWidget
            title={"Crypto Overview"}
            scriptUrl={
              "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js"
            }
            config={MARKET_OVERVIEW_WIDGET_CONFIG}
            className="custom-chart"
            height={600}
          />
        </div>
        <div className="md:col-span-1 xl:col-span-2">
          <TradingViewWidget
            title={"Crypto Heatmap"}
            scriptUrl={
              "https://s3.tradingview.com/external-embedding/embed-widget-crypto-coins-heatmap.js"
            }
            config={HEATMAP_WIDGET_CONFIG}
            className="custom-chart"
            height={600}
          />
        </div>
      </section>
      <section className="gap-8 grid pb-2 w-full home-section">
        <div className="md:col-span-1 xl:col-span-1 h-full">
          <TradingViewWidget
            scriptUrl={
              "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js"
            }
            config={TOP_STORIES_WIDGET_CONFIG}
            className="custom-chart"
          />
        </div>
        <div className="md:col-span-1 xl:col-span-1 h-full">
          <TradingViewWidget
            scriptUrl={
              "https://s3.tradingview.com/external-embedding/embed-widget-events.js"
            }
            config={ECONOMIC_CALENDAR}
            className="custom-chart"
          />
        </div>
        <div className="md:col-span-1 xl:col-span-1 h-full">
          <TradingViewWidget
            scriptUrl={
              "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js"
            }
            config={MARKET_DATA_WIDGET_CONFIG}
            className="custom-chart"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
