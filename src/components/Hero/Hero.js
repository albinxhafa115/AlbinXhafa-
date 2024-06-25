import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => {
  const handleDownloadClick = () => {
    const pdfUrl = 'Albin Xhafa CV.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Albin Xhafa CV.pdf';
    link.click();
  };

  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            Welcome To <br />
            My Personal Portfolio
          </SectionTitle>
          <SectionText>
            My name is Albin Xhafa, and I am a passionate programmer with a strong background in programming languages and technologies. I have a proven track record of delivering high-quality code and solutions. I am a problem-solver at heart and enjoy working on challenging projects that push the boundaries of what is possible. I am always eager to learn and adapt to new technologies and programming paradigms.
          </SectionText>
          <Button onClick={handleDownloadClick}>Download My CV</Button>
        </LeftSection>
      </Section>
    </>
  );
};

export default Hero;