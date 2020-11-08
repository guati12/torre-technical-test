export class Person {
  person?: {
    professionalHeadline?: string;
    completion?: number;
    showPhone?: boolean;
    created?: Date;
    verified?: boolean;
    flags?: {
      benefits?: boolean;
      canary?: boolean;
      enlauSource?: boolean;
      fake?: boolean;
      featureDiscovery?: boolean;
      getSignaledBenefitsViewed?: boolean;
      firstSignalSent?: boolean;
      promoteYourselfBenefitsViewed?: boolean;
      promoteYourselfCompleted?: boolean;
      importingLinkedin?: boolean;
      onBoarded?: boolean;
      remoter?: boolean;
      signalsFeatureDiscovery?: boolean;
      signedInToOpportunities?: boolean;
      importingLinkedinRecommendations?: boolean;
      contactsImported?: boolean;
      appContactsImported?: boolean;
      genomeCompletionAcknowledged?: boolean;
    };
    weight?: number;
    locale?: string;
    subjectId?: string;
    picture?: string;
    hasEmail?: Boolean;
    name?: string;
    links?: {
      id?: string;
      name?: string;
      address?: string;
    }[];
    location?: {
      name?: string;
      shortName?: string;
      latitude?: number;
      longitude?: number;
      timezone?: string;
      timezoneOffSet?: number;
    };
    theme?: string;
    id?: string;
    pictureThumbnail?: string;
    claimant?: Boolean;
    summaryOfBio?: string;
    weightGraph?: string;
    publicId?: string;
  };
  experiences?: {
    id?: string;
    category?: string;
    name?: string;
    organizations?: {
      id?: number;
      name?: string;
      picture?: string;
    }[];
    responsibilities?: string[];
    fromMonth?: string;
    fromYear?: string;
    toMonth?: string;
    toYear?: string;
    remote?: boolean;
    additionalInfo?: string;
    highlighted?: boolean;
    weight?: number;
    verifications?: number;
    recommendations?: number;
    media?: {
      group?: string;
      mediaType?: string;
      description?: string;
      mediaItems?: [
        {
          id?: string;
          address?: string;
          metadata?: string;
        }
      ];
    }[];
    rank?: number;
  }[];
}
