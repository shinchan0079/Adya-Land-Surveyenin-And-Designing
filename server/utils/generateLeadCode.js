import { dbGet } from '../config/database.js';

export const generateLeadCode = async () => {
  const currentYear = new Date().getFullYear();
  
  // Find the highest lead code for the current year
  const result = await dbGet(
    `SELECT lead_code FROM leads WHERE lead_code LIKE ? ORDER BY id DESC LIMIT 1`,
    [`ADYA-${currentYear}-%`]
  );

  let nextSequence = 1;

  if (result && result.lead_code) {
    const parts = result.lead_code.split('-');
    if (parts.length === 3) {
      const lastSequence = parseInt(parts[2], 10);
      if (!isNaN(lastSequence)) {
        nextSequence = lastSequence + 1;
      }
    }
  }

  const sequenceString = nextSequence.toString().padStart(4, '0');
  return `ADYA-${currentYear}-${sequenceString}`;
};
