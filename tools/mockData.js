const newTerm = {
  id: null,
  title: "",
  authorId: null,
  category: ""
};

const ts = [
  {
    id: "termstore",
    path: "termstore",
    type: "folder",
    isRoot: true,
    children: ["termstore:Group1", "termstore:Group2"]
  },
  {
    id: "termstore:Group1",
    path: "termstore:Group1",
    type: "folder",
    children: ["termstore:Group1:TestTerm"]
  },
  {
    id: "termstore:Group1:TestTerm",
    path: "termstore:Group1:TestTerm",
    type: "folder",
    children: ["termstore:Group1:TestTerm:SubTerm"]
  },
  {
    id: "termstore:Group1:TestTerm:SubTerm",
    path: "termstore:Group1:TestTerm:SubTerm",
    type: "folder",
    children: []
  },
  {
    id: "termstore:Group2",
    path: "termstore:Group2",
    type: "folder",
    children: ["termstore:Group2:TermSet1", "termstore:Group2:TermSet2"]
  },
  {
    id: "termstore:Group2:TermSet1",
    path: "termstore:Group2:TermSet1",
    type: "folder",
    children: [
      "termstore:Group2:TermSet1:Term1",
      "termstore:Group2:TermSet1:Term2"
    ]
  },
  {
    id: "termstore:Group2:TermSet1:Term1",
    path: "termstore:Group2:TermSet1:Term1",
    type: "folder",
    children: []
  },
  {
    id: "termstore:Group2:TermSet1:Term2",
    path: "termstore:Group2:TermSet1:Term2",
    type: "folder",
    children: []
  },
  {
    id: "termstore:Group2:TermSet2",
    path: "termstore:Group2:TermSet2",
    type: "folder",
    children: []
  }
];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newTerm,
  ts
};
