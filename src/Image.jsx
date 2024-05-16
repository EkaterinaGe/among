export const PlayerImage = ({ color, scale = 1 }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={192 * scale} height={192 * scale} fill='none'>
      <g style={{ transform: `scale(${scale})` }}>
        <title>Layer 1</title>
        <g id='svg_8' fill='#111111'>
          <rect
            id='svg_6'
            height='58.88889'
            width='36.66666'
            y='79.55555'
            x='74.8433'
            strokeWidth='0'
            stroke='null'
            fill={color}
          />
          <rect
            id='svg_5'
            height='77.77777'
            width='28.88889'
            y='86.96295'
            x='47.06552'
            strokeWidth='0'
            stroke='null'
            fill={color}
          />
          <rect
            id='svg_4'
            height='82.22222'
            width='18.14815'
            y='49.18518'
            x='138.96296'
            strokeWidth='0'
            stroke='null'
            fill={color}
          />
          <rect
            strokeWidth='0'
            stroke='null'
            id='svg_3'
            height='130.37037'
            width='30.74074'
            y='37.14815'
            x='101.13959'
            fill={color}
          />
          <rect
            id='svg_2'
            height='26.66671'
            width='69.85518'
            y='24.14511'
            x='53.48765'
            fill={color}
          />
        </g>
        <rect
          id='svg_7'
          height='31.11111'
          width='63.33333'
          y='48.44444'
          x='37.48148'
          strokeWidth='0'
          stroke='null'
          fill='#9ACEE6'
        />
        <path
          strokeWidth='0'
          id='svg_1'
          clipRule='evenodd'
          d='m55.087,40l27.913,0c13.807,0 25,11.193 25,25s-11.193,25 -25,25l-31,0c-0.335,0 -0.668,-0.007 -1,-0.02l0,68.02a6,6 0 0 0 6,6l9,0a6,6 0 0 0 6,-6l0,-18a6,6 0 0 1 6,-6l24,0a6,6 0 0 1 6,6l0,18a6,6 0 0 0 6,6l9,0a6,6 0 0 0 6,-6l0,-104c0,-14.36 -11.641,-26 -26,-26l-26,0c-9.205,0 -17.292,4.783 -21.913,12zm-16.087,46.358c-7.196,-4.388 -12,-12.312 -12,-21.358c0,-9.746 5.576,-18.189 13.712,-22.313c4.816,-15.462 19.24,-26.687 36.288,-26.687l26,0c16.043,0 29.764,9.942 35.338,24l8.662,0c9.941,0 18,8.059 18,18l0,65c0,9.941 -8.059,18 -18,18l-6,0l0,17c0,9.941 -8.059,18 -18,18l-9,0c-9.941,0 -18,-8.059 -18,-18l0,-12l-12,0l0,12c0,9.941 -8.059,18 -18,18l-9,0c-9.941,0 -18,-8.059 -18,-18l0,-71.642zm102,42.642l6,0a6,6 0 0 0 6,-6l0,-65a6,6 0 0 0 -6,-6l-6.052,0c0.035,0.662 0.052,1.33 0.052,2l0,75zm-89,-77c-7.18,0 -13,5.82 -13,13s5.82,13 13,13l31,0c7.18,0 13,-5.82 13,-13s-5.82,-13 -13,-13l-31,0z'
          fillRule='evenodd'
          fill='#000000'
        />
      </g>
    </svg>
  );
};
