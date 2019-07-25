const newTerm = {
  id: null,
  title: "",
  authorId: null,
  category: ""
};

const ts = [
  {
    id: "Taxonomy",
    path: "Taxonomy",
    type: "folder",
    isRoot: true,
    children: ["Taxonomy:People", "Taxonomy:System"],
    uniqueIdentifier: "xyzdsfjhweljrelwkenflm12143344",
    name: "Taxonomy",
    displayName: "TermStore Admins",
    details:
      "Term 1 details are here.It is a prt of XYZ term set and has been used since 2002.",
    contacts: [
      {
        id: "1",
        name: "lavanya.a@microsoft.com"
      },
      {
        id: "2",
        name: "david.nimmagadda@microsoft.com"
      },
      {
        id: "3",
        name: "gayathri.sns@microsoft.com"
      }
    ]
  },
  {
    id: "People",
    path: "Taxonomy:People",
    type: "folder",
    children: [
      "Taxonomy:People:Department",
      "Taxonomy:People:JobTitle",
      "Taxonomy:People:Location"
    ],
    name: "People",
    uniqueIdentifier: "xyzdsfjhweljrelwkenflm12143344",
    details:
      "Term 1 details are here.It is a prt of XYZ term set and has been used since 2002.",
    contacts: [
      {
        id: "1",
        name: "lavanya.a@microsoft.com"
      },
      {
        id: "2",
        name: "david.nimmagadda@microsoft.com"
      },
      {
        id: "3",
        name: "gayathri.sns@microsoft.com"
      }
    ]
  },
  {
    id: "System",
    path: "Taxonomy:System",
    type: "folder",
    children: [
      "Taxonomy:System:Hashtags",
      "Taxonomy:System:Keywords",
      "Taxonomy:System:OrphanedTerms"
    ],
    name: "System",
    uniqueIdentifier: "xyzdsfjhweljrelwkenflm12143344",
    details:
      "Term 1 details are here.It is a prt of XYZ term set and has been used since 2002.",
    contacts: [
      {
        id: "1",
        name: "lavanya.a@microsoft.com"
      },
      {
        id: "2",
        name: "david.nimmagadda@microsoft.com"
      },
      {
        id: "3",
        name: "gayathri.sns@microsoft.com"
      }
    ]
  },
  {
    id: "Department",
    path: "Taxonomy:People:Department",
    type: "folder",
    children: [],
    name: "Department",
    uniqueIdentifier: "xyzdsfjhweljrelwkenflm12143344",
    details:
      "Term 1 details are here.It is a prt of XYZ term set and has been used since 2002.",
    contacts: [
      {
        id: "1",
        name: "lavanya.a@microsoft.com"
      },
      {
        id: "2",
        name: "david.nimmagadda@microsoft.com"
      },
      {
        id: "3",
        name: "gayathri.sns@microsoft.com"
      }
    ]
  },
  {
    id: "JobTitle",
    path: "Taxonomy:People:JobTitle",
    type: "folder",
    children: [],
    name: "JobTitle",
    uniqueIdentifier: "xyzdsfjhweljrelwkenflm12143344",
    details:
      "Term 1 details are here.It is a prt of XYZ term set and has been used since 2002.",
    contacts: [
      {
        id: "1",
        name: "lavanya.a@microsoft.com"
      },
      {
        id: "2",
        name: "david.nimmagadda@microsoft.com"
      },
      {
        id: "3",
        name: "gayathri.sns@microsoft.com"
      }
    ]
  },
  {
    id: "Location",
    path: "People:Location",
    type: "folder",
    children: ["Taxonomy:People:Location:India", "Taxonomy:People:Location:US"],
    name: "Location",
    uniqueIdentifier: "xyzdsfjhweljrelwkenflm12143344",
    details:
      "Term 1 details are here.It is a prt of XYZ term set and has been used since 2002.",
    contacts: [
      {
        id: "1",
        name: "lavanya.a@microsoft.com"
      },
      {
        id: "2",
        name: "david.nimmagadda@microsoft.com"
      },
      {
        id: "3",
        name: "gayathri.sns@microsoft.com"
      }
    ]
  },
  {
    id: "India",
    path: "Taxonomy.People:Location:India",
    type: "folder",
    children: [
      "Taxonomy.People:Location:India:Hyderabad",
      "Taxonomy.People:Location:India:Bangalore"
    ],
    name: "India",
    uniqueIdentifier: "xyzdsfjhweljrelwkenflm12143344",
    details:
      "Term 1 details are here.It is a prt of XYZ term set and has been used since 2002.",
    contacts: [
      {
        id: "1",
        name: "lavanya.a@microsoft.com"
      },
      {
        id: "2",
        name: "david.nimmagadda@microsoft.com"
      },
      {
        id: "3",
        name: "gayathri.sns@microsoft.com"
      }
    ]
  },
  {
    id: "US",
    path: "Taxonomy.People:Location:US",
    type: "folder",
    children: ["Taxonomy.People:Location:US:Redmond"],
    name: "US",
    uniqueIdentifier: "xyzdsfjhweljrelwkenflm12143344",
    details:
      "Term 1 details are here.It is a prt of XYZ term set and has been used since 2002.",
    contacts: [
      {
        id: "1",
        name: "lavanya.a@microsoft.com"
      },
      {
        id: "2",
        name: "david.nimmagadda@microsoft.com"
      },
      {
        id: "3",
        name: "gayathri.sns@microsoft.com"
      }
    ]
  },
  {
    id: "Hashtags",
    path: "Taxonomy:System:Hashtags",
    type: "folder",
    children: [],
    name: "Hashtags",
    uniqueIdentifier: "xyzdsfjhweljrelwkenflm12143344",
    details:
      "Term 1 details are here.It is a prt of XYZ term set and has been used since 2002.",
    contacts: [
      {
        id: "1",
        name: "lavanya.a@microsoft.com"
      },
      {
        id: "2",
        name: "david.nimmagadda@microsoft.com"
      },
      {
        id: "3",
        name: "gayathri.sns@microsoft.com"
      }
    ]
  },
  {
    id: "Keywords",
    path: "Taxonomy:System:Keywords",
    type: "folder",
    children: [],
    name: "Keywords",
    uniqueIdentifier: "xyzdsfjhweljrelwkenflm12143344",
    details:
      "Term 1 details are here.It is a prt of XYZ term set and has been used since 2002.",
    contacts: [
      {
        id: "1",
        name: "lavanya.a@microsoft.com"
      },
      {
        id: "2",
        name: "david.nimmagadda@microsoft.com"
      },
      {
        id: "3",
        name: "gayathri.sns@microsoft.com"
      }
    ]
  },
  {
    id: "OrphanedTerms",
    path: "Taxonomy:System:OrphanedTerms",
    type: "folder",
    children: [],
    name: "Orphaned Terms",
    uniqueIdentifier: "xyzdsfjhweljrelwkenflm12143344",
    details:
      "Term 1 details are here.It is a prt of XYZ term set and has been used since 2002.",
    contacts: [
      {
        id: "1",
        name: "lavanya.a@microsoft.com"
      },
      {
        id: "2",
        name: "david.nimmagadda@microsoft.com"
      },
      {
        id: "3",
        name: "gayathri.sns@microsoft.com"
      }
    ]
  }
];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newTerm,
  ts
};
