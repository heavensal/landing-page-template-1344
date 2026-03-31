# Codex Astro Base Template Instructions

These instructions apply to Codex and other agentic coding tools that read `AGENTS.md`.
They are reusable base instructions for Astro projects and are not project-specific rules.
Project-specific instructions should be added separately later.

## Architecture and Components

- Follow the existing project structure, code style, and component patterns.
- Keep changes focused and minimal.
- Reuse existing components and styling patterns before introducing new ones.
- Avoid unnecessary abstractions, helpers, or dependencies.
- Each component should represent one section focused on a single subject, theme, or customer conversion step.
- Create a separate component whenever a new subject, theme, or conversion step is introduced.
- Do not exceed 150 lines of code per file.
- Refactor as soon as a generated feature would push a file beyond 150 lines of code.

## SEO and Accessibility

- Preserve responsive behavior and accessibility.
- Every HTML generation must follow the best possible SEO and accessibility practices.

## Tailwind CSS

- Use the latest Tailwind CSS version supported by this project.
- Prefer the existing Tailwind conventions already present in the codebase.
- Do not create Tailwind utility variables, custom utility layers, or additional design tokens unless explicitly requested.
- Only create Tailwind utility variables if and only if the user asks for them.
- Create custom animations only if Tailwind cannot cover the requested animation.

## Change Safety

- Do not perform large refactors unless explicitly requested.
- Do not overwrite user changes unless explicitly asked to do so.
