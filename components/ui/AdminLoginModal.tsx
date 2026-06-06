"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { useAdmin } from "@/context/AdminContext";

interface AdminLoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AdminLoginModal({
  open,
  onOpenChange,
}: AdminLoginModalProps) {
  const { login } = useAdmin();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      setError("");
      onOpenChange(false);
      setUsername("");
      setPassword("");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl border border-slate-200 bg-white p-6 shadow-2xl">
          <div className="mb-6 flex items-center justify-between">
            <Dialog.Title className="font-display text-xl font-semibold text-navy">
              Admin Login
            </Dialog.Title>
            <Dialog.Close className="touch-target text-slate-400 hover:text-navy">
              <X size={20} />
            </Dialog.Close>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-1 block font-mono text-xs text-slate-500">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-navy outline-none focus:border-gold"
                required
              />
            </div>
            <div>
              <label className="mb-1 block font-mono text-xs text-slate-500">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-navy outline-none focus:border-gold"
                required
              />
            </div>
            {error && (
              <p className="text-sm text-red-600">{error}</p>
            )}
            <button
              type="submit"
              className="w-full rounded-lg bg-gold py-2.5 font-semibold text-navy transition-colors hover:bg-gold-light"
            >
              Sign In
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
