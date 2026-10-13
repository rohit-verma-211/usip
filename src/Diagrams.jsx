const Fig = ({ cap, children }) => (
  <figure className="my-4 border border-slate-300 bg-white p-4">
    <div className="overflow-x-auto"><div className="min-w-[480px]">{children}</div></div>
    <figcaption className="mt-2 text-center text-sm text-slate-500">{cap}</figcaption>
  </figure>
);

export const Cycle = () => (
  <Fig cap="Figure 1: Evolving an interdisciplinary field through demand, mobilization and acceptability building">
    <svg viewBox="0 0 640 230" role="img" aria-label="Demand, mobilization, acceptability cycle">
      <g fill="#2c4e80"><path d="M300 115 L300 25 A90 90 0 0 1 378 160Z" /><path d="M300 115 L378 160 A90 90 0 0 1 222 160Z" opacity=".85" /><path d="M300 115 L222 160 A90 90 0 0 1 300 25Z" opacity=".7" /></g>
      <g fill="#fff" fontSize="13" textAnchor="middle"><text x="340" y="85">Mobilization</text><text x="300" y="175">Acceptability building</text><text x="258" y="85">Demand</text></g>
      <g fill="#222"><circle cx="50" cy="90" r="14" /><rect x="30" y="108" width="40" height="22" rx="8" /><circle cx="110" cy="90" r="14" /><rect x="90" y="108" width="40" height="22" rx="8" /><text x="80" y="165" textAnchor="middle" fontSize="12">Aspiring scientific community</text></g>
      <g stroke="#222" strokeWidth="2" fill="none"><path d="M150 112H200M190 106l10 6-10 6M410 112H460M450 106l10 6-10 6" /></g>
      <circle cx="540" cy="112" r="62" fill="#8a8a8a" />
      <text x="540" y="108" textAnchor="middle" fill="#fff" fontSize="13">Novel</text>
      <text x="540" y="124" textAnchor="middle" fill="#fff" fontSize="13">interdisciplinary field</text>
    </svg>
  </Fig>
);

export const Venn = () => (
  <Fig cap="Figure 2: Integrated learning at the intersection of mathematics, problem tracks and IT/CS/AI/ML">
    <svg viewBox="0 0 640 330" role="img" aria-label="Venn diagram of integrated learning">
      <circle cx="320" cy="105" r="95" fill="#fdeeb8" stroke="#888" />
      <circle cx="235" cy="215" r="95" fill="#f3ae85" fillOpacity=".85" stroke="#888" />
      <circle cx="405" cy="215" r="95" fill="#c8c8c8" fillOpacity=".8" stroke="#888" />
      <g fontSize="13" textAnchor="middle" fill="#222">
        <text x="320" y="70">Mathematics and Statistics</text><text x="180" y="240">Problem Track</text><text x="470" y="240">IT / CS / AI / ML</text>
        <text x="262" y="150">Quantitative</text><text x="262" y="166">Analysis</text><text x="380" y="150">Computational</text><text x="380" y="166">Analysis</text>
        <text x="320" y="196" fontWeight="700">Integrated</text><text x="320" y="212" fontWeight="700">Learning</text>
        <text x="320" y="262">Mathematical</text><text x="320" y="278">Computing</text>
      </g>
    </svg>
  </Fig>
);

export const Hierarchy = () => {
  const rows = ["Dean", "Head of the Departments", "Associate Head of the Departments", "Research Fellows"];
  return (
    <Fig cap="Figure 3: Hierarchy of SILR">
      <svg viewBox="0 0 640 300" role="img" aria-label="SILR hierarchy">
        {rows.map((r, i) => (
          <g key={r}>
            <rect x="200" y={10 + i * 75} width="240" height="46" fill="none" stroke="#64748b" />
            <text x="320" y={38 + i * 75} textAnchor="middle" fontSize="15" fill="#222">{r}</text>
            {i < 3 && <path d={`M320 ${56 + i * 75}v29M314 ${79 + i * 75}l6 6 6-6`} stroke="#64748b" strokeWidth="2" fill="none" />}
          </g>
        ))}
      </svg>
    </Fig>
  );
};

export const Flow = () => {
  const L = [["T&P Cell", 30, "#2f3d57"], ["Workshop/Conference", 90, "#d0601a"], ["Dean UG/PG", 150, "#777"], ["Industry", 210, "#b88a00"]];
  const R = [["N1: Electrical", 40, "#777"], ["N2: Mechanical", 100, "#7f94b5"], ["N3: Civil", 160, "#d0601a"], ["N4: AI", 220, "#b88a00"]];
  return (
    <Fig cap="Figure 4: Flow of resources from industry and academia to problem-solving and disciplinary tracks">
      <svg viewBox="0 0 760 300" role="img" aria-label="Resource flow chart" fontSize="12" textAnchor="middle">
        <ellipse cx="70" cy="150" rx="62" ry="24" fill="#b8cdf0" /><text x="70" y="154" fill="#123">Resources drawn from</text>
        {L.map(([t, y, c]) => (<g key={t}><rect x="150" y={y} width="110" height="30" fill={c} /><text x="205" y={y + 20} fill="#fff">{t}</text></g>))}
        <rect x="290" y="210" width="100" height="30" fill="#4a7c2e" /><text x="340" y="230" fill="#fff">Problem track</text>
        <ellipse cx="450" cy="225" rx="42" ry="22" fill="#ffe9a8" /><text x="450" y="229" fill="#333">Output</text>
        <rect x="510" y="210" width="110" height="30" fill="#b88a00" /><text x="565" y="230" fill="#fff">Disciplinary track</text>
        {R.map(([t, y, c]) => (<g key={t}><rect x="650" y={y} width="100" height="32" fill={c} /><text x="700" y={y + 20} fill="#fff">{t}</text></g>))}
        <path d="M125 140L150 45M128 148L150 105M132 152L150 165M128 160L150 225M260 225H290M390 225H408M492 225H510M620 225H635V56H650M635 116H650M635 176H650M635 236H650" stroke="#64748b" strokeWidth="1.5" fill="none" />
      </svg>
    </Fig>
  );
};
