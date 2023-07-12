# Changelog

## [2.0.1] (2023-07-11)


### Bug Fixes

* **core:** Replace @baggie/functions with @baggie/core ([7b481f5](https://github.com/bag-of-tricks/baggie/commit/7b481f5848467225889b105e65b2415fa41be15c))

## [2.0.0] (2023-07-11)


### ⚠ BREAKING CHANGES

* **functions:** remove forEach
* **color:** change methods of ColorComparison
* **color:** rename a bunch of functions
* **math:** change inputs of keepOutsideRange + add docs
* **math:** change inputs of isInRange
* **math:** change convertRangePosition + add docs
* **math:** change inputs of getPercentageBetween
* **react:** add ProgressCircle
* **math:** rename getClosest and getClosestAngles
* **string:** ♻ convertEmailsToLinks has options object
* 🔥 remove functions for IE11
* **string:** ♻ stripTagsFromString defaults to spaces and trim
* **string:** ♻ rename capitalizeFirstLetter and its options
* **math:** ♻ rename all surface functions to area
* **math:** ♻ rename getCircleSurface to getCircleArea
* **math:** 🔥 remove truncNumber - don't care for IE support
* **math:** ♻ change return object of getMode and getAntiMode
* default to taking/giving percentage as a decimal

### Features

* Add new package for React components ([4a13692](https://github.com/bag-of-tricks/baggie/commit/4a136920556d2dfdad9058d910c10a748fa2e188))
* **color:** ✨ add isHexColor ([eea4cbd](https://github.com/bag-of-tricks/baggie/commit/eea4cbd6725d35fdc296d03a130b0b72fbc3edc2))
* **color:** ✨ add normalizeHexColor ([9211583](https://github.com/bag-of-tricks/baggie/commit/9211583a8e76f1a2bbf04e3df5574f8d5f5e773d))
* **core:** Add function shuffleArray ([87bc028](https://github.com/bag-of-tricks/baggie/commit/87bc02873e51fd0845af4f5ae4531724b8c2e301))
* **core:** Add getAge function ([8e3a3c5](https://github.com/bag-of-tricks/baggie/commit/8e3a3c59ffc8207dc683b2c8cebace3e53f81bc6))
* **core:** Rename convertHexToRgb to convertStringToRgb ([6211459](https://github.com/bag-of-tricks/baggie/commit/62114599e79d0a42b2b2389ec6af9dbac0afdccf))
* **math:** ✨ add getCircleSegmentArea ([b6160c4](https://github.com/bag-of-tricks/baggie/commit/b6160c4ec19bbd4c17560b86b18f1ef62ebfe97a))
* **math:** Ad getHalfLifeDecay ([491c6b5](https://github.com/bag-of-tricks/baggie/commit/491c6b58c74c4bdd0a8ec5b7b0fbe1f4a6780dc2))
* **math:** Add mergeIntervals ([6299cc3](https://github.com/bag-of-tricks/baggie/commit/6299cc304ae6c48f80111986e253f004f084e4ef))
* **math:** Add zeroIfNotNumber as an exported helper ([ad58a2d](https://github.com/bag-of-tricks/baggie/commit/ad58a2dcef8c6f5b17fcd76636ca8818a7f43868))
* **react:** ✨ add TextareaWithHighlights ([9c9ec3f](https://github.com/bag-of-tricks/baggie/commit/9c9ec3f5e737c57411394de37e18f4b184fc2a91))
* **react:** ✨ add useForwardedRef hook ([027292c](https://github.com/bag-of-tricks/baggie/commit/027292c6e8bdebe0f957ab8be71538f2f86f1b6f))
* **react:** Add hook useKeyboardHeight ([cf3b504](https://github.com/bag-of-tricks/baggie/commit/cf3b504f7878a8c37870ae896ec47266b2b85fa1))
* **react:** Add hook useRefreshedToday ([8a95ec5](https://github.com/bag-of-tricks/baggie/commit/8a95ec584ae761f187e4f74f8fcd4e536a998961))
* **react:** Add ProgressCircle ([3748993](https://github.com/bag-of-tricks/baggie/commit/3748993b478add567bc1c562f25e6b6b064cf441))
* **string:** ✨ add substringHtmlEntitySafe and substringHtmlSafe ([09d4ba5](https://github.com/bag-of-tricks/baggie/commit/09d4ba5274e922bc1249f0dd93a8f99e3f87a3b4))
* **string:** ✨ expand getYouTubeId to work with texts and just an ID ([907b4d0](https://github.com/bag-of-tricks/baggie/commit/907b4d00c4981b6ac4972da251a8f1ff0f8b7294))
* **string:** Add splitAtSpace ([834cede](https://github.com/bag-of-tricks/baggie/commit/834cede738da14147af4c46974a53cd7356bf642))
* **typescript:** ✨ add RenameProperties ([4130554](https://github.com/bag-of-tricks/baggie/commit/41305546d8a2f55358997b10e7572e975afb8b08))
* **typescript:** Add utility type DistinctProperties ([515055a](https://github.com/bag-of-tricks/baggie/commit/515055a53bc619ed4356c3f1faa9721876c0bbb7))
* **typescript:** Add utility type ReplaceAllTypes ([ffd4b8b](https://github.com/bag-of-tricks/baggie/commit/ffd4b8b6588750ad4e0a46fca82aad4af6a8e417))
* **typescript:** Add utility type SharedProperties ([8357027](https://github.com/bag-of-tricks/baggie/commit/8357027634e9e99b33ace8f1bc46d8b70083de56))
* **typescript:** Add utility type TupleToObject ([ec58527](https://github.com/bag-of-tricks/baggie/commit/ec5852754f4b439713e0106a69365ec6abf07f0e))


### Bug Fixes

* **color:** Replace non-null assertion with type casting ([0af8051](https://github.com/bag-of-tricks/baggie/commit/0af805177c5ebe319658976c5e45773a931c014b))
* **core:** Change shuffleArray to arrow function ([6a48dcb](https://github.com/bag-of-tricks/baggie/commit/6a48dcb39d481e6a5acbf7c1381caeef3db9b855))
* **core:** Export getAge, oops ([bcb8705](https://github.com/bag-of-tricks/baggie/commit/bcb8705ce8e3f7d1fc95ade5f4dff8c6d44e3f28))
* **core:** Improve typescript for shuffleArray ([06c75e1](https://github.com/bag-of-tricks/baggie/commit/06c75e161e47ac04caa2373a0f8eff4fec4d9e09))
* **dom:** Add math as dependency and export interfaces from math ([8ce56c6](https://github.com/bag-of-tricks/baggie/commit/8ce56c6b3f8ec63e077c82dfb0b0bdb1e3681dac))
* Exclude examples from build ([0f10162](https://github.com/bag-of-tricks/baggie/commit/0f10162a5bd21e3c5a8ea11fdd52f002884ddb51))
* **react:** Avoid removing prefix from -webkit-mask ([0427738](https://github.com/bag-of-tricks/baggie/commit/04277384aa9bef1bb30264a5ae14ca65bc3b8f6e))
* **react:** Export useKeyboardHeight ([29dd35f](https://github.com/bag-of-tricks/baggie/commit/29dd35f10a1f240609e721fb530f266cd633914f))
* **react:** Export useRefreshedToday ([88cdbdf](https://github.com/bag-of-tricks/baggie/commit/88cdbdf3be24e42f2ff2a850ba13b6b6d88362de))
* Remove failing condition from release please config ([592330f](https://github.com/bag-of-tricks/baggie/commit/592330f47926fb68f974299a2e3b7b0915dcbac8))
* Rollback typedoc to v0.19.2 to support needed configs ([a74d391](https://github.com/bag-of-tricks/baggie/commit/a74d391acd8a59b67edfd85ec9cae53b00158f50))
* **string:** Add missing export of isDateValid ([a1edf81](https://github.com/bag-of-tricks/baggie/commit/a1edf818076d6bf02024580733332425776f4f12))
* **string:** Change getPasswordRegex to not accept invalid regex ([575fb35](https://github.com/bag-of-tricks/baggie/commit/575fb35b09cb9a5059fa31a4dd1f1eb5c4d84718))
* **string:** IsDateValid now works with dates prior to year 1000 ([304ecee](https://github.com/bag-of-tricks/baggie/commit/304ecee7835ee2eec4e6525ae1a8e65febc78945))


### Code Refactoring

* **color:** Change methods of ColorComparison ([bb5e662](https://github.com/bag-of-tricks/baggie/commit/bb5e662d391537b4db3fe894b11cd43d973e6e93))
* **color:** Rename a bunch of functions ([83d9e36](https://github.com/bag-of-tricks/baggie/commit/83d9e365130b24019c9e2ac49b89afa5eef20cbb))
* Default to taking/giving percentage as a decimal ([2687b16](https://github.com/bag-of-tricks/baggie/commit/2687b16be75c04ed2378050ec85263ec98678daa))
* **math:** ♻ change return object of getMode and getAntiMode ([633c280](https://github.com/bag-of-tricks/baggie/commit/633c2801e32507c12d18cf04fae98b0ae241a5a5))
* **math:** ♻ rename all surface functions to area ([db81467](https://github.com/bag-of-tricks/baggie/commit/db814679ace5a51da35a09d25bf8c9d7d01ec12e))
* **math:** ♻ rename getCircleSurface to getCircleArea ([4e83405](https://github.com/bag-of-tricks/baggie/commit/4e83405948a7a82a1ebc40b0af5fde373ff82483))
* **math:** Change convertRangePosition + add docs ([6c9faee](https://github.com/bag-of-tricks/baggie/commit/6c9faee555b170345151f2c2936c77613c76308b))
* **math:** Change inputs of getPercentageBetween ([da85cb4](https://github.com/bag-of-tricks/baggie/commit/da85cb46c53c71bed4dc19a7769635c1b2ffe2ca))
* **math:** Change inputs of isInRange ([72160b7](https://github.com/bag-of-tricks/baggie/commit/72160b70ab9d3c3e2d1225aea7bbe16ac07074d5))
* **math:** Change inputs of keepOutsideRange + add docs ([5a181d4](https://github.com/bag-of-tricks/baggie/commit/5a181d478d6c91a5a2555c45d2316bdf25cc84c8))
* **math:** Rename getClosest and getClosestAngles ([805b679](https://github.com/bag-of-tricks/baggie/commit/805b6799821a4f96b905d72635b76e5d962d9709))
* **string:** ♻ convertEmailsToLinks has options object ([964ca3b](https://github.com/bag-of-tricks/baggie/commit/964ca3bb3e2aa9527e3d62b1a006998a299f8f89))
* **string:** ♻ rename capitalizeFirstLetter and its options ([52388fd](https://github.com/bag-of-tricks/baggie/commit/52388fd8f0b2e4303e41c3116f3b78f5822c87ac))
* **string:** ♻ stripTagsFromString defaults to spaces and trim ([de1eaf8](https://github.com/bag-of-tricks/baggie/commit/de1eaf8e2aa45713014913e4fd4ce8af7115f19b))


### remove

* 🔥 remove functions for IE11 ([bde6ef4](https://github.com/bag-of-tricks/baggie/commit/bde6ef4d734347b365a543cf334fae31e388f74f))
* **functions:** Remove forEach ([c53b57a](https://github.com/bag-of-tricks/baggie/commit/c53b57a63e917a66b5d671508b2629e6b1765ec6))
* **math:** 🔥 remove truncNumber - don't care for IE support ([f0b3956](https://github.com/bag-of-tricks/baggie/commit/f0b3956fbc3d7fa042cdde6e7ad8964cd8dec63c))