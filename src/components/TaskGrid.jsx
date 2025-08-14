import { useMemo, useState } from "react";

export default function TaskGrid({ tasks }) {
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("all");
  const [onlyHigh, setOnlyHigh] = useState(false);

  const filtered = useMemo(() => {
    return tasks
      .filter((t) => (status === "all" ? true : t.status === status))
      .filter((t) => (onlyHigh ? t.priority === "high" : true))
      .filter((t) => t.title.toLowerCase().includes(q.toLowerCase()));
  }, [tasks, status, onlyHigh, q]);

  const empty = filtered.length === 0;

  return (
    <section className="section fade-in">
      <div className="container">
        <h2 style={{ marginBottom: 20 }}>Project Tasks</h2>

        {/* Toolbar */}
        <div className="task-toolbar">
          <input
            className="input"
            placeholder="Search tasks…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <select
            className="select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="all">All status</option>
            <option value="todo">To-Do</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>
          <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <input
              type="checkbox"
              checked={onlyHigh}
              onChange={(e) => setOnlyHigh(e.target.checked)}
            />
            High priority
          </label>
          {filtered.length > 0 && <span className="tag">{filtered.length} result(s)</span>}
        </div>

        {/* Conditional rendering */}
        {empty ? (
          <div className="card" role="status">No tasks match your filters.</div>
        ) : (
          <div className="cards">
            {filtered.map((t) => (
              <article key={t.id} className="card task">
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <h4>{t.title}</h4>
                  <span className="tag">{t.status}</span>
                </div>
                <small>Assignee: {t.assignee}</small>
                <div style={{ display: "flex", gap: 8 }}>
                  <span className="tag">{t.label}</span>
                  <span className="tag">Priority: {t.priority}</span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
