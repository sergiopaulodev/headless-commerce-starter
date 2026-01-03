# Commerce Domain Contracts (v1)

This document defines the stable v1 domain contracts used by the commerce layer.
These contracts are frozen and serve as the baseline for further evolution.

## Overview

This project is a headless ecommerce frontend built with Next.js App Router.

It implements a domain-driven architecture with a custom commerce layer that decouples the frontend from any specific ecommerce provider (e.g. Shopify).

## Implemented Domains (v1)

- Product (read-only)
- Collection (read-only)
- Cart (read-only)
- Search (read-only)

## Architecture

- Frontend consumes only domain facades (`lib/commerce`)
- External providers are isolated via adapters
- Domain contracts are explicitly defined and validated with Zod
- UI components contain no business logic

## Scope & Limitations

This project intentionally does NOT implement:

- Checkout flow
- Payments
- Inventory management
- Discounts or promotions
- User authentication
- Persistence strategy
- SEO optimization
- Performance optimizations

## Project Status

This project is considered a technical MVP and is intentionally frozen.

Further development would require:
- Versioned domain contracts (v2+)
- Redefinition of scope
- Explicit product requirements


# Product Contract v1

This document defines the stable Product domain contract.

## Invariants
- Stable shape validated by Zod
- Frontend consumes only this contract
- Providers must adapt to it

## Exclusions
- Variants
- Inventory
- Discounts
- Cart / Checkout

Any breaking change requires a new version.

# Collection Contract v1

This document defines the stable Collection domain contract.

## Invariants
- Stable shape validated by Zod
- Frontend consumes only this contract
- Providers must adapt to it
- `handle` is the public identifier and routing key
- `products` references Product handles
- Product order is significant

## Exclusions
- Smart / dynamic collections
- Filters and pagination
- SEO metadata
- Collection hierarchies
- Embedded product data

Any breaking change requires a new version.

# Cart Contract v1

This document defines the stable Cart domain contract.

## Invariants
- Stable shape validated by Zod
- Frontend consumes only this contract
- Providers must adapt to it
- Cart lines reference Products by `handle`
- `quantity` is always >= 1
- All cart lines share the same currency
- No duplicated product handles per cart
- A cart may be empty

## Exclusions
- Checkout
- Payments
- Discounts / coupons
- Inventory validation
- User accounts
- Persistence strategy
- Multi-currency carts

Any breaking change requires a new version.

