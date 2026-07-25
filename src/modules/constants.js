// Constants Module - Configuration and constants
const AO3_BASE_URL = 'https://archiveofourown.org';
const MAX_PAGES_FETCH = 100;
const ITEMS_PER_PAGE = 20;
const DEFAULT_PAGES_TO_LOAD = 5;
const PAGE_FETCH_DELAY = 100;
const CACHE_EXPIRY_MS = 30 * 60 * 1000; // 30 minutes

// Error Messages
const ERROR_MESSAGES = {
  FETCH_FAILED: 'There are two wolves inside of you (we had a teleport malfunction). Don\'t worry, we can try again!',
  NO_DATA: 'Fascinating, there was nothing here! Let\'s try again.'
};
