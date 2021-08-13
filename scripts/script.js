/* Body Header */

const bodyHeader = document.createElement("header");
bodyHeader.classList.add("head");
document.body.append(bodyHeader);

const header_image = document.createElement("img");
header_image.setAttribute("src", "./resources/th2.jpeg");
header_image.classList.add("photo");
bodyHeader.appendChild(header_image);

const nameBar = document.createElement("div");
nameBar.classList.add("nameBar");
bodyHeader.appendChild(nameBar);

const whiteBar = document.createElement("div");
whiteBar.classList.add("whiteBar");
nameBar.appendChild(whiteBar);

const nameBar_h1 = document.createElement("h1");
nameBar_h1.classList.add("name");
nameBar_h1.style.fontSize = "40px";
nameBar_h1.innerText = "Yash Vardhan";
nameBar.appendChild(nameBar_h1);

/* Body Main */

/* Contact Details */
const body_main = document.createElement("main");
document.body.append(body_main);

const contact = document.createElement("div");
contact.classList.add("contact");
body_main.appendChild(contact);

const contact_p = document.createElement("p");
contact_p.style.fontSize = "17px";
contact_p.innerText =
  "Haridwar Uttrakhand 1112343 | 1234567899| abcdefgh3@gmail.com | linkedin.com";
contact.appendChild(contact_p);

const contact_HR = document.createElement("HR");
contact.appendChild(contact_HR);

/* Main Table */

const details = document.createElement("div");
details.classList.add("details");
details.style.setProperty("margin", "0 20px 0 20px");
body_main.appendChild(details);

const tb1 = document.createElement("table");
tb1.classList.add("tb1");
details.appendChild(tb1);

const tr_1_tb1 = document.createElement("tr");
tb1.appendChild(tr_1_tb1);

const tdLeft = document.createElement("td");
tdLeft.classList.add("tdLeft");
tdLeft.style.setProperty("border-right", "1px solid grey");
tdLeft.style.setProperty("margin-left", "20px");
tr_1_tb1.appendChild(tdLeft);

const tbLeft = document.createElement("table");
tbLeft.classList.add("tbLeft");
tdLeft.appendChild(tbLeft);

const tr_profile = document.createElement("tr");
tr_profile.classList.add("profile");
tbLeft.appendChild(tr_profile);

const td_profile = document.createElement("td");
tr_profile.appendChild(td_profile);

const face_icon = document.createElement("span");
face_icon.classList.add("material-icons");
face_icon.innerText = "face";
td_profile.appendChild(face_icon);

const profile_name = document.createElement("b");
profile_name.style.setProperty("font-size", "17px");
profile_name.innerText = "PROFILE";
td_profile.appendChild(profile_name);

const br1 = document.createElement("br");
td_profile.appendChild(br1);

const profile_p = document.createElement("p");
profile_p.classList.add("tab2");
profile_p.innerText =
  "A software engineer. Excited to be a model one day and my new career as a full stack developer. I am ambitious, energetic, creative, curious and determined to succeed.";
td_profile.appendChild(profile_p);

const tr_education = document.createElement("tr");
tr_education.classList.add("education");
tbLeft.appendChild(tr_education);

const td_education = document.createElement("td");
tr_education.appendChild(td_education);

const school_icon = document.createElement("span");
school_icon.classList.add("material-icons");
school_icon.innerText = "school";
td_education.appendChild(school_icon);

const education_name = document.createElement("b");
education_name.style.setProperty("font-size", "17px");
education_name.innerText = "EDUCATION";
td_education.appendChild(education_name);

const br2 = document.createElement("br");
td_education.appendChild(br2);

const education_p1 = document.createElement("p");
education_p1.classList.add("tab2");
education_p1.innerText =
  "Delhi Public School, New Delhi | 2005 - 2019";
td_education.appendChild(education_p1);

const education_p2 = document.createElement("p");
education_p2.classList.add("tab3");
education_p2.innerText =
  "- Persuing Bachelor’s in Technology, computer science";
td_education.appendChild(education_p2);

const tr_skills = document.createElement("tr");
tr_skills.classList.add("skills");
tbLeft.appendChild(tr_skills);

const td_skills = document.createElement("td");
tr_skills.appendChild(td_skills);

const skill_icon = document.createElement("span");
skill_icon.classList.add("material-icons");
skill_icon.innerText = "sports_soccer";
td_skills.appendChild(skill_icon);

const skill_name = document.createElement("b");
skill_name.style.setProperty("font-size", "17px");
skill_name.innerText = "SKILLS AND INTERESTS";
td_skills.appendChild(skill_name);

const skills_p = document.createElement("p");
td_skills.appendChild(skills_p);

const JS_span = document.createElement("span");
JS_span.classList.add("tab2");
const JS_b = document.createElement("b");
JS_span.appendChild(JS_b);
JS_b.innerText = "JavaScript";
skills_p.appendChild(JS_span);

