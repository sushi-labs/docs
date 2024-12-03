# Aggregator

The Sushi Aggregator is a robust DeFi tool designed to optimize trade execution across multiple decentralized exchanges (DEXs). It enables users to achieve the best possible rates by aggregating liquidity from various sources, thereby minimizing slippage and maximizing returns.

At its core, the Sushi Aggregator relies on two key components:

1. Tines Pathfinding Algorithm: Tines, the off-chain routing engine, uses the Dijkstra shortest path algorithm to calculate the most efficient trading routes. It considers multiple factors, such as liquidity, fees, gas cost, and price impact, to create an optimal path for executing trades.

2. RouteProcessor Smart Contract: Once Tines determines the best route, the RouteProcessor smart contract comes into play. This on-chain contract is responsible for executing the multi-hop or multi-platform trades precisely as calculated by Tines. It handles all token swaps and ensures smooth and secure execution of the proposed route without requiring users to interact with multiple DEXs.

By combining the computational efficiency of off-chain optimization with the reliability of on-chain execution, the Sushi Aggregator provides a seamless and efficient trading experience, catering to both casual users and sophisticated traders.