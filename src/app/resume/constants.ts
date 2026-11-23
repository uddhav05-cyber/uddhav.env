export const RESUME_PATH = '/Uddhav-Bhople-Resume.pdf';
export const RESUME_VERSION = '2a36c2dba65c';

const driveUrl = process.env.NEXT_PUBLIC_RESUME_DRIVE_URL?.trim();
export const RESUME_DRIVE_URL = driveUrl && /^https:\/\/drive\.google\.com\/file\/d\/[\w-]+\/view(?:\?[^\s#]*)?$/.test(driveUrl)
  ? driveUrl
  : 'https://drive.google.com/file/d/1o-zMFwzodeDenZ1dg6ziycXLqWH6abXV/view';