const grad1 = document.createElement("span");
grad1.classList.add("grad1");
grad1.style.setProperty("margin-left", "5%");
grad1.style.setProperty("width", "180px");
skills_p.appendChild(grad1);

const br3 = document.createElement("br");
skills_p.appendChild(br3);

const html_span = document.createElement("span");
html_span.classList.add("tab2");
const html_b = document.createElement("b");
html_span.appendChild(html_b);
html_b.innerText = "HTML";
skills_p.appendChild(html_span);

const grad2 = document.createElement("span");
grad2.classList.add("grad1");
grad2.style.setProperty("margin-left", "9.5%");
grad2.style.setProperty("width", "200px");
skills_p.appendChild(grad2);

const br4 = document.createElement("br");
skills_p.appendChild(br4);

const css_span = document.createElement("span");
css_span.classList.add("tab2");
const css_b = document.createElement("b");
css_span.appendChild(css_b);
css_b.innerText = "CSS";
skills_p.appendChild(css_span);

const grad3 = document.createElement("span");
grad3.classList.add("grad1");
grad3.style.setProperty("margin-left", "12.5%");
grad3.style.setProperty("width", "160px");
skills_p.appendChild(grad3);

const br5 = document.createElement("br");
skills_p.appendChild(br5);

const c_span = document.createElement("span");
c_span.classList.add("tab2");
const c_b = document.createElement("b");
c_span.appendChild(c_b);
c_b.innerText = "C";
skills_p.appendChild(c_span);

const grad6 = document.createElement("span");
grad6.classList.add("grad1");
grad6.style.setProperty("margin-left", "15.5%");
grad6.style.setProperty("width", "150px");
skills_p.appendChild(grad6);

const br8 = document.createElement("br");
skills_p.appendChild(br8);

const tr_projects = document.createElement("tr");
tr_projects.classList.add("projects");
tbLeft.appendChild(tr_projects);

const td_projects = document.createElement("td");
tr_projects.appendChild(td_projects);

const constr_icon = document.createElement("span");
constr_icon.classList.add("material-icons");
constr_icon.innerText = "construction";
td_projects.appendChild(constr_icon);

const projects_name = document.createElement("b");
profile_name.style.setProperty("font-size", "17px");
projects_name.innerText = "PROJECTS";
td_projects.appendChild(projects_name);

const proj_p_1 = document.createElement("p");
proj_p_1.classList.add("tab2");
const proj_b_1 = document.createElement("b");
proj_b_1.innerText = "Telephone communication system";
proj_p_1.appendChild(proj_b_1);
td_projects.appendChild(proj_p_1);

const proj_p_2 = document.createElement("p");
proj_p_2.classList.add("tab3");
proj_p_2.innerText =
  "-The language used in making of this program is C++.Aim of the project was clean and systematic management of details corresponding to a particular telephone number";
td_projects.appendChild(proj_p_2);

const proj_p_3 = document.createElement("p");
proj_p_3.classList.add("tab3");
proj_p_3.innerText =
  "-this program can store ‘n’ number of telephone numbers with the details of the person to whom that number belongs. All the details stored are editable and can be removed permanently. This program provides great flexibility in its usage";
td_projects.appendChild(proj_p_3);

const br10 = document.createElement("br");
td_projects.appendChild(br10);

const proj_p_6 = document.createElement("p");
proj_p_6.classList.add("tab2");
const proj_b_2 = document.createElement("b");
proj_b_2.innerText = "Game Development in UNITY game engin";
proj_p_6.appendChild(proj_b_2);
td_projects.appendChild(proj_p_6);

const proj_p_8 = document.createElement("p");
proj_p_8.classList.add("tab3");
proj_p_8.innerText =
  "-The languages used in the making of this game are JAVA ,C#,JAVAscript  Aim of the project was to establish a base for my future projects and polishing my";
td_projects.appendChild(proj_p_8);

const proj_p_9 = document.createElement("p");
proj_p_9.classList.add("tab3");
proj_p_9.innerText =
  "-The game was a high graphics First Person Shooting game where the role of the protagonist was to save his family’s and his own life in the end.";
td_projects.appendChild(proj_p_9);

const tdRight = document.createElement("td");
tdRight.classList.add("tdRight");
tr_1_tb1.appendChild(tdRight);

const tbRight = document.createElement("table");
tbRight.classList.add("tbRight");
tdRight.append(tbRight);

const tr_workex = document.createElement("tr");
tr_workex.classList.add("workEx");
tbRight.appendChild(tr_workex);

const td_workex = document.createElement("td");
tr_workex.appendChild(td_workex);

const business_icon = document.createElement("span");
business_icon.classList.add("material-icons");
business_icon.innerText = "business_center";
td_workex.appendChild(business_icon);

const work_name = document.createElement("b");
work_name.style.setProperty("font-size", "17px");
work_name.innerText = "Areas of responsibility";
td_workex.appendChild(work_name);

