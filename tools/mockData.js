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
      "This is the centralized term store for the Contoso client.It contains different termgroups , termsets and terms. Please click the nested termgroups to get access to the terms.Some termgroups may be disabled for editing due to improper rights to access.",
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
    id: "Taxonomy:People",
    path: "Taxonomy:People",
    type: "folder",
    children: [
      "Taxonomy:People:Department",
      "Taxonomy:People:JobTitle",
      "Taxonomy:People:Location"
    ],
    name: "People",
    displayName: "TermGroup Managers",
    uniqueIdentifier: "yzdsfjhweljrelwkenflm12143344x",
    details:
      "The termGroup people is responsible for holding different termsets and terms related to people working location, departments,designations, teams and the organization details.",
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
      },
      {
        id: "4",
        name: "ravi.gopinath@microsoft.com"
      }
    ]
  },
  {
    id: "Taxonomy:System",
    path: "Taxonomy:System",
    type: "folder",
    children: [
      "Taxonomy:System:Hashtags",
      "Taxonomy:System:Keywords",
      "Taxonomy:System:OrphanedTerms"
    ],
    name: "System",
    displayName: "TermGroup Managers",
    uniqueIdentifier: "zdsfjhweljrelwkenflm12143344xy",
    details:
      "The termGroup people is responsible for holding different termsets and terms related to system settings.",
    contacts: [
      {
        id: "1",
        name: "laa@microsoft.com"
      },
      {
        id: "2",
        name: "mimanika@microsoft.com"
      }
    ]
  },
  {
    id: "Taxonomy:People:Department",
    path: "Taxonomy:People:Department",
    type: "folder",
    children: [],
    name: "Department",
    uniqueIdentifier: "dsfjhweljrelwkenflm12143344xyz",
    displayName: "Contacts",
    details:
      "The term set department is responsible for holding all the terms related to department related terms in IDC.The MSIT related termsets are categorized in a different termset(MSIT_DEPT) as suggested from 2011.The visibility or enablement of termsets is subject to proper access rights.Please contact your root administrator in case of any rights discrepancy.",
    contacts: [
      {
        id: "1",
        name: "mimanika@microsoft.com"
      },
      {
        id: "2",
        name: "gasns@microsoft.com"
      }
    ]
  },
  {
    id: "Taxonomy:People:JobTitle",
    path: "Taxonomy:People:JobTitle",
    type: "folder",
    children: [],
    name: "JobTitle",
    uniqueIdentifier: "sfjhweljrelwkenflm12143344xyzd",
    displayName: "Contacts",
    details:
      "The term set job title is responsible for holding all the terms related to job title related terms in Engineering job role.Please refer to the other termsets for other job roles and responsibilities.The visibility or enablement of termsets is subject to proper access rights.Please contact your root administrator in case of any rights discrepancy.",
    contacts: [
      {
        id: "1",
        name: "laa@microsoft.com"
      },
      {
        id: "2",
        name: "danimmag@microsoft.com"
      },
      {
        id: "3",
        name: "gans@microsoft.com"
      },
      {
        id: "4",
        name: "ravikg@microsoft.com"
      }
    ]
  },
  {
    id: "Taxonomy:People:Location",
    path: "Taxonomy:People:Location",
    type: "folder",
    children: ["Taxonomy:People:Location:India", "Taxonomy:People:Location:US"],
    name: "Location",
    displayName: "Contacts",
    uniqueIdentifier: "fjhweljrelwkenflm12143344xyzds",
    details:
      "The term set location is responsible for holding all the terms related to work location and the relevant terms used according to the location. The visibility or enablement of termsets is subject to proper access rights.Please contact your root administrator in case of any rights discrepancy.",
    contacts: [
      {
        id: "1",
        name: "laa@microsoft.com"
      },
      {
        id: "2",
        name: "danimmag@microsoft.com"
      },
      {
        id: "3",
        name: "risja@microsoft.com"
      }
    ]
  },
  {
    id: "Taxonomy:People:Location:India",
    path: "Taxonomy:People:Location:India",
    type: "folder",
    displayName: "Contacts",
    children: [
      "Taxonomy:People:Location:India:Hyderabad",
      "Taxonomy:People:Location:India:Bangalore"
    ],
    name: "India",
    uniqueIdentifier: "jhweljrelwkenflm12143344xyzdsf",
    details:
      "This is the term India in the location term set.The enablement of addition /editing the terms is subject to access rights.Please contact administrator for any discrepancy.",
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
    id: "Taxonomy:People:Location:US",
    path: "Taxonomy:People:Location:US",
    type: "folder",
    children: ["Taxonomy:People:Location:US:Redmond"],
    name: "US",
    displayName: "Contacts",
    uniqueIdentifier: "jhweljrelwkenflm12143344xyzdsf",
    details:
      "This is the term US in the location term set.The enablement of addition /editing the terms is subject to access rights.Please contact administrator for any discrepancy.",
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
    id: "Taxonomy:People:Location:India:Hyderabad",
    path: "Taxonomy:People:Location:India:Hyderabad",
    type: "folder",
    displayName: "Contacts",
    children: [],
    name: "Hyderabad",
    uniqueIdentifier: "hweljrelwkenflm12143344xyzdsfj",
    details:
      "This is the term Hyderabad under term India.The enablement of addition /editing the terms is subject to access rights.Please contact administrator for any discrepancy.",
    contacts: [
      {
        id: "1",
        name: "swshriva@microsoft.com"
      }
    ]
  },
  {
    id: "Taxonomy:People:Location:India:Bangalore",
    path: "Taxonomy:People:Location:India:Bangalore",
    type: "folder",
    displayName: "Contacts",
    children: [],
    name: "Bangalore",
    uniqueIdentifier: "weljrelwkenflm12143344xyzdsfjh",
    details:
      "This is the term Bangalore under term India.The enablement of addition /editing the terms is subject to access rights.Please contact administrator for any discrepancy.",
    contacts: [
      {
        id: "1",
        name: "swshriva@microsoft.com"
      }
    ]
  },
  {
    id: "Taxonomy:People:Location:US:Redmond",
    path: "Taxonomy:People:Location:US:Redmond",
    type: "folder",
    displayName: "Contacts",
    children: [],
    name: "Redmond",
    uniqueIdentifier: "eljrelwkenflm12143344xyzdsfjhw",
    details:
      "This is the term Redmond under term US.The enablement of addition /editing the terms is subject to access rights.Please contact administrator for any discrepancy.",
    contacts: [
      {
        id: "1",
        name: "swshriva@microsoft.com"
      }
    ]
  },
  {
    id: "Taxonomy:System:Hashtags",
    path: "Taxonomy:System:Hashtags",
    type: "folder",
    children: [],
    name: "Hashtags",
    displayName: "Contacts",
    uniqueIdentifier: "ljrelwkenflm12143344xyzdsfjhwe",
    details:
      "The term set Hashtags is responsible for holding hastags used across organization for easy search,storage and retrieval of content. The visibility or enablement of termsets is subject to proper access rights.Please contact your root administrator in case of any rights discrepancy.",
    contacts: [
      {
        id: "1",
        name: "lavanya.a@microsoft.com"
      }
    ]
  },
  {
    id: "Taxonomy:System:Keywords",
    path: "Taxonomy:System:Keywords",
    type: "folder",
    children: [],
    name: "Keywords",
    displayName: "Contacts",
    uniqueIdentifier: "jrelwkenflm12143344xyzdsfjhwel",
    details:
      "The term set Keywords is responsible for holding hastags used across organization for easy search,storage and retrieval of content. The visibility or enablement of termsets is subject to proper access rights.Please contact your root administrator in case of any rights discrepancy.",
    contacts: [
      {
        id: "1",
        name: "gayathri.sns@microsoft.com"
      }
    ]
  },
  {
    id: "Taxonomy:System:OrphanedTerms",
    path: "Taxonomy:System:OrphanedTerms",
    type: "folder",
    children: [],
    displayName: "Contacts",
    name: "Orphaned Terms",
    uniqueIdentifier: "relwkenflm12143344xyzdsfjhwelj",
    details:
      "The term set Orphaned terms is responsible for holding orphaned terms. The visibility or enablement of termsets is subject to proper access rights.Please contact your root administrator in case of any rights discrepancy.",
    contacts: [
      {
        id: "1",
        name: "gasns@microsoft.com"
      },
      {
        id: "2",
        name: "ravikg@microsoft.com"
      }
    ]
  }
];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newTerm,
  ts
};
