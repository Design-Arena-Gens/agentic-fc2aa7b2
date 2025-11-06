import {
  CalendarDays,
  CheckCircle2,
  Clock4,
  Filter,
  ListTodo,
  Plus,
  Search,
  Users,
  Zap,
} from "lucide-react";

export default function Home() {
  const metrics = [
    { label: "Active Projects", value: 12, delta: "+3 this week", icon: Zap },
    { label: "Completed", value: 48, delta: "92% on-time delivery", icon: CheckCircle2 },
    { label: "At Risk", value: 2, delta: "Review mitigation plans", icon: Clock4 },
    { label: "Team Members", value: 36, delta: "5 contractors onboarding", icon: Users },
  ];

  const projects = [
    {
      name: "Nova Web Revamp",
      owner: "Product Squad A",
      status: "On Track",
      due: "Jun 24",
      progress: 76,
      tasks: { open: 6, total: 34 },
    },
    {
      name: "Mobile Onboarding 3.0",
      owner: "Growth Team",
      status: "At Risk",
      due: "Jul 12",
      progress: 48,
      tasks: { open: 12, total: 28 },
    },
    {
      name: "Data Warehouse Migration",
      owner: "Platform Team",
      status: "Behind",
      due: "Aug 02",
      progress: 32,
      tasks: { open: 18, total: 41 },
    },
    {
      name: "AI Assistant Alpha",
      owner: "R&D Guild",
      status: "On Track",
      due: "Oct 18",
      progress: 58,
      tasks: { open: 9, total: 25 },
    },
  ];

  const milestones = [
    {
      title: "Nova sprint 6 QA window",
      owner: "QA Chapter",
      date: "June 18",
      type: "QA",
    },
    {
      title: "Growth funnel experimentation kickoff",
      owner: "Growth Team",
      date: "June 21",
      type: "Kickoff",
    },
    {
      title: "Warehouse migration dry run",
      owner: "Platform Team",
      date: "June 29",
      type: "Migration",
    },
  ];

  const teamLoad = [
    { name: "Design", capacity: 78, focus: "Nova Revamp" },
    { name: "Backend", capacity: 92, focus: "Warehouse Migration" },
    { name: "Mobile", capacity: 64, focus: "Onboarding 3.0" },
    { name: "QA", capacity: 55, focus: "Cross-project" },
  ];

  const updates = [
    {
      project: "AI Assistant Alpha",
      message: "Voice prototype shipped to stakeholders.",
      time: "2h ago",
      author: "Priya S.",
    },
    {
      project: "Mobile Onboarding 3.0",
      message: "Analytics events validated in staging.",
      time: "7h ago",
      author: "Mateo L.",
    },
    {
      project: "Data Warehouse Migration",
      message: "Blocked on legacy API rate limits.",
      time: "Yesterday",
      author: "Chloe K.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 bg-[radial-gradient(80%_80%_at_50%_0%,rgba(56,189,248,0.2),rgba(15,23,42,0.6)_60%,rgba(15,23,42,1)_100%)] px-6 py-10 text-slate-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <header className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-slate-900/40 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/70">
                Project Control Center
              </p>
              <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                Project Tracker Dashboard
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-400">
                Track cross-functional delivery, surface blockers early, and keep momentum with a
                unified pulse on every initiative.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="inline-flex items-center gap-2 rounded-full border border-cyan-400/60 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:border-cyan-300 hover:text-cyan-100">
                <Filter className="h-4 w-4" />
                Filters
              </button>
              <button className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-300">
                <Plus className="h-4 w-4" />
                New Project
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-3 rounded-2xl border border-white/5 bg-slate-900/70 p-4 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <input
                className="w-full rounded-xl border border-white/5 bg-slate-950/60 py-2 pl-9 pr-4 text-sm outline-none ring-cyan-400/50 transition focus:ring-2"
                placeholder="Search projects, owners, or milestones"
              />
            </div>
            <div className="grid w-full grid-cols-2 gap-2 sm:w-auto sm:grid-cols-3">
              <span className="rounded-xl border border-white/10 bg-slate-950/30 px-3 py-2 text-xs uppercase tracking-wide text-slate-400">
                Q2 portfolio
              </span>
              <span className="rounded-xl border border-white/10 bg-slate-950/30 px-3 py-2 text-xs uppercase tracking-wide text-slate-400">
                Sprint 24
              </span>
              <span className="rounded-xl border border-white/10 bg-slate-950/30 px-3 py-2 text-xs uppercase tracking-wide text-slate-400">
                All teams
              </span>
            </div>
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => (
            <article
              key={metric.label}
              className="group rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-lg shadow-cyan-500/10 transition hover:translate-y-[-2px] hover:border-cyan-300/40"
            >
              <div className="flex items-start justify-between">
                <div className="rounded-2xl bg-cyan-500/10 p-3 text-cyan-200">
                  <metric.icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  KPI
                </span>
              </div>
              <h2 className="mt-6 text-sm font-semibold text-slate-400">{metric.label}</h2>
              <p className="mt-2 text-3xl font-semibold text-white">{metric.value}</p>
              <p className="mt-3 flex items-center gap-2 text-xs font-medium text-cyan-200">
                <ArrowBullet />
                {metric.delta}
              </p>
            </article>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">Portfolio Snapshot</h2>
              <span className="inline-flex items-center gap-2 text-xs text-slate-400">
                <ListTodo className="h-4 w-4" />
                24 open initiatives
              </span>
            </div>
            <div className="mt-4 flex flex-col gap-4">
              {projects.map((project) => (
                <article
                  key={project.name}
                  className="rounded-3xl border border-white/5 bg-slate-900/60 p-5 transition hover:border-cyan-300/30"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                        <StatusBadge status={project.status} />
                      </div>
                      <p className="mt-2 text-sm text-slate-400">{project.owner}</p>
                    </div>
                    <div className="grid gap-2 text-sm text-slate-300 sm:grid-cols-2 md:text-right">
                      <span className="flex items-center gap-2 md:justify-end">
                        <CalendarDays className="h-4 w-4 text-slate-500" />
                        Due {project.due}
                      </span>
                      <span className="flex items-center gap-2 md:justify-end">
                        <Users className="h-4 w-4 text-slate-500" />
                        {project.tasks.open} / {project.tasks.total} open tasks
                      </span>
                    </div>
                  </div>
                  <div className="mt-5">
                    <ProgressBar value={project.progress} />
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="flex flex-col gap-6">
            <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-white">Critical Milestones</h2>
                <Clock4 className="h-5 w-5 text-slate-500" />
              </div>
              <div className="mt-5 space-y-4">
                {milestones.map((milestone) => (
                  <div
                    key={milestone.title}
                    className="group flex items-start gap-3 rounded-2xl border border-white/5 bg-slate-950/40 p-4 transition hover:border-cyan-300/30"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/10 text-sm font-semibold text-cyan-200">
                      {milestone.type.substring(0, 2)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{milestone.title}</p>
                      <p className="mt-1 text-xs text-slate-400">{milestone.owner}</p>
                      <p className="mt-2 text-xs font-medium text-cyan-200">{milestone.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-white">Team Capacity</h2>
                <Users className="h-5 w-5 text-slate-500" />
              </div>
              <div className="mt-5 space-y-4">
                {teamLoad.map((team) => (
                  <div key={team.name}>
                    <div className="flex items-center justify-between text-sm text-slate-300">
                      <span className="font-medium text-white">{team.name}</span>
                      <span>{team.capacity}%</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-slate-800">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500"
                        style={{ width: `${team.capacity}%` }}
                      />
                    </div>
                    <p className="mt-2 text-xs text-slate-500">Focus: {team.focus}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section className="grid gap-6 lg:grid-cols-[2fr,1fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">Delivery Timeline</h2>
              <span className="flex items-center gap-2 text-xs text-slate-400">
                <CalendarDays className="h-4 w-4" />
                Next 6 weeks
              </span>
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {projects.slice(0, 3).map((project) => (
                <div key={project.name} className="rounded-2xl border border-white/5 bg-slate-950/50 p-4">
                  <p className="text-sm font-semibold text-white">{project.name}</p>
                  <p className="mt-2 text-xs text-slate-400">{project.owner}</p>
                  <div className="mt-4 space-y-2">
                    <p className="text-xs text-slate-500">Progress</p>
                    <ProgressBar value={project.progress} compact />
                    <p className="text-xs text-slate-500">
                      {project.tasks.open} open tasks · Due {project.due}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">Latest Updates</h2>
              <span className="text-xs text-slate-400">Auto-synced</span>
            </div>
            <div className="mt-6 space-y-5">
              {updates.map((update) => (
                <div key={update.project} className="rounded-2xl border border-white/5 bg-slate-950/40 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-cyan-300/80">
                    {update.project}
                  </p>
                  <p className="mt-2 text-sm text-white">{update.message}</p>
                  <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                    <span>{update.author}</span>
                    <span>{update.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function ProgressBar({ value, compact = false }: { value: number; compact?: boolean }) {
  return (
    <div className="space-y-2">
      {!compact ? (
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>Progress</span>
          <span>{value}%</span>
        </div>
      ) : (
        <div className="text-right text-xs text-slate-400">{value}%</div>
      )}
      <div className="h-2 rounded-full bg-slate-800">
        <div
          className="h-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    "On Track":
      "bg-emerald-400/10 text-emerald-200 border border-emerald-400/30 shadow-emerald-500/20",
    "At Risk": "bg-amber-400/10 text-amber-200 border border-amber-400/30 shadow-amber-500/20",
    Behind: "bg-rose-400/10 text-rose-200 border border-rose-400/30 shadow-rose-500/20",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold shadow-lg ${styles[status] ?? "bg-slate-700/60 text-slate-200 border border-white/10"}`}
    >
      <span className="h-2 w-2 rounded-full bg-current" />
      {status}
    </span>
  );
}

function ArrowBullet() {
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-200">
      <Zap className="h-3 w-3" />
    </span>
  );
}
