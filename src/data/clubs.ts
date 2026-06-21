import type { StaticImageData } from "next/image";
import albertaLogo from "../../logos/clubs/alberta.webp";
import calgaryLogo from "../../logos/clubs/calgary.webp";
import carletonLogo from "../../logos/clubs/carleton.webp";
import fvcLogo from "../../logos/clubs/fvc.webp";
import lethbridgeLogo from "../../logos/clubs/lethbridge_alberta.png";
import manitobaLogo from "../../logos/clubs/manitoba.webp";
import newfoundlandLogo from "../../logos/clubs/newfoundland.webp";
import peiLogo from "../../logos/clubs/pei.webp";
import saskatchewanLogo from "../../logos/clubs/saskatchewan.webp";
import unbcLogo from "../../logos/clubs/unbc-prevet-club-logo.webp";
import sfuLogo from "../../logos/clubs/sfu.webp";
import vmcLogo from "../../logos/clubs/vmc.webp";
import westernLogo from "../../logos/clubs/western.webp";
import yorkLogo from "../../logos/clubs/york.webp";

export type Club = {
  name: string;
  university: string;
  email?: string | string[];
  instagram?: string;
  facebook?: string;
  website?: string;
  logo?: StaticImageData;
};

export type ProvinceDirectory = {
  province: string;
  clubs: Club[];
};

export const directory: ProvinceDirectory[] = [
  {
    province: "Alberta",
    clubs: [
      {
        name: "University of Alberta Pre-Vet/Animal Health Club",
        university: "University of Alberta",
        email: "prevet@ualberta.ca",
        instagram: "@uofaprevetclub",
        facebook: "Pre-Vet Animal Health Club UofA",
        logo: albertaLogo
      },
      {
        name: "Pre-Veterinary Students' Association",
        university: "University of Calgary",
        email: "pvsa.ucalgary@gmail.com",
        instagram: "@pvsaucalgary",
        facebook: "U of C Pre-Veterinary Students' Association",
        logo: calgaryLogo
      },
      {
        name: "University of Lethbridge Pre-Veterinary Club",
        university: "University of Lethbridge",
        email: ["prevet.club@uleth.ca", "uoflprevetclub@gmail.com"],
        instagram: "@pre.vet.uleth",
        logo: lethbridgeLogo
      }
    ]
  },
  {
    province: "British Columbia",
    clubs: [
      {
        name: "SFU Pre-Vet Club",
        university: "Simon Fraser University",
        email: "sfuprevetclub@gmail.com",
        instagram: "@sfupaw_",
        facebook: "@sfuprevet",
        logo: sfuLogo
      },
      {
        name: "UBCO Pre-Vet Club",
        university: "University of British Columbia Okanagan Campus",
        email: "prevetclub.okanagan@outlook.com",
        instagram: "@uprevet_okanagan"
      },
      {
        name: "UNBC Pre-Veterinary Club",
        university: "University of Northern British Columbia",
        email: "prevetclub@unbc.ca",
        instagram: "@unbc_prevetclub",
        facebook: "UNBC Pre-Vet Club",
        logo: unbcLogo
      }
    ]
  },
  {
    province: "Manitoba",
    clubs: [
      {
        name: "University of Manitoba Pre-Vet Club",
        university: "University of Manitoba",
        email: "uofmprevetclub@gmail.com",
        instagram: "@prevetclubuofm",
        logo: manitobaLogo
      },
      {
        name: "The University of Winnipeg's Pre-Veterinary Club (UWPVC)",
        university: "University of Winnipeg",
        email: "uwprevet@outlook.com",
        instagram: "@uwprevetclub"
      }
    ]
  },
  { province: "New Brunswick", clubs: [] },
  {
    province: "Newfoundland and Labrador",
    clubs: [
      {
        name: "MUN Pre-Vet Club",
        university: "Memorial University of Newfoundland",
        email: "munprevetclub@gmail.com",
        instagram: "@munprevet",
        facebook: "https://www.facebook.com/profile.php?id=61575069338953&sk=about",
        logo: newfoundlandLogo
      }
    ]
  },
  { province: "Northwest Territories", clubs: [] },
  { province: "Nova Scotia", clubs: [] },
  { province: "Nunavut", clubs: [] },
  {
    province: "Ontario",
    clubs: [
      {
        name: "Carleton Pre-Veterinary Medicine Club",
        university: "Carleton University",
        email: "carleton.prevetmed@gmail.com",
        instagram: "@carleton.prevetmed",
        facebook: "@carleton.prevetmed",
        logo: carletonLogo
      },
      {
        name: "Future Vets Club",
        university: "University of Guelph",
        email: "fvc@uoguelph.ca",
        instagram: "@fvcguelph",
        facebook: "@fvcguelph",
        logo: fvcLogo
      },
      {
        name: "Laurentian University Pre Vet Club",
        university: "Laurentian University",
        email: "evan_rassel@laurentian.ca",
        instagram: "@laurentian_prevetclub"
      },
      {
        name: "UofT's Veterinary Medicine Club",
        university: "University of Toronto",
        email: "vmc@utoronto.ca",
        instagram: "@vmc_uoft",
        facebook: "@uoftvmc",
        logo: vmcLogo
      },
      {
        name: "Western University's Pre-Veterinary Society",
        university: "Western University",
        email: "prevet.club@westernusc.ca",
        instagram: "@westernprevet",
        facebook: "@westernprevet",
        logo: westernLogo
      },
      {
        name: "YorkU Pre-Veterinary Medicine Club",
        university: "York University",
        email: "prevetclub.yorku@gmail.com",
        instagram: "@yuprevet",
        logo: yorkLogo
      }
    ]
  },
  {
    province: "Prince Edward Island",
    clubs: [
      {
        name: "UPEI Pre-Veterinary & Animal Welfare Society",
        university: "University of Prince Edward Island",
        email: "Prevet@upeisu.ca",
        instagram: "@upeiprevetsociety",
        logo: peiLogo
      }
    ]
  },
  {
    province: "Quebec",
    clubs: [
      {
        name: "McGill Pre-Vet Society",
        university: "McGill University",
        email: "mcgill.pre-vet.society@outlook.com",
        instagram: "@mcgillprevetsociety"
      }
    ]
  },
  {
    province: "Saskatchewan",
    clubs: [
      {
        name: "U of S PreVet Club",
        university: "University of Saskatchewan",
        email: "u_of_s_prevet@hotmail.com",
        instagram: "@u_of_s_prevet",
        facebook: "@UofSPVC",
        logo: saskatchewanLogo
      }
    ]
  }
];
