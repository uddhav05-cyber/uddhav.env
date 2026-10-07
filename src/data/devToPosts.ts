export interface DevToPost {
    id: string;
    title: string;
    snippet: string;
    date: string;
    url: string;
    topicTag: string;
    readingTime?: string;
}

export const devToPosts: DevToPost[] = [
    {
        id: '1',
        title: 'Understanding Hexadecimal to Decimal Conversion & Computer Fundamentals',
        snippet:
            'A breakdown of base-16 numerical systems, register transfers, and manual standard conversion steps for low-level software debugging.',
        date: 'Sep 2026',
        url: 'https://dev.to/uddhav_bhople',
        topicTag: 'Assembly & Low Level',
        readingTime: '4 min read',
    },
    {
        id: '2',
        title: 'Building Real-Time Packet Analysis Workflows with Wireshark & WSL',
        snippet:
            'How to configure Microsoft Windows Subsystem for Linux (WSL) via DISM and run command-line network monitoring alongside Wireshark labs.',
        date: 'Aug 2026',
        url: 'https://dev.to/uddhav_bhople',
        topicTag: 'DevOps & Networking',
        readingTime: '5 min read',
    },
    {
        id: '3',
        title: 'Deploying Automated Document Pipelines on GCP',
        snippet:
            'An architectural guide on using Document AI, Cloud Run Functions, and BigQuery to parse unstructured invoice PDFs into structured warehouse tables.',
        date: 'Aug 2026',
        url: 'https://dev.to/uddhav_bhople',
        topicTag: 'GCP & Cloud',
        readingTime: '6 min read',
    },
];
