export interface LinkedInPost {
    id: string;
    title: string;
    snippet: string;
    date: string;
    url: string;
    topicTag: string;
}

export const linkedInPosts: LinkedInPost[] = [
    {
        id: '1',
        title: "AWS Builder Center's Future Builder Connect Pune Experience",
        snippet:
            'Attended AWS Future Builder Connect in Pune featuring 2,000+ students with interactive Builder Zones like Giant Jenga, Live Trivia, and Build the Stack. Participated in hands-on technical workshops on Amazon ECS, AWS Kiro, and Amazon Bedrock, winning an AWS Hoodie.',
        date: 'Sep 2026',
        url: 'https://www.linkedin.com/in/uddhav-bhople/recent-activity/all/',
        topicTag: 'Cloud & AWS',
    },
    {
        id: '2',
        title: 'Indian Data Club Meetup on Agentic AI Tech Stack & Hierarchies',
        snippet:
            'Attended an insightful Indian Data Club meetup at DevX Pune covering the transition from traditional coding to AI-assisted workflows. The session explored the 2026 AI Agentic Hierarchy (from LLMs to RAG, MCP, and computer-use agents) alongside an architecture demo for an Agentic Job Application Platform.',
        date: 'Sep 2026',
        url: 'https://www.linkedin.com/in/uddhav-bhople/recent-activity/all/',
        topicTag: 'Agentic AI',
    },
    {
        id: '3',
        title: 'Behind the Scenes at Prompt War by Google for Developers x Hack2Skill',
        snippet:
            'Served as part of the volunteer team handling tech support at Prompt War in Pune. Assisted participants with real-time troubleshooting, setup guidance, and GenAI problem-solving throughout the event.',
        date: 'Jul 2026',
        url: 'https://www.linkedin.com/in/uddhav-bhople/recent-activity/all/',
        topicTag: 'GenAI & Volunteering',
    },
    {
        id: '4',
        title: 'Building Captain Cool: Multi-Agent IPL Strategist on Google Gemini',
        snippet:
            "Built 'Captain Cool', a multi-agent IPL strategist where 4 AI agents actively debate tactical calls in real-time in the UI before making decisions. Featured live agent interaction and custom voice outputs during a hackathon hosted by GDG Cloud Pune.",
        date: 'May 2026',
        url: 'https://www.linkedin.com/in/uddhav-bhople/recent-activity/all/',
        topicTag: 'Multi-Agent AI',
    },
];
