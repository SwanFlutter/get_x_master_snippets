# Change Log

All notable changes to the "get-x-master-snippets" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [1.0.4] - 2026-06-06

### Added
- `getxmastergetbuilderobs` — `GetBuilderObs` snippet with `observables`, `filter`, and `builder`
- `Wrap with GetBuilderObs` — right-click wrap command for GetBuilderObs
- `Wrap with ObxValue` — right-click wrap command for ObxValue
- `Wrap with MultiObx` — right-click wrap command for MultiObx

## [1.0.3] - 2026-06-06

### Added
- `onInit` — override snippet with `@override` + `super.onInit()` (type `onInit` directly)
- `onReady` — override snippet (type `onReady` directly)
- `onClose` — override snippet (type `onClose` directly)
- `onDelete` — override snippet for permanent controller removal (type `onDelete` directly)
- `getxmasterlifecycle` — inserts all three lifecycle methods at once (onInit + onReady + onClose)
- `getxmastercontrollerlifecycle` — full GetXController class template with all lifecycle methods
- `getxmastercontrollerfull` — full GetXController with reactive state, getter/setter pattern, and lifecycle
- `getxmasterworkerever` — `ever()` worker snippet
- `getxmasterworkeronce` — `once()` worker snippet
- `getxmasterworkerdebounce` — `debounce()` worker snippet
- `getxmasterworkerinterval` — `interval()` worker snippet
- `getxmasterworkers` — all four workers inserted at once
- `getxmasterobx` — `Obx(() => ...)` widget snippet
- `getxmastergetbuilder` — `GetBuilder<Controller>` widget snippet
- `getxmasterupdate` — `update()` call snippet
- `getxmasterupdateids` — `update(['id'])` targeted update snippet

### Fixed
- `getxmastercontrollervoid` — corrected class name from `GetxController` to `GetXController`
- `getxmastercontroller` — removed constructor line from body

## [1.0.2] - 2025-09-03

### Added
- Smart dependency injection snippets: `getxmastersmartPut`, `getxmastersmartPutIf`, `getxmasterlazyManage`
- GetXStorage snippets: write, read, listen, erase, remove, hasData, writeIfNull, changeValue, custom container, initialization
- `getxmastergetter` — static getter via `Get.smartFind<T>()`

## [1.0.1] - 2025-09-02

### Changed
- Updated README.md with improved documentation and examples
- Enhanced project description and usage instructions

## [1.0.0] - 2025-09-01

### Added
- Initial release of GetX Master Snippets extension
- 50+ code snippets for GetX Master package development
- Complete Flutter project structure generation snippets
- Snippets for:
  - Main application setup (`getxmastermain`)
  - Page/View creation (`getxmasterpage`)
  - Controller generation (`getxmastercontroller`)
  - Repository pattern (`getxmasterrepository`)
  - Provider/API services (`getxmasterprovider`)
  - Model classes (`getxmastermodel`, `getxmasterrxmodel`)
  - Route management (`getxmasterroutes`, `getxmasterroute`)
  - Observable variables (`getxmasterfinal`, `getxmasterget`, `getxmasterset`)
  - UI components and widgets
- Support for GetX Master package imports
- Comprehensive documentation and examples
- Professional icon and branding
