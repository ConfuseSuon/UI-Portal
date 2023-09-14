import { IconUsers } from "@tabler/icons";

const icon = { IconUsers };

const pages = {
  id: "pages",
  title: "Pages",
  type: "group",
  children: [
    {
      id: "tests",
      title: "Tests",
      type: "collapse",
      icon: icon.IconUsers,
      children: [
        {
          id: "setup-a-test",
          title: "Setup a Test",
          type: "item",
          url: "/tests/setup-a-test",
        },

        {
          id: "my-tests",
          title: "My Tests",
          type: "item",
          url: "/tests/my-tests",
        },
      ],
    },
    {
      id: "results",
      title: "Results",
      type: "collapse",
      icon: icon.IconUsers,
      children: [
        {
          id: "result",
          title: "Result",
          type: "item",
          url: "/results/result",
        },
        {
          id: "slas",
          title: "SLAs",
          type: "item",
          url: "/results/slas",
        },
        {
          id: "reports",
          title: "Reports",
          type: "item",
          url: "/results/reports",
        },
      ],
    },
    {
      id: "manage",
      title: "Manage",
      type: "collapse",
      icon: icon.IconUsers,
      children: [
        {
          id: "inventory",
          title: "Inventory",
          type: "item",
          url: "/manage/inventory",
        },
        {
          id: "topologies",
          title: "Topologies",
          type: "item",
          url: "/manage/topologies",
        },
        {
          id: "testing-assests",
          title: "Testing Assests",
          type: "item",
          url: "/manage/testing-assests",
        },
      ],
    },
    {
      id: "learn",
      title: "Learn",
      type: "collapse",
      icon: icon.IconUsers,
      children: [
        {
          id: "platform",
          title: "Platform",
          type: "item",
          url: "/learn/platform",
        },
        {
          id: "faq",
          title: "FAQ",
          type: "item",
          url: "/learn/faq",
        },
      ],
    },
  ],
};

export default pages;
