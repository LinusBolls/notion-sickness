const schema = {
    "#WYB": {
      "name": "Partner: Company",
      "type": "relation",
      "property": "M,f+",
      "collection_id": "0600c59a-851a-4161-b247-2f0f828d3383",
      "collection_pointer": {
        "id": "0600c59a-851a-4161-b247-2f0f828d3383",
        "table": "collection",
        "spaceId": "7cf1b6cc-df88-4bf5-afc7-bf5416fda723"
      }
    },
    "*>r<": {
      "name": "Stage ",
      "type": "rollup",
      "target_property": "2)<e",
      "relation_property": "nN>c",
      "target_property_type": "relation"
    },
    "67(|": {
      "name": "Pronouns",
      "type": "select",
      "options": [
        {
          "id": "3b85d194-a266-4fd3-b906-ee49a72ff8cc",
          "color": "purple",
          "value": "she/her/hers"
        },
        {
          "id": "26124ce7-5317-471e-9a47-09d1d4ec29df",
          "color": "red",
          "value": "he/him/his"
        },
        {
          "id": "e344db42-22f4-4b4b-bf81-e4dc5cf63678",
          "color": "green",
          "value": "they/them/their"
        }
      ]
    },
    "7Es.": {
      "name": "Group",
      "type": "rollup",
      "target_property": "cF.t",
      "relation_property": "nN>c",
      "target_property_type": "relation"
    },
    "7I1[": {
      "name": "Working Hours",
      "type": "multi_select",
      "options": [
        {
          "id": "2a812bf9-dd62-4919-bba6-34f533b697d0",
          "color": "red",
          "value": "full-time"
        },
        {
          "id": "c1d5a193-3d41-4efd-9de1-af0cce0101b6",
          "color": "red",
          "value": "part-time"
        },
        {
          "id": "de228845-720a-47c7-9cba-353bf9f43504",
          "color": "green",
          "value": "40h/week"
        },
        {
          "id": "7a19bcb6-c80e-42bd-a914-eadb6ad4c298",
          "color": "green",
          "value": "35h/week"
        },
        {
          "id": "132b36b7-ed14-4df8-93d8-5af1eb1338fb",
          "color": "green",
          "value": "32h/week"
        },
        {
          "id": "87f0df13-d7da-444e-a7a8-91406efa42c4",
          "color": "green",
          "value": "30h/week"
        },
        {
          "id": "0e062d5f-a1ec-4de4-ad73-51a6e234ad88",
          "color": "green",
          "value": "26h/week"
        },
        {
          "id": "1388f8b2-50b8-4465-8b23-1a255c68be19",
          "color": "green",
          "value": "25h/week"
        },
        {
          "id": "46eb64f8-4104-412e-86f0-bf58b9fd3980",
          "color": "green",
          "value": "20h/week"
        },
        {
          "id": "2d05f491-f614-41a2-8540-8ac4c854a822",
          "color": "green",
          "value": "15h/week"
        },
        {
          "id": "dd6b0820-c950-4198-b8bc-402f5aacd3da",
          "color": "green",
          "value": "9h/week"
        },
        {
          "id": "14afbf7c-543e-44d0-8bb8-c16e1e7d9928",
          "color": "green",
          "value": "8h/week"
        },
        {
          "id": "692012a4-da56-4570-8657-28ee1745c676",
          "color": "green",
          "value": "7h/week"
        },
        {
          "id": "f264ad7d-b350-4def-8063-1a6fd6c00677",
          "color": "green",
          "value": "4h/week"
        },
        {
          "id": "e8d62a11-3c88-4027-81f5-852f9261c9f7",
          "color": "green",
          "value": "3h/week"
        },
        {
          "id": "d0f908c2-70d5-4362-aef3-f42d6fda40fc",
          "color": "green",
          "value": "2h/week"
        },
        {
          "id": "9176df4e-36df-4b4a-86df-782b591a98f9",
          "color": "green",
          "value": "10h/week"
        },
        {
          "id": "ca061d87-437d-409c-9ce9-90adbe9193b8",
          "color": "green",
          "value": "16h/week"
        },
        {
          "id": "e12040b2-4697-451b-bdb6-6753f492b366",
          "color": "green",
          "value": "5h/week"
        },
        {
          "id": "10ff1352-7b0e-48e7-bf2c-850db3b3f57f",
          "color": "green",
          "value": "7.5/week"
        }
      ]
    },
    "8&Rv": {
      "name": "Starting Date at CODE",
      "type": "date"
    },
    ";Uxi": {
      "name": "Module Co-ordinator for:",
      "type": "relation",
      "property": "Nsa`",
      "collection_id": "0b1bb7c7-2181-4229-baf1-509fbf6f8fb5",
      "collection_pointer": {
        "id": "0b1bb7c7-2181-4229-baf1-509fbf6f8fb5",
        "table": "collection",
        "spaceId": "7cf1b6cc-df88-4bf5-afc7-bf5416fda723"
      }
    },
    "<A>l": {
      "name": "Committee Representative",
      "type": "relation",
      "version": "v2",
      "property": "zu@f",
      "autoRelate": {
        "enabled": false
      },
      "collection_id": "85dd68da-1c21-4548-ade7-773ebd833fd3",
      "collection_pointer": {
        "id": "85dd68da-1c21-4548-ade7-773ebd833fd3",
        "table": "collection",
        "spaceId": "7cf1b6cc-df88-4bf5-afc7-bf5416fda723"
      }
    },
    "@k6c": {
      "name": "Roles",
      "type": "relation",
      "property": "#5$r",
      "collection_id": "3a791684-2fe2-496b-85f0-f9559b56d54b",
      "collection_pointer": {
        "id": "3a791684-2fe2-496b-85f0-f9559b56d54b",
        "table": "collection",
        "spaceId": "7cf1b6cc-df88-4bf5-afc7-bf5416fda723"
      }
    },
    "AL^T": {
      "name": "Related to Copy of Modules db (Module coordinator (linked)) 2",
      "type": "relation",
      "property": "Nsa`",
      "collection_id": "831ca3cc-4781-4822-bf0b-c4c46440ced1",
      "collection_pointer": {
        "id": "831ca3cc-4781-4822-bf0b-c4c46440ced1",
        "table": "collection",
        "spaceId": "9d93ab6a-b2d5-4748-8f0e-6da1802b4ed2"
      }
    },
    "FYh]": {
      "name": "Buddies",
      "type": "relation",
      "property": "LoMA",
      "collection_id": "bd020859-4b9b-4751-ac09-fedaa225bf67",
      "collection_pointer": {
        "id": "bd020859-4b9b-4751-ac09-fedaa225bf67",
        "table": "collection",
        "spaceId": "7cf1b6cc-df88-4bf5-afc7-bf5416fda723"
      }
    },
    "F|vj": {
      "name": "Faculty: Potential Project Sponsor",
      "type": "checkbox"
    },
    "HZdk": {
      "name": "Faculty: SS2022 Fair Availability (Slot 1)",
      "type": "date"
    },
    "Hbo}": {
      "name": "on the Learning Platform",
      "type": "url"
    },
    "Jr#p": {
      "name": "Personal Mentor",
      "type": "relation",
      "property": "uOP7",
      "collection_id": "bd020859-4b9b-4751-ac09-fedaa225bf67",
      "collection_pointer": {
        "id": "bd020859-4b9b-4751-ac09-fedaa225bf67",
        "table": "collection",
        "spaceId": "7cf1b6cc-df88-4bf5-afc7-bf5416fda723"
      }
    },
    "K?;t": {
      "name": "Email",
      "type": "email"
    },
    "KDWg": {
      "name": "Office Hours",
      "type": "text"
    },
    "K~_l": {
      "name": "Committee: Chair ",
      "type": "relation",
      "property": "svK;",
      "collection_id": "76ca8337-7b98-4578-961c-5acf84dcd730",
      "collection_pointer": {
        "id": "76ca8337-7b98-4578-961c-5acf84dcd730",
        "table": "collection",
        "spaceId": "7cf1b6cc-df88-4bf5-afc7-bf5416fda723"
      }
    },
    "LoMA": {
      "name": "Buddy",
      "type": "relation",
      "property": "FYh]",
      "collection_id": "bd020859-4b9b-4751-ac09-fedaa225bf67",
      "collection_pointer": {
        "id": "bd020859-4b9b-4751-ac09-fedaa225bf67",
        "table": "collection",
        "spaceId": "7cf1b6cc-df88-4bf5-afc7-bf5416fda723"
      }
    },
    "OCXy": {
      "name": "Labels",
      "type": "relation",
      "property": "J}{X",
      "collection_id": "fd014d67-b113-43c8-8fa6-cb0ed9fbb2f9",
      "collection_pointer": {
        "id": "fd014d67-b113-43c8-8fa6-cb0ed9fbb2f9",
        "table": "collection",
        "spaceId": "7cf1b6cc-df88-4bf5-afc7-bf5416fda723"
      }
    },
    "OHg=": {
      "name": "Related to SE Academic Events (Fall 2021) (Host) 3",
      "type": "relation",
      "property": "cSXC",
      "collection_id": "b44499af-ace5-4da6-a44e-151232c962a6",
      "collection_pointer": {
        "id": "b44499af-ace5-4da6-a44e-151232c962a6",
        "table": "collection",
        "spaceId": "9d93ab6a-b2d5-4748-8f0e-6da1802b4ed2"
      }
    },
    "PyVo": {
      "name": "Related to SE Module Support (🙂 Faculty support)",
      "type": "relation",
      "property": "aIP[",
      "collection_id": "7fa92338-7e01-4ea6-a409-ab670749d72a",
      "collection_pointer": {
        "id": "7fa92338-7e01-4ea6-a409-ab670749d72a",
        "table": "collection",
        "spaceId": "7cf1b6cc-df88-4bf5-afc7-bf5416fda723"
      }
    },
    "Q?(m": {
      "name": "No of mentees",
      "type": "rollup",
      "formula": {
        "id": "uOP7",
        "name": "Mentees (linked)",
        "type": "property",
        "result_type": "text"
      },
      "aggregation": "count_values",
      "target_property": "title",
      "relation_property": "uOP7",
      "target_property_type": "title"
    },
    "QaZb": {
      "name": "Related to SE Module Support (🙂 Faculty support) 3",
      "type": "relation",
      "property": "aIP[",
      "collection_id": "8a7e1bd8-6c69-41bf-8f33-d8e8e6d2a082",
      "collection_pointer": {
        "id": "8a7e1bd8-6c69-41bf-8f33-d8e8e6d2a082",
        "table": "collection",
        "spaceId": "9d93ab6a-b2d5-4748-8f0e-6da1802b4ed2"
      }
    },
    "R9X=": {
      "name": "Surname",
      "type": "text"
    },
    "Rewx": {
      "name": "Related to SE Module Support (🙂 Faculty support) 1",
      "type": "relation",
      "property": "aIP[",
      "collection_id": "8931ac1d-d8d7-4f0b-92ac-595e8f0196c8",
      "collection_pointer": {
        "id": "8931ac1d-d8d7-4f0b-92ac-595e8f0196c8",
        "table": "collection",
        "spaceId": "7cf1b6cc-df88-4bf5-afc7-bf5416fda723"
      }
    },
    "S?Pj": {
      "name": "No of buddies",
      "type": "rollup",
      "formula": {
        "id": "uOP7",
        "name": "Mentees (linked)",
        "type": "property",
        "result_type": "text"
      },
      "aggregation": "unique",
      "target_property": "title",
      "relation_property": "FYh]",
      "target_property_type": "title"
    },
    "U^m_": {
      "name": "Related to Copy of Modules db (Module coordinator (linked)) 1",
      "type": "relation",
      "property": "Nsa`",
      "collection_id": "c31684ab-267b-46e1-a5c6-dffa580ed612",
      "collection_pointer": {
        "id": "c31684ab-267b-46e1-a5c6-dffa580ed612",
        "table": "collection",
        "spaceId": "9d93ab6a-b2d5-4748-8f0e-6da1802b4ed2"
      }
    },
    "X)Xr": {
      "name": "Title",
      "type": "text"
    },
    "\\I7-": {
      "name": "Preferred name",
      "type": "text"
    },
    "_T]L": {
      "name": "LinkedIn",
      "type": "url"
    },
    "`!ml": {
      "name": "Team",
      "type": "relation",
      "property": ":-W2",
      "collection_id": "06cfcf21-b238-4214-9fca-f8303f06c468",
      "collection_pointer": {
        "id": "06cfcf21-b238-4214-9fca-f8303f06c468",
        "table": "collection",
        "spaceId": "7cf1b6cc-df88-4bf5-afc7-bf5416fda723"
      }
    },
    "`a>h": {
      "name": "Related to Module List (Module coordinator (linked)) 1",
      "type": "relation",
      "property": "Nsa`",
      "collection_id": "357c9d55-f3b2-4228-a709-d95d8971b57a",
      "collection_pointer": {
        "id": "357c9d55-f3b2-4228-a709-d95d8971b57a",
        "table": "collection",
        "spaceId": "7cf1b6cc-df88-4bf5-afc7-bf5416fda723"
      }
    },
    "`n^Z": {
      "name": "Related to SE Academic Events (Fall 2021) (Host) 1",
      "type": "relation",
      "property": "cSXC",
      "collection_id": "76b7278c-0a2b-4cb9-9418-8409f65bf4d9",
      "collection_pointer": {
        "id": "76b7278c-0a2b-4cb9-9418-8409f65bf4d9",
        "table": "collection",
        "spaceId": "7cf1b6cc-df88-4bf5-afc7-bf5416fda723"
      }
    },
    "`npO": {
      "name": "Faculty: SS2022 Fair Availability (Slot 2)",
      "type": "date"
    },
    "a[di": {
      "name": "Team Lead",
      "type": "relation",
      "property": "?NGL",
      "collection_id": "87f27aa4-9147-42d3-a8b9-476cb1450ef5",
      "collection_pointer": {
        "id": "87f27aa4-9147-42d3-a8b9-476cb1450ef5",
        "table": "collection",
        "spaceId": "7cf1b6cc-df88-4bf5-afc7-bf5416fda723"
      }
    },
    "gEWv": {
      "name": "Active student?",
      "type": "formula",
      "formula": {
        "id": "nN>c",
        "name": "Status (linked)",
        "type": "property",
        "result_type": "text"
      }
    },
    "hF]N": {
      "name": "Skills",
      "type": "multi_select",
      "options": [
        {
          "id": "a532000c-bf1f-4eda-9514-fd3257b6b14b",
          "color": "pink",
          "value": "Python"
        },
        {
          "id": "c4c3f204-c16e-47fa-a8b8-f8b1d61e48e2",
          "color": "red",
          "value": "Machine Learning"
        },
        {
          "id": "7633b755-5b4a-4114-b6c7-7ab68ce9d7a0",
          "color": "blue",
          "value": "Web Development"
        },
        {
          "id": "c7f4a89f-b510-4f89-af6c-9a02b12a884e",
          "color": "gray",
          "value": "Calculus"
        },
        {
          "id": "2ce6fd96-8859-4119-a646-4d7908ecedcb",
          "color": "orange",
          "value": "Backend Development"
        },
        {
          "id": "cebbf6c5-249b-4ad1-820f-a36cfb12328d",
          "color": "blue",
          "value": "Git"
        },
        {
          "id": "2fa1d3e2-c6f2-4a9a-a287-40d0ac892c08",
          "color": "yellow",
          "value": "Databases"
        },
        {
          "id": "487087e9-89a2-4244-90f6-428d2f42c484",
          "color": "pink",
          "value": "Physics"
        },
        {
          "id": "75700ae5-42c5-493c-8b54-40a365499d38",
          "color": "purple",
          "value": "Engineering Management"
        },
        {
          "id": "0e59147e-3d41-47e3-a736-6da8f8a47c60",
          "color": "green",
          "value": "Cloud Computing"
        },
        {
          "id": "ae96b916-bbe5-460d-8b9e-30651a904761",
          "color": "green",
          "value": "Cloud Architecture"
        },
        {
          "id": "78643a0c-e67b-4e38-8f6d-8c75cb99877c",
          "color": "brown",
          "value": "Probability & Statistics"
        },
        {
          "id": "0ba67aeb-8ba8-4a39-b1bd-665b8151c217",
          "color": "yellow",
          "value": "C++"
        },
        {
          "id": "753323bc-c9c0-4e63-9ae1-c6c76422e4a0",
          "color": "default",
          "value": "Image Processing"
        },
        {
          "id": "a629f5c2-6f27-46f1-b4b1-28afe84f6d0e",
          "color": "purple",
          "value": "Algorithms & Data Structures"
        },
        {
          "id": "90e1d495-79f1-45e0-83f0-67b296060d00",
          "color": "blue",
          "value": "Linear Algebra"
        },
        {
          "id": "6c858f9c-d7ad-4a5a-ac69-b0a205350817",
          "color": "purple",
          "value": "Low Level Programming"
        },
        {
          "id": "f41a7103-e0d2-4794-94f0-6f11fde0df58",
          "color": "green",
          "value": "3D Rendering"
        },
        {
          "id": "265c3da9-bfe6-427c-b058-f835fc3db57a",
          "color": "green",
          "value": "Clean Code"
        },
        {
          "id": "ab17c2b2-874d-4a96-bcbc-a509ef663c3c",
          "color": "brown",
          "value": "Software Architecture"
        },
        {
          "id": "7a290593-5281-48ec-94c3-59d78f7ba0f2",
          "color": "red",
          "value": "Operating Systems"
        },
        {
          "id": "5709295f-629b-4fe5-920e-f064533a4095",
          "color": "gray",
          "value": "Programming Language Theory"
        },
        {
          "id": "725daeb9-b06e-4944-a7db-d23118be0afe",
          "color": "blue",
          "value": "Data Science"
        },
        {
          "id": "f0f1456d-6cc5-4545-a9e6-28dd4bc1cca2",
          "color": "gray",
          "value": "Bioacoustics"
        },
        {
          "id": "442066e1-d6cf-4d8a-b100-1e4fef5f5300",
          "color": "yellow",
          "value": "Data Analysis"
        },
        {
          "id": "97d321c5-7885-4ba1-b0b2-2be885a11119",
          "color": "orange",
          "value": "Artificial Intelligence"
        },
        {
          "id": "fc2f96b5-43a6-4e40-87b9-1513d2359021",
          "color": "orange",
          "value": "IoT"
        },
        {
          "id": "a62ee533-c056-4d3b-ae6c-16a28d993536",
          "color": "yellow",
          "value": "Optimization"
        },
        {
          "id": "e35dcbb3-3e99-42b2-b115-2673ac81860d",
          "color": "yellow",
          "value": "Planning"
        },
        {
          "id": "1e5bf8cc-c04e-4780-bc7e-28c98d1bc978",
          "color": "brown",
          "value": "Reasoning"
        },
        {
          "id": "5aa24231-88d9-4d1f-9702-6427129ce50d",
          "color": "blue",
          "value": "Mobile Development"
        },
        {
          "id": "af6a233d-2edb-42bc-b6d6-bbe08e7e78d2",
          "color": "blue",
          "value": "Android"
        },
        {
          "id": "8a40bedf-41cb-493c-8e44-e90b4af3a297",
          "color": "red",
          "value": "React"
        },
        {
          "id": "0b52bff8-cff1-4a5e-b3d5-7ef7784d057a",
          "color": "orange",
          "value": "Design Patterns"
        },
        {
          "id": "78e7b6bd-405d-4939-baff-6a652907ef96",
          "color": "blue",
          "value": "AR/VR"
        },
        {
          "id": "620c7a47-c919-405e-aee1-bb266b2ccff7",
          "color": "purple",
          "value": "Frontend Development"
        },
        {
          "id": "ff40f46c-7b0a-4e54-bb96-0ec5b2d1612e",
          "color": "red",
          "value": "JavaScript"
        },
        {
          "id": "692cd027-c88e-4929-a9f8-bfbb317d4e8f",
          "color": "gray",
          "value": "Frontend Frameworks"
        },
        {
          "id": "f396874c-81eb-40bf-9022-ed89305e3d5a",
          "color": "blue",
          "value": "Blockchain"
        },
        {
          "id": "fafd38a9-a53c-4819-ad69-6e6adca3bde4",
          "color": "brown",
          "value": "Social Networks"
        },
        {
          "id": "c4a07ea9-cf95-479f-9424-181de87f8d46",
          "color": "green",
          "value": "Security"
        },
        {
          "id": "0fb38db4-01e1-4461-8dce-518303d383d2",
          "color": "yellow",
          "value": "REST"
        },
        {
          "id": "f05d061e-fb7c-425d-9370-ace237425326",
          "color": "gray",
          "value": "GraphQL"
        },
        {
          "id": "975f3fe3-2a03-4680-bcf2-58974860f330",
          "color": "green",
          "value": "Graph Databases"
        },
        {
          "id": "ca2baba9-2316-42ef-9b90-b15d049a345d",
          "color": "blue",
          "value": "PostgreSQL"
        },
        {
          "id": "de5b57bc-3f3e-4322-a43c-c36f46d46246",
          "color": "green",
          "value": "MongoDB"
        },
        {
          "id": "f82aaeaa-39d9-4f0a-b008-db4eb8abab33",
          "color": "orange",
          "value": "Cryptography"
        },
        {
          "id": "a07822f9-51a8-4f8a-a50d-754760c01cc3",
          "color": "gray",
          "value": "SQL"
        },
        {
          "id": "8ea2dbea-4945-43bd-bc85-aa52d4952ab3",
          "color": "green",
          "value": "Communication"
        },
        {
          "id": "255955d9-ec49-4657-b0fc-cc5390e547fb",
          "color": "yellow",
          "value": "Presentation Skills"
        },
        {
          "id": "99c7bfba-75c3-4dcd-8e0f-bfd5c2c2bb36",
          "color": "blue",
          "value": "Leadership"
        },
        {
          "id": "ae523ac6-f2cc-4048-869e-7c11a484713e",
          "color": "default",
          "value": "Teamwork"
        },
        {
          "id": "bf12652e-408e-4e3b-996e-ad8094c88998",
          "color": "yellow",
          "value": "Giving & Receiving Feedback"
        },
        {
          "id": "36e3575e-28eb-4fad-ac02-241a54547ea8",
          "color": "purple",
          "value": "Active Listening"
        },
        {
          "id": "7617fdbe-6c03-4d1c-ac35-f74670b52844",
          "color": "pink",
          "value": "Organisational Development"
        },
        {
          "id": "6816f9d4-2b7f-4b3f-ba5f-bcc270428cf6",
          "color": "orange",
          "value": "Personal Development"
        },
        {
          "id": "16f3a02a-d876-458b-99f9-afdf530c914e",
          "color": "green",
          "value": "Intercultural communication & cooperation"
        },
        {
          "id": "e9626fe3-1f42-4d36-a34c-6ed5aeeaf9c4",
          "color": "default",
          "value": "Leading discussion"
        },
        {
          "id": "19630d73-0d58-4361-877c-6fff18119ea1",
          "color": "yellow",
          "value": "Research for Future Creativity"
        },
        {
          "id": "08881d9d-6862-4633-8384-078048071895",
          "color": "blue",
          "value": "Interaction Design"
        },
        {
          "id": "980883e4-2d89-4679-968f-2ec79288976a",
          "color": "brown",
          "value": "Design Research"
        },
        {
          "id": "633f9eaa-f48a-4bd5-8ea8-8baffefe0ffc",
          "color": "orange",
          "value": "Generative Media"
        },
        {
          "id": "0cbdb3d3-d342-4be9-930e-927cd0a87e14",
          "color": "brown",
          "value": "Video & Audio"
        },
        {
          "id": "acdae4b3-2984-4b66-9c61-89892c4eb62c",
          "color": "red",
          "value": "Prototyping"
        },
        {
          "id": "972679c9-6b70-43a2-af77-aa6770e6b3f0",
          "color": "green",
          "value": "Experimental Art"
        },
        {
          "id": "6fb69729-1f52-41da-9e44-fb6f41f25ee9",
          "color": "red",
          "value": "Business Modelling"
        },
        {
          "id": "e824269e-61d9-473b-af06-a16d3efe93c9",
          "color": "yellow",
          "value": "Creative Coding"
        },
        {
          "id": "a5b71806-f0b3-4809-b934-e5a4d3074050",
          "color": "default",
          "value": "openFrameworks"
        },
        {
          "id": "089bfe33-f993-40d7-8364-187774b14fe2",
          "color": "brown",
          "value": "Physical Computing"
        },
        {
          "id": "4b0ce838-e326-487b-928e-d14ac4f75b5c",
          "color": "blue",
          "value": "Visual Design"
        },
        {
          "id": "312736a4-7325-4364-bd33-bf7865bb66a7",
          "color": "brown",
          "value": "Volumetric Imaging"
        },
        {
          "id": "c59e4d30-fd60-4e46-b039-ee88be8fdcdf",
          "color": "green",
          "value": "Design for IOT; UX; IA; ID; HCI"
        },
        {
          "id": "9b247290-d110-4521-9869-55b200887431",
          "color": "green",
          "value": "Voice- & Chatbots"
        },
        {
          "id": "9131565d-ec73-4375-86fd-544c9082ce70",
          "color": "gray",
          "value": "Music Theory"
        },
        {
          "id": "704d778d-0916-4a73-b13f-d99f369e1d86",
          "color": "brown",
          "value": "UX/UI"
        },
        {
          "id": "ba06454d-bdc2-4445-b579-2da2c9e58b4a",
          "color": "gray",
          "value": "GUI"
        },
        {
          "id": "d837949b-4ed4-43ed-badb-398ffb03aea3",
          "color": "purple",
          "value": "Conversational/Voice Interfaces"
        },
        {
          "id": "75d0b1b2-bebf-4e1e-b551-277da572fc92",
          "color": "blue",
          "value": "Screen-based Interfaces (esp. mobile)"
        },
        {
          "id": "3621d313-d1e4-4460-a202-c163537e6eda",
          "color": "green",
          "value": "Design Systems"
        },
        {
          "id": "8422bc67-ebe7-4a51-9b18-133293134bfc",
          "color": "default",
          "value": "Information Design"
        },
        {
          "id": "8120b886-c049-42eb-b8ea-a9717a6711cf",
          "color": "yellow",
          "value": "Information Architecture"
        },
        {
          "id": "a7a6c3c3-2751-4396-9be4-cf9a7fc7fb21",
          "color": "purple",
          "value": "User Testing"
        },
        {
          "id": "7c7e0940-4967-4d68-8fed-694c8adf2e51",
          "color": "red",
          "value": "Usability Testing"
        },
        {
          "id": "21eca84e-9aea-4966-86dd-9398bd628af9",
          "color": "green",
          "value": "Mixed Methods"
        },
        {
          "id": "6db04cd2-4f0b-4274-b8c8-df38a69f24fb",
          "color": "blue",
          "value": "Navigation Design"
        },
        {
          "id": "0551b58f-5dd9-4a70-ad48-7c8e8c4ca4bb",
          "color": "yellow",
          "value": "Brand Design & Strategy"
        },
        {
          "id": "ffbfdd0e-f362-429d-bfae-c641a48438be",
          "color": "green",
          "value": "Visual/Verbal Identity"
        },
        {
          "id": "c79f3a7b-0870-4486-b9c3-1b1c8fe53c2c",
          "color": "orange",
          "value": "Workshop Planning & Creative Facilitation"
        },
        {
          "id": "461711d9-7748-4e6b-bbfc-e8709d8c2ddb",
          "color": "purple",
          "value": "Design Process"
        },
        {
          "id": "364f9814-5222-4293-bdc8-860aab0da97e",
          "color": "yellow",
          "value": "Documenting"
        },
        {
          "id": "c5d3ffd4-7a97-4238-bd56-af034acada27",
          "color": "green",
          "value": "Sketching/Wireframing"
        },
        {
          "id": "c20ec9c2-b466-45c2-a4c9-57a34a6303d5",
          "color": "pink",
          "value": "Aesthetics"
        },
        {
          "id": "f9c60d23-f432-4316-a64d-b2d4ccfe467a",
          "color": "default",
          "value": "Composition/Layouts"
        },
        {
          "id": "2868b079-b8af-4f62-b045-87390f426914",
          "color": "brown",
          "value": "User Stories"
        },
        {
          "id": "848be81b-90e3-46ec-8b9e-5867dd694b5c",
          "color": "green",
          "value": "Design-to-development Handoff"
        },
        {
          "id": "453c6a5e-ed82-4458-a2c6-f1f2cf610656",
          "color": "orange",
          "value": "Setting up Design Portfolios"
        },
        {
          "id": "8726cf00-1a98-42d6-8de4-914831a05829",
          "color": "pink",
          "value": "Writing Case Studies"
        },
        {
          "id": "1d9ba737-b38d-43f9-9728-2bc3c1baee6e",
          "color": "green",
          "value": "Figma"
        },
        {
          "id": "914cd117-e2a1-4b1f-9c65-d42ad587d441",
          "color": "green",
          "value": "Adobe XD"
        },
        {
          "id": "2a01329a-f04a-4349-8c53-8defc63cfa1d",
          "color": "yellow",
          "value": "Philosophy"
        },
        {
          "id": "70cc0d18-eb99-40d2-a690-0a907d0d44a3",
          "color": "orange",
          "value": "Social & Cultural Sciences"
        },
        {
          "id": "e35b4ec0-87f0-4b5c-a926-1e72dbaf9db2",
          "color": "brown",
          "value": "FOSS Software & Activism"
        },
        {
          "id": "72559100-e0a3-4278-961c-732eac5d3fbc",
          "color": "blue",
          "value": "Audio Editing (esp. Linux)"
        },
        {
          "id": "5aad52ae-663e-4441-b006-746a139af513",
          "color": "yellow",
          "value": "Sys Admin"
        },
        {
          "id": "51e233c9-6f33-42a3-9a89-9f2550bffd29",
          "color": "purple",
          "value": "Bash"
        },
        {
          "id": "9011ebad-48fa-4a4b-9381-021c635fc62e",
          "color": "green",
          "value": "HTML/CSS"
        },
        {
          "id": "0c722210-dc33-4e77-a15e-e421635b0ab7",
          "color": "red",
          "value": "Assembler"
        },
        {
          "id": "9be3222c-9b6d-4e0d-a523-88078ce1911a",
          "color": "default",
          "value": "UX Design"
        },
        {
          "id": "f4434a65-cd35-4511-a9d7-a7bb1402b043",
          "color": "red",
          "value": "ID"
        },
        {
          "id": "15e440b9-2fb2-4cd0-8dee-9169c79222b4",
          "color": "default",
          "value": "HCI"
        },
        {
          "id": "5dc6e201-a683-482c-b440-cc31f088ff5e",
          "color": "green",
          "value": "Design for IoT"
        },
        {
          "id": "1f5a3c7b-8fbe-41d3-85b7-19914559a6c9",
          "color": "orange",
          "value": "IA"
        },
        {
          "id": "c3360cd2-c248-4e2b-a129-44e0cee1f91b",
          "color": "red",
          "value": "Perl"
        },
        {
          "id": "92e63d85-76dc-4f58-8740-1135de6cbea9",
          "color": "purple",
          "value": "BASIC"
        },
        {
          "id": "dcd51121-410b-4836-a3c3-e28b91ccb2ce",
          "color": "orange",
          "value": "Startups"
        },
        {
          "id": "e9f4faa4-e9c2-4d52-ba60-3f1ba431f1ae",
          "color": "blue",
          "value": "Entrepreneurship"
        },
        {
          "id": "ff66a001-f01e-4c30-8ca3-112825b81b26",
          "color": "gray",
          "value": "Experience Design"
        },
        {
          "id": "f7871800-801f-432a-af61-05c151d7df97",
          "color": "pink",
          "value": "Behaviour Change"
        },
        {
          "id": "96836f00-2347-4974-b153-44a6e9831df8",
          "color": "red",
          "value": "Story Telling"
        },
        {
          "id": "53107d3c-f1d9-4656-8cc3-03226b76b578",
          "color": "green",
          "value": "Video"
        },
        {
          "id": "74ccd664-67ca-4f03-9670-c2cb2d4bcdb1",
          "color": "yellow",
          "value": "Photo"
        },
        {
          "id": "79ec14e5-60e8-479b-b483-49adbcd7504d",
          "color": "pink",
          "value": "Conceptual  Work"
        },
        {
          "id": "f1a04d13-3e08-4c55-b6c2-29c96757ed1e",
          "color": "green",
          "value": "Qualitative Research"
        },
        {
          "id": "f862b8f0-3149-4fa6-b3cc-ea3316fe2536",
          "color": "blue",
          "value": "Automotive"
        },
        {
          "id": "2e2861f5-6d09-4cb3-9cc3-1bf626c315a8",
          "color": "pink",
          "value": "Design Methods"
        },
        {
          "id": "5e24fea8-34b7-4b98-89c2-da99afe50618",
          "color": "gray",
          "value": "Field Research"
        },
        {
          "id": "d1c2e95c-da6f-4ee9-ab83-63305a244edf",
          "color": "gray",
          "value": "UX"
        },
        {
          "id": "2f4e0330-e0c5-4159-9e5c-bb7ec034dfaf",
          "color": "pink",
          "value": "Distributed Systems"
        },
        {
          "id": "e92fc3d5-b72d-4b8c-934b-5d8c9bc949ef",
          "color": "yellow",
          "value": "Networking"
        },
        {
          "id": "6d917652-50bb-4f7b-9231-0aae70d8c45c",
          "color": "orange",
          "value": "NFTs"
        },
        {
          "id": "3da08d75-62f0-4822-b58c-1d886a27ed0d",
          "color": "brown",
          "value": "Recommender Systems"
        },
        {
          "id": "b7edc0ef-ed83-4861-9bfd-e9ec0033b300",
          "color": "orange",
          "value": "Social Network Analysis"
        },
        {
          "id": "5953ac2d-11bd-4363-bf4e-15599ad415ef",
          "color": "pink",
          "value": "Wireless Communications"
        },
        {
          "id": "df56d58e-f676-4e0a-87a3-43bec639bf68",
          "color": "pink",
          "value": "Examination Office Procedures"
        },
        {
          "id": "6f1e1d45-94b5-49fd-9882-a5260a2e8fe5",
          "color": "red",
          "value": "Assessments at CODE"
        },
        {
          "id": "af1d3bef-cb15-450e-9abd-f9a6f7af4257",
          "color": "yellow",
          "value": "Graduation Requirements"
        },
        {
          "id": "794e5cdb-99c3-47b9-8bda-19a355ecf1b5",
          "color": "blue",
          "value": "Ideation"
        },
        {
          "id": "47515f8c-e56d-453d-8564-4d0931bf323d",
          "color": "yellow",
          "value": "Problem-solving"
        },
        {
          "id": "0562b13f-4e45-4498-9afa-5d4bf89cd542",
          "color": "blue",
          "value": "Process Management"
        },
        {
          "id": "84788cbc-e682-45d8-94d3-0ab89054b2e0",
          "color": "orange",
          "value": "Pitch Review"
        },
        {
          "id": "44d66d0d-4f53-4201-9a2a-75eabbba7a3a",
          "color": "blue",
          "value": "Critical Making"
        },
        {
          "id": "c4cbd29f-496f-42dd-b90f-67ef8547fbc5",
          "color": "purple",
          "value": "Design Process (DD)"
        },
        {
          "id": "41e10408-4dfb-414f-949f-d118a8a260ac",
          "color": "pink",
          "value": "Developing Research Questions"
        },
        {
          "id": "488bdb0c-8d6c-4755-98e0-7b0d14b0ebad",
          "color": "yellow",
          "value": "Quantitative & Qualitative Data Gathering"
        },
        {
          "id": "8a462413-3c25-4d22-bd04-d0d13243a7c7",
          "color": "default",
          "value": "Analysis & Synthesis"
        },
        {
          "id": "3fbe3be4-89fb-4348-bc5d-a31d967ed6f3",
          "color": "blue",
          "value": "Developing Insights"
        },
        {
          "id": "0dfcf981-a81c-4ab3-8ca2-2d146ad18e0c",
          "color": "brown",
          "value": "HMW's"
        },
        {
          "id": "4f161bc4-c1b0-4946-a4c4-1b0508c619f6",
          "color": "purple",
          "value": "Project Framing"
        },
        {
          "id": "95d5e4ca-f3a5-4bf8-87fd-8146166e8a91",
          "color": "orange",
          "value": "Ethics"
        },
        {
          "id": "da44847d-a3c3-4d8c-9ad8-816f1c4b4b3b",
          "color": "gray",
          "value": "Ethical Design Research"
        },
        {
          "id": "a2ed8718-a313-4628-b00c-31d0dff55789",
          "color": "green",
          "value": "Ethical Design Practice"
        },
        {
          "id": "c5f5b668-b88c-429b-b018-e16e97dc5051",
          "color": "pink",
          "value": "Service Design"
        },
        {
          "id": "d8a6fceb-790c-46f5-a10d-4232f408104a",
          "color": "yellow",
          "value": "Design Strategy"
        },
        {
          "id": "b5f5438f-fb83-45b5-9e7d-97b535874fc6",
          "color": "purple",
          "value": "Academic Writing"
        },
        {
          "id": "e7df9da4-674e-428a-ac70-5d1601700918",
          "color": "default",
          "value": "Secondary Research"
        },
        {
          "id": "fa1dba08-425b-4fc6-b5ac-2060d8298fe1",
          "color": "default",
          "value": "Idea development"
        },
        {
          "id": "19a38f87-77c9-4bf4-a3a3-af5f2bf9d398",
          "color": "yellow",
          "value": "Social Innovation"
        },
        {
          "id": "27722f5a-3826-4c69-bc30-af0f92355294",
          "color": "gray",
          "value": "Social Enterprises"
        },
        {
          "id": "cacf084c-1df6-4150-a032-81b959306944",
          "color": "pink",
          "value": "More Than Profit Enterprises"
        },
        {
          "id": "d4fb62ca-0b64-44c4-81fe-c82be214e65d",
          "color": "purple",
          "value": "Collaborative/Participatory Design Processes"
        },
        {
          "id": "b2c63237-ffe5-47d6-8fac-354a88ec354c",
          "color": "green",
          "value": "Workshop Design and Structure"
        },
        {
          "id": "6116e5b1-0a88-4a57-85a4-94eca93e3258",
          "color": "red",
          "value": "Approaches to Facilitation"
        },
        {
          "id": "d30c4eec-e81e-4645-ab08-0253a2798228",
          "color": "purple",
          "value": "Product Strategy"
        },
        {
          "id": "13e63751-a73c-43e5-a0c4-3c471b5d57c4",
          "color": "yellow",
          "value": "Brand Strategy"
        },
        {
          "id": "411de580-e3fb-494b-bc1c-d9041c78f576",
          "color": "green",
          "value": "Product Management for Complex Products & Services"
        },
        {
          "id": "424d9463-61e3-43f6-84b4-13f423dcdbbf",
          "color": "pink",
          "value": "Product Discovery"
        },
        {
          "id": "f5ce92d2-f400-44dc-ae33-868efc5f287d",
          "color": "purple",
          "value": "Quantitative Market Research"
        },
        {
          "id": "432e646c-05ee-4caf-ad22-967f8d0cf088",
          "color": "brown",
          "value": "Qualitative Market Research"
        },
        {
          "id": "00451233-8ea2-4b6f-8b5c-678f324caf79",
          "color": "green",
          "value": "Design Thinking"
        },
        {
          "id": "2ec993c9-f9a0-47aa-8c81-65dedd5aa439",
          "color": "default",
          "value": "Product Marketing"
        },
        {
          "id": "566324c8-464d-423e-8132-4141266ebea5",
          "color": "blue",
          "value": "Communication & Presentation of Ideas"
        },
        {
          "id": "5037d3b3-ee39-4ad0-84be-27eb5cdaa08c",
          "color": "default",
          "value": "Leading Teams"
        },
        {
          "id": "8744d583-020d-445f-ad63-75727b8fc9b9",
          "color": "yellow",
          "value": "Product Management"
        },
        {
          "id": "927b1a71-aa25-49db-8d8d-396f665f2a3a",
          "color": "green",
          "value": "Mentoring"
        },
        {
          "id": "6847ff1d-968a-4b81-afa5-271e41bcc383",
          "color": "blue",
          "value": "Student Buddy Program"
        },
        {
          "id": "18df5502-3de3-43c8-9c71-7d8380a3bd2f",
          "color": "purple",
          "value": "German Classes"
        },
        {
          "id": "839cd2b1-1bc9-4f12-b0cd-8e846fe1f2ee",
          "color": "red",
          "value": "Counselling"
        },
        {
          "id": "39784292-e50f-4226-802b-bb0ea7e7bd2f",
          "color": "pink",
          "value": "How to survive CODE"
        },
        {
          "id": "ede5138b-c757-4690-9936-5cff5e68c2c1",
          "color": "blue",
          "value": "Study Path (PM)"
        },
        {
          "id": "d41ca706-9826-49e8-892c-ff99951ea1f8",
          "color": "brown",
          "value": "Modules/Hand-ins (PM)"
        },
        {
          "id": "998a2cf7-bc03-4a64-8122-200969856c26",
          "color": "yellow",
          "value": "Team Building"
        },
        {
          "id": "aa648463-2781-4804-85bb-038956e2983a",
          "color": "red",
          "value": "Documentation"
        },
        {
          "id": "f74e5196-38f9-491d-aa05-ee2dbada1c04",
          "color": "orange",
          "value": "Flask"
        },
        {
          "id": "0cd7f605-4326-467b-8d5e-bf12cb98cad6",
          "color": "brown",
          "value": "Adobe Premiere"
        },
        {
          "id": "7655f023-3550-4583-86fe-d6a69e68789c",
          "color": "purple",
          "value": "Video Production"
        },
        {
          "id": "24f35d60-a4ec-413a-851f-d304f68d3b53",
          "color": "yellow",
          "value": "Blender"
        },
        {
          "id": "5c1dffd0-1cce-424a-b2a4-346c66bc176f",
          "color": "yellow",
          "value": "C#"
        },
        {
          "id": "00a6ffb5-3ea7-4419-8ed9-8d987124348a",
          "color": "yellow",
          "value": "NodeJS"
        },
        {
          "id": "15e7f706-6832-46f3-a7ba-3a55a060ef93",
          "color": "purple",
          "value": "After Effects & Maya"
        },
        {
          "id": "2ca2769c-a86b-42fc-b591-a8c11a1ca969",
          "color": "blue",
          "value": "Game Design"
        },
        {
          "id": "8831c00e-e87b-4eea-beb1-bd74ab3137bd",
          "color": "red",
          "value": "VR"
        },
        {
          "id": "11c4f349-84d7-4be0-a56e-1142a9a33fab",
          "color": "green",
          "value": "Sustainability Approaches"
        },
        {
          "id": "bc0ae15f-09f6-4fc0-aa1b-66e1907d8a56",
          "color": "red",
          "value": "Problem Definition"
        },
        {
          "id": "b27621b8-f7e2-4c5b-ba4d-d12bc30cb57f",
          "color": "purple",
          "value": "Communication & Presentation Skills"
        },
        {
          "id": "1fa22cc1-1e4d-485a-b00a-4c45de178c7d",
          "color": "blue",
          "value": "Consumer Psychology"
        },
        {
          "id": "69b28dca-f4e6-403d-8714-fa00a859acbf",
          "color": "brown",
          "value": "Requirements Engineering"
        },
        {
          "id": "3f06ed36-dd5b-4c3c-8a01-9978af14775f",
          "color": "yellow",
          "value": "Design/Prototyping Methods"
        },
        {
          "id": "d0f210f2-c720-4d9c-a96a-d0cfbfad7441",
          "color": "pink",
          "value": "Study / Semester Abroad"
        },
        {
          "id": "a66f1f90-1f3d-47cd-8e4f-dc383aa881ca",
          "color": "blue",
          "value": "Exchange Programmes"
        },
        {
          "id": "35a3e537-baff-4d2f-9a5c-272b55eb786e",
          "color": "orange",
          "value": "Erasmus+"
        },
        {
          "id": "ed06f4a6-d198-4665-b025-cb00f446186f",
          "color": "brown",
          "value": "International Office"
        },
        {
          "id": "6381fbbc-cbc5-4eab-9319-3fade4192b8f",
          "color": "green",
          "value": "PROMOS"
        },
        {
          "id": "6ada5249-86ce-4c98-84eb-1b7e9e1035c0",
          "color": "purple",
          "value": "Linguistics"
        },
        {
          "id": "05926844-0418-472d-b83e-1292193ff59e",
          "color": "pink",
          "value": "Politics"
        },
        {
          "id": "5880566d-bdec-4d4a-9164-89c8861bb6ea",
          "color": "red",
          "value": "Digital Technologies"
        },
        {
          "id": "1791bdab-9955-46d3-b278-d9fa9496ef8e",
          "color": "yellow",
          "value": "Social Sciences"
        },
        {
          "id": "a2a6b918-ca0a-456e-894b-50ea2490547b",
          "color": "yellow",
          "value": "Economics"
        },
        {
          "id": "093d3994-efbb-4a90-a444-7189a887847e",
          "color": "blue",
          "value": "Literature"
        },
        {
          "id": "f6488a70-9515-48a9-9b77-7a83b5effab3",
          "color": "brown",
          "value": "Logic"
        },
        {
          "id": "a7b7153c-5a18-4459-8366-8ac920fa5c30",
          "color": "blue",
          "value": "PHP"
        },
        {
          "id": "582b1eca-9c9e-4c2a-971a-fba41e687516",
          "color": "default",
          "value": "Arduino"
        },
        {
          "id": "27c18942-4cf0-4ff9-a8f4-45244e81c344",
          "color": "pink",
          "value": "Raspberry Pi"
        },
        {
          "id": "00727d1a-ee6f-4d5b-aa40-ef40c0bb113b",
          "color": "brown",
          "value": "FinTech"
        },
        {
          "id": "012869d3-f27c-4f08-bfc4-9f1d2ea5479b",
          "color": "green",
          "value": "InsurTech"
        },
        {
          "id": "0df48d99-500a-4a86-88f3-e02b3b510a87",
          "color": "green",
          "value": "Finance"
        },
        {
          "id": "8f0d8456-d66f-4976-9b23-4ad60ff35d76",
          "color": "green",
          "value": "Insurance"
        },
        {
          "id": "98316ba7-46cc-4232-9fe2-79dcbe25804f",
          "color": "green",
          "value": "API"
        },
        {
          "id": "90a0fb9e-f8a6-4a23-96b2-3ca8b4140a16",
          "color": "purple",
          "value": "Pitching"
        },
        {
          "id": "d620b12d-0258-4ec7-9caf-4f8a60aa7a39",
          "color": "gray",
          "value": "Roadmap"
        },
        {
          "id": "3e0e8086-365b-4bdc-b36c-fb9a72cc0692",
          "color": "pink",
          "value": "Market Research"
        },
        {
          "id": "bcbf68f8-f062-4bfe-819b-9d23cf0fc45b",
          "color": "default",
          "value": "Statista"
        },
        {
          "id": "cc8e52a6-8de9-49c4-8a65-c87d864f59ff",
          "color": "orange",
          "value": "TypeScript"
        },
        {
          "id": "5fe4c3f3-c7bd-40cd-bdee-c06e85f12936",
          "color": "pink",
          "value": "Swift"
        },
        {
          "id": "161f28b4-3551-410f-856b-eeb434bfc778",
          "color": "red",
          "value": "strapi (REST-API)"
        },
        {
          "id": "786087f6-f562-4c4b-aa2d-ff0666ab9934",
          "color": "green",
          "value": "MySQL"
        },
        {
          "id": "d7d80111-81eb-4120-82ac-35a7ba01c251",
          "color": "pink",
          "value": "Agile"
        },
        {
          "id": "dd7a6394-ab4e-421c-baff-36082d102004",
          "color": "green",
          "value": "Scrum"
        },
        {
          "id": "302fa321-9ea0-4aa8-97dd-421069350679",
          "color": "orange",
          "value": "Kanban"
        },
        {
          "id": "88dfaf7f-caca-4036-b29c-aa4c6b4a3e11",
          "color": "brown",
          "value": "LeSS (Large Scale Scrum)"
        },
        {
          "id": "d631d73e-26a8-4d25-8015-50f8aaacc7a4",
          "color": "orange",
          "value": "SAFe (Scaled Agile Framework)"
        },
        {
          "id": "bfd8c5fe-3372-4cc5-b1f3-6ce87e2f585b",
          "color": "pink",
          "value": "Spotify Model"
        },
        {
          "id": "ab8ba335-5bb9-43ca-b3b2-debf21cb2ed6",
          "color": "gray",
          "value": "Kanban Method"
        },
        {
          "id": "e8f6e09f-4453-4e05-af4a-d376da8352ca",
          "color": "purple",
          "value": "Lean"
        },
        {
          "id": "9a9f25d0-8628-4c1d-b00d-8ce41e81640c",
          "color": "red",
          "value": "Lean Software Development"
        },
        {
          "id": "a93cc034-28ff-4fc0-804f-5fa9b3f79885",
          "color": "blue",
          "value": "Value Stream Mapping"
        },
        {
          "id": "4f263491-444c-4451-b7c7-6357e7c1cba8",
          "color": "purple",
          "value": "Lean in IT"
        },
        {
          "id": "94e6ca8c-b06c-4717-84fd-b6b61fd81e03",
          "color": "yellow",
          "value": "Statistics"
        },
        {
          "id": "f6bad83b-aa50-4e0f-b5cc-320c344accd1",
          "color": "orange",
          "value": "Statisical Forecasting"
        },
        {
          "id": "e756e446-da1d-4652-ad2b-d0ab3ca38eb5",
          "color": "pink",
          "value": "JIRA Administration"
        },
        {
          "id": "e2a579be-dde8-4944-82b4-26b4571d9a1e",
          "color": "orange",
          "value": "Illustration"
        },
        {
          "id": "448bd205-e9d5-4d6e-877f-9a1ff5cf7840",
          "color": "green",
          "value": "Design History"
        },
        {
          "id": "2e0252d5-593f-48d9-9e7d-0fcadc4629b5",
          "color": "blue",
          "value": "Infographics"
        },
        {
          "id": "d497ac12-44d4-48c3-aeed-2082deaf5f62",
          "color": "red",
          "value": "Drawing"
        },
        {
          "id": "f88eedc9-7a91-4fb1-b1fa-b49db56e3492",
          "color": "orange",
          "value": "Painting"
        },
        {
          "id": "c236a3fc-090f-492f-b869-7ff1f65cd2e1",
          "color": "blue",
          "value": "Adobe Photoshop"
        },
        {
          "id": "5ee618d8-ff5d-45c3-8ee5-0ce27739671a",
          "color": "red",
          "value": "InDesign"
        },
        {
          "id": "f1bafb4b-51cf-4aeb-b8c8-eff556fcbd3e",
          "color": "default",
          "value": "Illustrator"
        },
        {
          "id": "5be4e8a1-2d49-4625-a30b-c97bc81e2065",
          "color": "pink",
          "value": "Sketching"
        },
        {
          "id": "ab4d80ec-18bd-41de-81bf-78cf27bf4a7f",
          "color": "red",
          "value": "Colour Theory"
        },
        {
          "id": "77798a85-45d1-491c-b8e2-163d7db80cc6",
          "color": "pink",
          "value": "Visual Storytelling"
        },
        {
          "id": "e020ddf0-bd04-4ab3-8e9e-04be2e08fcd4",
          "color": "brown",
          "value": "Showcasing your work"
        },
        {
          "id": "4811c7c7-2424-404e-860b-90f28e41b5e6",
          "color": "pink",
          "value": "Style & Style Development"
        },
        {
          "id": "86a9116d-6e79-441e-b694-a0a64f8e4df3",
          "color": "gray",
          "value": "Image Editing"
        },
        {
          "id": "9e843335-4c52-4d52-b016-02cdee183a4b",
          "color": "brown",
          "value": "Editorial Illustration & Design"
        },
        {
          "id": "506d6fa2-1b51-4adf-9413-95ed6f1bfe68",
          "color": "yellow",
          "value": "Working with Composition"
        },
        {
          "id": "c1407c0f-e042-4d63-ab87-72e0bae49081",
          "color": "gray",
          "value": "Print Design"
        },
        {
          "id": "60a22807-7e3d-42c8-bb74-c6cba94475a7",
          "color": "green",
          "value": "Studying Abroad"
        },
        {
          "id": "7bccc3c8-cd19-43c1-b155-193b6a2cb2a0",
          "color": "orange",
          "value": "Goal Setting"
        },
        {
          "id": "425e3484-6886-467b-8255-094a1f7dcbbb",
          "color": "red",
          "value": "Consulting OS students"
        },
        {
          "id": "6c1d184b-2372-47f2-88ea-d2c742e75c41",
          "color": "pink",
          "value": "Adobe Illustrator and Photoshop"
        },
        {
          "id": "2764afb5-efc2-49ab-b601-2b302e6e0f6f",
          "color": "gray",
          "value": "Brand Design"
        },
        {
          "id": "759e0e37-361d-4b95-b48a-bb0c00953c49",
          "color": "orange",
          "value": "Screen Design"
        },
        {
          "id": "6d70f1fd-5692-4b7f-a022-fd16e245dca4",
          "color": "green",
          "value": "Image Composition"
        },
        {
          "id": "d295aae5-104e-4844-894f-50a30370adda",
          "color": "orange",
          "value": "Design Psychology"
        },
        {
          "id": "115a9581-e627-44b7-864f-2310092c60d5",
          "color": "purple",
          "value": "Time Management"
        },
        {
          "id": "fbb4bead-011d-4515-812f-8ae14a20109c",
          "color": "pink",
          "value": "Azure"
        },
        {
          "id": "fdac1708-03e4-4f9e-b439-105dc8a0d07e",
          "color": "blue",
          "value": "Business Intelligence & Analytics"
        },
        {
          "id": "b1afef78-3d5b-44d9-9d7f-ac16b3ee2c80",
          "color": "yellow",
          "value": "Venture Development"
        },
        {
          "id": "9e147c78-35d6-4a5e-9442-4a3a17bc350e",
          "color": "green",
          "value": "Project Management"
        },
        {
          "id": "6067c94c-8be1-486e-a389-c5e513f4ffeb",
          "color": "orange",
          "value": "OS_3"
        },
        {
          "id": "5521426c-9288-47d5-8ce6-3bb760e75e13",
          "color": "yellow",
          "value": "Research"
        },
        {
          "id": "50f672b9-f27b-4ec1-aa69-0c5fd107e166",
          "color": "brown",
          "value": "Algorithms"
        },
        {
          "id": "9c48e97a-8281-444b-a933-d184bfda7d8d",
          "color": "gray",
          "value": "Statistics & Probability"
        },
        {
          "id": "76b9c38f-7729-47bd-87a5-b08bbf9c2b4f",
          "color": "green",
          "value": "Computer Vision"
        },
        {
          "id": "52bd250a-2bc2-40b9-9808-ac94d3f5dcf0",
          "color": "purple",
          "value": "Medical Applications of Computer Science"
        },
        {
          "id": "79936941-3465-429d-b929-a31b54add22e",
          "color": "red",
          "value": "Writing Research & Publishing"
        },
        {
          "id": "03da4ab6-f7d5-4588-824d-5a0d7aa76f82",
          "color": "blue",
          "value": "Fuzzy Logic"
        },
        {
          "id": "c53746d8-4b45-4eb3-a213-44c21673a2e6",
          "color": "pink",
          "value": "NLP"
        },
        {
          "id": "230dbde5-981a-4631-b738-0eb3f2756d44",
          "color": "yellow",
          "value": "Animation"
        },
        {
          "id": "d4fb8cb1-7914-4b43-8270-985d8f6e5b1f",
          "color": "purple",
          "value": "Filmmaking"
        },
        {
          "id": "a44f628e-8678-429f-add4-4466aaf1fcce",
          "color": "brown",
          "value": "VFX"
        },
        {
          "id": "b03259b0-b12c-4c19-a276-75f0d131138e",
          "color": "gray",
          "value": "Motion Graphics"
        },
        {
          "id": "c4aeeabd-f889-4217-88f6-e77734a3fc44",
          "color": "purple",
          "value": "Creative Writing"
        },
        {
          "id": "22a11045-8798-41a0-8d71-b86d3f2e2eb0",
          "color": "green",
          "value": "Critical Theory"
        },
        {
          "id": "f6b821a8-cd8f-46fd-b393-55a80689eac1",
          "color": "pink",
          "value": "Video Games"
        },
        {
          "id": "bfa49610-3a80-47a4-85fb-4cf895148280",
          "color": "purple",
          "value": "Gender Theory"
        },
        {
          "id": "7d629489-f693-416b-8529-2fe11a154b5e",
          "color": "orange",
          "value": "Feminism"
        },
        {
          "id": "4b55330e-e0ef-4e01-8e3a-89be64b233d1",
          "color": "red",
          "value": "Ethnography"
        },
        {
          "id": "7f4397de-77d7-470d-a81d-0949ca4e11aa",
          "color": "default",
          "value": "Ruby"
        },
        {
          "id": "eda13b59-5119-4d92-bd2e-424a9963e87a",
          "color": "gray",
          "value": "Django"
        },
        {
          "id": "427a379b-021b-4240-831a-d0727a0c08a2",
          "color": "yellow",
          "value": "Programming Languages:"
        },
        {
          "id": "5202641f-9912-4b1f-a9ac-17b01bb98900",
          "color": "green",
          "value": "Webframeworks:"
        },
        {
          "id": "a36183bb-da19-4bec-b29d-63e8806ea264",
          "color": "yellow",
          "value": "FastAPI"
        },
        {
          "id": "365aeae6-6174-491e-b757-fd837fa42b1b",
          "color": "pink",
          "value": "RubyOnRails"
        },
        {
          "id": "4471e8fc-1ade-41b2-ad88-d1f264675221",
          "color": "blue",
          "value": "Artificial Intelligence:"
        },
        {
          "id": "3e6f8e2f-7cab-4938-bba5-aaedfa9111e4",
          "color": "default",
          "value": "Learning"
        },
        {
          "id": "9b1b32be-e138-4a00-9ef5-4e2b774bc570",
          "color": "purple",
          "value": "Machine Learning:"
        },
        {
          "id": "00924e81-f258-4b41-9d9d-ff957ad32399",
          "color": "red",
          "value": "PyTorch"
        },
        {
          "id": "81c3729f-8c3d-4f1c-b618-0b2f2433bf35",
          "color": "gray",
          "value": "TensorFlow"
        },
        {
          "id": "83a0fbc4-80fd-44da-9d26-ce20b22b1120",
          "color": "blue",
          "value": "Keras API"
        },
        {
          "id": "442aee1b-bc83-43ea-9365-a4b638c4bca7",
          "color": "purple",
          "value": "Data Science:"
        },
        {
          "id": "69ac73b7-610c-4f26-b7a2-593ff4df9b32",
          "color": "green",
          "value": "SciPy"
        },
        {
          "id": "f251de8e-b48d-4cea-8814-d4d3d2322758",
          "color": "green",
          "value": "Pandas"
        },
        {
          "id": "99e9f995-e369-42e7-9063-88927b0d7f5c",
          "color": "orange",
          "value": "NumPy"
        },
        {
          "id": "eef8648d-5e4b-4293-ae4f-632989927139",
          "color": "blue",
          "value": "Matplotlib"
        },
        {
          "id": "c437fa4f-692d-4eb1-a99e-7210394d757c",
          "color": "red",
          "value": "Plotly"
        },
        {
          "id": "b3b31adb-dc37-487f-a6ee-376c3e979b5e",
          "color": "blue",
          "value": "PySpark"
        },
        {
          "id": "4691f398-7940-4868-a04d-e3e7e9011393",
          "color": "gray",
          "value": "Data Platforms:"
        },
        {
          "id": "8ae2cbd8-02b1-4cd2-94ad-62a137843af4",
          "color": "brown",
          "value": "Palantir Foundry"
        },
        {
          "id": "1ea5ce23-78ed-46fa-ac92-bcd354c432e6",
          "color": "yellow",
          "value": "Google Colab"
        },
        {
          "id": "9c070d44-84f3-45c4-94fc-77e3e147eeac",
          "color": "pink",
          "value": "Jupyter Notebook"
        },
        {
          "id": "67b4dd6a-3edf-4022-8d91-1a00477506cc",
          "color": "purple",
          "value": "Markdown"
        },
        {
          "id": "883d1b45-32c2-46fc-beef-83b0dfa46ed8",
          "color": "gray",
          "value": "Latex"
        },
        {
          "id": "5fcaeebb-2577-4529-8a0c-adaf80c4e19e",
          "color": "brown",
          "value": "AR programming with SnapLens"
        },
        {
          "id": "aa9b471e-98e2-4e9b-94c5-3b6f72401352",
          "color": "gray",
          "value": "Databases:"
        },
        {
          "id": "f2623584-5237-4ba9-8dfe-48a545daf750",
          "color": "red",
          "value": "SQLite3"
        },
        {
          "id": "e629b414-dbab-4b64-bec3-308833a80ec1",
          "color": "orange",
          "value": "Maths:"
        },
        {
          "id": "41e53bad-e0f9-4fb6-8adf-ae91f914df63",
          "color": "brown",
          "value": "and"
        },
        {
          "id": "af1f4c15-9015-4f5b-a801-6e1159aa12cd",
          "color": "pink",
          "value": "Product Partnerships"
        },
        {
          "id": "20ae9ec9-2195-4b1d-8414-a68dc2472067",
          "color": "gray",
          "value": "3rd Party Integrations"
        },
        {
          "id": "0384b86c-71ff-469d-af03-53f710358efe",
          "color": "yellow",
          "value": "Continuous Product Discovery"
        },
        {
          "id": "41f349e5-151b-4242-89bc-7dadc08693ba",
          "color": "purple",
          "value": "Product Development in XP"
        },
        {
          "id": "37c1ea68-7f28-463e-bb61-29ffdfe19029",
          "color": "orange",
          "value": "Product Operations"
        },
        {
          "id": "c5201812-f107-49af-8dee-12a7ea68bc43",
          "color": "purple",
          "value": "PaaS Solutions in B2B"
        },
        {
          "id": "f4e4e815-a3e9-4410-87da-cca54ed34dd1",
          "color": "blue",
          "value": "B2B2B market"
        },
        {
          "id": "184f4738-6a86-4282-a535-b891ce3c6db2",
          "color": "pink",
          "value": "Low Code/No Code Solutions"
        },
        {
          "id": "b84d8198-cad6-4eb6-a042-ba32f5e0c2f4",
          "color": "orange",
          "value": "Identity Management"
        },
        {
          "id": "c62ccc87-c034-48b9-9b81-00286d772874",
          "color": "yellow",
          "value": "Empowering Female Leaders in Tech Industry"
        },
        {
          "id": "91746182-bc53-4701-ae24-affa4b76e573",
          "color": "green",
          "value": "SaaS"
        },
        {
          "id": "35b283df-8072-42c8-95fa-a0f89275dc6b",
          "color": "blue",
          "value": "Online Marketing"
        },
        {
          "id": "d0f0a2ef-8d67-47f0-a718-d344f5bda93a",
          "color": "red",
          "value": "How to Build Digital Products"
        },
        {
          "id": "5ee6f34f-59f0-4e9d-a8c9-25f7c7232dcb",
          "color": "yellow",
          "value": "How to Start a Startup"
        },
        {
          "id": "d781fe59-e4f5-4048-b41b-b16880836fc0",
          "color": "gray",
          "value": "How to Get Angel/VC Funding"
        },
        {
          "id": "3012a050-be54-4922-9283-ee90d6e3ca2c",
          "color": "brown",
          "value": "Network with CODE Alumni"
        },
        {
          "id": "7f6e2056-2cda-48ce-b40b-a16745133996",
          "color": "pink",
          "value": "Intros to Startups"
        },
        {
          "id": "188594d4-30d7-4efa-825e-e569b709720b",
          "color": "brown",
          "value": "Discovery"
        },
        {
          "id": "beddf2dc-2e39-4371-8a27-7d8fd67c5b1a",
          "color": "blue",
          "value": "Delivery"
        },
        {
          "id": "824ee73b-3693-4011-bc22-976961d8475d",
          "color": "gray",
          "value": "Product-Market-Fit"
        },
        {
          "id": "ea20d472-96a6-4b49-aa42-0642323d05c7",
          "color": "red",
          "value": "Product Leadership"
        },
        {
          "id": "a58d9d65-1c07-4328-8952-90bc1ec833b3",
          "color": "purple",
          "value": "Agile Methodologies"
        },
        {
          "id": "0da98926-24ec-43a3-91b9-6848aa3f20d9",
          "color": "orange",
          "value": "Hiring and Scaling"
        },
        {
          "id": "1f2802a0-0820-4dd3-91d0-44e2e5fd89b8",
          "color": "blue",
          "value": "Project Consultancy"
        },
        {
          "id": "b8ea2acd-8a2c-4487-8172-853978215e31",
          "color": "gray",
          "value": "Product Career"
        },
        {
          "id": "f6afdfb3-3807-4b9a-abf4-c5c2528a4ff6",
          "color": "yellow",
          "value": "Product Management in Corporates"
        },
        {
          "id": "3a9ac190-7c59-4e56-84a0-a3298ada1c37",
          "color": "pink",
          "value": "Special Topic: Improv Theater Skills for Business"
        },
        {
          "id": "29c7aef3-8efc-426a-8ad1-c3bf8f011cba",
          "color": "blue",
          "value": "Student Administration"
        },
        {
          "id": "0443f8e4-8cbb-4f72-9426-9d8d15a4a097",
          "color": "purple",
          "value": "Health Insurance"
        },
        {
          "id": "a599c966-edc3-445f-9605-96d2248f9ed2",
          "color": "pink",
          "value": "Vias Application/Extension"
        },
        {
          "id": "2e779a76-9a08-4c78-b47e-c3e3413883e3",
          "color": "yellow",
          "value": "Student ID/Semester Ticket"
        },
        {
          "id": "f23bd9d0-27b5-42e6-996e-ef908ea0c45c",
          "color": "green",
          "value": "De-Enrollment/Exmatriculation"
        },
        {
          "id": "779201fe-85d5-4f55-a5e7-0a8db7d3a60b",
          "color": "orange",
          "value": "Berliner Startup Stipendium"
        },
        {
          "id": "cb8a0cab-d715-421f-b2cc-a9ebdac28d52",
          "color": "red",
          "value": "Grants"
        },
        {
          "id": "7bc88f51-0498-4847-a748-e2c489efc37d",
          "color": "purple",
          "value": "Grant Applications"
        },
        {
          "id": "d448fc22-6fd7-4c50-b276-cd95660bae04",
          "color": "yellow",
          "value": "Building Teams"
        },
        {
          "id": "15867035-7fe6-4cbc-9944-d62ea341d7f2",
          "color": "brown",
          "value": "EdTech"
        },
        {
          "id": "cb91951b-dcbc-4e60-a90d-d41ea2d7eaa3",
          "color": "gray",
          "value": "Strategy"
        },
        {
          "id": "8a74f3a5-9804-476f-9cd1-71834523b61d",
          "color": "purple",
          "value": "Operational Strategy"
        },
        {
          "id": "b92c7b0f-2b02-4963-8488-dc79a017a941",
          "color": "orange",
          "value": "Fundraising"
        },
        {
          "id": "d9690f30-4e8a-4d03-98c0-b3365646ac26",
          "color": "red",
          "value": "Digital Marketing"
        },
        {
          "id": "88bc910d-3165-41ff-b634-26b4f7e15beb",
          "color": "orange",
          "value": "Company Culture"
        },
        {
          "id": "94ea6a65-8873-4df8-b8a2-a87f7009f39d",
          "color": "blue",
          "value": "Diversity Inclusion"
        },
        {
          "id": "31356137-fa2a-4f16-a0ec-f2a336d8c683",
          "color": "blue",
          "value": "Career Advice"
        },
        {
          "id": "1b372688-61f5-4397-b4dc-bf2da488cab8",
          "color": "green",
          "value": "Emerging Technology"
        },
        {
          "id": "15d970b7-c612-4e9e-8520-fdab5f31523b",
          "color": "pink",
          "value": "Web Technologies inc. HTML & JS"
        },
        {
          "id": "36a1b96b-67f9-48be-9172-f6789151c4d8",
          "color": "blue",
          "value": "Marketing"
        },
        {
          "id": "195b1172-820e-41df-b4ec-ae0f97c07322",
          "color": "blue",
          "value": "User Interviews"
        },
        {
          "id": "8cd1fb11-117b-4dca-aa6e-6d2647a3be96",
          "color": "green",
          "value": "User Research"
        },
        {
          "id": "a1eea4ef-1c83-4039-9cde-bb813dd42820",
          "color": "gray",
          "value": "Wireframing & Prototyping"
        },
        {
          "id": "6f6a2a9c-fd95-40e1-a60b-695ace9c4d72",
          "color": "purple",
          "value": "UI Design"
        },
        {
          "id": "5162c84b-014c-4870-95d8-106eb1980a63",
          "color": "yellow",
          "value": "Data Analytics"
        },
        {
          "id": "c5b8d317-f97e-457f-958a-562f804fc969",
          "color": "blue",
          "value": "Electronics"
        },
        {
          "id": "a274d90e-5860-4530-91c8-8ac0010f1744",
          "color": "purple",
          "value": "Embedded Development"
        },
        {
          "id": "92a060fe-4725-45d9-bc92-c8a34bea7585",
          "color": "orange",
          "value": "Fabrication"
        },
        {
          "id": "d823a2b5-96a8-4c13-8636-0b5f931423ab",
          "color": "blue",
          "value": "Materials Science"
        },
        {
          "id": "53cbc3ae-2633-4ca6-985d-7b917c85c0a3",
          "color": "pink",
          "value": "Bartending Robots"
        },
        {
          "id": "9c04d62a-07f7-434f-8da6-c4e49f96c475",
          "color": "yellow",
          "value": "Java"
        },
        {
          "id": "3fd00d68-ad05-474f-b44f-219a38f6ed45",
          "color": "orange",
          "value": "Kotlin"
        },
        {
          "id": "7a4e228c-d1dc-4318-b42f-743bbfd3cbc8",
          "color": "gray",
          "value": "XML"
        },
        {
          "id": "e47f08b8-3e21-43f1-a36e-20e9a2204124",
          "color": "pink",
          "value": "Android App Development"
        },
        {
          "id": "0428824b-c48a-41d0-8a81-4ec10603c8c9",
          "color": "blue",
          "value": "Android Studio"
        },
        {
          "id": "9d98ae1b-1aa6-44ac-99cd-99b556f8faf1",
          "color": "default",
          "value": "VueJS"
        },
        {
          "id": "dbf35b14-43cd-44de-bf4a-4371f4c493a2",
          "color": "red",
          "value": "Exploratory testing"
        },
        {
          "id": "65175f0c-71c1-4831-8c0b-e802b91ab5a0",
          "color": "pink",
          "value": "Test Automation"
        },
        {
          "id": "1301271c-453b-4eb6-ad1a-b2db764f922b",
          "color": "gray",
          "value": "Selenium"
        },
        {
          "id": "62703f1b-c3c7-4d84-b0f0-74e0745f14b2",
          "color": "orange",
          "value": "Appium"
        },
        {
          "id": "54800f82-b2ee-46cd-895b-fb56f4b70a90",
          "color": "purple",
          "value": "Espresso"
        },
        {
          "id": "a2257a37-690a-4b59-9b11-047ef2c60b48",
          "color": "red",
          "value": "Puppeteer"
        },
        {
          "id": "98a5e8b9-614e-48dc-953f-eac30dd47c06",
          "color": "green",
          "value": "Architecture"
        },
        {
          "id": "781f48e9-d00b-45a2-870a-691789e8af18",
          "color": "yellow",
          "value": "CI/CD"
        },
        {
          "id": "cb5120f3-7e9e-403c-a6f8-156121b0d2e3",
          "color": "brown",
          "value": "GitHub"
        },
        {
          "id": "0772381f-54cb-4ba5-805b-ffb948376b24",
          "color": "brown",
          "value": "Public Speaking"
        },
        {
          "id": "69dfdb13-5a2c-4ccc-a761-7085ecc54775",
          "color": "blue",
          "value": "Academic English"
        },
        {
          "id": "69177e16-81ce-46e3-806e-6b403405bb4f",
          "color": "green",
          "value": "Business English"
        },
        {
          "id": "ac343355-1ed3-40fa-912b-7f73650c52d7",
          "color": "green",
          "value": "Docker"
        },
        {
          "id": "b94c1b49-7578-4a12-9e8a-04c5e7da09ac",
          "color": "gray",
          "value": "Automated Tests"
        }
      ]
    },
    "iLtA": {
      "name": "Related to Committee db (Members (linked))",
      "type": "relation",
      "property": "hLRV",
      "collection_id": "2c1e7fd1-2aae-4b4a-8d3d-6e56a0a8359d",
      "collection_pointer": {
        "id": "2c1e7fd1-2aae-4b4a-8d3d-6e56a0a8359d",
        "table": "collection",
        "spaceId": "7cf1b6cc-df88-4bf5-afc7-bf5416fda723"
      }
    },
    "kQC:": {
      "name": "Faculty: Modules from Study Program",
      "type": "rollup",
      "aggregation": "show_unique",
      "target_property": "HC}D",
      "relation_property": ";Uxi",
      "target_property_type": "relation"
    },
    "l{uj": {
      "name": "Related to Copy of Modules db (Module coordinator (linked))",
      "type": "relation",
      "property": "Nsa`",
      "collection_id": "d1f4b4d9-56a1-4d96-92d8-6b5275431a55",
      "collection_pointer": {
        "id": "d1f4b4d9-56a1-4d96-92d8-6b5275431a55",
        "table": "collection",
        "spaceId": "7cf1b6cc-df88-4bf5-afc7-bf5416fda723"
      }
    },
    "nN>c": {
      "name": "Status",
      "type": "relation",
      "property": "e~{P",
      "collection_id": "c3d2793a-9b77-4850-9470-7b8d1458f330",
      "collection_pointer": {
        "id": "c3d2793a-9b77-4850-9470-7b8d1458f330",
        "table": "collection",
        "spaceId": "7cf1b6cc-df88-4bf5-afc7-bf5416fda723"
      }
    },
    "oC;^": {
      "name": "Related to SE Module Support (🙂 Faculty support) 2",
      "type": "relation",
      "property": "aIP[",
      "collection_id": "c45432f2-a82e-49ce-b520-834ecf6dbd53",
      "collection_pointer": {
        "id": "c45432f2-a82e-49ce-b520-834ecf6dbd53",
        "table": "collection",
        "spaceId": "7cf1b6cc-df88-4bf5-afc7-bf5416fda723"
      }
    },
    "pS>t": {
      "name": "Committee Member",
      "type": "relation",
      "property": "hLRV",
      "collection_id": "76ca8337-7b98-4578-961c-5acf84dcd730",
      "collection_pointer": {
        "id": "76ca8337-7b98-4578-961c-5acf84dcd730",
        "table": "collection",
        "spaceId": "7cf1b6cc-df88-4bf5-afc7-bf5416fda723"
      }
    },
    "pSfF": {
      "name": "Faculty: No of Modules",
      "type": "rollup",
      "aggregation": "unique",
      "target_property": "title",
      "relation_property": ";Uxi",
      "target_property_type": "title"
    },
    "sz+N": {
      "name": "Department",
      "type": "rollup",
      "aggregation": "show_unique",
      "target_property": "^Pd{",
      "relation_property": "`!ml",
      "target_property_type": "relation"
    },
    "uOP7": {
      "name": "Personal Mentees",
      "type": "relation",
      "property": "Jr#p",
      "collection_id": "bd020859-4b9b-4751-ac09-fedaa225bf67",
      "collection_pointer": {
        "id": "bd020859-4b9b-4751-ac09-fedaa225bf67",
        "table": "collection",
        "spaceId": "7cf1b6cc-df88-4bf5-afc7-bf5416fda723"
      }
    },
    "vo;P": {
      "name": "Faculty: ID Academic Events ",
      "type": "relation",
      "property": "hu^N",
      "collection_id": "c9acdf39-c137-447f-ba02-bc3747556946",
      "collection_pointer": {
        "id": "c9acdf39-c137-447f-ba02-bc3747556946",
        "table": "collection",
        "spaceId": "7cf1b6cc-df88-4bf5-afc7-bf5416fda723"
      }
    },
    "zdgN": {
      "name": "Phone",
      "type": "phone_number"
    },
    "|#q=": {
      "name": "Study program",
      "type": "relation",
      "property": "R&u&",
      "collection_id": "06cfcf21-b238-4214-9fca-f8303f06c468",
      "collection_pointer": {
        "id": "06cfcf21-b238-4214-9fca-f8303f06c468",
        "table": "collection",
        "spaceId": "7cf1b6cc-df88-4bf5-afc7-bf5416fda723"
      }
    },
    "|<bZ": {
      "name": "on Slack",
      "type": "url"
    },
    "title": {
      "name": "Name",
      "type": "title"
    }
  }

