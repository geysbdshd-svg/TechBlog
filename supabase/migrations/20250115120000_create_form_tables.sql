/*
# [Structural] Create tables for contact messages and newsletter subscriptions

## Query Description: 
This migration creates two new tables: `contact_messages` and `newsletter_subscriptions`. 
- `contact_messages` will store submissions from your website's contact form.
- `newsletter_subscriptions` will store email addresses from your newsletter signup forms.

This operation is safe and will not affect any existing data. It adds new structures to your database to enable form functionality.

## Metadata:
- Schema-Category: "Structural"
- Impact-Level: "Low"
- Requires-Backup: false
- Reversible: true (you can drop the tables if needed)

## Structure Details:
- **Table Created:** `public.contact_messages`
  - Columns: `id` (uuid), `created_at` (timestamptz), `name` (text), `email` (text), `subject` (text), `message` (text), `is_read` (bool)
- **Table Created:** `public.newsletter_subscriptions`
  - Columns: `id` (uuid), `created_at` (timestamptz), `email` (text), `is_active` (bool)

## Security Implications:
- RLS Status: Enabled on both tables.
- Policy Changes: Yes. New policies are created.
  - An `INSERT` policy is added to both tables, allowing anonymous users to submit data.
  - `SELECT`, `UPDATE`, and `DELETE` operations are restricted by default, ensuring that submitted data cannot be publicly read, modified, or deleted.
- Auth Requirements: None for insertion. Authenticated access would be required for management (not defined in this script).

## Performance Impact:
- Indexes: Primary key indexes are automatically created. An index is added to the `email` column of `newsletter_subscriptions` to prevent duplicates and speed up lookups.
- Triggers: None.
- Estimated Impact: Low. These are simple tables with minimal performance overhead.
*/

-- 1. Create contact_messages table
CREATE TABLE public.contact_messages (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    name text NOT NULL,
    email text NOT NULL,
    subject text,
    message text NOT NULL,
    is_read boolean NOT NULL DEFAULT false,
    CONSTRAINT contact_messages_pkey PRIMARY KEY (id)
);

-- Add comments to the table and columns
COMMENT ON TABLE public.contact_messages IS 'Stores messages submitted through the contact form.';
COMMENT ON COLUMN public.contact_messages.is_read IS 'Indicates if the message has been read by an admin.';

-- 2. Create newsletter_subscriptions table
CREATE TABLE public.newsletter_subscriptions (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    email text NOT NULL,
    is_active boolean NOT NULL DEFAULT true,
    CONSTRAINT newsletter_subscriptions_pkey PRIMARY KEY (id),
    CONSTRAINT newsletter_subscriptions_email_key UNIQUE (email)
);

-- Add comments to the table and columns
COMMENT ON TABLE public.newsletter_subscriptions IS 'Stores email addresses for the newsletter.';
COMMENT ON COLUMN public.newsletter_subscriptions.is_active IS 'Indicates if the subscription is currently active.';

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- 4. Create RLS policies for public insertion
CREATE POLICY "Allow anonymous inserts for contact messages"
ON public.contact_messages
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts for newsletter subscriptions"
ON public.newsletter_subscriptions
FOR INSERT
WITH CHECK (true);

-- Note: SELECT, UPDATE, DELETE policies are intentionally omitted.
-- This means no one, not even anonymous or authenticated users, can read, update, or delete
-- data through the API by default. You would need to create specific policies
-- for an authenticated 'admin' role to manage this data.
