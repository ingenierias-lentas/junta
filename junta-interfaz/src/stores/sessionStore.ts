import { create } from 'zustand';
import { Session } from '@ory/client';

interface SessionState {
  session: Session | null;
  setSession: (session: Session) => void;
  logoutUrl: string | null;
  setLogoutUrl: (url: string) => void;
}

export const useSessionStore = create<SessionState>((set) => ({
  session: null,
  setSession: (session) => set({ session }),
  logoutUrl: null,
  setLogoutUrl: (url) => set({ logoutUrl: url }),
}));
