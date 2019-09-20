import { generate } from "shortid";
const categories = [
  {
    id: generate(),
    name: "man",
    label: "./img/1.jpg"
  },
  {
    id: generate(),
    name: "child",
    label: "./img/2.jpeg"
  },
  {
    id: generate(),
    name: "food",
    label: "./img/3.jpg"
  },
  {
    id: generate(),
    name: "startup",
    label: "./img/4.jpg"
  },
  {
    id: generate(),
    name: "animals",
    label: "./img/5.jpg"
  },
  {
    id: generate(),
    name: "cars",
    label: "./img/6.jpg"
  }
];
const images = [
  {
    id: generate(),
    image_url: "./img/1.jpg",
    name: "some interesting",
    description: "some interestingsome interesting",
    user_id: generate(),
    tags: ["some", "interestingsome", "interesting"],
    comments: [
      "some interestingsome",
      "interestingsome interestingsome",
      "interesting interestingsom einterestingsome"
    ],
    downloads: 22,
    created_at: "12.12.12"
  },
  {
    id: generate(),
    image_url: "./img/2.jpeg",
    name: "some interesting",
    description: "some interestingsome interesting",
    user_id: generate(),
    tags: ["some", "interestingsome", "interesting"],
    comments: [
      "some interestingsome",
      "interestingsome interestingsome",
      "interesting interestingsom einterestingsome"
    ],
    downloads: 22,
    created_at: "12.12.12"
  },
  {
    id: generate(),
    image_url: "./img/3.jpg",
    name: "some interesting",
    description: "some interestingsome interesting",
    user_id: generate(),
    tags: ["some", "interestingsome", "interesting"],
    comments: [
      "some interestingsome",
      "interestingsome interestingsome",
      "interesting interestingsom einterestingsome"
    ],
    downloads: 22,
    created_at: "12.12.12"
  },
  {
    id: generate(),
    image_url: "./img/4.jpg",
    name: "some interesting",
    description: "some interestingsome interesting",
    user_id: generate(),
    tags: ["some", "interestingsome", "interesting"],
    comments: [
      "some interestingsome",
      "interestingsome interestingsome",
      "interesting interestingsom einterestingsome"
    ],
    downloads: 22,
    created_at: "12.12.12"
  },
  {
    id: generate(),
    image_url: "./img/5.jpg",
    name: "some interesting",
    description: "some interestingsome interesting",
    user_id: generate(),
    tags: ["some", "interestingsome", "interesting"],
    comments: [
      "some interestingsome",
      "interestingsome interestingsome",
      "interesting interestingsom einterestingsome"
    ],
    downloads: 22,
    created_at: "12.12.12"
  },
  {
    id: generate(),
    image_url: "./img/6.jpg",
    name: "some interesting",
    description: "some interestingsome interesting",
    user_id: generate(),
    tags: ["some", "interestingsome", "interesting"],
    comments: [
      "some interestingsome",
      "interestingsome interestingsome",
      "interesting interestingsom einterestingsome"
    ],
    downloads: 22,
    created_at: "12.12.12"
  }
];
const tags = [
  {
    id: generate(),
    name: "sundey",
    images: [
      "./img/1.jpg",
      "./img/2.jpg",
      "./img/3.jpg",
      "./img/4.jpg",
      "./img/5.jpg",
      "./img/6.jpg"
    ]
  },
  {
    id: generate(),
    name: "holidays",
    images: [
      "./img/1.jpg",
      "./img/2.jpg",
      "./img/3.jpg",
      "./img/4.jpg",
      "./img/5.jpg",
      "./img/6.jpg"
    ]
  },
  {
    id: generate(),
    name: "peoples",
    images: [
      "./img/1.jpg",
      "./img/2.jpg",
      "./img/3.jpg",
      "./img/4.jpg",
      "./img/5.jpg",
      "./img/6.jpg"
    ]
  },
  {
    id: generate(),
    name: "fish",
    images: [
      "./img/1.jpg",
      "./img/2.jpg",
      "./img/3.jpg",
      "./img/4.jpg",
      "./img/5.jpg",
      "./img/6.jpg"
    ]
  }
];

export { tags, images, categories}