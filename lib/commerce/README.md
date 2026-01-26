## Domain Boundary

All domain data consumed by the UI must be validated through adapters.

Rules:
- UI MUST NOT import Zod schemas directly
- UI MUST NOT consume unvalidated data
- Adapters are the only runtime entry point to domain contracts

Violating this rule breaks domain guarantees.

## Commerce Architecture Documentation Addendum

# Collections v1 — Runtime Adapters and Consumers

This section documents the architectural decisions for Collection v1 within the commerce domain.

Architecture Flow:
Contract → Runtime Adapter → Commerce API → UI Consumer

Key Decisions:
- Source of truth for Collection structure: lib/commerce/contracts/Collection.schema
- Runtime validation performed using Zod safeParse
- Mandatory adapter: lib/commerce/adapters/collection.adapter.js
- Standardized result model: Result { success, data | error }
- UI layers consume only resolved domain data
- No data normalization allowed in UI
- No additional provider introduced; mock provider used
- Consumers kept minimal (list and detail where applicable)

Guarantees:
- Consistency with Product domain pattern
- No silent failures
- Separation of domain validation from presentation

# Provider Adapter Layer

This layer introduces a structural boundary between external provider data and domain contracts.

Flow:
Provider → Provider Adapter → Domain Adapter → Result

Rules:
- Providers never return domain contracts directly
- Provider adapters validate external data structure
- Domain adapters validate domain contract v1
- Providers must not import domain Zod schemas
- Providers must not return Result objects

Outcome:
- Double contract barrier established
- Infrastructure isolated from domain validation

# Integration Layer

The Integration Layer formalizes separation between UI and the commerce domain.

Responsibilities:
- Fetch policies
- Network error handling
- Technical error normalization
- Separation between infrastructure failures and domain failures

Rules:
- UI must not call commerce directly
- Integration handles technical failures
- Integration does not validate domain contracts
- Integration translates technical failures to Result.failure
- No business logic allowed in integration layer

Outcome:
- Stable boundary for data loading
- Consistent error propagation model

# Domain Guarantees

This section consolidates structural guarantees of Product and Collection v1 domain models.

Enhancements introduced:
- Strict normalization of images[]
- tags formalized as consistently structured arrays
- Integrity alignment between Collection.products and Product.handle
- Cross-entity validation rules enforced at contract level

Constraints:
- Contract version remains v1
- No new public fields introduced
- Backward compatibility preserved
- Result pattern unchanged
- No UI impact

Outcome:
- Domain model now production-grade consistent
- Reduced risk of silent data inconsistencies