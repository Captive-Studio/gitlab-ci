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

# 1️⃣ Include remote common configuration
include:
  - project: captive/gitlab-ci
    file: '/Auto-Devops.gitlab-ci.yml'
    ref: v1.2.3
    # OR Unstable / latest version
    # ref: main

# 2️⃣ Customize configuration (Optional)
variables:
  # @see https://github.com/Captive-Studio/gitlab-ci/blob/main/Auto-Devops/variables.gitlab-ci.yml
  REVIEW_ENABLED: 'true'
  AUTO_DEVOPS_PLATFORM_TARGET: 'SCALINGO'
  # ...
```

## Features

- 🚀 Simple configuration for developer
- ✓ Supported Technologies
  - Ruby
  - NodeJS
  - Docker
- ⛙ Merge request workflow :
  - Pipelines enabled for `main`, `develop` branch
  - Pipelines enabled for merge requests
  - ⚠️ No pipeline for detached branches (to avoid duplication with branch)
- 📦 Deploy platform :
  - ✓ Scalingo `AUTO_DEVOPS_PLATFORM_TARGET: 'SCALINGO'`
  - ✓ Heroku `AUTO_DEVOPS_PLATFORM_TARGET: 'HEROKU'`
  - ✓ Makefile `AUTO_DEVOPS_PLATFORM_TARGET: 'MAKEFILE'` (custom deploy script)

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

1. Create a branch for testing CI__ _(ex: `ci/autodevops`)_

2. Configure `.gitlab-ci.yml` in the project repository

    ⚠️ Never commit `SCALINGO_API_TOKEN` value in `.gitlab-ci.yml`

    ```yml
    # .gitlab-ci.yml
    variables:
        AUTO_DEVOPS_PLATFORM_TARGET: 'SCALINGO'
        SCALINGO_API_TOKEN: $CAPTIVE_SCALINGO_API_TOKEN # OR other variable
        SCALINGO_APP: 'my-app' # By default, deployment will use app "$SCALINGO_APP-$CI_ENVIRONMENT_NAME" (ex: my-app-staging)
        # Overrides (Optional)
        # SCALINGO_APP_STAGING: 'my-app-preprod-custom' 
        # SCALINGO_APP_PRODUCTION: 'my-app-custom-prod-custom'
    ```

3. Check that job `scalingo:review:staging` is present and successful (manual trigger is required)

4. Merge branch into default branch

</details>

<details>
<summary>Deploy on Heroku</summary>

```yml
# .gitlab-ci.yml
variables:
    AUTO_DEVOPS_PLATFORM_TARGET: 'HEROKU'
    HEROKU_APP: 'my-app'  # Can be overridden with SCALINGO_APP_STAGING / SCALINGO_APP_PRODUCTION
```

</details>

<details>
<summary>Deploy with Makefile</summary>

```yml
# .gitlab-ci.yml
variables:
    AUTO_DEVOPS_PLATFORM_TARGET: 'MAKEFILE'
```

</details>

## Contributing

Here are good `gitlab-ci.yml` used as base / inspiration :

- [Gitlab templates](https://gitlab.com/gitlab-org/gitlab-foss/-/blob/master/lib/gitlab/ci/templates)
- [La fabrique du gouvernement français](https://gitlab.fabrique.social.gouv.fr/socialgouv/gitlab-ci-yml)

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
