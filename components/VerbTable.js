"use client";

import { useState } from "react";
import { verbs } from "../lib/verbs";

export default function VerbTable() {
  const [q, setQ] = useState("");
  const term = q.trim().toLowerCase();
  const list = term
    ? verbs.filter((v) => [v.v1, v.v2, v.v3, v.v4, v.bn].some((x) => x.toLowerCase().includes(term)))
    : verbs;

  return (
    <>
      <input
        className="search"
        type="search"
        placeholder="Search a verb (English or বাংলা)..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      <p className="count">{list.length} verbs</p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>#</th><th>V1 (Base)</th><th>V2 (Past)</th><th>V3 (Past Participle)</th><th>V4 (V-ing)</th><th>বাংলা অর্থ</th>
            </tr>
          </thead>
          <tbody>
            {list.map((v, i) => (
              <tr key={v.v1}>
                <td>{i + 1}</td><td><b>{v.v1}</b></td><td>{v.v2}</td><td>{v.v3}</td><td>{v.v4}</td><td>{v.bn}</td>
              </tr>
            ))}
            {list.length === 0 && (
              <tr><td colSpan={6}>No verb found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
