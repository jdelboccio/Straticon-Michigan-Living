import Link from 'next/link';

export function PreviewBanner() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-blue-600 text-white py-2 px-4 flex items-center justify-between z-50">
      <div className="flex items-center space-x-2">
        <span className="inline-block w-2 h-2 bg-white rounded-full animate-pulse"></span>
        <p className="text-sm font-medium">Preview Mode Active</p>
      </div>
      <Link 
        href="/api/exit-preview?redirect=/"
        className="text-sm font-medium hover:underline"
      >
        Exit Preview
      </Link>
    </div>
  );
}
