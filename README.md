<!-- AUTO-GENERATED-CONTENT:START (PKGJSON:template=# Captive GitlabCI configuration _(${name})_) -->
# Captive GitlabCI configuration _(@captive/gitlab-ci)_
<!-- AUTO-GENERATED-CONTENT:END -->

[![License][license-image]][license-url]

<!-- AUTO-GENERATED-CONTENT:START (PKGJSON:template=> ${description}&unknownTxt= ) -->
> Shared Captive GitlabCI configuration
<!-- AUTO-GENERATED-CONTENT:END -->

## Getting Started

## Usage

### GitlabCI Configuration

```yml
# .gitlab-ci.yml
include:
  - remote: https://raw.githubusercontent.com/Captive-Studio/gitlab-ci/main/Auto-Devops.gitlab-ci.yml

```

## Features

- Simple configuration for developer
- Technologies supported
  - Ruby
  - NodeJS
  - Docker

## Recipes

<details>
<summary>Disable Review</summary>

```yml
# .gitlab-ci.yml
variables:
    REVIEW_DISABLED: 'true' # Disable Review
```

</details>
<details>
<summary>Deploy on Scalingo</summary>

```yml
# .gitlab-ci.yml
variables:
    AUTO_DEVOPS_PLATFORM_TARGET: 'SCALINGO'
```

</details>

## License
<!-- AUTO-GENERATED-CONTENT:START (PKGJSON:template=[${license}][license-url] © ${author}) -->
[MIT][license-url] © Captive Studio
<!-- AUTO-GENERATED-CONTENT:END -->

<!-- VARIABLES -->

<!-- AUTO-GENERATED-CONTENT:START (PKGJSON:template=[package-version-svg]: https://img.shields.io/npm/v/${name}.svg?style=flat-square) -->
<!-- AUTO-GENERATED-CONTENT:END -->
<!-- AUTO-GENERATED-CONTENT:START (PKGJSON:template=[package-url]: https://www.npmjs.com/package/${name}) -->
<!-- AUTO-GENERATED-CONTENT:END -->
<!-- AUTO-GENERATED-CONTENT:START (PKGJSON:template=[license-image]: https://img.shields.io/badge/license-${license}-green.svg?style=flat-square) -->
[license-image]: https://img.shields.io/badge/license-MIT-green.svg?style=flat-square
<!-- AUTO-GENERATED-CONTENT:END -->
[license-url]: ../../LICENSE
