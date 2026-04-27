import type {
  DownloadCategory,
  GalleryItem,
  Member,
  MemberCategory,
  Meeting,
  Notice,
  NoticeCategory,
  Scheme,
  Work,
  WorkStatus,
  CharterCommitment,
  RtiContact,
  DownloadItem,
  VillageIdentity,
} from './types';
import { village } from './village';
import { members } from './members';
import { works } from './works';
import { notices } from './notices';
import { schemes } from './schemes';
import { meetings } from './meetings';
import { downloads } from './downloads';
import { gallery } from './gallery';
import { charter } from './charter';
import { rtiContacts } from './rti';

export async function getVillage(): Promise<VillageIdentity> {
  return village;
}

export async function getMembers(category?: MemberCategory): Promise<Member[]> {
  const list = category ? members.filter((m) => m.category === category) : members;
  return [...list].sort((a, b) => a.order - b.order);
}

export async function getMemberById(id: string): Promise<Member | undefined> {
  return members.find((m) => m.id === id);
}

export async function getWorks(opts?: {
  status?: WorkStatus;
  featured?: boolean;
}): Promise<Work[]> {
  let list = works;
  if (opts?.status) list = list.filter((w) => w.status === opts.status);
  if (opts?.featured !== undefined) list = list.filter((w) => Boolean(w.featured) === opts.featured);
  return [...list].sort((a, b) => b.year - a.year);
}

export async function getWorkBySlug(slug: string): Promise<Work | undefined> {
  return works.find((w) => w.slug === slug);
}

export async function getNotices(opts?: {
  limit?: number;
  category?: NoticeCategory;
}): Promise<Notice[]> {
  let list = [...notices];
  if (opts?.category) list = list.filter((n) => n.category === opts.category);
  list.sort((a, b) => {
    if (a.pinned !== b.pinned) return a.pinned ? -1 : 1;
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });
  return opts?.limit ? list.slice(0, opts.limit) : list;
}

export async function getNoticeBySlug(slug: string): Promise<Notice | undefined> {
  return notices.find((n) => n.slug === slug);
}

export async function getSchemes(): Promise<Scheme[]> {
  return schemes;
}

export async function getSchemeBySlug(slug: string): Promise<Scheme | undefined> {
  return schemes.find((s) => s.slug === slug);
}

export async function getMeetings(opts?: { limit?: number }): Promise<Meeting[]> {
  const list = [...meetings].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  return opts?.limit ? list.slice(0, opts.limit) : list;
}

export async function getDownloads(category?: DownloadCategory): Promise<DownloadItem[]> {
  return category ? downloads.filter((d) => d.category === category) : downloads;
}

export async function getGallery(album?: string): Promise<GalleryItem[]> {
  return album ? gallery.filter((g) => g.album === album) : gallery;
}

export async function getCharter(): Promise<CharterCommitment[]> {
  return charter;
}

export async function getRtiContacts(): Promise<RtiContact[]> {
  return rtiContacts;
}
