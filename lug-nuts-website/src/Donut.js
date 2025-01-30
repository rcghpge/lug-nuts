import React, { useEffect, useRef } from 'react';

function Donut() {
  const donutRef = useRef();

  useEffect(() => {
    let A = 0;
    let B = 0;
    const renderFrame = () => {
      const b = [];
      const z = [];
      A += 0.07;
      B += 0.03;
      const cA = Math.cos(A), sA = Math.sin(A);
      const cB = Math.cos(B), sB = Math.sin(B);

      for (let k = 0; k < 1760; k++) {
        b[k] = k % 80 === 79 ? "\n" : " ";
        z[k] = 0;
      }
      for (let j = 0; j < 6.28; j += 0.07) {
        const ct = Math.cos(j), st = Math.sin(j);
        for (let i = 0; i < 6.28; i += 0.02) {
          const sp = Math.sin(i), cp = Math.cos(i);
          const h = ct + 2;
          const D = 1 / (sp * h * sA + st * cA + 5);
          const t = sp * h * cA - st * sA;
          const x = Math.floor(40 + 30 * D * (cp * h * cB - t * sB));
          const y = Math.floor(12 + 15 * D * (cp * h * sB + t * cB));
          const o = x + 80 * y;
          const N = Math.floor(8 * ((st * sA - sp * ct * cA) * cB - sp * ct * sA - st * cA - cp * ct * sB));
          if (y >= 0 && y < 22 && x >= 0 && x < 80 && D > z[o]) {
            z[o] = D;
            b[o] = ".,-~:;=!*#$@"[N > 0 ? N : 0];
          }
        }
      }
      donutRef.current.innerText = b.join("");
    };

    const interval = setInterval(renderFrame, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" text-gruvboxFg">
      <pre ref={donutRef} className="text-sm leading-tight text-center" style={{ fontFamily: 'monospace' }}></pre>
    </div>
  );
}

export default Donut;
