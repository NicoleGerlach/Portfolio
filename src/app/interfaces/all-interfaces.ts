
export interface HeaderContent {
  whyMe: string;
  skills: string;
  projects: string;
  contact: string;
  nameSmall: string;
  professionSmall: string;
}

export interface AboutMeContent {
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
  angular: string;
  typeScript: string;
  javaScript: string;
  html: string;
  css: string;
  restApi: string;
  firebase: string;
  git: string;
  materialDesign: string;
  scrum: string;
}

export interface ReferencesContent {
  headline: string;
  notions: string;
  headlineWide: string;
  references: ReferenceCard[],
}

export interface ReferenceCard {
  name: string;
  project: string;
  projectName: string;
  feedback: string;
  button: string;
  buttonBack: string;
  open?: boolean;
}

export interface ProjectContent {
  headline: string,
  technologies: string,
  duration: string,
  about: string,
  organisation: string,
  groupWork: string,
  projects?: ProjectCard[],
}

export interface ProjectCard {
  proNumber: string,
  proName: string,
  proTechImg?: TechImg[],
  proTechnologies: string,
  proDuration: string,
  img: string,
  proDeclaration: string,
  proOrganisation: string,
  proGroupWork: string,
  lifeTest: string,
  gitHub: string,
}

export interface TechImg {
  src: string,
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

export interface PrivacyPolicyContent {
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
