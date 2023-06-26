# 2. Disable FF_USE_FASTZIP

Date: 2023-06-26

## Status

Accepted

## Context

For performance reasons we chose to enable `FF_USE_FASTZIP: true`. But recently we had some unexpected behaviors.

Example :
<https://git.captive.fr/captive/vera/vera-application/-/jobs/281662>

## Decision

Set `FF_USE_FASTZIP: false`. The performance tradeoff is OK. We lose a little but a CI that behaves consistently is more important

## Consequences

