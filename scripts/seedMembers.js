import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Error: Supabase URL or Anon Key missing in .env file');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const members = [
  {
    membership_id: 'GWA/CM/001',
    name: 'Shabaaz Shaikh',
    type: 'Core Member',
    designation: 'Founder & President',
    dob: '1987-11-15',
    blood_group: 'O+',
    gender: 'Male',
    nationality: 'Indian',
    issue_date: '04/03/2024',
    expiry_date: '03/03/2029',
    phone: '7373730803',
    status: 'Active'
  },
  {
    membership_id: 'GWA/AM/024',
    name: 'Ayaan Kashyap',
    type: 'Advisory Member',
    designation: 'Legal Advisor',
    dob: '1989-05-22',
    blood_group: 'A+',
    gender: 'Male',
    nationality: 'Indian',
    issue_date: '10/05/2024',
    expiry_date: '09/05/2029',
    phone: '7373730803',
    status: 'Active'
  },
  {
    membership_id: 'GWA/CM/002',
    name: 'Salman Khan',
    type: 'Core Member',
    designation: 'Chairman',
    dob: '1985-01-01',
    blood_group: 'B+',
    gender: 'Male',
    nationality: 'Indian',
    issue_date: '04/03/2024',
    expiry_date: '03/03/2029',
    phone: '7373730803',
    status: 'Active'
  },
  {
    membership_id: 'GWA/CM/003',
    name: 'Rizwan Khan',
    type: 'Core Member',
    designation: 'Director',
    dob: '1988-06-12',
    blood_group: 'O-',
    gender: 'Male',
    nationality: 'Indian',
    issue_date: '04/03/2024',
    expiry_date: '03/03/2029',
    phone: '7373730803',
    status: 'Active'
  },
  {
    membership_id: 'GWA/CM/004',
    name: 'Ghulam Mustafa Khan',
    type: 'Core Member',
    designation: 'Joint Treasurer',
    dob: '1990-03-25',
    blood_group: 'AB+',
    gender: 'Male',
    nationality: 'Indian',
    issue_date: '04/03/2024',
    expiry_date: '03/03/2029',
    phone: '7373730803',
    status: 'Active'
  },
  {
    membership_id: 'GWA/CM/005',
    name: 'Ayyub Shaikh',
    type: 'Core Member',
    designation: 'Joint Secretary',
    dob: '1992-08-10',
    blood_group: 'B-',
    gender: 'Male',
    nationality: 'Indian',
    issue_date: '04/03/2024',
    expiry_date: '03/03/2029',
    phone: '7373730803',
    status: 'Active'
  },
  {
    membership_id: 'GWA/FE/001',
    name: 'Danish Khan',
    type: 'Field Executive',
    designation: 'Field Executive',
    dob: '1995-12-05',
    blood_group: 'O+',
    gender: 'Male',
    nationality: 'Indian',
    issue_date: '04/03/2024',
    expiry_date: '03/03/2029',
    phone: '7373730803',
    status: 'Active'
  },
  {
    membership_id: 'GWA/VM/101',
    name: 'Rameez Shaikh',
    type: 'Volunteer',
    designation: 'Member',
    dob: '1997-04-18',
    blood_group: 'A-',
    gender: 'Male',
    nationality: 'Indian',
    issue_date: '04/03/2024',
    expiry_date: '03/03/2029',
    phone: '7373730803',
    status: 'Active'
  },
  {
    membership_id: 'GWA/VM/102',
    name: 'Arbaz Sayyed',
    type: 'Volunteer',
    designation: 'Member',
    dob: '1998-09-22',
    blood_group: 'B+',
    gender: 'Male',
    nationality: 'Indian',
    issue_date: '04/03/2024',
    expiry_date: '03/03/2029',
    phone: '7373730803',
    status: 'Active'
  },
  {
    membership_id: 'GWA/VM/103',
    name: 'Abbas Attar',
    type: 'Volunteer',
    designation: 'Member',
    dob: '1999-11-30',
    blood_group: 'O+',
    gender: 'Male',
    nationality: 'Indian',
    issue_date: '04/03/2024',
    expiry_date: '03/03/2029',
    phone: '7373730803',
    status: 'Active'
  }
];

async function seed() {
  console.log('Starting seed process...');
  
  for (const member of members) {
    const { data, error } = await supabase
      .from('members')
      .upsert(member, { onConflict: 'membership_id' });
    
    if (error) {
      console.error(`Error inserting member ${member.membership_id}:`, error.message);
    } else {
      console.log(`Successfully seeded member: ${member.name} (${member.membership_id})`);
    }
  }
  
  console.log('Seed process completed.');
}

seed();
