## Domain Boundary

All domain data consumed by the UI must be validated through adapters.

Rules:
- UI MUST NOT import Zod schemas directly
- UI MUST NOT consume unvalidated data
- Adapters are the only runtime entry point to domain contracts

Violating this rule breaks domain guarantees.
