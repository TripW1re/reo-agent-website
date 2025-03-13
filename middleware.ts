import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// List of known search engine user agents
const searchEngineUserAgents = [
  'googlebot',
  'bingbot',
  'yandexbot',
  'duckduckbot',
  'slurp', // Yahoo
  'baiduspider',
  'facebookexternalhit',
  'twitterbot',
  'rogerbot',
  'linkedinbot',
  'embedly',
  'quora link preview',
  'showyoubot',
  'outbrain',
  'pinterest',
  'slackbot',
  'vkshare',
  'w3c_validator',
  'chrome-lighthouse',
];

// Function to check if the request is from a search engine
function isSearchEngine(userAgent: string): boolean {
  const lowerCaseUserAgent = userAgent.toLowerCase();
  return searchEngineUserAgents.some(bot => lowerCaseUserAgent.includes(bot));
}

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Get the user agent from the request headers
  const userAgent = request.headers.get('user-agent') || '';
  
  // Create a new response
  const response = NextResponse.next();
  
  // Remove any authentication headers that might be causing the 401 error
  response.headers.delete('WWW-Authenticate');
  
  // Add headers to explicitly allow access
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // If it's a search engine, add additional headers to ensure it can access the site
  if (isSearchEngine(userAgent)) {
    response.headers.set('X-Robots-Tag', 'all');
  }
  
  return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};