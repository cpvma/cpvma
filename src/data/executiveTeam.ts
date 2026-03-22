import type { StaticImageData } from "next/image";

import advisorImage from "../../logos/exec_logos/advisor1.png";
import coPresident1Image from "../../logos/exec_logos/co-president_1.png";
import coPresident2Image from "../../logos/exec_logos/co-president_2.png";
import gcmOvcImage from "../../logos/exec_logos/GCM_OVC.png";
import gcmUcvmImage from "../../logos/exec_logos/GCM_UCVM.png";
import gcmWcvmImage from "../../logos/exec_logos/GCM_WCVM.png";
import jrMemberDirectorImage from "../../logos/exec_logos/jr_member_director.png";
import jrVpEventsImage from "../../logos/exec_logos/jr_vp_events.png";
import jrVpFinanceImage from "../../logos/exec_logos/jr_vp_finance.png";
import jrVpFundraisingImage from "../../logos/exec_logos/jr_vp_fundraising.png";
import jrVpMediaImage from "../../logos/exec_logos/jr_vp_media.png";
import jrVpMerchandiseImage from "../../logos/exec_logos/jr_vp_merchandise.png";
import jrVpOutreachImage from "../../logos/exec_logos/jr_vp_outreach.png";
import jrVpPublicRelationsImage from "../../logos/exec_logos/jr_vp_public_relations.png";
import jrVpSponsorshipImage from "../../logos/exec_logos/jr_vp_sponsorship.png";
import secretaryImage from "../../logos/exec_logos/secretary.png";
import srMemberDirectorImage from "../../logos/exec_logos/sr_member_director.png";
import srVpEventsImage from "../../logos/exec_logos/sr_vp_events.png";
import srVpFinanceImage from "../../logos/exec_logos/sr_vp_finance.png";
import srVpFundraisingImage from "../../logos/exec_logos/sr_vp_fundraising.png";
import srVpMediaImage from "../../logos/exec_logos/sr_vp_media.png";
import srVpMerchandiseImage from "../../logos/exec_logos/sr_vp_merchandise.png";
import srVpOutreachImage from "../../logos/exec_logos/sr_vp_outreach.png";
import srVpPublicRelationsImage from "../../logos/exec_logos/sr_vp_public_relations.png";
import srVpSponsorshipImage from "../../logos/exec_logos/sr_vp_sponsorship.png";
import darcyOwenImage from "../../logos/exec_logos/Delegates/Darcy Owen - UofA.jpg";
import elyaneFortinImage from "../../logos/exec_logos/Delegates/Elyane Fortin (DAL PRE VET) .jpg";
import brynnEastonImage from "../../logos/exec_logos/Delegates/Brynn Easton - USaskPV.jpeg";
import amaalHassanImage from "../../logos/exec_logos/Delegates/Amaal Hassan - YUPV.jpeg";
import allisonAmosImage from "../../logos/exec_logos/Delegates/Allison Amos - WPVS.jpg";
import genaDowdImage from "../../logos/exec_logos/Delegates/Gena Dowd - WMPVMA.jpg";
import frankieArnoldImage from "../../logos/exec_logos/Delegates/Frankie Arnold - UPEI Society.jpg";
import samanthaChenImage from "../../logos/exec_logos/Delegates/Samantha Chen FVC.png";
import natalieSitImage from "../../logos/exec_logos/Delegates/Natalie Sit.jpg";
import lilianaCheungImage from "../../logos/exec_logos/Delegates/Liliana Cheung - VMC.jpeg";

export type ExecutiveMember = {
  name: string;
  role: string;
  bio: string;
  animal: string;
  photo: StaticImageData;
  imagePosition?: string;
};

export type ExecutiveRole = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  members: ExecutiveMember[];
};

