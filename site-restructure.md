# Resource Hub Structure and Learning Standards

## Purpose

The resource hub will provide complete, guided learning paths within the site. Learners should be able to study a skill, practise each topic, and build a final project without being sent to an external course.

Lessons will be written in MDX. Skill cards and course navigation should link to internal hub pages. Useful external learning resources will appear at the end of each skill course for reference and further study.

## Agreed hub structure

```text
Resource Hub
├── Start Here
│   ├── How to use the hub
│   ├── Choose a learning path
│   └── Set up your learning tools
│
├── Web Development
│   ├── Overview and learning roadmap
│   ├── Frontend Development
│   │   ├── HTML
│   │   ├── CSS
│   │   ├── JavaScript
│   │   ├── Frameworks and libraries
│   │   └── Frontend tools and workflow
│   ├── Backend Development
│   │   ├── Backend foundations
│   │   ├── Languages and frameworks
│   │   ├── APIs
│   │   ├── Authentication and security
│   │   └── Testing and deployment
│   └── Databases
│       ├── Database foundations
│       ├── Relational databases and SQL
│       ├── Non-relational databases
│       └── Data modelling and database tools
│
├── Cloud Computing
│   ├── Overview and learning roadmap
│   ├── Cloud foundations
│   ├── Cloud providers
│   ├── Compute, storage, and networking
│   ├── Identity and security
│   └── Deployment, operations, and automation
│
└── Other Learning Paths
    └── Existing tracks retained for later restructuring
```

This tree defines the agreed navigation direction. Backend and Cloud categories will be refined when their curricula are developed. They are not a final list of individual courses or lessons. Existing tracks should be retained while they await restructuring.

## Navigation hierarchy

Use the following hierarchy where applicable:

**Learning path → Track → Skill or course → Level → Topic**

For example:

**Web Development → Frontend Development → HTML → Beginner → Your first HTML page**

Broad categories such as “Frameworks and libraries” contain individual skill courses. Each skill course follows the learning structure below; a navigation category does not itself need three levels.

## Standard skill course structure

```text
Skill or Course
├── Overview
│   ├── What you will learn
│   ├── Tools you need
│   └── How to complete the course
├── Beginner
│   ├── Individual topic lessons
│   └── Beginner project and completion checklist
├── Intermediate
│   ├── Individual topic lessons
│   └── Intermediate project and completion checklist
├── Advanced
│   ├── Individual topic lessons
│   └── Advanced project and completion checklist
├── Final building challenge
│   ├── Project brief and requirements
│   ├── Hints
│   ├── Completion checklist
│   └── Separate suggested solution
└── Further learning and references
```

Beginner, Intermediate, and Advanced must reflect increasing depth within the skill. Advanced HTML, for example, should remain focused on HTML rather than becoming a CSS or JavaScript course.

## Audience and teaching approach

- Assume learners entering the Beginner level have never written code.
- Explain unfamiliar terms before relying on them.
- Include the setup steps needed to complete the lessons, such as creating a file and opening it in a browser.
- Introduce concepts in an order that prepares learners for later lessons.
- State prerequisites clearly when a course depends on another skill.
- Keep core explanations, examples, and practice instructions inside the hub.

## Standard topic lesson format

Create one MDX page per topic, grouped under its level. Each topic page should include:

1. **Learning objectives:** What the learner should be able to do by the end.
2. **Prerequisites:** Any earlier knowledge or setup required.
3. **Explanation:** A clear introduction to the topic.
4. **Examples:** Code examples with explanations of how they work.
5. **Practice challenge:** A task that applies the topic just taught.
6. **Challenge instructions:** Concrete requirements and the expected outcome.
7. **Completion checklist:** Observable criteria learners can use to check their work.
8. **Optional hints:** Support that does not immediately reveal the answer.
9. **Separate suggested solution:** Clearly separated from the challenge so learners can attempt it first.

Suggested solutions may be a separate section or page. The exact MDX presentation will be decided during lesson implementation.

## Practice and projects

### Topic challenges

Every topic must have a practical challenge. Keep it focused on the concepts already taught, with instructions, hints, a completion checklist, and a separate suggested solution.

### Stage projects

End each level with a project that combines the topics covered in that level. Include completion criteria that help learners assess their readiness for the next level.

### Final building challenge

End each skill course with a larger project that brings together the knowledge taught across the course. Provide a project brief, requirements, optional hints, a completion checklist, and a separate suggested solution.

## Progression: agreed direction and proposed feature

The curriculum will guide learners through **Beginner → Intermediate → Advanced → Final building challenge** using clear completion requirements.

**Enforced stage locking is proposed and awaits approval.** The proposed behaviour is to require completion of Beginner before unlocking Intermediate, and completion of Intermediate before unlocking Advanced.

For the initial curriculum, provide guided progression and visible completion checklists. Do not describe enforced locks as an implemented or approved feature.

Before implementing locks, verify whether the Mintlify setup supports learner accounts, saved progress, prerequisites, and the required assessment behaviour, or whether custom development is necessary. These capabilities have not yet been verified.

A learner marking a checklist complete records self-reported progress. Automatically verifying whether their code meets the requirements would require an assessment mechanism. The definition of completion for enforced unlocking remains to be decided.

## External resources

Place useful external learning links in the **Further learning and references** section at the end of each skill course. Give each link a short description so learners understand what it offers.

Internal skill cards must open the relevant course in the hub instead of taking learners directly to an external learning website.

## Delivery order

1. Agree on the resource hub structure — completed.
2. Draft and agree on the HTML curriculum outline — next.
3. Write the HTML lessons in MDX, including challenges and projects.
4. Develop the CSS curriculum and MDX lessons.
5. Develop the JavaScript curriculum and MDX lessons.
6. Continue restructuring and developing the remaining tracks.

This document records the agreed structure and authoring standards. It does not yet define the HTML topic curriculum or implement changes to the live hub.
