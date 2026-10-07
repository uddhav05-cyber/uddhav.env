'use client';

import { useState, useMemo, useEffect } from 'react';
import { BlogPostMetadata } from '@/features/blog/module/types';
import { BlogCard } from './BlogCard';
import { Search } from 'lucide-react';
import { ProjectPagination as Pagination } from '@/features/projects/components/ProjectPagination';
import { cn } from '@/lib/utils';
import type { LinkedInPost } from '@/data/linkedInPosts';
import { devToPosts } from '@/data/devToPosts';

interface BlogListProps {
    initialPosts: BlogPostMetadata[];
    allTags: string[];
    linkedInPosts?: LinkedInPost[];
}

export function BlogList({
    initialPosts,
    allTags,
    linkedInPosts = [],
}: BlogListProps) {
    const [activeTab, setActiveTab] = useState<'articles' | 'linkedin' | 'devto'>('articles');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);

    const POSTS_PER_PAGE = 6;

    // Reset pagination to 1 when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery, selectedTag]);

    const filteredPosts = useMemo(() => {
        return initialPosts.filter((post) => {
            const matchesSearch =
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesTag = selectedTag ? post.tags?.includes(selectedTag) : true;

            return matchesSearch && matchesTag;
        });
    }, [initialPosts, searchQuery, selectedTag]);

    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
    const paginatedPosts = filteredPosts.slice(
        (currentPage - 1) * POSTS_PER_PAGE,
        currentPage * POSTS_PER_PAGE
    );

    return (
        <div className="space-y-10">
            <div className="flex justify-center gap-2" role="tablist" aria-label="Blog content type">
                <button
                    type="button"
                    role="tab"
                    aria-selected={activeTab === 'articles'}
                    onClick={() => setActiveTab('articles')}
                    className={cn(
                        'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                        activeTab === 'articles'
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-border text-muted-foreground hover:text-foreground'
                    )}
                >
                    Articles
                </button>
                <button
                    type="button"
                    role="tab"
                    aria-selected={activeTab === 'linkedin'}
                    onClick={() => setActiveTab('linkedin')}
                    className={cn(
                        'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                        activeTab === 'linkedin'
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-border text-muted-foreground hover:text-foreground'
                    )}
                >
                    LinkedIn Insights / Posts
                </button>
                <button
                    type="button"
                    role="tab"
                    aria-selected={activeTab === 'devto'}
                    onClick={() => setActiveTab('devto')}
                    className={cn(
                        'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                        activeTab === 'devto'
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-border text-muted-foreground hover:text-foreground'
                    )}
                >
                    Dev.to Articles
                </button>
            </div>

            {activeTab === 'linkedin' ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" role="tabpanel">
                    {linkedInPosts.map((post) => (
                        <article
                            key={post.id}
                            className="group flex flex-col rounded-xl border border-border bg-card p-6 text-card-foreground shadow-sm transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <span className="rounded-md bg-blue-500/10 px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-blue-500">
                                    {post.topicTag}
                                </span>
                                <time className="shrink-0 text-xs text-muted-foreground">{post.date}</time>
                            </div>
                            <h2 className="mt-5 text-xl font-semibold tracking-tight transition-colors group-hover:text-primary">
                                {post.title}
                            </h2>
                            <p className="mt-3 flex-1 leading-7 text-muted-foreground">{post.snippet}</p>
                            <a
                                href={post.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 inline-flex w-fit items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                            >
                                Read on LinkedIn ↗
                            </a>
                        </article>
                    ))}
                </div>
            ) : activeTab === 'devto' ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" role="tabpanel">
                {devToPosts.map((post) => (
                    <article
                        key={post.id}
                        className="group flex flex-col rounded-xl border border-border bg-card p-6 text-card-foreground shadow-sm transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"
                    >
                        <div className="flex items-start justify-between gap-4">
                            <span className="rounded-md bg-blue-500/10 px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-blue-500">
                                {post.topicTag}
                            </span>
                            <div className="flex shrink-0 items-center gap-2 text-xs text-muted-foreground">
                                <time>{post.date}</time>
                                {post.readingTime && <span>{post.readingTime}</span>}
                            </div>
                        </div>
                        <h2 className="mt-5 text-xl font-semibold tracking-tight transition-colors group-hover:text-primary">
                            {post.title}
                        </h2>
                        <p className="mt-3 flex-1 leading-7 text-muted-foreground">{post.snippet}</p>
                        <a
                            href={post.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex w-fit items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                        >
                            Read on Dev.to ↗
                        </a>
                    </article>
                ))}
                </div>
            ) : (
                <>
            {/* Filters Section */}
            <div className="space-y-6">
                {/* Search Input */}
                <div className="relative max-w-md mx-auto md:max-w-2xl">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
                        <Search className="h-5 w-5" />
                    </div>
                    <input
                        type="text"
                        className="flex h-12 w-full rounded-full border border-input bg-background/50 backdrop-blur-sm px-10 py-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 shadow-sm transition-all hover:bg-background hover:shadow-md"
                        placeholder="Search articles..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2">
                    <button
                        onClick={() => setSelectedTag(null)}
                        className={cn(
                            "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                            selectedTag === null
                                ? "bg-primary text-primary-foreground shadow-sm scale-105"
                                : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                        )}
                    >
                        All
                    </button>
                    {allTags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                            className={cn(
                                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                selectedTag === tag
                                    ? "bg-primary text-primary-foreground shadow-sm scale-105"
                                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                            )}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>

            {/* Results */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {paginatedPosts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                ))}
            </div>

            {/* Pagination */}
            {filteredPosts.length > 0 && (
                <div className="mt-8">
                    <Pagination 
                        currentPage={currentPage} 
                        totalPages={totalPages} 
                        onPageChange={(page) => {
                            setCurrentPage(page);
                            window.scrollTo({ top: 300, behavior: 'smooth' });
                        }} 
                    />
                </div>
            )}

            {/* Empty State */}
            {filteredPosts.length === 0 && (
                <div className="text-center py-20 animate-in fade-in-50 zoom-in-95">
                    <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-muted mb-6">
                        <Search className="h-10 w-10 text-muted-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">No posts found</h3>
                    <p className="text-muted-foreground max-w-sm mx-auto">
                        We couldn't find any posts matching your search criteria. Try different keywords or remove filters.
                    </p>
                    <button
                        onClick={() => { setSearchQuery(''); setSelectedTag(null); }}
                        className="mt-6 text-primary font-medium hover:underline"
                    >
                        Clear all filters
                    </button>
                </div>
            )}
                </>
            )}
        </div>
    );
}
