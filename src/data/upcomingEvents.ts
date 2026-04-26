import type { PastEvent, Speaker } from "./pastEvents";

const speakerProfiles: Record<string, Speaker> = {
  "Dr. Sylvia Checkley": {
    name: "Dr. Sylvia Checkley",
    role: "Future of Antibiotics & Antimicrobial Resistance",
    bio: ""
  },
  "Dr. Kaylee Byers": {
    name: "Dr. Kaylee Byers",
    role: "One Health Panelist",
    bio: `Dr. Kaylee Byers is an Assistant Professor in the School of Population and Public Health at the University of British Columbia, a Senior Scientist with the Pacific Institute on Pathogens, Pandemics and Society, and the Deputy Director of the British Columbia node of the Canadian Wildlife Health Cooperative. Prior to joining UBC she was an Assistant Professor in the Faculty of Health Sciences at Simon Fraser University. Dr. Byers is a settler scholar of European ancestry, with roots in both Canada’s Maritime (Nova Scotia) and prairie provinces (Alberta). 
Dr. Byers is an interdisciplinary scholar with over a decade of experience working in the field of One Health, which recognizes the interconnected health of people, animals, and the environment. As the lead of the OH-HI (One Health, Human dimensions and Implementation) Science CoLab, her team works across disciplines to explore health systems, with a focus on understanding how perceptions shape actions as well as strengthening processes to mobilize knowledge. Her team works on issues such as chronic wasting disease in deer, avian influenza, rodent management, and health communications. Outside of research, she is an active and enthusiastic science communicator. She co-founded, organizes and hosts Nerd Nite Vancouver, a science seminar series which aims to share science in a casual setting. She is also the host of Genome British Columbia’s award-winning podcast “Nice Genes” which explores the role of genomics in society.
Dr. Byers is also currently the team lead of the CoLab Team 
OHHI Science CoLab.`
  },
  "Kasey Pedersen": {
    name: "Kasey Pedersen",
    role: "Wildlife Health & Wilde Tracks Missions",
    bio: `Kasey Pedersen is the Director of Veterinary Programs at Wilde Tracks. Her background is in captive animal care. She holds a Bachelor of Wildlife Science and Vet Assistant Diploma, and has continued undertaking a variety of wildlife and veterinary courses and internships.

Kasey joined Wilde Tracks after witnessing the conservation mission first hand, and loving the refreshing intention and honesty of the work – Wilde Tracks is here to help animals by all means possible!

Kasey’s mission in conservation is to create exciting veterinary programs that not only inspire and empower up-and-coming vets and conservationists, but also spark new opportunities and growth for those already making a difference in the field!`
  },
  "Dr. Juan Sebastian Orjuela": {
    name: "Dr. Juan Sebastian Orjuela",
    role: "One Health Panel Moderator",
    bio: `Dr. Juan Sebastian Orjuela (@juancho.dvm) is a Latino emergency veterinarian, educator, and co-founder of the Latinx Veterinary Medical Association. Practicing across North America, he blends ER storytelling with advocacy to promote diversity and expand veterinary access for underserved communities. An aspiring practice owner with a passion for exotic medicine, Dr. Juancho is dedicated to mentoring the next generation and making animal care more inclusive for everyone.`
  },
  "Dr. Bernadette Abela-Ridder": {
    name: "Dr. Bernadette Abela-Ridder",
    role: "One Health Panelist",
    bio: `Dr. Bernadette Abela is a global health expert working at the intersection of human, animal and environmental health. She serves at the World Health Organization (WHO) in the Department of Malaria and Neglected Tropical Diseases, where she leads zoonotic disease prevention and is the global lead for rabies. Trained in veterinary science and public health, she has advanced antimicrobial resistance strategies at WHO and with the U.S. Food and Drug Administration. Her research with IRD in Cameroon on simian immunodeficiency viruses informed understanding of viral spillover. She has also worked with FAO and in clinical veterinary practice.`
  },
  "Janine Mitchell": {
    name: "Janine Mitchell",
    role: "Community-Based Veterinary Care",
    bio: `Janine Mitchell is a global health and One Health leader with more than 20 years of
experience across Africa, Asia, and Latin America. She currently serves as Executive
Director of Veterinarians Without Borders North America, where she leads the
organization’s strategic direction across animal health, livelihoods, and community
based One Health programming.
An epidemiologist by training, Janine has worked in more than 30 countries and brings
deep expertise in health security, zoonotic disease, antimicrobial resistance,
surveillance, outbreak response, and system strengthening. Her experience spans
emergency response, development programming, and technical leadership in
partnership with governments, donors, regional institutions, and local organizations.
Before joining Veterinarians Without Borders, Janine held senior technical and
leadership roles with organizations including DAI, Mott MacDonald, and Canada’s
International Development Research Centre. She notably led early One Health
antimicrobial resistance efforts under the UK funded Fleming Fund in West Africa and
supported USAID funded regional One Health and health security initiatives in
Southeast Asia through ASEAN.
Janine also serves as an Extraordinary Lecturer at the University of Pretoria’s School of
Health Systems and Public Health, where she contributes to teaching in global health
diplomacy. She holds an MSc in Epidemiology from the University of Pretoria.`
  },
  "Dr. Melanie Moore": {
    name: "Dr. Melanie Moore",
    role: "Spectrum of Care in Veterinary Medicine",
    bio: `A Cayman Islands native with a global footprint, Dr. Melanie Moore is a veterinarian, nonprofit founder, and one of the distinctive voices shaping what modern veterinary medicine can look like. She earned her BSc in Animal Science from Aberystwyth University in Wales (2016) and her DVM from the Ontario Veterinary College (2021).
Her work is rooted in a simple but often overlooked idea: veterinary care only works when people can actually access it. That belief has taken Dr. Moore from remote communities in Nepal, Thailand, Poland, and Samoa to a small animal practice in Ontario, where she works alongside shelters and local organizations to expand access to care and support pet owners.
Dr. Moore is the founder of the Canadian VIBE Network, a nonprofit advancing Black veterinary professionals in Canada, and the creator of My Vet Friend, a Substack publication that turns exam room conversations into clear, accessible veterinary guidance for pet owners. Whether in a clinic, a rural outreach setting, or standing in front of an audience, Dr. Moore’s work circles back to the same conviction: cultural competency, accessible care, and meaningful mentorship are not “extras” in veterinary medicine. They are the foundation of what good care actually looks like.`
  },
  "Dr. Cate Dewey": {
    name: "Dr. Cate Dewey",
    role: "Opening Speaker",
    bio: `Dr. Cate Dewey, DVM, MSc, PhD is an Assistant Dean, and Professor of epidemiology and swine health
management in the Department of Population Medicine, Ontario Veterinary College. She graduated
from OVC, and worked in private veterinary practice for many years before completing a MSc and PhD.
As the inaugural Director of the One Health Institute, she led the development of the Mobilizing One
Health micro-credential and contributed to the undergraduate Bachelor of One Health degree. Her
research focuses on preventing zoonotic disease in vulnerable populations and is currently focused in
Rwanda.`
  },
  "Tijana Selak": {
    name: "Tijana Selak",
    role: "Animal Rights & Welfare",
    bio: `Tijana Selak (MSc., P.Biol.) is a biologist, science communicator, and the Wildlife Campaigns & Advocacy Manager at The Fur-Bearers, an animal protection organization involved in conservation, research, advocacy, and education. She holds a BSc in Zoology from the University of Calgary and a MSc in Environmental Practice from Royal Roads University, and is a Registered Professional Biologist in Alberta, specializing in urban wildlife. Her undergraduate research examined the effects of urbanization on wildlife, a focus she later extended in her graduate work by exploring how environmental communication can foster more positive public attitudes toward urban animals. With over a decade of experience in the conservation sector - including as a wildlife rehabber, environmental consultant, wildlife educator, and more - her work bridges science, storytelling, and advocacy to promote compassionate conservation and coexistence with wildlife.`
  },
  "Ivana Blagojevic": {
    name: "Ivana Blagojevic",
    role: "Surveillance & Prevention of Zoonotic Diseases",
    bio: `Ivana is an epidemiologist in the second year of her PhD within the department of Population Medicine at the Ontario Veterinary College. She is a mixed-methods researcher focused on investigating and understanding uptake of various tick bite and tick-borne disease prevention measures by dog and cat caregivers. She approaches her research with a One Health lens, tying together the human-animal bond, preventive health decision making frameworks, zoonotic disease, and environmental drivers of tick-borne disease. Prior to her PhD, she completed an undergraduate and master’s degree at the University of Guelph where she conducted surveillance of an emerging zoonotic canine fecal parasite in southern Ontario. Ivana serves as Co-President for the One Health Student Committee at the University of Guelph and is a member of a national, interdisciplinary, One Health research training group called Canopy. Outside of research, she enjoys spending time outdoors, crocheting, reading, and playing pickleball.`
  },
  "Alison Cuffley": {
    name: "Alison Cuffley",
    role: "Animal Rights and Welfare",
    bio: `Alison Cuffley (They/Them)
Senior Manager, Canada Programs - the Jane Goodall Institute of Canada 

Alison has over a decade of experience working with SPCAs and Humane Societies across Canada, with a strong focus on equity, decolonization, and One Health approaches in partnership with Indigenous communities. As Senior Manager, Canada Programs with the Jane Goodall Institute of Canada they oversee the Canadian Programs portfolio, including Roots & Shoots, advancing the JGIC’s Hope to Action strategy by supporting youth, especially those from underserved communities, to lead community-based conservation grounded in reciprocal, respectful relationships and connected to the Institute’s global network. Alison is passionate about this work because it centres relationships first, uplifts Indigenous-led land care, and affirms the interconnectedness of all living beings within the Tapestry of Life. Outside of work, Alison enjoys exploring their neighbourhood on foot or two wheels, meeting cats, and trying new coffee spots — especially when baked goods are involved.`
  },
  "Dr. Alanna Backx": {
    name: "Dr. Alanna Backx",
    role: "Laboratory Animal Medicine as One Health in Action",
    bio: `Dr. Alanna Backx received a MSc degree in Biology in 2011 from Western University, in London, Ontario, and a DVM degree from the Ontario Veterinary College in 2017. After spending four years in general practice treating companion animals in Toronto and New York City, she completed a residency at MIT’s Division of Comparative Medicine in 2024. She is a boarded laboratory animal medicine specialist by the American College of Laboratory Animal Medicine and in April she became the Director, Head of Animal Science and Technologies at Fusion Pharmaceuticals, which is part of the AstraZeneca portfolio.`
  },
  "Dr. Alexandra Whittaker": {
    name: "Dr. Alexandra Whittaker",
    role: "Laboratory Animal Medicine as One Health in Action",
    bio: `Dr Alexandra (Alex) Whittaker is a laboratory animal veterinarian with over twenty years’ experience spanning laboratory animal medicine, animal welfare science and law. Her work focuses on the care and ethical oversight of animals used in research, and on ensuring that animal welfare evidence is rigorously generated, synthesised and applied within regulatory frameworks governing animal research. She currently works as an animal welfare researcher and teacher in animal welfare and law at Adelaide University. Alex has extensive experience working with research facilities and animal ethics committees, and her research addresses evidence‑based decision‑making and science‑to‑policy translation to improve transparency, consistency and defensibility in animal research regulation and practice.`
  },
  "Dr. Marie Holowaychuk": {
    name: "Dr. Marie Holowaychuk",
    role: "Mental Health",
    bio: `Dr. Marie Holowaychuk, DVM, Dipl. ACVECC, is a veterinarian and board-certified emergency and critical care specialist dedicated to promoting mental health and wellbeing in the veterinary profession. With over 20 years of practice experience, she founded Reviving Veterinary Medicine to address burnout and wellness through evidence-based resources and programs like From Burnout to Balance and From Toxic to Terrific. A certified coach, yoga teacher, and dynamic speaker, Marie delivers workshops and keynotes globally. She is the author of A Compassionate Calling: What It Really Means to Be a Veterinarian and hosts the Reviving Vet Med Podcast, all aimed at fostering sustainable veterinary careers.`
  },
  "Dr. Keith Warriner": {
    name: "Dr. Keith Warriner",
    role: "Food Safety & Sustainable Food Systems",
    bio: `Dr. Warriner is currently a Professor within the Department of Food Science at University of Guelph,
Canada. Dr. Warriner received his BSc in Food Science from the University of Nottingham, UK and PhD in
Microbial Physiology from the University College of Wales Aberystwyth, UK. He later went on to work at
within the University of Manchester before returning to the University of Nottingham. He joined the
Faculty of the University of Guelph in 2002. During the last twenty-two years in the field of microbiology
and food safety research, Dr. Warriner has published more than 200 papers, book chapters, patents, and
conference abstracts. Noteworthy contributions have been risk assessment and risk management of
fresh fruit &amp; vegetables. His research team were amongst the first to identify the internalization of
pathogens within growing plants and adaptability of certain Salmonella on tomatoes. More recently, his
research team completed a risk assessment of food safety in indoor farming operations with a report
being submitted to the Food and Agriculture Organization of the United Nations. Innovations have
included the development of a sanitizer for seed disinfection along with technologies based on hydroxyl-
radical process. As the result of the groups research effort the hydroxyl-radical process was
commercialized and found utility in decontaminating fresh produce, low moisture foods, eggs and
poultry meat. Dr Warriner was awarded the University of Guelph, Innovation of the Year award in 2022
and the IAFP Ewan Todd award for innovations in food safety for 2023. He is Editor-in-Chief of Food
Microbiology, Associate Editor of the Canadian Journal of Microbiology.`
  }
};

