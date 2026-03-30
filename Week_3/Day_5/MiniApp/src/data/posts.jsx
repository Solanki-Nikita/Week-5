export const posts = [
  {
    id: "1",
    title: "How I Reduced React App Load Time by 38% in Production",
    content: `
In one of our client dashboards, initial load time was crossing 4.8 seconds.
After profiling the bundle using Lighthouse and Webpack Analyzer, we identified:

1. Unnecessary third-party libraries
2. Large vendor chunk
3. No lazy loading

Actions taken:
- Implemented route-based code splitting
- Replaced heavy date library with lighter alternative
- Enabled gzip and caching headers
- Memoized expensive components

Result:
Initial load reduced to 2.9 seconds (38% improvement).
Time to Interactive improved significantly.

Key takeaway:
Performance optimization starts with measurement, not assumptions.
    `
  },
  {
    id: "2",
    title: "Designing Scalable Frontend Architecture for Large React Projects",
    content: `
As a project grows beyond 50+ components, folder structure chaos begins.

What worked for us:

- Feature-based folder architecture
- Centralized API layer
- Reusable UI component library
- Custom hooks for business logic separation

Example structure:
src/
  features/
    auth/
    dashboard/
  components/
  hooks/
  services/

Benefits:
- Reduced coupling
- Easier onboarding
- Faster feature delivery

Architecture decisions determine long-term velocity.
    `
  },
  {
    id: "3",
    title: "Common Mistakes Mid-Level React Developers Make",
    content: `
After reviewing multiple codebases, I consistently see these issues:

1. Overusing useEffect
2. Storing derived state unnecessarily
3. Prop drilling instead of context
4. No performance profiling

Most bugs in React apps are not syntax errors.
They are architecture and state-management problems.

Senior engineers optimize for:
- Maintainability
- Predictability
- Performance
- Scalability

Clean code is not about fewer lines.
It’s about fewer future problems.
    `
  }
];