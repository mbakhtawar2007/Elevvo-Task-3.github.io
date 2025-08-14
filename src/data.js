// src/data.js
export const features = [
    { icon: "✅", title: "Easy to use", desc: "Clean, intuitive UI" },
    { icon: "👥", title: "Collaboration", desc: "Share with teams" },
    { icon: "⚙️", title: "Customizable", desc: "Views, labels, automations" },
];

export const testimonials = [
    { quote: "TaskFlow doubled our delivery speed.", author: "Sarah W." },
    { quote: "The filters and views are gold.", author: "John D." },
    { quote: "Simple yet powerful.", author: "Emily R." },
];

export const plans = [
    { name: "Free", price: "$0", perks: ["Basic features", "Unlimited tasks", "1 project"] },
    { name: "Pro", price: "$9.99", highlight: true, perks: ["Advanced filters", "Reminders", "5 projects"] },
    { name: "Team", price: "$19.99", perks: ["All Pro features", "Unlimited projects", "Admin panel"] },
];

export const sampleTasks = [
    { id: 1, title: "Wire hero section", assignee: "Ali", status: "todo", priority: "low", label: "design" },
    { id: 2, title: "API for pricing", assignee: "Noor", status: "in-progress", priority: "high", label: "backend" },
    { id: 3, title: "QA review", assignee: "Sara", status: "done", priority: "medium", label: "testing" },
    { id: 4, title: "Add filter chips", assignee: "Hamza", status: "in-progress", priority: "high", label: "frontend" },
];
