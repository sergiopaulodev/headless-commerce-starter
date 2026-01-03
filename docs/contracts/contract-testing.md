# Contract Tests

This project uses **contract tests** to guarantee the stability and correctness
of domain contracts exposed by the commerce layer.

Contract tests are a foundational mechanism to evolve the system safely
without breaking existing consumers.

---

## What Are Contract Tests?

Contract tests validate that **domain contracts** conform to their declared
schemas and invariants.

In this project, contracts are defined using **Zod schemas** and represent
the single source of truth for:

- Domain shape
- Required vs optional fields
- Invariants that must always hold
- Versioned public interfaces

Contract tests ensure that these guarantees remain valid over time.

---

## What Contract Tests Cover

Contract tests verify:

- Schema validity for expected valid inputs
- Rejection of invalid or incomplete inputs
- Domain invariants enforced via refinements
- Backward compatibility within the same contract version (v1)

They operate purely at the **domain level**, without external dependencies.

---

## What Contract Tests Do NOT Cover

Contract tests intentionally do **not** cover:

- UI behavior
- Rendering logic
- API integration
- Data fetching
- Performance characteristics
- Business workflows beyond declared invariants

They are not end-to-end tests and are not a replacement for integration testing.

---

## Why Contract Tests Are Mandatory Before Evolving Contracts

Contracts are consumed by multiple layers (UI, adapters, providers).

Changing a contract without validating its guarantees introduces
high risk and hidden regressions.

Contract tests provide:

- Early failure signals
- Explicit documentation of domain expectations
- Confidence to refactor or extend contracts
- Protection against accidental breaking changes

No contract version may evolve without passing its contract tests.

---

## How to Run Contract Tests

Run all contract tests using:

```bash
pnpm vitest
```

```text
lib/commerce/contracts/__tests__
```

