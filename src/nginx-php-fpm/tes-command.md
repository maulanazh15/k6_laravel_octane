## Smoke Testing
```bash
k6-dashboard run --out json=./reports/json/smoke-report.json  --out dashboard=export=./reports/html/smoke-report.html smoke-testing.ts
```
## Breakpoint Testing
```bash
k6-dashboard run --out json=./reports/json/breakpoint-report.json  --out dashboard=export=./reports/html/breakpoint-report.html breakpoint-testing.ts
```
## Average-load Testing
```bash
k6-dashboard run --out json=./reports/json/average-load-report.json  --out dashboard=export=./reports/html/average-load-report.html average-load-testing.ts
```
## Stress Testing
```bash
k6-dashboard run --out json=./reports/json/stress-report.json  --out dashboard=export=./reports/html/stress-report.html stress-testing.ts
```