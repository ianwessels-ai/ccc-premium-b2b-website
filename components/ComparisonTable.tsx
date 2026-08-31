"use client";

import { useLanguage } from "./LanguageProvider";

export default function ComparisonTable() {
  const { t } = useLanguage();

  const rows = [
    [
      t("comparison.participants"),
      t("comparison.upTo20"),
      t("comparison.21to35"),
      t("comparison.36to60"),
    ],
    [
      t("comparison.duration"),
      t("comparison.3to4Hours"),
      t("comparison.5to6Hours"),
      t("comparison.6to8Hours"),
    ],
    [
      t("comparison.experienceType"),
      t("comparison.smallTeamChallenge"),
      t("comparison.departmentExperience"),
      t("comparison.companyChampionship"),
    ],
    [
      t("comparison.format"),
      t("comparison.skillStations"),
      t("comparison.challengesTournament"),
      t("comparison.fullTournament"),
    ],
    [
      t("comparison.bestFor"),
      t("comparison.smallTeams"),
      t("comparison.departments"),
      t("comparison.largeTeams"),
    ],
  ];

  return (
    <section className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-amber-500">
            {t("comparison.eyebrow")}
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
            {t("comparison.title")}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {t("comparison.description")}
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[850px] text-left">
              <thead className="bg-slate-950 text-white">
                <tr>
                  <th className="p-6 text-sm uppercase tracking-wide">
                    {t("comparison.feature")}
                  </th>

                  <th className="p-6 text-sm uppercase tracking-wide">
                    {t("comparison.challenge")}
                  </th>

                  <th className="p-6 text-sm uppercase tracking-wide">
                    {t("comparison.challengePlus")}
                  </th>

                  <th className="p-6 text-sm uppercase tracking-wide">
                    {t("comparison.championship")}
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200">
                {rows.map((row) => (
                  <tr
                    key={row[0]}
                    className="transition hover:bg-amber-50/60"
                  >
                    <td className="p-6 font-black text-slate-950">
                      {row[0]}
                    </td>

                    <td className="p-6 text-slate-600">
                      {row[1]}
                    </td>

                    <td className="p-6 text-slate-600">
                      {row[2]}
                    </td>

                    <td className="p-6 text-slate-600">
                      {row[3]}
                    </td>
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