import ProjectShowcase from '../components/ProjectShowcase';

export default function ProjectShowcaseExample() {
  return (
    <div className="space-y-0">
      {/* Example 1: E-Commerce AI Agent */}
      <ProjectShowcase
        title="Apply fixes in seconds. Spend less time debugging and more time building features with Copilot Autofix."
        description="An automated support bot that handles 50% of customer queries using natural language processing and machine learning. Reduces response time by 80% and improves customer satisfaction scores."
        features={[
          {
            title: 'Security debt, solved.',
            description: 'Leverage security campaigns and Copilot Autofix to reduce vulnerabilities in your codebase.',
          },
          {
            title: 'Dependencies you can depend on.',
            description: 'Update vulnerable dependencies with automated pull requests and security advisories.',
          },
          {
            title: 'Your secrets, your business.',
            description: 'Detect, prevent, and remediate leaked secrets before they become a security issue.',
          },
        ]}
        codeSnippet="true"
        primaryColor="#a855f7"
        ctaText="Explore GitHub Advanced Security"
        ctaLink="#"
      />

      {/* Example 2: React Dashboard with Image */}
      <ProjectShowcase
        title="Real-time Analytics Dashboard. Monitor your business metrics in real-time."
        description="A comprehensive analytics platform built with React and D3.js that provides real-time insights into your business performance. Features interactive charts, custom reports, and AI-powered predictions."
        features={[
          {
            title: 'Real-time Socket.io',
            description: 'Live data updates without page refresh using WebSocket connections.',
          },
          {
            title: '99% Lighthouse Score',
            description: 'Optimized for performance with code splitting and lazy loading.',
          },
          {
            title: 'Role-Based Auth',
            description: 'Secure authentication with JWT tokens and role-based access control.',
          },
        ]}
        imageSrc="/path-to-your-project-screenshot.png"
        primaryColor="#3b82f6"
        ctaText="View Live Demo"
        ctaLink="#"
      />

      {/* Example 3: Node.js Backend API */}
      <ProjectShowcase
        title="Scalable REST API. Built for performance and reliability."
        description="A high-performance REST API built with Node.js and Express that handles millions of requests per day. Features rate limiting, caching, and comprehensive error handling."
        features={[
          {
            title: 'GraphQL Support',
            description: 'Flexible data querying with GraphQL alongside traditional REST endpoints.',
          },
          {
            title: 'Redis Caching',
            description: 'Lightning-fast response times with intelligent caching strategies.',
          },
          {
            title: 'Docker Ready',
            description: 'Containerized deployment with Docker and Kubernetes support.',
          },
        ]}
        codeSnippet="true"
        primaryColor="#10b981"
        ctaText="GitHub Repo"
        ctaLink="#"
      />
    </div>
  );
}
