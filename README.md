<!-- AUTO-GENERATED-CONTENT:START (PKGJSON:template=# Captive GitlabCI configuration _(${name})_) -->
# Captive GitlabCI configuration _(@captive/gitlab-ci)_
<!-- AUTO-GENERATED-CONTENT:END -->

[![License][license-image]][license-url]

<!-- AUTO-GENERATED-CONTENT:START (PKGJSON:template=> ${description}&unknownTxt= ) -->
> Shared Captive GitlabCI configuration
<!-- AUTO-GENERATED-CONTENT:END -->

## Getting Started

This project aims to make GitlabCI configuration easier for each project. One include to build them all !

## Features

- 🚀 Zero configuration philosophy, use variables to configure jobs
- ✓ Supported Technologies
  - Ruby
  - NodeJS
  - Docker
- ⛙ Merge request workflow :
  - Pipelines enabled for `main` branch (`develop` for backward compatibility)
  - Pipelines enabled for merge requests
  - ⚠️ No pipeline for detached branches (to avoid duplication with branch)
- 📦 Deploy platform :
  - ✓ Scalingo `AUTO_DEVOPS_PLATFORM_TARGET: 'SCALINGO'`
  - ✓ Heroku `AUTO_DEVOPS_PLATFORM_TARGET: 'HEROKU'`
  - ✓ Makefile `AUTO_DEVOPS_PLATFORM_TARGET: 'MAKEFILE'` (custom deploy script)

## Usage

### 1. Configure Build

```yml
# .gitlab-ci.yml

# 1.1 Include remote common configuration
include:
  - project: captive/gitlab-ci
    file: /Auto-Devops.gitlab-ci.yml
    ref: 1.16.3
    # OR Unstable / latest version
    # ref: main

# 1.2 Commit & Push

# 1.3 Check that correct pipelines are running and passing

```

### 2. Configure deployment

Depending on the target development platform, choose one :

<details>
<summary>Configure deployment on <b>Scalingo</b></summary>

1. Create a branch for testing CI _(ex: `ci/autodevops`)_

2. Configure `.gitlab-ci.yml` in the project repository

    ⚠️ Never commit `SCALINGO_API_TOKEN` value in `.gitlab-ci.yml`

    ⚠️ Default configuration will deploy to Scalingo App named `$CI_PROJECT_NAME-$CI_PROJECT_ENVIRONMENT`

    ```yml
    # .gitlab-ci.yml
    variables:
        AUTO_DEVOPS_PLATFORM_TARGET: SCALINGO
        SCALINGO_API_TOKEN: $CAPTIVE_SCALINGO_API_TOKEN # OR other variable

        # Override variables if needed (Optional)
        # 
        # APP_NAME: 'my-special-app' => override only $CI_PROJECT_NAME
        # SCALINGO_APP: '' => override only $CI_PROJECT_NAME for scalingo deployments
        # SCALINGO_APP_STAGING: 'my-special-app-preprod-custom' => specify app full name only for staging environment
        # SCALINGO_APP_PRODUCTION: 'my-special-app-custom-prod-custom' => specify app full name only for production environment
    ```

3. Check that job `scalingo:review:staging` is present and successful (manual trigger is required)

4. Merge branch into default branch

</details>

<details>
<summary>Configure deployment on <b>Heroku</b></summary>

1. Create a branch for testing CI _(ex: `ci/autodevops`)_

2. Configure `.gitlab-ci.yml` in the project repository

    ⚠️ Never commit `HEROKU_API_KEY` value in `.gitlab-ci.yml`

    ⚠️ Default configuration will deploy to Heroku App named `$CI_PROJECT_NAME-$CI_PROJECT_ENVIRONMENT`

    ```yml
    # .gitlab-ci.yml
    variables:
        AUTO_DEVOPS_PLATFORM_TARGET: HEROKU
        HEROKU_API_KEY: $CAPTIVE_HEROKU_API_KEY # OR other variable

        # ⚠️ Will deploy to Heroku app named $CI_PROJECT_NAME-$CI_PROJECT_ENVIRONMENT

        # Override variables if needed (Optional)
        # 
        # APP_NAME: 'my-special-app' => override only $CI_PROJECT_NAME
        # HEROKU_APP: '' => override only $CI_PROJECT_NAME for Heroku deployments
        # HEROKU_APP_STAGING: 'my-special-app-preprod-custom' => specify app full name only for staging environment
        # HEROKU_APP_PRODUCTION: 'my-special-app-custom-prod-custom' => specify app full name only for production environment
    ```

</details>

<details>
<summary>Configure deployment with <b>Makefile</b></summary>

```yml
# .gitlab-ci.yml
variables:
    AUTO_DEVOPS_PLATFORM_TARGET: MAKEFILE
```

</details>

### 3. 🎉 You're done

## Recipes

<details>
<summary>Pin version (Ruby, NodeJS, etc)</summary>

```yml
# .gitlab-ci.yml
variables:
    RUBY_VERSION: 'x.x.x' # It will use image `cimg/ruby-${RUBY_VERSION}` and `cimg/ruby-${RUBY_VERSION}-browsers` for all `ruby:*` jobs
    NODEJS_VERSION: 'x.x.x' # It will use image `cimg/node-${NODEJS_VERSION}` and `cimg/node-${NODEJS_VERSION}-browsers` for all `node:*` jobs
```

</details>

<details>
<summary>Enable / Disable job</summary>

ℹ️ By default most jobs are enabled, here are some examples to disable jobs if needed

> ⚠️ Warning : Gitlab CI spec states that variables are always `string` or `null` (i.e. `VAR: true` is not valid)
> To support `VAR: 'false'`, each job is implementing custom test `$VAR != 'false'`
>
> - False values : `''`, `null` + `false`
> - True values : any other non false value

```yml
# .gitlab-ci.yml
variables:

    # Example: Disable Build jobs
    BUILD_ENABLED: ''

    # Example: Disable Code quality jobs (ESLint, Rubocop, etc)
    CODE_QUALITY_ENABLED: ''

    # Example: Disable Test & Test system step
    TEST_ENABLED: ''
    TEST_SYSTEM_ENABLED: ''

    # Example: Disable Review step
    REVIEW_ENABLED: ''

    # Example: Disable Deploy to staging step
    STAGING_ENABLED: ''

    # Example: Disable Deploy to canary step
    CANARY_ENABLED: ''

    # Example: Disable Gitlab default variable to disable production deployment
    CI_DEPLOY_FREEZE: ''
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