const targetKeys = [
    "Pronouns",
    "Email",
    "Phone",
    "on Slack",
    "on the Learning Platform",
    "Group",
    "Stage ",
    "Status",
    "Roles",
    "Labels",
    "Study program",
    "Committee Representative",
    "Committee: Chair ",
    "Buddy",
    "Buddies",
    "Personal Mentor",
    "Surname",
    "Preferred name",
    "LinkedIn",
    "Committee Member",
    "No of buddies",
    "Personal Mentees",
    "No of mentees",
    "Department",
    "Team Lead",
    "Team",
    "Title",
    "Working Hours",
    "Starting Date at CODE",
    "Office Hours",
    "Skills",
    "Module Co-ordinator for:",
    "Faculty: No of Modules",
    "Faculty: Modules from Study Program",
    "Faculty: Potential Project Sponsor",
    "Faculty: SS2022 Fair Availability (Slot 1)",
    "Faculty: SS2022 Fair Availability (Slot 2)",
    "Faculty: ID Academic Events ",
    "Partner: Company",
    "Active student?",

    "Related to Module List", 
    "Related to SE Module Support", 
    "Related to Copy of Modules db", 
    "Related to Copy of Modules db", 
    "Related to SE Academic Events", 
    "Related to SE Academic Events", 
    "Related to SE Module Support", 
    "Related to SE Module Support", 
    "Related to SE Module Support", 
    "Related to Committee db", 
    "Related to Copy of Modules db"
]



