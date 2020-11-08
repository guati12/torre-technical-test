export class Person {
  person: {
    professionalHeadline: string;
    completion: number;
    showPhone: boolean;
    created: Date;
    verified: boolean;
    flags: {
      benefits: boolean;
      canary: boolean;
      enlauSource: boolean;
      fake: boolean;
      featureDiscovery: boolean;
      getSignaledBenefitsViewed: boolean;
      firstSignalSent: boolean;
      promoteYourselfBenefitsViewed: boolean;
      promoteYourselfCompleted: boolean;
      importingLinkedin: boolean;
      onBoarded: boolean;
      remoter: boolean;
      signalsFeatureDiscovery: boolean;
      signedInToOpportunities: boolean;
      importingLinkedinRecommendations: boolean;
      contactsImported: boolean;
      appContactsImported: boolean;
      genomeCompletionAcknowledged: boolean;
    };
    weight: number;
    locale: string;
    subjectId: string;
    picture: string;
    hasEmail: Boolean;
    name: string;
    links: [
      {
        id: string;
        name: string;
        address: string;
      }
    ];
    location: {
      name: string;
      shortName: string;
      latitude: number;
      longitude: number;
      timezone: string;
      timezoneOffSet: number;
    };
    theme: string;
    id: string;
    pictureThumbnail: string;
    claimant: Boolean;
    summaryOfBio: string;
    weightGraph: string;
    publicId: string;
  };
}
