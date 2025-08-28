/*
# [Enable Form Submissions]
This script enables Row Level Security (RLS) and creates policies to allow anonymous users to submit data to the 'contacts' and 'subscriptions' tables. This is necessary for the contact and newsletter forms to function correctly.

## Query Description: [This operation configures database security to permit public form submissions. Without this, all attempts to send messages or subscribe would be blocked by default database security rules. It is a safe and necessary step for the website's functionality.]

## Metadata:
- Schema-Category: ["Security", "Structural"]
- Impact-Level: ["Low"]
- Requires-Backup: [false]
- Reversible: [true]

## Structure Details:
- Tables affected: `public.contacts`, `public.subscriptions`
- Operations: `ALTER TABLE`, `CREATE POLICY`

## Security Implications:
- RLS Status: Enabled
- Policy Changes: Yes. Adds INSERT policies for the `anon` role.
- Auth Requirements: This specifically targets anonymous (public) users.

## Performance Impact:
- Indexes: [None]
- Triggers: [None]
- Estimated Impact: [Negligible. RLS policies can have a minor overhead, but for simple INSERTs like this, the impact is minimal.]
*/

-- 1. Enable RLS on the tables
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;

-- 2. Create INSERT policy for contacts table
CREATE POLICY "Allow anonymous inserts for contact forms"
ON public.contacts
FOR INSERT
TO anon
WITH CHECK (true);

-- 3. Create INSERT policy for subscriptions table
CREATE POLICY "Allow anonymous inserts for newsletter subscriptions"
ON public.subscriptions
FOR INSERT
TO anon
WITH CHECK (true);