const allKeys = [
    "Working Hours",
    "Committee Representative",
    "Roles",
    "AZow",
    "AkTo",
    "Buddies",
    "on the Learning Platform",
    "Personal Mentor",
    "Email",
    "Labels",
    "OGqx",
    "Surname",
    "V\\l=",
    "bgUF",
    "cjrM",
    "kbDn",
    "lA{=",
    "Status",
    "Committee Member",
    "z^TR",
    "Phone",
    "{CJO",
    "Study program",
    "on Slack",
    "}=wu",
    "Name",
    "Buddy",
    "Skills",
    "i_OZ",
    "Preferred name",
    "lgdx",
    "\"(jj",
    "Pronouns",
    "Starting Date at CODE",
    "Module Co-ordinator for:",
    "<ZJ:",
    "Related to Copy of Modules db (Module coordinator (linked)) 2",
    "BrHa",
    "D8oK",
    "EhLR",
    "EmJD",
    "Faculty: Potential Project Sponsor",
    "Faculty: SS2022 Fair Availability (Slot 1)",
    "HdB$",
    "Office Hours",
    "M}#`",
    "Related to SE Academic Events (Fall 2021) (Host) 3",
    "Related to SE Module Support (🙂 Faculty support)",
    "Related to SE Module Support (🙂 Faculty support) 3",
    "Qfc:",
    "Related to SE Module Support (🙂 Faculty support) 1",
    "Related to Copy of Modules db (Module coordinator (linked)) 1",
    "VqAo",
    "WGpP",
    "Title",
    "[?cj",
    "]|Pu",
    "Team",
    "Related to Module List (Module coordinator (linked)) 1",
    "Related to SE Academic Events (Fall 2021) (Host) 1",
    "dL{p",
    "eu[n",
    "i:?@",
    "Related to Committee db (Members (linked))",
    "iZmQ",
    "Related to Copy of Modules db (Module coordinator (linked))",
    "Related to SE Module Support (🙂 Faculty support) 2",
    "Personal Mentees",
    "vdOW",
    "w6.}",
    "x0/Q",
    "|MpF",
    "~|ql",
    ";~Eu",
    "<zPV",
    "S<TT",
    "Z[DB",
    "^~dx",
    "y{bU",
    "=@?_",
    "@@rq",
    "7bQ7",
    "QBIy",
    "XeOn",
    "Faculty: SS2022 Fair Availability (Slot 2)",
    "LinkedIn",
    "Faculty: ID Academic Events ",
    ":SO_",
    "|eFR",
    "OzgZ",
    "]^jL",
    "OrB^",
    "Team Lead",
    "YOm|",
    "JKbR",
    "A^]q",
    "Committee: Chair ",
    "llFa",
    "i=\\O",
    "w\\Pc",
    "jYd^",
    "mYp@"
]
const parsedKeys = [
    "Working Hours",
    "Committee Representative",
    "Roles",
    "Buddies",
    "on the Learning Platform",
    "Personal Mentor",
    "Email",
    "Labels",
    "Surname",
    "Status",
    "Committee Member",
    "Phone",
    "Study program",
    "on Slack",
    "Name",
    "Buddy",
    "Skills",
    "Preferred name",
    "Pronouns",
    "Starting Date at CODE",
    "Module Co-ordinator for:",
    "Related to Copy of Modules db (Module coordinator (linked)) 2",
    "Faculty: Potential Project Sponsor",
    "Faculty: SS2022 Fair Availability (Slot 1)",
    "Office Hours",
    "Related to SE Academic Events (Fall 2021) (Host) 3",
    "Related to SE Module Support (🙂 Faculty support)",
    "Related to SE Module Support (🙂 Faculty support) 3",
    "Related to SE Module Support (🙂 Faculty support) 1",
    "Related to Copy of Modules db (Module coordinator (linked)) 1",
    "Title",
    "Team",
    "Related to Module List (Module coordinator (linked)) 1",
    "Related to SE Academic Events (Fall 2021) (Host) 1",
    "Related to Committee db (Members (linked))",
    "Related to Copy of Modules db (Module coordinator (linked))",
    "Related to SE Module Support (🙂 Faculty support) 2",
    "Personal Mentees",
    "Faculty: SS2022 Fair Availability (Slot 2)",
    "LinkedIn",
    "Faculty: ID Academic Events ",
    "Team Lead",
    "Committee: Chair "
]

const missingKeys = [
    "Group",
    "No of buddies",
    "No of mentees",
    "Department",
    "Faculty: Modules from Study Program",
    "Faculty: SS2022 Availability (Slot 1)",
    "Faculty: SS2022 Availability (Slot 2)",
    "Faculty: ID Academic Evens",
    "Partner: Company",
    "Active student?"
  ]

const unparsedKeys = allKeys.filter(i => !parsedKeys.includes(i))

console.log("no. keys:", allKeys.length)
console.log("no. parsed keys:", parsedKeys.length)
console.log("no. unparsed keys:", unparsedKeys.length)
console.log("no. of missing keys:", missingKeys.length)

console.log("actual missing keys:", targetKeys.filter(i => !(allKeys.includes(i))))


// console.log(Object.values(schema).map(i => i.name))
