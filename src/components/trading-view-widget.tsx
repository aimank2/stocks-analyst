"use client";
import useTradingViewWidgets from "@/hooks/useTradingViewWidgets";
import { cn } from "@/lib/utils";
// TradingViewWidget.jsx
import { memo } from "react";
interface TradingViewWidgetProps {
  title?: string;
  scriptUrl: string;
  config: Record<string, unknown>;
  height?: number;
  className?: string;
}

function TradingViewWidget({
  title,
  scriptUrl,
  config,
  height,
  className,
}: TradingViewWidgetProps) {
  const container = useTradingViewWidgets(scriptUrl, config, height);

  return (
    <div className="w-full">
      {title && (
        <h3 className="mb-5 font-semibold text-gray-100 text-2xl">{title}</h3>
      )}
      <div
        className={cn(`tradingview-widget-container`, className)}
        ref={container}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{ height: "calc(100% - 32px)", width: "100%" }}
        ></div>
        <div className="tradingview-widget-copyright">
          <a
            href="https://www.tradingview.com/symbols/BTCUSD/?exchange=BINANCE"
            rel="noopener nofollow"
            target="_blank"
          >
            <span className="blue-text">{title}</span>
          </a>
          <span className="trademark"> by TradingView</span>
        </div>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
