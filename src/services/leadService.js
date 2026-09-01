const API_URL = "/api";

/**
 * Creates a new lead by sending a POST request to the backend.
 * 
 * @param {Object} leadData - The lead payload
 * @param {string} leadData.name - Customer Name
 * @param {string} leadData.phone - Customer Phone
 * @param {string} leadData.email - Customer Email (optional)
 * @param {string} leadData.whatsapp - Customer WhatsApp (optional)
 * @param {string} leadData.type - Enquiry Type (Contact, Survey, Training)
 * @param {string} leadData.service - Specific service requested
 * @param {string} leadData.location - Site/Customer Location
 * @param {Object} leadData.data - Additional dynamic data specific to the enquiry
 * @returns {Promise<Object>} The API response { success, message, leadCode, id }
 */
export const createLead = async (leadData) => {
  const response = await fetch(`${API_URL}/leads`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(leadData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || data.error || "Unable to submit enquiry. Please try again later.");
  }

  return data;
};
