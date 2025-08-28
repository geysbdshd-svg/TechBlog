import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

type Status = 'idle' | 'loading' | 'success' | 'error';

export const useSubscription = () => {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  const subscribe = async (email: string) => {
    if (!email) {
      setStatus('error');
      setMessage('Email is required.');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const { error } = await supabase
        .from('subscriptions')
        .insert([{ email }]);

      if (error) {
        if (error.code === '23505') { // Unique violation
          setStatus('error');
          setMessage('This email is already subscribed.');
        } else {
          throw error;
        }
      } else {
        setStatus('success');
        setMessage('Thank you for subscribing! You are now on our list.');
      }
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      setStatus('error');
      setMessage('Could not subscribe. Please try again later.');
    }
  };

  const resetStatus = () => {
    setStatus('idle');
    setMessage('');
  };

  return { status, message, subscribe, resetStatus };
};