const work_p_1 = document.createElement("p");
work_p_1.classList.add("tab2");
const work_b_1 = document.createElement("b");
work_b_1.innerText =
  "Chief Secretary Information Technology Council (2018-2019)";
work_p_1.appendChild(work_b_1);
td_workex.appendChild(work_p_1);

const work_p_2 = document.createElement("p");
work_p_2.classList.add("tab3");
work_p_2.innerText =
  "- Head of Photography Club (2018-2019)";
td_workex.appendChild(work_p_2);

const work_p_3 = document.createElement("p");
work_p_3.classList.add("tab3");
work_p_3.innerText = "- Responsible for the conduction of preliminary round of online cryptic hunt Decryptonite (2018-2019)";
td_workex.appendChild(work_p_3);

const work_p_4 = document.createElement("p");
work_p_4.classList.add("tab3");
work_p_4.innerText =
  "- Covered National Athletics Meet and Indian Air Force Jet simulation program in “1” day and a seminar on “Swach Ganga Abhiyan lead by respected Bachendri Pal as a Photographer ";
td_workex.appendChild(work_p_4);


const work_p_6 = document.createElement("p");
work_p_6.classList.add("tab3");
work_p_6.innerText =
  "- Co-owned the development and delivery of the last project I worked on.";
td_workex.appendChild(work_p_6);


const work_p_12 = document.createElement("p");
work_p_12.classList.add("tab3");
work_p_12.innerText = "- Worked on API testing using Postman and Charles.";
td_workex.appendChild(work_p_12);

const tr_lead = document.createElement("tr");
tr_lead.classList.add("leadership");
tbRight.appendChild(tr_lead);

const td_lead = document.createElement("td");
tr_lead.appendChild(td_lead);

const psy_icon = document.createElement("span");
psy_icon.classList.add("material-icons");
psy_icon.innerText = "psychology";
td_lead.appendChild(psy_icon);

const leader_name = document.createElement("b");
leader_name.style.setProperty("font-size", "17px");
leader_name.innerText = "LEADERSHIP AND EXTRACURRICULAR";
td_lead.appendChild(leader_name);

const lead_p_11 = document.createElement("p");
lead_p_11.classList.add("tab2");
const lead_b_11 = document.createElement("b");
lead_b_11.innerText =
  " Mr. North India 2K19 finalist by JB Film Production (2019)";
lead_p_11.appendChild(lead_b_11);
td_lead.appendChild(lead_p_11);

const lead_p_12 = document.createElement("p");
lead_p_12.classList.add("tab3");
lead_p_12.innerText = "-   Titled as “The Shutter Bug of DPS Ranipur” by the principal (2018-2019).";
td_lead.appendChild(work_p_12);

const lead_p_21 = document.createElement("p");
lead_p_21.classList.add("tab2");
const lead_b_21 = document.createElement("b");
lead_b_21.innerText =
  "Secured 3rd position in National Inter DPS Film Making competition (2018-2019)";
lead_p_21.appendChild(lead_b_21);
td_lead.appendChild(lead_p_21);

const lead_p_22 = document.createElement("p");
lead_p_22.classList.add("tab3");
lead_p_22.innerText =
  "-Secured 3rd position in Decryptonite (2018-2019)";
td_lead.appendChild(lead_p_22);

const lead_p_31 = document.createElement("p");
lead_p_31.classList.add("tab2");
const lead_b_31 = document.createElement("b");
lead_b_31.innerText = "- Secured 3rd position in Inter School high jump competition (2016-2017)";
lead_p_31.appendChild(lead_b_31);
td_lead.appendChild(lead_p_31);

const lead_p_32 = document.createElement("p");
lead_p_32.classList.add("tab3");
lead_p_32.innerText =
  "-  Participated in national Table Tennis competition held  at DPS Navi Mumbai (2016-2017)";
td_lead.appendChild(lead_p_32);

const lead_p_41 = document.createElement("p");
lead_p_41.classList.add("tab2");
const lead_b_41 = document.createElement("b");
lead_b_41.innerText = "- Participated in Photography Workshop by Canon (2016-2017, 2018-2019)";
lead_p_41.appendChild(lead_b_41);
td_lead.appendChild(lead_p_41);

const lead_p_42 = document.createElement("p");
lead_p_42.classList.add("tab3");
lead_p_42.innerText =
  "- Visited communities, conducted surveys and helped in research for our projects.";
td_lead.appendChild(lead_p_42);

const lead_p_51 = document.createElement("p");
lead_p_51.classList.add("tab2");
const lead_b_51 = document.createElement("b");
lead_b_51.innerText = "-participated in CodeREd (2016-2017)";
lead_p_51.appendChild(lead_b_51);
td_lead.appendChild(lead_p_51);

const lead_p_52 = document.createElement("p");
lead_p_52.classList.add("tab3");
lead_p_52.innerText =
  "- Hosted, coordinated and publicized the event at the cultural fest.";
td_lead.appendChild(lead_p_52);