export type Speaker = {
  name: string;
  role: string;
  bio: string;
};

export type EventDay = {
  id: string;
  label: string;
  date: string;
  theme: string;
  speakers: Speaker[];
};

export type EventSchedule = {
  days: string[];
  rows: { time: string; entries: string[] }[];
};

export type PastEvent = {
  id: string;
  season: string;
  title: string;
  dateRange: string;
  topic?: string;
  description: string;
  highlights: string[];
  days: EventDay[];
  schedule?: EventSchedule;
  schedulePdf?: string;
};

export const pastEvents: PastEvent[] = [
  {
    id: "symposium-2024-2025",
    season: "2024 - 2025",
    title: "Sustainability in Veterinary Medicine",
    dateRange: "Date: May 2 - 4, 2025",
    topic: "Sustainability in Veterinary Medicine",
    description:
      "Our Guest Speakers 2025 bring together clinicians, researchers, and advocates who are shaping veterinary medicine today. Register for the symposium at cpvma.ca/register to join every live session.",
    highlights: [
      "Day 1: Friday, May 2",
      "Day 2: Saturday, May 3",
      "Day 3: Sunday, May 4"
    ],
    days: [
      {
        id: "may-2-2025",
        label: "",
        date: "Friday, May 2, 2025",
        theme: "",
        speakers: [
          {
            name: "Dr. Crystal Lee",
            role: "Opening Speaker",
            bio: `Dr. Crystal Lee is a partner in Burwash Equine Services near Calgary, Alberta. She is the sole surgeon at Burwash Equine, and she also enjoys the variety of performance horse care, general practice, and emergency medicine. She graduated from the Western College of Veterinary Medicine in 2009, and completed an internship at the University of Missouri in 2010 and a residency in equine surgery at Oklahoma State University in 2013 before starting practice at Burwash Equine. She became a Diplomate of the American College of Veterinary Surgeons in 2015. She served on the Sustainability Task Force of the American Association of Equine Practitioners from 2022 – 2024, and is currently serving on the Student Education and Outreach Committee of the AAEP.`
          },
          {
            name: "Dr. Juan Sebastian Orjuela",
            role: "Panel Moderator",
            bio: `Dr. Juan Sebastian Orjuela, otherwise known as “Juancho” is a 2022 graduate of the Ontario Veterinary College and co-founder of the Latinx Veterinary Medical Association (LVMA). A passionate advocate for diversity, equity, and inclusion in veterinary medicine, Juancho brings a global perspective shaped by his upbringing in Colombia and the U.S., and his academic training in biology and environmental conservation. Currently practicing emergency medicine in London, Ontario, his clinical interests include ER, soft tissue surgery, community outreach, and client education. Juancho is also a bilingual content creator behind the Instagram account @juancho.dvm, where he uses his platform to educate, advocate, and inspire through engaging, inclusive storytelling.`
          },
          {
            name: "Dr. Michelle Yee",
            role: "Panel",
            bio: `Dr. Yee completed her Bachelor of Science in Biomedical Science at the University of Guelph. During Dr. Yee’s undergraduate studies, her interest in veterinary medicine led her to working at the local wildlife centre, volunteering for an educational program that housed non-releasable raptors and traveling to Ireland to spend time at a referral veterinary clinic. Subsequently, she acquired her Doctor of Veterinary Medicine degree from the Ontario Veterinary College. After graduating from veterinary school, Dr. Yee went into general practice where she slowly discovered her inclination towards exotic animals – furry, feathered and scaled. This led her to work in various exotic animal general practices in Ontario. In addition, she continued to work at the Toronto Wildlife Centre and the Ontario Turtle Conservation Centre helping to treat and rehabilitate orphaned and injured wildlife.\n\nAfter a few years out in general practice, Dr. Yee decided to return to school to enhance her exotic knowledge. She successfully completed a year-long internship in zoological, exotic and wildlife medicine at the Western College of Veterinary Medicine in Saskatoon. As an intern, in addition to treating exotic pets, she treated animals at the Saskatoon Forestry Farm Park & Zoo, and injured wildlife (including golden eagles, snowy owls, porcupines and moose!). She also had the opportunity to publish research regarding subcutaneous sedation in ferrets. From this adventure, Dr. Yee discovered her passion and is aspiring towards becoming certified in exotic companion mammal medicine through the American Board of Veterinary Practitioners (ABVP).\n\nCurrently, Dr. Yee works in a unique veterinary clinic located in Seattle, Washington that only treats exotic animals on an emergency, urgent care, and routine basis. At home, Dr. Yee lives with Bishop (her rambunctious and bossy mini-rex rabbit), Salami (her loud lovebird) and 4 crested geckos. In her spare time, she enjoys indoor/outdoor rock climbing, yoga as well as traveling.`
          },
          {
            name: "Tracey Brown",
            role: "Panel",
            bio: `Tracy is currently the Executive Director of the Bedeque Bay Environmental Management Association, a registered environmentally based charity located in Prince Edward Island, Canada. Additionally, she is a sessional instructor for the University of PEI teaching courses in Wildlife Field Practicum. Previous work experience has included roles with as a bird Banding technician (Parks Canada, NL), small mammal biologist (Island Nature Trust, PE), GPS GIS forestry technician Environment Canada (PE Dept. of Environment) and lab instructor (Holland College Wildlife Tech Program. PE). Since 2008 Tracy has owned and operated Bunny Trails Pet Ranch, which offers unique travelling zoological shows and educational events. Designed to both educate and entertain all ages and audiences through hands on interactive opportunities with such animals as reptiles, mammals and exotics.\n\nEducation: Bachelor of Science (Biology Major) from University of Prince Edward Island, PE. Renewable Resource Management Technologies Diploma (Wildlife Conservation Technician) from Holland College, PE. Bachelor of Commerce (Marketing and Advertising Major) from Saint Mary’s University, NS\n\nTracy has volunteered with 4H as a regional leader and an Atlantic judge, as well as with the Canadian Animal Distress Network. Additional volunteer work includes time spent in Central America where she volunteered as an animal caretaker at the Belize Zoo and Jaguar Sanctuary, as well as the Belize Iguana Sanctuary.`
          },
          {
            name: "Maria-Victoria Walker-Genovese",
            role: "Panel",
            bio: `Hi Everyone! My name is Maria-Victoria Walker-Genovese and I’m so excited to be speaking at this years’ CPVMA Symposium! As a little bit about me, I completed my Honours Bachelor of Science from the University of Toronto before going on to complete my Masters of Science at the Ontario Veterinary College. There, I studied Brachycephalic Obstructive Airway Syndrome and the surgical interventions available. After that, I worked in ER and specialty medicine before moving to Columbus where I began vet school at the Ohio State University. I absolutely love vet school! Apart from class, I’m involved in a bunch of organizations on campus including the Veterinary Integrated Oncology Club, Buckeyes4Greyhounds&K9s, the Exotic Animals in Private Practice Club, and OSU’s chapter of SAVMA. I also love research too much to give it up, so I’m currently working on a few papers as well!\n\nI hope to see you at this years’ symposium! And if you ever want to discuss anything vetmed related, please feel free to reach out @mv.wg`
          },
          {
            name: "Dr. Kristy Haines",
            role: "Panel",
            bio: `Dr. Kristy Haines began her career in veterinary medicine as a Technician in 2004 and, after some great encouragement from a previous employer, she decided to go back to school to become a Veterinarian in 2007. She graduated from the Atlantic Veterinary College in 2015, and began her journey in mixed animal practice in a small town in New Brunswick. After three years in general practice, Dr. Haines suffered from severe burnout which led to her to change jobs looking for a better work-life balance. She joined the Veterinary Urgent Care team in 2024, as they are a clinic aimed at reducing burnout in veterinary medicine. Kristy enjoys internal medicine, surgery, and loves the fast-pace of emergency medicine/urgent care. Kristy is currently working on her certification in Emergency Medicine, and enjoying the transition to Urgent Care so far. In her free time, Kristy can be found at her farm where she and her husband have four horses, four dogs and one cat. She loves horseback riding, hiking, reading, yoga and traveling. She is currently working on her 200 hour Yoga Teacher Training and just completed her Reiki Master Certification. She is also a member of the CVMA DEI/Wellness Committee, driven by her strong belief in the importance of mental health, not just within veterinary medicine, but in all aspects of life.`
          },
          {
            name: "Dr. Colleen Fisher",
            role: "Panel & Financial Sustainability (Sun)",
            bio: `Dr. Colleen Fisher obtained her Doctor of Veterinary Medicine in 1990 from the University of Saskatchewan. She developed a special interest in working dog medicine through her engagement with a number of police canine units, detector dog agencies, and assistance animal organizations. She is the veterinarian for the Canadian Task Force 4 (Manitoba) Urban Search and Rescue Team. Dr. Fisher received her MSc in Clinical Animal Behaviour from the University of Edinburgh in 2019. Her research focused on the ability of psychiatric (PTSD) service dog handlers and search and rescue dog handlers to recognize stress in their canine partners. She presently coaches pet parents and psychiatric service dog handlers regarding best practices to reduce anxiety and frustration in their animal partners. As Petsecure’s Veterinary Medical Director, she believes that pet insurance offers peace of mind to pet guardians who want the best life for their dogs and cats. Dr. Fisher is enthusiastic about sharing knowledge between the insurance professionals and veterinary team members that serve our mutual clients.`
          }
        ]
      },
      {
        id: "may-3-2025",
        label: "",
        date: "Saturday, May 3, 2025",
        theme: "",
        speakers: [
          {
            name: "Dr. Sue Burlatschenko",
            role: "Managing a Vet Practice",
            bio: `Sue graduated with a B.Sc from the University of Guelph and a DVM from the Ontario Veterinary College. She worked in a mixed practice upon graduation, then worked with the Ontario Government delivering a pork industry initiative program. She returned to private practice where she began and still runs her solo swine consultancy. She obtained her Diplomate status in Swine Health and Production in 2005 and a Master of Public Health in December 2013. She also taught part-time at Ridgetown College for 15 years and has recently worked with Northern College in developing swine training programs for RVTs. Part of Sue’s practice also involves the provision of expert witness services, along with field research. Although practice keeps her busy in Ontario, she has travelled extensively “doing pig things” –to countries including China, South Africa, Malaysia, Philippines, Jamaica, and Estonia, to name a few. Sue resides on a farm outside of Tillsonburg, Ontario with an assortment of pets and enjoys cooking in her kitchen for the kids when they come home (when she isn’t photographing and travelling!).`
          },
          {
            name: "Dr. Matthew Richardson",
            role: "Climate Action",
            bio: `Dr. Richardson holds a BA in Ecology and Evolutionary Biology (Princeton University), a PhD in Zoology (University of Washington) and a DVM (OVC). He is a small animal practitioner and practice owner in downtown Toronto with a special interest in environmentally sustainable practice. He is the Past-President of the OVMA and The Farley Foundation, the founder of the OVMA’s Sustainability Committee and member of the CVMA Green Practice Initiative. A keen year-round cyclist and advocate for active transportation, Dr. Richardson can often be found on his bike or with a camera in his hand (or sometimes both).`
          },
          {
            name: "Dr. Christian Catalano",
            role: "Public’s Understanding",
            bio: `My name is Christian and I have been an emergency veterinarian at the Toronto Veterinary Emergency Hospital since January 2022. After earning my undergraduate degree in Zoology from the University of Guelph, I moved to St. Kitts to attend Ross University followed by my 4th year clinical rotations at Tufts University in Massachusetts. After graduation, I completed a rotating internship at the Mississauga Oakville Veterinary Emergency Hospital where I was drawn to the fast-paced world of emergency medicine. In 2020, I joined VCA South Shore’s Emergency and Critical Care team as an emergency clinician in South Weymouth, Massachusetts. After working at South Shore as a lead ER doctor, I eventually moved back to Toronto to work at TVEH. My special interests include acute gastrointestinal distress and pediatrics. I was born and raised in Toronto and currently live in the east end with my partner and black cat with cerebellar hypoplasia, Zelda.`
          },
          {
            name: "Dr. Diccon Westworth",
            role: "Anthropogenic Climate Change",
            bio: `Diccon is a veterinary neurologist working at a specialty private practice in California. He is on the board of directors at the Veterinary Sustainability Alliance. He has completed the IEMA Certificate in Environmental Management and is Certified Carbon Literate. He is leading efforts in the US clinical sustainability domain by bringing people together and highlighting practical methods to enable the veterinary industry to limit our carbon and ecological footprints, so we can all flourish sustainably.`
          },
          {
            name: "Antonia Laoutaris",
            role: "Public’s Understanding",
            bio: `Antonia began her career as an RVT in Ontario, Canada in 2006 after graduating with honours from Georgian College. She commenced her training at a primary care practice but quickly transitioned to an emergency/referral hospital in 2008, gaining experience while working in various departments such as the ER, ICU, and the hospital’s surgery service. Shortly thereafter, she found her passion for anesthesia and in 2010 accepted a full-time position with the Surgery Department at the VCA Canada Toronto Veterinary Emergency Hospital (TVEH). In 2014, Antonia successfully completed accreditation as a VTS with the Academy of Veterinary Technicians in Anesthesia and Analgesia. Feeling the need to make a geographical change, Antonia relocated to Vancouver in 2016 to join the team at VCA Canada Vancouver Animal Emergency and Referral Center (VAERC) as Head Technologist and Lead Anesthesia Technician. Moving into a leadership role at VAERC inspired her to establish a niche for tech training and development. Over the past six years Antonia has not only provided training for the team at VAERC but has also visited numerous practices providing onsite training, in addition to lecturing at various conferences such as the BCVTA Fall Symposium, Canadian Veterinary Virtual Symposium and regional VCA Canada conferences. Antonia is also a published author and has written articles for the Ontario Association of Veterinary Technician’s (OAVT) quarterly Tech Journal and the West Coast Veterinary Magazine. Additionally, Antonia is a major advocate for hands-free radiology. She joined the team at the Hands-Free Initiative in 2017, allowing her to travel to practices throughout North America providing training workshops and helping clinics transition towards utilizing hands free radiology techniques. She is committed to making hands free radiology standard practice at VCA, to protect our RVTs and assistants from radiation exposure. Antonia was extremely proud and very excited to step into the role of Director of Veterinary Technologist Development and Training in May of 2022 collaborating with all the fantastic people who make VCA an industry leader while Caring For Life’s Greatest Companions.`
          },
          {
            name: "Tracey Lawrence",
            role: "Public’s Understanding",
            bio: `Tracey has been a RVT for over 25 yrs, first working in equine medicine and then transitioning to small animal general practice followed by a move to emergency and referral care in 1999. She holds veterinary technician specialist designations in both emergency and critical care (2005) as well as anesthesia and analgesia (2010). Tracey has spoken at numerous continued education events throughout Canada and the United States, provided online training sessions and has authored multiple veterinary journal articles and textbook chapters. Tracey currently resides in Toronto, ON., where she divides her time between working at a large specialty referral and emergency hospital, teaching part time in the veterinary technician program at Seneca College and pursuing a teaching degree in Adult Education. Tracey is also a trainer with Hands-Free X-rays, a group dedicated to providing virtual and in person education to the veterinary community about non-manual radiography techniques and radiation safety.`
          }
        ]
      },
      {
        id: "may-4-2025",
        label: "",
        date: "Sunday, May 4, 2025",
        theme: "",
        speakers: [
          {
            name: "Dr. Susan Kilborn",
            role: "Community Veterinary Outreach – One Health and community practice in action",
            bio: `Dr. Susan Kilborn received her DVM degree from the Western College of Veterinary Medicine at the University of Saskatchewan. After several years of emergency and critical care practice in Winnipeg, she completed a post-graduate degree in epidemiology and acid-base physiology – DVSc program in Clinical Studies at the Ontario Veterinary College, University of Guelph.\nShe became board certified in the American College of Veterinary Internal Medicine (Small Animal Medicine) in 1995. Dr Kilborn currently sees referral internal medicine cases in Ottawa, consults for Antech Diagnostic Laboratories, and is the Chief Operating Officer and One Health Director for Community Veterinary Outreach.\nCommunity Veterinary Outreach is a Canadian and US registered charity that provides pro bono veterinary care to pets of unhoused, street-involved, and vulnerably housed adults and youth, while providing health and social services for the clients. Vet Outreach serves clients in 11 regions across Canada.\nFor more information, please visit vetoutreach.org.`
          },
          {
            name: "Dr. Stef Lim",
            role: "Mental Health",
            bio: `Dr. Stef Lim was born and raised in Toronto. After completing her BSc, at Western University at the top of her class in 3rd and 4th year with an honours specialization in Animal Physiology, she went to the pursue her dream of becoming a veterinarian. She studied abroad at the University of Melbourne in Australia, and in second year she developed a keen interest in the study of neurology after seeing her first ever brain surgery. During her time in Australia, she enjoyed being proactive in academic societies and was voted as president of the Veterinary Student Society of Victoria. She graduated in December 2012. After graduating Dr. Lim went on to complete an internship in small animal medicine in Rochester, New York in 2014– staying on to practice small animal emergency and general medicine for an additional 2 years. In 2016, she returned to Canada to undertake a specialized neurology internship at the University of Guelph. Eager to deepen her knowledge and expertise, Dr. Lim then pursued a research fellowship at the University of Missouri in comparative neurological diseases in dogs and humans where she is published in multiple papers. Dr. Lim started her neurology residency in Yonkers, New York but completed her final 2 years of her residency at Mississippi State University in 2022. (COVID…) During her time in Mississippi, she engaged in student run veterinary interest groups and gave student lectures. Dr. Lim contributed and is published in the latest edition of “Advanced Techniques in Canine and Feline Neurosurgery” textbook. Dr. Lim is a Diplomate of the American College of Veterinary Internal Medicine (Neurology). When she is not in the clinic, Dr. Lim enjoys spending time with her family and two spunky and adorable Dachshunds, Squish and Lealu. Her interests extend beyond neurology to include cooking, dancing, snowboarding, and exploring the wonders of travel where she can experience culture through art, architecture, wildlife and food.`
          },
          {
            name: "Melanie Savage",
            role: "Mental Health",
            bio: `Melanie is a Registered Social Worker based out of Ottawa Ontario. She runs a province wide virtual private practice that supports pet parents in navigating the emotional complexities of anticipatory grief and pet loss. Her innovative approach helps clients transition from a relationship of presence to one of memory, guiding them to find ways to live with both grief and joy simultaneously. Melanie also hosts pet loss related Talk and Share events in her local community and delivers lectures to the veterinary community on topics such as grief and loss as well as how to better support veterinary teams and clients when faced with challenging situations.\nAdditionally, Melanie works in community mental health where she has seen firsthand the invaluable impact that pets have on the well-being of marginalized populations. She incorporates this relationship into discussions, goals, and interventions, noting that the relationship at times is the single most valuable connection that individuals have.\nAs a former Master of Social Work practicum student with Community Veterinary Outreach, she spearheaded a mental health and social support service and developed a comprehensive community resource guide for pet parents who attend the charity’s Ottawa region clinics. She currently volunteers as the mental health team lead where she focuses on coordinating support and finding ways to enhance the mental healthcare offered to clients while attending their appointments.`
          },
          {
            name: "Dr. Jim Berry",
            role: "Sustaining Animal Welfare",
            bio: `Jim Berry has been in clinical practice for 34 years, working in 3 different areas of Canada. In the past 15 years, Jim has concentrated on companion animal lameness and pain management employing an integrated approach to patient care. Jim is currently certified in veterinary acupuncture (IVAS), canine rehabilitation (CRI), animal chiropractic (Options for Animals), and he is a Certified Veterinary Pain Practitioner (IVAPM). Jim is actively involved in veterinary association work, having served on the executive boards and various committees of the World Small Animal Veterinary Association, Canadian Veterinary Medical Association, New Brunswick Veterinary Medical Association, and the International Veterinary Academy of Pain Management. Jim still works in clinical practice but tries to spend as much time as possible hiking, running, or snowshoeing with his wife and 3 dogs. His cat is invited but prefers to stay inside by the food bowl.`
          },
          {
            name: "Dr. Bettina Bobsien",
            role: "Sustaining Animal Welfare",
            bio: `Bettina Bobsien is a practicing veterinarian with a lifelong passion for both animal care and animal welfare. She has a Bachelor of Science in Agriculture and is a Diplomate of the American Board of Veterinary Practitioners, specialized in Equine Practice. After developing a full service equine practice on Vancouver Island, Bettina focused her attention on animal welfare and has been very active in that role for the past decade and a half. Bettina is currently the Chair of the Equine Code Development Committee who are in the process of updating the current Equine Code of Practice, the national horse care standards document that is referenced in provincial law in BC. She is also the Vice Chair of the National Farm Animal Care Council where she represents the Canadian Veterinary Medical Association, and the Veterinary Ethics editor for the Canadian Veterinary Journal. She actively advocates for horses that are “unwanted” or at the end of their careers by engaging in public education on the matter. She continues to practice part time on Vancouver and the Gulf Islands, with a practice focus on performance horses, nutrition, geriatric horse care, podiatry, and equine endocrine diseases. Her personal riding goals include dressage and jumping, with a new passion for trail riding with the Back Country horsemen.`
          },
          {
            name: "Dr. Stephanie Schiavone",
            role: "Environmental Sustainability",
            bio: `My name is Steph Schiavone, and I am currently a surgical resident at the University of Georgia. I grew up in the Netherlands and moved to the U.S. in elementary school. I attended veterinary school at Colorado State University, where I conducted research on environmental sustainability in veterinary medicine. During my time at CSU, I was fortunate to work alongside faculty dedicated to creating a more environmentally friendly teaching hospital. Our research contributed to meaningful changes within the hospital and highlighted areas where further improvements could be made.`
          },
          {
            name: "Dr. Emma Borkowski",
            role: "Lab – Pathology",
            bio: `Emma obtained her Doctor of Veterinary Medicine degree at the Ontario Veterinary College in 2015. She became board certified in Anatomic Pathology in 2018 and completed her PhD in 2019. Her PhD work assessed immunity to gastrointestinal parasites in sheep. Following graduation, in September 2019 she moved to England and joined the University of Surrey as a Teaching Fellow in Anatomic Pathology. After 2.5 years and a global pandemic, Emma rejoined the Ontario Veterinary College as an Assistant Professor in Anatomic Pathology in January 2022. She is continuing her research to understand and leverage host immune responses in control of parasites in both sheep and goats, and also supports diagnostic cases for the Department of Pathobiology.`
          },
          {
            name: "Dr. Stephen Atkinson",
            role: "Effects of Climate Change",
            bio: `Originally from England, Dr. Stephen Atkinson has practiced veterinary medicine for 18 years; most of that time in Manitoba. He graduated from the Western College of Veterinary Medicine in Saskatoon in 2007. Since then, he has worked in a variety of areas including large, small and exotic animal medicine and surgery. Currently, his focus is on small animal practice, but he also spends time working with horses and smaller farm animals such as goats, pigs and sheep, as well as exotics. Stephen has also been a wildlife research biologist for over 35 years. For his PhD, he studied the energetics, physiology, body condition and reproduction of wild polar bears in the Canadian Arctic. He then went on to live and work for government agencies in northern Canada as a polar bear biologist and later as a director of wildlife management. Since leaving government, he has continued to conduct field-based research on Arctic species (mostly polar bears) under contract to government wildlife agencies in Canada and the USA. His recent research has focused on population dynamics, health, genetics, habitat use and energetics with an emphasis on the effects of climate change. At times, his backgrounds as a veterinarian and biologist have converged in projects require clinical skills, special sampling techniques, chemical immobilization and health.`
          },
          {
            name: "Dr. Tracey Young",
            role: "Closing Speaker",
            bio: `Dr. Tracey Young is a 1999 graduate of the Ontario Veterinary College. Tracey has been actively engaged in primary care medicine for most of her professional career. Tracey calls VCA Pretoria Animal Hospital her work home where she helps promote a positive and engaging culture while balancing the ongoing challenges of our evolving profession. Dr Young was Pretoria’s medical director for 5 years, and loves to mentor veterinarians. She is currently doing dental procedures several days a week, and is on the local leadership team for Community Veterinary Outreach. She loves teaching, sharing her knowledge and experience with new graduates, and emphasizes the importance of work-life balance. Tracey is a whirlwind of positivity and loves to laugh and look on the bright side of life!\nIn her spare time Tracey loves walking with her rescue pooch Mojo, travelling with her 2-legged family members and volunteering with her local Community Veterinary Outreach program.`
          }
        ]
      }
    ]
  },
  {
    id: "symposium-2023-2024",
    season: "2023 - 2024",
    title: "2023-2024 Symposium",
    dateRange: "Date: May 31 - June 2nd, 2024",
    topic: "The Changing Face of Veterinary Medicine",
    description:
      "Our Guest Speakers 2024 shine a spotlight on leadership, innovation, and One Health advocacy. Across three immersive days, we explored community outreach, mental wellness, technology, and global veterinary impact.",
    highlights: ["Day 1: Friday May 31st", "Day 2: Saturday June 1st", "Day 3: Sunday June 2nd"],
    days: [
      {
        id: "may-31-2024",
        label: "",
        date: "Friday, May 31, 2024",
        theme: "",
        speakers: [
          {
            name: "Dr. Natasha Kutryk",
            role: "Opening Speaker",
            bio: `Dr. Natasha Kutryk is currently a Senior Specialist in Scientific Marketing Affairs for a pharmeceutical company. Most recently she practised as a Feedlot Consultant for Telus Agriculture and Consumer Goods. Prior to consulting she was a mixed animal veterinarian in Alberta and Saskatchewan and practised large animal medicine in England and New Zealand. Natasha has served on the Alberta Veterinary Medical Association Council since 2020 and was most recently the ABVMA’s President. She obtained her DVM from the Western College of Veterinary Medicine in Saskatchewan. When not working, she farms with her husband in North Eastern Alberta.`
          },
          {
            name: "Dr. Katy Proudfoot",
            role: "Animal Welfare Panelist",
            bio: `Dr. Katy Proudfoot is currently an Associate Professor and Director of the Sir James Dunn Animal Welfare Centre at the Atlantic Veterinary College, University of Prince Edward Island. Katy received her MSc and PhD at the University of British Columbia’s Animal Welfare Program, where she focused her research on understanding the welfare of dairy cattle. She then spent 6 years as an Extension Specialist in Animal Behaviour and Welfare at the Ohio State University College of Veterinary Medicine before moving to PEI. In her current role, Katy teaches animal behavior and welfare to veterinary students, conducts research on a wide range of species, and creates outreach opportunities for the veterinary community to help improve the lives of animals under our care.`
          },
          {
            name: "Dr. Sarah Lim",
            role: "Nutrition & Clinical Practice Panelist",
            bio: `Dr. Sarah Lim received her Doctor of Veterinary Medicine degree from the Cummings School of Veterinary Medicine at Tufts University in 2014. Upon graduation from veterinary school, she completed a small animal rotating internship at the Angell Animal Medical Center in Boston, MA. After her internship, she joined the General Medicine department at Angell, where she was a general practitioner for 6 years. Her professional interests include nutrition, endocrinology, and gastroenterology. Dr. Lim joined Hill’s Pet Nutrition Canada as the Professional Consulting Veterinarian for Central Canada in November 2022. She enjoys working collaboratively with veterinary health care teams to improve the lives of pets.`
          },
          {
            name: "Dr. Melanie Pinel",
            role: "Industry Insights Panelist",
            bio: `Dr. Mel (Melanie) Pinel was born and raised near Dallas, TX and developed a love for animals at an early age. Following her passion, she attended veterinary school and graduated from Texas A&M University in 2006. She completed a small animal internship at Wheat Ridge Animal Hospital in Colorado before beginning her career in small animal general practice. She had the privilege of working with several outstanding veterinarians and practices in Minnesota, Florida, Tennessee, and Colorado and was able to explore many segments of veterinary medicine, including first opinion practice, emergency medicine, high volume spay/neuter, exotics/wildlife, and locum work. In 2018, Dr. Pinel moved with her family to the Calgary, AB area and after a short period of adjustment, she took a job working with Hill’s Pet Nutrition. She quickly realized that a career in veterinary industry was the perfect fit and moved on to a role as a technical services veterinarian with Elanco in 2021. Dr. Pinel really enjoys her interactions with the sales team as well as with veterinarians and veterinary health care teams in her role and looks forward to new opportunities to expand her knowledge in all things veterinary medicine and beyond. Dr. Pinel spends her free time reading, gardening, or with her husband and two young children and their menagerie of pets.`
          },
          {
            name: "Dr. Cathy Furness",
            role: "Veterinary Leadership Panelist",
            bio: `Before joining the CFIA in November 2022 as the Deputy Chief Veterinary Officer, Cathy worked at the Ontario Ministry of Agriculture, Food and Rural Affairs (OMAFRA), in the role of Lead Veterinarian for Planning and Preparedness since 2013, and in July 2019, Cathy was appointed to the role of Chief Veterinarian for Ontario. Cathy possesses a wealth of experience and knowledge in emergency management, work in partnership with veterinarians, farmers, industry and the community, as well as provincial ministries, provinces and the CFIA to support animal health and welfare needs in Ontario. She was responsible for provincial-level disease planning and preparedness, disease outbreak response and supporting various commodity and stakeholder organizations to enhance their respective emergency preparedness.

In addition to her time at OMAFRA, Cathy practiced in both small animal and equine practice shortly after graduating with Distinction, from the Ontario Veterinary College (OVC), University of Guelph in 2000. She returned to OVC to complete an MSc in Clinical Studies and a residency in Large Animal Internal Medicine, and is board certified by the American College of Veterinary Internal Medicine – Large Animal Internal Medicine.

Cathy and her family live on a small hobby farm in Rockwood, ON, with all creatures great and small (a pony, 2 dogs, 3 cats and numerous hens) and spends her spare time working in the garden, baking and hanging out with Butters the pony.`
          },
          {
            name: "Dr. Stephanie Smith",
            role: "Disease Surveillance & Biosecurity Panelist",
            bio: `Stephanie Smith is the Chief Veterinary Officer and Director of the Veterinary Unit with the Livestock Branch, Saskatchewan Ministry of Agriculture. Stephanie and her team are engaged on a wide variety of files including disease surveillance, emergency preparedness and response, animal welfare, and biosecurity. Stephanie grew up near Borden, SK and obtained her veterinary degree at the Western College of Veterinary Medicine at the University of Saskatchewan in 2015. Prior to working for government, Stephanie worked in a mixed animal veterinary practice as well as for the commercial poultry industry. Stephanie and her husband manage their grain and cow/calf operation near Saskatoon, where they spend time with their multiple horses, chickens, dogs, and pigs.`
          }
        ]
      },
      {
        id: "june-1-2024",
        label: "",
        date: "Saturday, June 1, 2024",
        theme: "",
        speakers: [
          {
            name: "Dr. Melanie Barham",
            role: "Community Outreach in Veterinary Medicine",
            bio: `Melanie is a veterinarian, entrepreneur, speaker, educator, and mum. Melanie loves working with teams to create change, find new ways to think through problems, and collaborate.

She holds a DVM from the Ontario Veterinary College, and MBA in Sustainable Commerce from the University of Guelph, and a Project Management Professional designation. She is the CEO of Community Veterinary Outreach and Vets: Stay, Go, Diversify.`
          },
          {
            name: "Dr. Jordan Woodsworth",
            role: "Community Outreach in Veterinary Medicine",
            bio: `Dr. Jordan Woodsworth is a small animal clinician who graduated from the Western College of Veterinary Medicine in 2008. In 2012, she returned to the WCVM to start the Wellness and Preventive Medicine program in the teaching hospital, and to spearhead the Northern Engagement and Community Outreach (NECO) program. In 2023 Jordan completed a PhD in community and population health which allowed her to engage in collaborative research with members of a northern Saskatchewan community she has served through the NECO program for almost a decade. Jordan’s primary role is now as Director of NECO, and she continues to explore new ways to bring awareness to animal health and welfare inequities in Canada with an ultimate goal to devise creative, community-led solutions to improving access to animal health and welfare services. Jordan continues to learn from colleagues and mentors about how to foster and develop anti-racist, anti-oppressive and anti-colonial environments within veterinary medicine and is playing a key role in development of WCVM’s anti-racism strategy. Outside of work, Jordan is married to her high school sweetheart and is a mum to two amazing kids and a lovely dog. She loves being in her garden or at the lake, travelling with her family and friends, crafting, and cooking and eating amazing food.`
          },
          {
            name: "Dr. Leann Benedetti",
            role: "Mental Health & Well-Being in the Veterinary Field",
            bio: `Dr. Leann Benedetti has 27 years of clinical experience in mixed animal, small animal, and mobile veterinary practice, having designed, built, and managed two practices over 13 years. In her current business ‘The Veterinary Coach’ Leann is focused on supporting the human beings of veterinary medicine. As a trauma-informed, ICF Certified Coach Leann supports the mental and emotional health of veterinary professionals and their professional quality of life, with the goal to co-create resilient, agile, rewarding, positive, psychologically safe veterinary ecosystems.

Leann is the co-chair of the Canadian Veterinary Medical Association (CVMA) Wellness Committee Group, a Peer Advisor for the College of Veterinarians of Ontario, and a passionate advocate for well-being and whole-hearted living.`
          },
          {
            name: "Dr. Ian Sandler",
            role: "Mental Health & Well-Being in the Veterinary Field",
            bio: `Dr. Ian Sandler is the Co-Founder and Chief Veterinary Medical Officer of Grey Wolf Animal Health, a Canadian specialty animal health company founded in 2015. Grey Wolf Animal Health is focused on improving the lives and well-being of vets and pets in Canada and abroad. After graduating from the Ontario Veterinary College in 1994, Dr. Sandler practiced small animal medicine in the United States. He returned to Canada, and in 1999 and along with 3 colleagues founded the Ontario Veterinary Group, which grew to be one of the largest privately-owned veterinary hospital groups in Canada. For over 29 years Dr. Sandler has practiced small animal medicine and surgery in Toronto, primarily at the VCA-Rosedale Animal Hospital, and now the Toronto Humane Society Dr. Sandler is a well-respected animal health expert and is frequently quoted and interviewed. He served on the Animal Health Technologist / Veterinary Technician (“AHT/VT”) Accreditation Committee of the Canadian Veterinary Medical Association (“CVMA”) from 2009 to 2016, and now Chairs the National Issues Committee. Grey Wolf Animal Health was founded with the mission to identify and bring to market products, solutions, and services that meet the underserved needs of vets, pets, and clinics across Canada.`
          },
          {
            name: "Cerys Goodall",
            role: "Gender, Diversity & Inclusion in Veterinary Medicine",
            bio: `Cerys Goodall is a change agent with more than 20 years of experience helping leading tech companies including LEAGUE, Kobo and Innerspace.io. to move from ideation to growth. As the COO of Vetster, the world’s leading telehealth platform and veterinary marketplace, Goodall is responsible for the company’s marketing, sales, and business operations. She is deeply passionate about empowering veterinary entrepreneurs with the technology they need to shape the future of veterinary care.`
          },
          {
            name: "Dr. Charlotte Williams",
            role: "Gender, Diversity & Inclusion in Veterinary Medicine",
            bio: `Dr. Charlotte Williams is a graduate from the Western College of Veterinary Medicine in 1994. She has worked in mixed practice for the last 30 years, the last 28 as an owner. Dr. Williams was the first female black veterinarian in Saskatchewan and the first black president of the Saskatchewan Veterinary Medical Association. But what she feels is her greatest accomplishment is her marriage of 33 years and raising 3 adult children whom she loves and appreciates.`
          },
          {
            name: "Dr. Marty Becker",
            role: "Fear Free Handling Lab",
            bio: `Dr. Marty Becker is a trailblazer in the world of pet health. With his groundbreaking initiative Fear Free, Dr. Becker is on a mission to ensure that our pet friends live their happiest, healthiest lives. His impact goes beyond veterinary clinics, reaching out to pet parents and the staff and volunteers in animal shelters.

Dr. Becker has captured the hearts of millions with his dynamic presence. As the go-to veterinary expert on popular shows like “Good Morning America,” he brings a fresh and relatable perspective to pet care. His commitment to animal welfare is evident through his past involvement on the Board of Directors of American Humane, where he was a driving force in advocating for our beloved pets. Dr. Becker’s compassion extends to senior dogs, and he actively serves on the Advisory Board of The Grey Muzzle Organization, ensuring that our older canine companions find loving homes.

Dr. Becker is not just a TV personality. He’s a prolific author with 23 books under his belt. From New York Times best-sellers to invaluable pet care guides, his words resonate with pet lovers across the globe. Together with his talented writing partner, Kim Campbell Thornton, Dr. Becker shares his insights through their widely syndicated newspaper feature, Pet Connection.

As a cutting-edge educator, Dr. Becker empowers the next generation of veterinary professionals. He teaches as an adjunct professor at esteemed veterinary colleges like Washington State University, Colorado State University, and the University of Missouri. His enlightening lectures have touched aspiring veterinarians across the country. Dr. Becker’s dedication goes even further, as he contributes his expertise to the advisory board of World Vets, supporting global veterinary and disaster relief programs.

Dr. Becker is a staunch advocate for the special bond between humans and animals. He serves as an honorary board member of Pet Partners and the Humane Society of New York, championing the meaningful connection we share with our pets. Locally, he actively supports organizations such as Second Chance Animal Adoption of Bonner Ferry, ID, and contributes to the Panhandle Animal Shelter in Sandpoint, ID, the Kootenai Humane Society in Coeur d’Alene, ID, and the Whitman County Humane Society in Pullman, WA.

When he’s not busy revolutionizing pet health, Dr. Becker can be found at VCA North Idaho Animal Hospital, where he continues to work tirelessly to ensure the well-being of our furry companions.

Dr. Marty Becker is the voice of a new generation of pet lovers, inspiring change and nurturing the bond we share with our four-legged friends. Join him in his quest to create a world where pets thrive and enjoy their lives to the fullest.`
          },
          {
            name: "Dr. Samuel J. Ujewe",
            role: "One Health Speaker",
            bio: `Dr Ujewe is a researcher and expert in applied ethics and global population health, specialising in equitable access to health (-care) resources, global indigenous ethics, justice and social determinants, infectious disease management, inequities in health emergencies, cross-cultural ethics, and global mental health. Over the past twelve years, he has led research, delivered teaching and dissertation supervision, led policy development initiatives and impactful community-oriented engagements across the globe.

His research integrates major justice and equity theories with Indigenous principles and approaches to enhance equitable, responsible, and actionable health reforms globally. It explores the social determinants of inequities against the background of socio-cultural and moral experiences in local and global contexts.

One of his significant contributions to global health remains the successful translation of research knowledge and output into policy tools for impactful health intervention. These include providing high-level input to the WHO on Ebola and global response to Covid-19 research and development, among others. Some core outputs of his engagements include one published book and several journal articles, book chapters and policy documents.

He is a Senior Ethics Research Advisor, Canadian Institutes of Health Research (CIHR); Adjunct Assistant Professor, Arrupe Jesuit University; Global Health Ethics Expert, European Commission; and Chair of the Cultural, Anthropological, Social & Economic impact (CASE) Sub-Faculty within the Global Emerging Pathogens Treatment Consortium (GET-Africa). He holds a PhD in Applied Ethics and Global Health from the University of Central Lancashire, United Kingdom; a Master of Health Sciences in Bioethics from the University of Otago, New Zealand; and BA Hons. in Philosophy from the University of Zimbabwe, Zimbabwe.

Dr Ujewe has broad and diverse international-lived experience, having lived, studied, and worked in 9 countries and across four continents.`
          },
          {
            name: "Dr. Colleen Duncan",
            role: "One Health Speaker",
            bio: `Dr. Duncan is a Professor in the Department of Microbiology, Immunology and Pathology. She is passionate about how the environment, particularly how climate change influences animal health. She uses epidemiology and pathology to investigate disease in a wide range of domestic and wild animals. She’s actively involved in the Colorado School of Public Health, the CSU One Health Institute, the CSU School of Global Environmental Sustainability, and the CSU Presidents Sustainability Commission.`
          }
        ]
      },
      {
        id: "june-2-2024",
        label: "",
        date: "Sunday, June 2, 2024",
        theme: "",
        speakers: [
          {
            name: "Dr. Cliff Redford",
            role: "Veterinarians Working in International Crises",
            bio: `Dr. Cliff Redford graduated from OVC in 1998 and jumped right into practice ownership. He has owned his companion animal hospital, Wellington Veterinary Hospital, for 25 years and has a special interest in soft tissue surgery and wildlife medicine. Since 2016, he has devoted his vacation time to volunteering around the world and has worked with animal rescue groups in Jamaica, Panama, India twice, Greece, and Ukraine during the current war twice, and recently returned from volunteering in Iqaluit, Nunavut.
Once a week for the past six years, he has volunteered at Shades of Hope Wildlife Rehab. On top of being a veterinarian, Dr. Cliff is a documentarian and in his spare time, he enjoys boxing and surfing.`
          },
          {
            name: "Susan Groenveld",
            role: "Innovations in Technology in Veterinary Medicine",
            bio: `Susan Groeneveld, B.Sc. is a distinguished serial entrepreneur with specialization in agricultural/animal science and technology based businesses. Her 25 year career has included leading commercialization for some of the largest global companies in animal health and agriculture, co-founding an award winning North American marketing agency- WS, a globally recognized not for profit in animal health and most recently Sylvester.ai. In 2023, her outstanding contributions were recognized as a top 5 finalist for Entrepreneur of the Year for Women in AI across North America. Her passion for innovation, coupled with her dedication to addressing global challenges, positions her as a driving force in the ongoing transformation of animal care sectors.`
          },
          {
            name: "Dr. Michael Accardi",
            role: "Innovations in Technology in Veterinary Medicine",
            bio: `Dr. Michael Accardi received his PhD degree in Pharmacology and Therapeutics at McGill University with a focus on the metabolic regulation of excitatory and inhibitory neurotransmission. Following his doctoral studies, Dr. Accardi entered the preclinical arena wherein, as a Study Director at Charles River Laboratories, he performed both in vivo and in vitro toxicology and safety assessments. Dr. Accardi soon became the Associate Director in Safety Pharmacology at Charles River Laboratories overseeing the safety pharmacology portfolio (e.g., in vivo and in vitro cardiovascular, neuroscience and respiratory assessments, amongst other) at the Laval, Quebec site. Dr. Accardi has since transitioned into a governmental setting where he is now the Team Lead of the Veterinary Health Products (VHP) Notification Program. The VHP Notification Program aims to assist companies in meeting the rules for importing and selling, in Canada, low-risk VHPs which are used to maintain or promote the health and welfare of companion and livestock animals. Throughout his career, Dr. Accardi has had the unique privilege of working with cutting edge scientific and veterinary technologies within both academic and clinical settings in the pursuit of scientific advancement and improved treatment strategies for both human and animals alike.`
          },
          {
            name: "Dr. Michael Blackwell",
            role: "Addressing Financial Issues in the Veterinary Field",
            bio: `Dr. Blackwell currently serves as the Director of the Program for Pet Health Equity at the University of Tennessee. He is the founder of AlignCare Health, a One Health interprofessional system to improve access to veterinary care, especially for families with limited means.

Previously, Dr. Blackwell served as: Dean, College of Veterinary Medicine, University of Tennessee; Chief of Staff, Office of the Surgeon General of the United States; Deputy Director, Center for Veterinary Medicine, Food and Drug Administration; Chief Veterinary Officer, U.S. Public Health Service

During 23 years on active duty with the U.S. Public Health Service, he achieved the rank of Assistant Surgeon General and Rear Admiral.

Dr. Blackwell has received numerous awards and recognitions, including the Distinguished Service Medal, Meritorious Service Medal, and two Surgeon General’s Exemplary Service Medals. He is the 2020 recipient of the Avanzino Leadership Award and the 2021 recipient of the Senator John Melcher, DVM Leadership in Public Policy Award.`
          },
          {
            name: "Darren Osborne",
            role: "Addressing Financial Issues in the Veterinary Field",
            bio: `Darren Osborne is the Director of Economic Research for the Ontario Veterinary Medical Association (OVMA) and Economic Consultant for the Veterinary Hospital Managers Association, and Canadian Veterinary Medical Association. Darren conducts economic research and analyses data in order to provide thousands of veterinarians with Fee Guides, Economic Reports, Personal Benchmark Reports, Reports on Compensation and Benefits for Associate Veterinarians and Non-DVM Wage Reports. More recently, Darren has partnered with Idexx to create a Practice Dashboard Report that automatically extracts financial information from veterinary practice management software to provide monthly metrics that track performance and compare to the average veterinary hospital in the region. Darren attended York University and completed his Master’s Degree in Economics in 1992. When he is not crunching numbers, you can find Darren ultra-running, marathon swimming or napping with his two dogs.`
          },
          {
            name: "Dr. Kat Sutherland",
            role: "Communications in Veterinary Medicine Lab",
            bio: `Kat is currently a postdoctoral fellow in the Relationship-Centred Veterinary Medicine research group at the Ontario Veterinary College. Kat’s research interests are motivated by wanting to understand how veterinary-client communication can be enhanced to improve the quality of life for pets with excess weight. She completed her MSc in animal nutrition and a PhD in Population Medicine. Her PhD research explored pet weight-related communication in small animal veterinary practice, with emphasis on obesity-specific communication. Since 2018 Kat has also been active in the OVC’s Medical Communications Program, where she enjoys working with student veterinarians to refine their clinical communication skills.`
          },
          {
            name: "Dr. Paul Manesis",
            role: "New and Emerging Areas of Veterinary Medicine",
            bio: `Paul Manesis grew up down the shores of New Jersey, USA. He graduated from LaSalle University in Philadelphia with a Bachelor of Science degree then completed a veterinary degree from the University College of Dublin in Ireland. Dr. Manesis then went on to complete an intensive rotating internship at a specialty hospital in Brooklyn, NY before moving to Canada in 2016. Since then he has worked in small animal GP, small animal ER and opened Fish and Bee Mobile Veterinary Services to focus on these underserved fields in Ontario. He has worked his way up to be the trusted veterinarian for large apiaries in Ontario and aiding in bringing the first insect vaccine to Ontario apiaries. He earned a certificate from the World Aquatic Veterinary Medical Association (WAVMA) and serves both large and small clients but mainly focuses on pet fish wholesale and aquariums. In his free time, Dr. Manesis enjoys leather working and tending to his own pond, fish tanks, and honey bees.`
          },
          {
            name: "Dr. Gillian Muir",
            role: "Closing Speaker",
            bio: `Dr. Gillian Muir was appointed dean of the Western College of Veterinary Medicine (WCVM) at the University of Saskatchewan (USask) on July 1, 2021, after serving one year as interim dean. She is the first WCVM graduate and the first woman to fill the college’s leadership role.

Dr. Muir grew up in Alberta, received her Doctor of Veterinary Medicine (DVM) degree at the WCVM in 1988, and completed a PhD degree in neuroscience at the University of British Columbia. Since joining the WCVM faculty in 1996, Dr. Muir has become a gifted instructor and neuroscientist who uses animal models to study functional recovery from spinal cord injury.

While serving as head of the WCVM’s Department of Veterinary Biomedical Sciences from 2014 to 2020, Dr. Muir was involved in renewing the WCVM’s curriculum for its DVM program and in developing the college’s strategic plan as part of the University Plan 2025.

Since becoming dean, she has continued to move the college forward with strategic planning and has been instrumental in expanding Indigenous engagement and equality, diversity and inclusion (EDI) at the college. Dr. Muir has energized the WCVM with her goal-oriented focus, leadership and vision for the future.`
          }
        ]
      }
    ]
  },
  {
    id: "symposium-2022-2023",
    season: "2022 - 2023",
    title: "One Health & Human-Animal Bond Symposium",
    dateRange: "Date: August 2023",
    description:
      "Our Guest Speakers 2023\nWelcome to our 2023 Symposium Speaker Lineup! This year’s theme is One Health and the Human-Animal Bond. As we get closer to the August 2023 Symposium, we will be releasing more speaker profiles for those who will be presenting this year!",
    highlights: [
      "Focus on One Health and the Human-Animal Bond",
      "Profiles released throughout August 2023",
      "Comprehensive lineup of clinical, research, and community leaders"
    ],
    days: [
      {
        id: "august-2023-lineup",
        label: "",
        date: "",
        theme: "",
        speakers: [
          {
            name: "Dr. Jennifer Loewen",
            role: "Emergency & Critical Care",
            bio: `Dr. Jen Loewen is presently Assistant Professor of Small Animal Emergency Medicine and Critical Care at the Western College of Veterinary Medicine at the University of Saskatchewan. Dr. Loewen grew up in Winnipeg, Manitoba prior to earning her DVM degree at the Western College of Veterinary Medicine. Following graduation, she completed a small animal rotating internship at Iowa State University and a residency in Small Animal Emergency and Critical Care at the University of Wisconsin-Madison. Dr. Loewen obtained her board certification from the American College of Veterinary Emergency and Critical Care in 2018. She is currently working on a Masters of Education in Health Professional Education. Her research interests include blood transfusion medicine and medical education.`
          },
          {
            name: "Dr. Faith Banks",
            role: "Geriatric Medicine",
            bio: `Dr. Faith Banks graduated from OVC in 1996, and has been practicing veterinary medicine in Toronto ever since. While working as a general practitioner, she became interested in geriatric medicine and pain management for pets while caring for her own geriatric Bernese Mountain Dog, Smudge. She then started Midtown Mobile Veterinary Hospice Services in 2012 and it has grown to a team of 31 people. Last year, she opened Faithful Pet Memorial, Toronto’s first Aquamation, water based cremation service for pets.
She is amongst the first group of veterinarians to be named as a Certified Hospice and Palliative Care Veterinarian (CHPV) through the International Association for Animal Hospice and Palliative Care (IAAHPC). She shares her home with her husband and 3 children, a lovable senior Bernese Mountain Dog named Maple and her puppy-ish Bernese Mountain Dog, Elsie.`
          },
          {
            name: "Dr. Arinjay Banerjee",
            role: "One Health Panelist",
            bio: `Dr. Arinjay Banerjee (PhD) is a virologist and the Principal Investigator of the Laboratory of Zoonotic Viruses and Comparative Immunology at the Vaccine and Infectious Disease Organization, University of Saskatchewan. Dr. Banerjee is the co-lead for One Health at the University of Saskatchewan. Research within Dr. Banerjee’s laboratory focuses on three main themes that are inspired by the One Health ideology, (1) virus-host interactions in wildlife reservoir species, such as bats, (2) virus-host interactions in spillover species, such as humans, and (3) viral vaccine development.
Dr. Banerjee completed his Master of Science degree in virology from the National Institute of Virology in India where his Master’s thesis was awarded the university gold medal. Next, Dr. Banerjee completed his PhD from the University of Saskatchewan where his doctoral thesis on coronavirus-host interactions was awarded Canada’s Governor General’s Gold medal. Dr. Banerjee’s postdoctoral research at McMaster University was awarded the Gerard Wright postdoctoral award in Infection Research and the postdoctoral fellow impact award. Dr. Banerjee was selected as CBC Saskatchewan’s Top 40 under 40 in 2022.`
          },
          {
            name: "Dr. Javier Sanchez",
            role: "Epidemiology",
            bio: `Dr. Javier Sanchez, DVM, Ph.D. Veterinary Epidemiologist, is a Veterinarian from Argentina. After graduating from the Universidad Nacional de Rio Cuarto, Cordoba, he practiced for five years in cow-calf and beef production systems. Then he started working in epidemiology and moved to Canada for his Ph.D. at the Atlantic Veterinary College.

Dr. Sanchez is now a professor of epidemiology at the Atlantic Veterinary College. His expertise is in quantitative methods in epidemiology with an emphasis on disease transmission models and risk assessment applied to food safety, animal health, and one health. Before joining the Atlantic Veterinary College in 2009, Dr. Sanchez worked for the Public Health Agency of Canada as an epidemiologist with the Policy Advice and Effectiveness Program of the Laboratory for Foodborne and then for the Canadian Food Inspection Agency as a scientific advisor and risk assessor. Dr. Sanchez continues to work actively with countries worldwide but mostly focused on research activities in Latin America. He has published more than 100 scientific papers in veterinary epidemiology, and he is a dynamic member of national and international conferences. He lives in a small community in Prince Edward Island and enjoys outdoor activities year-round.`
          },
          {
            name: "Dr. Candace Lowe",
            role: "Dentistry",
            bio: `Dr. Candace Lowe received her veterinary degree from the Western College of Veterinary Medicine in 2005. Following graduation, she worked as a clinical associate in radiation oncology at the WCVM Veterinary Medical Centre.
In 2008, Dr. Lowe began a combined residency in veterinary dentistry and Master of Veterinary Science degree program, which she successfully completed in July 2011.
She joined the WCVM’s Department of Small Animal Clinical Sciences as an assistant professor in September 2011 and now operates the veterinary dentistry clinical service at the WCVM Veterinary Medical Centre. Dr. Lowe is a board-certified specialist with the American Veterinary Dental College.`
          },
          {
            name: "Dr. Charlotte Pye",
            role: "Dermatology",
            bio: `Dr Charlie Pye BSc, DVM, DVSc, DACVD received her Doctorate of Veterinary Medicine from the Atlantic Veterinary College, PEI. She then moved to Saskatoon for a rotating internship at the Western College of Veterinary Medicine. Following her internship, she travelled back for a Dermatology Residency at the Ontario Veterinary College. While at OVC, she also completed her Doctorate of Veterinary Science degree specializing in bacterial biofilms. After passing boards she began working at Guelph Veterinary Specialty Hospital, a private referral practice in Ontario; also travelling back to PEI to teach the veterinary students a few times a year. As of May 2018 she joined the team at the Atlantic Veterinary College as an assistant professor, and established the first ever Dermatology service at AVC. She has lectured all over North America and has contributed to multiple journals and textbooks. She is also currently the treasurer for the Canadian Academy of Veterinary Dermatology.

In her spare time she enjoys crafting, hiking, camping and spending time with her other half, her daughter and her son. She is currently “owned” by two cats and a small terrier mix (who has allergies!)`
          },
          {
            name: "Dr. Trisha Dowling",
            role: "Pharmacology",
            bio: `Trisha Dowling is a veterinarian and professor of veterinary clinical pharmacology at the Western College of Veterinary Medicine. She graduated from Texas A&M in 1987 followed by a large animal rotating internship at North Carolina State. This was followed by 2 years of practice in Ohio and North Carolina, the latter a great source of humorous teaching stories. After a large animal medicine residency and Master’s at Auburn University, she became a board certified by the American College of Veterinary Internal Medicine and the American College of Veterinary Clinical Pharmacology. In 1993, she came running away to Saskatoon for a short time, but met and married a local guy so has been here ever since. Given US politics, she’s glad that she did. The WCVM mostly pays her to teach clinical pharmacology, but in 2010 she snuck the first mindfulness based stress reduction course in to a veterinary school curriculum for credit – all without mentioning the words “yoga” or “meditation”. She is the founder and co-director of the Canadian global Food Animal Residue Databank (CgFARAD) and does research on drug residues in horses and food animals. She has received numerous teaching awards including the Norden Distinguished Professor, the UofS Provost’s Teaching Award, the UofS Master Teacher’s Award and the American Association of Veterinary Pharmacology and Therapeutics Outstanding Teacher Award.`
          },
          {
            name: "Dr. Tessa Baker",
            role: "One Health Panelist",
            bio: `Dr. Baker completed a Bachelor of Science majoring in Animal Biology at Thompson Rivers University in Kamloops, BC in 2006 and graduated with a DVM from the Western College of Veterinary Medicine at the University of Saskatchewan in 2010. After graduation in 2010, she worked in both rural mixed animal and urban companion animal practice in Alberta for 6 years. She has always had an interest in the interrelationship between people, animals and the environment and access to veterinary care. Between university years and during short career breaks, she pursued this interest on a volunteer basis, traveling to Kenya with Global Vision International and to Laos with Veterinarians Without Borders Canada. To further explore this interest, she completed a Masters of Veterinary Science in 2018 at the University of Calgary Faculty of Veterinary Medicine (UCVM). Her thesis evaluated the impacts of the provision of subsidized veterinary services in five remote northern Indigenous communities on dog health and welfare and community concerns about dogs. Since completing her masters, she worked from 2018-2021 at the UCVM promoting and advancing education and research in One Health, globalization, and Indigenous engagement and cultural awareness. In June 2021 she successfully wrote the American College of Veterinary Preventive Medicine board exams to become a Diplomate of the ACVPM. She is now a Postdoctoral Associate at the UCVM working on a number of projects associated with access to veterinary care, dog population management in Indigenous communities, and improving diversity and equity in the veterinary curriculum and profession. She is currently working on understanding the stressors that veterinary service providers (vets, vet students, vet technicians) may encounter when delivering preventive care in remote communities and identifying the types of preparation and resources required to mitigate stressors and optimize respectful patient and client care. She is also developing an animal health program in partnership with a local First Nation that will span all 4 years of the DVM curriculum and see veterinary students work collaboratively with community members around animals and animal health.`
          },
          {
            name: "Dr. Kelsey Spence",
            role: "One Health Panelist",
            bio: `Kelsey Spence is an Assistant Professor in Epidemiology and One Health in the Department of Population Medicine at the Ontario Veterinary College, University of Guelph. She received her BSc from Trent University in 2014 and PhD from the University of Guelph in 2017. Prior to returning to OVC, she held positions as a postdoctoral researcher at the Royal Veterinary College in London, England, and as a mathematical modeller at the Public Health Agency of Canada.
Dr. Spence’s research program explores the use of biosecurity and infection control practices among animal and human populations. She is particularly interested in how disease dynamics and the use of biosecurity measures are influenced by socio-cultural factors. She integrates epidemiological, sociological, and mathematical approaches to identify and communicate optimal risk reduction strategies to ultimately improve disease preparedness.`
          },
          {
            name: "Janelle Jiminez",
            role: "One Health Panelist",
            bio: `Janelle comes from a diverse professional background that focuses on research and business. In 2011, she completed her Bachelor of Science at the University of Alberta that specialized in Cell Biotechnology and in 2016 completed her MSc in Animal Science that investigated reducing intestinal inflammation through the supplementation of fiber and wheat bran, using the mouse as a model of the human intestine. In addition to her formal schooling, Janelle has also worked in Scientific Sales, and has worked with pharma under the quality assurance umbrella. In 2017 she began working with Livestock Gentec as a Research Coordinator. After 5 years coordinating research projects aimed at improving the health of livestock animals using genetic techniques, Janelle began working with the Antimicrobial Resistance (AMR) – One Health Consortium as a coordinator, and now holds the role of the Consortium Manager. As the Manager, Janelle manages 32 research projects by providing budgetary support, research support and resources to project leads, creates collaborative opportunities for the consortium members, and provides funding opportunities for researchers. In 2022, Janelle completed a Masters in Business Administration from the Alberta School of Business, and aims to apply her knowledge and network towards creating commercialization opportunities for academic researchers and engaging with the AMR stakeholders in government and industry to improve the health of humans, animals, and the environment. In her career she has published 8 peer-reviewed articles and has over 300 citations from her research. She also enjoys taking part in events that expand her scientific network and give her the opportunity to learn and engage with her peers.`
          },
          {
            name: "Dr. Murray Gillies",
            role: "Anti-Microbial Resistance",
            bio: `Dr. Murray Gillies grew up on his family’s dairy farm in Sussex, New Brunswick. He obtained his undergraduate degree in agriculture and animal science from the Nova Scotia Agricultural College before completing his Doctor of Veterinary Medicine degree from the Atlantic Veterinary College in Prince Edward Island. After graduating, Dr. Gillies spent two years in New Zealand in a dairy focused clinic before moving back to New Brunswick where he worked for the Government of New Brunswick for 5 years in large animal practice. In September 2018, he joined the veterinary pharmaceutical company Vetoquinol as a technical services veterinarian, where he worked for 4.5 years. Dr. Gillies is a past president of the Canadian Association of Bovine Veterinarians and the current District 12 director for the American Association of Bovine Practitioners. He is also a member of the Canadian Animal Health Surveillance System and the Canadian Antimicrobial Network. He is currently working on a Master’s in health management and public health at the Atlantic Veterinary College with a project focusing on antimicrobial use on dairy farms. Dr. Gillies was the dairy subject matter expert for the Canadian Veterinary Medical Associations Stewardship of Antimicrobial use by Veterinarians Initiative (SAVI) in 2018 and 2022. He remains very active in the day-to-day operations of their dairy farm, where they have implemented many of the SAVI recommendations and guidelines successfully, including zero-zero calf care, selective dry cow therapy, and following the prudent use guidelines for treatments when necessary. He is very passionate about the Canadian bovine veterinary, dairy, and agricultural sectors. He loves discussing dairy practice, bovine veterinary medicine, and science in general and can be reached to discuss these topics at any time. His other interests include video games, anime, nature, hiking, and history.`
          },
          {
            name: "Dr. Valerie Macdonald",
            role: "Oncology",
            bio: `Dr. Valerie MacDonald is a native of Pictou NS and received her Bachelor of Science degree from the University of Toronto. She received her DVM degree at the Atlantic Veterinary College, University of Prince Edward Island in 2000. She practiced in Sun City, Arizona for 2 years in a small animal clinic. She completed a residency in Medical Oncology at the University of Wisconsin-Madison and became a Diplomate of the American College of Veterinary Medicine (Oncology) in 2005. She stayed an additional year at UW as a clinical instructor in Oncology. In 2006, Dr MacDonald moved back to Canada, accepting a position as Associate Professor in Medical Oncology at the Western College of Veterinary Medicine (WCVM) at the University of Saskatchewan. Dr MacDonald established the first medical oncology service and residency training program at the WCVM. Her current research involves using radioimmunotherapy for osteosarcoma.`
          },
          {
            name: "Dr. Ryan Llera",
            role: "Companion Animal Medicine",
            bio: `Dr. Ryan Llera knew he wanted to be a veterinarian from the age of 16 when a cat and a veterinarian changed his life. Growing up in Miami and after finishing his undergraduate degree at the University of Florida, he found himself surrounded by wheat fields and a pig farm going to vet school in Illinois. After graduating and returning to south Florida for an internship and associate position for a few years, he made one of his smartest moves and married a Canadian before moving to Ontario. Finally settling in Kingston since 2011, he is currently the senior veterinarian at Kingston Veterinary Clinic with a special interest in surgery. Outside of work, he spends time with his wife and daughter and enjoying camping, dog agility, and gaming. He writes an occasional column for the local Kingstonist news site and in the past has contributed to blogs curated by the OSPCA, Dr. Andy Roark, and Miss Edie the Pug.`
          },
          {
            name: "Dr. Beverly McEwen",
            role: "Pathology",
            bio: `Dr. McEwen graduated from the Ontario Veterinary College, University of Guelph. After a year in practice, she returned to OVC, completed a Master’s degree and PhD in veterinary pathology and became board-certified by the American College of Veterinary Pathologists. She is a full member of the American Academy of Forensic Sciences, has been a member of the International Veterinary Forensic Sciences Association since its inception and completed 2 terms on the IVFSA Board of Directors. Dr. McEwen is one of 8 Founding Fellows of Veterinary Forensic Pathology within the ACVP and has chaired several committees for the IVFSA and the American Academy of Forensic Sciences, Academy Standards Board, establishing standards for veterinary forensic postmortems. She is on the editorial board of the Journal of Forensic Sciences, the official journal of the American Academy of Forensic Sciences. She is an invited speaker on veterinary forensic pathology at national and international conferences and has authored or co-authored journal articles on topics in veterinary forensic pathology in the Journal of Forensic Sciences, Forensic Medicine, Science, and Pathology and Veterinary Pathology. She was guest associate editor for the September 2016 issue of Veterinary Pathology, entirely devoted to veterinary forensic pathology, a first for any veterinary journal. Several chapters she has written on the pathology of asphyxia and drowning are published in the 2 volume text Veterinary Forensic Pathology.`
          },
          {
            name: "Dr. Victoria Bowes",
            role: "Poultry Medicine",
            bio: `Dr. Victoria Bowes has worked at the Provincial Veterinary Diagnostic Laboratory in Abbotsford, BC since 1989 as a specialist pathologist with expertise in Avian Pathology. Her diagnostic caseload involves disease investigations in all species of birds (wild, pet, zoological and poultry). Dr. Bowes also co-developed the BC Ministry of Agriculture’s Small Flock Poultry Health Extension Program and has delivered over 150 poultry health workshops to both small flock owners and non-poultry veterinary colleagues. Dr. Bowes is a diplomat of the American College of Poultry Veterinarians (ACPV) and was also the inaugural chair of the Small Flock Committee of the American Association of Avian Pathologists (AAAP). Dr. Bowes has been a key player in 5 outbreaks of Notifiable Avian Influenza in BC’s Fraser Valley and is an internationally recognized expert in AI in poultry. She recently established a mobile veterinary practice specializing in small flock poultry medicine.`
          },
          {
            name: "Dr. Karin Orsel",
            role: "Dairy Medicine",
            bio: `Dr. Orsel completed her DVM at the Utrecht University in 1996 and she started to work as a veterinarian in several veterinary practices in The Netherlands. In February 1997 she started her job at the ambulatory clinic of the Department of Farm Animal Health in Utrecht. After being actively involved in an epidemiologic study during the epidemic of foot and mouth disease in 2001, she started her PhD on this topic from February 2002-February 2007. She obtained a MSc and PhD degree in veterinary epidemiology and economics in 2004 and 2007. She joined UCVM in February 2008, with a main focus on Epidemiology and Infectious Diseases of Cattle. In her capacity as epidemiologist, she is often a member of a multi-disciplinary teams to tackle complex health challenges for ruminants.`
          },
          {
            name: "Dr. Shane Bateman",
            role: "One Health Panelist",
            bio: `Shane Bateman DVM, DVSc, Diplomate ACVECC graduated from the Western College of Veterinary Medicine, in Saskatoon, in 1991. He worked in rural mixed animal practice prior to completing a small animal internship in 1993-94 and residency (and DVSc degree) in Emergency/Critical Care in 1994-97 at Ontario Veterinary College. Shane was a clinical track faculty member at The Ohio State University from 1998-2008 (achieving Professor-Clinical rank in 2008) developing programs in E/CC and Community Practice, a rotating small animal internship-training program, and the Human-Animal Bond. Since returning to Canada in 2009, Shane has been active at the Ontario Veterinary College- he was founding director of the Hill’s Pet Nutrition Primary Healthcare Centre, but rejoined the faculty in E/CC at OVC in 2014 as an Associate Professor. Shane has a number of clinical interests (pain management, fluid therapy, hemostasis) and has authored a number of peer-reviewed journal articles and chapters in popular textbooks. Shane is also passionate about the role of communication in the veterinarian-patient-client relationship and enhancing the human-animal bond in communities with inadequate access to veterinary care. He was the Chair of the Board of the Guelph Humane Society from 2011 to 2021 and has been a driving force behind construction of a new $10M shelter that opened in March 2021 and the Guelph Cat Population Taskforce initiative. In addition, Shane was the Regional Veterinary Director for Community Veterinary Outreach from 2011-2021- a charity that provides free preventive veterinary care for pets whose owners are homeless or at risk of homelessness using a One-Health delivery model. He also participated in a number of initiatives that deliver preventive care at low cost to First Nations communities in SW Ontario from 2012-2020. He was passionate about involving veterinary students in all of these activities. It was this passion that helped him to advocate for creation of a new learning pathway at OVC. The Kim & Stu Lang Community Healthcare Partnership Program, was funded by an $11M gift from Kim & Stu Lang to OVC in 2019 that will ensure that DVM and graduate students graduating from OVC will have acquired the skills, values, confidence and cultural awareness to deliver veterinary services of the highest possible standard to vulnerable animals and people in diverse inadequately serviced communities and in environments that are poorly resourced. Shane served as the interim veterinary director of the program from 2020-2022 and was responsible for the overall vision of the program and developing a comprehensive curricular proposal for OVC. During his sabbatical leave in 2022, Shane completed a Master’s degree in Veterinary Forensic Science and hopes to broaden student learning of this important animal welfare discipline at the college. He is currently an Associate Professor in the Department of Clinical Studies at the Ontario Veterinary College and returned to practicing as an Emergency/Critical Care specialist in the Companion Animal Medical Complex at OVC’s Health Sciences Centre in 2023.`
          },
          {
            name: "Laura Zehr",
            role: "One Health Panelist",
            bio: `Laura Zehr is a current M.Sc. student at the University of Guelph in the Department of Population Medicine. Laura has held a wide range of positions related to animal health spanning an even wider range of species. Throughout her experiences, she has seen how connecting with people can make a difference in the health of communities, environments, and animals within them. Currently, her thesis research builds on work done by the Canadian Animal Health Surveillance System (CAHSS) to further develop a tool for the use of a One Health approach to a variety of issues. Outside of school and work, she enjoys exploring the amazing landscapes that Canada has to offer and is very grateful for her pair of good-natured cats who have accompanied her and her partner on several multi-province road-trips.`
          },
          {
            name: "Dr. Jordan Woodsworth",
            role: "One Health Moderator",
            bio: `Dr. Jordan Woodsworth is a small animal clinician who graduated from the WCVM in 2008. In 2012, she returned to the WCVM to start the Wellness and Preventive Medicine program in the teaching hospital, and to spearhead the Northern Engagement and Community Outreach (NECO) program. In 2023 Jordan completed a PhD in community and population health which allowed her to engage in collaborative research with members of a northern Saskatchewan community she has served through the NECO program for almost a decade. Jordan’s primary role is now as Director of NECO, and she continues to explore new ways to bring awareness to animal health and welfare inequities in Canada with an ultimate goal to devise creative, community-led solutions to improving access to animal health and welfare services. Jordan continues to learn from colleagues and mentors about how to foster and develop anti-racist, anti-oppressive and anti-colonial environments within veterinary medicine and is playing a key role in development of WCVM’s anti-racism strategy. Outside of work, Jordan is married to her highschool sweetheart and is a mum to two amazing kids and a lovely dog. She loves being in her garden or at the lake, travelling with her family and friends, crafting, and cooking and eating amazing food.`
          }
        ]
      }
    ]
  },
  {
    id: "symposium-2021-2022",
    season: "2021 - 2022",
    title: "National Pre-Veterinary Symposium",
    dateRange: "Date: March 4 - 6, 2022",
    description:
      "Welcome to our Symposium Speaker Lineup! Each Sunday we will release more profiles for the presenters appearing at the March 2022 CPVMA/ACPMV Symposium.",
    highlights: [
      "Our Guest Speakers",
      "Welcome to our Symposium Speaker Lineup!",
      "Each Sunday we will be releasing more speaker profiles for those who will be presenting at the March 2022 CPVMA.ACPMV Symposium."
    ],
    days: [
      {
        id: "march-4-2022",
        label: "",
        date: "March 4, 2022",
        theme: "",
        speakers: [
          {
            name: "Dr. Marie Holowaychuk",
            role: "Keynote Speaker",
            bio: `Dr. Marie Holowaychuk is a board-certified small animal emergency and critical care specialist and passionate advocate for veterinary team wellbeing. She lives in Calgary and travels worldwide as a speaker, consultant, and locum. Marie has spent more than 15 years practicing emergency and critical care medicine in academic and private referral hospital settings. Outside of veterinary practice, Marie is a certified yoga and meditation teacher, and she facilitates wellness workshops and retreats for veterinary clinics or organizations and offers individual or group wellbeing training for veterinary teams. Marie has Compassion Fatigue Training from the University of Tennessee School of Social Work, as well as Mental Health First Aid Training from the Mental Health Commission of Canada and Applied Suicide Intervention Skills Training from the Centre for Suicide Prevention. Marie is also a certified life coach, writes a monthly blog and e-newsletter on pertinent issues related to veterinary wellness. She has authored dozens of articles and recorded a multitude of podcast interviews related to personal and professional wellbeing and recently launched her own podcast called “Reviving Vet Med”. When Marie is not working, she enjoys spending time with her toddler, practicing yoga, hiking in the Rocky Mountains, and listening to podcasts. She also has a soft spot for reality TV and has yet to miss a season of Survivor. For more information, please visit www.marieholowaychuk.com or follow Marie on Facebook (@DrMarieHolowaychuk), Twitter (@DrMHolowaychuk), LinkedIn (@DrMarieHolowaychuk), or Instagram (@MarieHolowaychuk).`
          }
        ]
      },
      {
        id: "march-5-2022",
        label: "",
        date: "March 5, 2022",
        theme: "",
        speakers: [
          {
            name: "Dr. Louis Kwantes",
            role: "The Canadian Veterinary Medical Association President",
            bio: `With an educational background of high school in Japan and college in Iowa, and a residency background that did not fit the standard mould for applicants to OVC nor WCVM, Dr. Kwantes remembers well the angst of applying for veterinary school. Having hopes dashed after his first application and interview, he was granted an interview again and after his second attempt was surprised and delighted with an offer of admission to OVC, from where he graduated in 1987. His first job as a vet was in beautiful Goderich, Ontario in a mixed animal practice. Since then he completed a Masters degree in Tropical Veterinary Medicine and has had more than 30 years of awesome veterinary experiences in Canada and internationally. He is a member of the Alberta Veterinary Medical Association, and over the last 15 years served the ABVMA in a number of capacities including a term as president in 2015-16. Dr. Kwantes was the Alberta representative on the Canadian Veterinary Medical Association council board for several years and is now the CVMA President. He enjoyed teaching a reptile and amphibian class for the Animal Health Technology course at NAIT for about ten years and, with all the things he has been privileged to see, also wrote a book of short stories entitled “Catfight in the Kitchen.” All of this information probably matters much less than the fact that he loves working with pets and with people, and feels honoured to share in the bond of trust between pets and their caretakers. Dr. Kwantes has three grown children (an oboist, a dentist, and a veterinary student) and lives in Sherwood Park with his wife and and one remaining pet – a lucky rescue cat.`
          },
          {
            name: "Dr. Heather Reid",
            role: "Wildlife Medicine",
            bio: `Dr. Heather Reid is the head veterinarian at Toronto Wildlife Centre (TWC) and staff veterinarian at the Toronto Zoo. She is also president and co-founder of Animal Experience International, which matches people who want to make a difference, with wildlife organizations around the world. Dr. Reid graduated from the Ontario Veterinary College at the University of Guelph. Her interest in wildlife conservation led her to TWC where she has been helping sick, injured and orphaned wild animals for 20 years. At TWC Dr. Reid oversees a busy wildlife hospital that admits more than 6,000 patients each year, representing over 270 species of native wildlife. Dr. Reid is also a part-time vet at the Toronto Zoo, helping care for a wide range of animals. Fun fact: despite the hundreds of exotic species she works with, Dr. Reid’s favourite animal is still her dog Cooper, an adorable pug cross.`
          },
          {
            name: "Dr. Ian Barker",
            role: "Pathology",
            bio: `Ian Barker is a retired University Professor Emeritus of pathology and wildlife diseases at the Ontario Veterinary College, University of Guelph and the founding Director of the Ontario/Nunavut Region of the Canadian Wildlife Health Cooperative. In collaboration with colleagues at the Toronto Zoo he established an ongoing graduate programme in Zoological Medicine jointly offered by OVC and the Zoo. He is an OVC DVM graduate (1968) who, as a Fellow of the Medical Research Council of Canada obtained an MSc in parasitology at OVC (1970), and a PhD at the University of Melbourne, Australia (1974) for studies on the pathogenesis of enteric parasitism. He was wildlife pathologist at Melbourne before returning to OVC in 1975. For over 35 years he taught DVM, science and graduate students Veterinary Anatomic Pathology, Comparative Pathology, Wildlife Diseases/Zoonoses, Zoological Medicine; did general veterinary and wildlife diagnostic work; and carried out research and mentored graduate students. He contributed heavily to the development and introduction (2000) of a competency based curriculum at OVC. Throughout his career he was involved in surveillance for and research on problems potentially impacting free-living and captive wildlife, domestic animals, and human beings, such as environmental contamination, Lyme Disease, avian botulism, Newcastle Disease of birds, White Nose Syndrome of bats, West Nile virus and Highly Pathogenic Avian Influenza, many of which are ‘emerging diseases’, or are likely to be affected by climate change. Interacting with government agencies responsible for wildlife, the environment, agriculture, and public health, he practiced ‘One Health’ for decades before the term was coined. His over 30 graduate students, from Canada, the USA, Australia, Spain, Norway and Kenya (some now retired), are academics; zoo and wildlife veterinarians; diagnostic pathologists; federal government biologists, research scientists and epidemiologists; managers in the pharmaceutical industry, government agencies and NGOs; and veterinary practitioners.

He co-edited books on Infectious Diseases of Wild Mammals, on the history of the Canadian Army Veterinary Corps and the history of the OVC. As well he is an author/co author of a number of book chapters on veterinary gastrointestinal pathology and wildlife diseases, and over 150 scientific publications on issues involving vertebrates from fish to mammals, and on vector ecology and epidemiology of Lyme Disease. In addition, he has given numerous presentations at scientific conferences and continuing education sessions. His contributions to the fields of wildlife diseases, veterinary pathology, laboratory medicine and veterinary education have been recognized by awards at the university, national and international level.

In retirement, his avocations include family history, nature photography, and application of the culinary arts (he cooks his hamburgers right through). His motto is “If you don’t look, you won’t find”. https://www.researchgate.net/profile/Ian-Barker-3`
          },
          {
            name: "Dr. Tiago Afonso",
            role: "Cardiology",
            bio: `Before joining the Western College of Veterinary Medicine (WCVM)’s faculty, Dr. Afonso was a senior lecturer in equine internal medicine at New Zealand’s Massey University and at the University of Adelaide in Australia. Prior to that, he worked in a busy private practice during a foaling season in the state of Victoria, Australia. Some of Dr. Afonso’s duties at the WCVM include teaching veterinary students, working as a veterinary specialist at the College’s Large Animal Hospital, and doing research. Dr Afonso is originally from Portugal, and he graduated from the University of Lisbon (Portugal), with his veterinary degree. After this, he completed a Large Animal Internship at Ghent University in Belgium, and another one at the Ontario Veterinary College (University of Guelph). In 2016, he completed his PhD degree (equine cardiology) and a three-year residency program at the University of Georgia. During the same year, he also became a board-certified specialist in large animal internal medicine by the American College of Veterinary Internal Medicine (ACVIM). Dr. Afonso’s main clinical interests include the cardiovascular system, respiratory tract diseases, gastrointestinal emergencies, antimicrobial therapy, and critical care medicine, particularly the critically ill neonate.
During his free time, Tiago likes to escape civilization and go hiking and canoeing in the mountains. Tiago particularly enjoys spending time improving his skills in both landscape and wildlife photography.`
          },
          {
            name: "Dr. Jessica Law",
            role: "Swine Medicine",
            bio: `Dr. Jessica Law graduated from the Faculty of Veterinary Medicine at the University of Calgary. She joined Prairie Swine Health Services after graduation to pursue production animal medicine. In practice, Jessica enjoys working to improve herd health and performance through preventative herd health programs, reproduction, biosecurity, welfare assessments, as well as disease investigations. Her passions lie in pathology, epidemiology and theriogenology. Within the first two years of practice, she was introduced to the amazing breed that is the Kune Kune and sustains veterinarian-client-patient relationships with fantastic producers across Canada and the United States. Jessica is currently serving as the President of both the Western Canadian Association of Swine Veterinarians and the Canadian Association of Swine Veterinarians. In 2018, Jessica received the Rising Star Award at the Alberta Pork Congress and in 2020 she received Young Veterinarian of the year from the ABVMA.`
          },
          {
            name: "Dr. Ryan Appleby",
            role: "Radiology",
            bio: `Ryan Appleby is an Assistant Professor of Diagnostic Imaging. He completed veterinary school and a rotating internship at OVC. He then completed an imaging internship in San Diego at VICSD and a residency in diagnostic imaging at NC State university in Raleigh North Carolina. He was boarded by the American college of veterinary radiologists in 2019 and rejoined the team at OVC at that time. His research interests include the use of artificial intelligence in veterinary imaging, clinical applications of advanced ultrasound technologies and imaging cancer in dogs and cats. He is passionate about teaching and started the website obivet.com in 2021 to provide global access to high quality veterinary educational content.`
          },
          {
            name: "Dr. Linda Jacobson",
            role: "Shelter Medicine",
            bio: `Linda received her veterinary degree in Pretoria, South Africa, in 1986 and subsequently completed a residency in small animal internal medicine and a PhD on the pathophysiology of virulent canine babesiosis. She completed the University of Florida Online Graduate Certificate in Shelter Medicine in 2015. She is part of the CVO Practice Advisory Panel and serves on the Humane Canada shelter accreditation standard committee . She joined the Toronto Humane Society in 2010, where she is currently Senior Manager: Shelter Medicine Advancement.`
          },
          {
            name: "Dr. Claire Card",
            role: "Theriogenology Specialist",
            bio: `Dr. Claire Card is a graduate of Cornell University where she earned 3 degrees (BSc, DVM, and PhD) and was a post – doctoral fellow. She is a full professor and clinician scientist at the WCVM, Univ. of Sask. She sees veterinary patients at the Vet Med Centre, has an active research program, and she instructs veterinary students in equine and companion animal reproduction, physiology and sustainable development. She has been working in partnership with the University of Saskatchewan, and Veterinarians without Borders (VWB) Canada since 2006. For the past 15 years has been working in a project in rural Uganda focussed on improving the livelihoods of impoverished HIV AIDS effected women and children. Yours, Dr. Card`
          },
          {
            name: "Dr. Dave McRuer",
            role: "Wildlife Health Specialist",
            bio: `Dave is a wildlife health specialist employed by Parks Canada and based at the Atlantic Veterinary College (AVC) in Charlottetown, PEI. In this role, Dave works on a broad range of wildlife health issues in national parks including disease surveillance and management, animal care and welfare, immobilization training and drug acquisition, and assisting individual parks with knowledge and expertise responding to wildlife health concerns. Prior to joining Parks Canada, Dave worked as a wildlife biologist with the PEI Division of Forests, Fish and Wildlife and as the Director of Veterinary Services at the Wildlife Center of Virginia. Dave earned a Master’s degree in ecology in 2001 from Carleton University, his DVM from the Atlantic Veterinary College in 2005 and is a Diplomate of the American College of Veterinary Preventative Medicine. Dave lives in rural PEI with his wife, two kids, and menagerie of animals. He is an active falconer and spends much of the fall and winter working with his goshawk.`
          },
          {
            name: "Angie Arora",
            role: "Veterinary Social Worker",
            bio: `Angie Arora is a registered Social Worker who has worked at the cross-section of the human-animal-bond since 2004, focusing on pet loss bereavement, veterinary wellness and equity issues within the industry. As a Certified Compassion Fatigue Specialist, Angie works with animal-care providers to foster wellness and address burnout, secondary trauma and compassion fatigue. She serves as the Board Secretary for the International Association of Veterinary Social Work, is the Research Chair for the International Association for Animal Hospice & Palliative Care and volunteers her time to address equity issues within veterinary medicine. She works with VetVine as a Virtual Pet Loss Facilitator and is the Lead Coach for their VETPeers Wellness and Professional Resiliency Coaching Program. She is a Professor with Seneca College’s Social Service Worker Program, where she was the principal investigator of a research study that developed guidelines for veterinary teams to better support clients through their pets’ end of life. In addition, Angie has developed and teaches a microcredential through Seneca aimed at improving the stress response for those working within veterinary and shelter medicine.`
          },
          {
            name: "Asadeh Behnam-Shabahang",
            role: "Veterinary Student EDI Panelist, WCVM Diverse",
            bio: `Asadeh (Azy) Behnam-Shabahang (she/her/hers) is of Persian descent but was born and raised in Germany and immigrated to Vancouver, Canada with her family at the age of eleven. Knowing the preconceived notions that follow long middle-eastern sounding names Azy likes to share that the literal translation of her name is ‘Freedom Honorable Nightingale’. As a newcomer, Azy also acknowledges that, however involuntary, many of her privileges have been afforded to her through the dispossession of the Indigenous Peoples in Canada.

Although Azy had known that she wanted to pursue a veterinary career since the age of sixteen, financial and family matters led to subpar attempts at post-secondary education after highschool. As such, in her early twenties, Azy decided to place her vet school pursuits on hold for the interim and was fortunate to find employment in the field of Wildlife Education and Rehabilitation. Throughout her nearly seven year career of predominantly creating and implementing grade-based wildlife education programs for elementary and high-school students Azy’s passion and confidence for her own education was reignited and led her to complete two associates degrees, both with distinction as well as a bachelor’s degree in Applied Animal Biology with honours, throughout her thirties. Finally at the ripe age of forty Azy finally achieved her life long (literally) goal of attending veterinary school, now of course also with a toddler in tow. Currently Azy is in her third year at WCVM. Aside from having (hopefully) gained what feels like an insurmountable amount of veterinary knowledge, Azy has also come to realize that our profession has much growing to do with respect to EDI in its curriculum and the culture of the veterinary field overall. In 2020 Azy initiated WCVM DIVERSE, the first EDI club at the WCVM, which she co-presides with her friend and classmate Charlie Wyatt-Swain.

Azy hopes to continue her involvement with the newly established Canadian Collective for Equity in Veterinary Medicine following graduation as well as extending vet services into underserved communities.`
          },
          {
            name: "Charlie Wyatt-Swain",
            role: "Veterinary Student EDI Panelist, WCVM Diverse",
            bio: `Charlie Wyatt-Swain is a 3rd year vet student at the WCVM. She completed her undergraduate degree in Animal Bioscience with a minor in Toxicology before applying to veterinary school. She currently lives in Saskatoon with her husband, daughter, and dog. Charlie is Inuit-Metis from the NunatuKavut community in Labrador and is particularly interested in how we can better assist remote Indigenous communities in regard to veterinary services and dog management.

Charlie has many roles at the WCVM including being Co-President/Co-Founder of WCVM DIVERSE, WCVSA and C/O 2023 Indigenous Representative, and WCVM Committee on Indigenous Engagement Student Representative. Her work has led to receiving awards such as the Diversity, Equity and Inclusion (DEI) Rising Leader Award from the Multicultural Veterinary Medical Association – MCVMA , an international organization that supports diversity within the veterinary profession.

In addition, Charlie is currently involved in a research project led by WCVM professor, clinical associate, and PhD candidate Dr. Woodsworth, focusing on dog management strategies for remote Indigenous communities within Saskatchewan.`
          },
          {
            name: "Juan Sebastian Orjuela",
            role: "Veterinary Student EDI Panelist, Latinx Veterinary Medical Association",
            bio: `Juan, otherwise known as “Juancho” was born in Bogota, Colombia, and raised there until 2001 when he and his family immigrated to Saint Paul, Minnesota, USA. Juancho attended the University of Milwaukee-Wisconsin from 2012-2017, where he graduated with a bachelor’s in biology and environmental sciences. Currently, Juancho is a fourth-year veterinary student at the Ontario Veterinary College in Canada. He is passionate about promoting diversity and inclusion in the veterinary profession. His veterinary interests include physical rehabilitation, ophthalmology, emergency medicine, practice ownership, and taking on other leadership roles.

“Creer es poder! – believe, and you will achieve!”`
          },
          {
            name: "Keisha Harris",
            role: "Veterinary Student EDI Panelist, Canadian VIBE Network",
            bio: `Keisha was born and raised in Oakville, Ontario and is currently a Phase three student at the Ontario Veterinary College (Go Opal Otters!). She spent four years on the West Coast in Kelowna completing her Bachelor’s of Science at the University of British Columbia. As a first-generation university student, pursuing a DVM degree felt out of reach for Keisha. Instead, she attended UBC for a degree in zoology with the hopes of working in wildlife conservation after graduation. That changed when she hosted a student honorary dinner for Temple Grandin. This was the first time she was introduced to the profession of veterinary medicine and with the encouragement of her peers changed her academic path.

Rejected on her first application to OVC, she took time off to explore different career paths. During this time she worked as a microplastics researcher for the Ministry of the Environment, an educator at the Toronto Zoo, a receptionist at the Toronto Humane Society and as a veterinary assistant in exotic and small animal practices. She was finally accepted to OVC on her 3rd application and is thrilled to be part of the Class of 2023. Her veterinary interests are always growing but for now include zoo animal medicine, One Health, and community medicine.`
          },
          {
            name: "Sarah Lokaisingh",
            role: "Veterinary Student EDI Panelist, OVC Diverse",
            bio: `Sarah is from Mississauga, Ontario. She did her BSc at the University of Guelph and is currently a second-year veterinary student at the Ontario Veterinary College. During her undergraduate degree, Sarah founded the University of Guelph Diversity and Culture club to provide a supportive platform for students from marginalized communities, and to educate students and faculty across campus. Representation in veterinary medicine has always been an important cause to Sarah Jane. She is currently the Co-President of OVC DIVERSE and alongside her team members, she hopes to ignite real change in the veterinary profession.

Sarah has worked at small animal clinics, barns, and mobile exotic zoos. Through her experience with various clubs, and volunteering with organizations like Best Buddies, she developed a passion for promoting inclusivity. Sarah hopes to combine her love for education with her passion for animals. She hopes to pursue a path in the field of veterinary communication.`
          }
        ]
      },
      {
        id: "march-6-2022",
        label: "",
        date: "March 6, 2022",
        theme: "",
        speakers: [
          {
            name: "Dr. Dayle Poitras-Oster",
            role: "Mixed Animal Practitioner with a Focus on Veterinary Medicine in Relation to Indigenous Communities",
            bio: `Dr. Dayle Poitras-Oster is a proud Métis woman from Rural Alberta. She grew up strongly connected to her Métis roots. Dr. Poitras did 3 years of a Bachelor of Science in biology at the University of Alberta Augustana campus and graduated from the Western College of Veterinary Medicine in 2021. She currently works in Drayton Valley AB as a mixed animal practitioner. Dr. Poitras has a passion for ambulatory practice and public health, her goal is to give back to and provide service to Indigenous communities.`
          },
          {
            name: "Dr. Kim Murphy",
            role: "Small Animal Surgeon",
            bio: `Dr. Kim Murphy has been a board-certified small animal surgeon with the American College of Veterinary Surgeons since 2007. She graduated from the DVM program at the University of Guelph in 1998. Following three years in small animal emergency and mixed practice, Dr. Murphy completed a one-year rotating internship in Small Animal Medicine and Surgery followed by a three-year residency program in Small Animal Surgery. She also holds a Doctor of Veterinary Science degree from the University of Guelph. Dr. Murphy has worked as a small animal surgeon in private practice and as a staff surgeon at the Ontario Veterinary College. In 2011 she founded her first mobile surgery practice and subsequently opened a referral hospital in the Guelph Area, both of which became very successful. Canada Mobile Veterinary Surgery represents a return to Dr. Murphy’s passion – providing exceptional surgical care to patients in their regular veterinary clinics and supporting the veterinarians who care for them every day.`
          },
          {
            name: "Dr. Fernando Salgado-Bierman",
            role: "Poultry Veterinarian",
            bio: `Dr. Salgado-Bierman graduated from the Ontario Veterinary College in 2016. After graduating, he started as a Hatchery Veterinarian at Maple Lodge Hatcheries Ltd., and is now Manager of Veterinary and Breeder Services. Dr. Salgado-Bierman has served as past president of the Ontario Association of Poultry Veterinarians. He is also the broiler breeder representative to the poultry network of the Ontario Animal Health Network (OAHN). As well, he participates in several industry advisory groups.`
          },
          {
            name: "Dr. Veronique Lepage",
            role: "Aquatic Veterinarian",
            bio: `Dr. LePage identifies as Acadian, originally from the East Coast of Canada, New Brunswick. She came to Ontario in 2000 for University with her partner. They now have two lovely children, three chickens and a Sphinx cat. Dr. LePage completed part of her undergraduate degree enrolled as a Pre-Medical student at the University of Western Ontario and the other part as a Animal Biology Student at the University of Guelph. She earned her veterinary degree at the Ontario Veterinary College and MSc in Comparative Pathology at the University of Guelph/OVC Pathobiology. Dr. LePage received her Aquatic Animal Medicine certificate and training through the University of Florida along with completing externships at the Vancouver Aquarium, Georgia Sea Turtle Center, and Georgia Aquarium. This allowed her to become certified as a World Aquatic Veterinary Medical Association (WAVMA) Aquatic Veterinarian. Dr. LePage currently works as the veterinarian for Ripley’s Aquarium of Canada and owner of LePage Aquatic Veterinary Services which currently caters to aquaculture clients exclusively. Dr. LePage has previously treated pet fish but is proud to announce that she has since trained local practitioners through the OVMA to take on these clients within their districts. In her spare time Dr. LePage loves to forage for mushrooms with her kids and practice archery. She also enjoys SCUBA diving and karate.`
          },
          {
            name: "Lesli Bisgould",
            role: "Lawyer with a Focus on Animal Welfare Law",
            bio: `Lesli Bisgould has been a lawyer in Toronto for almost thirty years. For ten of those years, she ran Canada’s first animal rights law practice. She has lectured widely on the topic, across North America and Australia. In 2011, Lesli wrote the first Canadian law text on the topic, Animals and the Law (Irwin Law). She created and, for many years taught, Introduction to the Animals and the Law at the law school of the University of Toronto. Lesli maintains a strong interest in this burgeoning field, while her current full time work is in the field of poverty and human rights law. More importantly, she appears in a Bon Jovi video.`
          },
          {
            name: "Dr. Eric Maguet",
            role: "Bovine",
            bio: `Dr. Eric Maguet graduated from the WCVM in 2007. After graduation he joined the Beausejour Animal Hospital where he has stayed ever since. He purchased part of the practice in 2008 and has helped grow it from only three veterinarians to the fourteen vet practice that it is today. He spends the vast majority of his time practicing dairy herd health medicine, beef production and performing embryo transfer. This past year he became President of the Western Canadian Association of Bovine Practitioners. In his spare time Dr. Maguet is a full-time hockey Dad to four children, builds furniture, and raises sheep.`
          },
          {
            name: "Dr. Ellen Williamson",
            role: "EDI Panelist",
            bio: `Dr. Ellen Williamson earned her DVM degree from Ontario Veterinary College, following which she stayed on an additional year as a small animal intern. She then completed a combined Master’s of Science and residency program in anaesthesia and analgesia at the Virginia-Maryland College of Veterinary Medicine in Virginia. After spending a year as a clinical instructor at University of Wisconsin-Madison, she returned to Ontario to join the Anaesthesia team with VCA Canada in 2018. She has a special interest in anaesthetic equipment and locoregional anaesthesia.

When not at work she enjoys fencing, cycling and spoiling her cats rotten.`
          },
          {
            name: "Dr. Emilia Wong Gordon",
            role: "EDI Panelist, Shelter Medicine",
            bio: `Emilia Wong Gordon, DVM, DABVP (Shelter Medicine Practice)

Dr. Gordon obtained her DVM from the University of California, Davis in 2005 and currently serves as the Senior Manager, Animal Health for the British Columbia Society for the Prevention of Cruelty to Animals where she provides animal health support, training, and oversight to 36 sheltering branches province-wide. She also teaches veterinary students, participates in community partnerships and outreach, and is co-founder of the Canadian Collective for Equity in Veterinary Medicine- Collectivité Canadienne pour l’Équité en Médecine Vétérinaire (CCEVM-CCEMV).

Dr. Gordon’s clinical interests include infectious disease, community medicine, internal medicine, and behaviour. She has co-authored publications on shelter infectious disease, animal welfare epidemiology, and shelter feline behaviour and welfare. She believes that cross-sector collaboration with a One Health emphasis is essential to the shared goals of the animal welfare, veterinary, and human health professions.`
          },
          {
            name: "Dr. Izzy Hirji",
            role: "EDI Panelist",
            bio: `Dr. Izzy Hirji is a Doctor of Veterinary Medicine with an honours B.Sc. in Zoology (University of Guelph, Ontario Veterinary College). He has a background in both domestic and wildlife medicine, pathology and conservation, and has trained at several zoos and sanctuaries in this capacity both in North America and abroad. He currently works as a locum vet around the downtown Toronto area with a special interest/expertise in exotics and runs a mobile practice for exotic companion animals, wildlife centres and animal sanctuaries. In addition, he works with several local and international primate sanctuaries and is actively involved in wildlife conservation initiatives in Africa. He was recently featured on the 2020 Nat Geo Wild series “Jungle Animal Rescue” and on the 2017 Nat Geo Wild documentary “Chimp School”. He is extremely passionate about environmental conservation and One Health. Asides from veterinary medicine, he is also an avid photographer, cyclist and web designer, and loves to travel to tropical exotic places (beaches and forests are preferred, of course).`
          },
          {
            name: "Dr. Jesse Benjamin",
            role: "EDI Panelist, Indigenous Health and Wellness",
            bio: `Dr. Benjamin graduated from AVC in 2007 and worked in small animal medicine (with a special interest in exotics) for 10 years, then worked exclusively in shelter medicine for another 3 years. In 2020 she made the transition from Veterinary Medicine to the Fitness and Wellness work. She is the founder of Two Eyed Wellness and is the Active Living Community Coordinator for the Mi’kmaw Native Friendship Centre. She is a mother of 4, a fitness enthusiast, artisan, cultural consultant, and Fancy Shawl Dancer.`
          },
          {
            name: "Dr. Jordan Woodsworth",
            role: "EDI Panel Moderator",
            bio: `Dr. Jordan Woodsworth is a general veterinary practitioner and PhD candidate, and part of the Wellness and Preventive Medicine team at the Western College of Veterinary Medicine’s Veterinary Medical Centre. She is a 2008 graduate of the WCVM and joined the staff of the VMC in 2012 to start the Wellness and Service Learning programs. Jordan’s diverse professional interests include community engagement and social accountability in the veterinary profession, clinical communications, interprofessional work in the area of animal welfare, and elevating the quality and perception of well care for cats and dogs. Jordan’s clinical and research work in Northern Saskatchewan is an area of true passion, and she strives to use her role as a veterinary educator to provide opportunities for veterinary learners and practitioners to develop and practice culturally safe approaches to veterinary care. Her hope is that her work contributes to improved access to care for animals everywhere, and particularly in Northern, remote and Indigenous communities in Canada. Jordan’s personal interests include lake time with her husband, 2 kids and dog, travelling and enjoying nature, and eating and cooking amazing food.`
          },
          {
            name: "Dr. Mouhamadou Diaw",
            role: "EDI Panelist, Theriogenology",
            bio: `Mouhamadou Diaw, DVM, MS, Dipl. ACT is currently an associate professor in theriogenology at the University of Montreal. He graduated from the École Inter-États des Sciences et Médecine Vétérinaires in Dakar (Senegal) and worked for several years in mixed private practice in Senegal and in France. After spending a breeding season at Hagyard Equine Medical Institute, Lexington, KY, he completed a residency in theriogenology at the University of Florida, Gainesville, FL. After completing his residency, Dr. Diaw has been a lecturer in theriogenology at North Carolina State University, Raleigh, North Carolina. Dr. Diaw is particularly interested in advanced reproductive techniques. Dr. Diaw also sits on the Board of Directors for the non-profit organization, Canadian VIBE (Veterinary professionals Instilling Black Excellence) Network.`
          },
          {
            name: "Dr. Michelle Lem",
            role: "Community Outreach",
            bio: `Dr. Michelle Lem graduated from the Ontario Veterinary College (OVC) in 2001, and founded Community Veterinary Outreach in 2003, a registered charity that improves the health of people and their pets experiencing homelessness and housing vulnerability through a “One Health” model of care. By offering human health services and health education alongside preventative veterinary care, Community Veterinary Outreach was the first of its kind to provide innovative access to both veterinary and human health care for at-risk populations. Community Veterinary Outreach has programs in 5 communities in Ontario, Winnipeg, Saskatoon, Vancouver, Kelowna, Canada, and Kansas City, USA.

Michelle has practiced companion animal medicine in New Zealand and Ottawa. From 2003 to 2009, Michelle provided behavioural consultations for companion animals on a referral basis; consulted for police and military canine units, from 2009 till 2011; and taught in the Veterinary Assistant and Technician programs at Algonquin College from 2004 till 2014.

Michelle received her MSc in 2012, studying the effects of pet ownership on street-involved youth. Her work and research have been published in peer-reviewed journals including the Journal of Sociology and Social Welfare, Anthrozoös, the Canadian Veterinary Journal, Canadian Journal of Public Health, Journal of Social Distress and the Homeless, Animals, and Preventive Veterinary Medicine.

In 2018 Michelle received her Master of Social Work from Carleton University, focusing on the link between human and animal violence, pet ownership among marginalized populations, wellbeing in the veterinary profession, and One Health approaches to intervention and practice. Michelle and her team developed the Animal Care Guidelines for Emergency Co-Sheltering and the Risk Assessment for Companion Animals in Domestic Violence.`
          },
          {
            name: "Dr. Christine Calder",
            role: "Veterinary Behaviourist, Cattledog Publishing",
            bio: `A graduate of Mississippi State University but native of New Jersey, Dr. Calder has lived and practiced veterinary medicine in both New Jersey and Maine for many years. In addition to general practice, Dr. Calder has worked at the San Francisco SPCA, Auburn University’s College of Veterinary Medicine and Louisiana State University’s School of Veterinary Medicine. Most recently, she was an Assistant Clinical Professor in Community Veterinary Services and Veterinary Behavior at Mississippi State University’s College of Veterinary Medicine. As a general practitioner, she always had an interest in animal behavior and in 2016, she finished a residency with the American College of Veterinary Behaviorists becoming a Diplomate with the American College of Veterinary Behaviorists (DACVB) in 2017. A past Director of Behavior Services at Midcoast Humane, Dr. Calder is currently the Cattle Dog Publishing Chief Behavior Officer and a Vets at Vin consultant. Dr. Calder’s has a special interest in shelter behavior, feline behavior, and shy/fearful dogs. She shares her home with 3 Rhodesian Ridgebacks, a black Lab, 2 French bulldogs, and a snake.

Christine D. Calder DVM DACVB`
          },
          {
            name: "Dr. John Tait",
            role: "Veterinary Business and Financial Consultation",
            bio: `Dr. John Tait graduated from the Ontario Veterinary College in 1986, received his MBA in 1995 from McMaster/London School of Business in Health Services Mgt. He also received a combined Master of Finance/Certified Financial Planner in 2001. He is a Certified Business Valuator and Certified in Mediation and Negotiation from Harvard. He has experience as a mixed and companion animal practitioner in private practice for ten years where he owned his own practices, in multi-unit corporate medicine as Vice President for Veterinary Centers of America while based in the US, and academia as Director of the Veterinary Teaching Hospital at OVC where he is still a part time faculty member. He was Managing Partner of the Ontario Veterinary Group, a practice consolidation group from 2002 until 2014. In 2009-2010 he was President of the American Animal Hospital Association. He currently owns his own consulting business, John Tait Veterinary Consulting. He is a private consultant to health care professionals in the areas of practice mgt. and transition, operations efficiency, valuation, and various aspects career and personal/business financial planning. He is active in the Veterinary Management Group organization as a facilitator and Treasurer and sits on the Board of Directors.`
          },
          {
            name: "Dr. Mary Jane Ireland",
            role: "Chief Veterinary Officer and Delegate to the World Organisation for Animal Health",
            bio: `The Chief Veterinary Officer for Canada and World Organisation for Animal Health (OIE) Delegate provides national leadership to ensure that Canada’s animal and veterinary public health infrastructure is positioned to effectively manage current and emerging disease threats in order to protect animal and human health and to maintain international trust in Canada’s inspection and certification systems in support of market access.

Dr. Mary Jane Ireland is the Executive Director of the Animal Health Directorate, Policy and Programs Branch at the Canadian Food Inspection Agency (CFIA). She is also the Chief Veterinary Officer (CVO) for Canada and the OIE Delegate for Canada.

Dr. Ireland graduated from the Ontario Veterinary College at the University of Guelph, with a degree in Veterinary Medicine and a post-graduate degrees in Veterinary Immunology and Business Administration. She began her career in a mixed animal practice in eastern Ontario.

In 2002, Dr. Ireland joined the Veterinary Drugs Directorate at Health Canada and held various positions, including Director General. In 2020, Dr. Ireland joined the CFIA as the Executive Director of the Animal Health Directorate.

As the Chief Veterinary Officer, Dr. Ireland leads Canada’s efforts to effectively manage current and emerging disease threats in order to protect animal health and human health, and to maintain international trust in Canada’s inspection and certification systems in support of market access.

As the OIE Delegate, Dr. Ireland represents Canada on the international stage, and plays an integral role in Canada’s participation in the OIE standard-setting process for the development and adoption of animal health standards and guidelines. In this role Dr. Ireland works to ensure that the standards are appropriately and consistently implemented in Canada. She is also responsible for notifying the OIE of reportable animal disease occurrences in Canada.`
          }
        ]
      }
    ]
  }
];
