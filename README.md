# Purpose

This project is created as a simple use of the ng-packagr module to test on an IBM i system as a diagnostics tool.

# Use

1. Copy project into a repository.
2. Use `npm install` in the 'module' project
3. Use `npm run build` in the 'module' project to attempt to build the test ng-packagr module
	1. Use `npm run buildDev` for additional debug information
4. Use `npm install` in the 'app' project
5. Use `npm run build` to build the angular project with optimization turned on
	1. Use `npm run buildDev` to build the angular project with optimization turned off