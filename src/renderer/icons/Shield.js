// @flow

import React from "react";

const defs = (
  <defs>
    <filter
      id="a"
      width="163.6%"
      height="153.8%"
      x="-31.8%"
      y="-23.1%"
      filterUnits="objectBoundingBox"
    >
      <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
      <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="1.5" />
      <feColorMatrix
        in="shadowBlurOuter1"
        result="shadowMatrixOuter1"
        values="0 0 0 0 0.418261054 0 0 0 0 0.418261054 0 0 0 0 0.418261054 0 0 0 0.116196784 0"
      />
      <feMerge>
        <feMergeNode in="shadowMatrixOuter1" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
    <path
      id="b"
      d="M11 25.5806452s11-3.7741936 11-11.9516129V4.08870968L11 0 0 4.08870968v9.54032262c0 8.1774193 11 11.9516129 11 11.9516129z"
    />
  </defs>
);

const group = (
  <g fill="none" fillRule="evenodd" filter="url(#a)" transform="translate(3 2)">
    <g strokeLinecap="round" strokeLinejoin="round">
      <use fill="#FFF" stroke="currentColor" strokeWidth="1.5" xlinkHref="#b" />
      <path
        stroke="#FFF"
        strokeWidth="2"
        d="M10.6754629 26.5265181c-.1002644-.0344015-.2759634-.0990392-.5164692-.1943297-.39391814-.1560737-.83107448-.3435638-1.3008837-.5629688-1.3411669-.6263368-2.68247439-1.3856899-3.93963025-2.2843167C1.24412544 20.85844-1 17.5860312-1 13.6290323V3.39356402l12-4.46041056 12 4.46041056V13.6290323c0 3.9569989-2.2441254 7.2294077-5.9184797 9.8558706-1.2571559.8986268-2.5984634 1.6579799-3.9396303 2.2843167-.4698092.219405-.9069656.4068951-1.3008837.5629688-.2405058.0952905-.4162048.1599282-.5164692.1943297L11 26.6378696l-.3245371-.1113515z"
      />
    </g>
    <path
      fill="currentColor"
      fillRule="nonzero"
      d="M14.4936649 8.7193017c-.3544349 0-.6426937.29661569-.6426937.66261516l-.0115902 2.97078244s.0011217.2071877-.1921725.2071877c-.1974068 0-.1919856-.2071877-.1919856-.2071877V8.06728684c0-.36580674-.28452-.64970207-.6391418-.64970207-.3549957 0-.6077362.28389533-.6077362.64970207v4.28521976s-.0216848.2095005-.2125488.2095005c-.1889945 0-.2033888-.2095005-.2033888-.2095005V7.35301931c0-.36561401-.2673217-.64334189-.6221304-.64334189-.3548088 0-.6243737.27772788-.6243737.64334189v4.99948729s-.0097208.200442-.2140443.200442c-.2007717 0-.2017064-.200442-.2017064-.200442V8.63854668c0-.36580674-.2777902-.5951587-.63241204-.5951587-.35499571 0-.61465292.22935196-.61465292.5951587v5.42793212s-.03477051.2413014-.37032465-.1572699c-.8604767-1.0209053-1.30931541-1.2238529-1.30931541-1.2238529s-.81673316-.412448-1.17845865.3322713c-.26208741.5400371.01551588.5691397.44416525 1.2323331.37911075.5872567 1.57831954 2.1318168 1.57831954 2.1318168s1.42241305 2.0687933 3.34189488 2.0687933c0 0 3.7595149.1653647 3.7595149-3.6694387l-.0130857-5.39921494c.0001869-.36599947-.2873241-.66261516-.6421328-.66261516"
    />
  </g>
);

const Shield = (p: Object) => (
  <svg viewBox="0 0 28 32" height={32} width={28}>
    {defs}
    {group}
  </svg>
);

export default Shield;
