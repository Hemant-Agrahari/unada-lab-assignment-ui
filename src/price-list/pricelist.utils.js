export const plans = [
    {
      name: "Basic",
      users: "Individual",
      description: "Essential features for startups and small teams.",
      features: [
        "30+ Features",
        "Priority Support",
        "4 Team Members",
        "Premium Features",
        "Data Insights",
      ],
      price: { monthly: "$39.99", yearly: "$399.99" },
      includesGenAI: false,
    },
    {
      name: "Standard",
      users: "2 to 10 Users",
      description: "Advanced tools for scaling and growing businesses.",
      features: [
        "Access 80+ Enterprise Features",
        "Priority Support",
        "10 Team Members",
        "Premium Features",
        "Unlimited Data Insights",
        "Get AI Report",
      ],
      price: { monthly: "$69.99", yearly: "$699.99" },
      includesGenAI: true,
    },
    {
      name: "Enterprise",
      users: "10+ Users",
      description: "Full customization and premium support for large organizations.",
      features: [
        "Access All Features",
        "Priority Support",
        "Unlimited Members",
        "Premium Features",
        "Unlimited Data Insights",
        "Custom Gen AI Report",
      ],
      price: { monthly: "$119.99", yearly: "$1199.99" },
      includesGenAI: true,
    },
  ];
  