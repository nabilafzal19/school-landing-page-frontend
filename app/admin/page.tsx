"use client";

import { useState } from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { ArrowLeft, LogOut, Pencil, Plus, Trash2, X } from "lucide-react";
import { useAdmin, getCategoryColor } from "@/context/AdminContext";
import AdminLoginModal from "@/components/ui/AdminLoginModal";
import { SCHOOL_NAME, SCHOOL_TAGLINE } from "@/lib/constants";
import { Notice, NoticeCategory } from "@/lib/types";
import { formatDate } from "@/lib/utils";

const categories: NoticeCategory[] = [
  "General",
  "Exam",
  "Holiday",
  "Event",
  "Urgent",
];

const emptyForm: Omit<Notice, "id"> = {
  title: "",
  body: "",
  date: new Date().toISOString(),
  category: "General",
  isActive: true,
};

function SchoolLogo() {
  return (
    <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden="true">
      <rect width="40" height="40" rx="8" fill="#F4A825" />
      <path d="M20 8L8 16v12h8v-8h8v8h8V16L20 8z" fill="#0A1628" />
      <circle cx="20" cy="14" r="2" fill="#4A9EFF" />
    </svg>
  );
}

export default function AdminPage() {
  const {
    isLoggedIn,
    logout,
    notices,
    addNotice,
    updateNotice,
    deleteNotice,
  } = useAdmin();
  const [loginOpen, setLoginOpen] = useState(!isLoggedIn);
  const [formOpen, setFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<Omit<Notice, "id">>(emptyForm);

  const openAdd = () => {
    setEditingId(null);
    setForm({ ...emptyForm, date: new Date().toISOString() });
    setFormOpen(true);
  };

  const openEdit = (notice: Notice) => {
    setEditingId(notice.id);
    setForm({
      title: notice.title,
      body: notice.body,
      date: notice.date,
      category: notice.category,
      isActive: notice.isActive,
    });
    setFormOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      updateNotice(editingId, form);
    } else {
      addNotice(form);
    }
    setFormOpen(false);
    setForm(emptyForm);
    setEditingId(null);
  };

  if (!isLoggedIn) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-cream via-paper to-sand px-4">
        <div className="mb-6 flex items-center gap-3">
          <SchoolLogo />
          <div className="text-left">
            <h1 className="font-display text-xl font-bold text-navy sm:text-2xl">
              {SCHOOL_NAME}
            </h1>
            <p className="text-sm text-slate-500">{SCHOOL_TAGLINE}</p>
          </div>
        </div>
        <div className="card-light w-full max-w-sm p-8 text-center">
          <h2 className="mb-2 font-display text-lg font-semibold text-navy">
            Admin Dashboard
          </h2>
          <p className="mb-6 text-sm text-slate-500">
            Sign in to manage the school notice board
          </p>
          <button
            onClick={() => setLoginOpen(true)}
            className="touch-target w-full rounded-full bg-gold py-3 font-semibold text-navy transition-colors hover:bg-gold-light"
          >
            Sign In
          </button>
          <Link
            href="/"
            className="mt-4 inline-flex items-center gap-1 text-sm text-slate-500 hover:text-navy"
          >
            <ArrowLeft size={14} />
            Back to website
          </Link>
        </div>
        <AdminLoginModal open={loginOpen} onOpenChange={setLoginOpen} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Top bar — matches landing navbar */}
      <header className="border-b border-stone-200/80 bg-cream/95 backdrop-blur-md">
        <div className="section-container flex flex-wrap items-center justify-between gap-4 py-4">
          <div className="flex items-center gap-3">
            <SchoolLogo />
            <div>
              <h1 className="font-display text-lg font-bold text-navy">
                Admin Panel
              </h1>
              <p className="font-mono text-[10px] uppercase tracking-widest text-gold-dark">
                Notice Board Manager
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <Link
              href="/"
              className="flex items-center gap-1.5 rounded-lg border border-stone-200/80 bg-pearl px-3 py-2 text-sm text-slate-600 transition-colors hover:text-navy"
            >
              <ArrowLeft size={14} />
              <span className="hidden sm:inline">Back to Website</span>
              <span className="sm:hidden">Back</span>
            </Link>
            <button
              onClick={openAdd}
              className="flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-navy transition-colors hover:bg-gold-light"
            >
              <Plus size={16} />
              Add Notice
            </button>
            <button
              onClick={logout}
              className="flex items-center gap-2 rounded-lg border border-stone-200/80 bg-pearl px-3 py-2 text-sm text-slate-600 transition-colors hover:text-red-600"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="section-container py-8 sm:py-10">
        <div className="mb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-gold-dark">
            Manage
          </span>
          <h2 className="mt-2 font-display text-2xl font-bold text-navy sm:text-3xl">
            School Notices
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            {notices.length} notice{notices.length !== 1 ? "s" : ""} ·{" "}
            {notices.filter((n) => n.isActive).length} active on the board
          </p>
        </div>

        {/* Mobile cards */}
        <div className="space-y-3 md:hidden">
          {notices.map((notice) => (
            <motion.div
              key={notice.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="card-light p-4"
            >
              <div className="mb-2 flex items-start justify-between gap-2">
                <h3 className="font-semibold text-navy">{notice.title}</h3>
                <span
                  className={`shrink-0 rounded-full border px-2 py-0.5 font-mono text-[10px] ${getCategoryColor(notice.category)}`}
                >
                  {notice.category}
                </span>
              </div>
              <p className="mb-3 line-clamp-2 text-xs text-slate-500">
                {notice.body}
              </p>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-slate-400">
                  {formatDate(notice.date)} ·{" "}
                  <span
                    className={
                      notice.isActive ? "text-green-600" : "text-slate-400"
                    }
                  >
                    {notice.isActive ? "Active" : "Inactive"}
                  </span>
                </span>
                <div className="flex gap-1">
                  <button
                    onClick={() => openEdit(notice)}
                    className="touch-target rounded p-2 text-slate-400 hover:bg-sand hover:text-gold-dark"
                    aria-label="Edit notice"
                  >
                    <Pencil size={14} />
                  </button>
                  <button
                    onClick={() => deleteNotice(notice.id)}
                    className="touch-target rounded p-2 text-slate-400 hover:bg-sand hover:text-red-600"
                    aria-label="Delete notice"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop table */}
        <div className="hidden overflow-x-auto card-light md:block">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-stone-200/80 bg-sand/50">
              <tr>
                <th className="px-4 py-3 font-mono text-xs text-slate-500">
                  Title
                </th>
                <th className="px-4 py-3 font-mono text-xs text-slate-500">
                  Category
                </th>
                <th className="px-4 py-3 font-mono text-xs text-slate-500">
                  Date
                </th>
                <th className="px-4 py-3 font-mono text-xs text-slate-500">
                  Status
                </th>
                <th className="px-4 py-3 font-mono text-xs text-slate-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {notices.map((notice) => (
                <motion.tr
                  key={notice.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="border-b border-stone-200/60 last:border-0 hover:bg-sand/30"
                >
                  <td className="px-4 py-3 font-medium text-navy">
                    {notice.title}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`rounded-full border px-2 py-0.5 font-mono text-[10px] ${getCategoryColor(notice.category)}`}
                    >
                      {notice.category}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-500">
                    {formatDate(notice.date)}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`text-xs font-medium ${notice.isActive ? "text-green-600" : "text-slate-400"}`}
                    >
                      {notice.isActive ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-1">
                      <button
                        onClick={() => openEdit(notice)}
                        className="rounded p-1.5 text-slate-400 hover:bg-sand hover:text-gold-dark"
                        aria-label="Edit notice"
                      >
                        <Pencil size={14} />
                      </button>
                      <button
                        onClick={() => deleteNotice(notice.id)}
                        className="rounded p-1.5 text-slate-400 hover:bg-sand hover:text-red-600"
                        aria-label="Delete notice"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <Dialog.Root open={formOpen} onOpenChange={setFormOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-navy/40 backdrop-blur-sm" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-50 max-h-[90vh] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl border border-stone-200/80 bg-pearl p-6 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <Dialog.Title className="font-display text-xl font-semibold text-navy">
                {editingId ? "Edit Notice" : "Add Notice"}
              </Dialog.Title>
              <Dialog.Close className="touch-target text-slate-400 hover:text-navy">
                <X size={20} />
              </Dialog.Close>
            </div>
            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="mb-1 block font-mono text-xs text-slate-500">
                  Title
                </label>
                <input
                  type="text"
                  required
                  value={form.title}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, title: e.target.value }))
                  }
                  className="w-full rounded-lg border border-stone-200/80 bg-cream px-4 py-2.5 text-navy outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                />
              </div>
              <div>
                <label className="mb-1 block font-mono text-xs text-slate-500">
                  Body
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.body}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, body: e.target.value }))
                  }
                  className="w-full resize-none rounded-lg border border-stone-200/80 bg-cream px-4 py-2.5 text-navy outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block font-mono text-xs text-slate-500">
                    Category
                  </label>
                  <select
                    value={form.category}
                    onChange={(e) =>
                      setForm((p) => ({
                        ...p,
                        category: e.target.value as NoticeCategory,
                      }))
                    }
                    className="w-full rounded-lg border border-stone-200/80 bg-cream px-4 py-2.5 text-navy outline-none focus:border-gold"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1 block font-mono text-xs text-slate-500">
                    Date
                  </label>
                  <input
                    type="date"
                    value={form.date.split("T")[0]}
                    onChange={(e) =>
                      setForm((p) => ({
                        ...p,
                        date: new Date(e.target.value).toISOString(),
                      }))
                    }
                    className="w-full rounded-lg border border-stone-200/80 bg-cream px-4 py-2.5 text-navy outline-none focus:border-gold"
                  />
                </div>
              </div>
              <label className="flex items-center gap-2 text-sm text-slate-600">
                <input
                  type="checkbox"
                  checked={form.isActive}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, isActive: e.target.checked }))
                  }
                  className="rounded accent-gold"
                />
                Active (visible on notice board)
              </label>
              <button
                type="submit"
                className="w-full rounded-full bg-gold py-3 font-semibold text-navy transition-colors hover:bg-gold-light"
              >
                {editingId ? "Update Notice" : "Create Notice"}
              </button>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