export const upcomingEvents: PastEvent[] = [
  {
    id: "symposium-2025-2026",
    season: "2025 - 2026",
    title: "One Health in Action: Bridging Animal, Human, and Environmental Health",
    dateRange: "May 1 - May 3, 2026",
    description:
      "Registration is now live for the 2025-2026 CPVMA/ACPMV Symposium. Explore the agenda, save the date, and join us from May 1 through May 3, 2026.",
    highlights: [],
    days: [
      {
        id: "may-1-2026",
        label: "Day 1",
        date: "Friday, May 1, 2026",
        theme: "",
        speakers: [
          speakerProfiles["Dr. Cate Dewey"],
          speakerProfiles["Dr. Marie Holowaychuk"],
          speakerProfiles["Ivana Blagojevic"],
          speakerProfiles["Tijana Selak"]
        ]
      },
      {
        id: "may-2-2026",
        label: "Day 2",
        date: "Saturday, May 2, 2026",
        theme: "",
        speakers: [
          speakerProfiles["Dr. Keith Warriner"],
          speakerProfiles["Dr. Melanie Moore"],
          speakerProfiles["Dr. Sylvia Checkley"],
          speakerProfiles["Alison Cuffley"],
          speakerProfiles["Janine Mitchell"]
        ]
      },
      {
        id: "may-3-2026",
        label: "Day 3",
        date: "Sunday, May 3, 2026",
        theme: "",
        speakers: [
          speakerProfiles["Dr. Juan Sebastian Orjuela"],
          speakerProfiles["Dr. Bernadette Abela-Ridder"],
          speakerProfiles["Dr. Kaylee Byers"],
          speakerProfiles["Kasey Pedersen"],
          speakerProfiles["Dr. Alanna Backx"],
          speakerProfiles["Dr. Alexandra Whittaker"]
        ]
      }
    ]
  }
];
