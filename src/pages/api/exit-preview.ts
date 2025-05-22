import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Clear the preview mode cookies
    res.clearPreviewData();

    // Redirect to the homepage or admin dashboard
    const redirectUrl = req.query.redirect as string || '/admin';
    res.redirect(307, redirectUrl);
  } catch (error) {
    console.error('Exit preview mode error:', error);
    res.status(500).json({ message: 'Error exiting preview mode' });
  }
}
