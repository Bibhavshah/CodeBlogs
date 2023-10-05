'use client';
import React, { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const supabase = createClientComponentClient();

const ViewsCounter = ({ slug, noCount = false, showCount = true }) => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const incrementViews = async () => {
      try {
        let { error } = await supabase.rpc('increment', {
          slug_text: slug,
        });

        if (error) {
          console.error('Error incrementing view count: ', error);
        }
      } catch (error) {
        console.error('An error occured while incrementing views: ', error);
      }
    };

    if (!noCount) {
      incrementViews();
    }
  }, [slug, noCount]);

  useEffect(() => {
    const getViews = async () => {
      try {
        let { data, error } = await supabase
          .from('views')
          .select('count')
          .match({ slug: slug })
          .single();

        if (error) {
          console.error('Error incrementing view count: ', error);
        }
        setViews(data.count);
      } catch (error) {
        console.error('An error occured while incrementing views: ', error);
      }
    };

    getViews();
  }, [slug]);

  if (showCount) {
    return <div>{views} Views</div>;
  } else {
    return null;
  }
};

export default ViewsCounter;
