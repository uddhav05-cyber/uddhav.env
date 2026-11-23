export const RESUME_PATH = '/Uddhav-Bhople-Resume.pdf';
export const RESUME_VERSION = '2026-10';

const driveUrl = process.env.NEXT_PUBLIC_RESUME_DRIVE_URL?.trim();
export const RESUME_DRIVE_URL = driveUrl && /^https:\/\/drive\.google\.com\/file\/d\/[\w-]+\/view(?:\?[^\s#]*)?$/.test(driveUrl)
  ? driveUrl
  : undefined;
