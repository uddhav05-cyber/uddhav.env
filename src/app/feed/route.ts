import { getAllPosts } from '@/features/blog/module/service';

/**
 * RSS Feed endpoint
 * Alternative route for /feed.xml
 */
export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://uddhavbhople.dev';
  const posts = getAllPosts();

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Uddhav Bhople Blog</title>
    <description>AI/ML Developer and Computer Engineering Student. Building intelligent systems with Python, React, and modern web technologies.</description>
    <link>${baseUrl}</link>
    <language>en-US</language>
    <managingEditor>uddhavbhople5@gmail.com (Uddhav Bhople)</managingEditor>
    <webMaster>uddhavbhople5@gmail.com (Uddhav Bhople)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${baseUrl}/logo.ico</url>
      <title>Uddhav Bhople Blog</title>
      <link>${baseUrl}</link>
    </image>
    ${posts
      .map(
        (post) => `    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.excerpt || post.title}]]></description>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>uddhavbhople5@gmail.com (${post.author || 'Uddhav Bhople'})</author>
      ${post.tags?.map((tag) => `<category><![CDATA[${tag}]]></category>`).join('\n      ') || ''}
    </item>`
      )
      .join('\n')}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
