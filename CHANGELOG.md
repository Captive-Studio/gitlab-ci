## [2.20.3](https://git.captive.fr/captive/gitlab-ci/compare/2.20.2...2.20.3) (2023-12-19)





# 2.20.3 (2023-12-19)

## 🐛 Bug Fixes
- [`6a2a69a`](https://gitlab.com/captive/gitlab-ci/-/commit/6a2a69a)  Fix autodevops compatibility

## [2.20.2](https://git.captive.fr/captive/gitlab-ci/compare/2.20.1...2.20.2) (2023-12-18)





# 2.20.2 (2023-12-18)

## 🐛 Bug Fixes
- [`5ecd3da`](https://gitlab.com/captive/gitlab-ci/-/commit/5ecd3da)  Remove CONTAINER_CI_TAG_CACHE

## [2.20.1](https://git.captive.fr/captive/gitlab-ci/compare/2.20.0...2.20.1) (2023-12-17)





# 2.20.1 (2023-12-17)

## 🐛 Bug Fixes
- [`0ee3230`](https://gitlab.com/captive/gitlab-ci/-/commit/0ee3230)  Add CI_SHELL_STRICT to be able to disable set -euo pipefail

- [`8b78fac`](https://gitlab.com/captive/gitlab-ci/-/commit/8b78fac)  Fix gitlab-ci-token hard coded value

# [2.20.0](https://git.captive.fr/captive/gitlab-ci/compare/2.19.0...2.20.0) (2023-12-14)





# 2.20.0 (2023-12-14)

## ✨ New Features
- [`e39bba3`](https://gitlab.com/captive/gitlab-ci/-/commit/e39bba3)  Add default environment variable for docker

## 🐛 Bug Fixes
- [`6e9b83c`](https://gitlab.com/captive/gitlab-ci/-/commit/6e9b83c)  Remove need for terraform:apply:*

- [`529dec2`](https://gitlab.com/captive/gitlab-ci/-/commit/529dec2)  Fix terraform validate, plan and apply rule bug

# [2.19.0](https://git.captive.fr/captive/gitlab-ci/compare/2.18.0...2.19.0) (2023-12-08)





# 2.19.0 (2023-12-08)

## ✨ New Features
- [`4af9d7b`](https://gitlab.com/captive/gitlab-ci/-/commit/4af9d7b)  Add support for .tool-versions loading

# [2.18.0](https://git.captive.fr/captive/gitlab-ci/compare/2.17.0...2.18.0) (2023-12-07)





# 2.18.0 (2023-12-07)

## ✨ New Features
- [`16aff71`](https://gitlab.com/captive/gitlab-ci/-/commit/16aff71)  Upgrade docker dind v24

- [`6ac46e6`](https://gitlab.com/captive/gitlab-ci/-/commit/6ac46e6)  Add default before_script

## 🐛 Bug Fixes
- [`b2d5d7d`](https://gitlab.com/captive/gitlab-ci/-/commit/b2d5d7d)  Fix login method

- [`10166c8`](https://gitlab.com/captive/gitlab-ci/-/commit/10166c8)  Add warning when SCALINGO_API_TOKEN is not set

- [`5f16f87`](https://gitlab.com/captive/gitlab-ci/-/commit/5f16f87)  Fix wrong reference to script .autodevops:script:shell-set-error

# [2.17.0](https://git.captive.fr/captive/gitlab-ci/compare/2.16.0...2.17.0) (2023-12-01)





# 2.17.0 (2023-12-01)

## ✨ New Features
- [`576969c`](https://gitlab.com/captive/gitlab-ci/-/commit/576969c)  Enable brakeman audit

## 🐛 Bug Fixes
- [`47beed8`](https://gitlab.com/captive/gitlab-ci/-/commit/47beed8)  Use rubycritic with bundle

# [2.16.0](https://git.captive.fr/captive/gitlab-ci/compare/2.15.3...2.16.0) (2023-11-21)





# 2.16.0 (2023-11-21)

## ✨ New Features
- [`4cfb15d`](https://gitlab.com/captive/gitlab-ci/-/commit/4cfb15d)  Use latest NodeJS LTS version 20.9.0

## [2.15.3](https://git.captive.fr/captive/gitlab-ci/compare/2.15.2...2.15.3) (2023-11-21)





# 2.15.3 (2023-11-21)

## 🐛 Bug Fixes
- [`c3e8979`](https://gitlab.com/captive/gitlab-ci/-/commit/c3e8979)  Add missing dangerfile extensions

- [`7d10536`](https://gitlab.com/captive/gitlab-ci/-/commit/7d10536)  Fix mispelled Rake job

## [2.15.2](https://git.captive.fr/captive/gitlab-ci/compare/2.15.1...2.15.2) (2023-11-21)





# 2.15.2 (2023-11-21)

## 🐛 Bug Fixes
- [`ec980ee`](https://gitlab.com/captive/gitlab-ci/-/commit/ec980ee)  Fix silent rake build job

- [`f123038`](https://gitlab.com/captive/gitlab-ci/-/commit/f123038)  Fix test-system implementation

- [`d42ba36`](https://gitlab.com/captive/gitlab-ci/-/commit/d42ba36)  Fix rake test implementation

## [2.15.1](https://git.captive.fr/captive/gitlab-ci/compare/2.15.0...2.15.1) (2023-11-17)





# 2.15.1 (2023-11-17)

## 🐛 Bug Fixes
- [`85ffaf4`](https://gitlab.com/captive/gitlab-ci/-/commit/85ffaf4)  Fix artifact wildcard

# [2.15.0](https://git.captive.fr/captive/gitlab-ci/compare/2.14.2...2.15.0) (2023-11-16)





# 2.15.0 (2023-11-16)

## ✨ New Features
- [`114ba0e`](https://gitlab.com/captive/gitlab-ci/-/commit/114ba0e)  Add RubyCritic integration

# 2.14.2 (2023-10-23)

## 🐛 Bug Fixes
- [`576f74c`](https://gitlab.com/captive/gitlab-ci/-/commit/576f74c)  Check lock files at installation



## [2.14.2](https://git.captive.fr/captive/gitlab-ci/compare/2.14.1...2.14.2) (2023-10-23)

# 2.14.1 (2023-10-13)

## 🐛 Bug Fixes
- [`d12ec9c`](https://gitlab.com/captive/gitlab-ci/-/commit/d12ec9c)  Retry failed terraform jobs

- [`bd8066d`](https://gitlab.com/captive/gitlab-ci/-/commit/bd8066d)  Retry makefile jobs

- [`d797534`](https://gitlab.com/captive/gitlab-ci/-/commit/d797534)  Retry nodejs jobs

- [`d9916d9`](https://gitlab.com/captive/gitlab-ci/-/commit/d9916d9)  Retry ruby jobs



## [2.14.1](https://git.captive.fr/captive/gitlab-ci/compare/2.14.0...2.14.1) (2023-10-13)

# 2.14.0 (2023-10-13)

## ✨ New Features
- [`eca78b0`](https://gitlab.com/captive/gitlab-ci/-/commit/eca78b0)  Rename terraform jobs

- [`2f80141`](https://gitlab.com/captive/gitlab-ci/-/commit/2f80141)  Use needs instead of dependencies for better parallelism



# [2.14.0](https://git.captive.fr/captive/gitlab-ci/compare/2.13.1...2.14.0) (2023-10-13)

# 2.13.1 (2023-10-09)

## 🐛 Bug Fixes
- [`5ba1f38`](https://gitlab.com/captive/gitlab-ci/-/commit/5ba1f38)  Fix spacing

- [`7298414`](https://gitlab.com/captive/gitlab-ci/-/commit/7298414)  Fix SAST at start to be overridable

- [`0c71fab`](https://gitlab.com/captive/gitlab-ci/-/commit/0c71fab)  Add missing include



## [2.13.1](https://git.captive.fr/captive/gitlab-ci/compare/2.13.0...2.13.1) (2023-10-09)

# 2.13.0 (2023-10-07)

## ✨ New Features
- [`bced0f4`](https://gitlab.com/captive/gitlab-ci/-/commit/bced0f4)  Use only semgrep scanning



# [2.13.0](https://git.captive.fr/captive/gitlab-ci/compare/2.12.0...2.13.0) (2023-10-07)

# 2.12.0 (2023-09-25)

## ✨ New Features
- [`c786ab0`](https://gitlab.com/captive/gitlab-ci/-/commit/c786ab0)  Add DangerJS support



# [2.12.0](https://git.captive.fr/captive/gitlab-ci/compare/2.11.6...2.12.0) (2023-09-25)

# 2.11.6 (2023-09-22)

## 🐛 Bug Fixes
- [`bc2f421`](https://gitlab.com/captive/gitlab-ci/-/commit/bc2f421)  Disable ruby_download_cache



## [2.11.6](https://git.captive.fr/captive/gitlab-ci/compare/2.11.5...2.11.6) (2023-09-22)

# 2.11.5 (2023-09-22)

## 🐛 Bug Fixes
- [`6240924`](https://gitlab.com/captive/gitlab-ci/-/commit/6240924)  Fix install cache



## [2.11.5](https://git.captive.fr/captive/gitlab-ci/compare/2.11.4...2.11.5) (2023-09-22)

# 2.11.4 (2023-09-22)

## 🐛 Bug Fixes
- [`b334892`](https://gitlab.com/captive/gitlab-ci/-/commit/b334892)  Workaround for ruby_download_cache not working



## [2.11.4](https://git.captive.fr/captive/gitlab-ci/compare/2.11.3...2.11.4) (2023-09-22)

# 2.11.3 (2023-09-22)

## 🐛 Bug Fixes
- [`1ea35bf`](https://gitlab.com/captive/gitlab-ci/-/commit/1ea35bf)  Fix unknown switch --prefer-local



## [2.11.3](https://git.captive.fr/captive/gitlab-ci/compare/2.11.2...2.11.3) (2023-09-22)

# 2.11.2 (2023-09-22)

## 🐛 Bug Fixes
- [`4beb0df`](https://gitlab.com/captive/gitlab-ci/-/commit/4beb0df)  Fix bundle dump output

- [`ef381dc`](https://gitlab.com/captive/gitlab-ci/-/commit/ef381dc)  Ensure ruby cache exists

- [`2cb0bf8`](https://gitlab.com/captive/gitlab-ci/-/commit/2cb0bf8)  Disable BUNDLE_CACHE_PATH

- [`a48154a`](https://gitlab.com/captive/gitlab-ci/-/commit/a48154a)  Use --prefer-local to avoid download if possible

- [`0a940dd`](https://gitlab.com/captive/gitlab-ci/-/commit/0a940dd)  Conditionnally apply mkdir if BUNDLE_CACHE_PATH



## [2.11.2](https://git.captive.fr/captive/gitlab-ci/compare/2.11.1...2.11.2) (2023-09-22)

# 2.11.1 (2023-09-22)

## 🐛 Bug Fixes
- [`cc800b5`](https://gitlab.com/captive/gitlab-ci/-/commit/cc800b5)  Display bundle informations



## [2.11.1](https://git.captive.fr/captive/gitlab-ci/compare/2.11.0...2.11.1) (2023-09-22)

# 2.11.0 (2023-09-21)

## ✨ New Features
- [`20f528b`](https://gitlab.com/captive/gitlab-ci/-/commit/20f528b)  Use reference for nodejs cache

- [`00514c8`](https://gitlab.com/captive/gitlab-ci/-/commit/00514c8)  Add ruby download cache

- [`e384dd8`](https://gitlab.com/captive/gitlab-ci/-/commit/e384dd8)  Use install_cache in nodejs jobs



# [2.11.0](https://git.captive.fr/captive/gitlab-ci/compare/2.10.4...2.11.0) (2023-09-21)

# 2.10.4 (2023-09-21)

## 🐛 Bug Fixes
- [`493473c`](https://gitlab.com/captive/gitlab-ci/-/commit/493473c)  Fix missing nodejs:install job error



## [2.10.4](https://git.captive.fr/captive/gitlab-ci/compare/2.10.3...2.10.4) (2023-09-21)

# 2.10.3 (2023-09-21)

## 🐛 Bug Fixes
- [`832bbc5`](https://gitlab.com/captive/gitlab-ci/-/commit/832bbc5)  Fix missing slack:failure job



## [2.10.3](https://git.captive.fr/captive/gitlab-ci/compare/2.10.2...2.10.3) (2023-09-21)

# 2.10.2 (2023-09-18)

## 🐛 Bug Fixes
- [`de2586f`](https://gitlab.com/captive/gitlab-ci/-/commit/de2586f)  Move slack notification when on top level



## [2.10.2](https://git.captive.fr/captive/gitlab-ci/compare/2.10.1...2.10.2) (2023-09-18)

# 2.10.1 (2023-09-18)

## 🐛 Bug Fixes
- [`5567c00`](https://gitlab.com/captive/gitlab-ci/-/commit/5567c00)  Enable allow_failure: true for slack notifications

- [`ee0fb3f`](https://gitlab.com/captive/gitlab-ci/-/commit/ee0fb3f)  Change slack notification stage to .post



## [2.10.1](https://git.captive.fr/captive/gitlab-ci/compare/2.10.0...2.10.1) (2023-09-18)

# 2.10.0 (2023-09-18)

## ✨ New Features
- [`5f271bc`](https://gitlab.com/captive/gitlab-ci/-/commit/5f271bc)  Add ruby:rake:build



# [2.10.0](https://git.captive.fr/captive/gitlab-ci/compare/2.9.1...2.10.0) (2023-09-18)

# 2.9.1 (2023-09-15)

## 🐛 Bug Fixes
- [`af5852c`](https://gitlab.com/captive/gitlab-ci/-/commit/af5852c)  Fix SLACK_FAILURE_CHANNEL



## [2.9.1](https://git.captive.fr/captive/gitlab-ci/compare/2.9.0...2.9.1) (2023-09-15)

# 2.9.0 (2023-09-14)

## ✨ New Features
- [`ff8431d`](https://gitlab.com/captive/gitlab-ci/-/commit/ff8431d)  Add Slack notifications

- [`a95ad3a`](https://gitlab.com/captive/gitlab-ci/-/commit/a95ad3a)  Améliore le message de notification



# [2.9.0](https://git.captive.fr/captive/gitlab-ci/compare/2.8.0...2.9.0) (2023-09-14)

# 2.8.0 (2023-08-16)

## ✨ New Features
- [`8cbdd1b`](https://gitlab.com/captive/gitlab-ci/-/commit/8cbdd1b)  Add .terraform:* jobs

- [`dd1242e`](https://gitlab.com/captive/gitlab-ci/-/commit/dd1242e)  Add Jobs/SAST-IaC

- [`1b254a9`](https://gitlab.com/captive/gitlab-ci/-/commit/1b254a9)  Disable staging jobs when STAGING_ENABLED is falsy

- [`4cc9d90`](https://gitlab.com/captive/gitlab-ci/-/commit/4cc9d90)  Add default terraform jobs



# [2.8.0](https://git.captive.fr/captive/gitlab-ci/compare/2.7.0...2.8.0) (2023-08-16)

# 2.7.0 (2023-08-07)

## ✨ New Features
- [`8fdf7b3`](https://gitlab.com/captive/gitlab-ci/-/commit/8fdf7b3)  Add validate stage

- [`f7fa109`](https://gitlab.com/captive/gitlab-ci/-/commit/f7fa109)  Move rubocop to validate stage

- [`75e4cf4`](https://gitlab.com/captive/gitlab-ci/-/commit/75e4cf4)  Move nodejs:lint to validate stage

## 🐛 Bug Fixes
- [`0a6e6c7`](https://gitlab.com/captive/gitlab-ci/-/commit/0a6e6c7)  nodejs:lint should need only nodejs:install



# [2.7.0](https://git.captive.fr/captive/gitlab-ci/compare/2.6.1...2.7.0) (2023-08-07)

# 2.6.1 (2023-07-25)

## 🐛 Bug Fixes
- [`962fbca`](https://gitlab.com/captive/gitlab-ci/-/commit/962fbca)  Deprecate dpl



## [2.6.1](https://git.captive.fr/captive/gitlab-ci/compare/2.6.0...2.6.1) (2023-07-25)

# 2.6.0 (2023-07-24)

## ✨ New Features
- [`43aeed7`](https://gitlab.com/captive/gitlab-ci/-/commit/43aeed7)  Migrate from dpl to scalingo cli

- [`155e3cc`](https://gitlab.com/captive/gitlab-ci/-/commit/155e3cc)  Permet de désactiver le build de Ruby ou NodeJS

## 🐛 Bug Fixes
- [`dc48937`](https://gitlab.com/captive/gitlab-ci/-/commit/dc48937)  Corrige les bugs de yaml error

- [`0bcc50b`](https://gitlab.com/captive/gitlab-ci/-/commit/0bcc50b)  Corrige les jobs ruby toujours présents



# [2.6.0](https://git.captive.fr/captive/gitlab-ci/compare/2.5.1...2.6.0) (2023-07-24)

# 2.5.1 (2023-07-20)

## 🚑 Critical Hotfixes
- [`2d953ee`](https://gitlab.com/captive/gitlab-ci/-/commit/2d953ee) ️ Remplace la variable d&#x27;env CI_BUILD_REF_NAME par CI_COMMIT_REF_NAME car deprecated



## [2.5.1](https://git.captive.fr/captive/gitlab-ci/compare/2.5.0...2.5.1) (2023-07-20)

# 2.5.0 (2023-06-26)

## ✨ New Features
- [`62a7f32`](https://gitlab.com/captive/gitlab-ci/-/commit/62a7f32)  Add needs constraint for parallelization



# [2.5.0](https://git.captive.fr/captive/gitlab-ci/compare/2.4.3...2.5.0) (2023-06-26)

# 2.4.3 (2023-06-26)

## 🐛 Bug Fixes
- [`8d4cfca`](https://gitlab.com/captive/gitlab-ci/-/commit/8d4cfca)  Fix cache restore errors



## [2.4.3](https://git.captive.fr/captive/gitlab-ci/compare/2.4.2...2.4.3) (2023-06-26)

# 2.4.2 (2023-06-26)

## 🐛 Bug Fixes
- [`a005081`](https://gitlab.com/captive/gitlab-ci/-/commit/a005081)  Revert more needs directive



## [2.4.2](https://git.captive.fr/captive/gitlab-ci/compare/2.4.1...2.4.2) (2023-06-26)

# 2.4.1 (2023-06-24)

## 🐛 Bug Fixes
- [`8ef4493`](https://gitlab.com/captive/gitlab-ci/-/commit/8ef4493)  Rollback nodejs:build dependency to nodejs:install



## [2.4.1](https://git.captive.fr/captive/gitlab-ci/compare/2.4.0...2.4.1) (2023-06-24)

# 2.4.0 (2023-06-23)

## ✨ New Features
- [`d2f7969`](https://gitlab.com/captive/gitlab-ci/-/commit/d2f7969)  Add CI_BUNDLE_CACHE_FOLDER and BUNDLE_CACHE_PATH configuration

- [`32b02bb`](https://gitlab.com/captive/gitlab-ci/-/commit/32b02bb)  Ignore .shared-cache cleaning



# [2.4.0](https://git.captive.fr/captive/gitlab-ci/compare/2.3.1...2.4.0) (2023-06-23)

# 2.3.1 (2023-06-22)

## 🐛 Bug Fixes
- [`66aa988`](https://gitlab.com/captive/gitlab-ci/-/commit/66aa988)  Fix needs artifacts missing



## [2.3.1](https://git.captive.fr/captive/gitlab-ci/compare/2.3.0...2.3.1) (2023-06-22)

# 2.3.0 (2023-06-20)

## ✨ New Features
- [`269766c`](https://gitlab.com/captive/gitlab-ci/-/commit/269766c)  Add ADR in doc



# [2.3.0](https://git.captive.fr/captive/gitlab-ci/compare/2.2.0...2.3.0) (2023-06-20)

# 2.2.0 (2023-04-29)

## ✨ New Features
- [`675f12f`](https://gitlab.com/captive/gitlab-ci/-/commit/675f12f)  Add default SAST.gitlab-ci.yml

## 🐛 Bug Fixes
- [`2aa3586`](https://gitlab.com/captive/gitlab-ci/-/commit/2aa3586)  Remove ruby:brakeman

- [`367e2f1`](https://gitlab.com/captive/gitlab-ci/-/commit/367e2f1)  Remove ruby:bundle-audit

- [`f1d1f88`](https://gitlab.com/captive/gitlab-ci/-/commit/f1d1f88)  Remove ruby:check-tools



# [2.2.0](https://git.captive.fr/captive/gitlab-ci/compare/2.1.0...2.2.0) (2023-04-29)

# 2.1.0 (2023-04-28)

## ✨ New Features
- [`b04658e`](https://gitlab.com/captive/gitlab-ci/-/commit/b04658e)  Use presidentbeef/brakeman:latest image for brakeman



# [2.1.0](https://git.captive.fr/captive/gitlab-ci/compare/2.0.4...2.1.0) (2023-04-28)

# 2.0.4 (2023-04-19)

## 🐛 Bug Fixes
- [`f3b040d`](https://gitlab.com/captive/gitlab-ci/-/commit/f3b040d)  Fix when: condition

- [`50a82e0`](https://gitlab.com/captive/gitlab-ci/-/commit/50a82e0)  Fix docker_dind before script



## [2.0.4](https://git.captive.fr/captive/gitlab-ci/compare/2.0.3...2.0.4) (2023-04-19)

# 2.0.3 (2023-04-06)

## 🐛 Bug Fixes
- [`086b083`](https://gitlab.com/captive/gitlab-ci/-/commit/086b083)  Disable review by default



## [2.0.3](https://git.captive.fr/captive/gitlab-ci/compare/2.0.2...2.0.3) (2023-04-06)

# 2.0.2 (2023-03-28)

## 🐛 Bug Fixes
- [`aaf78e3`](https://gitlab.com/captive/gitlab-ci/-/commit/aaf78e3)  Use **/junit.xml wildcard for test reports



## [2.0.2](https://git.captive.fr/captive/gitlab-ci/compare/2.0.1...2.0.2) (2023-03-28)

# 2.0.1 (2023-03-28)

## 🐛 Bug Fixes
- [`3fcc323`](https://gitlab.com/captive/gitlab-ci/-/commit/3fcc323)  Configure JEST_JUNIT_OUTPUT_NAME



## [2.0.1](https://git.captive.fr/captive/gitlab-ci/compare/2.0.0...2.0.1) (2023-03-28)

# 2.0.0 (2023-03-28)

## ✨ New Features
- [`b9c0807`](https://gitlab.com/captive/gitlab-ci/-/commit/b9c0807)  Configure default JEST_JUNIT_OUTPUT_NAME

## 💥 Breaking Changes
- [`6014388`](https://gitlab.com/captive/gitlab-ci/-/commit/6014388)  Remove makefile:rubocop



# [2.0.0](https://git.captive.fr/captive/gitlab-ci/compare/1.17.0...2.0.0) (2023-03-28)

# 1.17.0 (2023-03-22)

## ✨ New Features
- [`03954c1`](https://gitlab.com/captive/gitlab-ci/-/commit/03954c1)  Add Appflow configuration



# [1.17.0](https://git.captive.fr/captive/gitlab-ci/compare/1.16.3...1.17.0) (2023-03-22)

# 1.17.0 (2023-03-22)

## ✨ New Features
- [`03954c1`](https://gitlab.com/captive/gitlab-ci/-/commit/03954c1)  Add Appflow configuration



# [1.17.0](https://git.captive.fr/captive/gitlab-ci/compare/1.16.3...1.17.0) (2023-03-22)

# 1.16.3 (2023-03-01)

## 🐛 Bug Fixes
- [`8804f42`](https://gitlab.com/captive/gitlab-ci/-/commit/8804f42)  Fix false like values



## [1.16.3](https://git.captive.fr/captive/gitlab-ci/compare/1.16.2...1.16.3) (2023-03-01)

# 1.16.2 (2023-02-27)

## 🐛 Bug Fixes
- [`9f88be3`](https://gitlab.com/captive/gitlab-ci/-/commit/9f88be3)  Remove --force hack



## [1.16.2](https://git.captive.fr/captive/gitlab-ci/compare/1.16.1...1.16.2) (2023-02-27)

# 1.16.1 (2023-02-27)

## 🐛 Bug Fixes
- [`668c149`](https://gitlab.com/captive/gitlab-ci/-/commit/668c149)  Stop job when error for scalingo deploy



## [1.16.1](https://git.captive.fr/captive/gitlab-ci/compare/1.16.0...1.16.1) (2023-02-27)

# 1.16.0 (2023-02-24)

## ✨ New Features
- [`0bacd38`](https://gitlab.com/captive/gitlab-ci/-/commit/0bacd38)  Add support for false values



# [1.16.0](https://git.captive.fr/captive/gitlab-ci/compare/1.15.1...1.16.0) (2023-02-24)

# 1.15.1 (2023-02-17)

## 🐛 Bug Fixes
- [`92b4eb3`](https://gitlab.com/captive/gitlab-ci/-/commit/92b4eb3)  Fix makefile and docker_dind before_script conflict



## [1.15.1](https://git.captive.fr/captive/gitlab-ci/compare/1.15.0...1.15.1) (2023-02-17)

# 1.15.0 (2023-02-17)

## ✨ New Features
- [`add16a9`](https://gitlab.com/captive/gitlab-ci/-/commit/add16a9)  Skip bundle audit on non default branch



# [1.15.0](https://git.captive.fr/captive/gitlab-ci/compare/1.14.2...1.15.0) (2023-02-17)

# 1.14.2 (2023-02-17)

## 🐛 Bug Fixes
- [`2dc9b3b`](https://gitlab.com/captive/gitlab-ci/-/commit/2dc9b3b)  Unset GIT_CHECKOUT: &#x27;false&#x27;



## [1.14.2](https://git.captive.fr/captive/gitlab-ci/compare/1.14.1...1.14.2) (2023-02-17)

# 1.14.1 (2023-02-17)

## 🐛 Bug Fixes
- [`6214adf`](https://gitlab.com/captive/gitlab-ci/-/commit/6214adf)  Fix detached branch



## [1.14.1](https://git.captive.fr/captive/gitlab-ci/compare/1.14.0...1.14.1) (2023-02-17)

# 1.14.0 (2023-02-17)

## ✨ New Features
- [`ce85a44`](https://gitlab.com/captive/gitlab-ci/-/commit/ce85a44)  Set makefile:test-system as always

- [`b75091d`](https://gitlab.com/captive/gitlab-ci/-/commit/b75091d)  Disable allow_failure on makefile:test-system by default

## 🐛 Bug Fixes
- [`e627013`](https://gitlab.com/captive/gitlab-ci/-/commit/e627013)  Use checkout for check changelog job



# [1.14.0](https://git.captive.fr/captive/gitlab-ci/compare/1.13.1...1.14.0) (2023-02-17)

# 1.13.1 (2023-02-17)

## 🐛 Bug Fixes
- [`409bd51`](https://gitlab.com/captive/gitlab-ci/-/commit/409bd51)  Rename service



## [1.13.1](https://git.captive.fr/captive/gitlab-ci/compare/1.13.0...1.13.1) (2023-02-17)

# 1.13.0 (2023-02-15)

## ✨ New Features
- [`02c6ca6`](https://gitlab.com/captive/gitlab-ci/-/commit/02c6ca6)  Use CONTAINER_REGISTRY_MIRROR to configure docker daemon

## 🐛 Bug Fixes
- [`54ffa33`](https://gitlab.com/captive/gitlab-ci/-/commit/54ffa33)  Remove warning



# [1.13.0](https://git.captive.fr/captive/gitlab-ci/compare/1.12.1...1.13.0) (2023-02-15)

# 1.12.1 (2023-02-15)

## 🐛 Bug Fixes
- [`85b4647`](https://gitlab.com/captive/gitlab-ci/-/commit/85b4647)  Use google mirror temporarily



## [1.12.1](https://git.captive.fr/captive/gitlab-ci/compare/1.12.0...1.12.1) (2023-02-15)

# 1.12.0 (2023-02-15)

## ✨ New Features
- [`43ddf72`](https://gitlab.com/captive/gitlab-ci/-/commit/43ddf72)  Utilise les variables d&#x27;environnement standard dans deploy

- [`0753dd0`](https://gitlab.com/captive/gitlab-ci/-/commit/0753dd0)  Add makefile:lint job

## 🐛 Bug Fixes
- [`a3c5aa9`](https://gitlab.com/captive/gitlab-ci/-/commit/a3c5aa9)  Do not launch ruby:rubocop job on &quot;non makefile&quot; project



# [1.12.0](https://git.captive.fr/captive/gitlab-ci/compare/1.11.0...1.12.0) (2023-02-15)

# [1.11.0](https://git.captive.fr/captive/gitlab-ci/compare/1.10.0...1.11.0) (2023-02-15)

## ✨ New Features

- [`19e50cf`](https://gitlab.com/captive/gitlab-ci/-/commit/19e50cf)  Add CONTAINER_REGISTRY_MIRROR variable

# [1.10.0](https://git.captive.fr/captive/gitlab-ci/compare/1.9.0...1.10.0) (2023-02-10)

## ✨ New Features

- [`814afe9`](https://gitlab.com/captive/gitlab-ci/-/commit/814afe9)  Support NodeJS installation along with Ruby jobs

## 🐛 Bug Fixes

- [`04e7239`](https://gitlab.com/captive/gitlab-ci/-/commit/04e7239)  Remove needs: statements

# [1.9.0](https://git.captive.fr/captive/gitlab-ci/compare/1.8.2...1.9.0) (2023-02-09)

## ✨ New Features

- [`105c93b`](https://gitlab.com/captive/gitlab-ci/-/commit/105c93b)  Add TEST_ENABLED and TEST_SYSTEM_ENABLED flags

- [`12bebec`](https://gitlab.com/captive/gitlab-ci/-/commit/12bebec)  Add CODE_QUALITY_ENABLED variable

- [`95a30c2`](https://gitlab.com/captive/gitlab-ci/-/commit/95a30c2)  Add BUILD_ENABLED flag

# [1.8.2](https://git.captive.fr/captive/gitlab-ci/compare/1.8.1...1.8.2) (2023-02-02)

## 🐛 Bug Fixes

- [`a32495d`](https://gitlab.com/captive/gitlab-ci/-/commit/a32495d)  Add missing npm cache folder

- [`2891e03`](https://gitlab.com/captive/gitlab-ci/-/commit/2891e03)  Change nodejs install cache key

- [`33d90ee`](https://gitlab.com/captive/gitlab-ci/-/commit/33d90ee)  Use different cache key for .npm and node_modules

- [`f97dffc`](https://gitlab.com/captive/gitlab-ci/-/commit/f97dffc)  Use pipeline id as cache key for node_modules

# [1.8.1](https://git.captive.fr/captive/gitlab-ci/compare/1.8.0...1.8.1) (2023-02-01)

## 🐛 Bug Fixes

- [`40c8de1`](https://gitlab.com/captive/gitlab-ci/-/commit/40c8de1)  Correct variable used for project

# [1.8.0](https://git.captive.fr/captive/gitlab-ci/compare/1.7.0...1.8.0) (2023-02-01)

## ✨ New Features

- [`b98ac88`](https://gitlab.com/captive/gitlab-ci/-/commit/b98ac88)  Simplify makefile interface

- [`b770fac`](https://gitlab.com/captive/gitlab-ci/-/commit/b770fac)  Renomme make ci-test-most en make ci-test

# [1.7.0](https://git.captive.fr/captive/gitlab-ci/compare/1.6.1...1.7.0) (2023-02-01)

## ✨ New Features

- [`38d240d`](https://gitlab.com/captive/gitlab-ci/-/commit/38d240d)  Use $CI_PROJECT_NAME as default for $APP_NAME

## [1.6.1](https://git.captive.fr/captive/gitlab-ci/compare/1.6.0...1.6.1) (2023-02-01)

## 🐛 Bug Fixes

- [`ddf7535`](https://gitlab.com/captive/gitlab-ci/-/commit/ddf7535)  Fix deploy with makefile bug

## ✨ New Features

- [`4db8689`](https://gitlab.com/captive/gitlab-ci/-/commit/4db8689)  Change deploy target name in makefile

## 🐛 Bug Fixes

- [`50449b6`](https://gitlab.com/captive/gitlab-ci/-/commit/50449b6)  Remove pass dependency

- [`ce3a687`](https://gitlab.com/captive/gitlab-ci/-/commit/ce3a687)  Use docker maker image for deploy with make jobs

# [1.5.0](https://git.captive.fr/captive/gitlab-ci/compare/1.4.0...1.5.0) (2023-01-30)

## ✨ New Features

- [`89c39fc`](https://gitlab.com/captive/gitlab-ci/-/commit/89c39fc)  Add support for cobertura report

# [1.4.0](https://git.captive.fr/captive/gitlab-ci/compare/1.3.0...1.4.0) (2023-01-26)

## ✨ New Features

- [`68a3375`](https://gitlab.com/captive/gitlab-ci/-/commit/68a3375)  Use CircleCI images

# [1.3.0](https://git.captive.fr/captive/gitlab-ci/compare/1.2.7...1.3.0) (2023-01-26)

## ✨ New Features

- [`b3a433f`](https://gitlab.com/captive/gitlab-ci/-/commit/b3a433f)  Add environment url

# [1.2.7](https://git.captive.fr/captive/gitlab-ci/compare/1.2.6...1.2.7) (2023-01-25)

## 🐛 Bug Fixes

- [`d0004e1`](https://gitlab.com/captive/gitlab-ci/-/commit/d0004e1)  Change git strategy to fix unshallow errors

- [`2443a8f`](https://gitlab.com/captive/gitlab-ci/-/commit/2443a8f)  Fix multiline syntax error

# [1.2.6](https://git.captive.fr/captive/gitlab-ci/compare/1.2.5...1.2.6) (2023-01-25)

## 🐛 Bug Fixes

- [`4da4de5`](https://gitlab.com/captive/gitlab-ci/-/commit/4da4de5)  Make review_staging optional

# [1.2.5](https://git.captive.fr/captive/gitlab-ci/compare/1.2.4...1.2.5) (2023-01-25)

## 🐛 Bug Fixes

- [`3129dce`](https://gitlab.com/captive/gitlab-ci/-/commit/3129dce)  Use browsers image for test:system

- [`f94f8d9`](https://gitlab.com/captive/gitlab-ci/-/commit/f94f8d9)  Fix mixin references

# [1.2.4](https://git.captive.fr/captive/gitlab-ci/compare/1.2.3...1.2.4) (2023-01-25)

## 🐛 Bug Fixes

- [`c1f6aff`](https://gitlab.com/captive/gitlab-ci/-/commit/c1f6aff)  Use circle ci images for ruby

# [1.2.3](https://git.captive.fr/captive/gitlab-ci/compare/1.2.2...1.2.3) (2023-01-25)

## 🐛 Bug Fixes

- [`8dcfd70`](https://gitlab.com/captive/gitlab-ci/-/commit/8dcfd70)  Fix all scalingo deploy errors

# [1.2.2](https://git.captive.fr/captive/gitlab-ci/compare/1.2.1...1.2.2) (2023-01-25)

## 🐛 Bug Fixes

- [`c5f5cda`](https://gitlab.com/captive/gitlab-ci/-/commit/c5f5cda)  Use arguments instead of environment variable for scalingo

- [`38e254e`](https://gitlab.com/captive/gitlab-ci/-/commit/38e254e)  Use arguments instead of environment variable for heroku

# [1.2.1](https://git.captive.fr/captive/gitlab-ci/compare/1.2.0...1.2.1) (2023-01-25)

## 🐛 Bug Fixes

- [`e5fdbbd`](https://gitlab.com/captive/gitlab-ci/-/commit/e5fdbbd)  Force api_key parameter

# [1.2.0](https://git.captive.fr/captive/gitlab-ci/compare/1.1.2...1.2.0) (2023-01-25)

## ✨ New Features

- [`6517e9a`](https://gitlab.com/captive/gitlab-ci/-/commit/6517e9a)  Add $APP_NAME

## 🐛 Bug Fixes

- [`2a1bc26`](https://gitlab.com/captive/gitlab-ci/-/commit/2a1bc26)  Fix SCALINGO_API_TOKEN variable

# [1.1.2](https://git.captive.fr/captive/gitlab-ci/compare/1.1.1...1.1.2) (2023-01-25)

## 🐛 Bug Fixes

- [`332f6f5`](https://gitlab.com/captive/gitlab-ci/-/commit/332f6f5)  Fix dpl ruby version

## [1.1.1](https://git.captive.fr/captive/gitlab-ci/compare/1.1.0...1.1.1) (2023-01-25)

## 🐛 Bug Fixes

- [`647bd66`](https://gitlab.com/captive/gitlab-ci/-/commit/647bd66)  Make review_staging visible on any branch

# [1.1.0](https://git.captive.fr/captive/gitlab-ci/compare/1.0.0...1.1.0) (2023-01-24)

## ✨ New Features

- [`e25d360`](https://gitlab.com/captive/gitlab-ci/-/commit/e25d360)  Add .auto-devops_review_staging mixin

- [`a92eb8f`](https://gitlab.com/captive/gitlab-ci/-/commit/a92eb8f)  Add support for heroku deploying

- [`caaa0af`](https://gitlab.com/captive/gitlab-ci/-/commit/caaa0af)  Deploy scalingo with dpl
