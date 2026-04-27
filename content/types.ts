export type Locale = 'mr' | 'en';
export type Localized<T = string> = Record<Locale, T>;

export interface VillageIdentity {
  name: Localized;
  shortName: Localized;
  taluka: Localized;
  district: Localized;
  state: Localized;
  pin: string;
  established: string;
  area: { hectares: number };
  population?: { total: number; male?: number; female?: number };
  households?: number;
  anganwadiCount: number;
  govtSchoolCount: number;
  privateSchoolCount: number;
  geo?: { lat: number; lng: number };
  contact: {
    phone: string;
    email: string;
    addressLines: Localized<string[]>;
  };
  officeHours: {
    weekdays: string;
    saturday: string;
    sunday: 'closed';
  };
}

export type MemberRole =
  | 'sarpanch'
  | 'up-sarpanch'
  | 'gram-sevak'
  | 'clerk'
  | 'operator'
  | 'shipai'
  | 'mgnrega'
  | 'panch';

export type MemberCategory = 'leadership' | 'staff' | 'panch';

export interface Member {
  id: string;
  role: MemberRole;
  category: MemberCategory;
  roleLabel: Localized;
  name: Localized;
  phone?: string;
  email?: string;
  ward?: number;
  tenureStart?: string;
  tenureEnd?: string;
  photo: string;
  photoBlur?: string;
  order: number;
}

export type WorkStatus = 'completed' | 'in-progress' | 'planned';

export interface WorkImage {
  src: string;
  alt: Localized;
  blur?: string;
}

export interface Work {
  id: string;
  slug: string;
  title: Localized;
  description: Localized;
  status: WorkStatus;
  budgetINR?: number;
  year: number;
  startDate?: string;
  completionDate?: string;
  category: Localized;
  images: WorkImage[];
  featured?: boolean;
}

export type NoticeCategory = 'important' | 'general' | 'meeting' | 'scheme' | 'tender';

export interface NoticeAttachment {
  label: Localized;
  href: string;
  sizeKB?: number;
}

export interface Notice {
  id: string;
  slug: string;
  title: Localized;
  summary: Localized;
  body: Localized;
  category: NoticeCategory;
  publishedAt: string;
  expiresAt?: string;
  pinned?: boolean;
  attachments?: NoticeAttachment[];
}

export type SchemeCategory = 'central' | 'state' | 'panchayat';

export interface Scheme {
  id: string;
  slug: string;
  title: Localized;
  shortDescription: Localized;
  body: Localized;
  eligibility: Localized<string[]>;
  documentsRequired: Localized<string[]>;
  applicationProcess: Localized;
  beneficiaries?: Localized;
  category: SchemeCategory;
  authorityLink?: string;
}

export type MeetingType = 'gram-sabha' | 'monthly' | 'special';

export interface Meeting {
  id: string;
  date: string;
  type: MeetingType;
  title: Localized;
  agenda: Localized<string[]>;
  minutesPdf?: string;
  attendees?: number;
  resolutions?: Localized<string[]>;
}

export type DownloadCategory = 'form' | 'report' | 'circular' | 'other';

export interface DownloadItem {
  id: string;
  title: Localized;
  description?: Localized;
  href: string;
  category: DownloadCategory;
  sizeKB: number;
  updatedAt: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: Localized;
  caption?: Localized;
  blur?: string;
  takenAt?: string;
  album?: string;
}

export interface CharterCommitment {
  id: string;
  service: Localized;
  responsibleOfficer: Localized;
  timeline: Localized;
  fee?: Localized;
}

export type RtiOfficerType = 'pio' | 'apio' | 'appellate';

export interface RtiContact {
  id: string;
  type: RtiOfficerType;
  designation: Localized;
  name: Localized;
  phone?: string;
  email?: string;
}