export const executiveRoles: ExecutiveRole[] = [
  {
    slug: "presidential-team",
    title: "Presidential Team",
    summary: "Leads the strategic vision for CPVMA and stewards relationships with national partners.",
    description:
      "Our co-presidents guide CPVMA’s national direction, steward institutional partnerships, and ensure that programming reflects the needs of aspiring veterinarians across Canada.",
    members: [
      {
        name: "Erin Wong",
        role: "Co-President",
        bio:
          "Hi everyone! My name is Erin, and I’m a second-year Animal Biology student at the University of Guelph. I’m incredibly excited to be starting my second year with the CPVMA as one of the co-presidents! My long-term goal is to become a veterinary surgeon, with a particular interest in soft tissue surgery. Outside of academics, I enjoy spending my free time working on jigsaw puzzles, colouring books, and various arts and crafts. I’m looking forward to working with the amazing CPVMA team this year to connect with, encourage, and support pre-veterinary students across Canada! /ᐠ - ˕ -マ",
        animal: "Snakes",
        photo: coPresident1Image
      },
      {
        name: "Mayah Anacleto",
        role: "Co-President",
        bio:
          "Hi everyone! My name is Mayah, I am a third-year Animal Biology student at the University of Guelph and one of the Co-Presidents for CPVMA. In my free time, I enjoy spending time with my dog, Nemo, and doing yoga! I am originally from Victoria B.C and following my undergraduate degree, I hope to attend WCVM in Saskatchewan to work towards my DVM. I love working with both small animals and exotic pets, though my long term goal is to work as a small animal general practitioner, and also travel the world to work with non-profits and under-serviced communities.",
        animal: "Sloths",
        photo: coPresident2Image
      }
    ]
  },
  {
    slug: "secretary-advisor",
    title: "Secretary & Advisor",
    summary: "Keeps CPVMA organized and connected while offering experienced academic guidance.",
    description:
      "The secretary and advisor maintain documentation, shepherd governance processes, and bring professional expertise to the executive table.",
    members: [
      {
        name: "Madeline Lem",
        role: "Secretary",
        bio:
          "Hi everyone! My name is Maddie and I am very excited to be a part of the CPVMA executive team again this year! I am in my third year at the University of Guelph majoring in Animal Biology and this is my second year as the secretary for the CPVMA. I am a food enthusiast and have recently developed a love for bracelet making! In the future, I aspire to become a vet and work with exotic species and join the Veterinarians Without Borders team to aid animals in war torn countries and natural disaster zones.",
        animal: "Goats",
        photo: secretaryImage
      },
      {
        name: "Dr. Charlie Pye",
        role: "Advisor",
        bio:
          "Dr. Charlie Pye is returning as a faculty/industry advisor for CPVMA. She received her DVM from the Atlantic Veterinary College, PEI. She then moved to Saskatoon for a rotating internship at the Western College of Veterinary Medicine. Following her internship, she travelled back for a Dermatology Residency at the Ontario Veterinary College. While at OVC, she also completed her Doctorate of Veterinary Science degree specializing in bacterial biofilms. After passing boards she began working at Guelph Veterinary Specialty Hospital, a private referral practice in Ontario; also travelling back to PEI to teach the veterinary students a few times a year. As of May 2018 she joined the team at the Atlantic Veterinary College as an assistant professor, and established the first ever Dermatology service at AVC. She has lectured all over North America and has contributed to multiple journals and textbooks. She is also currently the treasurer for the Canadian Academy of Veterinary Dermatology.",
        animal: "Wolf",
        photo: advisorImage
      }
    ]
  },
  {
    slug: "events-team",
    title: "Events Team",
    summary: "Designs immersive workshops, labs, and symposium programming from coast to coast.",
    description:
      "From the annual symposium to hands-on labs, the Events Team curates learning experiences that introduce students to real-world veterinary practice.",
    members: [
      {
        name: "Katherine McCurdy",
        role: "Sr VP Events",
        bio:
          "Hi everyone! My name is Katie and I am about to start my second year of my Master of Animal Nutrition at the University of Guelph. This is my second year with the CPVMA and I am the Senior VP of Events. I aspire to be a mixed animal veterinarian in the future as I love working with both large and small animals! In my free time, I enjoy reading, sewing, and spending time with my dogs Chloe & Jax and my cat Hugo. I am excited to be a part of the amazing team this year!",
        animal: "Three-toed Sloths & Dogs",
        photo: srVpEventsImage
      },
      {
        name: "Saba Eskandary",
        role: "Jr VP Events",
        bio:
          "Hi everyone! My name is Saba and I am in my third year studying Wildlife Biology & Conservation at the University of Guelph. This is my third year with the CPVMA and this year I am the junior VP of Events. My goal is to be a wildlife animal veterinarian in the future as I am passionate about saving species from going extinct! In my free time, I enjoy dancing, playing volleyball, and spending time with the ones I love. I am excited to be a part of the amazing team this year!",
        animal: "Horses",
        photo: jrVpEventsImage
      }
    ]
  },
  {
    slug: "outreach-team",
    title: "Outreach Team",
    summary: "Grows the CPVMA community through mentorship, campus visits, and national engagement.",
    description:
      "The Outreach Team connects regional clubs, mentors new members, and ensures that every Canadian campus can plug into CPVMA resources.",
    members: [
      {
        name: "Jayden Tang",
        role: "Sr VP Outreach",
        bio:
          "Hi everyone! My name is Jayden, and I am this year's Senior Vice President of Outreach. I am a current second year student at the University of Toronto completing a double major in Animal Physiology and Health and Disease. I have worked in both small and lab animal medicine, and I hope to attend vet school in the future! I am looking forward to being a part of the CPVMA team and helping pre-vet students across Canada! Please feel free to reach out with any questions or ideas!",
        animal: "Elephants",
        photo: srVpOutreachImage
      },
      {
        name: "Wendy Zhao",
        role: "Jr VP Outreach",
        bio:
          "Hi everyone! My name is Wendy, and I am a first-year Health Sciences student at Queen’s University. This is my first year with CPVMA, and I am excited to be serving as the Junior Vice President of Outreach! I’m passionate about mentoring, and I hope to support pre-veterinary students across Canada. My goal is to become a small animal veterinarian, but I’m also excited to explore the many specialties this field has to offer. Outside of school, I love playing badminton and spending time with my dog, Mira.",
        animal: "Sea Otters",
        photo: jrVpOutreachImage
      }
    ]
  },
  {
    slug: "public-relations-team",
    title: "Public Relations Team",
    summary: "Shares CPVMA stories, manages media channels, and elevates member achievements.",
    description:
      "The PR team keeps members informed, coordinates announcements, and ensures that partner stories reach the broader veterinary community.",
    members: [
      {
        name: "Alyssa Quartarone",
        role: "Sr VP Public Relations",
        bio:
          "Hello everyone! My name is Alyssa Quartarone and I am a 3rd year Animal Biology student at the University of Guelph. I am this year's Senior Vice President in Public Relations with the CPVMA. In this role, I’ll be creating monthly newsletters to keep our members informed and engaged with upcoming events, opportunities, and resources. I’m passionate about veterinary medicine and aspire to pursue a career as a veterinarian, with strong interests in oncology and internal medicine. I look forward to using this position to strengthen communication within our community and showcase all the exciting things happening in CPVMA!",
        animal: "Dogs",
        photo: srVpPublicRelationsImage
      },
      {
        name: "Sarah Monson",
        role: "Jr VP Public Relations",
        bio:
          "Hi everyone! My name is Sarah, and I am super excited to be joining the CPVMA team this year as a Junior Vice President of Public Relations! I am a recent graduate from the Animal Biology program at the University of Guelph, and I plan to apply to vet school this year. I have a specific interest in pursuing small animal and equine muscular rehabilitation but am very excited to explore the many specialties vet-med has to offer! In my free time, I love reading, running and painting. I look forward to getting to know other pre-vets all across Canada!",
        animal: "Deer",
        photo: jrVpPublicRelationsImage
      }
    ]
  },
  {
    slug: "media-team",
    title: "Media Team",
    summary: "Captures events visually and crafts the digital identity of CPVMA.",
    description:
      "Our media leads document every milestone, design branded assets, and collaborate with PR to deliver consistent storytelling.",
    members: [
      {
        name: "Ziting Li (Mica)",
        role: "Sr VP Media",
        bio:
          "Hi everyone! This is Mica and my cat Kiki looking annoyed in this picture. I’m super excited to be this year's Senior Vice President of Media. This is my third year with CPVMA. I aspire to be a mixed animal veterinarian and am passionate about companion, wildlife and exotic animals! My favourite animals are cats, owls, and Chihuahuas. Looking forward to connecting with other animal lovers",
        animal: "Cats",
        photo: srVpMediaImage
      },
      {
        name: "Ana-Nicole Alb",
        role: "Jr VP Media",
        bio:
          "Hi! My name is Ana-Nicole, I'm a current second year Animal Biology student at the University of Guelph looking to become a small animal vet specializing in neurology in the future!  This is my first year with CPVMA/ACPMV as the Junior Vice President of Media! I look forward to helping share our club's work and connect with aspiring vets! I have a Border Collie named Mara back home who's inspired me to go down this career path, which means every milestone on my journey is dedicated to her.",
        animal: "Cats",
        photo: jrVpMediaImage
      }
    ]
  },
  {
    slug: "finance-team",
    title: "Finance Team",
    summary: "Safeguards budgets, scholarship funds, and long-term sustainability.",
    description:
      "Finance oversees sponsorship revenue, tracks operating budgets, and ensures each initiative can scale responsibly.",
    members: [
      {
        name: "Sraddha Uppili",
        role: "Sr VP Finance",
        bio:
          "Hi! My name is Sraddha and I’m in my fourth year of biomedical sciences at the University of Calgary. I aspire to get my DVM/PhD and go into veterinary research, specifically continuing my undergrad research on swine disease! This is my second year with the CPVMA/ACPMV but my first year as Sr VP of Finance, and I’m so excited to contribute to the team! In my free time, I love hanging out with my leonberger Blu!",
        animal: "—",
        photo: srVpFinanceImage
      },
      {
        name: "Wendy Zheng",
        role: "Jr VP Finance",
        bio:
          "Hi everyone! My name is Wendy and I am a second-year Animal Biology student at the University of Guelph. I am starting my first year with the CPVMA as the Junior Vice President of Finance. I aspire to be a companion animal veterinarian and have a strong interest in research related to animal welfare. I'm excited to be a part of the CPVMA team!",
        animal: "Lynx",
        photo: jrVpFinanceImage
      }
    ]
  },
  {
    slug: "sponsorship-team",
    title: "Sponsorship Team",
    summary: "Cultivates partnerships that unlock programming and travel opportunities.",
    description:
      "From corporate supporters to university collaborations, the Sponsorship team ensures our members can access unique resources.",
    members: [
      {
        name: "Abhinav Sharma",
        role: "Sr VP Sponsorship",
        bio:
          "Hi everyone! My name is Abhi, and I am currently a second-year Animal Biology student at the University of Guelph. My goal is to pursue a Doctor of Veterinary Medicine at the Ontario Veterinary College, with interests in both companion animals and large animal practice. I am excited to build partnerships that will strengthen CPVMA, create new opportunities, and provide resources to pre-vet students across Canada. I am passionate about connecting with others who share a love for animals and veterinary medicine, and I look forward to supporting our growing community. In my free time, I enjoy the outdoors and powerlifting. Please don’t hesitate to reach out. I’m always happy to connect!",
        animal: "Horses",
        photo: srVpSponsorshipImage
      },
      {
        name: "Rosa Carmela Vivona",
        role: "Jr VP Sponsorship",
        bio:
          "Hello there!! My name is Rosa Carmela, and I am in my third year of Animal Biology, minoring in neuroscience!! I find the brain extremely fascinating, which is why I wish to focus my studies on animal neuroscience to work in the field of animal behaviour and/or veterinary medicine. Outside of school, I enjoy going for nature walks, watching movies, chilling with my cat Kylo and dog Angel and hanging out with friends and family. This is my first year with the CPVMA as the Jr. VP of Sponsorship, and I am so excited! I will always be a helping hand to support anyone, so do not be afraid to reach out!! Also, if anyone ever wants to talk about anything Star Wars related, you know which girl to call :). Wishing everyone a very fun, successful, and memorable year!!",
        animal: "Monkeys",
        photo: jrVpSponsorshipImage
      }
    ]
  },
  {
    slug: "fundraising-team",
    title: "Fundraising Team",
    summary: "Leads national campaigns and local drives that fuel member initiatives.",
    description:
      "Fundraising rallies the CPVMA community to support scholarships, travel bursaries, and community outreach programs.",
    members: [
      {
        name: "Danielle Notaro",
        role: "Sr VP Fundraising",
        bio:
          "Hi everyone! My name is Danielle and I am thrilled to be joining the CPVMA this year as the Senior Vice President of Fundraising. I am a 3rd year Animal Biology B.Sc (Hons) student at the University of Guelph. I am an aspiring large animal veterinarian, and have a passion for animal welfare, accessible education and client communication. I bring experience from veterinary clinics, farm settings, student councils, customer service roles and working with individuals on the autism spectrum. Outside of veterinary medicine, I enjoy fishing, baking, and taking my dogs on hikes on my days off! I look forward to leading fundraising efforts to support the goals of the CPVMA while fostering connections and providing resources to pre-veterinary students across Canada.",
        animal: "Cows",
        photo: srVpFundraisingImage
      },
      {
        name: "Abinaya Indrakumar",
        role: "Jr VP Fundraising",
        bio:
          "Hello everyone! My name is Abi and I am so excited to be joining the CPVMA this year as Junior VP of Fundraising! I am currently in my third year at UTSC double majoring in biology and psychology. I have always had a profound passion for animals and am constantly seeking new opportunities to gain more experience within the pre-veterinary community. While I am still exploring my future career path, I am particularly drawn to small animal medicine -- and I'm excited to see where this journey takes me! I am so thrilled to be part of the CPVMA executive team and can't wait to get started on an amazing year! :)",
        animal: "Guinea Pigs",
        photo: jrVpFundraisingImage
      }
    ]
  },
  {
    slug: "member-relations-team",
    title: "Member Relations Team",
    summary: "Centers student voices and fosters mentorship pairings year-round.",
    description:
      "Member Relations builds welcoming spaces, facilitates peer mentorship, and keeps members informed about upcoming opportunities.",
    members: [
      {
        name: "Pamela Kernohan",
        role: "Sr Member Director",
        bio:
          "Hi everyone! My name is Pamela and I’m so excited to be returning as your Senior Member Director for a second year! I’m currently in my fourth year of Kinesiology at UofT, and being a part of the CPVMA has been a rewarding experience. Over the past year, I’ve loved connecting with pre-vet students across Canada and helping build a supportive community. We have so much to look forward to this term! I’m passionate about working with exotics and wildlife, and I currently work as a surgery ACA at an emergency veterinary hospital, which has given me invaluable hands-on experience and strengthened my interest in pursuing veterinary medicine. I’m looking forward to continuing to support our members, meeting new faces, and working alongside such a motivated team this year with the CPVMA. 🐾🐓🐶🐢",
        animal: "Chickens",
        photo: srMemberDirectorImage
      },
      {
        name: "Lauren Bertucci",
        role: "Jr Member Director",
        bio:
          "Hi, my name is Lauren and I am super excited to be a part of the CPVMA team! I am committed to helping students across Canada connect to their veterinary dreams by creating engaging events and discussions with specialists. I have always grown up with pets and now as a university student, I love clinical and field related experiences that allow me to understand the application of medicine to a range of different species. I have a passion for exotics and wildlife and one-day hope to support conservation science as a veterinarian. I look forward to sharing my perspectives and providing resources to students in support of everyone’s unique journey towards vet med!",
        animal: "Snow Leopards",
        photo: jrMemberDirectorImage
      }
    ]
  },
  {
    slug: "merchandise-team",
    title: "Merchandise Team",
    summary: "Designs branded gear that builds pride and raises funds for programming.",
    description:
      "From concept to fulfillment, the Merchandise Team keeps members outfitted while supporting national fundraising priorities.",
    members: [
      {
        name: "Ledia Xie",
        role: "Sr VP Merchandise",
        bio:
          "Hi everyone! I’m Ledia and I’m the SR VP Merchandise this year at CPVMA. I’m also a third-year Animal Biology student at the University of Guelph. I have an orange cat and a turtle back at home in Markham. I’m working hard to become a veterinarian in the future and I’m excited to be a member of the CPVMA executive team!",
        animal: "Cats",
        photo: srVpMerchandiseImage
      },
      {
        name: "Darcy Owen",
        role: "Jr VP Merchandise",
        bio:
          "Hi everyone! My name is Darcy, and I’m this year’s Junior Vice President of Merchandise. I’m a first-year student at the University of Alberta majoring in Animal Health and an executive member of the U of A Pre-Vet Club. I hope to pursue veterinary school in the future, as I’m passionate about caring for companion animals, horses, and cattle. I’m thrilled to be part of this team and look forward to supporting everyone in reaching their goals.",
        animal: "Dogs",
        photo: jrVpMerchandiseImage
      }
    ]
  },
  {
    slug: "regional-committee",
    title: "General Committee Members (Regional)",
    summary: "Maintains a coast-to-coast presence through regional campus leaders.",
    description:
      "Regional representatives contextualize CPVMA programming for their universities and elevate local opportunities to the national team.",
    members: [
      {
        name: "Joséphine Noue",
        role: "GCM – OVC",
        bio:
          "Hi! My name is Joséphine and I’m a second-year Animal Biology student at the University of Guelph. I’ve gained experience through a veterinary internship in Peru and shadowing at local clinics, and I’m passionate about pursuing a career in veterinary medicine. I’m excited to be part of CPVMA to connect with other pre-vet students and help support our community.",
        animal: "Dolphin",
        photo: gcmOvcImage
      },
      {
        name: "Makayla Graham",
        role: "GCM – WCVM",
        bio:
          "Hi I'm Makayla! I'm a second year student at the University of Victoria in the Biology, Mathematics, and Statistics program and hope to get accepted into vet school in the near future to earn a DVM. My passion lies in wildlife and my dream is to spend the rest of my life working with and protecting wild animals from the harm humans bring them as a Wildlife Veterinarian. I am the CPVMA's Regional General Committee Member for the Western College of Veterinary Medicine and this is my first year with the association. I look forward to the CPVMA's upcoming year and working with all of you aspiring vets!",
        animal: "African Wild Dog",
        photo: gcmWcvmImage
      },
      {
        name: "Gabriela Buch",
        role: "GCM – UCVM",
        bio:
          "Hi! My name is Gabriela Buch, and I am currently in my second year studying Animal Health, with a focus on Food Animals, at the University of Alberta. This is my first year being a part of CPVMA, and as such, I am super excited to be part of the team and connect pre-vets in the Alberta Region with others around Canada!",
        animal: "Alpacas",
        photo: gcmUcvmImage
      }
    ]
  },
  {
    slug: "delegates",
    title: "University Delegates",
    summary: "Links campus clubs with national CPVMA initiatives and symposium planning.",
    description:
      "Delegates represent their universities, organize local programming, and make sure provincial perspectives shape CPVMA events.",
    members: [
      {
        name: "Darcy Owen",
        role: "Delegate – UofA Pre-Vet/Animal Health Club",
        bio: `Hi everyone! My name is Darcy Owen, I am in my first year of Animal Health Science at the University of Alberta. I am an executive of the U of A Pre-Vet club and the CPVMA delegate for our club this year. I am deeply passionate about animal health, welfare, and the advancement of veterinary education. In the future I hope to pursue a career in mixed animal practice and shelter medicine. Being part of the CPVMA allows me to connect with other pre-veterinary students across Canada and contribute to initiatives that support learning, leadership, and professional growth within the veterinary field. My goal is to provide the Pre-Vet community with the resources they need to succeed and find their passion. I’m proud to represent my school and to help further the CPVMA’s mission of supporting the next generation of veterinarians through compassion, knowledge, and dedication. Feel free to reach out to me or my awesome team at prevet@ualberta.ca or on Instagram @uofaprevetclub.`,
        animal: "",
        photo: darcyOwenImage
      },
      {
        name: "Elyane Fortin",
        role: "Delegate – Dal AC Pre-Vet Society",
        bio: `Hi! I’m Ellie, the CPVMA Delegate representing Dalhousie University’s Agricultural Campus. I’m currently a student in the Bioveterinary Science program with the goal of pursuing a future career in veterinary medicine.`,
        animal: "",
        photo: elyaneFortinImage
      },
      {
        name: "Brynn Easton",
        role: "Delegate – USask Pre-Vet Club",
        bio: `Hi my name is Brynn Easton and I am in my 3rd year of Animal Bioscience at the University of Saskatchewan. I grew up on an acreage in Moosomin Saskatchewan. I hope to get into the WCVM and return to a small rural town as a mixed animal veterinarian. I am very excited to be the USask Pre-Veterinary Club’s CPVMA Delegate this year.`,
        animal: "",
        photo: brynnEastonImage
      },
      {
        name: "Amaal Hassan",
        role: "Delegate – YU Pre-Vet Club",
        bio: `Hi there! my name is Amaal and i am the CPVMA Delegate for York University In Toronto, Canada! I am a 4th year Biology Honours student hoping to pursue veterinary medicine to specialize in wildlife medicine and possibly oncology.
I have primarily worked in emergency veterinary medicine. I am now at the Toronto Wildlife Centre and a barn with equines, since horses are one of my favourite animals! As also a Telus Health veterinary representative, I was the most recent panellist on making veterinary care more accessible and cost-effective. All of my experiences have provided me with useful insights and real-world knowledge in the veterinary field.
Being the Co-President & Founder of the YUPV for a second year, my goal has always been to help our pre-vet students connect, gain hands on experiences and grow their knowledge for veterinary medicine. I am very excited to apply this to a nation-wide level and connect pre-veterinary students from all around Canada! 
Feel free to contact us at prevetclub.yorku@gmail.com or on instagram @yuprevet!`,
        animal: "",
        photo: amaalHassanImage
      },
      {
        name: "Allison Amos",
        role: "Delegate – Western Pre-Vet Society",
        bio: `My name is Allison Amos and I am the CPVMA delegate for Western University! I am also the president of the pre-veterinary society at Western University, a varsity athlete on the Western Women's Rugby team, and in my fourth year studying Ecosystem Health. I hope to attend Ontario Veterinary College at the University of Guelph and become a veterinarian that specializes in exotics. 


As part of the pre-veterinary society, I hope to guide other students on their path to becoming a veterinarian. My goal is to help undergraduates become competitive applicants for veterinary schools, and to learn about how diverse and rewarding a career in veterinary medicine can be. I personally have worked with a wide range of Ontario wildlife and domestic animals during my undergrad at Western, and have been able to see first hand how veterinary medicine can connect both animals and people. 


If you're interested in learning more about me or our society at Western, reach out to our email prevet.club@westernusc.ca or follow us on instagram @westernprevet.`,
        animal: "",
        photo: allisonAmosImage
      },
      {
        name: "Gena Dowd",
        role: "Delegate – Western Manitoba Pre-Vet Medical Association",
        bio: `Hello! My name is Gena Dowd and I am in my 3rd year of pre-vet studies at Brandon University. I am the president of the Western Manitoba Pre-Vet Medical Association at BU. I have loved animals and caring for them for as long as I can remember and that is what inspired me to pursue veterinary medicine. I hope to one day own a mixed animal clinic in rural Manitoba!
As president of the Brandon University Pre-Vet club (WM PVMA) and a CPVMA delegate I aim to bring together a network of pre-vet students at BU and throughout Western Manitoba so we can support each other throughout our careers, wherever they may take us! I also aim to provide a range of experiences and opportunities for pre-vet students.  
You can contact our club by email at wmpvma@gmail.com and make sure to check us out on Instagram @wmpvma`,
        animal: "",
        photo: genaDowdImage
      },
      {
        name: "Frankie Arnold",
        role: "Delegate – UPEI Pre-Vet Society",
        bio: `Hi! My name is Frankie Arnold and I’m a 4th year pre-vet student at UPEI. I’m an international student from a small island in the Atlantic, Bermuda. I helped start up the pre-vet and animal welfare society (PAAWS)  3 years ago and am now the co-president.
I’ve worked with marine, exotic, small and large animals, and hope to pursue orthopedics as a specialty. I am currently working on a research honors with hermit crabs. My goal is to provide students with opportunities to diversify their portfolio and learn key skills that are vital for the veterinary field. 
Feel free to reach out to us on Instagram, @upeiprevetsociety. `,
        animal: "",
        photo: frankieArnoldImage,
        imagePosition: "top"
      },
      {
        name: "Samantha Chen",
        role: "Delegate – Future Vets Club (FVC)",
        bio: `Hey everyone! My name is Sam, and I’m doing my third year of Animal Biology at the University of Guelph. I am currently a CPVMA delegate for the UofG’s Future Vets Club (FVC), but was also a volunteer for the events committee last year (highly recommended). In my free time, I enjoy sketching, playing video games, and taking my foster dog Coco out for hikes. Check out our club on instagram @fvcguelph if you’re interested in learning more about vet schools around the world, attending both in-person and online events, and connecting with a supportive pre-vet community! We look forward to collaborating with the CPVMA in the future. :)`,
        animal: "",
        photo: samanthaChenImage
      },
      {
        name: "Natalie Sit",
        role: "Delegate – UofM Pre-Vet Club",
        bio: `Hi everyone! My name is Natalie Sit. I am currently in my fourth year of a Bachelor of Science in General Biology at the University of Manitoba. I am the Director of Communications for our pre-vet club, and I am truly honoured to represent our club as a delegate. I am passionate about animal welfare and environmental sustainability, and I hope to pursue veterinary medicine to speak for voiceless animals and restore the bond between animals and humans. My goal is to help our club members connect with more pre-vet students across Canada through CPVMA, gain hands-on experience and insights, and make the pre-vet journey less daunting by fostering a supportive community.
 
Feel free to contact our club at uofmprevet@gmail.com and follow us on Instagram @prevetclubuofm :)`,
        animal: "",
        photo: natalieSitImage
      },
      {
        name: "Liliana Cheung",
        role: "Delegate – Veterinary Medicine Club (UofT)",
        bio: `Hi! My name is Liliana. I am representing UofT's Veterinary Medicine Club (VMC) as a CPVMA delegate for 2025/26.
While I am mainly interested in mixed practice, I am hoping I will also have opportunities to explore exotics, ophthalmology, and wildlife conservation. What inspires me most are the initiatives for equitable access to care, as well as veterinary contributions to environmental sustainability. Other than that, I love to read, try out new food/cafes/recipes, and go skiing in my free time! 
VMC's executive team and I are so excited for this opportunity to collaborate with the CPVMA. We believe this new relationship will support, encourage, and connect our community of pre-vet students.
If you are interested in learning more about VMC or have any specific questions, feel free to reach out to us by email (vmc@studentorg.utoronto.ca) or Instagram (@vmc_uoft). We would love to hear from you!`,
        animal: "",
        photo: lilianaCheungImage
      }
    ]
  }
];

export const getExecutiveRoleBySlug = (slug: string) =>
  executiveRoles.find((role) => role.slug === slug);
