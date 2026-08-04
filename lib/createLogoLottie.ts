/** Build a looping Lottie composition that floats/breathes an embedded SVG logo. */

function toDataUri(svgMarkup: string): string {
  const encoded = encodeURIComponent(svgMarkup)
    .replace(/'/g, '%27')
    .replace(/"/g, '%22');
  return `data:image/svg+xml,${encoded}`;
}

export function svgFromPath(pathD: string, color: string, stroked = false): string {
  if (stroked) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" fill="none" stroke="${color}" stroke-width="1.15"><path d="${pathD}"/></svg>`;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" fill="${color}"><path d="${pathD}"/></svg>`;
}

export function reactAtomSvg(color: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" fill="${color}">
    <g fill="none" stroke="${color}" stroke-width="1.15">
      <ellipse cx="12" cy="12" rx="10.5" ry="4.2"/>
      <ellipse cx="12" cy="12" rx="10.5" ry="4.2" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10.5" ry="4.2" transform="rotate(120 12 12)"/>
    </g>
    <circle cx="12" cy="12" r="1.85" fill="${color}"/>
  </svg>`;
}

/** Classic two-tone Python brand mark for hover */
export function pythonBrandSvg(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100">
    <path fill="#3776AB" d="M12 0C5.662 0 5.634 2.8 5.634 2.8l.007 2.9h6.47v.87H3.73S0 6.03 0 12.155c0 6.126 3.22 5.91 3.22 5.91h1.92v-2.84s-.104-3.39 3.33-3.39h5.7s3.25.05 3.25-3.15V3.15S17.6 0 12 0zm-3.11 1.81a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    <path fill="#FFD43B" d="M20.78 5.94h-1.92v2.84s.1 3.39-3.33 3.39H9.83s-3.25-.05-3.25 3.15v5.53S6.4 24 12 24c6.338 0 6.366-2.8 6.366-2.8l-.007-2.9H11.89v-.87h8.38S24 17.97 24 11.845C24 5.72 20.78 5.94 20.78 5.94zm-3.11 14.25a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </svg>`;
}

export function createLogoLottie(svgMarkup: string, seed = 0) {
  const dataUri = toDataUri(svgMarkup);
  // Stagger phase via seed so logos don't pulse in sync
  const phase = (seed % 5) * 6;

  return {
    v: '5.7.4',
    fr: 30,
    ip: 0,
    op: 90,
    w: 100,
    h: 100,
    nm: 'TechLogo',
    ddd: 0,
    assets: [
      {
        id: 'logo',
        w: 100,
        h: 100,
        u: '',
        p: dataUri,
        e: 1,
      },
    ],
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 2,
        nm: 'Logo',
        refId: 'logo',
        sr: 1,
        ks: {
          o: {
            a: 1,
            k: [
              { t: phase, s: [78], i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] } },
              { t: phase + 45, s: [100], i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] } },
              { t: phase + 90, s: [78] },
            ],
          },
          r: {
            a: 1,
            k: [
              { t: phase, s: [-4], i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] } },
              { t: phase + 45, s: [4], i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] } },
              { t: phase + 90, s: [-4] },
            ],
          },
          p: { a: 0, k: [50, 50, 0] },
          a: { a: 0, k: [50, 50, 0] },
          s: {
            a: 1,
            k: [
              { t: phase, s: [88, 88, 100], i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] } },
              { t: phase + 45, s: [108, 108, 100], i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] } },
              { t: phase + 90, s: [88, 88, 100] },
            ],
          },
        },
        ao: 0,
        ip: 0,
        op: 90,
        st: 0,
        bm: 0,
      },
    ],
  };
}
