import http from 'k6/http';
import { AppConfig } from './config.ts';
import { check, sleep } from 'k6';

// export const options = {
//   thresholds : AppConfig.thresholds,
//   scenarios : {
//     breakpoint_scenario : {
//       preAllocatedVUs: 20000,
//       executor: 'ramping-arrival-rate', //Assure load increase if the system slows
//       stages: [
//         { duration: '2h', target: 20000 },
//       ],
//     }
//   }
// };

export const options = {
  // Key configurations for breakpoint in this section
  thresholds : AppConfig.thresholds,  
  stages: [
    { duration: '2h', target: 20000 }, // just slowly ramp-up to a HUGE load
  ],
};

export default function () {
  let res = http.get(`${AppConfig.host}`);
  check(res, { "status is 200": (res) => res.status === 200 });
  sleep(1)
}
