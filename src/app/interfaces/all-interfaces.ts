
  export interface AboutMeContent {
  whyMe: string;
  skills: string;
  projects: string;
  contact: string;
  nameSmall: string;
  professionSmall: string;
  name: string;
  profession: string;
}

export interface WhyMeContent {
  whyMe: string;
  me: string;
  located: string;
  dots: string;
  motivation: string;
  skills: string;
}

export interface MySkillsContent {
  headline: string;
}

export interface ReferencesContent {
  headline: string;
  notions: string;
  references: ReferenceCard[],
}

export interface ReferenceCard {
  name: string;
  project: string;
  projectName: string;
  feedback: string;
}

export interface ProjectContent {
  headline: string,
  technologies: string,
  duration: string,
  about: string,
  organisation: string,
  groupWork: string,
  projects: ProjectCard[],
}

export interface ProjectCard {
  proNumber: string,
  proName: string,
  proTechnologies: string,
  proDuration: string,
  img: string,
  proDeclaration: string,
  proOrganisation: string,
  proGroupWork: string,
}

export interface ContactContent {
  headline: string;
  phone: string;
  mail: string;
  text: string;
  cooperation: string;
  phName: string;
  phMail: string;
  phMessage: string;
  have: string;
  prPolicy: string;
  read: string;
}

export interface LegalNoticeContent {
  headline: string;
  impressum: string;
  name: string;
  address: string;
  city: string;
  first: string;
  notice: string;
  noticeText: string;
  dataCollection: string;
  responsible: string;
  responsibleText: string;
  capture: string;
  captureText: string;
  captureTextTwo: string;
  use: string;
  useText: string;
  rights: string;
  rightsText: string;
  rightsTextTwo: string;
  second: string;
  secondText: string;
  provider: string;
  providerText: string;
  providerTextTwo: string;
  third: string;
  dataProtection: string;
  dataProtectionText: string;
  dataProtectionTextTwo: string;
  responsibility: string;
  responsibilityText: string;
  phone: string;
  mail: string;
  responsibilityTextTwo: string;
  memoryDuration: string;
  memoryDurationText: string;
  legalBasis: string;
  legalBasisText: string;
  recipient: string;
  recipientText: string;
  revocation: string;
  revocationText: string;
  contradiction: string;
  contradictionText: string;
  contradictionTextTwo: string;
  complaintRight: string;
  complaintRightText: string;
  dataTransfer: string;
  dataTransferText: string;
  information: string;
  informationText: string;
  restriction: string;
  restrictionText: string;
  listOne: string;
  listTwo: string;
  listThree: string;
  listFour: string;
  restrictionTextTwo: string;
  dataCollectionWebsite: string;
  inquiry: string;
  inquiryText: string;
  inquiryTextTwo: string;
  inquiryTextThree: string;
  inquiryTextFour: string;
}
