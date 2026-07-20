const rows = [
  ["Participants", "Up to 20", "21–35", "36–60"],
  ["Duration", "3–4 hours", "5–6 hours", "6–8 hours"],
  ["Experience Type", "Small team challenge", "Department experience", "Company championship"],
  ["Format", "Skill stations + mini games", "Challenges + mini tournament", "Full tournament experience"],
  ["Best For", "Small teams", "Departments", "Large teams / company events"],
];

export default function ComparisonTable() {
  return (
    <section className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-amber-500">
            Compare Experiences
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
            Choose the right format with confidence.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Each experience follows the same premium CCC standard, scaled to fit
            your team size, available time and event goals.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[850px] text-left">
              <thead className="bg-slate-950 text-white">
                <tr>
                  <th className="p-6 text-sm uppercase tracking-wide">Feature</th>
                  <th className="p-6 text-sm uppercase tracking-wide">Challenge™</th>
                  <th className="p-6 text-sm uppercase tracking-wide">Challenge Plus™</th>
                  <th className="p-6 text-sm uppercase tracking-wide">Championship™</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200">
                {rows.map((row) => (
                  <tr key={row[0]} className="transition hover:bg-amber-50/60">
                    <td className="p-6 font-black text-slate-950">{row[0]}</td>
                    <td className="p-6 text-slate-600">{row[1]}</td>
                    <td className="p-6 text-slate-600">{row[2]}</td>
                    <td className="p-6 text-slate-600">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}