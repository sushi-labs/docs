---
sidebar_position: 1
---

# Overview

We’re used to the idea of exchanges releasing new automated market makers (AMMs) with each new version (e.g. Uni v3 or Curve v2). They’re usually hard-coded pools (AMMs) into an interface where users can swap/add liquidity. Instead of yet another AMM, Trident is a new standard that any other AMM can build on top of and synergize with. While Trident has the ability to create functionality for users to make swaps and add/remove liquidity, it is much more than just a hard-coded swap environment (AMM).

## Trident Is A Framework

In the recent past, it has been customary for exchanges to release a new automated market maker with each new version. Uniswap v3 and Curve v2, for instance, hard-coded pool types (AMMs) into an interface that users can employ to swap or add liquidity. This custom has likely created the misconception that Trident is also an AMM, or a collection of AMMs. While Trident has the ability to host AMMs that allow users to make swaps and add/remove liquidity, it is not itself a specific AMM. As we continue to roll Trident out across more chains, it is imperative to clarify what Trident actually is.

## An AMM Production Framework

Trident is a production framework for building and deploying AMMs, but it is not just an AMM itself. While AMMs can be created using the Trident code, there isn’t a specific AMM at the heart of Trident; instead, there is a framework for creating any AMM anyone would ever need. The concept behind this framework is that hard-coded swap environments (like those found in Uniswap, Curve and Balancer) all necessitate the same underlying methods, and can therefore, be consolidated into a single interface. By consolidating them into an interface, the development process can occur more rapidly at a community level. For all intents and purposes, this interface, which we are calling the IPool interface, is also a discovery in the nature of liquidity at the point of execution. There are only so many things you need to do with a pool design, so pool designs will invariably follow the same patterns.

## Programming To An Interface

The aforementioned methods (swap, flashSwap, mint, burn, etc.) are collected in the IPool interface, which is extended in every Trident pool contract. In that sense, IPool is at the crux of the Trident production framework. The value of this framework is that it helps to streamline development. Pool types have reached a point of complete saturation in the Ethereum development environment and beyond, and they would all benefit from consolidation into an interface that allows developers to make advancements rapidly and collectively. Much like the ERC-20 token standard was needed for token types to become efficient, the IPool standard is needed to make pool types more efficient. Any new innovative, inventive, blistering edge pool type can be built using IPool — a pool for trading decentralized options, a pool for infinitely many stablecoins, a pool for zero coupon bonds, to name but a few; the possibilities are endless!

The framework design pattern used by Trident is known as interface-based programming, which inherently comes with additional advantages in the context of Sushi’s future growth:

-   Any future AMM that might be competitive in DeFi can be integrated into Trident
-   Dynamic liquidity types can be created and added using the existing framwork, without requiring a new framework to be created and deployed from scratch
-   Counterproductive game theoretics can be prevented in advance by projects preparing their liquidity to go to market - that is, you can prepare pool types to fit your own strategies
-   External developers can engineer high volume pools, and earn from the fees
