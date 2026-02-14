export type SponsorTier = "Platinum" | "Gold" | "Silver" | "Bronze";

export type Sponsor = {
  name: string;
  tier: SponsorTier;
  season: string;
  description: string;
  logo: string;
  website?: string;
};

export const sponsors: Sponsor[] = [

  {
    name: "The Mortgage Coach",
    tier: "Platinum",
    season: "2024 - 2025",
    logo: "/sponsors-2024-2025/mortgage_coach.webp",
    description:
      `At The Mortgage Coach, we specialize in simplifying the path to homeownership for Canada’s medical professionals — from students and residents to practicing vets, dentists, and physicians.

We work with lenders who offer exclusive mortgage programs designed specifically for medical professionals, including low down payment options, no income verification during residency, and higher approval limits. Whether you’re buying your first home, relocating for your practice, or investing in real estate, we’re here to coach you through it.

About Us:
The Mortgage Coach is a leading Canadian mortgage brokerage, proudly headquartered in Toronto with agents located throughout Ontario. We’re known for our agent-led model, award-winning service, and a culture built on mentorship, education, and client success. Our team of licensed mortgage professionals is committed to offering tailored solutions, cutting-edge tools, and trusted advice — all with a human touch.

With expert guidance, personalized strategies, and a deep understanding of the unique financial journeys of medical professionals, The Mortgage Coach is your trusted partner — every step of the way.

Let us help you make smart, stress-free mortgage decisions so you can focus on what you do best — taking care of others.`
  },
  {
    name: "OzTREKK",
    tier: "Platinum",
    season: "2024 - 2025",
    logo: "/sponsors-2024-2025/oztrekk-logo-light-bkgrnd-transparent-1-1.webp",
    description:
      `If you’re interested in applying to vet school, OzTREKK can help you achieve your goals! As an official international representative for Australia’s top 3 AVMA accredited veterinary schools, OzTREKK has assisted thousands of Canadian students make their career dreams a reality. We’ve made it our mission to put students first, which is why we offer unparalleled, free services. We help every step of the way through applications to arrival in Australia, from your first questions to understanding how to use your degree in Canada. With the competitive nature of North American programs, there’s no reason not to keep you options open and start a free application! Australia offers diverse wildlife, state of the art facilities, amazing hands-on experience and so much more. Learn why Australia might be the best fit for you and speak with an OzTREKK student advisor today! Register here for a program guide and get started: https://study.oztrekk.com/oztrekk-registration-s/?utm_source=CPVMA2025`
  },
  {
    name: "Royal Veterinary College",
    tier: "Gold",
    season: "2024 - 2025",
    logo: "/sponsors-2024-2025/rvc-logo-2.webp",
    description:
      `The Royal Veterinary College (RVC), University of London is one of the world’s leading veterinary and biological science institutions, renowned for pioneering approaches to teaching, research and cutting edge clinical provision. The RVC is currently ranked as the #1 Veterinary School in the World (QS 2024).

Founded in 1791, the RVC was the first veterinary institution in the English speaking world and the driving force behind the establishment of the profession in the UK. Now based over two campuses, its Camden Campus (London) offers the buzz of being based in the heart of the nation’s capital; while in contrast, its Hawkshead Campus (Hertfordshire) offers a more rural experience on a 575 acre site in the English countryside. Both campuses offer its 2,500 students a friendly, supportive environment with state-of-the-art facilities.

The RVC offers a Veterinary Medicine (BVetMed) degree with global accreditations.`
  },
  {
    name: "Ross University School of Veterinary Medicine",
    tier: "Gold",
    season: "2024 - 2025",
    logo: "/sponsors-2024-2025/ross.webp",
    description:
      `The Ross University School of Veterinary Medicine (RUSVM), located on the beautiful island of St. Kitts, offers an accelerated pathway to earning a Doctor of Veterinary Medicine (DVM) degree in just 3.25 years. Founded in 1982, RUSVM is accredited by the American Veterinary Medical Association (AVMA) and has graduated over 6,000 veterinarians who are making a global impact. The curriculum focuses on hands-on learning, allowing students to work with more than 450 animals on campus and participate in clinical rotations at AVMA-accredited institutions across the U.S., Canada, and internationally.

RUSVM emphasizes the One Health approach, connecting animal, human, and environmental health through innovative research and education. Students can enhance their DVM with specialized training in public health, conservation medicine, or global animal health. The school is home to four research centers that focus on zoonotic diseases, ecosystem health, and veterinary education.

The campus boasts state-of-the-art facilities, including advanced surgery suites and anatomy labs equipped with the latest technology. Students benefit from small class sizes and a faculty committed to mentorship and success. With flexible start dates in January, May, or September, RUSVM supports diverse student needs and fosters an inclusive community.

Join a global network of alumni shaping the future of veterinary medicine and start your journey at Ross University School of Veterinary Medicine today!`
  },
  {
    name: "University College Dublin",
    tier: "Gold",
    season: "2024 - 2025",
    logo: "/sponsors-2024-2025/university_college_dublin-removebg-preview.webp",
    description:
      `The UCD School of Veterinary Medicine is the only school of Veterinary Medicine on the island of Ireland. Accredited by the European Association of Establishments for Veterinary Education (EAEVE), the Royal College of Veterinary Surgeons (RCVS) and the Veterinary Council of Ireland (VCI), the School’s MVB degree programme is one of only seven in Europe fully accredited by the American Veterinary Medical Association (AVMA). 

Its track record in education is second to none, and its excellence in teaching and learning, clinical and research work is internationally recognised. The work of the School is underpinned by a strong vision and mission; its ‘One Health, One Welfare’ strategy focuses on maintaining a flourishing Veterinary School, positively impacting animal and human health, animal welfare, and the environment. 

Veterinary Science at UCD has consistently ranked in the top 50 since the QS World University Rankings by Subject introduced Veterinary Science to the rankings in 2015, achieving its highest ranking of 23rd in the world in 2021.An integral part of the School, the UCD Veterinary Hospital offers a unique environment, providing a primary and referral service to the public and veterinary profession. The Hospital is equipped with cutting-edge, modern technology and services, allowing our team of internationally recognised experts to provide the best care possible to our patients whilst training the next generation of vets and vet nurses.
`
  },
  {
    name: "St. Matthew’s University",
    tier: "Silver",
    season: "2024 - 2025",
    logo: "/sponsors-2024-2025/smu-brandmark-outlined-purple.webp",
    description:
      `The goal of St. Matthew’s University School of Veterinary Medicine (SMUSVM) is to prepare our veterinary medical students to be skilled and caring veterinarians through our comprehensive 3.25-year Doctor of Veterinary Medicine (DVM) program. This supportive learning environment helps them develop the knowledge, abilities and commitment to lifelong learning that is necessary to successfully provide impactful care for patients and their families. Whether they choose to practice as a generalist or specialist in the field of veterinary medicine, our graduates demonstrate the ability to treat diverse animals and conditions, incorporate new knowledge and methods into their practice, and effectively adapt to the ever-changing professional environment.`
  },
  {
    name: "University of Glasgow",
    tier: "Silver",
    season: "2024 - 2025",
    logo: "/sponsors-2024-2025/glasgow-logo.webp",
    description:
      `Situated on a dedicated green field campus, within the city limits, the University of Glasgow, School of Biodiversity one health and Veterinary Medicine can provide students with a high class veterinary education though fantastic teaching facilities and access to our on-site small animal and equine hospitals and an ambulatory production animal service. Accredited by the Royal College of Veterinary Surgeons and the American Veterinary Medical Association our graduates can practice veterinary medicine around the globe.`
  },
  {
    name: "Petsecure",
    tier: "Silver",
    season: "2024 - 2025",
    logo: "/sponsors-2024-2025/petsecure_tag_en_cmyk.webp",
    description:
      `Petsecure is a comprehensive pet insurance product and supports the diverse needs of Canadian pet owners. Multiple plans help to cover accident and illness for unforeseen issues. Our affordable insurance plans for dogs and cats includes dental, behavioural, and alternative therapies at no extra cost! Pet Health Insurance protects veterinarians from the moral distress caused by taking actions that contradicttheir ethical commitments and moral values when pet owners are unable to bear the financial burden of animal health care on their own.`
  },
  {
    name: "Veterinary Emergency Clinic and Referral Centre",
    tier: "Silver",
    season: "2024 - 2025",
    logo: "/sponsors-2024-2025/vec-toronto-2024.webp",
    description:
      `The Veterinary Emergency Clinic and Referral Centre (VEC) is a full-service 24/7/365 emergency & specialty hospital located in beautiful downtown Toronto. Initially established as an afterhours ER facility over 50 years ago, the VEC has grown into a large multidisciplinary hospital offering a variety of specialty services including Anesthesia, Cardiology, Clinical Nutrition, Dentistry, Dermatology, Internal Medicine, Neurology, Ophthalmology and Surgery.`
  },
  {
    name: "Ontario Veterinary Medical Association",
    tier: "Bronze",
    season: "2024 - 2025",
    logo: "/sponsors-2024-2025/ovmalogo_fullcolour-1.webp",
    description: `Ontario Veterinary Medical Association.`
  },
  {
    name: "Atlantic Veterinary College",
    tier: "Bronze",
    season: "2024 - 2025",
    logo: "/sponsors-2024-2025/avc_upei-01.webp",
    description: `Atlantic Veterinary College.`
  },
  {
    name: "St. George’s University",
    tier: "Bronze",
    season: "2024 - 2025",
    logo: "/sponsors-2024-2025/sgu-logo.png",
    description: `St. George’s University, School of Veterinary Medicine.`
  },
  {
    name: "Massey University",
    tier: "Bronze",
    season: "2024 - 2025",
    logo: "/sponsors-2024-2025/massey-logo-1.jpg",
    description: `Massey University.`
  },
  {
    name: "Ross University School of Veterinary Medicine",
    tier: "Platinum",
    season: "2023 - 2024",
    logo: "/sponsors-2023-2024/ross-logo.png",
    description:
      `Founded in 1982, Ross University School of Veterinary Medicine has graduated over 7,000 veterinarians who today practice medicine across the U.S., Canada, Puerto Rico, and beyond.\n\nAccredited by the American Veterinary Medical Association Council on Education (AVMA-COE), Ross Vet’s DVM program is located on our high-tech campus located on the island of St. Kitts. We offer an entirely unique opportunity to tomorrow’s prospective veterinarians.\n\nEarn your DVM in just 3.25 semesters and enjoy three flexible start dates, so you can begin making an impact, and a career, right away. With three start dates and rolling admissions, you can apply when it makes sense for your life. Start in January, May, or September.\n\nRoss Vet offers 3.25 year accelerated DVM curriculum that includes 10 semesters of learning experiences. Your first 7 semesters are spent on campus in St. Kitts completing 128 semester credit hours of specifically prescribed coursework that emphasizes clinical communication skills, hands-on learning, innovative instructional technology, and content that reflects current veterinary education topics and trends. Your final year of the program that consists of three semesters of clinical training will be spent in intense clinical training at one of our AVMA-accredited school affiliates in the US, UK, Canada, New Zealand, Australia, and Ireland.\n\nRoss Vet attracts hard-working, passionate future veterinarians from around the world. Gain the skills necessary to help animals live long, healthy lives and work with a broad range of animals, including aquatic and exotic species. When you graduate from Ross Vet, you’ll be career-ready with the hands-on experiences you’ll need to care for patients.\n\nTransform your passion into purpose at Ross University School of Veterinary Medicine. Build your future at Ross Vet.`
  },
  {
    name: "St. Matthew’s University",
    tier: "Platinum",
    season: "2023 - 2024",
    logo: "/sponsors-2023-2024/smu.webp",
    description:
      `The goal of St. Matthew’s University School of Veterinary Medicine is to prepare our veterinary medical graduates to be competent, caring veterinarians who have the skills of lifelong learning necessary to incorporate new knowledge and methods into their practice as either a generalist or a specialist and to adapt to a changing professional environment. Our 3.25 year DVM program allows students to have an experience to study on the island of Grand Cayman for seven semesters and then their choice of our AVMA accredited affiliates in the US or Canada for the last three semesters. All of our graduates have the ability to practice in North America immediately after graduation. Ask us about how you can obtain exposure to conservation and aquatic medicine and about our vets being specialized after obtaining top residencies in North America after completing our DVM program. Looking forward to meeting you!`
  },
  {
    name: "Trupanion",
    tier: "Platinum",
    season: "2023 - 2024",
    logo: "/sponsors-2023-2024/trupanion-logo.png",
    description:
      `Millions of pet owners in North America face the daunting reality of unexpected veterinary bills, which can cause significant financial strain. At Trupanion, we understand pet owners’ deep love and concern for their furry companions. That’s why we help pet lovers budget for unforeseen costs while empowering veterinarians to provide the best possible care. As the leading provider of pet medical insurance for over 1 million pets and with over $2 billion in claims paid, Trupanion brings over two decades of experience and a unique commitment to the table. Our innovative technology streamlines the payment process, allowing us to directly reimburse veterinarians in seconds at the time of checkout. This eliminates financial worries for both pet owners and veterinarians, enabling a focus on what truly matters – the pet’s health.`
  },
  {
    name: "Boehringer Ingelheim Canada Ltd.",
    tier: "Gold",
    season: "2023 - 2024",
    logo: "/sponsors-2023-2024/boehringer-ingelheim-logo.webp",
    description: "Bio coming soon…"
  },
  {
    name: "Royal Veterinary College",
    tier: "Gold",
    season: "2023 - 2024",
    logo: "/sponsors-2023-2024/rvc-logo-2.webp",
    description:
      `The Royal Veterinary College (RVC), University of London is one of the world’s leading veterinary and biological science institutions, renowned for pioneering approaches to teaching, research and cutting edge clinical provision. The RVC is currently ranked as the #1 Veterinary School in the World (QS 2023).\n\nFounded in 1791, the RVC was the first veterinary institution in the English speaking world and the driving force behind the establishment of the profession in the UK. Now based over two campuses, its Camden Campus (London) offers the buzz of being based in the heart of the nation’s capital; while in contrast, its Hawkshead Campus (Hertfordshire) offers a more rural experience on a 575 acre site in the English countryside. Both campuses offer its 2,500 students a friendly, supportive environment with state-of-the-art facilities.\n\nThe RVC offers a Veterinary Medicine (BVetMed) degree with global accreditations from the Royal College of Veterinary Surgeons (RCVS) in the UK, the European Association of Establishments for Veterinary Education (EAEVE) in the EU, and the Council on Education of the American Veterinary Medical Association (AVMA) in the USA and Canada. Furthermore, RCVS accreditation ensures RVC BVetMed graduates are licensed to work in Ireland, Australia and New Zealand, as well as South Africa.`
  },
  {
    name: "University of Calgary Faculty of Veterinary Medicine",
    tier: "Gold",
    season: "2023 - 2024",
    logo: "/sponsors-2023-2024/ucvm-logo.webp",
    description:
      `Established in 2005, the University of Calgary Faculty of Veterinary Medicine (UCVM) meets Alberta’s demand for skilled veterinary graduates, supporting rural, small animal, production animal, and equine industries, alongside advancing animal and human health research. UCVM has swiftly gained recognition for its innovative education and cutting-edge research, now ranked among the top 50 veterinary programs globally. The Doctor of Veterinary Medicine (DVM) program spans 9 semesters, providing a comprehensive curriculum that integrates theory with hands-on experience. The initial three years are primarily delivered at the Foothills and Spy Hill Campuses, where students spend about half their time at each site. The final year comprises practicum rotations, both on and off campus, offering invaluable real-world experience. These rotations occur in partner private veterinary practices constituting the Distributed Veterinary Teaching Hospital (DVTH) and other institutional and private partner settings forming the Distributed Veterinary Learning Community (DVLC). Throughout the program, students engage in Clinical Presentations courses, integrating basic, preclinical, clinical, and population health material, fostering early exposure to clinical material at individual animal and population levels. They also participate in Clinical Skills courses each semester, enabling early and frequent contact with animals to learn and practice essential clinical skills necessary for the practicum year. Professional Skills courses cover various aspects including clinical communications, ethics, jurisprudence, business operations, informatics, and research, ensuring graduates are well-rounded professionals equipped for diverse veterinary careers. With a focus on comparative medicine and clinical proficiency, UCVM provides students with the tools and experiences needed to excel in the field of veterinary medicine.`
  },
  {
    name: "University College Dublin",
    tier: "Gold",
    season: "2023 - 2024",
    logo: "/sponsors-2023-2024/university_college_dublin-removebg-preview.webp",
    description:
      `The UCD School of Veterinary Medicine is the only school of Veterinary Medicine on the island of Ireland. Accredited by the European Association of Establishments for Veterinary Education (EAEVE), the Royal College of Veterinary Surgeons (RCVS) and the Veterinary Council of Ireland (VCI), the School’s MVB degree programme is one of only seven in Europe fully accredited by the American Veterinary Medical Association (AVMA).\n\nIts track record in education is second to none, and its excellence in teaching and learning, clinical and research work is internationally recognised. The work of the School is underpinned by a strong vision and mission; its ‘One Health, One Welfare’ strategy focuses on maintaining a flourishing Veterinary School, positively impacting animal and human health, animal welfare, and the environment.\n\nVeterinary Science at UCD has consistently ranked in the top 50 since the QS World University Rankings by Subject introduced Veterinary Science to the rankings in 2015, achieving its highest ranking of 23rd in the world in 2021.An integral part of the School, the UCD Veterinary Hospital offers a unique environment, providing a primary and referral service to the public and veterinary profession. The Hospital is equipped with cutting-edge, modern technology and services, allowing our team of internationally recognised experts to provide the best care possible to our patients whilst training the next generation of vets and vet nurses.`
  },
  {
    name: "McGill University",
    tier: "Silver",
    season: "2023 - 2024",
    logo: "/sponsors-2023-2024/mcgill-university.webp",
    description:
      `Aspiring to become a veterinarian? McGill University offers, on its beautiful Macdonald campus, opportunities to make yourself a strong candidate for Veterinary Medicine programs, anywhere in the world. Farm animal facilities are right on campus with a nearby wildlife zoo. Students gain farm animals experience through experiential courses, and internships or jobs. McGill has negotiated pathways with international Veterinary Schools, whereby selected students move to one such institution, before their last year at McGill.`
  },
  {
    name: "NVA Canada",
    tier: "Silver",
    season: "2023 - 2024",
    logo: "/sponsors-2023-2024/nva-logo.webp",
    description:
      `NVA Canada is a passionate community of veterinary professionals serving the needs of pets and their owners. Our vision for local empowerment and servant leadership makes us partners in possibility, empowering the Canadian community to grow and thrive. For the love of animals and the people who love them. NVACanada.ca`
  },
  {
    name: "Petsecure",
    tier: "Silver",
    season: "2023 - 2024",
    logo: "/sponsors-2023-2024/petsecure_tag_en_cmyk.webp",
    description:
      `Petsecure is a comprehensive pet insurance product and supports the diverse needs of Canadian pet owners. Multiple plans help to cover accident and illness for unforeseen issues. Our affordable insurance plans for dogs and cats includes dental, behavioural, and alternative therapies at no extra cost! Pet Health Insurance protects veterinarians from the moral distress caused by taking actions that contradict their ethical commitments and moral values when pet owners are unable to bear the financial burden of animal health care on their own.`
  },
  {
    name: "TD Bank",
    tier: "Silver",
    season: "2023 - 2024",
    logo: "/sponsors-2023-2024/td-bank-logo.webp",
    description:
      `At TD, we understand the complexities and challenges you face and strive to bring you tailored solutions to meet your evolving needs. Form the time you start school, our student line of credit can help finance your education; when you’re starting your career and then growing your practice, our business banking solutions can provide you peace of mind. Our flexible loan programs allow you to take a break from principal payments for important life events or milestones. Connect with us to learn more`
  },
  {
    name: "Midtown Mobile Veterinary Hospice Services",
    tier: "Platinum",
    season: "2022 - 2023",
    logo: "/sponsors-2022-2023/midtown_mobile.webp",
    description:
      `Midtown Mobile Veterinary Hospice Services (MMVHS) is a mobile veterinary practice founded by Dr. Faith Banks in 2012 that focuses on ill and aging pets in and around the Greater Toronto Area. We currently have a team of 12 veterinarians who are able to provide in-home end-of-life care 365 days a year, supported by an amazing team of hospice care coordinators and aftercare associates.\n\nOur 1-2 hour geriatric, palliative care and/or hospice consultations are done via telemedicine and begin with a review of the pet's medical history followed by a discussion of their current condition/illness. Our vets discuss the pet's activities of daily living including nutritional and hydration needs, pain management, assessment of quality of life and much more. An in-depth conversation regarding owners' concerns, goals, needs and fears, including frank discussions about end-of-life and possible euthanasia, where appropriate, will also occur. Owners then receive a personalized plan with information on the care of their pet and action plans to help ensure their pet does not suffer during his/her last months, weeks or days at home.\n\nOur in-home euthanasia service allows beloved pets to spend their final moments in the comfort and privacy of their own home, surrounded by the people who love and care for them. It also avoids the stress and/or pain that pets may experience when being transported to a veterinary clinic, especially when their mobility or an owner's ability to move them may be a factor. Our team of veterinarians can travel to many cities within the GTA, including but not limited to Toronto, Mississauga, Hamilton, Newmarket, and Oshawa, and are available 7 days a week by appointment only.\n\nIn 2022, we opened Faithful Pet Memorial, our sister company offering an eco-friendly alternative form of pet aftercare called aquamation, also known as water-based cremation. With the introduction of this service, we are able to care for pets throughout the entire end-of-life journey while minimizing our impact on the environment.\n\nAs the first AAHA accredited mobile end-of-life veterinary practice in Canada, MMVHS is honoured to support pets and their families through this difficult time.`
  },
  {
    name: "OzTREKK",
    tier: "Platinum",
    season: "2022 - 2023",
    logo: "/sponsors-2022-2023/oztrekk-logo-light-bkgrnd-transparent-1.webp",
    description:
      `Prestigious universities. Innovative programs. Wonderful climate. Friendly people.\n\nFor students, Australia has it all.\n\nIf you're considering applying to an Australian university, you deserve a positive, supportive experience-one that puts you first.\n\nThat's where OzTREKK comes in. Since 2002, we've helped thousands of students apply to study in Australia and New Zealand. In fact, more than half of all Canadians currently studying full-degree programs in Australia applied through OzTREKK.\n\nAs an official education representative for 14 world-class Australian universities and one New Zealand university, OzTREKK offers access to professional degrees like veterinary medicine in incredible locations like Melbourne, Sydney, and Brisbane.\n\nWe understand the admissions requirements for both undergraduate- and graduate-entry programs, and we're confident our expertise, insider knowledge, and experience will help maximize your chances of receiving an offer.\n\nWe provide comprehensive guidance through detailed emails, informative webinars, and in-person events like our Predeparture Meet & Greets, where you can connect with future classmates. We've even created a custom online application, so you can apply to multiple universities at once, and most of our universities waive their application fees for OzTREKK students.\n\nWe know all our students by name, and we know their career dreams and their concerns. Our dedicated and experienced admissions officers are ready to walk you through your entire journey-from your very first questions to making sure you understand how you can use your degree in Canada after you graduate.\n\nApplying to an overseas university is a big deal, and we've made it our mission to make the entire journey as easy as possible-for free. No matter where your study interests lie, OzTREKK is committed to helping you achieve your goals.\n\nWhen you work with OzTREKK, you'll be fully prepared for your first-class education experience in Australia or New Zealand, and whenever you have a question, you can be sure the answer is just a phone call or email away!\n\nYou have a dream. OzTREKK is here to help make it happen.`
  },
  {
    name: "St. Matthew's University School of Veterinary Medicine",
    tier: "Platinum",
    season: "2022 - 2023",
    logo: "/sponsors-2022-2023/smu-logo1.webp",
    description:
      `The goal of St. Matthew's University School of Veterinary Medicine is to prepare our veterinary medical graduates to be competent, caring veterinarians who have the skills of lifelong learning necessary to incorporate new knowledge and methods into their practice as either a generalist or a specialist and to adapt to a changing professional environment. Our 3.25 year DVM program allows students to have an experience to study on the island of Grand Cayman for seven semesters and then their choice of our AVMA accredited affiliates in the US or Canada for the last three semesters. All of our graduates have the ability to practice in North America immediately after graduation. Ask us about how you can obtain exposure to conservation and aquatic medicine and about our vets being specialized after obtaining top residencies in North America after completing our DVM program. Looking forward to meeting you!`
  },
  {
    name: "University of Prince Edward Island, Centre for Veterinary Epidemiological Research",
    tier: "Platinum",
    season: "2022 - 2023",
    logo: "/sponsors-2022-2023/pei.webp",
    description: `University of Prince Edward Island, Centre for Veterinary Epidemiological Research.`
  },
  {
    name: "Boehringer Ingelheim",
    tier: "Gold",
    season: "2022 - 2023",
    logo: "/sponsors-2022-2023/biah-logo.jpg",
    description:
      `Boehringer Ingelheim Animal Health Canada Inc. is now the second largest company in the global animal health market, and is the top provider worldwide of parasiticides and vaccines. The company is now the global leader in the pet, swine, and equine sectors, with a strong position in poultry and cattle. Visit http://www.boehringer-ingelheim.ca for more information.`
  },
  {
    name: "Ross University School of Veterinary Medicine",
    tier: "Gold",
    season: "2022 - 2023",
    logo: "/sponsors-2022-2023/ross-vet-logo-2.png",
    description:
      `Ross University School of Veterinary Medicine is one of the oldest, most established AVMA-Accredited Veterinary School in the Caribbean region with a history of academic success and significant contributions to the veterinary community in Canada and the US. Ross Vet founded in 1982, we offer a 40-Months (3years and 4months) DVM program. We offer 3 start dates - January, May and September. Start when it makes sense. With three start dates and rolling applications, Ross University School of Veterinary Medicine can fit your educational, professional, and personal needs. Upon successfully completing our DVM program, you are eligible to practice as a Veterinarian in Canada or the US immediately. Ross University School of Veterinary Medicine currently has over 6,000+ graduates practicing in all provinces of Canada and all 50 states in the US. Experience a world of opportunity at Ross Vet in St. Kitts and return to Canada to open your practice with a Doctor of Veterinary Medicine degree from an AVMA-accredited institution. Get the benefits of a study abroad experience while earning U.S. or Canadian veterinary credentials in your DVM degree program. Come to learn and open a new door - to community, opportunity, and life-changing experiences.`
  },
  {
    name: "University of Bristol Veterinary School",
    tier: "Gold",
    season: "2022 - 2023",
    logo: "/sponsors-2022-2023/bristol.webp",
    description:
      `Bristol Veterinary School (UK) is part of the University of Bristol - a world leading veterinary school in one of Europe's most exciting cities.\n\nWe rank in the world's top 20 universities for veterinary science (QS World University Rankings by Subject 2023) and have extensive facilities - all on campus, including:\n\nState-of-the-art small animal referral hospital\nSmall animal and farm animal practices\nAward-winning clinical skills lab\nModern dairy farm\nPurpose-built anatomy and post-mortem facilities\nAbattoir\nOur local equine practice and partnering organisations ensure you have access to a broad range of clinical experience.\n\nWe offer a four-year accelerated programme for science graduates which is accredited by the American Veterinary Medical Association. This means that the qualification gained is equivalent to the North American Doctor of Veterinary Medicine. Thanks to our other accreditations, our graduates are equipped to practise in North America, the UK and across the globe.\n\nYou will get hands-on with animals from day one and be taught via cutting-edge, evidence-informed methods. Benefit from mentoring from world-leading experts (94% of research was rated in the top two categories 'world-leading' or 'internationally excellent' (REF 2021)\n\nLearn about the course\n\nAbout the University\n\nFounded in 1876, the University of Bristol consistently ranks in the world's top 100 and UK's top ten universities - for both research and teaching excellence.\n\nWe're one of the most popular UK universities and our graduates are among the most sought after by employers across the globe.\n\nLife in Bristol\n\nBristol (UK) is a much-loved city, famed for its historic architecture, creative industries, and its thriving music and arts scene.\n\nBrimming with independent cafés, bars and restaurants, Bristol is big on things to do, while small enough to feel friendly.\n\nThere are many green spaces - the river runs through the city centre providing a beautiful backdrop to its buzzing harbourside.\n\nLocated in the south-west of England, Bristol has excellent transport links. With its own international airport, national rail service and coach station, you can easily explore the UK and Europe:\n\nLondon (90 minutes by train)\nBath, UNESCO World Heritage City (15 minutes by train)\nStonehenge (60 minutes by car/coach)\nThe areas surrounding Bristol provide plenty of beautiful countryside and coastline for you to explore.`
  },
  {
    name: "Royal Veterinary College, University of London",
    tier: "Silver",
    season: "2022 - 2023",
    logo: "/sponsors-2022-2023/rvc-logo.webp",
    description:
      `Founded in 1791, the RVC was the first veterinary institution in the English speaking world and the driving force behind the establishment of the profession in the UK. Now based over two campuses, its Camden Campus (London) offers the buzz of being based in the heart of the nation's capital; while in contrast, its Hawkshead Campus (Hertfordshire) offers a more rural experience on a 575 acre site in the English countryside. Both campuses offer its 2,500 students a friendly, supportive environment with state-of-the-art facilities.\n\nThe RVC is one of the few veterinary schools in the world that hold accreditations from the Royal College of Veterinary Surgeons (RCVS) in the UK, the European Association of Establishments of Veterinary Education (ESEVT) in the EU, and the Council on Education of the American Veterinary Medical Association (AVMA) in the USA and Canada. Furthermore, RCVS accreditation ensures RVC veterinary graduates are licensed to work in Ireland, Australia and New Zealand, as well as South Africa.\n\nhttp://www.rvc.ac.uk`
  },
  {
    name: "Manitoba Veterinary Medical Association",
    tier: "Silver",
    season: "2022 - 2023",
    logo: "/sponsors-2022-2023/mvma-logo.webp",
    description:
      `The Manitoba Veterinary Medical Association regulates and advocates for veterinary professionals in Manitoba.\n\nMission: To protect the public through the regulation of veterinary medicine, to support our members and to promote the profession in Manitoba.\n\nVision: A sustainable veterinary community working together to prioritize the health and welfare of animals, people and the environment.\n\nMore information about the MVMA, including how to become a member, can be found on our website at http://www.mvma.ca.`
  },
  {
    name: "Massey University, New Zealand",
    tier: "Silver",
    season: "2022 - 2023",
    logo: "/sponsors-2022-2023/massey-logo.jpg",
    description:
      `The Massey University veterinary program is currently ranked 29th in the world and was the first veterinary program in the southern hemisphere to gain American Veterinary Medical Association (AVMA) accreditation. This means that in addition to our graduates being able to work in New Zealand, UK, Australia, South Africa, Singapore and Hong Kong they can also work in Canada and the USA. Our veterinary degree is a Bachelor of Veterinary Science degree (BVSc) which is recognised by the American Veterinary Medical Association (AVMA) as being equivalent to a DVM from an accredited North American university. The MAJOR advantage of this to you is that it will allow you to work in the USA/Canada exactly as if you had graduated from one of the North American veterinary schools/colleges.\n\nOur veterinary program is divided into two phases: 1. pre-selection phase, and 2: professional phase. The pre-selection phase is usually one semester, and the professional phase is 4.5 years. An undergraduate degree is not necessary to be selected into our programme.\n\nWe have 50 places available annually for international students in the professional phase of the veterinary degree program divided into two methods of entry, Group 1 and Group 2. More information can be found online at www.massey.ac.nz/bvsc as well as behind the scene tours of our four on-campus hospitals - small animal/companion, large, equine and wildlife.\n\nCome be a part of advancing animal and human wellbeing, and sustainability through education and research for Aotearoa New Zealand and the world.`
  },
  {
    name: "NVA Canada",
    tier: "Silver",
    season: "2022 - 2023",
    logo: "/sponsors-2022-2023/nva-logo.webp",
    description:
      `NVA Canada is a rapidly growing community of Canadian veterinary hospitals and passionate professionals dedicated to serving the local needs of pets and their owners in every province and one territory. Since the first hospital joined NVA in 1997, founding veterinarian Dr. Stanley Creighton has emphasized support for the local medical standards established by individual doctors and practices. This vision for local empowerment and servant leadership continues at NVA Canada. We are partners in possibility, providing supporting resources so the Canadian community can continue to grow and thrive. For the love of animals and the people who love them. NVACanada.ca`
  },
  {
    name: "University of Toronto, Department of Cell and Systems Biology",
    tier: "Silver",
    season: "2022 - 2023",
    logo: "/sponsors-2022-2023/uoft_cell_systems_bio.png",
    description:
      `The Department of Cell & Systems Biology (CSB) advances research and teaching in some of the most dynamic and vital areas of biological research. We develop ambitious graduate and undergraduate programs, and facilitate the pursuit of cutting-edge research in the molecular life sciences and systems biology.\n\nCSB research investigates the behaviour of cells - the fundamental units of life - in terms of molecular processes within and between cells. Both hypothesis-driven and discovery-based strategies are integrated to gain a mechanistic understanding of complex and highly dynamic cellular systems and how they govern the development, physiology, interaction and evolution of organisms.\n\nCSB embraces new methodologies and state-of-the art technologies. Its researchers use a wide range of cutting-edge tools to study the fundamental biological mechanisms that govern interactions at all levels of complexity, ranging from molecules to communities. CSB has particular expertise in high-throughput genomics, chemical biology, imaging, computational, and physiological approaches.`
  },
  {
    name: "The University of Edinburgh, The Royal (Dick) School of Veterinary Medicine",
    tier: "Silver",
    season: "2022 - 2023",
    logo: "/sponsors-2022-2023/edinburgh.webp",
    description:
      `The Royal (Dick) School of Veterinary Studies is part of the University of Edinburgh, located in Scotland, UK.\n\nThe School is a world leader in veterinary education, research, and clinical practice, offering internationally accredited degrees via an award winning curriculum, innovative teaching methods, and an interdisciplinary environment at both undergraduate and postgraduate level.\n\nOur veterinary campus, Easter Bush, represents one of the largest concentrations of animal science expertise in Europe, and is just a stone's throw away from the beautiful city of Edinburgh.\n\nOur purpose-built campus, set against the backdrop of the beautiful Pentland Hills Regional Park, is home to more than eight hundred staff and almost fourteen hundred students, all of whom contribute to our exceptional community ethos.\n\nWe offer a 5 year degree for students with high school qualifications, and a 4 year Graduate Entry Programme for students with a relevant degree. Both pathways lead to a Bachelor of Veterinary Medicine and Surgery (BVM&S) which is equivalent to the North American Doctor of Veterinary Medicine (DVM) and benefits from the same worldwide standing.\n\nOur veterinary degree is accredited by the American Veterinary Medical Association (AVMA), the Royal College of Veterinary Surgeons (RCVS), the European Association of Establishments for Veterinary Education (EAEVE), the Australasian Veterinary Boards Council (AVBC), and the South African Veterinary Council (SAVC).\n\nTo find out more about the extraordinary future that awaits you at Edinburgh, please see our website:\n\nhttps://www.ed.ac.uk/vet/studying/undergraduate/bvms`
  },
  {
    name: "University of Glasgow",
    tier: "Silver",
    season: "2022 - 2023",
    logo: "/sponsors-2022-2023/glasgow-logo.jpeg",
    description:
      `Founded in 1451, the University of Glasgow is the fourth oldest university in the English-speaking world. We are a world top 100 university (THE & QS World Rankings) and a member of the prestigious Russell Group of leading UK research universities. The School of Biodiversity, One Health and Veterinary Medicine has ranked #1 in the UK for both Veterinary Sciences and Veterinary Medicine in the Times Sunday Times Good University Guide Rankings 2023.\n\nThe School is pre-eminent in teaching, research, and clinical provision, and attracts students, researchers, and clinicians from around the world. The five-year DVM programme at Glasgow opens up worldwide opportunities for our graduates and is fully accredited by the American Veterinary Medical Association (AVMA), the Royal College of Veterinary Surgeons (RCVS), the European Association of Establishments for Veterinary Education (EAEVE), the Australasian Veterinary Boards Council (AVBC) and the South African Veterinary Council.\n\nTo find out more about our programme please visit our website.`
  },
  {
    name: "Ontario Veterinary Medical Association",
    tier: "Bronze",
    season: "2022 - 2023",
    logo: "/sponsors-2022-2023/ovma-logo.webp",
    description: `Ovma.`
  },
  {
    name: "Ontario Veterinary College University of Guelph",
    tier: "Bronze",
    season: "2022 - 2023",
    logo: "/sponsors-2022-2023/ontarioveterinarycollege_version1_full-colour_ovc-2.webp",
    description: `Ontario Veterinary College University of Guelph.`
  },
  {
    name: "St. George's School of Veterinary Medicine",
    tier: "Bronze",
    season: "2022 - 2023",
    logo: "/sponsors-2022-2023/st.george.webp",
    description: `St. George's School of Veterinary Medicine.`
  },
  {
    name: "PetSmart Charities of Canada",
    tier: "Platinum",
    season: "2021 - 2022",
    logo: "/sponsors-2021-2022/petsmart.webp",
    description:
      `We believe pets belong with the people who love them. That's why we are committed to helping make vet care available to all pets, regardless of their situation, by supporting programs that enhance Community Veterinary Medicine. As the leading funder of Animal Welfare in Canada, our grants help connect pets with loving homes through adoption, improve access to affordable veterinary care and support families in times of crisis with access to food, resources, and emergency relief. Join us to help make a difference in the lives of pets in need and those who love them. Visit PetSmartCharities.ca`
  },
  {
    name: "PheedLoop",
    tier: "Platinum",
    season: "2021 - 2022",
    logo: "/sponsors-2021-2022/blue-logo-pheedloop-1.webp",
    description:
      `PheedLoop is an all-in-one event management software platform designed for conferences, trade shows and meetings. Since our founding in 2015 out of the University of Toronto, PheedLoop has powered thousands of events by offering a seamless system to manage live, virtual and hybrid events under one roof. From mobile events apps, digital registration and on-site badge printing, to streaming, virtual exhibit halls, abstract management, floor plans, video networking, badge scanning, games, and much more. We've grown to become Canada's top-rated event technology provider and are thrilled to be able to support the Canadian Pre-Veterinary Medical Association at their annual conference! The PheedLoop team is extremely focused on engineering and providing the highest level of customer service. We encourage you to visit our blog (www.pheedloop.com/blog) to get an idea of our intense dedication to pushing the envelope.`
  },
  {
    name: "Royal Bank of Canada",
    tier: "Platinum",
    season: "2021 - 2022",
    logo: "/sponsors-2021-2022/2019_rbc_cmyk_r_1in.png",
    description:
      `RBC is so pleased to be a Platinum Sponsor of the 2022 CPVMA! Did you know RBC has specialty programs to help veterinarians and future-veterinarians fund their education and beyond? Experts Jayme Moorcroft and Marianne Dilello from our Healthcare Team (Commercial Banking) join the symposium to provide advice on managing finances through school and the early part of your practicing Veterinary career! Curious about managing school debt? Accessing resources? Starting or managing a clinic? We're here to support you and answer your questions with tailored advice. Guelph is also home to the University of Guelph OnCampus branch! These specialty branches (there are only 20 across Canada!) seek to provide students and youth with financial literacy resources, connect you to the experts you need, and be a comfortable spot on campus to ask your "bank questions" in a safe space. Visit our virtual booth, send us an email (kate.ethier@rbc.com), or give us a wave next time you find yourself walking through the Guelph Gryphon's Athletic Centre! Another facet to RBC OnCampus is RBC FutureLaunch. RBC FutureLaunch is a $500 million, 10-year commitment to today's youth to help them prepare for the jobs of tomorrow. In fact, Future Launch is RBC's biggest commitment to a social issue. The program focuses on helping youth get work experience, grow their network, gain new skills, and enhance their mental well-being through workshops, networking events, and community partnerships. Visit rbc.com/futurelaunch to learn more.`
  },
  {
    name: "Royal Canin",
    tier: "Platinum",
    season: "2021 - 2022",
    logo: "/sponsors-2021-2022/royal_canin.webp",
    description:
      `As a leader in science-based pet health nutrition, Royal Canin places cats and dogs at the centre of the innovation process. The range of exclusive veterinary formulas contributes to optimal health for longer and happier lives.`
  },
  {
    name: "St. Matthews University",
    tier: "Platinum",
    season: "2021 - 2022",
    logo: "/sponsors-2021-2022/st.matthews.webp",
    description:
      `St. Matthews University School of Veterinary Medicine offers an accelerated 3.25-year DVM program including clinical rotation options in Canada and the U.S. SMU offers a holistic admissions process and students will study their basic sciences with an emphasis on hands-on learning on Grand Cayman and enjoy preparing for the NAVLE exam where our pass rate is 92% in the last three years. Our students share a collaborative learning approach with a 7:1 faculty ratio and access to peer mentors, faculty and additional resources for support throughout the program. Our small class sizes make us a unique option so stop by our booth and learn more. Website: Veterinary Medicine | School of Veterinary Medicine | SMUSVM (stmatthews.edu)`
  },
  {
    name: "University College of Dublin, School of Veterinary Medicine",
    tier: "Platinum",
    season: "2021 - 2022",
    logo: "/sponsors-2021-2022/ucd-log.jpg",
    description:
      `The UCD School of Veterinary Medicine, Ireland is one of the leading veterinary schools in Europe, and it has been granted full accreditation by the American Veterinary Medical Association (AVMA), the Australasian Veterinary Board Council (AVBC), the European Association of Establishments in Veterinary Education (EAEVE), the Royal College of Veterinary Surgeons (RCVS) and the Veterinary Council of Ireland (VCI). Currently, we are 23rd in the QS World Rankings 2021 for Veterinary Medicine.`
  },
  {
    name: "The University of Bristol, Bristol Veterinary School",
    tier: "Platinum",
    season: "2021 - 2022",
    logo: "/sponsors-2021-2022/bristol.webp",
    description:
      `Bristol Veterinary School is part of the University of Bristol (UK), located at the heart of one of Europe's most exciting and creative cities. Vibrant and cultural with a celebrated independent spirit, Bristol was ranked 11th in the National Geographic Cool List 2018. A world-leading institution, the University of Bristol was placed 13th in the world for Veterinary Science (QS World University Rankings by Subject 2021) and ranked one of the UK's top 20 universities (QS World University Rankings 2022). Bristol Veterinary School is based at our beautiful, rural Langford Campus - a short bus ride away from the city of Bristol. The 630-acre estate has an extensive range of onsite facilities including a multidisciplinary small animal referral hospital, a dairy farm, new purpose-built anatomy and post-mortem facilities, and an award-winning clinical skills lab. There are also farm animal and small animal practices on site, providing experience of primary care on farms and in clinics. Our nearby partnering organisations ensure you also get ample experience of equine primary care and referral cases as well as working with exotics. Our students benefit from the latest teaching methods, research-driven and delivered by experts in the field. On top of this, you will have access to our much-celebrated team of clinical demonstrators, who nurture you to develop confident practical skills. Bristol Veterinary School has many academics who are leaders in their field, whose research helps inform national policies that can lead to developments within veterinary medicine and the wider field of One-Health. We have two undergraduate veterinary science degrees. Our five-year programme is aimed at school leavers. Our four-year programme is aimed at those with an undergraduate degree in a science subject. The BVSc Veterinary Science: Accelerated Graduate Entry degree (AGEP), is a fast-track programme for science graduates, which enables completion of BVSc Veterinary Science in four years. The course is accredited by the American Veterinary Medical Association (AVMA) and the qualification gained is equivalent to the North American Doctor of Veterinary Medicine (DVM). Graduates of our BVSc Veterinary Science: Accelerated Graduate Entry degree will be able to practise as a Veterinary Surgeon in the United Kingdom and several other countries. Applications for this course can be made via VMCAS. The AGEP course has a distinctive, student-led approach that sets the course apart from other graduate entry programmes in the UK. The first two years are delivered primarily through case-based, tutor-facilitated, small-group teaching and learning. You will study the integrated structure and function of animals, principles of disease, clinical veterinary science and professional studies. This is all taught via case-based learning, complemented by lectures and practicals. The course integrates with the final two years of our five-year BVSc Veterinary Science degree towards the end of the second year and you will further develop your skills in clinical sciences and professional studies. EMS (extra mural studies) are mandatory for all veterinary programmes in the UK and you will undertake EMS throughout your programme including outside of term time. We have a dedicated EMS team who can support you in arranging your placements. The University of Bristol Veterinary School is accredited by the following professional bodies, meaning that graduates of its Veterinary programmes have the opportunity to practice in multiple countries around the world. The American Veterinary Medical Association (AVMA), The Royal College of Veterinary Surgeons (RCVS), The European Association of Establishments for Veterinary Education (EAEVE), The Australasian Veterinary Boards Council (AVBC), The South African Veterinary Council (SAVC).`
  },
  {
    name: "The University of Edinburgh, Royal (Dick) School of Veterinary Studies",
    tier: "Platinum",
    season: "2021 - 2022",
    logo: "/sponsors-2021-2022/edinburgh.webp",
    description:
      `The Royal (Dick) School of Veterinary Studies is part of the University of Edinburgh. We are located in Scotland (UK) and our campus sits within an area with the largest concentration of animal science expertise in Europe while being just a stone's throw away from the beautiful city of Edinburgh. The School is a world leader in veterinary education, research, and clinical practice, offering internationally accredited degrees by using an award winning curriculum, innovative teaching methods, and an interdisciplinary environment at both undergraduate and postgraduate level. Our purpose-built campus, set against the backdrop of the beautiful Pentland Hills Regional Park, is home to more than eight hundred staff and almost fourteen hundred students, all of whom contribute to our exceptional community ethos. We offer a 5 year degree for students with high school qualifications, and a 4 year Graduate Entry Programme for students with a relevant degree. Both pathways lead to a Bachelor of Veterinary Medicine and Surgery which is equivalent to the North American Doctor of Veterinary Medicine (DVM) and benefits from the same worldwide standing. Our veterinary degree is accredited by: The American Veterinary Medical Association (AVMA), The Royal College of Veterinary Surgeons (RCVS), The European Association of Establishments for Veterinary Education (EAEVE), The Australasian Veterinary Boards Council (AVBC), The South African Veterinary Council. We are placed 3rd in the 2021 QS World University Rankings by Subject and have been ranked first in the Guardian UK University Guide 2022 league table for veterinary science for five consecutive years. By studying towards a Bachelor of Veterinary Medicine and Surgery degree at the University of Edinburgh, you will achieve a world-class education and an internationally accredited qualification in a multi-cultural and thriving environment. You will gain many transferable skills such as effective communication, teambuilding and an understanding of business management. Veterinary training also provides an outstanding background for those who wish to pursue a career in biomedical research, including both veterinary and human medicine. Clinical and professional skills are taught from the earliest stages and the programme also includes Extra-Mural Studies (EMS). This is a core part of our programme and provides unrivalled opportunities to gain real-life work experience anywhere in the world while being a student and in addition to spending time in our three on site hospitals during clinical rotations. Take a virtual tour of our campus facilities here. | To find out more about the degree programmes we offer, please visit our website. | To learn more about the application process, please refer to our step-by-step guide. In summary: why study at Edinburgh? Widely and internationally accredited degree (RCVS, AVMA, EAEVE, AVBC, SAVC). Consistently ranked as one of the top Vet School in the UK and overseas. High graduate employment rates (93%+). GBP 275m+ investment in state-of-the-art purpose-built campus facilities. Located on a campus with the highest concentration of animal science expertise in Europe. Contact us: Book an appointment to speak to a member of the Admissions Team | Email: vetug@ed.ac.uk | Find us on social media: Instagram @thedickvet YouTube Facebook Twitter LinkedIn.`
  },
  {
    name: "VCA Canada",
    tier: "Platinum",
    season: "2021 - 2022",
    logo: "/sponsors-2021-2022/vcac_ah_cmyk.webp",
    description:
      `VCA Canada Animal Hospitals is a family of over 130 small animal veterinary practices located across 5 Canadian provinces. Our team of over 4,000 associates provides our communities with general, emergency, and specialty services in our practices, offering compassionate care for pets and their families. Our purpose of Caring For Life's Greatest Companions is felt in every part of the VCA Canada experience, whether it is our patients, our clients, our team members, or our communities.`
  },
  {
    name: "Zoetis",
    tier: "Platinum",
    season: "2021 - 2022",
    logo: "/sponsors-2021-2022/zoetis-logo-orange-jpg-cmyk.webp",
    description:
      `As the world's leading animal health company, we are driven by a singular purpose: to nurture our world and humankind by advancing care for animals. After nearly 70 years innovating ways to predict, prevent, detect, and treat animal illness, we continue to stand by those raising and caring for animals worldwide - from livestock farmers to veterinarians and pet owners. The company's leading portfolio and pipeline of medicines, vaccines, diagnostics, and technologies make a difference in over 100 countries. In 2020, we generated revenue of $6.7 billion with ~11,300 employees. For more, visit www.zoetis.com.`
  },
  {
    name: "OzTREKK",
    tier: "Gold",
    season: "2021 - 2022",
    logo: "/sponsors-2021-2022/oztrekk.png",
    description:
      `"Doctor, dentist, lawyer, vet? No matter what your interest, OzTREKK can help you achieve your goals. As an official international representative for 14 world-renowned Australian and New Zealand universities, OzTREKK has assisted thousands of Canadian students make their career dreams a reality. In fact, more than half of all Canadians currently studying full-degree programs in Australia applied through OzTREKK. We've made it our mission to put students first, which is why we offer unparalleled, free services. From your first questions to understanding how to take your degree home, OzTREKK is here to help." oztrekk.com`
  },
  {
    name: "Ross University School of Veterinary Medicine",
    tier: "Gold",
    season: "2021 - 2022",
    logo: "/sponsors-2021-2022/ross-vet-logo.png",
    description:
      `Founded in 1982, Ross University School of Veterinary Medicine, a St. Kitt's vet school, has graduated nearly 6,000 veterinarians who today practice medicine across the U.S., Canada, Puerto Rico, and beyond. Accredited by the American Veterinary Medical Association Council on Education (AVMA-COE), Ross Vet's DVM program is located on our high-tech campus located on the island of St. Kitts. We offer an entirely unique opportunity to tomorrow's prospective veterinarians. Ross University School of Veterinary Medicine provides the opportunity for Canadian students from any province/territory to apply to vet school. We can help you be practice-ready and eligible for licensure in Canada, the US, and abroad in as few as 3.25 years.`
  },
  {
    name: "Banfield Pet Hospital",
    tier: "Silver",
    season: "2021 - 2022",
    logo: "/sponsors-2021-2022/banfield_pet.webp",
    description:
      `We are a practice powered by more than 3,600 veterinarians who have dedicated their careers to helping pets. Banfield is the largest general veterinary practice in the U.S. with more than 1,000 hospitals in neighborhoods across the country and Puerto Rico. We offer Optimum Wellness Plans(R) (OWPs), which enable us to develop partnerships with our clients, while delivering customized, high-quality preventive care for every pet's unique needs throughout life. Our OWP clients can also take advantage of Vet ChatTM, our 24/7 live vet advice service, as well as virtual office visits. We take a proactive approach to veterinary medicine aimed at early diagnosis and supporting overall pet health by focusing on five categories of life stage wellness - primary care, preventable disease, oral health, mobility, and nutrition. As a principle-based organization, we believe it's equally important to support the health, safety and wellbeing of our more than 19,000 Associates. Banfield is a community of people characterized by diversity of thought, background, preferences and approach, and part of building a culture that puts our people first involves creating a space where our Associates' voices are heard, supported, and acted on. Our commitment to equity, inclusion and diversity, drives our decisions as a company, so we can create a brighter future for our people, pets and society.`
  },
  {
    name: "The University of London, Royal Veterinary College",
    tier: "Silver",
    season: "2021 - 2022",
    logo: "/sponsors-2021-2022/rvc-logo-2.webp",
    description:
      `The Royal Veterinary College (RVC), University of London is one of the world's leading veterinary institutions, renowned for pioneering approaches to teaching, research and cutting edge clinical provision. The RVC is currently ranked as the #1 Veterinary School in the World (QS 2021). Founded in 1791, the RVC was the first veterinary institution in the English speaking world and the driving force behind the establishment of the profession in the UK. Now based over two campuses, its Camden Campus (London) offers the buzz of being based in the heart of the nation's capital; while in contrast, its Hawkshead Campus (Hertfordshire) offers a more rural experience on a 575 acre site in the English countryside. Both campuses offer its 2,500 students a friendly, supportive environment with state-of-the-art facilities. The RVC offers a 4 year Veterinary Medicine course with global accreditations from the Royal College of Veterinary Surgeons (RVCS) in the UK, the European Association of Establishments for Veterinary Education (EAEVE) in the EU, and the Council on Education of the American Veterinary Medical Association (AVMA) in the USA and Canada. Furthermore, RCVS accreditation ensures RVC veterinary graduates are licensed to work in Ireland, Australia and New Zealand, as well as South Africa. www.rvc.ac.uk`
  },
  {
    name: "The University of Prince Edward Island, Atlantic Veterinary College",
    tier: "Silver",
    season: "2021 - 2022",
    logo: "/sponsors-2021-2022/upei_avc.png",
    description:
      `The Atlantic Veterinary College (AVC) at the University of Prince Edward Island is committed to improving the health and welfare of animals and humans through excellence in education, discovery, professional practice and dedicated service to Atlantic Canada, our nation, and the world. One of five veterinary colleges in Canada, the AVC is the only institution offering in Atlantic Canada educating doctors of veterinary medicine (DVM). Since our first class graduated in 1990, AVC has been a fully accredited college and has experienced remarkable success and growth. With a total student population of approximately 270 over the four-year DVM program, AVC maintains one of the smallest class sizes among North American veterinary colleges resulting in a close-knit and supportive community environment. We have also built an impressive record in research and service, particularly in the fields of aquatic animal health, veterinary epidemiology, animal welfare, comparative biomedical sciences, infectious diseases, and public health. AVC is known for training highly competent veterinary professionals who are the leaders of tomorrow - in their profession and their communities. Our DVM graduates are sought after by employers in private practice, academic, research, industry, and government settings for their strong work ethic and outstanding clinical and communication skills.`
  },
  {
    name: "The University of Saskatchewan, Western College of Veterinary Medicine",
    tier: "Silver",
    season: "2021 - 2022",
    logo: "/sponsors-2021-2022/usask_wcvm_colour.webp",
    description:
      `The WCVM is the premier centre of veterinary education, research and clinical expertise in Western Canada. Established in 1963, the WCVM serves as the regional veterinary college for Western Canada and the northern territories. As one of Canada's five veterinary colleges, the WCVM is a key member of Canada's veterinary, public health and food safety networks. Located on the University of Saskatchewan campus, the WCVM includes a full-service veterinary medical centre, a research wing, a veterinary diagnostic complex and a clinical simulation centre. Each year, up to 88 students begin the four-year Doctor of Veterinary Medicine (DVM) program at the regional veterinary college. Based on an interprovincial agreement, the WCVM accepts 58 applicants from British Columbia, Saskatchewan and Manitoba as well as from the northern territories. The WCVM also offers 30 open seats to western Canadian and international applicants. The college's DVM curriculum includes refined core courses and a variety of third-year elective courses that allow students to focus on particular interest areas. The WCVM Veterinary Medical Centre's diverse caseload ensures that students are exposed to a range of animal species and health issues during their senior years. The college is fully accredited with the American Veterinary Medical Association's Council on Education, and WCVM graduates practise throughout North America and around the world. Visit wcvm.usask.ca for more information.`
  },
  {
    name: "The University of Toronto, Department of Cell and Systems Biology",
    tier: "Silver",
    season: "2021 - 2022",
    logo: "/sponsors-2021-2022/uoft_cell_systems_bio.png",
    description:
      `The Department of Cell & Systems Biology (CSB) advances research and teaching in some of the most dynamic and vital areas of biological research. We develop ambitious graduate and undergraduate programs, and facilitate the pursuit of cutting-edge research in the molecular life sciences and systems biology. CSB research investigates the behaviour of cells - the fundamental units of life - in terms of molecular processes within and between cells. Both hypothesis-driven and discovery-based strategies are integrated to gain a mechanistic understanding of complex and highly dynamic cellular systems and how they govern the development, physiology, interaction and evolution of organisms. CSB embraces new methodologies and state-of-the art technologies. Its researchers use a wide range of cutting-edge tools to study the fundamental biological mechanisms that govern interactions at all levels of complexity, ranging from molecules to communities. CSB has particular expertise in high-throughput genomics, chemical biology, imaging, computational, and physiological approaches.`
  },
  {
    name: "The University of Toronto, Department of Ecology and Evolutionary Biology",
    tier: "Silver",
    season: "2021 - 2022",
    logo: "/sponsors-2021-2022/uoft_ecology_evolutionary_bio.webp",
    description:
      `The Department of Ecology and Evolutionary Biology at the University of Toronto is at the forefront of teaching and research into the factors governing biodiversity, from genomes to ecosystems. Our integration of both basic and applied perspectives into our research and teaching mean our activities are making major impacts on both the fundamental understanding of the natural world, as well as on policy and practice for minimizing and managing human impacts on biodiversity.`
  },
  {
    name: "St. George's University, School of Veterinary Medicine",
    tier: "Bronze",
    season: "2021 - 2022",
    logo: "/sponsors-2021-2022/st.george.webp",
    description: `St. George's University, School of Veterinary Medicine.`
  },
  {
    name: "Ontario Veterinary College",
    tier: "Bronze",
    season: "2021 - 2022",
    logo: "/sponsors-2021-2022/ontarioveterinarycollege_version1_full-colour_ovc.webp",
    description: `Ontario Veterinary College.`
  }
];
