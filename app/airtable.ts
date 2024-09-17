import Airtable from 'airtable';
import { FormData } from './components/LearnMoreForm';

const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_BASE_ID!);

export const addFormSubmission = async (formData: FormData) => {
  try {
    console.log('Attempting to add record to Airtable:', formData);
    const records = await base('Form Submissions').create([
      {
        fields: {
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone,
          Query: formData.query,
          'Submission Date': new Date().toISOString().split('T')[0],
        },
      },
    ]);
    console.log('Successfully added record:', records[0].getId());
    return records[0].getId();
  } catch (error) {
    console.error('Error adding record to Airtable:', error);
    throw error;
  }
};