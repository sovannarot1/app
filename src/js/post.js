const data = [
  {
    photo: "../../assets/img/feynman.avif",
    name: "Feynman Technique",
    date: "18/04/2024",
    about: "",
    use: "",
    bonus: "",
  },
  {
    photo: "../../assets/img/activerecall.png",
    name: "Active Recall",
    date: "19/04/2024",
    about: "",
    use: "",
    bonus: "",
  },
  {
    photo: "../../assets/img/learningpyramid.jpg",
    name: "Learning Pyramid",
    date: "20/04/2024",
    about: "",
    use: "",
    bonus: "",
  },
  {
    photo: "../../assets/img/flowtime.png",
    name: "Flowtime Method",
    date: "21/04/2024",
    about:
      "តើអ្នកធ្លាប់បានផ្តោតរៀនសូត្រជាច្រើនម៉ោងដែរឬទេ​? តែបែរទៅជាមានការឈឺក្បាលនិងចាំអ្វីដែលបានរៀនតិចតួចបំផុតទៅវិញ។ នេះនែ‌៎!ខ្ញុំមានវិធីមួយមកជួយអ្នកទាំងអស់គ្នាឱ្យបានដឹងពីរបៀបជំនួសការរៀនជាច្រើនម៉ោងតែមិនបានអ្វីសោះឱ្យមករៀនសូត្រទទូលបានការចាំជាច្រើនមកវិញ។ Flowtime Techniqueនេះឯងដែលជាទិចនិចមួយមកជួយក្នុងការកំណត់ពេលផ្តោតរៀននិងពេលត្រូវសម្រាកបន្តិចដើម្បីឱ្យខួរក្បាលយើងចាប់បាននិងរៀនទទួលបានចំណេះដឹងច្រើនជាងការរៀនដោយផ្តោតរយៈពេលជាច្រើនម៉ោង។ ទិចនិចនេះត្រូវបានអនុវត្តដោយសិស្សឆ្លាតក្នុងការរៀនជាច្រើនក្នុងពិភពលោកយើងនេះដើម្បីរៀនដោយភាពវៃឆ្លាតក្នុងការប្រជែងចំណាត់ថ្នាក់និងពិន្ទុក្នុងថ្នាក់និងក្នុងការប្រលងនានា។ ទិចនិចនេះត្រូវបានអនុវត្តនិងទទួលស្គាល់ពីសិស្សានុសិស្ស និងអ្នកវិទ្យាសាស្ត្រទូទាំងពិភពលោកថាជាវិធីដ៏ល្អសម្រាប់ខួរក្បាលយើង ព្រោះវាអាចឱ្យយើងរៀនច្រើនម៉ោងដោយមិនសូវជាធុញទ្រាន់ ហត់នើយ​និង​ ខួរក្បាលមិនរងការឈឺចាប់ ហើយរៀនដោយភាពសប្បាយនិងចាំបានច្រើនទៀតផង៕",
    use: "អ្នកគ្រាន់តែចុចប៊ូតុងពាក្យចាប់ផ្តើមហើយអ្នកផ្តោតលើការរៀនអ្នកចោះ។ ពេលណាអ្នកមានធុរៈចាំបាច់អ្នកគ្រាន់តែចុចប៊ូតុងពាក្យឈប់នាឡិកានឹងឈប់ដើរចាំអ្នក​ ពេលណាអ្នកអាចបន្តរៀនទៅទៀតអ្នកគ្រាន់តែចុចប៊ូតុងពាក្យចាប់ផ្តើមវិញ។ ពិសេសពេលណាអ្នករៀនបានរយៈពេលណាមូយដែលល្អក្រោម១ម៉ោងកន្លះហើយអ្នកបាត់បង់ការផ្តោតក្នុងការរៀនអ្នកត្រូវចុចប៊ូតុងពាក្យគណនានោះនាឡិកានឹងរត់ទៅនាទីដែលអ្នកត្រូវសម្រាកដើម្បីឱ្យនាទីពេលសម្រាកដើរអ្នកត្រូវចុចប៊ូតុងចាប់ផ្តើម។សកម្មភាពទាំងអស់នេះនៅក្នុង៖ <a href='./clock.html'>Flowtime Timer</a>",
    bonus: "",
  },
];
let output = "";
let boll = false;
const postshow = document.getElementsByClassName("postlayout");
function showpost(index) {
  boll = !boll;
  for (let t = 0; t < postshow.length; t++) {
    if (index == t) {
      postshow[t].style.transform = "scale(1)";
      for (let x = 0; x < t; x++) {
        postshow[x].style.transform = "scale(0)";
      }
      for (let y = t + 1; y < postshow.length; y++) {
        postshow[y].style.transform = "scale(0)";
      }
    }
  }
}
function hidepost(index) {
  postshow[index].style.transform = "scale(0)";
}
function createpost(photo, name, date, index) {
  output += `
    <div class="postarticle">
      <img src="${photo}" />
      <div class="texttab">
        <div class="text">
          <h1>${name}</h1>
          <h3>Date: ${date}</h3>
        </div>
        <button onclick="showpost(${index})">Learn More</button>
      </div>
    </div>
  `;
}
for (let i = 0; i < data.length; i++) {
  createpost(data[i].photo, data[i].name, data[i].date, i);
}
document.getElementById("posttab").innerHTML = output;

let input = "";
function createpostlayout(name, photo, about, use, bonus, index) {
  input += `<div class="postlayout">
  <div class="top">
    <h2>${name}</h2>
    <div style="width: calc(100vw - 300px); height: 25px"></div>
    <button onclick="hidepost(${index})">
      <img src="../../assets/img/xmark.svg" alt="" />
    </button>
  </div>
  <div class="mid">
    <img src=${photo} alt="" />
    <h2>អំពី៖</h2>
    <article>
  ${about}
    </article>
    <h2>របៀបប្រើ៖</h2>
    <article>
${use}
    </article>
    <h2>ករណីពិសេស៖</h2>
    <article>
    ${bonus}
    </article>
  </div>
</div>`;
}
for (let i = 0; i < data.length; i++) {
  createpostlayout(
    data[i].name,
    data[i].photo,
    data[i].about,
    data[i].use,
    data[i].bonus,
    i
  );
}
document.getElementById("postlayouttab").innerHTML = input;
