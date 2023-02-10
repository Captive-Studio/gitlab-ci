# 1.10.0 (2023-02-10)

## ✨ New Features
- [`814afe9`](https://gitlab.com/captive/gitlab-ci/-/commit/814afe9)  Support NodeJS installation along with Ruby jobs

## 🐛 Bug Fixes
- [`04e7239`](https://gitlab.com/captive/gitlab-ci/-/commit/04e7239)  Remove needs: statements



# [1.10.0](https://git.captive.fr/captive/gitlab-ci/compare/1.9.0...1.10.0) (2023-02-10)

# 1.9.0 (2023-02-09)

## ✨ New Features
- [`105c93b`](https://gitlab.com/captive/gitlab-ci/-/commit/105c93b)  Add TEST_ENABLED and TEST_SYSTEM_ENABLED flags

- [`12bebec`](https://gitlab.com/captive/gitlab-ci/-/commit/12bebec)  Add CODE_QUALITY_ENABLED variable

- [`95a30c2`](https://gitlab.com/captive/gitlab-ci/-/commit/95a30c2)  Add BUILD_ENABLED flag



# [1.9.0](https://git.captive.fr/captive/gitlab-ci/compare/1.8.2...1.9.0) (2023-02-09)

# 1.8.2 (2023-02-02)

## 🐛 Bug Fixes
- [`a32495d`](https://gitlab.com/captive/gitlab-ci/-/commit/a32495d)  Add missing npm cache folder

- [`2891e03`](https://gitlab.com/captive/gitlab-ci/-/commit/2891e03)  Change nodejs install cache key

- [`33d90ee`](https://gitlab.com/captive/gitlab-ci/-/commit/33d90ee)  Use different cache key for .npm and node_modules

- [`f97dffc`](https://gitlab.com/captive/gitlab-ci/-/commit/f97dffc)  Use pipeline id as cache key for node_modules



## [1.8.2](https://git.captive.fr/captive/gitlab-ci/compare/1.8.1...1.8.2) (2023-02-02)

# 1.8.1 (2023-02-01)

## 🐛 Bug Fixes
- [`40c8de1`](https://gitlab.com/captive/gitlab-ci/-/commit/40c8de1)  Correct variable used for project



## [1.8.1](https://git.captive.fr/captive/gitlab-ci/compare/1.8.0...1.8.1) (2023-02-01)

# 1.8.0 (2023-02-01)

## ✨ New Features
- [`b98ac88`](https://gitlab.com/captive/gitlab-ci/-/commit/b98ac88)  Simplify makefile interface

- [`b770fac`](https://gitlab.com/captive/gitlab-ci/-/commit/b770fac)  Renomme make ci-test-most en make ci-test



# [1.8.0](https://git.captive.fr/captive/gitlab-ci/compare/1.7.0...1.8.0) (2023-02-01)

# 1.7.0 (2023-02-01)

## ✨ New Features
- [`38d240d`](https://gitlab.com/captive/gitlab-ci/-/commit/38d240d)  Use $CI_PROJECT_NAME as default for $APP_NAME



# [1.7.0](https://git.captive.fr/captive/gitlab-ci/compare/1.6.1...1.7.0) (2023-02-01)

# 1.6.1 (2023-02-01)

## 🐛 Bug Fixes
- [`ddf7535`](https://gitlab.com/captive/gitlab-ci/-/commit/ddf7535)  Fix deploy with makefile bug



## [1.6.1](https://git.captive.fr/captive/gitlab-ci/compare/1.6.0...1.6.1) (2023-02-01)

# 1.6.0 (2023-02-01)

## ✨ New Features
- [`4db8689`](https://gitlab.com/captive/gitlab-ci/-/commit/4db8689)  Change deploy target name in makefile

## 🐛 Bug Fixes
- [`50449b6`](https://gitlab.com/captive/gitlab-ci/-/commit/50449b6)  Remove pass dependency

- [`ce3a687`](https://gitlab.com/captive/gitlab-ci/-/commit/ce3a687)  Use docker maker image for deploy with make jobs



# [1.6.0](https://git.captive.fr/captive/gitlab-ci/compare/1.5.0...1.6.0) (2023-02-01)

# 1.5.0 (2023-01-30)

## ✨ New Features
- [`89c39fc`](https://gitlab.com/captive/gitlab-ci/-/commit/89c39fc)  Add support for cobertura report



# [1.5.0](https://git.captive.fr/captive/gitlab-ci/compare/1.4.0...1.5.0) (2023-01-30)

# 1.4.0 (2023-01-26)

## ✨ New Features
- [`68a3375`](https://gitlab.com/captive/gitlab-ci/-/commit/68a3375)  Use CircleCI images



# [1.4.0](https://git.captive.fr/captive/gitlab-ci/compare/1.3.0...1.4.0) (2023-01-26)

# 1.3.0 (2023-01-26)

## ✨ New Features
- [`b3a433f`](https://gitlab.com/captive/gitlab-ci/-/commit/b3a433f)  Add environment url



# [1.3.0](https://git.captive.fr/captive/gitlab-ci/compare/1.2.7...1.3.0) (2023-01-26)

# 1.2.7 (2023-01-25)

## 🐛 Bug Fixes
- [`d0004e1`](https://gitlab.com/captive/gitlab-ci/-/commit/d0004e1)  Change git strategy to fix unshallow errors

- [`2443a8f`](https://gitlab.com/captive/gitlab-ci/-/commit/2443a8f)  Fix multiline syntax error



## [1.2.7](https://git.captive.fr/captive/gitlab-ci/compare/1.2.6...1.2.7) (2023-01-25)

# 1.2.6 (2023-01-25)

## 🐛 Bug Fixes
- [`4da4de5`](https://gitlab.com/captive/gitlab-ci/-/commit/4da4de5)  Make review_staging optional



## [1.2.6](https://git.captive.fr/captive/gitlab-ci/compare/1.2.5...1.2.6) (2023-01-25)

# 1.2.5 (2023-01-25)

## 🐛 Bug Fixes
- [`3129dce`](https://gitlab.com/captive/gitlab-ci/-/commit/3129dce)  Use browsers image for test:system

- [`f94f8d9`](https://gitlab.com/captive/gitlab-ci/-/commit/f94f8d9)  Fix mixin references



## [1.2.5](https://git.captive.fr/captive/gitlab-ci/compare/1.2.4...1.2.5) (2023-01-25)

# 1.2.4 (2023-01-25)

## 🐛 Bug Fixes
- [`c1f6aff`](https://gitlab.com/captive/gitlab-ci/-/commit/c1f6aff)  Use circle ci images for ruby



## [1.2.4](https://git.captive.fr/captive/gitlab-ci/compare/1.2.3...1.2.4) (2023-01-25)

# 1.2.3 (2023-01-25)

## 🐛 Bug Fixes
- [`8dcfd70`](https://gitlab.com/captive/gitlab-ci/-/commit/8dcfd70)  Fix all scalingo deploy errors



## [1.2.3](https://git.captive.fr/captive/gitlab-ci/compare/1.2.2...1.2.3) (2023-01-25)

# 1.2.2 (2023-01-25)

## 🐛 Bug Fixes
- [`c5f5cda`](https://gitlab.com/captive/gitlab-ci/-/commit/c5f5cda)  Use arguments instead of environment variable for scalingo

- [`38e254e`](https://gitlab.com/captive/gitlab-ci/-/commit/38e254e)  Use arguments instead of environment variable for heroku



## [1.2.2](https://git.captive.fr/captive/gitlab-ci/compare/1.2.1...1.2.2) (2023-01-25)

# 1.2.1 (2023-01-25)

## 🐛 Bug Fixes
- [`e5fdbbd`](https://gitlab.com/captive/gitlab-ci/-/commit/e5fdbbd)  Force api_key parameter



## [1.2.1](https://git.captive.fr/captive/gitlab-ci/compare/1.2.0...1.2.1) (2023-01-25)

# 1.2.0 (2023-01-25)

## ✨ New Features
- [`6517e9a`](https://gitlab.com/captive/gitlab-ci/-/commit/6517e9a)  Add $APP_NAME

## 🐛 Bug Fixes
- [`2a1bc26`](https://gitlab.com/captive/gitlab-ci/-/commit/2a1bc26)  Fix SCALINGO_API_TOKEN variable



# [1.2.0](https://git.captive.fr/captive/gitlab-ci/compare/1.1.2...1.2.0) (2023-01-25)

# 1.1.2 (2023-01-25)

## 🐛 Bug Fixes
- [`332f6f5`](https://gitlab.com/captive/gitlab-ci/-/commit/332f6f5)  Fix dpl ruby version



## [1.1.2](https://git.captive.fr/captive/gitlab-ci/compare/1.1.1...1.1.2) (2023-01-25)

# 1.1.1 (2023-01-25)

## 🐛 Bug Fixes
- [`647bd66`](https://gitlab.com/captive/gitlab-ci/-/commit/647bd66)  Make review_staging visible on any branch



## [1.1.1](https://git.captive.fr/captive/gitlab-ci/compare/1.1.0...1.1.1) (2023-01-25)

# 1.1.0 (2023-01-24)

## ✨ New Features
- [`e25d360`](https://gitlab.com/captive/gitlab-ci/-/commit/e25d360)  Add .auto-devops_review_staging mixin

- [`a92eb8f`](https://gitlab.com/captive/gitlab-ci/-/commit/a92eb8f)  Add support for heroku deploying

- [`caaa0af`](https://gitlab.com/captive/gitlab-ci/-/commit/caaa0af)  Deploy scalingo with dpl



# [1.1.0](https://git.captive.fr/captive/gitlab-ci/compare/1.0.0...1.1.0) (2023-01-24)
