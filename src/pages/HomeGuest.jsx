import PageLayout from "../components/layout/PageLayout";
import { Banner } from "../components/layout/HomeGuset/Banner";
import { PlaceTab } from "../components/layout/HomeGuset/PlaceTab";
import { CoreFeatures } from "../components/layout/HomeGuset/CoreFeatures";
import { HowToUse } from "../components/layout/HomeGuset/HowToUse";
import { FooterBar } from "../components/layout/HomeGuset/FooterBar";

export const HomeGuest = () => {
  return (
    <div>
      <PageLayout>
        <div className="mx-[-112px]">
          <Banner />
          <PlaceTab />
          <CoreFeatures />
          <HowToUse />
          <FooterBar />
        </div>
      </PageLayout>
    </div>
  );
};
