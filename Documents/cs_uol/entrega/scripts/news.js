const card1 = document.querySelector('#card1');
const card2 = document.querySelector('#card2');
const card3 = document.querySelector('#card3');
const card5 = document.querySelector('#card5');
const card6 = document.querySelector('#card6');
const card7 = document.querySelector('#card7');
const mainImage = document.querySelector('#main-image');
const leadText = document.querySelector('#lead-text');
const card1Title = document.querySelector('#card1-title');
const card2Title = document.querySelector('#card2-title');
const card3Title = document.querySelector('#card3-title');
const card4Title = document.querySelector('#card4-title');
const card5Title = document.querySelector('#card5-title');
const card6Title = document.querySelector('#card6-title');
const card7Title = document.querySelector('#card7-title');
const contentTitle = document.querySelector('#content-title');


// Handle keydown events on card ---- accessibility
card1.addEventListener('keydown', function(event) {
  if (event.key === 'Enter' || event.key === ' ') {
    showCard1Content();
  }
});

card1.addEventListener('click', function(event) {
  showCard1Content();
});

// Handle keydown events on card2 ---- accessibility
card2.addEventListener('keydown', function(event) {
  if (event.key === 'Enter' || event.key === ' ') {
    showCard2Content();
  }
});


card2.addEventListener('click', function(event) {
  showCard2Content();
});


// Handle keydown events on card3 ---- accessibility
card3.addEventListener('keydown', function(event) {
  if (event.key === 'Enter' || event.key === ' ') {
    showCard3Content();
  }
});


card3.addEventListener('click', function(event) {
  showCard3Content();
});





card5.addEventListener('keydown', function(event) {
  if (event.key === 'Enter' || event.key === ' ') {
    showCard5Content();
  }
});
card5.addEventListener('click', function(event) {
  showCard5Content();
});


card6.addEventListener('keydown', function(event) {
  if (event.key === 'Enter' || event.key === ' ') {
    showCard6Content();
  }
});
card6.addEventListener('click', function(event) {
  showCard6Content();
});


card7.addEventListener('keydown', function(event) {
  if (event.key === 'Enter' || event.key === ' ') {
    showCard7Content();
  }
});
card7.addEventListener('click', function(event) {
  showCard7Content();
});




// Functions to show content for each card
// card - content is the aria-labelledby value for the card content
// the image and text were described for the aria-labelledby value to compensate for the lack of an alt attribute on the image
function showCard1Content() {
  mainImage.src = 'images/card1.jpg';
  mainImage.alt = 'falcon 9 rocket';

  contentTitle.innerHTML = card1Title.innerHTML;
  leadText.innerHTML = `
    <p>On Thursday, March 2, 2023, a SpaceX Falcon 9 rocket lifted off from NASA's Kennedy Space Center in Florida, carrying four astronauts to the International Space Station (ISS) as part of NASA's SpaceX Crew-6 mission . The launch was originally scheduled for Monday, February 27, but was postponed due to a clog in a filter that could have affected the rocket's performance.</p>
  `;
  document.documentElement.scrollIntoView({
    behavior: 'smooth'
  });
  leadText.focus(); 
}


function showCard2Content() {
  mainImage.src = 'images/card2.jpg';
  mainImage.alt = 'SpaceX Crew Dragon capsule on top of a Falcon 9 rocket';
  contentTitle.innerHTML = card2Title.innerHTML;
  leadText.innerHTML = `
    <p>SpaceX, the private rocket company founded by Elon Musk, is preparing to launch NASA's next long-duration crew of four astronauts to orbit on Thursday, March 16, 2023. The mission, called Crew-6, is part of NASA's Commercial Crew Program, which aims to restore human spaceflight capability from U.S. soil.
    </p>
  `;

  document.documentElement.scrollIntoView({
    behavior: 'smooth'
  });
  leadText.focus(); 
}


function showCard3Content() {
  mainImage.src = 'images/card3.jpeg';
  mainImage.alt = 'International Space Station Mission rocket by spacex, using crew dragon capsule';
  contentTitle.innerHTML = card3Title.innerHTML;
  leadText.innerHTML = `
    <p>During their stay on the ISS, the Crew-1 astronauts witnessed many amazing sights from their windows, such as auroras, lightning storms, volcanoes, and city lights. They also celebrated holidays and special occasions with their crewmates from Russia and Europe. They shared their experiences and photos with the public through social media and video calls.
    </p>
  `;
  document.documentElement.scrollIntoView({
    behavior: 'smooth'
  });
  leadText.focus(); 
}




function showCard5Content() {
  mainImage.src = 'images/card5.jpg';
  mainImage.alt = 'International Space Station close up';
  contentTitle.innerHTML = card5Title.innerHTML;
  leadText.innerHTML = `
    <p>An investigation by the Japan Aerospace Exploration Agency (JAXA) has successfully generated potable water from urine on board the International Space Station (ISS). The system, called the Water Recovery System (WRS), extracts water from urine using a series of treatments and filtering processes, including distillation and ion exchange. The resulting water has been deemed safe for human consumption, which could be vital for long-term space missions where water supplies are limited. This breakthrough technology represents a significant step towards sustainable water management in space and paves the way for future exploration missions.
    </p>
  `;
  document.documentElement.scrollIntoView({
    behavior: 'smooth'
  });
  leadText.focus(); 

}


function showCard6Content() {
  mainImage.src = 'images/card6.jpg';
  mainImage.alt = 'Meteor shower';
  contentTitle.innerHTML = card6Title.innerHTML;
  leadText.innerHTML = `
    <p>The Quadrantids, Lyrids, Perseids, and Geminids are meteor showers that offer spectacular views of shooting stars throughout the year. The Quadrantids are in early January, the Lyrids in late April, the Perseids in mid-August, and the Geminids in mid-December. These meteor showers are known for their bright, fast-moving, and colorful meteors and are widely viewed by stargazers.
    </p>
  `;
  document.documentElement.scrollIntoView({
    behavior: 'smooth'
  });
  leadText.focus(); 

}


function showCard7Content() {
  mainImage.src = 'images/card7.jpg';
  mainImage.alt = 'Brussels City European Parliament';
  contentTitle.innerHTML = card7Title.innerHTML;
  leadText.innerHTML = `
    <p>The 15th European Space Conference is set to take place on 24-25 January 2023 in Brussels, Belgium. This event will bring together key stakeholders of the European space domain, including policymakers, industry representatives, and experts in the field. The conference will provide a platform for discussions on a wide range of topics, including the European space industry's future, the latest technological advancements, and potential collaborations with other international space programs. This conference serves as an important opportunity for participants to network and exchange ideas, furthering Europe's leadership in the field of space exploration and technology.
    </p>
  `;
  document.documentElement.scrollIntoView({
    behavior: 'smooth'
  });
  leadText.focus(); 

}