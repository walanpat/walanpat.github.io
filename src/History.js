import React, { Component } from "react";

//Note: need some proper css in regards to formatting paragraphs.  Do this wednesday night.

class History extends Component {
  render() {
    return (
      <div>
        <h2>The Beginning</h2>
        <br></br>

        <p>The term Darknet was coined in the 1970's in regards to a group of networks isolated from The Advanced Research Projects Agency network (ARPANET).
        It’s only been in the past 20 years the media and average American has learned of its existence. Anyone with an internet connection and a device to use it
          can log on.</p>

        <p> The Darknet/Dark Web/ Deep Web is approximately 450 times the size of the “Surface Web” or the internet as most people know it.
        Whereas the Surface Web has all of it’s contents stored somewhere within a consistent unchanging HTML file (unless it’s being manually updated
        by the website host) the Deep Web is constantly changing.  These hidden websites that exist here as hosted by individuals instead of corporations
        or small businesses.  As a result you may only have access to a website within a certain window of the day, you may have clicked the same link last
        week but now it goes to something entirely different or a “dead” link with a 404 host not found error being shown.  Not only this but due to the navigation
        encryption system that the Deep/Dark web uses, makes many load times for various sites very slow.  There’s a consistent changing that makes a newcomer's
        introduction to the Deep Web confusing and strange in comparison to the static use of the Surface Web.
          </p>

          <p class="center">figure1</p>
          <img src="imagestuff.png" alt="figure1" width="500" height="400" class="center" ></img>


        <p>The Deep Web is a huge collection of sites being hosted independently for differing reasons.
        Some are perfectly fine by moral standards and others are completely illegal and are explicitly stated to be so.  According to researchers Victoria Wang, Jeyong Jung, and Mihnea Mirea from the Security Journal:  These activities could be grouped into three main categories: (i) activism, journalism, and whistle-blowing; (ii) criminal activities in virtual markets; and (iii) cyber security threats including botnets, malware, and ransomware.” The Deep Web had been originally used for social and political purposes where individuals could share their societal and political beliefs without fear of ridicule or prosecution (depending on the environment/government).  By using a truly anonymous platform whistle blowing and freedom of speech reaches new heights however unregulated it may be. “During the Egyptian riots, for example, journalists and activists from around the world bypassed government censorship through Tor. They thus successfully informed the world about what was happening in Egypt (Stacey 2017).”  This sharing and leaking of classified government secrets or of wrongdoings by people within authoritative positions puts any whistleblower in a dangerous often life threatening situation.
        Famous whistleblowers like Edward Snowden come to mind here.
          </p>

        <p>The most famous market on the deep web was designed to specialize in the trade of illegal drugs, identities, credit card information, weapons, and contract killings.
        It was known as the Silk Road.  It is stated that it was promoting political movements against law agencies and destabilizing governments
        The Silk Road dominated the Deep Web as a central focus and icon for what the Deep Web was back in 2011.
        Since then the market side of the Deep Web has dramatically changed and turned into more recognizable business models.
        The Silk Road was taken down by police (as in turned offline, not destroyed) and later different iterations of it have come and gone, bringing forth things such as “Black Market Reloaded” and “Sheep Marketplace” and other quips and naming conventions.
        There has even grown to be an EBay style of user interaction between buyer and seller of different goods, designed to protect anonymity and settle disputes.
        The Deep Web is not the safest place, security wise.  There exist many hacking programs designed to directly or indirectly attack corporations or random individuals that are sold in various marketplaces.  Creators of malware share various techniques and methods to gain information and break down the barriers of security between devices.  Keyloggers and various consistent connection malware are common market items that despite being simple in concept, have a great deal of tact and design put into them creating stronger stealthier malware tools.  With the use of anonymous cryptocurrency these tools have great market potential.
          </p>

      </div>
    );
  }
}

export default History;