import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // For development/testing purposes only
    // In production, uncomment the authentication check below
    /*
    const session = await getSession({ req });
    if (!session?.user) {
      return res.status(401).json({ message: 'Unauthorized: Please login first' });
    }

    if (!session.user.email?.endsWith('@straticon.com')) {
      return res.status(403).json({ message: 'Forbidden: Admin access required' });
    }
    */

    // Enable Preview Mode by setting the cookies
    res.setPreviewData({
      timestamp: Date.now(),
    });

    // Redirect to the homepage or a specific page
    const redirectUrl = req.query.redirect as string || '/';
    res.redirect(307, redirectUrl);
  } catch (error) {
    console.error('Preview mode error:', error);
    res.status(500).json({ message: 'Error enabling preview mode' });
  }
}
